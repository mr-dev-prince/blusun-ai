import React from "react";
import bs from "../../assets/brand-story.webp";
import logo from "../../assets/blusun-hd-logo-blue.png";
import ServicesTitle from "../ServicesTitle";

const Service1: React.FC = () => {
  return (
    <div className="flex min-h-screen justify-between py-24">
      <div className="flex w-full items-center justify-center gap-18">
        <div className="flex h-full w-[60%] flex-col justify-center gap-32 px-12">
          <ServicesTitle
            num={1}
            title={
              <>
                Brand Story
                <br />& Strategy.
              </>
            }
          />
          <p className="font-semibold uppercase">
            We help ambitious founders and brands turn ideas into high-impact
            content. We craft copy and narratives that elevate your brand,
            engage your audience, and drive measurable results. <br /> <br />
            Every piece of content is designed to be premium, authentic, and
            conversion-focused, ensuring your brand stands out and leads
            conversations.
          </p>
        </div>
        <div className="flex w-[40%] justify-end pr-8">
          <img src={bs} alt="" className="h-[70vh] rounded-br-4xl" />
        </div>
      </div>
      <div className="bg-secondary flex h-screen w-[6%] flex-col items-center justify-center gap-6">
        <p className="text-5xl font-black text-black [writing-mode:vertical-rl]">
          WE BUILD BRAND STORIES.
        </p>
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default Service1;
