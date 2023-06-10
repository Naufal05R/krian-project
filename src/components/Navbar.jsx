import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../js/styles";
import { navLinks } from "../constants";
import { logo, darkClose, darkMenu, lightClose, lightMenu } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const [bgNavbar, setBgNavbar] = useState("");
  const [textColor, setTextColor] = useState("");
  const [menu, setMenu] = useState(lightMenu);
  const [close, setClose] = useState(lightClose);
  const [absoluteBackground, setAbsoluteBackground] = useState("");

  useEffect(() => {
    const handleBgNavbarGlossy = () => {
      setBgNavbar("white-glossy border-b border-neutral-100 shadow-card-xs");
      setTextColor("text-black-100");
      setClose(darkMenu);
      setMenu(darkClose);
      setAbsoluteBackground("opacity-0");
    };

    const handleBgNavbarTransparent = () => {
      setBgNavbar("bg-transparent");
      setTextColor("text-white");
      setClose(lightClose);
      setMenu(lightMenu);
      setAbsoluteBackground("opacity-100");
    };

    const handleBgNavbar = () => {
      window.scrollY > 1 ? handleBgNavbarGlossy() : handleBgNavbarTransparent();
    };

    window.addEventListener("scroll", handleBgNavbar);
  }, []);

  return (
    <nav className="relative text-white">
      <div
        className={`${styles.paddingX} ${bgNavbar} ${textColor} fixed z-20 flex w-full items-center py-5 transition duration-500`}
      >
        <div className="mx-auto flex w-full items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scroll(0, 0);
            }}
          >
            <img src={logo} alt="logo" className="h-9 w-9 object-contain" />
            <p className="flex cursor-pointer text-[18px] font-bold">
              <span className="block uppercase">Al-Izzah</span>
            </p>
          </Link>
          <ul className="hidden list-none flex-row gap-10 lg:flex">
            <Link
              to={`/${navLinks[0].id}`}
              className={`${
                active === navLinks[0].title ? "text-blue-500" : `${textColor}`
              } cursor-pointer text-[18px] font-medium transition duration-500 hover:text-blue-500`}
              onClick={() => setActive(navLinks[0].title)}
            >
              {navLinks[0].title}
            </Link>
            {navLinks.slice(1, 5).map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-blue-500" : `${textColor}`
                } cursor-pointer text-[18px] font-medium transition duration-500 hover:text-blue-500`}
                onClick={() => {
                  setActive(link.title);
                  window.scroll(0, 0);
                }}
              >
                <a href={`#${link.id}`}>{`${link.title}`}</a>
              </li>
            ))}
          </ul>

          <div className="flex flex-1 items-center justify-end lg:hidden">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="h-7 w-7 cursor-pointer object-contain"
              onClick={() => setToggle(!toggle)}
            />
          </div>
        </div>
      </div>
      <div
        className={`${
          toggle ? "flex" : "hidden"
        } white-glossy fixed right-0 top-20 z-20 mx-4 my-2 min-w-[140px] rounded-xl border-b border-l border-neutral-100 p-6 shadow-card-xs`}
      >
        <ul className="flex list-none flex-col items-start justify-end gap-4">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-black" : "text-tertiary"
              } font-poppins cursor-pointer text-[16px] font-medium`}
              onClick={() => {
                setToggle(!toggle);
                setActive(link.title);
              }}
            >
              <a href={`#${link.id}`}>{`${link.title}`}</a>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`${absoluteBackground} fixed top-0 z-10 w-full bg-black pb-[76px] transition-opacity duration-500`}
      />
    </nav>
  );
};

export default Navbar;
