"use client";
import Image from "next/image";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const Footer: React.FC = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // smooth scrolling
    });
  };

  return (
    <div className="bg-[#081017] py-12 px-5 sm:px-14 text-white">
      <div className="flex justify-between lg:flex-row flex-col">
        <div className="lg:max-w-1/5 flex flex-col gap-3">
          <Image
            src="/navbar/Frame.svg"
            alt="Navbar frame"
            width={130}
            height={45}
            unoptimized
          />
          <div className="text-gray-400 text-[14px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </div>
          <div className="flex gap-3 lg:flex-col">
            <div className="text-gray-200">+44 (0) 207 112 8101</div>
            <div className="text-gray-200">booking@roldrive.com</div>
          </div>
          <div className="flex gap-3">
            <Image
              className="cursor-pointer hover:scale-110 transition ease-in-out duration-300"
              src="/footer/facebook.svg"
              alt="Icon"
              width={24}
              height={45}
              unoptimized
            />
            <Image
              className="cursor-pointer hover:scale-110 transition ease-in-out duration-300"
              src="/footer/x.svg"
              alt="Icon"
              width={24}
              height={45}
              unoptimized
            />
            <Image
              className="cursor-pointer hover:scale-110 transition ease-in-out duration-300"
              src="/footer/instagram.svg"
              alt="Icon"
              width={24}
              height={45}
              unoptimized
            />
            <Image
              className="cursor-pointer hover:scale-110 transition ease-in-out duration-300"
              src="/footer/pinterest.svg"
              alt="Icon"
              width={24}
              height={45}
              unoptimized
            />
            <Image
              className="cursor-pointer hover:scale-110 transition ease-in-out duration-300"
              src="/footer/linkedin.svg"
              alt="Icon"
              width={24}
              height={45}
              unoptimized
            />
          </div>
        </div>

        <div className="lg:hidden h-px bg-gray-500 my-5"></div>

        <div className="flex-1 flex">
          <div className="flex w-full justify-around">
            <div className="flex flex-col gap-1.5">
              <div className="font-bold">Fleet</div>
              <div className=" hover:text-gray-400 cursor-pointer transition ease-in-out duration-300">
                Business
              </div>
              <div className=" hover:text-gray-400 cursor-pointer transition ease-in-out duration-300">
                First
              </div>
              <div className=" hover:text-gray-400 cursor-pointer transition ease-in-out duration-300">
                Luxury
              </div>
              <div className=" hover:text-gray-400 cursor-pointer transition ease-in-out duration-300">
                Electric
              </div>
              <div className=" hover:text-gray-400 cursor-pointer transition ease-in-out duration-300">
                SUV
              </div>
              <div className=" hover:text-gray-400 cursor-pointer transition ease-in-out duration-300">
                MVP
              </div>
              <div className=" hover:text-gray-400 cursor-pointer transition ease-in-out duration-300">
                Sprinter
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="font-bold">Services</div>
              <div className=" hover:text-gray-400 cursor-pointer transition ease-in-out duration-300">
                Airport Transfers
              </div>
              <div className=" hover:text-gray-400 cursor-pointer transition ease-in-out duration-300">
                Road Shows
              </div>
              <div className=" hover:text-gray-400 cursor-pointer transition ease-in-out duration-300">
                Intercity Transfers
              </div>
              <div className=" hover:text-gray-400 cursor-pointer transition ease-in-out duration-300">
                Event Transfers
              </div>
              <div className=" hover:text-gray-400 cursor-pointer transition ease-in-out duration-300">
                All Services
              </div>
            </div>
            <div className="lg:hidden hidden sm:flex flex-col gap-1.5">
              <div className="font-bold">Top Cities</div>
              <div className=" hover:text-gray-400 cursor-pointer transition ease-in-out duration-300">
                London
              </div>
              <div className=" hover:text-gray-400 cursor-pointer transition ease-in-out duration-300">
                Paris
              </div>
              <div className=" hover:text-gray-400 cursor-pointer transition ease-in-out duration-300">
                New York
              </div>
              <div className=" hover:text-gray-400 cursor-pointer transition ease-in-out duration-300">
                Dubai
              </div>
              <div className=" hover:text-gray-400 cursor-pointer transition ease-in-out duration-300">
                Tokyo
              </div>
            </div>
            <div className="lg:hidden hidden sm:flex flex-col gap-1.5">
              <div className="font-bold hover:text-gray-400 cursor-pointer transition ease-in-out duration-300">
                FAQ
              </div>
              <div className="font-bold hover:text-gray-400 cursor-pointer transition ease-in-out duration-300">
                Blogs
              </div>
              <div className="font-bold hover:text-gray-400 cursor-pointer transition ease-in-out duration-300">
                Career
              </div>
              <div className="font-bold hover:text-gray-400 cursor-pointer transition ease-in-out duration-300">
                About Us
              </div>
              <div className="font-bold text-[#FDC65C] cursor-pointer hover:text-[#8e630d]">
                Become A Supplier
              </div>
            </div>
          </div>
        </div>

        <div className="lg:hidden h-px bg-gray-500 my-5"></div>

        <div className="flex-1 lg:flex sm:hidden">
          <div className="flex w-full justify-around">
            <div className="flex flex-col gap-1.5">
              <div className="font-bold">Top Cities</div>
              <div className=" hover:text-gray-400 cursor-pointer transition ease-in-out duration-300">
                London
              </div>
              <div className=" hover:text-gray-400 cursor-pointer transition ease-in-out duration-300">
                Paris
              </div>
              <div className=" hover:text-gray-400 cursor-pointer transition ease-in-out duration-300">
                New York
              </div>
              <div className=" hover:text-gray-400 cursor-pointer transition ease-in-out duration-300">
                Dubai
              </div>
              <div className=" hover:text-gray-400 cursor-pointer transition ease-in-out duration-300">
                Tokyo
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="font-bold hover:text-gray-400 cursor-pointer transition ease-in-out duration-300">
                FAQ
              </div>
              <div className="font-bold hover:text-gray-400 cursor-pointer transition ease-in-out duration-300">
                Blogs
              </div>
              <div className="font-bold hover:text-gray-400 cursor-pointer transition ease-in-out duration-300">
                Career
              </div>
              <div className="font-bold hover:text-gray-400 cursor-pointer transition ease-in-out duration-300">
                About Us
              </div>
              <div className="font-bold text-[#FDC65C] cursor-pointer hover:text-[#8e630d]">
                Become A Supplier
              </div>
            </div>
          </div>
        </div>

        <div className="h-px bg-gray-500 my-5 sm:hidden"></div>
      </div>

      <div className="mt-8 mb-3 flex gap-2 text-sm sm:text-base sm:gap-3 text-gray-400">
        <span className="hover:text-gray-500 cursor-pointer transition ease-in-out duration-300">
          Privacy Policy
        </span>
        <span className="hover:text-gray-500 cursor-pointer transition ease-in-out duration-300">
          GDPR Policy
        </span>
        <span className="hover:text-gray-500 cursor-pointer transition ease-in-out duration-300">
          Terms & Condition
        </span>
      </div>
      <div className="h-px bg-gray-500 relative">
        <div
          onClick={handleScrollToTop}
          className="absolute bg-white/50 rounded-full -top-8 -right-3 sm:-right-8 hover:scale-110 transition ease-in-out duration-300 cursor-pointer"
        >
          <div className="bg-gray-500 rounded-full p-3 m-3">
            <FaArrowUpLong />
          </div>
        </div>
      </div>
      <div className="mt-3 mb-8 flex gap-3 text-gray-400 text-sm sm:text-base">
        Copyright ©2024 - RolDrive. All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
