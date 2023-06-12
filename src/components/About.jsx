/* eslint-disable react-refresh/only-export-components */
import { motion } from 'framer-motion';
import { HiColorSwatch } from 'react-icons/hi';
import { fadeIn, zoomIn, shuffle, textVariant } from '../utils';

import { styles } from '../js/styles';
import { aboutCards } from '../constants';

import { SectionWrapper } from '../hoc';
import { Tilt } from 'react-tilt';
import Gallery from './Gallery';

const shuffleAboutCards = shuffle(aboutCards);

const AboutCard = ({ index, title, text }) => {
  return (
    <article className={`w-full lg:w-1/3 lg:max-w-md lg:grow xl:flex-1 2xl:w-1/5`}>
      <Tilt
        options={{
          max: 60,
          scale: 1,
          speed: 450,
        }}
      >
        <motion.div
          variants={fadeIn('right', 'spring', 0.5 * index + 1, 0.75)}
          className={`${index % 2 === 0 ? 'bg-sky-500' : 'bg-cyan-500 md:ml-auto md:text-right lg:ml-0 lg:text-left'} w-full rounded-2xl p-[1px]`}
        >
          <div className='flex min-h-[240px] flex-col items-center justify-between gap-y-4 rounded-2xl bg-white p-10 xl:min-h-[320px]'>
            <div className='w-full'>
              <HiColorSwatch
                size={64}
                color={`${index % 2 === 0 ? '#0ea5e9' : '#06b6d4'}`}
                className={`${index % 2 !== 0 && 'md:ml-auto lg:ml-0'}`}
              />
            </div>
            <motion.blockquote className='w-full space-y-4'>
              <h3 className={`${styles.cardSubText} ${index % 2 === 0 ? 'text-sky-500' : 'text-cyan-500'}`}>{title}</h3>
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
    <div className='mx-auto w-full'>
      <div className='relative flex flex-wrap'>
        <div className='mt-4 flex flex-col items-start'>
          <motion.div variants={textVariant(0.25)}>
            <h2 className={`${styles.sectionHeadText} w-full`}>Tentang Kami</h2>
          </motion.div>
          <motion.blockquote
            className='mr-10 lg:w-2/3'
            variants={textVariant(0.5 * 1)}
          >
            <motion.p
              className={`${styles.sectionParagraphText} mt-3`}
              variants={fadeIn('right', 'spring', 0.5 * 1, 1)}
            >
              SMP Alam Al-Izzah memadukan tiga kurikulum, yaitu Kurikulum Sekolah Alam, Kurikulum Kemendikbud, dan Kurikulum Pesantren. Program unggulan kami mencakup pembelajaran akhlak, logika berpikir, kepemimpinan, kewirausahaan, serta tahfidz dan tahsin bersyahadah.
            </motion.p>
          </motion.blockquote>
          <Gallery />
          <div className='mb-10 mt-20 flex flex-wrap gap-8'>
            {shuffleAboutCards.map((card, index) => (
              <AboutCard
                key={index}
                index={index}
                {...card}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
