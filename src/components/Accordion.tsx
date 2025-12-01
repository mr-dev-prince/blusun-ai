import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const Accordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const faqs = [
    {
      question: "What is your typical turnaround time?",
      answer:
        "For standard blog posts (1000-1500 words), our delivery time is typically 48-72 hours. For larger projects like technical whitepapers or full website copy, we will provide a custom timeline during the onboarding phase.",
    },
    {
      question: "Do you offer revisions?",
      answer:
        "Yes. We believe in getting it right. All packages include up to two rounds of revisions free of charge to ensure the tone, voice, and technical accuracy meet your standards.",
    },
    {
      question: "How do you handle technical industry topics?",
      answer:
        "We specialize in Tech and SaaS. Our writers are subject matter experts who conduct deep research. We also encourage you to provide existing documentation or style guides to help us align with your product's specific terminology.",
    },
    {
      question: "Is SEO optimization included?",
      answer:
        "Absolutely. We don't just write for humans; we write for algorithms too. We use tools like SurferSEO and Ahrefs to ensure proper keyword density, header structure, and meta descriptions are included in every piece.",
    },
    {
      question: "Do you use AI tools like ChatGPT?",
      answer:
        "We use AI for outlining and research assistance, but 100% of our final drafting and editing is human-led. We believe high-converting copy requires human empathy and nuance that pure AI cannot replicate.",
    },
    {
      question: "How does the payment structure work?",
      answer:
        "For ad-hoc projects, we require a 50% deposit upfront. For monthly retainers, we invoice at the start of the month. We accept major credit cards and bank transfers.",
    },
  ];

  return (
    <section className="px-6 py-20 md:px-12">
      <div className="mx-auto max-w-3xl space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
              openIndex === index
                ? "border-[#0781fe] bg-[#0b1220] shadow-[0_0_20px_rgba(7,129,254,0.15)]"
                : "border-[#e6eef8]/10 bg-[#0b1220] hover:border-[#e6eef8]/30"
            }`}
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="flex w-full items-center justify-between p-6 text-left focus:outline-none"
            >
              <span
                className={`text-lg font-medium transition-colors ${openIndex === index ? "text-[#e6eef8]" : "text-[#e6eef8]/80"}`}
              >
                {faq.question}
              </span>
              <span
                className={`text-[#0781fe] transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
              >
                {openIndex === index ? (
                  <ChevronUp size={24} />
                ) : (
                  <ChevronDown size={24} />
                )}
              </span>
            </button>

            <div
              className={`transition-[max-height,opacity] duration-300 ease-in-out ${
                openIndex === index
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="mt-2 border-t border-[#e6eef8]/5 p-6 pt-0 leading-relaxed text-[#e6eef8]/60">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Accordion;
