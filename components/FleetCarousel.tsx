import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const Data = [
  {
    icon: "/fleet/icon1.svg",
    content: "Wifi Available",
  },
  {
    icon: "/fleet/icon2.svg",
    content: "GPS Tracking",
  },
  {
    icon: "/fleet/icon3.svg",
    content: "Water Available",
  },
  {
    icon: "/fleet/icon4.svg",
    content: "Child Seat Available",
  },
  {
    icon: "/fleet/icon5.svg",
    content: "Max 3",
  },
  {
    icon: "/fleet/icon6.svg",
    content: "Max 2",
  },
];
export const FleetCarousel: React.FC = () => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full "
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="bg-[#081017] text-white border-[#081017]">
                <CardContent className="">
                  <div className="text-center text-xl font-semibold">
                    {index % 2 == 0 ? "Mercedes S Class" : "Mercedes E Class"}
                  </div>
                  <div className="text-center text-sm mt-2">
                    The benchmark for first-class executive travel, offering
                    exceptional comfort and prestige.
                  </div>
                  <div className="bg-black flex justify-center mt-4 py-7 relative">
                    <Image
                      src={`${
                        index % 2 == 0 ? "/fleet/car1.svg" : "/fleet/car2.svg"
                      }`}
                      alt="car"
                      width={300}
                      height={300}
                    />

                    <div className="absolute flex -bottom-18 md:-bottom-10 justify-between w-full ">
                      {Data.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex flex-col items-center w-1/6 text-center"
                        >
                          <Image
                            src={item.icon}
                            width={30}
                            height={30}
                            alt="icon"
                          />
                          <span className="text-[12px] text-center mt-1">
                            {item.content}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-20 md:mt-12 border-2 p-2 rounded-lg border-gray-600 flex flex-col gap-3">
                    <div className="flex justify-between">
                      <div>Heathrow to Central London</div>
                      <div className="text-[#FDC65C]">$ 149.40</div>
                    </div>
                    <hr className="border-gray-400" />
                    <div className="flex justify-between">
                      <div>4 hours hire</div>
                      <div className="text-[#FDC65C]">$ 255.40</div>
                    </div>
                    <hr className="border-gray-400" />
                    <div className="flex justify-between">
                      <div>Round trip</div>
                      <div className="text-[#FDC65C]">$ 220.40</div>
                    </div>
                  </div>
                  <div className="flex justify-between mt-3 px-5">
                    <button className="bg-[#FDC65C] px-5 py-2 rounded-lg cursor-pointer hover:bg-[#fcb529] transition ease-in-out duration-300">
                      Book Now
                    </button>
                    <span className="text-[10px]">prices Subject to VAT</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        className={`cursor-pointer h-10  w-10 absolute -left-4 disabled:bg-gray-400 disabled:border-gray-400 bg-[#FDC65C] border-[#FDC65C]`}
      />
      <CarouselNext
        className={`cursor-pointer h-10  w-10 absolute -right-4 disabled:bg-gray-400 disabled:border-gray-400 bg-[#FDC65C] border-[#FDC65C]`}
      />
    </Carousel>
  );
};
