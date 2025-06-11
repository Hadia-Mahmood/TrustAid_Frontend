
"use client";
import Image from "next/image";
import { useGetWasteCollectionBySubdivision } from "../../../hooks/districtAdmin-hook";
import { useStateContext } from "@/app/StateContext";

const TableOne = () => {
  const { user } = useStateContext();
  const districtAdmin = user?.userId;
  const { data, isLoading, error } =
    useGetWasteCollectionBySubdivision(districtAdmin);
  console.log("2nd API");
  console.log(data);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="rounded-sm border  bg-white px-5 pt-6 pb-2  sm:px-7 xl:pb-1 font-poppins">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Top Areas
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-4">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Subdivision
            </h5>
          </div>
          {/* <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Population
            </h5>
          </div> */}
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Waste Generated
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Incentives
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Recycling
            </h5>
          </div>
        </div>

        {data &&
          data.map((entry, key) => (
            <div
              className={`grid grid-cols-3 sm:grid-cols-4 ${
                key === data.length - 1 ? "" : "border-b  "
              }`}
              key={key}
            >
              <div className="flex items-center gap-3 p-2 xl:p-5"> 

                <p className="hidden text-black dark:text-white sm:block">
                  {entry.subdivision}
                </p>
              </div>
              {/* 
            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{entry.subdivision}K</p>
            </div> */}

              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-meta-3">{entry.totalAmount}</p>
              </div>

              <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                <p className="text-black dark:text-white">
                  {entry.tokenBalance}
                </p>
              </div>

              <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                <p className="text-meta-5">{entry.recyclablePercentage}%</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TableOne;
