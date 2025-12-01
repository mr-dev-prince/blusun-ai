import React from "react";
import { ArrowDown } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <div
      className="min-h-screen font-sans selection:bg-[#fed50a] selection:text-[#0b1220]"
      style={{ backgroundColor: "#0b1220", color: "#e6eef8" }}
    >
      <section className="relative flex h-screen flex-col items-center justify-center overflow-hidden px-6">
        <div
          className="pointer-events-none absolute top-[-20%] right-[-10%] h-[500px] w-[500px] rounded-full opacity-20 blur-[120px]"
          style={{ backgroundColor: "#0781fe" }}
        ></div>
        <div
          className="pointer-events-none absolute bottom-[-10%] left-[-10%] h-[400px] w-[400px] rounded-full opacity-10 blur-[100px]"
          style={{ backgroundColor: "#fed50a" }}
        ></div>

        <div className="z-10 max-w-4xl space-y-6 text-center">
          <p className="animate-fade-in-up text-sm font-bold tracking-widest text-[#0781fe] uppercase">
            Premium Content Agency
          </p>
          <h1 className="text-5xl leading-tight font-extrabold tracking-tight md:text-7xl">
            We speak the language of <br />
            <span className="bg-linear-to-r from-[#0781fe] to-[#fed50a] bg-clip-text text-transparent">
              Innovation.
            </span>
          </h1>
          <p className="mx-auto max-w-2xl pt-4 text-lg text-[#e6eef8]/80 md:text-xl">
            Expert content strategies for high-growth industries. We turn
            complex concepts into compelling narratives.
          </p>

          <div className="pt-8">
            <button
              onClick={() => {
                const el = document.getElementById("industries");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="group mx-auto flex transform items-center gap-2 rounded-full px-8 py-4 font-bold shadow-lg shadow-[#0781fe]/20 transition-all hover:scale-105"
              style={{ backgroundColor: "#0781fe", color: "#ffffff" }}
            >
              Explore Industries
              <ArrowDown
                className="transition-transform group-hover:translate-y-1"
                size={20}
              />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
