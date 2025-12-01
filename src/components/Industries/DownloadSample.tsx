import { Send } from "lucide-react";
import React, { useState } from "react";

const DownloadSample: React.FC = () => {
  // Simple state for form handling
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    // Add your API logic here
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="relative overflow-hidden px-6 py-24 md:px-12">
      {/* Decorative Background for Section 3 */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background: `linear-gradient(135deg, #0b1220 0%, #0781fe 100%)`,
        }}
      ></div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-12 rounded-3xl border border-[#e6eef8]/10 bg-[#0b1220]/50 p-8 backdrop-blur-lg md:flex-row md:p-16">
        {/* Text Side */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl font-bold md:text-5xl">
            See the <span style={{ color: "#fed50a" }}>Quality</span> yourself.
          </h2>
          <p className="text-lg text-[#e6eef8]/80">
            Not sure if we are the right fit? Download a free portfolio sample
            pack tailored to your industry.
          </p>
          <ul className="space-y-3 text-[#e6eef8]/70">
            <li className="flex items-center gap-2">
              ✓ SEO-Optimized Articles
            </li>
            <li className="flex items-center gap-2">
              ✓ Technical Documentation Snippets
            </li>
            <li className="flex items-center gap-2">
              ✓ High-Converting Email Copy
            </li>
          </ul>
        </div>

        {/* Form Side */}
        <div className="w-full max-w-md flex-1">
          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-2xl border border-[#e6eef8]/10 bg-[#0b1220] p-8 shadow-xl"
          >
            <h3 className="mb-2 text-xl font-semibold">Get your sample pack</h3>

            <div className="space-y-1">
              <label className="text-sm font-medium text-[#e6eef8]/60">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full rounded-lg border border-[#e6eef8]/10 bg-[#e6eef8]/5 px-4 py-3 transition-all focus:border-[#0781fe] focus:ring-1 focus:ring-[#0781fe] focus:outline-none"
                placeholder="John Doe"
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-[#e6eef8]/60">
                Work Email
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full rounded-lg border border-[#e6eef8]/10 bg-[#e6eef8]/5 px-4 py-3 transition-all focus:border-[#0781fe] focus:ring-1 focus:ring-[#0781fe] focus:outline-none"
                placeholder="john@company.com"
              />
            </div>

            <button
              type="submit"
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg py-4 font-bold text-[#0b1220] transition-transform hover:scale-[1.02]"
              style={{ backgroundColor: "#fed50a" }}
            >
              {submitted ? "Sent Successfully!" : "Send Sample to Email"}
              {!submitted && <Send size={18} />}
            </button>

            <p className="mt-4 text-center text-xs text-[#e6eef8]/40">
              We'll email the PDF immediately. No spam.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default DownloadSample;
