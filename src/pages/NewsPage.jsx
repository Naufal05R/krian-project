import React from 'react';
import { Navbar, Blogs, Hero, News } from '../components';

const NewsPage = () => {
  return (
    <>
      <div className='bg-primary bg-cover bg-center bg-no-repeat text-black-200'>
        <Navbar className='text-black-200' absoluteBg={false} />
        <Hero Component={News} />
      </div>

      <Blogs />
    </>
  );
};

export default NewsPage;
