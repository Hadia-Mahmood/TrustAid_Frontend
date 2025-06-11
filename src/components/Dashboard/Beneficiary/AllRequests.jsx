
"use client";
import { useState, useEffect } from "react";
import Pagination from "../Pagination";
import usePagination from "@/utils/usePagination";
import { useGetAllApplicationData } from "@/hooks/beneficiary-hook";
import { useStateContext } from "@/app/StateContext";
import Link from "next/link";
import TrustAidContractInteraction from "@/utils/trustAidContractInteraction";


const AllRequests = () => {
  const { user } = useStateContext();
  const [campaignIds, setCampaignIds] = useState([]);
  const [campaignIdsLoading, setCampaignIdsLoading] = useState(false);
  const [campaignIdsError, setCampaignIdsError] = useState(null);
  
  useEffect(() => {
    const fetchCampaignIds = async () => {
      if (user?.ethAddress) {
        try {
          setCampaignIdsLoading(true);
          const ids = await TrustAidContractInteraction.getAllCampaignIds(user.ethAddress);
          setCampaignIds(ids);
          setCampaignIdsLoading(false);
        } catch (error) {
          setCampaignIdsError(error);
          setCampaignIdsLoading(false);
        }
      }
    };

    fetchCampaignIds();
  }, [user?.ethAddress]);

  const paginate = usePagination();
  const {
    data: applicationData,
    isLoading: applicationLoading,
    error: applicationError,
  } = useGetAllApplicationData(user?.userId);

  if (applicationLoading || campaignIdsLoading) return <div>Loading...</div>;
  
  if (applicationError || campaignIdsError) {
    const error = applicationError || campaignIdsError;
    return <div>Error: {error.message}</div>;
  }

  const applications = applicationData?.applications || [];
  
  // Associate each application with its corresponding campaign ID
  const applicationsWithCampaignIds = applications.map((app, index) => ({
    ...app,
    campaignId: campaignIds[index] || null
  }));

  const { currentPage, totalPages, visibleItems, goToPage } = paginate(applicationsWithCampaignIds);

  return (
    <div>
      {/* Table */}
      <div className="rounded-sm border border-stroke bg-white shadow-default font-poppins">
        <div className="py-4 px-4 md:px-6 xl:px-7.5">
          <h4 className="text-xl font-semibold text-black dark:text-white">
            All Requests
          </h4>
        </div>

        <div className="grid grid-cols-6 border-t border-stroke py-4 px-4 sm:grid-cols-6 md:px-6 2xl:px-7">
          <div className="col-span-1 flex items-center">
            <p className="font-medium">Image</p>
          </div>
          <div className="hidden items-center sm:flex">
            <p className="font-medium">Total Amount</p>
          </div>
          <div className="flex items-center col-span-1">
            <p className="font-medium">Status</p>
          </div>
          <div className="flex items-center col-span-2">
            <p className="font-medium">Application Id</p>
          </div>
          <div className="flex items-center">
            <p className="font-medium">View Application</p>
          </div>
        </div>
        {/* Table Body */}
        <div className="h-[55vh] overflow-auto">
          {visibleItems.map((app, key) => (
            <div
              className="grid grid-cols-6 border-t border-stroke py-2 px-4 sm:grid-cols-6 md:px-6 2xl:px-7"
              key={key}
            >
              <div className="col-span-1 flex items-center">
                <img
                  src={app.applicationPicture?.url}
                  alt="Application"
                //   className="w-10 rounded-xl"
                  className="w-14  rounded-xl"
                />
              </div>
              <div className="col-span-1 flex items-center">
                <p className="text-sm text-black dark:text-white">
                  {app.amountRequested}
                </p>
              </div>
              <div className="hidden items-center sm:flex">
                <p className="text-sm text-black dark:text-white">
                  {app.status}
                </p>
              </div>
              <div className="flex items-center col-span-2">
                <p className="text-sm text-black dark:text-white">
                  {app.applicationID}
                </p>
              </div> 
              
              <div className="flex gap-3 justify-start items-center text-[20px]">
                <Link
                  href={`/dashboard/beneficiary/progress-report?applicationId=${app.applicationID}&campaignId=${app.campaignId}`}
                  className="text-sm text-black hover:underline"
                >
                  View
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      {visibleItems.length > 5 && (
        <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={goToPage} />
      )}
    </div>
  );
};

export default AllRequests;