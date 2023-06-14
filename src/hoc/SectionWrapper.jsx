import { motion } from 'framer-motion';

import { styles } from '../js/styles';
import { staggerContainer } from '../utils/motion';

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.1 }}
        className={`${styles.padding} relative z-0 mx-auto mt-6 sm:mt-12 lg:mt-20 overflow-x-clip`}
      >
        <span
          className='hash-span'
          id={idName}
        >
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
