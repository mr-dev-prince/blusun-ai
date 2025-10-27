import React from "react";
import { Link } from "react-router-dom";

const Contact: React.FC = () => {
  return (
    <div className="relative h-screen">
      <div className="flex h-full w-full items-center justify-center">
        <p className="text-primary text-center text-6xl md:text-9xl font-black tracking-tighter uppercase">
          Contact <br /> Us
        </p>
      </div>
      <Link
        to="www.blusun.com"
        className="text-primary absolute top-32 left-12 font-semibold uppercase"
      >
        www.blusun.ai
      </Link>
      <Link
        to="www.blusun.com"
        className="text-primary hidden md:block absolute bottom-32 left-12 font-semibold uppercase"
      >
        parthsarthisinh@blusun.com
      </Link>
      <Link
        to="www.blusun.com"
        className="text-primary md:hidden absolute bottom-32 left-12 font-semibold uppercase"
      >
        Gmail
      </Link>
      <p className="text-primary absolute top-32 right-12 font-semibold uppercase">
        +91 8097767509
      </p>
      <Link
        to="/"
        className="text-primary absolute right-12 bottom-32 font-semibold uppercase"
      >
        @Blusun.ai
      </Link>
    </div>
  );
};

export default Contact;
