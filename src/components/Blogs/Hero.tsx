import { BookOpen } from "lucide-react";
import React from "react";

const colors = {
  bg: "#0b1220",
  accent: "#0781fe",
  primary: "#fed50a",
  text: "#e6eef8",
};

// --- COMPONENT 1: HERO SECTION ---
const Hero: React.FC = () => {
  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden border-b border-[#e6eef8]/5 px-6 py-20 text-center">
      <div
        className="pointer-events-none absolute -top-20 -left-20 h-[400px] w-[400px] rounded-full opacity-10 blur-[100px]"
        style={{ backgroundColor: colors.accent }}
      ></div>
      <div
        className="pointer-events-none absolute right-0 bottom-0 h-[300px] w-[300px] rounded-full opacity-5 blur-[80px]"
        style={{ backgroundColor: colors.primary }}
      ></div>

      <div className="relative z-10 mx-auto max-w-4xl space-y-12 text-center">
        <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-[#0781fe]/10 px-4 py-2 text-sm font-bold tracking-wider text-[#0781fe] uppercase">
          <BookOpen size={16} />
          Content Academy
        </div>

        <h1 className="text-4xl leading-tight font-extrabold tracking-tight text-white md:text-8xl">
          Insights for the <br />
          <span className="bg-linear-to-r from-[#0781fe] to-[#fed50a] bg-clip-text text-transparent">
            Modern Writer.
          </span>
        </h1>

        <p className="mx-auto max-w-2xl text-lg text-[#e6eef8]/70 md:text-xl">
          Deep dives into SEO, technical storytelling, and conversion
          copywriting. Level up your content strategy with our latest guides.
        </p>
      </div>
    </section>
  );
};
export default Hero;
