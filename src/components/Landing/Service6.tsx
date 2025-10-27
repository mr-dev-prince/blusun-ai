import React from "react";
import ns from "../../assets/next-steps.webp";
import ServicesTitle from "../ServicesTitle";

const Service6: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row w-full items-center justify-center py-12 gap-8 md:gap-0">
      <div className="flex md:w-[50%] items-center justify-center">
        <img
          src={ns}
          alt=""
          className="md:h-[70vh] md:w-[80%] rounded-tl-4xl rounded-br-4xl object-cover"
        />
      </div>
      <div className="md:w-[50%] space-y-10 px-4 md:px-8">
        <ServicesTitle
          num={6}
          title={
            <>
              Collab & <br /> Next Steps
            </>
          }
        />
        <p className="font-semibold uppercase">
          We ensure a seamless partnership with clear processes, timelines, and
          communication. We define key milestones, align on expectations, and
          provide ongoing support, making it easy for clients to collaborate and
          see results. <br /> <br /> Our goal is to deliver a premium experience
          while turning strategy into measurable outcomes, ensuring clarity,
          efficiency, and consistent growth.
        </p>
      </div>
    </div>
  );
};

export default Service6;
