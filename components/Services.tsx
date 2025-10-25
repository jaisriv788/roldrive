import Image from "next/image";
import React from "react";

const Data = [
  {
    src: "/services/img1.svg",
    title: "Airport Transfers",
    content:
      "afhgoauehfgoangouaehflaueh laenfg aoufhaeiufua ifyh iafhai fiu fiuea",
  },
  {
    src: "/services/img2.svg",
    title: "Corporate Travel",
    content:
      "afhgoauehfgoangouaehflaueh laenfg aoufhaeiufua ifyh iafhai fiu fiuea",
  },
  {
    src: "/services/img3.svg",
    title: "Event & VIP Transport",
    content:
      "afhgoauehfgoangouaehflaueh laenfg aoufhaeiufua ifyh iafhai fiu fiuea",
  },
  {
    src: "/services/img4.svg",
    title: "Flexible Hourly & Day Hire",
    content:
      "afhgoauehfgoangouaehflaueh laenfg aoufhaeiufua ifyh iafhai fiu fiuea",
  },
  {
    src: "/services/img5.svg",
    title: "Private Sightseeing & Tours",
    content:
      "afhgoauehfgoangouaehflaueh laenfg aoufhaeiufua ifyh iafhai fiu fiuea",
  },
  {
    src: "/services/img6.svg",
    title: "Cruise Port Transfers",
    content:
      "afhgoauehfgoangouaehflaueh laenfg aoufhaeiufua ifyh iafhai fiu fiuea",
  },
];
export const Services: React.FC = () => {
  return (
    <div className="bg-[#081017] min-h-full py-15 px-5 lg:px-20 text-white">
      <div>
        <div className="text-center text-4xl font-bold mb-2">
          <span className="text-[#FDC65C]">London</span> Chauffeur Service
        </div>
        <div className="text-center text-sm text-gray-300">
          Experience a seamless London chauffeur service with professional
          drivers, luxury vehicles, and fully personalised
          <br className="hidden lg:block" />
          travel for airport journeys, business schedules, VIP events, tours,
          and more.
        </div>
      </div>
      <div className="flex mx-auto w-fit gap-3 flex-wrap justify-center mt-9">
        {Data.map((item, index) => {
          return (
            <div key={index} className="relative cursor-pointer group">
              <Image
                src={item.src}
                width={200}
                height={150}
                alt={item.title}
                className="transition-transform duration-500 group-hover:scale-105"
              />

              {/* Title slides up */}
              <div
                className="absolute bottom-2 left-2 font-bold text-lg text-white 
    transition-all duration-500 group-hover:bottom-18"
              >
                {item.title}
              </div>

              {/* Content appears from below */}
              <div
                className="absolute bottom-0 left-2 right-2 text-gray-200 text-sm opacity-0 
    translate-y-6 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0"
              >
                {item.content}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
