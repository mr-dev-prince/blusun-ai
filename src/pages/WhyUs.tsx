import React from "react";
import Hero from "../components/WhyUs/Hero";
import CorePillars from "../components/WhyUs/CorePillars";
import ComparisonSection from "../components/WhyUs/ComparisonTable";
import FinalCTA from "../components/FinalCTA";

const colors = {
  bg: "#0b1220",
  accent: "#0781fe",
  primary: "#fed50a",
  text: "#e6eef8",
};

const WhyUs: React.FC = () => {
  return (
    <div
      className="min-h-screen font-sans selection:bg-[#fed50a] selection:text-[#0b1220]"
      style={{ backgroundColor: colors.bg, color: colors.text }}
    >
      <Hero />
      <CorePillars />
      <ComparisonSection />
      <FinalCTA />
    </div>
  );
};

export default WhyUs;
