import { styles, absolutes } from '../js';

import { motion } from 'framer-motion';
import { fadeIn, slideIn, zoomIn, shuffle, random, staggerContainer } from '../utils';

import { SectionWrapper } from '../hoc';

import { image } from '../constants';

const shuffleImg11 = shuffle(image.img11);
const sharedImgTop = shuffleImg11.slice(0, 4);
const sharedImgBottom = shuffleImg11.slice(4, 8);
const arrayAbsolutes = Object.values(absolutes);

const Shared = () => {
  return (
    <div className=''>
      <div className='relative mx-auto mt-4 w-full'>
        <div className={`-z-20 mx-auto flex w-full flex-col items-start`}>
          <motion.div
            className='flex w-full flex-1 grow flex-wrap justify-between gap-4 sm:gap-8'
            variants={staggerContainer(4, 4)}
          >
            {sharedImgTop.map((img, index) => (
              <motion.article
                className='h-28 grow basis-1/3 xs:h-36 sm:h-44 sm:basis-1/5'
                variants={fadeIn('up', 'spring', 0.5 * index, 0.75)}
                key={index}
              >
                <motion.div
                  className={`relative h-full w-full overflow-hidden`}
                  variants={slideIn('down', 'spring', 0.5 * index, 0.75)}
                >
                  <motion.div
                    className={`absolute ${random(arrayAbsolutes)} max-h-full w-2/3 overflow-clip rounded-2xl object-cover sm:w-2/3`}
                    variants={zoomIn(0.5 * index, 0.75)}
                  >
                    <motion.img
                      src={img.url}
                      alt={img.title}
                      className='h-full w-full'
                    />
                  </motion.div>
                </motion.div>
              </motion.article>
            ))}
          </motion.div>
        </div>
        <div className={`${styles.paddingX} top-1/2 z-20 mx-auto my-6 flex w-full flex-col items-start bg-transparent`}>
          <div className='grid w-full place-items-center'>
            <div className='mx-auto flex w-full flex-col items-center gap-y-3 text-center text-[14px] font-bold'>
              <h2 className={`${styles.sectionHeadText} w-full`}>
                Daftar <span className='hidden md:inline'>Al-Izzah</span> Sekarang
              </h2>
              <a
                className='rounded-full border-2 border-sky-500 bg-sky-500 px-6 py-3 uppercase text-white hover:border-sky-400 hover:bg-sky-400'
                href='https://api.whatsapp.com/send?phone=628884936122&text=Assalamualaikum%20ustadz,%20mohon%20info%20PPDB%202023/2024%20👋'
              >
                PPDB 2023/2024
              </a>
            </div>
          </div>
        </div>
        <div className={`-z-20 mx-auto flex w-full flex-col items-start`}>
          <motion.div
            className='flex w-full flex-1 grow flex-wrap justify-between gap-4 sm:gap-8'
            variants={staggerContainer(4, 4)}

          >            {sharedImgBottom.map((img, index) => (
              <motion.div
                className='h-28 grow basis-1/3 xs:h-36 sm:h-44 sm:basis-1/5'
                variants={fadeIn('up', 'spring', 0.5 * index + 2, 0.75)}
                key={index}
              >
                <motion.div
                  className={`relative h-full w-full overflow-hidden`}
                  variants={slideIn('down', 'spring', 0.5 * index + 2, 0.75)}
                >
                  <motion.div
                    className={`absolute ${random(arrayAbsolutes)} max-h-full w-2/3 overflow-clip rounded-2xl sm:w-2/3`}
                    variants={zoomIn(0.5 * index + 2, 0.75)}
                  >
                    <motion.img
                      src={img.url}
                      alt={img.title}
                      className='h-full w-full'
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Shared, 'shared');
