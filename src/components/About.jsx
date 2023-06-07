/* eslint-disable react-refresh/only-export-components */
import { motion } from "framer-motion";
import { fadeIn, zoomIn, shuffle } from "../utils";

import { styles } from "../js/styles";
import { aboutImages } from "../constants";

import { SectionWrapper } from "../hoc";

const shuffleAboutImages = shuffle(aboutImages);

const About = () => {
  return (
    <div className="mx-auto w-full">
      <div className="relative flex flex-wrap">
        <div className="mt-4 flex flex-col items-start sm:w-1/2">
          <div>
            <h1 className={`${styles.sectionHeadText} w-full`}>Tentang Kami</h1>
          </div>
          <div className="mr-10">
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
            <motion.p
              className={`${styles.sectionParagraphText} mt-3`}
              variants={fadeIn("right", "spring", 0.5 * 2, 1)}
            >
              Dengan kelulusan standar yang mencakup hafalan Al-Quran
              bersyahadah, kemampuan berbahasa Arab dan Inggris yang aktif,
              serta jiwa mandiri, kepemimpinan, dan kewirausahaan, siswa juga
              berkesempatan mendapatkan beasiswa.
            </motion.p>
          </div>
        </div>
        <div className="w-full sm:w-1/2">
          <div className="mx-auto mt-6">
            <motion.div className="grid w-full grid-cols-2 gap-2">
              {shuffleAboutImages.map((image, index) => (
                <motion.div
                  className="overflow-clip rounded-2xl border-2 border-tertiary"
                  key={index}
                  variants={zoomIn(0.5 * (index + 1), 1)}
                >
                  <motion.img src={image.url} alt={image.title} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
