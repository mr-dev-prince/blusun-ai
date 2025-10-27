import React from "react";
import ServicesTitle from "../ServicesTitle";
import cc from "../../assets/campaign-cat.svg";
import cg from "../../assets/copywriting-campaign.webp";

const Service5: React.FC = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row md:py-12 gap-8 md:gap-0">
      <div className="md:w-[50%] space-y-6 pl-4 md:pl-12">
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
      <div className="relative flex md:w-[50%] items-center justify-center">
        <img
          src={cg}
          alt="campaing-graphics"
          className="md:h-[60vh] rounded-tl-4xl rounded-br-3xl md:rounded-tr-4xl"
        />
        <img
          src={cc}
          alt="campaign-cat"
          className="hidden md:block absolute bottom-0 left-24 h-[30vh]"
        />
      </div>
    </div>
  );
};

export default Service5;
