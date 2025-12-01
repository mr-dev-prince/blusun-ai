import { Star } from "lucide-react";
import React from "react";

const colors = {
  bg: "#0b1220",
  accent: "#0781fe",
  primary: "#fed50a",
  text: "#e6eef8",
};

const Hero: React.FC = () => {
  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden border-b border-[#e6eef8]/5 px-6">
      <div
        className="pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] rounded-full opacity-10 blur-[120px]"
        style={{ backgroundColor: colors.accent }}
      ></div>

      <div className="relative z-10 mx-auto max-w-4xl space-y-6 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#fed50a]/10 px-4 py-2 text-sm font-bold tracking-wider text-[#fed50a] uppercase">
          <Star size={16} fill={colors.primary} />
          Client Success Stories
        </div>

        <h1 className="text-4xl leading-tight font-extrabold tracking-tight md:text-8xl">
          Don't just take our <br />
          <span className="bg-linear-to-r from-[#0781fe] to-[#fed50a] bg-clip-text text-transparent">
            word for it.
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-xl text-[#e6eef8]/70">
          We've helped 500+ tech companies and startups find their voice. Here
          is what they have to say about working with us.
        </p>
        <div className="flex justify-center gap-8 pt-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-white">4.9/5</div>
            <div className="text-sm text-[#e6eef8]/50">Average Rating</div>
          </div>
          <div className="h-12 w-px bg-[#e6eef8]/10"></div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">98%</div>
            <div className="text-sm text-[#e6eef8]/50">Retention Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
