import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { Dot } from '../svg';

import { BlogsSwiper } from '.';
import { Link } from 'react-router-dom';
import { fadeIn, slideIn } from '../utils';
import { styles } from '../js';

const BlogsCard = ({ id, title, thumbnail, kind, duration, date, author, index }) => {
  return (
    <motion.article className='group mx-auto my-4 h-full w-11/12 grow overflow-hidden rounded-xl bg-transparent transition duration-150 hover:bg-white hover:shadow-card-sm xs:w-full'>
      <Link
        className='w-full'
        to={`/news/${id}`}
        onClick={() => {
          window.scroll(0, 0);
        }}
      >
        <div className='h-full space-y-4 p-2 md:p-4'>
          <figure className='relative aspect-video w-full overflow-hidden rounded-[10px]'>
            <img
              src={thumbnail.url}
              title={thumbnail.title}
              typeof={thumbnail.type}
              alt={thumbnail.alt}
              className='absolute top-0 z-20 h-full w-full object-cover transition duration-500 group-hover:scale-125'
            />
            <div className='absolute top-0 h-full w-full bg-gray-400' />
          </figure>
          <blockquote className='items-between flex w-full justify-between text-[9px] xs:text-xs'>
            <p className='uppercase text-gray-600'>{kind}</p>
            <p className='text-gray-600'>{duration}</p>
          </blockquote>
          <h4 className={`${styles.cardSubText}`}>{title}</h4>
        </div>
      </Link>
      <div className='flex grow px-2 text-[9px] items-center xs:text-xs md:p-4'>
        {date}
        <Dot />
        By
        <a
          href='#'
          className={`-ml-3 px-4 p-2 grow underline ${index % 2 ? 'hover:text-sky-500' : 'hover:text-cyan-500'} transition duration-500`}
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
        <h2 className={`${styles.sectionHeadText} w-fit`}>Blog kami</h2>
      </div>
      <div>
        <BlogsSwiper Component={BlogsCard} />
      </div>
    </div>
  );
};

export default SectionWrapper(Blogs, { idName: '', overflow: true });
