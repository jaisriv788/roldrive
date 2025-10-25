import Image from "next/image";
import React from "react";
import { IoMdTime } from "react-icons/io";
import { TbRoute } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";
import { FaEquals } from "react-icons/fa";
import { GoPlusCircle } from "react-icons/go";

export const LastPage: React.FC = () => {
  return (
    <div
      className="
    min-h-screen relative z-0 bg-cover bg-center 
    bg-[url('/bg3.svg')]
    shadow-[inset_0_200px_1700px_#081017,inset_0_-200px_170px_#081017]
  "
    >
      <div className="absolute z-20 top-1/10 lg:top-1/5  lg:mx-10 xl:mx-20 text-white flex lg:flex-row flex-col gap-5 justify-between inset-x-0">
        <div>
          <div className="text-3xl sm:text-5xl text-center lg:text-left font-bold ">
            Book Your London
            <br className="hidden lg:block" />
            <span className="text-[#FDC65C]">Chauffeur Today</span>
          </div>
          <div className="mt-5 text-xs sm:text-base text-center lg:text-left ">
            Professional chauffeurs, luxury vehicles and all-inclusive pricing.
            Complimentary <br className="hidden sm:block" /> airport waiting,
            real-time flight monitoring & 24/7 support.
          </div>
          <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-5 mt-5 sm:mt-3 lg:mt-8 font-semibold">
            <div className="flex gap-1 sm:gap-2 text-sm sm:text-base">
              <Image
                src="/hero/call.svg"
                width={24}
                height={24}
                alt="Call"
                className="w-3 sm:w-6"
              />
              +44 204 592 0966
            </div>
            <div className="flex gap-1 sm:gap-2 text-sm sm:text-base">
              <Image
                src="/hero/email.svg"
                width={24}
                height={24}
                alt="email"
                className="w-3 sm:w-6"
              />
              booking@roldrive.com
            </div>
            <Image
              src="/hero/whatsapp.svg"
              width={40}
              height={40}
              alt="whatsapp"
            />
          </div>
          <div className="h-px border-[0.5px] border-dashed boder-d my-3 border-gray-400"></div>
          <div>
            <div className="text-[#FDC65C] italic text-center lg:text-left font-semibold">
              Trusted by leading Companies
            </div>
            <div className="flex gap-3 mt-3 lg:flex-nowrap flex-wrap lg:justify-start justify-center">
              <Image src="/goldman.svg" width={60} height={10} alt="goldman" />
              <Image src="/kpmg.svg" width={60} height={10} alt="kpmg" />
              <Image src="/deloitte.svg" width={60} height={10} alt="deloitte" />
              <Image src="/amazon.svg" width={60} height={10} alt="amazon" />
              <Image src="/google.svg" width={60} height={10} alt="google" />
              <Image src="/microsoft.svg" width={60} height={10} alt="microsoft" />
              <Image src="/barclays.svg" width={60} height={10} alt="barclay" />
            </div>
          </div>
        </div>
        <div className="self-center min-w-fit lg:self-start w-11/12 lg:w-2/6 backdrop-blur-2xl rounded-lg px-3 py-2 bg-gray-800/40 border border-gray-700">
          <div className="flex gap-3">
            <div className="bg-[#223544] flex items-center justify-center gap-2 flex-1 py-1 text-center rounded-full cursor-pointer lg:mt-7 border border-gray-600">
              <TbRoute />
              Transfer
            </div>
            <div className="bg-[#223544]/40 flex-1 flex items-center justify-center gap-2 py-1 text-center text-gray-400 cursor-pointer rounded-full lg:mt-7 border border-gray-600">
              <IoMdTime /> Hourly
            </div>
          </div>
          <div className="flex  gap-3 lg:flex-col">
            <div className="mt-3 flex-1">
              <label className="flex flex-col gap-1 text-sm font-medium ">
                Pick Up
                <div className="bg-[#223544] flex items-center px-5 rounded-lg  border border-gray-500 ">
                  <FaLocationDot className="text-gray-400" />
                  <input
                    type="text"
                    placeholder="Enter Pick Up Location"
                    className=" px-3 py-3 w-full rounded-md focus:outline-none"
                  />
                  <FaEquals className="text-gray-400" />
                </div>
              </label>
            </div>
            <div className="mt-3 flex-1">
              <label className="flex flex-col gap-1 text-sm font-medium ">
                Drop Off
                <div className="bg-[#223544] flex items-center px-5 rounded-lg  border border-gray-500 ">
                  <FaLocationDot className="text-gray-400" />
                  <input
                    type="text"
                    placeholder="Enter Drop Off Location"
                    className=" px-3 py-3 w-full rounded-md focus:outline-none"
                  />
                  <FaEquals className="text-gray-400" />
                </div>
              </label>
            </div>
          </div>

          <div className="flex gap-1 items-center text-sm text-[#FDC65C] cursor-pointer">
            <GoPlusCircle /> Add Stop
          </div>
          <div className="mt-3 flex gap-2">
            <label className="flex-1 flex flex-col gap-1 text-sm font-medium ">
              Date
              <div className="bg-[#223544] flex items-center px-5 rounded-lg  border border-gray-500 ">
                <input
                  type="date"
                  placeholder="Pick Up Date"
                  className=" px-3 py-3 w-full rounded-md focus:outline-none"
                />
              </div>
            </label>
            <label className="flex-1 flex flex-col gap-1 text-sm font-medium ">
              Time
              <div className="bg-[#223544] flex items-center px-5 rounded-lg  border border-gray-500 ">
                <input
                  type="time"
                  placeholder="Pick Up Time"
                  className=" px-3 py-3 w-full rounded-md focus:outline-none"
                />
              </div>
            </label>
          </div>
          <div className="h-0.5 bg-gray-500 my-1 sm:my-5"></div>
          <div className="flex gap-1 items-center text-sm text-[#FDC65C] cursor-pointer">
            <GoPlusCircle /> Add Return Journey
          </div>
          <div className="flex gap-3 mt-3 lg:mb-7 ">
            <button className="flex-1 bg-[#FF5302] cursor-pointer py-2 rounded-sm">
              Calculate Price
            </button>
            <button className="flex-1 border cursor-pointer py-2 rounded-sm flex gap-2 items-center justify-center">
              <Image
                src="/navbar/whatsapp.svg"
                alt="Navbar frame"
                width={20}
                height={20}
              />{" "}
              Chat On Whatsapp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
