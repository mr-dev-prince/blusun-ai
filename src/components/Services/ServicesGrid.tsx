import React from "react";
import {
  Globe,
  FileText,
  PenTool,
  Mail,
  Megaphone,
  ShoppingBag,
  Terminal,
  Newspaper,
} from "lucide-react";

const ServicesGrid: React.FC = () => {
  const services = [
    {
      title: "Website Content",
      desc: "Home pages, landing pages, and 'About Us' sections that clearly articulate your value proposition.",
      icon: <Globe size={28} />,
    },
    {
      title: "Article Writing",
      desc: "SEO-optimized blog posts and thought leadership pieces designed to rank and engage.",
      icon: <FileText size={28} />,
    },
    {
      title: "Copywriting",
      desc: "Persuasive sales copy for ads, funnels, and scripts that psychology triggers action.",
      icon: <PenTool size={28} />,
    },
    {
      title: "Email Newsletters",
      desc: "Nurture sequences and weekly blasts that keep your audience opening, reading, and clicking.",
      icon: <Mail size={28} />,
    },
    {
      title: "Press Releases",
      desc: "Newsworthy announcements formatted for media pickup and distribution channels.",
      icon: <Megaphone size={28} />,
    },
    {
      title: "Product Descriptions",
      desc: "Enticing summaries for e-commerce or SaaS features that highlight benefits over features.",
      icon: <ShoppingBag size={28} />,
    },
    {
      title: "Technical Writing",
      desc: "API documentation, whitepapers, and manuals written by experts who code.",
      icon: <Terminal size={28} />,
    },
    {
      title: "News Content",
      desc: "Timely, journalistic coverage of industry trends to position your brand as a market leader.",
      icon: <Newspaper size={28} />,
    },
  ];

  return (
    <section className="bg-[#0b1220] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group rounded-2xl border border-[#e6eef8]/5 bg-[#0e1629] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#0781fe]/50"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#e6eef8]/5 text-[#e6eef8] transition-colors duration-300 group-hover:bg-[#0781fe] group-hover:text-white">
                {service.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-[#0781fe]">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#e6eef8]/60">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
