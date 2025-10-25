import Image from "next/image";
import React from "react";
import { Checkbox } from "@/components/ui/checkbox";

export const OccasionReq: React.FC = () => {
  return (
    <div className="min-h-full flex lg:flex-row flex-col gap-10 justify-between py-15 px-5 lg:px-20 bg-linear-to-t from-[#081017] via-[#20313F] to-[#081017]">
      <div className="flex items-center">
        <div className="text-white">
          <div className="text-3xl sm:text-5xl text-center lg:text-left font-bold">
            <span className="text-[#FDC65C]">Chauffeur </span>
            Driven Cars
            <br className="hidden lg:block" />
            for Any Occasion
          </div>
          <div className="mt-5 text-xs sm:text-sm text-center lg:text-left ">
            Whether it’s an event, corporate travel or a personalised journey,
            we
            <br className="hidden lg:block" />
            provide tailored chauffeur solutions across London. Share your
            <br className="hidden lg:block" />
            requirements and we’ll respond within minutes — our average reply
            <br className="hidden lg:block" />
            time is under 3 minutes — with detailed pricing and a call or email
            back
            <br className="hidden lg:block" />
            to finalise your arrangements.
          </div>
          <div className="mt-5 text-xs sm:text-sm text-center lg:text-left font-bold">
            Seamless, reliable and discreet — every journey handled with
            <br className="hidden lg:block" />
            exceptional care.
          </div>
          <div className="h-px border-[0.5px] border-dashed boder-d my-3 border-gray-400"></div>
          <div>
            <div className="text-[#FDC65C] italic text-center lg:text-left font-semibold">
              Trusted by leading Companies
            </div>
            <div className="flex gap-3 mt-3 lg:flex-nowrap flex-wrap lg:justify-start justify-center">
              <Image src="/goldman.svg" width={60} height={10} alt="goldman" />
              <Image src="/kpmg.svg" width={60} height={10} alt="kpmg" />
              <Image
                src="/deloitte.svg"
                width={60}
                height={10}
                alt="deloitte"
              />
              <Image src="/amazon.svg" width={60} height={10} alt="amazon" />
              <Image src="/google.svg" width={60} height={10} alt="google" />
              <Image
                src="/microsoft.svg"
                width={60}
                height={10}
                alt="microsoft"
              />
              <Image src="/barclays.svg" width={60} height={10} alt="barclay" />
            </div>
          </div>

          <div className="mt-5 flex gap-3 items-center">
            <div>
              <Checkbox
                checked
                className="data-[state=checked]:bg-[#FDC65C] border-[#FDC65C] text-white"
              />
              <span className="ml-2">Call Me</span>
            </div>
            <div>
              <Checkbox className="data-[state=checked]:bg-[#FDC65C] border-[#FDC65C] text-white" />
              <span className="ml-2">Email Me</span>
            </div>
            <div className="h-px bg-gray-500 flex-1"></div>
            <span className="text-sm text-gray-500">Reply within 3minutes</span>
          </div>
        </div>
      </div>

      <div className="px-7 w-fit self-center lg:self-start text-white py-5 backdrop-blur-2xl rounded-lg bg-gray-800/40 border border-gray-700">
        <div className=" text-2xl font-bold text-center">
          Have A<span className="text-[#FDC65C]"> Special</span> Requirement?
        </div>
        <div className="text-xs mt-1 text-gray-300 text-center">
          Every journey is unique. Whether it&#39;s a corporate roadshow, VIP
          event, or private
          <br />
          sightseeing, we create a tailored chauffeur package for you.
        </div>
        <div className="mt-3 flex-1">
          <label className="flex flex-col gap-1 text-sm font-medium ">
            <span className="text-xs text-gray-300">Name</span>
            <div className="bg-[#223544] flex items-center rounded-lg  border border-gray-500 ">
              <input
                type="text"
                placeholder="Enter Your Name"
                className=" px-3 py-3 w-full rounded-md focus:outline-none"
              />
            </div>
          </label>
        </div>
        <div className="mt-3 flex-1">
          <label className="flex flex-col gap-1 text-sm font-medium ">
            <span className="text-xs text-gray-300">Email</span>
            <div className="bg-[#223544] flex items-center rounded-lg  border border-gray-500 ">
              <input
                type="text"
                placeholder="Enter Your Email"
                className=" px-3 py-3 w-full rounded-md focus:outline-none"
              />
            </div>
          </label>
        </div>
        <div className="mt-3 flex-1">
          <label className="flex flex-col gap-1 text-sm font-medium ">
            <span className="text-xs text-gray-300">Phone Number</span>
            <div className="bg-[#223544] flex items-center rounded-lg  border border-gray-500 ">
              <input
                type="text"
                placeholder="Enter Your Number"
                className=" px-3 py-3 w-full rounded-md focus:outline-none"
              />
            </div>
          </label>
        </div>
        <div className="relative mt-6 flex gap-3 items-center">
          <span className="text-xs absolute -top-4 text-gray-300">
            Contacted by
          </span>
          <div>
            <Checkbox
              checked
              className="data-[state=checked]:bg-[#FDC65C] border-[#FDC65C] text-white"
            />
            <span className="ml-1 text-sm">Call Me</span>
          </div>
          <div>
            <Checkbox className="data-[state=checked]:bg-[#FDC65C] border-[#FDC65C] text-white" />
            <span className="ml-1 text-sm">Email Me</span>
          </div>
          <div className="h-px bg-gray-500 flex-1"></div>
          <span className="text-xs text-gray-500">Reply within 3minutes</span>
        </div>
        <div className="mt-3 flex-1">
          <label className="flex flex-col gap-1 text-sm font-medium ">
            <span className="text-xs text-gray-300">
              Provide Your Breif Requirement
            </span>
            <div className="bg-[#223544] flex items-center rounded-lg  border border-gray-500 ">
              <textarea
                placeholder="Describe Your Requirements"
                className=" px-3 py-3 w-full rounded-md focus:outline-none"
              />
            </div>
          </label>
        </div>
        <div className="flex gap-3 mt-3 lg:mb-7 ">
          <button className="flex-1 bg-[#FF5302] cursor-pointer py-2 rounded-sm">
            Submit Requirements
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
  );
};
