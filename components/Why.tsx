import Image from "next/image";
import React from "react";

const Data = [
  {
    img: "/why/plane.svg",
    title: "60 minutes free airport wait",
    content: "Complete peace of mind for delayed flights",
  },
  {
    img: "/why/pilot.svg",
    title: "Professional chauffeurs",
    content: "Uniformed, discreet and well-presented",
  },
  {
    img: "/why/dollor.svg",
    title: "All-inclusive pricing",
    content: "No hidden fees, surcharges or surprises",
  },
  {
    img: "/why/car.svg",
    title: "Luxury fleet",
    content: "Hand-picked vehicles for a first-class travel experience",
  },
  {
    img: "/why/connect.svg",
    title: "24/7 support",
    content: "Always available for bookings and assistance",
  },
];
export const Why: React.FC = () => {
  return (
    <div
      className="relative z-0 bg-cover bg-fixed
    bg-[url('/why/car.jpg')] h-150 md:h-100"
    >
      <div className="bg-black/90 absolute z-10 inset-0 flex flex-col py-5">
        <div className="text-white self-center text-4xl font-bold">
          Why Choose <span className="text-[#FDC65C]">RolDrive</span>
        </div>
        <div className="text-white self-center mt-2 text-sm max-w-3xl text-center">
          Choose a premium chauffeur service in London, trusted by corporate
          travellers and VIP clients. From airport transfers to business travel,
          RolDrive delivers a seamless, reliable and comfortable journey every
          time.
        </div>
        <div className="flex justify-evenly my-auto flex-wrap gap-3">
          {Data.map((item, i) => {
            return (
              <div
                key={i}
                className={`text-white text-sm flex flex-col items-center max-w-50 gap-2`}
              >
                <Image src={item.img} width={40} height={20} alt="img" />
                <div className="font-bold text-center">{item.title}</div>
                <div className=" text-center">{item.content}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
