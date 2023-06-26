import React from 'react';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { SectionWrapper } from '../hoc';
import { detailNewsList } from '../constants';
import { Link } from 'react-router-dom';

const DetailNews = ({ title, level, date, body, author, index }) => {
  return (
    <div className='overflow-hidden rounded-xl'>
      <div className='mt-24 p-4'>
        <div className='mx-auto max-w-5xl'>
          <button className='inline-flex w-fit items-center justify-center gap-2 rounded-full border-2 border-sky-500 bg-sky-500 py-2 pl-3 pr-4 text-sm font-bold text-white hover:border-sky-400 hover:bg-sky-400'>
            <HiArrowNarrowLeft className='mr-2' />
            All Posts
          </button>
          <p className='mt-6 text-sm text-slate-500'>
            Published {date} in <br /> <Link className='underline'>Al-Izzah News</Link>
          </p>
          <h4 className='mb-4 mt-8 text-2xl font-bold text-black-200'>{title}</h4>
          <div className='flex items-center gap-2'>
            <figure className='h-12 w-12 overflow-hidden rounded-full'>
              <img
                src='https://randomuser.me/api/portraits/thumb/men/77.jpg'
                className='h-full w-full'
              />
            </figure>
            <div>
              <p>By {author}</p>
              <p>{level}</p>
            </div>
          </div>
          <hr className='my-8 max-w-[64px]' />
          <blockquote>
            {body.map((paragraph, index) =>
              typeof paragraph === 'object' ? (
                <strong key={index}>{paragraph.subHeading}</strong>
              ) : (
                <p
                  className='my-4'
                  key={index}
                >
                  {paragraph}
                </p>
              )
            )}
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default DetailNews;
