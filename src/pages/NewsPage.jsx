import React from 'react';
import { Navbar, Blogs } from '../components';

const NewsPage = () => {
  return (
    <>
      <div className='blue-gradient bg-cover bg-center bg-no-repeat text-black-200'>
        <Navbar className='text-black-200' />
      </div>

      <Blogs />
    </>
  );
};

export default NewsPage;
