import { Building, Send, Star, User } from "lucide-react";
import React, { useState } from "react";

const colors = {
  bg: "#0b1220",
  accent: "#0781fe",
  primary: "#fed50a",
  text: "#e6eef8",
};

const WriteReview: React.FC = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="relative px-6 py-24 md:px-12">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-3xl border border-[#e6eef8]/10 bg-[#e6eef8]/5 p-8 shadow-2xl backdrop-blur-sm md:p-12">
          <div className="mb-8 text-center">
            <h2 className="mb-2 text-3xl font-bold text-white">
              Worked with us?
            </h2>
            <p className="text-[#e6eef8]/60">
              Share your experience. We love feedback.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Rating Input */}
            <div className="mb-6 flex flex-col items-center gap-2">
              <label className="text-sm font-medium text-[#e6eef8]/70">
                Your Rating
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="transition-transform hover:scale-110 focus:outline-none"
                  >
                    <Star
                      size={32}
                      fill={
                        (hoverRating || rating) >= star
                          ? colors.primary
                          : "none"
                      }
                      className={
                        (hoverRating || rating) >= star
                          ? "text-[#fed50a]"
                          : "text-[#e6eef8]/20"
                      }
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-[#e6eef8]/70">
                  <User size={14} /> Full Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full rounded-lg border border-[#e6eef8]/10 bg-[#0b1220] px-4 py-3 text-white transition-all outline-none focus:border-[#fed50a] focus:ring-1 focus:ring-[#fed50a]"
                  placeholder="Jane Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-[#e6eef8]/70">
                  <Building size={14} /> Company
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-[#e6eef8]/10 bg-[#0b1220] px-4 py-3 text-white transition-all outline-none focus:border-[#fed50a] focus:ring-1 focus:ring-[#fed50a]"
                  placeholder="Company Ltd"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-[#e6eef8]/70">
                Review
              </label>
              <textarea
                rows={4}
                required
                className="w-full resize-none rounded-lg border border-[#e6eef8]/10 bg-[#0b1220] px-4 py-3 text-white transition-all outline-none focus:border-[#fed50a] focus:ring-1 focus:ring-[#fed50a]"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="flex w-full transform items-center justify-center gap-2 rounded-xl py-4 text-lg font-bold text-[#0b1220] transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-[#fed50a]/20"
              style={{ backgroundColor: colors.primary }}
            >
              {submitted ? "Review Submitted!" : "Submit Review"}
              {!submitted && <Send size={20} />}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default WriteReview;
