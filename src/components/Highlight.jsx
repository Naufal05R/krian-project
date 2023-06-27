import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';

import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils';
import { styles } from '../js';
import { highlightsList } from '../constants';
import { Link } from 'react-router-dom';

const HighlightsCard = ({ index, id, title, badge, author, date }) => {
  const [color, setColor] = useState('');

  return (
    <motion.article
      className='group flex text-black-200 hover:cursor-pointer pointer-events-auto'
      key={index}
      onMouseEnter={() => {
        setColor('rgb(14,165,233)');
      }}
      onMouseLeave={() => {
        setColor('');
      }}
    >
      <Link
        className='flex-1'
        to={`/news/${id}`}
        onClick={() => {
          window.scroll(0, 0);
        }}
      >
        <div className='mt-12 border-b border-black/10 transition-all duration-500 group-hover:border-black'>
          <figure className='mb-6 mt-4 block h-8 w-full'>
            <span className='h-[30.5px] w-full'>
              <img
                className='h-[24px] w-[150px] origin-left object-contain object-left brightness-0 transition duration-[450ms] group-hover:brightness-100'
                src={badge.url}
                alt=''
              />
            </span>
          </figure>
          <fieldset className='flex flex-col gap-2'>
            <div className='flex'>
              <h4 className={`${styles.cardSubText} ${index % 2 ? 'group-hover:text-sky-500' : 'group-hover:text-cyan-500'} grow transition duration-[450ms]`}>{title}</h4>
              <HiOutlineArrowLongRight
                className='ml-2 shrink-0 origin-left self-center transition duration-[450ms]'
                size={24}
                color={color}
              />
            </div>
            <div className='mb-6'>
              <span className='text-sm font-light text-neutral-600 transition duration-[450ms] group-hover:text-neutral-800'>{author} | </span>
              <span className='text-sm font-light text-neutral-400 transition duration-[450ms] group-hover:text-neutral-500'>{date}</span>
            </div>
          </fieldset>
        </div>
      </Link>
    </motion.article>
  );
};

const Highlight = () => {
  return (
    <div className='relative mx-auto w-full'>
      <motion.div
        className=''
        variants={textVariant(0.25)}
      >
        <h2 className={`${styles.sectionHeadText} mx-auto w-fit`}>Artikel Lainnya</h2>
      </motion.div>
      <div className={`${styles.padding} mx-auto flex max-w-7xl flex-col`}>
        {highlightsList.map((highlight, index) => (
          <HighlightsCard
            key={index}
            index={index}
            {...highlight}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Highlight, { idName: '' });
