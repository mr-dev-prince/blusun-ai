import React from "react";
import bp from "../../assets/blue-print.webp";
import ServicesTitle from "../ServicesTitle";

const Service3: React.FC = () => {
  return (
    <div className="flex w-full items-center justify-between py-12">
      <div className="flex w-[50%] flex-col items-end justify-center gap-24 px-4">
        <ServicesTitle
          num={3}
          title={
            <>
              Platform
              <br />& content Blueprint.
            </>
          }
        />
        <div>
          <p className="font-semibold uppercase">
            We design a clear roadmap for your brand`s voice—choosing the right
            platforms, tone, and story to ensure your message connects and
            performs everywhere it`s heard.
          </p>
        </div>
      </div>
      <div className="h-[70vh] w-[60%]">
        <img src={bp} alt="" className="h-full w-full object-cover" />
      </div>
    </div>
  );
};

export default Service3;
