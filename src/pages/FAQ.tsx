import React from "react";
import Hero from "../components/FAQ/Hero";
import Accordion from "../components/Accordion";
import QuestionForm from "../components/FAQ/QuestionForm";

const FAQ: React.FC = () => {
  return (
    <div
      className="min-h-screen font-sans selection:bg-[#fed50a] selection:text-[#0b1220]"
      style={{ backgroundColor: "#0b1220", color: "#e6eef8" }}
    >
      <Hero />
      <Accordion />
      <QuestionForm />
    </div>
  );
};

export default FAQ;
