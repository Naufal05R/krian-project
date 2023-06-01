import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const [bgNavbar, setBgNavbar] = useState("");

  useEffect(() => {
    const handleBgNavbarGlossy = () => {
      setBgNavbar("white-glossy border-b border-neutral-100 shadow-card-xs");
    };

    const handleBgNavbarTransparent = () => {
      setBgNavbar("bg-transparent");
    }

    const handleBgNavbar = () => {
      window.scrollY > 0 ? handleBgNavbarGlossy() : handleBgNavbarTransparent();
    }

    window.addEventListener("scroll", handleBgNavbar);
  }, []);

  return (
    <nav>
      <div
        className={`${styles.paddingX} ${bgNavbar} fixed z-20 flex w-full items-center py-5`}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
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
              <span className="block">Al-Izzah</span>
            </p>
          </Link>
          <ul className="hidden list-none flex-row gap-10 sm:flex">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-blue-500" : "text-tertiary"
                } cursor-pointer text-[18px] font-medium hover:text-blue-500`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{`${link.title}`}</a>
              </li>
            ))}
          </ul>

          <div className="flex flex-1 items-center justify-end sm:hidden">
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
    </nav>
  );
};

export default Navbar;
