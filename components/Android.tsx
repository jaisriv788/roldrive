import Image from "next/image";
import React from "react";
import { GoDotFill } from "react-icons/go";

export const Android: React.FC = () => {
  return (
    <div className="min-h-full py-15 px-5 lg:px-20 bg-[#081017] text-white">
      <div className="bg-[#20313F] py-5 px-14 rounded-lg flex">
        <div className="xl:max-w-1/2">
          <div className="text-3xl font-bold">
            Luxury Chauffeurs, On
            <br className="hidden lg:block" />
            Demand — Anytime, Anywhere
          </div>
          <div className="text-sm mt-3">
            Book, manage and track your chauffeur with ease using the RolDrive
            mobile app.
            <br className="hidden lg:block" />
            Stay in control of your journeys with instant notifications, live
            updates and 24/7
            <br className="hidden lg:block" />
            availability.
          </div>
          <div className="mt-5 grid sm:grid-cols-2">
            <div className="flex items-center gap-2">
              <GoDotFill className="text-[#FDC65C]" /> Manage bookings on the go
            </div>
            <div className="flex items-center gap-2">
              <GoDotFill className="text-[#FDC65C]" /> Live chauffeur and flight
              tracking
            </div>
            <div className="flex items-center gap-2">
              <GoDotFill className="text-[#FDC65C]" /> Secure in-app payments
            </div>
          </div>
          <div className="flex gap-3 mt-5">
            <Image
              src="/application/google.svg"
              width={170}
              height={100}
              alt="app"
            />
            <Image
              src="/application/apple.svg"
              width={170}
              height={100}
              alt="app"
            />
          </div>
        </div>
        <div className="relative flex-1 xl:flex justify-center hidden ">
          {/* Phone Image */}
          <Image
            className="absolute bottom-0"
            src="/application/phone.svg"
            width={300}
            height={100}
            alt="app"
          />

          {/* Dots Wrapper */}
          <div className="absolute bottom-5 right-1/12 2xl:right-1/4 flex flex-col ">
            <Image
              className="relative xl:translate-x-17 xl:translate-y-0"
              src="/application/dots.svg"
              width={70}
              height={70}
              alt="dots"
            />
            <Image
              className="relative xl:translate-x-0 xl:-translate-y-1"
              src="/application/dots.svg"
              width={70}
              height={70}
              alt="dots"
            />
          </div>
          <div className="2xl:block hidden">
            <Image
              className="absolute left-[20%] bottom-[0%]"
              src="/application/arrow.svg"
              width={150}
              height={70}
              alt="dots"
            />
            <span className="text-[#FDC65C] absolute bottom-[5%] left-[15%]">Download Now</span>
          </div>
        </div>
      </div>
    </div>
  );
};
