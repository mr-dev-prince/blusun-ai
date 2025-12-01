import { BarChart3, Layers, ShieldCheck, Zap } from "lucide-react";

const CorePillars: React.FC = () => {
  const pillars = [
    {
      icon: <ShieldCheck size={32} />,
      title: "Vetted Subject Matter Experts",
      desc: "We don't hire generalists. Our writers are former devs, PMs, and marketers who understand your industry inside out.",
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Data-Driven Strategy",
      desc: "We don't guess. We use Ahrefs, Clearscope, and MarketMuse to ensure every piece is primed to rank on Google.",
    },
    {
      icon: <Zap size={32} />,
      title: "Lightning Fast Turnaround",
      desc: "Scale your content production without the bottleneck. Standard delivery is 48 hours for blog posts.",
    },
    {
      icon: <Layers size={32} />,
      title: "Full-Stack Management",
      desc: "From ideation to uploading to your CMS. We handle the entire pipeline so you can focus on product.",
    },
  ];

  return (
    <section className="bg-[#0b1220] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="group rounded-3xl border border-[#e6eef8]/5 bg-[#0e1629] p-8 transition-all hover:border-[#0781fe]/50 hover:bg-[#0e1629]/80"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0781fe]/10 text-[#0781fe] transition-all duration-300 group-hover:bg-[#0781fe] group-hover:text-white">
                {item.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#e6eef8]/60">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorePillars;
