import React, { useState } from "react";
import { Lightbulb, Send } from "lucide-react";

const TopicSuggestion: React.FC = () => {
  const [topic, setTopic] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!topic.trim()) return;
    setSubmitted(true);
    // Reset after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setTopic("");
    }, 3000);
  };

  return (
    <section className="relative pb-12">
      <div className="mx-auto max-w-2xl">
        <div className="relative rounded-3xl border border-[#e6eef8]/10 bg-linear-to-b from-[#0e1629] to-[#0b1220] p-1 pb-1">
          <div className="absolute inset-0 -z-10 rounded-3xl bg-linear-to-r from-[#0781fe]/20 to-[#fed50a]/20 opacity-50 blur-xl"></div>

          <div className="rounded-[22px] bg-[#0b1220] p-8 text-center md:p-12">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#fed50a]/10 text-[#fed50a]">
              <Lightbulb size={32} />
            </div>

            <h2 className="mb-3 text-2xl font-bold text-white md:text-3xl">
              What should we write about next?
            </h2>
            <p className="mx-auto mb-8 max-w-md text-[#e6eef8]/60">
              Struggling with a specific content problem? Let us know. We write
              guides based on real user requests.
            </p>

            <form onSubmit={handleSubmit} className="relative mx-auto max-w-md">
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="e.g. How to write case studies..."
                className="w-full rounded-full border border-[#e6eef8]/10 bg-[#e6eef8]/5 py-4 pr-14 pl-6 text-white placeholder-[#e6eef8]/30 transition-all focus:border-[#0781fe] focus:ring-1 focus:ring-[#0781fe] focus:outline-none"
                disabled={submitted}
              />
              <button
                type="submit"
                className={`absolute top-2 right-2 bottom-2 flex aspect-square items-center justify-center rounded-full transition-all duration-300 ${
                  submitted
                    ? "rotate-0 bg-[#10b981] text-white"
                    : "-rotate-90 bg-[#fed50a] text-[#0b1220] hover:rotate-0 hover:bg-[#fed50a]/90"
                }`}
                disabled={submitted}
              >
                {submitted ? (
                  <span className="text-lg">✓</span>
                ) : (
                  <Send size={18} />
                )}
              </button>
            </form>

            {submitted && (
              <p className="animate-fade-in mt-4 text-sm text-[#10b981]">
                Thanks! We've added your topic to our list.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopicSuggestion;
