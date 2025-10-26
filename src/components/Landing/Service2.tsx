import React from "react";
import au from "../../assets/audience.webp";
import logo from "../../assets/blusun-hd-logo-blue.png";
import ServicesTitle from "../ServicesTitle";

const Service2: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-row-reverse justify-between py-24">
      <div className="flex w-full flex-row-reverse items-center justify-center gap-18">
        <div className="flex h-full w-[60%] flex-col justify-center gap-24 px-12">
          <ServicesTitle
            num={2}
            title={
              <>
                Audience Insight
                <br />& Research.
              </>
            }
          />
          <p className="font-semibold uppercase">
            Audience insight and research form the foundation of impactful
            storytelling. It’s not just about knowing who your audience is, but
            understanding what drives them — their needs, values, and the
            emotions that shape their decisions. <br /> <br />
            Through data, observation, and empathy, we uncover the patterns
            behind attention and engagement. This insight transforms ordinary
            messaging into meaningful connection, ensuring every word feels
            tailored, relevant, and real.
          </p>
        </div>
        <div className="flex w-[40%] justify-end pr-8">
          <img src={au} alt="" className="h-[70vh] rounded-tl-4xl" />
        </div>
      </div>
      <div className="bg-secondary flex h-screen w-[6%] flex-col items-center justify-center gap-4">
        <p className="rotate-180 text-5xl font-black text-black [writing-mode:vertical-rl]">
          RESEARCH THAT CONVERTS.
        </p>
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default Service2;
