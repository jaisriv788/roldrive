import { Hero } from "@/components/Hero";
import { LastPage } from "@/components/LastPage";
import { Faq } from "@/components/Faq";
function page() {
  return (
    <div className="">
      <Hero />
      <Faq />
      <LastPage />
    </div>
  );
}

export default page;
