import React from "react";
import { FleetCarousel } from "./FleetCarousel";
export const Fleet: React.FC = () => {
  return (
    <div className="min-h-full py-15 px-5 lg:px-20 bg-linear-to-t from-[#081017] via-[#20313F] to-[#081017] text-white">
      <div>
        <div className="text-center text-4xl font-bold mb-2">
          <span className="text-[#FDC65C]">Our Luxury</span> Chauffeur Driven
          Fleet
        </div>
        <div className="text-center text-sm text-gray-300">
          Choose from our selection of premium chauffeur-driven vehicles, ideal
          for airport transfers, corporate travel, events
          <br className="hidden lg:block" />
          and VIP movements across London.
        </div>
      </div>
      <div className="flex mx-auto  gap-3 flex-wrap justify-center mt-9">
        <FleetCarousel />
      </div>
    </div>
  );
};
