import Image from "next/image";
import React from "react";
import { FaAngleDown } from "react-icons/fa6";

export const Testimonial: React.FC = () => {
  return (
    <div className="min-h-full py-15 px-5 lg:px-20 flex justify-between md:flex-row flex-col gap-10">
      <div className="flex items-center">
        <div className="">
          <div className="text-3xl sm:text-5xl text-center lg:text-left font-bold">
            What Our <span className="text-[#FDC65C]">Client Says </span>
          </div>
          <div className="mt-5 text-xs sm:text-sm text-center lg:text-left ">
            Every journey is one-of-a-kind. Be it a corporate roadshow, a VIP
            <br className="hidden lg:block" />
            gathering, or a private tour, we design a customized chauffeur
            <br className="hidden lg:block" />
            experience just for you.
          </div>
          <div className="mt-5 text-xs sm:text-sm text-center lg:text-left">
            <button className="bg-[#FF5302] text-white font-semibold text-lg px-3 py-1 cursor-pointer transition ease-in-out duration-300 hover:bg-[#e06024]">
              Discover More
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex gap-2 border p-2 md:max-w-2xl">
          <div>
            <Image src="/profile.svg" width={50} height={50} alt="profile" />
          </div>
          <div>
            <div className="font-bold text-lg">Mehwish</div>
            <div className="text-sm text-gray-500 mt-3">Content Writer</div>
            <div className="mt-3 text-sm">
              &#34;I recently hired a chauffeur service for a special event, and
              I couldn&#39;t be happier! The driver was punctual, professional,
              and made the ride incredibly comfortable. Highly recommend!&#34;
            </div>
            <div className="mt-3">
              {Array.from({ length: 5 }, (_, i) => i + 1).map((star) => (
                <button
                  key={star}
                  type="button"
                  className={`text-2xl ${
                    5 >= star ? "text-[#FDC65C]" : "text-gray-300"
                  } transition-colors`}
                >
                  ★
                </button>
              ))}{" "}
              5.0/5.0
            </div>
          </div>
        </div>
        <div className="flex gap-2 border p-2 md:max-w-2xl bg-[#F3F4F9] relative">
          <button className="absolute -bottom-4 -right-4 bg-[#f5b22c] hover:bg-[#FDC65C] transition ease-in-out duration-300 text-white rounded-full p-3">
            <FaAngleDown />
          </button>
          <div>
            <Image src="/profile.svg" width={50} height={50} alt="profile" />
          </div>
          <div>
            <div className="font-bold text-lg">Mehwish</div>
            <div className="text-sm text-gray-500 mt-3">Content Writer</div>
            <div className="mt-3 text-sm">
              &#34;I recently hired a chauffeur service for a special event, and
              I couldn&#39;t be happier! The driver was punctual, professional,
              and made the ride incredibly comfortable. Highly recommend!&#34;
            </div>
            <div className="mt-3">
              {Array.from({ length: 5 }, (_, i) => i + 1).map((star) => (
                <button
                  key={star}
                  type="button"
                  className={`text-2xl ${
                    5 >= star ? "text-[#FDC65C]" : "text-gray-300"
                  } transition-colors`}
                >
                  ★
                </button>
              ))}{" "}
              5.0/5.0
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
