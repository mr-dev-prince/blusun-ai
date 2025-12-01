import React, { useState, useEffect } from "react";
import sun from "../assets/sun-icon.svg";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  Briefcase,
  Info,
  Mail,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

const NavBar: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.1;
      if (window.scrollY > threshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggleMenu = () => setOpenMenu((prev) => !prev);
  const handleCloseMenu = () => setOpenMenu(false);

  const overlayLinks = [
    {
      to: "/work",
      text: "Our Work",
      icon: <Briefcase size={32} />,
      desc: "Case studies & portfolio",
    },
    {
      to: "/about",
      text: "About Us",
      icon: <Info size={32} />,
      desc: "Our team & mission",
    },
    {
      to: "/contact",
      text: "Contact Us",
      icon: <Mail size={32} />,
      desc: "Get in touch today",
    },
  ];

  const mainLinks = [
    { to: "/services", text: "Services" },
    { to: "/industries", text: "Industries" },
    { to: "/faqs", text: "FAQs" },
    { to: "/reviews", text: "Reviews" },
    { to: "/blogs", text: "Blog" },
    { to: "/why-us", text: "Why Blusun?" },
  ];

  return (
    <>
      <div
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ease-in-out ${
          scrolled
            ? "border-b border-[#e6eef8]/10 bg-[#0b1220]/80 py-3 shadow-lg shadow-[#0781fe]/5 backdrop-blur-md"
            : "bg-transparent py-6"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
          <Link
            to="/"
            className="group flex items-center gap-2"
            onClick={handleCloseMenu}
          >
            <div className="relative">
              <img src={sun} className="h-8" />
            </div>
          </Link>
          <div className="hidden items-center gap-8 lg:flex">
            {mainLinks.map((link) => (
              <Link
                key={link.text}
                to={link.to}
                className="group text-md relative font-semibold text-[#e6eef8]/80 transition-colors hover:text-[#fed50a]"
              >
                {link.text}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#fed50a] transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>
          <button
            onClick={handleToggleMenu}
            className="p-2 text-[#e6eef8] transition-colors hover:text-[#fed50a] focus:outline-none md:hidden"
          >
            {openMenu ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* ---------------- FULL SCREEN OVERLAY MENU ---------------- 
        Logic: max-h-0 to max-h-screen for slide effect, or opacity fade.
        We'll use a fixed overlay with translation for a smooth drawer effect.
      */}
      <div
        className={`fixed inset-0 z-40 bg-[#0b1220] transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          openMenu ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-[#0781fe] opacity-10 blur-[150px]"></div>

        <div className="flex h-full flex-col overflow-y-auto px-6 py-24 md:px-12">
          <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
            <div className="space-y-6">
              <h3 className="mb-4 text-sm font-bold tracking-widest text-[#0781fe] uppercase">
                Explore
              </h3>
              {overlayLinks.map((link, idx) => (
                <Link
                  key={idx}
                  to={link.to}
                  onClick={handleCloseMenu}
                  className="group flex items-center gap-6 rounded-2xl border border-[#e6eef8]/5 bg-[#0e1629] p-6 transition-all duration-300 hover:border-[#fed50a]/50 hover:bg-[#0e1629]/80"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#0781fe]/10 text-[#0781fe] transition-all duration-300 group-hover:bg-[#fed50a] group-hover:text-[#0b1220]">
                    {link.icon}
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white transition-colors group-hover:text-[#fed50a]">
                      {link.text}
                    </h4>
                    <p className="mt-1 text-sm text-[#e6eef8]/50">
                      {link.desc}
                    </p>
                  </div>
                  <div className="ml-auto -translate-x-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    <ChevronRight className="text-[#fed50a]" />
                  </div>
                </Link>
              ))}
            </div>
            <div className="space-y-8">
              <h3 className="mb-4 text-sm font-bold tracking-widest text-[#0781fe] uppercase lg:hidden">
                Menu
              </h3>

              {/* On Desktop, we might hide this list or keep it as a secondary list. 
                  For responsiveness, we definitely need it for Mobile since the top bar hides them. */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {mainLinks.map((link, idx) => (
                  <Link
                    key={idx}
                    to={link.to}
                    onClick={handleCloseMenu}
                    className="flex items-center justify-between rounded-xl border-b border-[#e6eef8]/5 p-4 text-xl font-medium text-[#e6eef8] transition-all duration-300 hover:bg-[#e6eef8]/5 hover:pl-6 hover:text-[#fed50a] lg:border-none"
                  >
                    {link.text}
                    <ExternalLink
                      size={16}
                      className="opacity-0 group-hover:opacity-100"
                    />
                  </Link>
                ))}
              </div>
              <div className="mt-auto border-t border-[#e6eef8]/10 pt-8">
                <p className="text-sm text-[#e6eef8]/40">
                  &copy; {new Date().getFullYear()} BluSun Agency.
                  <br />
                  Designed for the bold.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
