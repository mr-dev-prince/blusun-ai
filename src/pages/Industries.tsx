import React from "react";
import Hero from "../components/Industries/Hero";
import IndustryCards from "../components/Industries/IndustryCards";
import DownloadSample from "../components/Industries/DownloadSample";

const Industries: React.FC = () => {
  return (
    <div>
      <Hero />
      <IndustryCards />
      <DownloadSample />
    </div>
  );
};

export default Industries;
