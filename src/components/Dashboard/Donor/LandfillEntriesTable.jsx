"use client";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Pagination from "../Pagination";
import usePagination from "@/utils/usePagination";
import { useRef, useState } from "react";
import LandfillEntryModal from "./LandfillEntryModal";
import {
  useGetAllLandfillEntries,
  useDeleteLandfillEntry,
} from "@/hooks/landfillEntries";
import DataLoader from "@/components/Shared/DataLoader";
import UploadReportButton from "@/components/Shared/UploadReportButton";

const LandfillEntriesTable = () => {
  const tableRef = useRef();
  const [openLandfillEntryModal, setOpenLandfillEntryModal] = useState(false);
  const { data, isLoading, isError } = useGetAllLandfillEntries();
  const deleteLandfillMutation = useDeleteLandfillEntry();
  const paginate = usePagination();
  const { currentPage, totalPages, visibleItems, goToPage } = paginate(
    data && data?.landfillinputEntries
  );

  if (isLoading) {
    return (
      <div className="w-full h-[70vh] flex justify-center items-center">
        <DataLoader />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-full h-[70vh] flex justify-center items-center">
        Error loading landfill entries
      </div>
    );
  }

  const handleDeleteLandfill = async (id) => {
    try {
      await deleteLandfillMutation.mutateAsync(id);
      toast.success("Landfill entry deleted successfully");
      window.location.reload();
    } catch (error) {
      // Handle error, e.g., display error message
    }
  };

  return (
    <div>
      {/* Table */}
      <div
        ref={tableRef}
        className="rounded-sm border border-stroke bg-white shadow-default  font-popp ins "
      >
        <div className="py-4 px-4 md:px-6 xl:px-7.5 flex justify-between items-center">
          <h4 className="text-xl font-semibold text-black dark:text-white">
            All Landfill Entries
          </h4>
          <UploadReportButton
            tableRef={tableRef}
            reportType="landfillEntries"
          />
        </div>

        <div className="grid grid-cols-6 border-t border-stroke py-4 px-4  sm:grid-cols-5 md:px-6 2xl:px-7">
          <div className="col-span-1 flex items-center">
            <p className="font-medium">Image</p>
          </div>
          <div className=" hidden items-center sm:flex">
            <p className="font-medium">Landfill Site</p>
          </div>
          <div className=" flex items-center col-span-1">
            <p className="font-medium">District</p>
          </div>
          <div className=" flex items-center">
            <p className="font-medium">Quantity (Trucks)</p>
          </div>
          <div className=" flex items-center">
            <p className="font-medium">Area</p>
          </div>
          {/* <div className=" flex items-center">
            <p className="font-medium">Actions</p>
          </div> */}
        </div>

        {/* Table Body */}
        <div className="h-[55vh] overflow-auto">
          {visibleItems.map((product, key) => (
            <div
              className=" grid grid-cols-6 border-t border-stroke py-2 px-4  sm:grid-cols-5 md:px-6 2xl:px-7"
              key={key}
            >
              <div className="col-span-1 flex items-center">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <div className=" w-20 h-12 rounded-md">
                    <img
                      src={product.image.url}
                      alt="logo"
                      className="w-full h-full rounded-md"
                    />
                  </div>
                  {/* <p className="text-sm text-black dark:text-white">
                    {item?.district}
                  </p> */}
                </div>
              </div>
              <div className="col-span-1 flex items-center">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <p className="text-sm text-black dark:text-white">
                    {product.landfillSite}
                  </p>
                </div>
              </div>
              <div className="hidden items-center sm:flex">
                <p className="text-sm text-black dark:text-white">
                  {product.district}
                </p>
              </div>
              <div className=" flex items-center col-span-1">
                <p className="text-sm text-black dark:text-white ">
                  {product.quantityReceived}
                </p>
              </div>
              {/* <div className=" flex items-center">
                <p className="text-sm text-black dark:text-white">
                  {product.sourceSubdivision}
                </p>
              </div> */}
              <div className=" flex items-center">
                <p className="text-sm text-meta-3">{product.area}</p>
              </div>
              {/* <div className=" flex  items-center text-[20px]">
                <MdDelete
                  className="cursor-pointer"
                  onClick={() => handleDeleteLandfill(product._id)}
                />
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

      {/* {openLandfillEntryModal && (
        <LandfillEntryModal
          setOpenLandfillEntryModal={setOpenLandfillEntryModal}
        />
      )} */}
    </div>
  );
};

export default LandfillEntriesTable;
