import React from "react";
import { Zap } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden border-b border-[#e6eef8]/5 bg-[#0b1220] px-6 py-24 text-center">
      <div className="pointer-events-none absolute top-[-10%] left-[-5%] h-[500px] w-[500px] rounded-full bg-[#0781fe] opacity-10 blur-[150px]"></div>

      <div className="relative z-10 mx-auto max-w-4xl space-y-6 text-center">
        <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-[#e6eef8]/10 bg-[#e6eef8]/5 px-4 py-2 text-sm font-bold tracking-wider text-[#e6eef8] uppercase">
          <Zap size={16} className="text-[#fed50a]" />
          Full-Stack Content
        </div>

        <h1 className="text-5xl leading-tight font-extrabold tracking-tight text-white md:text-7xl">
          Precision writing for <br />
          <span className="bg-linear-to-r from-[#0781fe] to-[#fed50a] bg-clip-text text-transparent">
            every format.
          </span>
        </h1>

        <p className="mx-auto max-w-2xl text-xl text-[#e6eef8]/70">
          From technical documentation to viral social hooks, we deliver content
          that builds authority and drives revenue.
        </p>
      </div>
    </section>
  );
};

export default Hero;
