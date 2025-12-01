import { CheckCircle2, XCircle } from "lucide-react";

const colors = {
  bg: "#0b1220",
  accent: "#0781fe",
  primary: "#fed50a",
  text: "#e6eef8",
};

const ComparisonSection = () => {
  const features = [
    {
      name: "Writer Expertise",
      blusun: "Industry Experts",
      others: "Generalist Freelancers",
    },
    {
      name: "SEO Optimization",
      blusun: "Included (SurferSEO)",
      others: "Extra Cost / None",
    },
    { name: "Revisions", blusun: "Unlimited", others: "Paid per round" },
    {
      name: "Project Manager",
      blusun: "Dedicated Point of Contact",
      others: "You manage them",
    },
    { name: "Turnaround Time", blusun: "48-72 Hours", others: "1-2 Weeks" },
  ];

  return (
    <section className="relative overflow-hidden px-6 py-24">
      {/* Decorative Blob */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0781fe] opacity-5 blur-[150px]"></div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">
            Compare the Value
          </h2>
          <p className="text-[#e6eef8]/60">
            Why leading startups switch from marketplaces to BluSun.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-[#e6eef8]/10 bg-[#0e1629] shadow-2xl">
          {/* Header Row */}
          <div className="grid grid-cols-3 border-b border-[#e6eef8]/10 bg-[#e6eef8]/5 p-6 md:p-8">
            <div className="col-span-1 pt-2 text-xs font-semibold tracking-wider text-[#e6eef8]/50 uppercase md:text-sm">
              Feature
            </div>
            <div className="col-span-1 flex flex-col items-center gap-2 text-center text-2xl font-bold text-white">
              <span className="text-[#0781fe]">BluSun</span>
              <div className="h-1 w-12 rounded-full bg-[#0781fe]"></div>
            </div>
            <div className="col-span-1 pt-1 text-center text-lg font-bold text-[#e6eef8]/50 md:text-xl">
              Typical Agency
            </div>
          </div>

          {/* Body Rows */}
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="grid grid-cols-3 items-center border-b border-[#e6eef8]/5 p-6 transition-colors hover:bg-[#e6eef8]/5 md:p-8"
            >
              <div className="col-span-1 text-sm font-medium text-white md:text-lg">
                {feature.name}
              </div>

              {/* BluSun Column */}
              <div className="col-span-1 -mx-px flex flex-col items-center justify-center border-x border-[#e6eef8]/5 text-center">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#e6eef8] md:text-base">
                  <CheckCircle2
                    size={18}
                    className="hidden text-[#10b981] md:block"
                  />
                  {feature.blusun}
                </div>
              </div>

              {/* Others Column */}
              <div className="col-span-1 flex flex-col items-center justify-center text-center">
                <div className="flex items-center gap-2 text-sm text-[#e6eef8]/50 md:text-base">
                  <XCircle
                    size={18}
                    className="hidden text-red-500/50 md:block"
                  />
                  {feature.others}
                </div>
              </div>
            </div>
          ))}

          {/* Bottom CTA Row inside table */}
          <div className="grid grid-cols-3 bg-[#0781fe]/5 p-8">
            <div className="hidden md:block"></div>
            <div className="col-span-3 text-center md:col-span-1">
              <button
                className="w-full rounded-xl py-3 font-bold text-[#0b1220] shadow-lg transition-transform hover:scale-105"
                style={{ backgroundColor: colors.primary }}
              >
                Get Started
              </button>
            </div>
            <div className="hidden md:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
