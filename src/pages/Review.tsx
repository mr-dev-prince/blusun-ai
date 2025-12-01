import React from "react";
import Hero from "../components/Review/Hero";
import ReviewList from "../components/Review/ReviewList";
import WriteReview from "../components/Review/WriteReview";

const colors = {
  bg: "#0b1220",
  accent: "#0781fe",
  primary: "#fed50a",
  text: "#e6eef8",
};

const Review: React.FC = () => {
  return (
    <div
      className="min-h-screen font-sans selection:bg-[#fed50a] selection:text-[#0b1220]"
      style={{ backgroundColor: colors.bg, color: colors.text }}
    >
      <Hero />
      <ReviewList />
      <WriteReview />
    </div>
  );
};

export default Review;
