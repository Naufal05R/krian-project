import { useState } from "react";
import { styles } from "../styles";
import { Link } from "react-router-dom";

import { jsan, logo } from "../assets";
import { navLinks, footerLinks, footerIcons } from "../constants";

const Footer = () => {
  const [active, setActive] = useState("");

  return (
    <footer className="relative mx-auto mt-6 w-full bg-blue-950">
      <div className={`${styles.padding} mx-auto max-w-7xl`}>
        <article className="flex flex-col pb-12">
          <div>
            <Link
              to="/"
              className="flex items-center gap-2"
              onClick={() => {
                window.scroll(0, 0);
              }}
            >
              <img src={logo} alt="logo" className="h-9 w-9 object-contain " />
              <img src={jsan} alt="jsan" className="h-9 w-9 object-contain " />
            </Link>
          </div>
          <ul className="mt-3 flex w-full list-none flex-wrap justify-between gap-4">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white/90 underline" : ""
                } cursor-pointer text-[12px] font-medium text-white hover:text-white/90 hover:underline`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{`${link.title}`}</a>
              </li>
            ))}
          </ul>
          <div className="mt-3">
            <h4 className={`${styles.sectionHeadText} w-full text-white`}>
              Sekolah Alam
            </h4>
            <h4 className={`${styles.sectionHeadText} w-full text-white`}>
              Boarding School
            </h4>
          </div>
        </article>
        <div className="flex flex-wrap gap-y-[24px]">
          {footerLinks.map((link) => (
            <article
              className="flex w-6/12 flex-col gap-y-[12px]"
              key={link.title}
            >
              <h5 className={`${styles.footerSubText}`}>{link.title}</h5>
              {link.contents.map((content) => (
                <a
                  className={`${styles.footerParagraph}`}
                  key={content.text}
                  href={`${content.url}`}
                >
                  {content.text}
                </a>
              ))}
            </article>
          ))}
        </div>
        <div className={`mt-6 flex w-full flex-col justify-between`}>
          <hr className="w-full border-[.5px] border-[#BFDBFE]/30" />
          <div className="mt-6 flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <p className={`${styles.footerParagraph}`}>
                Established at 2017.
              </p>
              <p className={`${styles.footerParagraph}`}>
                &#169; 2023 All right reserved.
              </p>
            </div>
            <ul className="flex gap-x-2">
              {footerIcons.map((link) => (
                <li
                  key={link.title}
                  className={`${
                    active === link.title ? "text-white/90 underline" : ""
                  } cursor-pointer font-medium text-white hover:text-white/90 hover:underline`}
                  onClick={() => setActive(link.title)}
                >
                  <a href={`${link.url}`} target="blank">
                    <img src={`${link.img}`} alt="" height="24" width="24" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
