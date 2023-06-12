import React from 'react';

import { Documentation, Navbar } from '../components';

const DocumentationPage = () => {
  return (
    <>
      <div className='blue-gradient bg-cover bg-center bg-no-repeat text-black-200'>
        <Navbar className='text-black-200' />
      </div>
      <Documentation />
    </>
  );
};

export default DocumentationPage;
