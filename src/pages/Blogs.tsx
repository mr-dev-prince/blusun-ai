import React from "react";
import Hero from "../components/Blogs/Hero";
import BlogListing from "../components/Blogs/BlogListing";
import TopicSuggestion from "../components/Blogs/TopicSuggestion";

const colors = {
  bg: "#0b1220",
  accent: "#0781fe",
  primary: "#fed50a",
  text: "#e6eef8",
};

const Blogs: React.FC = () => {
  return (
    <div
      className="min-h-screen font-sans selection:bg-[#fed50a] selection:text-[#0b1220]"
      style={{ backgroundColor: colors.bg, color: colors.text }}
    >
      <Hero />
      <BlogListing />
      <TopicSuggestion />
    </div>
  );
};

export default Blogs;
