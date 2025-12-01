import { MessageCircle, Send } from "lucide-react";
import React, { useState } from "react";

const QuestionForm: React.FC = () => {
  const [askForm, setAskForm] = useState({ email: "", question: "" });
  const [isSent, setIsSent] = useState(false);

  const handleAskSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSent(true);
    // Simulate API call
    setTimeout(() => {
      setIsSent(false);
      setAskForm({ email: "", question: "" });
    }, 3000);
  };

  return (
    <section className="relative px-6 py-20">
      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-12 overflow-hidden rounded-3xl border border-[#e6eef8]/10 bg-[#e6eef8]/5 p-8 md:flex-row md:p-12">
        <div className="pointer-events-none absolute top-0 right-0 h-32 w-32 bg-[#fed50a] opacity-10 blur-[80px]"></div>

        <div className="flex-1 space-y-4">
          <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0781fe]/20 text-[#0781fe]">
            <MessageCircle size={24} />
          </div>
          <h2 className="text-3xl font-bold">Still have questions?</h2>
          <p className="text-[#e6eef8]/60">
            Can't find the answer you're looking for? Drop us a line and our
            team will get back to you shortly.
          </p>
        </div>

        <div className="w-full flex-1">
          <form onSubmit={handleAskSubmit} className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-[#e6eef8]/70">
                Your Email
              </label>
              <input
                type="email"
                required
                value={askForm.email}
                onChange={(e) =>
                  setAskForm({ ...askForm, email: e.target.value })
                }
                className="w-full rounded-lg border border-[#e6eef8]/10 bg-[#0b1220] px-4 py-3 transition-all focus:border-[#0781fe] focus:ring-1 focus:ring-[#0781fe] focus:outline-none"
                placeholder="name@company.com"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[#e6eef8]/70">
                Your Question
              </label>
              <textarea
                required
                rows={3}
                value={askForm.question}
                onChange={(e) =>
                  setAskForm({ ...askForm, question: e.target.value })
                }
                className="w-full resize-none rounded-lg border border-[#e6eef8]/10 bg-[#0b1220] px-4 py-3 transition-all focus:border-[#0781fe] focus:ring-1 focus:ring-[#0781fe] focus:outline-none"
                placeholder="Ask us anything..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#fed50a] py-3 font-bold text-[#0b1220] transition-transform hover:bg-[#fed50a]/90 active:scale-95"
            >
              {isSent ? "Message Sent!" : "Send Message"}
              {!isSent && <Send size={18} />}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuestionForm;
