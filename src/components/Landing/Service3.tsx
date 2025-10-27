import React from "react";
import bp from "../../assets/blue-print.webp";
import ServicesTitle from "../ServicesTitle";

const Service3: React.FC = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row w-full items-center justify-between py-6 md:py-12">
      <div className="flex md:w-[50%] flex-col items-end justify-center md:gap-24 px-4">
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
      <div className="md:h-[70vh] md:w-[60%] mb-8 md:mb-0">
        <img src={bp} alt="" className="h-full w-full object-cover" />
      </div>
    </div>
  );
};

export default Service3;
