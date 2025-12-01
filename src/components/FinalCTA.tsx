import React from "react";
import { Target } from "lucide-react";

const FinalCTA: React.FC = () => {
  return (
    <section className="px-6 py-24">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-[#e6eef8]/10 bg-linear-to-b from-[#0e1629] to-[#0b1220] p-12 text-center">
        <div className="absolute top-0 right-0 p-12 opacity-10">
          <Target size={120} className="text-[#fed50a]" />
        </div>

        <h2 className="relative z-10 mb-6 text-3xl font-bold text-white md:text-5xl">
          Ready to scale your content?
        </h2>
        <p className="relative z-10 mx-auto mb-8 max-w-2xl text-xl text-[#e6eef8]/70">
          Join the agency that treats content as a growth engine, not a
          commodity.
        </p>
        <div className="relative z-10">
          <button className="rounded-xl bg-[#0781fe] px-10 py-4 font-bold text-white shadow-lg shadow-[#0781fe]/25 transition-all hover:bg-[#055dc7]">
            Book a Strategy Call
          </button>
          <p className="mt-4 text-sm text-[#e6eef8]/40">
            No obligation. 100% Free consultation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
