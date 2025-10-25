import { Hero } from "@/components/Hero";
import { LastPage } from "@/components/LastPage";
import { Faq } from "@/components/Faq";
import { Why } from "@/components/Why";

function page() {
  return (
    <div className="">
      <Hero />
      <Why />
      <Faq />
      <LastPage />
    </div>
  );
}

export default page;
