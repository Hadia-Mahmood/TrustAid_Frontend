"use client";

import React, { useState } from "react";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Pagination from "../Pagination";
import usePagination from "@/utils/usePagination";
import { useGetComplaintsInDistrict } from "../../../hooks/complain-hook";
import DataLoader from "@/components/Shared/DataLoader";
import ViewUserComplaintsModal from "./ViewUserComplaintsModal";
import { useStateContext } from "@/app/StateContext";
import formatDate from "@/utils/helper";

const UserComplaints = () => {
  const { user } = useStateContext();
  const [viewUserComplainModal, setViewUserComplainModal] = useState(false);
  const paginate = usePagination();

  const district = user?.district;
  const { data, isLoading, isError } = useGetComplaintsInDistrict(district);

  // Check loading and error states
  if (isLoading) {
    return (
      <div className="w-full h-[70vh] flex justify-center items-center">
        <DataLoader />
      </div>
    );
  }

  if (isError) {
    return <div>Error loading complaints</div>;
  }

  const { currentPage, totalPages, visibleItems, goToPage } = paginate(
    data && data?.complaints
  );

  return (
    <div>
      {/* Table */}
      <div className="rounded-sm border border-stroke bg-white shadow-default  font-poppins ">
        <div className="py-4 px-4 md:px-6 xl:px-7.5">
          <h4 className="text-xl font-semibold text-black dark:text-white">
            My Complaints
          </h4>
        </div>

        <div className="grid grid-cols-7 border-t border-stroke py-4 px-4  sm:grid-cols-6 md:px-6 2xl:px-7">
          <div className="col-span-1 flex items-center">
            <p className="font-medium">Image & District</p>
          </div>
          <div className=" hidden items-center sm:flex">
            <p className="font-medium">Area</p>
          </div>
          <div className=" flex items-center col-span-1">
            <p className="font-medium">Description</p>
          </div>
          <div className="col-span-2 flex items-center">
            <p className="font-medium">Response</p>
          </div>
          <div className=" flex items-center">
            <p className="font-medium">Date</p>
          </div>
          {/* <div className=" flex items-center">
            <p className="font-medium">Actions</p>
          </div> */}
        </div>

        {/* Table Body */}
        <div className="h-[55vh] overflow-auto">
          {visibleItems &&
            visibleItems.map((item, key) => (
              <div
                className=" grid grid-cols-7 border-t border-stroke py-2 px-4  sm:grid-cols-6 md:px-6 2xl:px-7"
                key={key}
              >
                <div className="col-span-1 flex items-center">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <div className=" w-20 h-12 rounded-md">
                      <img
                        src={item.image.url}
                        alt="logo"
                        className="w-full h-full rounded-md"
                      />
                    </div>
                    <p className="text-sm text-black dark:text-white">
                      {item?.district}
                    </p>
                  </div>
                </div>
                <div className="hidden items-center sm:flex">
                  <p className="text-sm text-black dark:text-white">
                    {item?.area}
                  </p>
                </div>
                <div className=" flex items-center col-span-1">
                  <p className="text-sm text-black dark:text-white ">
                    {item?.description}
                  </p>
                </div>
                <div className="col-span-2 flex items-center">
                  <p className="text-sm text-black dark:text-white">
                    {item?.response.length > 0 ? (
                      <span>{item?.response[0]?.comments}</span>
                    ) : (
                      <span>No Response Found</span>
                    )}
                  </p>
                </div>
                <div className=" flex items-center">
                  <p className="text-sm text-meta-3">
                    {formatDate(item?.createdAt)}
                  </p>
                </div>
                {/* <div className=" flex justify-start items-center">
                  <button
                    className="text-[15px] bg-[#f29620] py-2 px-2 rounded-md text-[#fff]"
                    onClick={() => setViewUserComplainModal(true)}
                  >
                    View Response
                  </button>
                </div> */}
              </div>
            ))}
        </div>
      </div>
      {/* Pagination */}
      {visibleItems?.length > 5 && (
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={goToPage}
        />
      )}

      {/* Edit Modal */}

      {viewUserComplainModal && (
        <ViewUserComplaintsModal
          setViewUserComplainModal={setViewUserComplainModal}
        />
      )}
    </div>
  );
};

export default UserComplaints;
