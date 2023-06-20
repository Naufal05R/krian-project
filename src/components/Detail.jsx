import React from 'react';
import { SectionWrapper } from '../hoc';
import { Dot } from '../svg';

const Detail = () => {
  return (
    <div className='relative mx-auto w-full'>
      <div className='flex gap-6'>
        <article className='w-96 space-y-4 overflow-clip'>
          <div className='w-full bg-gray-400 pb-[60%]' />
          <blockquote className='items-between flex w-full justify-between text-xs'>
            <p className='uppercase text-gray-600'>First Title</p>
            <p className='text-gray-600'>5 mins</p>
          </blockquote>
          <h4 className='text-2xl'>Lorem ipsum, dolor sit amet consectetur adipisicing.</h4>
          <div className='flex text-xs'>
            Oct 04, 2023
            <Dot />
            By
            <a
              href='#'
              className='ml-1 underline'
            >
              Ned Larson
            </a>
          </div>
        </article>
      </div>
    </div>
  );
};

export default SectionWrapper(Detail, { idName: '' });
