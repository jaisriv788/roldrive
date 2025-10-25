import { Hero } from "@/components/Hero";
import { LastPage } from "@/components/LastPage";
import { Faq } from "@/components/Faq";
import { Why } from "@/components/Why";
import { OccasionReq } from "@/components/OccasionReq";

function page() {
  return (
    <div className="">
      <Hero />
      <Why />
      <OccasionReq />
      <Faq />
      <LastPage />
    </div>
  );
}

export default page;
