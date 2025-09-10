import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TheProblem from "@/components/sections/TheProblem";
import WhyDimmo from "@/components/sections/WhyDimmo";
import WhatYouGet from "@/components/sections/WhatYouGet";
import ForTechnologyPartners from "@/components/sections/ForTechnologyPartners";
import WhoWeWorkWith from "@/components/sections/WhoWeWorkWith";
import NextStep from "@/components/sections/NextStep";

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-[#FFFBFD]">
      <Header />

      <main>
        <Hero />
        <TheProblem />
        <WhyDimmo />
        <WhatYouGet />
        <ForTechnologyPartners />
        <WhoWeWorkWith />
        <NextStep />
      </main>

      <Footer />
    </div>
  );
}
