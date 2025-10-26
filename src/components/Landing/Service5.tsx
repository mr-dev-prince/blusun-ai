import React from "react";
import ServicesTitle from "../ServicesTitle";
import cc from "../../assets/campaign-cat.svg";
import cg from "../../assets/copywriting-campaign.webp";

const Service5: React.FC = () => {
  return (
    <div className="flex py-12">
      <div className="w-[50%] space-y-6 pl-12">
        <ServicesTitle
          num={5}
          title={
            <>
              Campaign <br /> Deliverables
            </>
          }
        />
        <p className="font-semibold uppercase">
          We provide a complete set of content assets tailored to your
          campaign—engaging copy, visuals, and messaging that drive results and
          ensure your brand stands out at every touchpoint.
        </p>
      </div>
      <div className="relative flex w-[50%] items-center justify-center">
        <img
          src={cg}
          alt="campaing-graphics"
          className="h-[60vh] rounded-tr-4xl"
        />
        <img
          src={cc}
          alt="campaign-cat"
          className="absolute bottom-0 left-24 h-[30vh]"
        />
      </div>
    </div>
  );
};

export default Service5;
