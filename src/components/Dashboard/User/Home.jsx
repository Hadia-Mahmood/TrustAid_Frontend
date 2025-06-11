"use client";
import dynamic from "next/dynamic";
import { IoEyeOutline } from "react-icons/io5";
import { CgShoppingCart } from "react-icons/cg";
import { FiShoppingBag } from "react-icons/fi";
import { BsPeople } from "react-icons/bs";
import { useStateContext } from "@/app/StateContext";
import CardDataStats from "./CardDataStats";
import {
  useGetComplaintsSummary,
  useGetTotalWasteReceived,
} from "../../../hooks/districtAdmin-hook"; // Adjust the path as needed

const ChartOne = dynamic(() => import("./ChartOne"), {
  ssr: false,
});

const ChartTwo = dynamic(() => import("./ChartTwo"), {
  ssr: false,
});

const ChartThree = dynamic(() => import("./ChartThree"), {
  ssr: false,
});

import TableOne from "./TableOne";
import ChatCard from "./ChatCard";

export const Home = () => {
  const { user } = useStateContext();
  const district = user?.district;

  const {
    data: complaintData,
    isLoading: complaintLoading,
    error: complaintError,
  } = useGetComplaintsSummary(district);

  const {
    data: wasteData,
    isLoading: wasteLoading,
    error: wasteError,
  } = useGetTotalWasteReceived(district);


  const totalComplaints = complaintData?.totalComplaints || 0;
  const complaintsResolved = complaintData?.validComplaints || 0;
  const totalWasteRecycled = wasteData?.totalWasteReceived || 0;
  const recyclingPercentage = wasteData?.avgRecyclablePercentage || 0;

  if (complaintLoading || wasteLoading) return <div>Loading...</div>;
  if (complaintError || wasteError)
    return <div>Error: {complaintError || wasteError}</div>;

  return (
    <div className="">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7 ">
        <CardDataStats
          title="Total Waste Received"
          total={totalWasteRecycled + " Trucks"}
          rate=""
          levelUp
        >
          <div className="bg-[#eff2f7] p-3 rounded-full">
            <IoEyeOutline className="text-[25px] text-[#5869e4]" />
          </div>
        </CardDataStats>
        <CardDataStats
          title="Recycling Percentage"
          total={`${recyclingPercentage}%`}
          rate=""
          levelUp
        >
          <div className="bg-[#eff2f7] p-3 rounded-full">
            <CgShoppingCart className="text-[25px] text-[#5869e4]" />
          </div>
        </CardDataStats>
        <CardDataStats
          title="Total Complaints"
          total={totalComplaints}
          rate=""
          levelUp
        >
          <div className="bg-[#eff2f7] p-3 rounded-full">
            <FiShoppingBag className="text-[25px] text-[#5869e4]" />
          </div>
        </CardDataStats>
        <CardDataStats
          title="Valid Complaints"
          total={complaintsResolved}
          rate=""
          levelDown
        >
          <div className="bg-[#eff2f7] p-3 rounded-full">
            <BsPeople className="text-[25px] text-[#5869e4]" />
          </div>
        </CardDataStats>
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7 2xl:gap-7">
        <ChartOne />
        <ChartTwo />
        <div className="col-span-12 xl:col-span-12 w-full">
          <ChartThree />
        </div>
        <div className="col-span-12 xl:col-span-8">
          <TableOne />
        </div>
        <ChatCard />
      </div>
    </div>
  );
};
