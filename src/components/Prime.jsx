import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils";

import { styles } from "../js/styles";
import { primeCards } from "../constants";

import { SectionWrapper } from "../hoc";
import { Tilt } from "react-tilt";

const PrimeCard = ({ index, title, text, url }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index + 1, 0.75)}
      className={`grow md:max-w-[300px] xl:max-w-[360px] ${
        index % 3 === 0 ? `md:order-[${index + 1}]` : `md:order-[${index + 9}]`
      }`}
    >
      <div className="grow py-6">
        <div
          className={`flex items-center gap-4 rounded-2xl object-cover md:flex-col md:justify-between`}
        >
          <Tilt
            options={{
              max: 90,
              scale: 1,
            }}
          >
            <motion.div
              className={`${index % 2 === 0 ? "bg-sky-200" : "bg-cyan-200"} ${
                index % 3 === 0 ? "order-4" : ""
              } flex h-[56px] min-w-[56px] overflow-clip rounded-full p-2`}
            >
              <motion.div className="m-auto h-full w-full rounded-full bg-white shadow-icon">
                <div className="flex h-full w-full items-center justify-center">
                  <img
                    src={url}
                    width={24}
                    color={`${index % 2 === 0 ? "#0ea5e9" : "#06b6d4"}`}
                    alt=""
                  />
                </div>
              </motion.div>
            </motion.div>
          </Tilt>
          <motion.blockquote className="w-full space-y-2 md:text-center">
            <h4
              className={`${styles.groupSubText} ${
                index % 2 === 0 ? "text-sky-500" : "text-cyan-500"
              }`}
            >
              {title}
            </h4>
            <p className={`${styles.groupParagraphText} text-slate-500`}>
              {text}
            </p>
          </motion.blockquote>
        </div>
      </div>
    </motion.div>
  );
};

const Prime = () => {
  return (
    <div className="mx-auto w-full">
      <div className="relative mt-4 flex flex-col items-start">
        <motion.div variants={textVariant(0.25)}>
          <h2 className={`${styles.sectionHeadText} w-full`}>
            Keunggulan Kami
          </h2>
        </motion.div>
        <motion.blockquote
          className="mr-10 lg:w-2/3"
          variants={textVariant(0.5 * 1)}
        >
          <motion.p
            className={`${styles.sectionParagraphText} mt-3`}
            variants={fadeIn("right", "spring", 0.5 * 1, 1)}
          >
            Dengan kelulusan standar yang mencakup hafalan Al-Quran bersyahadah,
            kemampuan berbahasa Arab dan Inggris yang aktif, serta jiwa mandiri,
            kepemimpinan, dan kewirausahaan, siswa juga berkesempatan
            mendapatkan beasiswa.
          </motion.p>
        </motion.blockquote>
        <motion.div className="mx-auto mt-20 flex flex-wrap gap-8 md:justify-around">
          {primeCards.map((group, index) => (
            <PrimeCard
              key={group.title}
              index={index}
              url={group.icon}
              {...group}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Prime, { idName: "prime" });
