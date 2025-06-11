import OurMission from "@/components/About/OurMission";
import WasteBreakDown from "@/components/About/WasteBreakDown";
import Welcome from "@/components/About/Welcome";
import Hero from "@/components/Shared/Hero";
import Testimonials from "@/components/Shared/Testimonials";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero title="About Us" bgImage="/about/about__hero.jpg" />
      <Welcome />
      <OurMission />
      {/* <WasteBreakDown /> */}
      {/* <Testimonials /> */}
    </div>
  );
};

export default page;
