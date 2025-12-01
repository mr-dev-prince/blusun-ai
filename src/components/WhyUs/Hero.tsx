import React from "react";
import { ArrowRight, Trophy } from "lucide-react";

const colors = {
  bg: "#0b1220",
  accent: "#0781fe",
  primary: "#fed50a",
  text: "#e6eef8",
};

const Hero: React.FC = () => {
  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden border-b border-[#e6eef8]/5 px-6 py-24 text-center">
      {/* Background Decor */}
      <div className="pointer-events-none absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-[#0781fe] opacity-10 blur-[150px]"></div>
      <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-[#fed50a] opacity-5 blur-[120px]"></div>

      <div className="relative z-10 mx-auto max-w-4xl space-y-8 text-center">
        <div className="animate-fade-in inline-flex items-center gap-2 rounded-full bg-[#fed50a]/10 px-4 py-2 text-sm font-bold tracking-wider text-[#fed50a] uppercase">
          <Trophy size={16} />
          The BluSun Advantage
        </div>

        <h1 className="text-5xl leading-tight font-extrabold tracking-tight text-white md:text-7xl">
          Content that doesn't <br />
          <span className="bg-linear-to-r from-[#0781fe] to-[#fed50a] bg-clip-text text-transparent">
            compromise.
          </span>
        </h1>

        <p className="mx-auto max-w-2xl text-xl text-[#e6eef8]/70">
          Most agencies either get the tech wrong or the copy wrong. We bridge
          the gap between engineering precision and creative storytelling.
        </p>

        <div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row">
          <button
            className="flex items-center justify-center gap-2 rounded-full px-8 py-4 font-bold text-[#0b1220] shadow-lg shadow-[#fed50a]/20 transition-transform hover:scale-105"
            style={{ backgroundColor: colors.primary }}
          >
            Start Your Project <ArrowRight size={20} />
          </button>
          {/* <button className="rounded-full border border-[#e6eef8]/20 px-8 py-4 font-bold text-[#e6eef8] transition-all hover:bg-[#e6eef8]/5">
            View Our Work
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
