import { Quote, Star } from "lucide-react";
import React from "react";

const colors = {
  bg: "#0b1220",
  accent: "#0781fe",
  primary: "#fed50a",
  text: "#e6eef8",
};

const ReviewList: React.FC = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Jenkins",
      role: "CMO at TechFlow",
      content:
        "The technical accuracy was outstanding. It's rare to find writers who understand Kubernetes architecture and can explain it simply.",
      rating: 5,
    },
    {
      id: 2,
      name: "David Chen",
      role: "Founder, SaaSify",
      content:
        "They completely revamped our landing page copy. Conversion rates went up by 15% in the first month alone.",
      rating: 5,
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "Marketing Lead, FinStart",
      content:
        "Professional, timely, and minimal edits needed. The 'Download Sample' they provided during the pitch was exactly what we got.",
      rating: 4,
    },
    {
      id: 4,
      name: "Marcus Johnson",
      role: "Product Manager",
      content:
        "Our blog traffic has doubled since we started the content retainer. The SEO strategy is clearly working.",
      rating: 5,
    },
  ];

  return (
    <section className="bg-[#0b1220] px-6 py-20 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="group relative rounded-2xl border border-[#e6eef8]/5 bg-[#0e1629] p-8 transition-all duration-300 hover:border-[#0781fe]/50"
            >
              {/* Quote Icon Background */}
              <div className="absolute top-8 right-8 text-[#e6eef8]/5 transition-colors group-hover:text-[#0781fe]/10">
                <Quote size={48} />
              </div>

              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={i < review.rating ? colors.primary : "none"}
                    className={
                      i < review.rating ? "text-[#fed50a]" : "text-[#e6eef8]/20"
                    }
                  />
                ))}
              </div>

              <p className="relative z-10 mb-6 text-lg text-[#e6eef8]/90">
                "{review.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-[#0781fe] to-[#055dc7] text-sm font-bold text-white">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-white">{review.name}</div>
                  <div className="text-sm text-[#0781fe]">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewList;
