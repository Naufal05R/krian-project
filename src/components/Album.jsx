import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { image } from '../constants';
import { shuffle, zoomIn } from '../utils';
import { useEffect } from 'react';

const shuffleImg11 = shuffle(image.img11);
const shuffleImg23 = shuffle(image.img23);

const Album = () => {
  const [randomImage, setImage] = useState(shuffleImg23);
  const [index, setIndex] = useState(0);

  const handleReloadBrowser = () => {
    index ? setImage(shuffleImg23) : setImage(shuffleImg11);
    setIndex(!index);
  };

  useEffect(() => {
    window.addEventListener('load', handleReloadBrowser);
  }, []);

  return (
    <section className='grid grid-cols-2 gap-2 sm:grid-cols-3 md:gap-4 lg:grid-cols-4 2xl:grid-cols-5'>
      {randomImage.map((img, index) => (
        <motion.article
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.5 }}
          key={index}
        >
          <motion.figure
            className='relative h-full w-full overflow-clip rounded-2xl'
            variants={zoomIn(0.5 * (Math.random() * 2 * (Math.random() * 2)), 0.75)}
          >
            <motion.div className={`w-full bg-neutral-400 pb-[100%]`} />
            <motion.img
              className='absolute top-0 z-10 h-full w-full object-cover'
              src={img.url}
            />
          </motion.figure>
        </motion.article>
      ))}
    </section>
  );
};

export default Album;
