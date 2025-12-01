import React from "react";
import { Check, Crown } from "lucide-react";

const colors = {
  bg: "#0b1220",
  accent: "#0781fe",
  primary: "#fed50a",
  text: "#e6eef8",
};

const ServiceTiers: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b1220] px-6 py-24">
      <div className="pointer-events-none absolute right-1/4 bottom-0 h-[600px] w-[600px] rounded-full bg-[#0781fe]/10 blur-[120px]"></div>
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-32 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">
            Choose Your Level
          </h2>
          <p className="text-[#e6eef8]/60">
            Select the depth of expertise required for your project.
          </p>
        </div>
        <div className="grid grid-cols-1 items-stretch gap-12 md:grid-cols-2">
          <div className="rounded-3xl bg-linear-to-b from-[#e6eef8]/10 to-[#0e1629] p-1">
            <div className="relative flex h-full flex-col overflow-hidden rounded-[20px] bg-[#0e1629] p-10">
              <div className="mb-8">
                <h3 className="mb-2 text-2xl font-bold text-white">Premium</h3>
                <p className="text-sm text-[#e6eef8]/60">
                  Best for blogs, lifestyle, and general content.
                </p>
                <div className="mt-6 text-4xl font-bold text-white">
                  $0.15
                  <span className="text-lg font-normal text-[#e6eef8]/40">
                    /word
                  </span>
                </div>
              </div>

              <ul className="mb-8 flex-1 space-y-4">
                {[
                  "Native English Writers",
                  "SEO Optimization (Basic)",
                  "1 Round of Revisions",
                  "Copyscape Passed",
                  "Standard Formatting",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm text-[#e6eef8]/80"
                  >
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0781fe]/20 text-[#0781fe]">
                      <Check size={12} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full rounded-xl border border-[#e6eef8]/20 py-4 font-bold text-white transition-colors hover:bg-[#e6eef8]/5">
                Select Premium
              </button>
            </div>
          </div>
          <div className="relative transform rounded-3xl bg-linear-to-b from-[#fed50a] to-[#0e1629] p-1 shadow-[0_0_40px_rgba(254,213,10,0.15)] md:-translate-y-4">
            <div className="absolute -top-8 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 rounded-full bg-[#fed50a] p-3 text-xs font-bold tracking-widest text-[#0b1220] uppercase shadow-lg">
              <Crown size={12} fill="#0b1220" /> Most Popular
            </div>

            <div className="relative flex h-full flex-col overflow-hidden rounded-[20px] bg-[#0b1220] p-10">
              <div className="mb-8">
                <h3 className="mb-2 text-2xl font-bold text-[#fed50a]">
                  Elite
                </h3>
                <p className="text-sm text-[#e6eef8]/60">
                  For technical, medical, or complex B2B topics.
                </p>
                <div className="mt-6 text-4xl font-bold text-white">
                  $0.30
                  <span className="text-lg font-normal text-[#e6eef8]/40">
                    /word
                  </span>
                </div>
              </div>

              <ul className="mb-8 flex-1 space-y-4">
                {[
                  "Subject Matter Experts (Devs, PhDs)",
                  "Advanced SEO (Surfer/Clearscope)",
                  "Unlimited Revisions",
                  "Strategic Content Briefs",
                  "Interview-based Research",
                  "CMS Upload & Formatting",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm font-medium text-white"
                  >
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#fed50a] text-[#0b1220]">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <button
                className="w-full rounded-xl py-4 font-bold text-[#0b1220] transition-transform hover:scale-[1.02]"
                style={{ backgroundColor: colors.primary }}
              >
                Select Elite
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceTiers;
