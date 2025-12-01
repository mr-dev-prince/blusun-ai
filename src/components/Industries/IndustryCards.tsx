import React from "react";
import { Code, Cloud, Rocket, ShoppingCart } from "lucide-react";

const IndustryCards: React.FC = () => {
  const industries = [
    {
      id: 1,
      title: "Tech & IT",
      description:
        "Technical documentation, whitepapers, and API guides that developers actually enjoy reading.",
      icon: <Code size={32} />,
    },
    {
      id: 2,
      title: "SaaS",
      description:
        "Conversion-focused landing page copy and educational blog posts to reduce churn and drive ARR.",
      icon: <Cloud size={32} />,
    },
    {
      id: 3,
      title: "Startups",
      description:
        "Pitch decks and brand storytelling that helps you secure funding and find your product-market fit.",
      icon: <Rocket size={32} />,
    },
    {
      id: 4,
      title: "E-commerce",
      description:
        "Persuasive product descriptions and email sequences that turn window shoppers into loyal customers.",
      icon: <ShoppingCart size={32} />,
    },
  ];

  return (
    <section id="industries" className="relative px-6 py-24 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Industries We Serve
          </h2>
          <div
            className="h-1 w-20 rounded"
            style={{ backgroundColor: "#fed50a" }}
          ></div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {industries.map((industry) => (
            <div
              key={industry.id}
              className="group rounded-2xl border border-[#e6eef8]/10 bg-[#0b1220] p-8 transition-all duration-300 hover:border-[#0781fe]/50 hover:shadow-2xl hover:shadow-[#0781fe]/10"
            >
              <div
                className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl transition-colors group-hover:bg-[#0781fe]"
                style={{ backgroundColor: "#0781fe20", color: "#e6eef8" }}
              >
                {React.cloneElement(industry.icon, {
                  className: "group-hover:text-white",
                })}
              </div>
              <h3 className="mb-3 text-2xl font-bold transition-colors group-hover:text-[#fed50a]">
                {industry.title}
              </h3>
              <p className="leading-relaxed text-[#e6eef8]/70">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryCards;
