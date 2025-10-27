import React from "react";
import cc from "../assets/campaign-cat.svg";

const ComingSoon: React.FC = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex h-full w-full flex-col items-center justify-center gap-5 px-4">
        <img src={cc} alt="" className="h-[60%]" />
        <p className="text-4xl font-black uppercase">Coming Soon !</p>
        <p className="text-primary uppercase">Please check back later...</p>
      </div>
    </div>
  );
};

export default ComingSoon;
