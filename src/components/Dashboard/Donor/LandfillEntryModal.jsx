import React from "react";
import Modal from "../Modal";
import { IoIosArrowRoundForward } from "react-icons/io";
import Input from "@/components/CC/Input";
import TextArea from "@/components/CC/TextArea";

const LandfillEntryModal = ({ setOpenLandfillEntryModal }) => {
  return (
    <Modal onClose={setOpenLandfillEntryModal}>
      <div
        style={{
          boxShadow:
            "0px 4px 4px 0px rgba(0, 0, 0, 0.25), 2px 3px 21.2px 0px rgba(0, 0, 0, 0.25)",
        }}
        className=" h-[90vh] overflow-y-auto p-4 sm:p-5 md:p-10 bg-[#fff] rounded-md  border-2 border-[#000] font-urbanist w-[97%] sm:w-[65%] md:w-[55%] lg:w-[80%] mx-auto"
      >
        <h1 className="font-bold text-3xl">Review Incentive</h1>
        <p className="text-sm mt-3 leading-6 text-[#62706b]">
          Please complete the form below, to request a quote, and we’ll be in
          touch. Or you can call us and our specialists will provide help!
        </p>
        <form className="w-full mt-10 ">
          <div className="grid grid-cols-2 gap-5">
            <Input
              label="District"
              type="text"
              placeholder="Please write you details"
            />
            <Input
              label="Area"
              type="text"
              placeholder="Please write you details"
            />
            <Input
              label="Response"
              type="text"
              placeholder="Please write you details"
            />
            <Input
              label="Date"
              type="text"
              placeholder="Please write you details"
            />
          </div>

          <TextArea
            // value={textValue}
            // onChange={handleTextChange}
            placeholder="Enter your text here..."
            rows={6}
            label="Description"
          />
          <TextArea
            // value={textValue}
            // onChange={handleTextChange}
            placeholder="Enter your text here..."
            rows={6}
            label="Optional"
          />

          <button
            type="submit"
            className="mt-6 w-full flex justify-center items-center font-semibold text-sm gap-3 bg-[#20332c] transition duration-500 ease-in-out hover:bg-[#257830] text-[#fff] hover:text-[#fff] outline-none border-0 px-7 py-5 rounded-sm"
          >
            Send Tokens
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

export default LandfillEntryModal;
