"use client";
import Input from "../../CC/Input";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaSpinner } from "react-icons/fa";
import { useState ,useEffect } from "react";
import { useStateContext } from "@/app/StateContext";
import { useGetIncentive, useUpdateIncentive } from "../../../hooks/incentives";
import IncentivesContractInteraction from "@/utils/incentivesContractIntegration";
import { toast } from "react-toastify";

const ClaimIncentivesForm = () => {
  const { user } = useStateContext();
  console.log(user?.subdivison)
  let id = user?.userId;
  const subdivision = user?.subdivison;
  const [incentivesData, setIncentivesData] = useState({
    random: "chandioo",
    subDivision : subdivision
  });
  const { mutate: updateMutate } = useUpdateIncentive(
    JSON.stringify(incentivesData),
    id
  );

  const { data, isError } = useGetIncentive(subdivision);
  console.log("get asdassda")
  console.log({ data });

  const [isLoading, setIsLoading] = useState(false);
  const currentDate = new Date();
  const amount = data?.tokenIncentives?.tokenBalance;



  const currentMonth = currentDate.getMonth() + 1;
  useEffect(() => {
    if (user && user.subdivison) {
      setIncentivesData((prevData) => ({
        ...prevData,
        subDivision: user?.subdivison,
      }));
    }
  }, [user]);
  const handleButtonClick = async () => {
    // event.preventDefault();
    console.log(incentivesData)
    setIsLoading(true);
    try {
      updateMutate(
        {},
        {
          onSuccess: async (response) => {
            console.log(response.data);
          },
          onError: (response) => {
            console.error("An error occurred:");
            console.log(response);
            console.log(response.response.data.message);
          },
        }
      );

      await IncentivesContractInteraction.ClaimTokens(
        subdivision,
        currentMonth,
        amount
      );

      setIsLoading(false);
    } catch (error) {
      toast.error(error.message);
      setIsLoading(false);
      console.log("ERORRRRRRRR AA GAYA", error);
    }
  };

  return (
    <div className=" p-10 font-poppins bg-[#fff] ">
      {data && data.exists ? (
        <h1 className="text-lg ">
          You have already claimed {amount} tokens of your subdivision named{" "}
          {subdivision}
        </h1>
      ) : (
        <h1 className="text-lg ">Please claim tokens of your subdivision</h1>
      )}

      <div className="grid place-items-center ">
        {isLoading ? (
          <button
            type="submit"
            className="mt-6 w-full flex justify-center items-center font-semibold text-sm gap-3 bg-[#20332c] transition duration-500 ease-in-out outline-none border-0 px-7 py-5 rounded-sm"
            disabled
          >
            <FaSpinner className="animate-spin mr-2 text-white" />
            <span className={"text-white"}>Loading...</span>
          </button>
        ) : (
          <button
            className="mt-6 w-full flex justify-center items-center font-semibold text-sm gap-3 bg-[#20332c] transition duration-500 ease-in-out hover:bg-[#257830] text-[#fff] hover:text-[#fff] outline-none border-0 px-7 py-5 rounded-sm"
            onClick={handleButtonClick}
            disabled={data && data.exists} // Disable button if data is truthy
          >
            Claim
            <span className="p-0 rounded-full bg-[#fff] transition duration-500 text-[#20332c]">
              <IoIosArrowRoundForward className="text-[27px] font-bold" />
            </span>{" "}
            <style jsx>{`
              button[disabled] {
                cursor: not-allowed;
                pointer-events: none;
                background-color: #20332c;
                color: #fff;
              }
              button[disabled] span {
                background-color: #fff;
                color: #20332c;
              }
              button:not([disabled]):hover span {
                background-color: #fff;
                color: #257830;
              }
            `}</style>
          </button>
        )}
      </div>
    </div>
  );
};

export default ClaimIncentivesForm;
