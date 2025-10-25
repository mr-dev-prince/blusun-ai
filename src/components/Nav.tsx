import React, { useState } from "react";
import { Link } from "react-router-dom";
import ham from "../assets/hamburger-icon.svg";
import sun from "../assets/sun-icon.svg";
import ow from "../assets/our-work.webp";
import cu from "../assets/contact.webp";
import au from "../assets/about-us.webp";
import { CgClose } from "react-icons/cg";

interface NavLinkItem {
  link: string;
  text: string;
  img: string;
}

interface NavElementProps {
  link: string;
  text: string;
  img: string;
  onClick: () => void;
}

const LINKS: NavLinkItem[] = [
  { link: "/work", text: "Our Work", img: ow },
  { link: "/about", text: "About Us", img: au },
  { link: "/contact", text: "Contact Us", img: cu },
];

const Nav: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const handleToggleMenu = (e?: React.MouseEvent<HTMLButtonElement>) => {
    e?.preventDefault();
    setOpenMenu((prev) => !prev);
  };

  const handleCloseMenu = () => setOpenMenu(false);

  return (
    <div className="fixed top-0 z-999 w-full">
      <div
        className={`bg-accent/70 fixed top-0 left-0 w-full overflow-hidden backdrop-blur-sm transition-all duration-700 ease-in-out ${
          openMenu ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="relative flex flex-col items-center justify-center gap-8 py-12">
          <button
            onClick={handleCloseMenu}
            className="bg-bg absolute top-4 right-8 p-3 text-white transition-all duration-200 hover:scale-110"
          >
            <CgClose size={24} />
          </button>
          <div
            className={`flex flex-col gap-6 transition-opacity duration-700 md:flex-row ${
              openMenu ? "opacity-100 delay-200" : "opacity-0"
            }`}
          >
            {LINKS.map((link, idx) => (
              <NavElement
                key={link.link + "-" + idx}
                {...link}
                onClick={handleCloseMenu}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Navbar Header */}
      <div className="flex h-fit w-full justify-between px-12 py-2">
        <Link to={"/"}>
          <img src={sun} className="h-8" />
        </Link>
        <button onClick={handleToggleMenu}>
          <img src={ham} alt="Menu" className="h-8" />
        </button>
      </div>
    </div>
  );
};

const NavElement: React.FC<NavElementProps> = ({
  link,
  text,
  img,
  onClick,
}) => {
  return (
    <Link
      to={link}
      onClick={onClick}
      className="relative overflow-hidden rounded-xl transition-all duration-200 hover:scale-105"
    >
      <img src={img} alt={text} className="h-48 w-34 object-cover" />
      <p className="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-blue-600/30 text-center font-semibold text-white">
        {text}
      </p>
    </Link>
  );
};

export default Nav;
