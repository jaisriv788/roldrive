import { Hero } from "@/components/Hero";
import { LastPage } from "@/components/LastPage";
import { Faq } from "@/components/Faq";
import { Why } from "@/components/Why";
import { OccasionReq } from "@/components/OccasionReq";
import { Quote } from "@/components/Quote";
import { Services } from "@/components/Services";
import { Fleet } from "@/components/Fleet";
import { Testimonial } from "@/components/Testimonial";

function page() {
  return (
    <div className="">
      <Hero />
      <Why />
      <OccasionReq />
      <Services />
      <Fleet />
      <Quote />
      <Testimonial />
      <></>
      <Faq />
      <LastPage />
    </div>
  );
}

export default page;
