import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils";

import { styles } from "../js/styles";
import { aboutCards } from "../constants";

import { SectionWrapper } from "../hoc";
import { Tilt } from "react-tilt";

const AboutCard = ({ index, title, text, icon }) => {
  return (
    <article
      className={`${
        index % 2 !== 0 && "md:ml-auto lg:ml-0"
      } w-full md:max-w-2xl lg:w-1/3 lg:max-w-md lg:grow xl:flex-1 2xl:w-1/5`}
    >
      <Tilt
        options={{
          max: 60,
          scale: 1,
          speed: 450,
        }}
      >
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index + 1, 0.75)}
          className={`${
            index % 2 === 0
              ? "border-sky-500"
              : "border-cyan-500 md:ml-auto md:text-right lg:ml-0 lg:text-left"
          } w-full rounded-2xl border`}
        >
          <div className="flex min-h-[240px] flex-col items-center justify-between gap-y-2 rounded-2xl bg-white p-10 xl:min-h-[320px]">
            <div className="w-full">
              <img
                src={icon}
                width={64}
                color={`${index % 2 === 0 ? "#0ea5e9" : "#06b6d4"}`}
                alt=""
              />
            </div>

            <motion.blockquote className="w-full space-y-4">
              <h3
                className={`${styles.cardSubText} ${
                  index % 2 === 0 ? "text-sky-500" : "text-cyan-500"
                }`}
              >
                {title}
              </h3>
              <p className={`${styles.cardParagraphText}`}>{text}</p>
            </motion.blockquote>
          </div>
        </motion.div>
      </Tilt>
    </article>
  );
};

const About = () => {
  return (
    <motion.div className="relative mx-auto w-full">
      <div className="mt-4 flex flex-col items-start">
        <motion.div variants={textVariant(0.25)}>
          <h2 className={`${styles.sectionHeadText}`}>Tentang Kami</h2>
        </motion.div>
        <motion.blockquote
          className="mr-10 lg:w-2/3"
          variants={textVariant(0.5 * 1)}
        >
          {" "}
          <motion.p
            className={`${styles.sectionParagraphText} mt-3`}
            variants={fadeIn("right", "spring", 0.5 * 1, 1)}
          >
            SMP Alam Al-Izzah memadukan tiga kurikulum, yaitu Kurikulum Sekolah
            Alam, Kurikulum Kemendikbud, dan Kurikulum Pesantren. Program
            unggulan kami mencakup pembelajaran akhlak, logika berpikir,
            kepemimpinan, kewirausahaan, serta tahfidz dan tahsin bersyahadah.
          </motion.p>
        </motion.blockquote>
        <motion.div className="mb-10 mt-20 flex flex-wrap gap-8">
          {aboutCards.map((card, index) => (
            <AboutCard key={index} index={index} {...card} />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SectionWrapper(About, { idName: "about" });
