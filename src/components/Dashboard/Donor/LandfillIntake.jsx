"use client";
import Input from "@/components/CC/Input";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useStateContext } from "@/app/StateContext";
import { useInputEntry } from "../../../hooks/landfillEntries";
import { FaUpload } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import WasteManagementContractInteraction from "@/utils/wasteMangementContractInteraction";

import { FaSpinner } from "react-icons/fa";

const LandfillIntake = () => {
  const allowedSubDivision = {
    south: ["garden", "liyari", "saddar", "aram bagh", "civil line"],
    east: [
      "gulzar e hijri",
      "jamshed quarters",
      "ferozabad",
      "gulshan e iqbal",
    ],
    west: ["orangi", "mangopir", "mominabad"],
    korangi: ["korangi", "landhi", "model colony", "shah faisal"],
    malir: ["airport", "gadap", "ibrahim hyderi", "murad memon", "shah mureed"],
    central: [
      "gulberg",
      "liaquatabad",
      "new karachi",
      "nazimabad",
      "north nazimabad",
    ],
    keamari: ["baldia", "site", "harbour", "mauripur"],
  };
  const router = useRouter();
  const sourceSubdivisionOptions = ["Division 1", "Division 2", "Division 3"];
  const districtOptions = ["District 1", "District 2", "District 3"];
  const { user } = useStateContext();
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState(null);

  const [data, setData] = useState({
    landfillSite: "",
    quantityReceived: "",
    district: "",
    sourceSubdivision: "",
    area: "",
    image: "",
  });

  const { mutate: addMutate } = useInputEntry(JSON.stringify(data));

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   if (name === "image") {
  //     const reader = new FileReader();

  //     reader.onload = () => {
  //       if (reader.readyState === 2) {
  //         setData({ ...data, [name]: reader.result });
  //       }
  //     };

  //     reader.readAsDataURL(event.target.files[0]);
  //   } else {
  //     setData({ ...data, [name]: value });
  //   }
  // };
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSelectChange = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: name === "quantityReceived" ? Number(value) : value,
    });
  };
  const subDivisions = allowedSubDivision[data.district];

  const handleAvatarChange = (event) => {
    console.log("handleImage");
    const { name, value } = event.target;
    if (name === "image") {
      const reader = new FileReader();

      reader.onload = () => {
        console.log("handleImage22");
        if (reader.readyState === 2) {
          setData({ ...data, [name]: reader.result });
          setImage(reader.result);
        }
      };

      reader.readAsDataURL(event.target.files[0]);
    } else {
      setData({ ...data, [name]: value });
    }
  };

  const removeAvatar = () => {
    setImage(null);
    // Update userData state if necessary
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const date = Date.now();
      const quantityDisposed = data.quantityReceived;
      setIsLoading(true);
      await WasteManagementContractInteraction.RecordLandFillEntry(
        date,
        quantityDisposed,
        data.area,
        data.landfillSite
      );

      // If the transaction is successful, call the addMutate function
      addMutate(
        {},
        {
          onSuccess: (response) => {
            toast.success(response?.data?.message);
            setIsLoading(false);
            router.push("/dashboard/landfill-admin/landfill-entries");
          },
          onError: (response) => {
            toast.error(response.response.data.message);
            setIsLoading(false);
          },
        }
      );
    } catch (error) {
      toast.error(error.message);
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4 sm:p-5 md:p-10 bg-[#fff] rounded-md  font-poppins">
      <h1 className="font-bold text-3xl">Landfill Input</h1>
      <p className="text-sm mt-3 leading-6 text-[#62706b]">
        Please complete the form below to submit landfill intake
      </p>
      <form className="w-full mt-10 " onSubmit={handleSubmit}>
        <div className="my-3">
          {image ? (
            <div className="">
              <div className="w-24 h-24 mx-auto relative">
                <img
                  src={image}
                  alt="Image"
                  className="rounded-full w-full h-full  "
                />
                <button
                  onClick={removeAvatar}
                  className="absolute  top-0 right-0 p-[5px] bg-gray-200 rounded-full"
                >
                  <RxCross1 className="text-[#000] text-[14px] " />
                </button>
              </div>
            </div>
          ) : (
            <label htmlFor="avatar-upload" className="cursor-pointer">
              <div className="w-full h-32 bg-gray-200 rounded-md flex flex-col items-center  justify-center text-gray-700">
                <FaUpload className="text-2xl" />
                <p>Upload image of the waste</p>
                <p className="text-xs mt-2">Click to browse the image</p>
              </div>
            </label>
          )}
          <input
            id="avatar-upload"
            name="image"
            required
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            className="hidden"
          />
        </div>

        <div className="grid grid-cols-2 gap-5">
          {/* <div>
            <label
              htmlFor="district-select"
              className="font-semibold text-sm text-[#202725] mb-1"
            >
              Select Your District
            </label>
            <select
              id="district-select"
              name="district"
              required
              value={data.district}
              onChange={handleSelectChange}
              className="outline-none text-sm  p-4 w-full rounded-md border-2 border-[#d9e4df] "
            >
              <option value="">Select District</option>
              {districtOptions.map((district, index) => (
                <option key={index} value={district}>
                  {district}
                </option>
              ))}
            </select>
          </div> */}
          <Input
            label="Quantity Received"
            type="number"
            require={true}
            placeholder="Please enter quanity received"
            name="quantityReceived"
            onChange={handleInputChange}
            value={data.quantityReceived}
          />
          {/* <div>
            <label
              htmlFor="sourceSubdivision-select"
              className="font-semibold text-sm text-[#202725] mb-1"
            >
              Select Your SubDivision
            </label>
            <select
              id="sourceSubdivision-select"
              name="sourceSubdivision"
              required
              value={data.sourceSubdivision}
              onChange={handleSelectChange}
              className="outline-none text-sm  p-4 w-full rounded-md border-2 border-[#d9e4df] "
            >
              <option value="">Select SubDivision</option>
              {sourceSubdivisionOptions.map((sourceSubdivision, index) => (
                <option key={index} value={sourceSubdivision}>
                  {sourceSubdivision}
                </option>
              ))}
            </select>
          </div> */}
          <Input
            label="Area"
            type="text"
            placeholder="Please enter area"
            name="area"
            onChange={handleInputChange}
            value={data.area}
          />
          <Input
            label="Landfill Site"
            type="text"
            placeholder="Please enter landfill site details"
            name="landfillSite"
            onChange={handleInputChange}
            value={data.landfillSite}
          />
          <div>
            <label
              htmlFor="district-select"
              className="font-semibold text-sm text-[#202725] mb-1"
            >
              Select Your District
            </label>
            {/* <select
              id="district-select"
              name="district"
              required
              value={userData.district}
              onChange={handleSelectChange}
              className="outline-none text-sm  p-4 w-full rounded-md border-2 border-[#d9e4df] "
            >
              <option value="">Select District</option>
              {districtOptions.map((district, index) => (
                <option key={index} value={district}>
                  {district}
                </option>
              ))}
            </select> */}
            <select
              id="district-select"
              name="district"
              required
              value={data.district}
              onChange={handleSelectChange}
              className="outline-none text-sm  p-4 w-full rounded-md border-2 border-[#d9e4df] "
            >
              <option value="">Select District</option>
              {Object.keys(allowedSubDivision).map((district, index) => (
                <option key={index} value={district}>
                  {district}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="district-select"
              className="font-semibold text-sm text-[#202725] mb-1"
            >
              Select Your Sub Division
            </label>
            <select
              id="subDivision-select"
              required
              name="sourceSubdivision"
              value={data.sourceSubdivision}
              onChange={handleSelectChange}
              className="outline-none text-sm  p-4 w-full rounded-md border-2 border-[#d9e4df]"
              disabled={!data.district}
            >
              <option value="">Select SubDivision</option>
              {subDivisions &&
                subDivisions.map((subDivision, index) => (
                  <option key={index} value={subDivision}>
                    {subDivision}
                  </option>
                ))}
            </select>
          </div>
        </div>
        <div className="grid place-items-center mt-6">
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
              type="submit"
              // onClick={resetForm}
              className="mt-6 w-full flex justify-center items-center font-semibold text-sm gap-3 bg-[#20332c] transition duration-500 ease-in-out hover:bg-[#257830] text-[#fff] hover:text-[#fff] outline-none border-0 px-7 py-5 rounded-sm"
            >
              Send Input
              <span className="p-0 rounded-full bg-[#fff] transition duration-500 text-[#20332c]">
                <IoIosArrowRoundForward className="text-[27px] font-bold" />
              </span>{" "}
              <style jsx>{`
                button:hover span {
                  background-color: #fff;
                  color: #257830;
                }
              `}</style>
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default LandfillIntake;
