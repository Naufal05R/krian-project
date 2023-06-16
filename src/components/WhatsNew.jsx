import { motion } from 'framer-motion';

import { styles } from '../js';
import { staggerContainer, fadeIn, objectVariants, textVariant } from '../utils/motion';
import { NewFeatures } from '../components';

import { newFeatures } from '../constants';

import { SectionWrapper } from '../hoc';
import { frame23002 } from '../assets';

const WhatsNew = () => (
  <motion.div
    variants={staggerContainer()}
    className={`${styles.innerWidth} mx-auto flex flex-col gap-8 lg:flex-row`}
  >
    <motion.div
      variant={fadeIn('right', 'tween', 0.2, 1)}
      className='flex flex-[0.75] flex-col justify-center'
    >
      <motion.div variants={textVariant(0.25)}>
        <h2 className={`${styles.sectionHeadText} w-fit`}>Kegiatan Kedua</h2>
      </motion.div>
      <div className='mt-[48px] flex flex-wrap justify-between gap-[24px]'>
        {newFeatures.map((feature, index) => (
          <NewFeatures
            key={feature.title}
            index={index}
            {...feature}
          />
        ))}
      </div>
    </motion.div>
    <motion.div
      variants={objectVariants('right')}
      className={`flex-1 ${styles.flexCenter} relative flex items-center justify-center`}
    >
      <div className='relative h-[90%] w-[90%] overflow-clip rounded-2xl'>
        <div className='absolute -z-10 h-full w-full bg-neutral-400' />
        <img
          src={frame23002}
          alt='Kegiatan pertama'
          className='h-full w-full object-cover'
        />
      </div>
    </motion.div>
  </motion.div>
);

export default SectionWrapper(WhatsNew, '');
