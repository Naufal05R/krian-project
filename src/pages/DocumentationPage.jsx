import React from 'react';
import { motion } from 'framer-motion';

import { Gallery, Navbar } from '../components';
import { fadeIn, slideIn, zoomIn } from '../utils';

import { SectionWrapper } from '../hoc';

import { image } from '../constants';
import { styles } from '../js';

const DocumentationPage = () => {
  return (
    <>
      <div className='blue-gradient bg-cover bg-center bg-no-repeat text-black-200'>
        <Navbar className='text-black-200' />
      </div>
      <section className='mx-auto mt-[80px] w-full'>
        <div>
          <h2 className={`${styles.sectionHeadText} mb-12 w-full`}>Dokumentasi Kami</h2>
        </div>
        <Gallery />
      </section>
    </>
  );
};

export default DocumentationPage;
