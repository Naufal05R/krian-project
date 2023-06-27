import { motion } from 'framer-motion';

import { SectionWrapper } from "../hoc";
import { styles } from "../js/styles";
import Album from "./Album";

const Documentation = () => {
  return (
    <article className="">
      <motion.div className="mb-4">
        <h2 className={`${styles.sectionHeadText} w-fit`}>
          Dokumentasi Kami
        </h2>
      </motion.div>
      <Album />
    </article>
  );
};

export default SectionWrapper(Documentation, { idName: "documentation" });
