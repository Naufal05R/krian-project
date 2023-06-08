import React from "react";
import { motion } from "framer-motion";

import { image } from "../constants";
import { fadeIn, slideIn, zoomIn } from "../utils";
import { styles } from "../js";

import { SectionWrapper } from "../hoc";

const Gallery = () => {
  return (
    <div className="mx-auto mt-[80px] w-full">
      <div>
        <h2 className={`${styles.sectionHeadText} mb-12 w-full`}>
          Dokumentasi Kami
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-2 md:gap-4 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
        {image.img11.map((img, index) => (
          <>
            <motion.article
              className="overflow-hidden"
              variants={slideIn("up", "spring", 0.1 * index, 0.75)}
              key={index}
            >
              <motion.div
                className="relative h-full w-full overflow-clip rounded-2xl"
                variants={zoomIn(0.1 * index, 0.75)}
              >
                <motion.div className={`w-full bg-neutral-400 pb-[100%]`} />
                <motion.img
                  className="absolute top-0 z-10 h-full w-full"
                  src={img.url}
                />
              </motion.div>
            </motion.article>
          </>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Gallery, "gallery");
