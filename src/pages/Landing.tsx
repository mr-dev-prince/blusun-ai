import React from "react";
import logo from "../assets/blusun-hg-logo-yellow.png";
import { BiDownArrow } from "react-icons/bi";
import Welcome from "../components/Landing/Welcome";

const Landing: React.FC = () => {
  return (
    <div className="h-screen w-full">
      <div className="relative flex h-full w-full items-center justify-center">
        <div className="absolute top-12 right-12 uppercase">
          <p className="font-semibold tracking-tighter">
            parthsarthisinh <br /> padhiyar{" "}
          </p>
        </div>
        {/* <div className="absolute bottom-10 px-24 font-medium tracking-tight uppercase">
          <p>
            Blusun.ai isn’t another <strong>“content agency.”</strong> We turn
            your ideas into posts people actually vibe with. LinkedIn that pops,
            blogs that rank, and zero cringe. AI gives us speed, humans add
            spice, you get authority. You talk, we type, and the internet pays
            attention.
          </p>
        </div> */}
        <div className="absolute bottom-20 animate-bounce">
          <BiDownArrow color="#fed50a" size={28} />
        </div>
        <div>
          <img src={logo} className="h-64" alt="" />
        </div>
        <div>
          <h1 className="text-primary-text text-9xl font-black -tracking-wider">
            BLUSUN.AI
          </h1>
        </div>
      </div>
      <Welcome />
    </div>
  );
};

export default Landing;
