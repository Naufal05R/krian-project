import React from 'react';

import { Documentation, Gallery, Hero, Navbar, Shared } from '../components';

const DocumentationPage = () => {
  return (
    <>
      <div className='bg-primary bg-cover bg-center bg-no-repeat text-black-200'>
        <Navbar
          className='text-black-200'
          absoluteBg={false}
        />
        <Hero Component={Documentation} />
      </div>
      <Gallery />
      <div className='absolute right-[-147.5px] top-[1069.96px] -z-30 h-60 w-60 bg-about-ornament' />
      <div className='absolute left-[-152.5px] top-[1310.04px] -z-30 h-60 w-60 bg-about-ornament' />
      <Shared />
    </>
  );
};

export default DocumentationPage;
