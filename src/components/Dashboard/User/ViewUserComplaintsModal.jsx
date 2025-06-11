"use client";
import React, { useState } from "react";
import Modal from "../Modal";
import { useRouter } from "next/navigation";
import { IoIosArrowRoundForward } from "react-icons/io";
import Input from "@/components/CC/Input";
import TextArea from "@/components/CC/TextArea";
import ImageSlider from "../ImageSlider";
import { useAddResponseToComplaint } from "../../../hooks/complain-hook";

const Images = [
  "/home/hero__slider1.jpg",
  "/home/hero__slider1.jpg",
  "/home/hero__slider1.jpg",
  ,
  "/home/hero__slider1.jpg",
  ,
  "/home/hero__slider1.jpg",
];

const ViewUserComplaintsModal = ({ setViewUserComplainModal }) => {
  const router = useRouter();

  const { addResponse, isLoading, isError, error } =
    useAddResponseToComplaint();

  const handleAddResponse = async (complaintId, data) => {
    try {
      const response = await addResponse(complaintId, data);
    } catch (error) {}
  };

  const [info, setInfo] = useState({
    time: "",
    date: "",
    comments: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(name);
    console.log(value);
    setInfo({ ...info, [name]: value });
  };

  return (
    <Modal onClose={setViewUserComplainModal}>
      <div
        style={{
          boxShadow:
            "0px 4px 4px 0px rgba(0, 0, 0, 0.25), 2px 3px 21.2px 0px rgba(0, 0, 0, 0.25)",
        }}
        className=" h-[90vh] overflow-y-auto p-4 sm:p-5 md:p-10 bg-[#fff] rounded-md  border-2 border-[#000] font-urbanist w-[97%] sm:w-[65%] md:w-[55%] lg:w-[80%] mx-auto"
      >
        <h1 className="font-bold text-3xl">Edit Complain</h1>
        <p className="text-sm mt-3 leading-6 text-[#62706b]">
          Please complete the form below, to request a quote, and we’ll be in
          touch. Or you can call us and our specialists will provide help!
        </p>
        <form className="w-full mt-10 " onSubmit={handleAddResponse}>
          <ImageSlider images={Images} />

          <div className="grid grid-cols-2 gap-5">
            <Input
              name="time"
              label="Time"
              type="text"
              value={info.time}
              onChange={handleInputChange}
              placeholder="Please write you details"
            />
            <Input
              name="date"
              label="Date"
              type="text"
              value={info.date}
              onChange={handleInputChange}
              placeholder="Please write you details"
            />
          </div>

          <TextArea
            name="comments"
            onChange={handleInputChange}
            value={info.comments}
            placeholder="Enter your text here..."
            rows={6}
            label="Please write you details"
          />

          <button
            type="submit"
            className="mt-6 w-full flex justify-center items-center font-semibold text-sm gap-3 bg-[#20332c] transition duration-500 ease-in-out hover:bg-[#257830] text-[#fff] hover:text-[#fff] outline-none border-0 px-7 py-5 rounded-sm"
          >
            Add Response
            <span className="p-0 rounded-full bg-[#fff]  transition duration-500 text-[#20332c] ">
              <IoIosArrowRoundForward className="text-[27px] font-bold" />
            </span>{" "}
            <style jsx>{`
              button:hover span {
                background-color: #fff;
                color: #257830;
              }
            `}</style>
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default ViewUserComplaintsModal;
