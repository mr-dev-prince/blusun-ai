import React from "react";
import logo from "../../assets/blusun-hd-logo-blue.png";
import ServicesTitle from "../ServicesTitle";
import cf from "../../assets/copy-framework.webp";

const Service4: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row max-w-screen py-12 md:py-24">
      <div className="h-full md:w-[40%]">
        <img src={cf} alt="" className="h-screen object-cover" />
      </div>
      <div className="bg-secondary hidden md:flex h-screen w-[6%] flex-col items-center justify-center gap-6">
        <p className="text-5xl font-black text-black [writing-mode:vertical-rl]">
          WE BUILD BRAND STORIES.
        </p>
        <img src={logo} alt="blusun" />
      </div>
      <div className="md:w-[54%] space-y-12 mt-8 md:mt-0 px-4">
        <ServicesTitle
          num={4}
          title={
            <>
              creative & <br /> copy framework.
            </>
          }
        />
        <p className="font-semibold uppercase">
          We develop a structured approach that combines creativity with
          clarity—crafting compelling ideas and persuasive copy that capture
          attention, communicate your message effectively, and resonate with
          your audience.
        </p>
      </div>
    </div>
  );
};

export default Service4;
