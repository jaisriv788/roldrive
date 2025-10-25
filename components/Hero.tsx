import Image from "next/image";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { IoMdTime } from "react-icons/io";
import { TbRoute } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";
import { FaEquals } from "react-icons/fa";
import { GoPlusCircle } from "react-icons/go";

export const Hero: React.FC = () => {
  return (
    <div
      className="
    min-h-screen relative z-0 bg-cover bg-center 
    bg-[url('/navbar/bg.svg')]
    shadow-[inset_380px_0_250px_#081017,inset_0_-20px_30px_#081017]
  "
    >
      <div className="absolute z-20 top-1/10 lg:top-1/5  lg:mx-10 xl:mx-20 text-white flex lg:flex-row flex-col gap-5 justify-between inset-x-0">
        <div>
          <div className="text-3xl sm:text-5xl text-center lg:text-left font-bold ">
            <span className="text-[#FDC65C]">Luxury</span> Chauffeur Service in{" "}
            <br className="hidden sm:block" /> London – Airport,{" "}
            <br className="hidden lg:block" />
            Corporate & VIP Travel
          </div>
          <div className="mt-5 text-xs sm:text-base text-center lg:text-left hidden sm:block">
            Professional chauffeurs, luxury vehicles and all-inclusive pricing.
            Complimentary <br className="hidden sm:block" /> airport waiting,
            real-time flight monitoring & 24/7 support.
          </div>
          <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-5 mt-5 sm:mt-3 lg:mt-20 font-semibold">
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
          <div className="flex justify-center lg:justify-start mt-3 lg:mt-18 mx-3 sm:mx-0">
            <Carousel className="w-full max-w-md lg:max-w-sm ">
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1 h-18 bg-black/50 border-t rounded-lg flex gap-2 px-5">
                      <Image
                        src="/hero/google.svg"
                        width={40}
                        height={40}
                        alt="google"
                      />
                      <div className="w-full">
                        <div className="font-semibold">Google Rating</div>
                        <div className="text-lg font-bold flex items-center gap-2">
                          5.0
                          {Array.from({ length: 5 }, (_, i) => i + 1).map(
                            (star) => (
                              <button
                                key={star}
                                type="button"
                                className={`text-2xl ${
                                  5 >= star ? "text-[#FDC65C]" : "text-gray-300"
                                } transition-colors`}
                              >
                                ★
                              </button>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious
                className={`cursor-pointer h-5  w-5 absolute -left-2 disabled:bg-gray-400 disabled:border-gray-400 bg-[#FDC65C] border-[#FDC65C]`}
              />
              <CarouselNext
                className={`cursor-pointer h-5  w-5 absolute -right-2 disabled:bg-gray-400 disabled:border-gray-400 bg-[#FDC65C] border-[#FDC65C]`}
              />
            </Carousel>
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
