import React from "react";
import si from "../assets/service-icon.svg";

interface ServicesTitleProps {
  title: React.ReactNode;
  num: number;
}

const ServicesTitle: React.FC<ServicesTitleProps> = ({ title, num }) => {
  return (
    <div className="w-full space-y-2">
      <div className="flex w-fit items-center justify-center gap-2">
        <p className="text-xl font-semibold">[</p>
        {Array.from({ length: num }).map((_, i) => (
          <img key={i} src={si} alt="service" className="h-5 animate-spin" />
        ))}
        <p className="text-xl font-semibold">]</p>
      </div>
      <p className="text-primary w-full text-8xl font-black uppercase">
        {title}
      </p>
    </div>
  );
};

export default ServicesTitle;
