import React from "react";
import logo from "../assets/blusun-hg-logo-yellow.png";
import { BiDownArrow } from "react-icons/bi";
import Welcome from "../components/Landing/Welcome";
import Service1 from "../components/Landing/Service1";
import Service2 from "../components/Landing/Service2";
import Service3 from "../components/Landing/Service3";
import Service4 from "../components/Landing/Service4";
import Service5 from "../components/Landing/Service5";
import Service6 from "../components/Landing/Service6";

const Landing: React.FC = () => {
  return (
    <div className="h-fit w-full">
      <div className="relative flex h-screen w-full items-center justify-center">
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
          <h1 className="text-primary text-9xl font-black -tracking-wider">
            BLUSUN.AI
          </h1>
        </div>
      </div>
      <Welcome />
      <Service1 />
      <Service2 />
      <Service3 />
      <Service4 />
      <Service5 />
      <Service6 />
    </div>
  );
};

export default Landing;
