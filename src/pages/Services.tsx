import React from "react";
import Hero from "../components/Services/Hero";
import ServicesGrid from "../components/Services/ServicesGrid";
import ServiceTiers from "../components/Services/ServiceTiers";

const Services: React.FC = () => {
  return (
    <div className="bg-secondary min-h-screen text-gray-800">
      <main>
        <Hero />
        <ServicesGrid />
        <ServiceTiers />
      </main>
    </div>
  );
};

export default Services;
