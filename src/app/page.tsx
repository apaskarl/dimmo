import Hero from "@/components/blocks/home/Hero";
import TheProblem from "@/components/blocks/home/TheProblem";
import WhyDimmoIsDifferent from "@/components/blocks/home/WhyDimmoIsDifferent";
import WhatYouGet from "@/components/blocks/home/WhatYouGet";
import ForTechnologyPartners from "@/components/blocks/home/ForTechnologyPartners";
import WhoWeWorkWith from "@/components/blocks/home/WhoWeWorkWith";
import CTA from "@/components/blocks/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TheProblem />
      <WhyDimmoIsDifferent />
      <WhatYouGet />
      <ForTechnologyPartners />
      <WhoWeWorkWith />
      <CTA />
    </>
  );
}
