import { HelpCircle } from "lucide-react";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden border-b border-[#e6eef8]/5 px-6 py-48 text-center">
      <div className="pointer-events-none absolute top-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-[#0781fe] opacity-10 blur-[150px]"></div>

      <div className="relative z-10 mx-auto max-w-3xl space-y-12">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#0781fe]/10 px-4 py-2 text-sm font-semibold text-[#0781fe]">
          <HelpCircle size={16} />
          <span>Support & Process</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight md:text-8xl">
          Frequently Asked <span className="text-[#fed50a]">Questions</span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-[#e6eef8]/70 md:text-xl">
          Everything you need to know about our process, billing, and content
          standards.
        </p>
      </div>
    </section>
  );
};

export default Hero;
