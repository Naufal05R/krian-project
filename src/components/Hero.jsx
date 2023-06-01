import { styles } from "../styles";

import { heroHeadings } from "../constants";

const Hero = () => {
  return (
    <section className="relative mx-auto h-screen w-full">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[84px] mx-auto flex max-w-7xl flex-col items-start xs:top-[120px]`}
      >
        <div>
          <h2 className={`${styles.heroHeadText} w-full text-center`}>
            Sekolah Al-Izzah
            <br />{" "}
            <div className="flex flex-col w-full max-h-[32px] xs:max-h-[40px] overflow-hidden">
              {heroHeadings.map((text) => (
                <span
                  className={`${styles.heroHeadText} relative z-10 w-fit mx-auto`}
                  key={text}
                >
                  {text}
                  <div className="absolute bottom-0 left-0 -z-10 h-1/3 w-full bg-blue-300" />
                </span>
              ))}
            </div>
          </h2>
          <p className={`${styles.heroParagraph} mt-8 text-center`}>
            Lorem ipsum dolor sit amet consectetur. Rutrum blandit bibendum mi
            ultricies tristique. Lorem Ipsum Dolor sit
          </p>
        </div>
        <div className="mx-auto mt-6 flex w-full max-w-[244px] justify-between text-[12px] font-bold">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full bg-sky-500 px-[18px] py-3 text-white hover:bg-sky-400 hover:text-neutral-50 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Pendaftaran
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full border border-sky-500 px-[18px] py-3 text-sky-500 hover:border-sky-400 hover:bg-sky-400 hover:text-neutral-50 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Hubungi Kami
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
