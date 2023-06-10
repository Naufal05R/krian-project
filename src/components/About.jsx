/* eslint-disable react-refresh/only-export-components */
import { motion } from "framer-motion";
import { fadeIn, zoomIn, shuffle, textVariant } from "../utils";

import { styles } from "../js/styles";
import { aboutImages } from "../constants";

import { SectionWrapper } from "../hoc";
import { Tilt } from "react-tilt";
import Gallery from './Gallery';

const shuffleAboutImages = shuffle(aboutImages);

const AboutCard = ({ index, title, url }) => {
  return (
    <Tilt
      className="w-full xs:w-1/3"
      options={{
        max: 60,
        scale: 1,
        speed: 450,
      }}
    >
      <motion.div
        variants={fadeIn("right", "spring", .5 * index, .75)}
        className="h-full w-full rounded-2xl"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="h-full w-full flex-col items-center justify-evenly overflow-clip rounded-2xl object-cover"
        >
          <img src={url} alt={title} className="h-full w-full object-contain" />
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <div className="mx-auto w-full">
      <div className="relative flex flex-wrap">
        <div className="mt-4 flex flex-col items-start">
          <motion.div variants={textVariant(0.25)}>
            <h2 className={`${styles.sectionHeadText} w-full`}>Tentang Kami</h2>
          </motion.div>
          <motion.blockquote
            className="mr-10 lg:w-2/3"
            variants={textVariant(0.5 * 1)}
          >
            <motion.p
              className={`${styles.sectionParagraphText} mt-3`}
              variants={fadeIn("right", "spring", 0.5 * 1, 1)}
            >
              SMP Alam Al-Izzah memadukan tiga kurikulum, yaitu Kurikulum
              Sekolah Alam, Kurikulum Kemendikbud, dan Kurikulum Pesantren.
              Program unggulan kami mencakup pembelajaran akhlak, logika
              berpikir, kepemimpinan, kewirausahaan, serta tahfidz dan tahsin
              bersyahadah.
            </motion.p>
          </motion.blockquote>
          <motion.blockquote
            className="mr-10 lg:w-2/3"
            variants={textVariant(0.5 * 2)}
          >
            <motion.p
              className={`${styles.sectionParagraphText} mt-3`}
              variants={fadeIn("right", "spring", 0.5 * 2, 1)}
            >
              Dengan kelulusan standar yang mencakup hafalan Al-Quran
              bersyahadah, kemampuan berbahasa Arab dan Inggris yang aktif,
              serta jiwa mandiri, kepemimpinan, dan kewirausahaan, siswa juga
              berkesempatan mendapatkan beasiswa.
            </motion.p>
          </motion.blockquote>
          <Gallery />
          {/* <div className="mt-20 flex flex-wrap gap-8">
            {shuffleAboutImages.map((img, index) => (
              <AboutCard key={img.title} index={index} {...img} />
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
