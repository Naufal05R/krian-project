import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../js/styles";
import { navLinks } from "../constants";

const Navbar = ({ absoluteBg = true }) => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const [bgNavbar, setBgNavbar] = useState("");
  const [bgToggle, setBgToggle] = useState("bg-white-100");
  const [textColor, setTextColor] = useState("");
  const [absoluteBackground, setAbsoluteBackground] = useState("");

  useEffect(() => {
    const handleBgNavbarGlossy = () => {
      setBgNavbar("white-glossy border-b border-neutral-100 shadow-card-xs");
      setTextColor("text-black-100");
      setBgToggle("bg-black-100");
      setAbsoluteBackground("opacity-0");
    };

    const handleBgNavbarTransparent = () => {
      setBgNavbar("bg-transparent");
      setTextColor("text-white");
      setBgToggle("bg-white-100");
      setAbsoluteBackground("opacity-100");
    };

    const handleBgNavbar = () => {
      window.scrollY > 1 ? handleBgNavbarGlossy() : handleBgNavbarTransparent();
    };

    window.addEventListener("scroll", handleBgNavbar);
  }, []);

  return (
    <nav className="relative z-30 text-white">
      <div
        className={`${styles.paddingX} ${bgNavbar} ${
          absoluteBg ? textColor : "text-black-100 backdrop-blur-xl"
        } fixed z-20 flex w-full items-center py-5 transition-all duration-500`}
      >
        <div className="mx-auto flex w-full items-center justify-between">
          <Link
            to="/"
            className="group flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scroll(0, 0);
            }}
          >
            <img
              src="/favicon.png"
              alt="logo"
              className="h-9 w-9 object-contain"
            />
            <p className="flex cursor-pointer text-[18px] font-bold">
              <span className="block uppercase group-hover:text-blue-500 group-hover:transition group-hover:duration-500">
                Al-Izzah
              </span>
            </p>
          </Link>
          <ul className="hidden list-none flex-row gap-10 lg:flex">
            {navLinks.slice(0, navLinks.length - 1).map((link) => (
              <Link
                key={link.id}
                to={`/${link.id}`}
                className={`${
                  active === link.title
                    ? "text-blue-500"
                    : `${absoluteBg ? textColor : "text-black-100"}`
                } cursor-pointer text-[18px] font-medium transition duration-500 hover:text-blue-500`}
                onClick={() => {
                  setActive(link.title);
                  window.scroll(0, 0);
                }}
              >
                {`${link.title}`}
              </Link>
            ))}
            <li
              className={`${
                active === navLinks[navLinks.length - 1].title
                  ? "text-blue-500"
                  : `${absoluteBg ? textColor : "text-black-100"}`
              } cursor-pointer text-[18px] font-medium transition duration-500 hover:text-blue-500`}
              onClick={() => {
                setActive(navLinks[navLinks.length - 1].id);
              }}
            >
              <a href={`#${navLinks[navLinks.length - 1].id}`}>
                {navLinks[navLinks.length - 1].title}
              </a>
            </li>
          </ul>

          <div
            className="flex h-8 w-8 select-none flex-col items-center justify-between py-px lg:hidden"
            onClick={() => setToggle(!toggle)}
          >
            <span
              className={`h-1 ${
                absoluteBg ? bgToggle : "bg-black-100"
              } w-full origin-left rounded-full transition duration-300 ${
                toggle ? "rotate-45 scale-x-[1.15]" : ""
              }`}
            />
            <span
              className={`h-1 ${
                absoluteBg ? bgToggle : "bg-black-100"
              } w-full origin-center rounded-full transition duration-300 ${
                toggle ? "scale-0" : ""
              }`}
            />
            <span
              className={`h-1 ${
                absoluteBg ? bgToggle : "bg-black-100"
              } w-full origin-left rounded-full transition duration-300 ${
                toggle ? "-rotate-45 scale-x-[1.15]" : ""
              }`}
            />
          </div>
        </div>
      </div>
      <div
        className={`${
          toggle ? "flex" : "hidden"
        } white-glossy fixed right-1 top-20 z-20 mx-4 my-2 min-w-[140px] rounded-xl border-b border-l border-neutral-100 p-6 shadow-card-xs sm:right-12`}
      >
        <ul className="flex list-none flex-col items-start justify-end gap-4">
          {navLinks.slice(0, navLinks.length - 1).map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-black" : "text-tertiary"
              } cursor-pointer text-[16px] font-medium`}
              onClick={() => {
                setToggle(!toggle);
                setActive(link.title);
                window.scroll(0, 0);
              }}
            >
              <Link to={`/${link.id}`}>{`${link.title}`}</Link>
            </li>
          ))}
          <li
            className={`${
              active === navLinks[navLinks.length - 1].title
                ? "text-black"
                : "text-tertiary"
            } cursor-pointer text-[16px] font-medium`}
            onClick={() => {
              setToggle(!toggle);
              setActive(navLinks[navLinks.length - 1].id);
            }}
          >
            <a href={`#${navLinks[navLinks.length - 1].id}`}>{`${
              navLinks[navLinks.length - 1].title
            }`}</a>
          </li>
        </ul>
      </div>
      {absoluteBg && (
        <div
          className={`${absoluteBackground} fixed top-0 z-10 w-full bg-black pb-[76px] transition-opacity duration-500`}
        />
      )}
    </nav>
  );
};

export default Navbar;
