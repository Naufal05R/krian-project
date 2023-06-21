import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { Dot } from '../svg';

import { SwiperContainer } from '.';
import { Link } from 'react-router-dom';
import { fadeIn, slideIn } from '../utils';
import { styles } from '../js';

const BlogCard = ({ id, title, thumbnail, kind, duration, date, author, index }) => {
  return (
    <motion.article className='w-11/12 xs:w-full mx-auto h-full grow hover:shadow-card-sm transition duration-150 hover:bg-white bg-transparent rounded-sm my-4' variants={fadeIn('left', 'spring', 0.5 * index, 0)}>
      <Link
        className='w-full'
        to={`/${id}`}
      >
        <div className='h-full space-y-4 p-2 md:p-4'>
          <figure className='relative w-full aspect-video overflow-hidden'>
            <img
              src={thumbnail.url}
              title={thumbnail.title}
              typeof={thumbnail.type}
              alt={thumbnail.alt}
              className='absolute z-20 h-full w-full object-cover'
            />
            <div className='absolute h-full w-full bg-gray-400' />
          </figure>
          <blockquote className='items-between flex w-full justify-between text-[9px] xs:text-xs'>
            <p className='uppercase text-gray-600'>{kind}</p>
            <p className='text-gray-600'>{duration}</p>
          </blockquote>
          <h4 className={`${styles.cardSubText}`}>{title}</h4>
        </div>
      </Link>
      <div className='flex grow text-[9px] xs:text-xs p-2 md:p-4'>
        {date}
        <Dot />
        By
        <a
          href='#'
          className='ml-1 underline'
        >
          {author}
        </a>
      </div>
    </motion.article>
  );
};

const Blogs = () => {
  return (
    <div className='relative mx-auto w-full'>
      <div className={`${styles.paddingX}`}>
        <h2 className=''>From the Blogs:</h2>
      </div>
      <div>
        <SwiperContainer Component={BlogCard} />
      </div>
    </div>
  );
};

export default SectionWrapper(Blogs, { idName: '', overflow: true });
