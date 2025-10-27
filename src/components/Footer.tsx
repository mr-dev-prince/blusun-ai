import React, { type JSX } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../assets/blusun-hg-logo-yellow.png";

interface SocialLink {
  name: string;
  url: string;
  icon: JSX.Element;
}

const socialLinks: SocialLink[] = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/YourPage",
    icon: <FaFacebookF />,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/YourProfile",
    icon: <FaTwitter />,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/YourProfile",
    icon: <FaXTwitter />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/YourProfile",
    icon: <FaLinkedinIn />,
  },
];

const Footer: React.FC = () => {
  return (
    <div className="border-primary/20 flex flex-col md:flex-row h-fit items-center justify-center md:justify-between border-t md:px-24 py-4 text-black">
      <div className="flex items-center justify-center gap-3">
        <img src={logo} alt="" className="h-12" />
        <p className="text-primary text-3xl font-black">BLUSUN.AI</p>
      </div>
      <div>
        <p className="text-secondary text-xs font-semibold uppercase">
          © 2025 BluSun.ai. All rights reserved.
        </p>
      </div>
      <div className="flex gap-10 mt-4 md:mt-0">
        {socialLinks.map((social) => (
          <Link
            key={social.name}
            to={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-primary text-2xl transition"
          >
            {social.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
