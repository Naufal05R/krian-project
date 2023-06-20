import React from 'react';
import { SectionWrapper } from '../hoc';
import { Dot } from '../svg';

import { SwiperContainer } from '.';
import { Link } from 'react-router-dom';

const BlogCard = ({ id, title, thumbnail, kind, duration, date, author }) => {
  return (
    <article className='mx-1 w-96'>
      <Link
        className='w-full'
        to={`/${id}`}
      >
        <div className='h-full space-y-4 border border-transparent bg-transparent p-4 shadow-xl transition duration-150 hover:bg-white'>
          <figure className='relative h-56 w-full overflow-hidden'>
            <img
              src={thumbnail.url}
              title={thumbnail.title}
              typeof={thumbnail.type}
              alt={thumbnail.alt}
              className='absolute z-20 h-full w-full object-cover'
            />
            <div className='absolute h-full w-full bg-gray-400' />
          </figure>
          <blockquote className='items-between flex w-full justify-between text-xs'>
            <p className='uppercase text-gray-600'>{kind}</p>
            <p className='text-gray-600'>{duration}</p>
          </blockquote>
          <h4 className='text-2xl leading-[150%]'>{title}</h4>
        </div>
      </Link>
      <div className='flex text-xs'>
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
    </article>
  );
};

const Blogs = () => {
  return (
    <div className='relative mx-auto w-full'>
      <div>
        <SwiperContainer Component={BlogCard} />
      </div>
    </div>
  );
};

export default SectionWrapper(Blogs, { idName: '', overflow: true });
