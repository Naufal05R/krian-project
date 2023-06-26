import React from 'react';
import { motion } from 'framer-motion';
import { IoMdArrowDropright } from 'react-icons/io';

import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils';
import { styles } from '../js';
import { highlightsList } from '../constants';
import { Link } from 'react-router-dom';

const HighlightsCard = ({ index, id, title, badge, author, date }) => (
  <motion.article
    className='group flex text-black-200'
    key={index}
  >
    <Link
      className='flex-1'
      to={`/${id}`}
    >
      <div className='mt-12 border-b border-black/10 group-hover:border-black transition duration-300'>
        <figure className='mb-6 mt-4 block h-8 w-full'>
          <span className='h-[30.5px] w-full'>
            <img
              className='h-[24px] w-[150px] object-contain object-left brightness-0 group-hover:brightness-100 transition duration-300 group-hover:scale-125 origin-left'
              src={badge.url}
              alt=''
            />
          </span>
        </figure>
        <fieldset className='flex flex-col gap-2'>
          <div className='flex'>
            <h4 className={`${styles.cardSubText}`}>{title}</h4>
            <IoMdArrowDropright
              className='ml-2 shrink-0 origin-left self-center transition duration-300 group-hover:scale-150'
              size={36}
            />
          </div>
          <div className='mb-6'>
            <span className='text-sm font-light text-slate-900'>{author} | </span>
            <span className='text-sm font-light text-gray-500'>{date}</span>
          </div>
        </fieldset>
      </div>
    </Link>
  </motion.article>
);

const Highlight = () => {
  return (
    <div className='relative mx-auto w-full'>
      <motion.div
        className=''
        variants={textVariant(0.25)}
      >
        <h2 className={`${styles.sectionHeadText} mx-auto w-fit`}>Berita Unggulan</h2>
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
