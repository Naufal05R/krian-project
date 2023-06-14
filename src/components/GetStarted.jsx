import { motion } from 'framer-motion';

import { styles } from '../js';
import { staggerContainer, fadeIn, objectVariants, textVariant } from '../utils/motion';
import { startingFeatures } from '../constants';

import { frame23001 } from '../assets';

import { SectionWrapper } from '../hoc';
import { StartSteps } from '../components';

const GetStarted = () => {
  return (
    <motion.div
      variants={staggerContainer()}
      className={`${styles.innerWidth} mx-auto flex flex-col gap-8 lg:flex-row`}
    >
      <motion.div
        variants={objectVariants('left')}
        className={`flex-1 ${styles.flexCenter} relative flex items-center justify-center`}
      >
        <div className='relative h-[75%] w-[90%] overflow-clip rounded-2xl'>
          <div className='absolute -z-10 h-full w-full bg-neutral-400' />
          <img
            src={frame23001}
            alt='Kegiatan pertama'
            className='h-full w-full object-cover'
          />
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className='flex flex-[0.75] flex-col justify-center'
      >
        <motion.div variants={textVariant(0.25)}>
          <h2 className={`${styles.sectionHeadText} w-full`}>Kegiatan Pertama</h2>
        </motion.div>
        <div className='mt-[31px] flex max-w-[370px] flex-col gap-[24px]'>
          {startingFeatures.map((feature, index) => (
            <StartSteps
              key={feature}
              number={index + 1}
              text={feature}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SectionWrapper(GetStarted, '');
