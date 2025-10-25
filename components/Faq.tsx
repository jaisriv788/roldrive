import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Faq: React.FC = () => {
  return (
    <div className="sm:px-5 lg:px-10 xl:px-20 py-5 lg:py-10">
      <div>
        <div className="text-center text-4xl font-bold mb-2">
          Frequently Asked <span className="text-[#FDC65C]">Questions</span>
        </div>
        <div className="text-center">
          Everything you need to know about our chauffeur service
        </div>
      </div>
      <div className="mt-5">
        <Accordion
          type="single"
          defaultValue="item-1"
          collapsible
          className=" flex flex-col gap-2"
        >
          <AccordionItem value="item-1" className="">
            <AccordionTrigger className="bg-gray-100 rounded-b-none px-3">
              What if my flight is delayed?
            </AccordionTrigger>
            <AccordionContent className="bg-gray-200 rounded-b-lg px-3 py-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="">
            <AccordionTrigger className="bg-gray-100 rounded-b-none px-3">
              How can I book a reliable airport chauffeur service in my city?
            </AccordionTrigger>
            <AccordionContent className="bg-gray-200 rounded-b-lg px-3 py-2">
              Yes. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="">
            <AccordionTrigger className="bg-gray-100 rounded-b-none px-3">
              What are the benefits of booking an airport chauffeur service?{" "}
            </AccordionTrigger>
            <AccordionContent className="bg-gray-200 rounded-b-lg px-3 py-2">
              Yes. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="">
            <AccordionTrigger className="bg-gray-100 rounded-b-none px-3">
              Is an airport chauffeur service more convenient than a regular
              taxi or ride-sharing service?
            </AccordionTrigger>
            <AccordionContent className="bg-gray-200 rounded-b-lg px-3 py-2">
              Yes. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5" className="">
            <AccordionTrigger className="bg-gray-100 rounded-b-none px-3">
              How does an airport chauffeur service ensure timely pickups and
              drop-offs?
            </AccordionTrigger>
            <AccordionContent className="bg-gray-200 rounded-b-lg px-3 py-2">
              Yes. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};
