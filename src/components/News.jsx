import React from 'react';
import { styles } from '../js';

const News = ({ className }) => {
  return (
    <div className={`${styles.paddingX} mx-auto`}>
      <div className='lg:pt-40 pt-24 pb-12 lg:pb-20'>
        <div className='cursor-hover grid rounded-2xl overflow-clip bg-white py-14 text-left shadow-card-xs lg:min-h-[540px] lg:grid-cols-2 lg:grid-rows-1 lg:items-center lg:py-0 lg:text-left'>
          <div className={`${styles.paddingX} pb-4 sm:pb-12`}>
            <div className=''>
              <p className={`${styles.heroParagraphText} cursor-hover mb-5 max-w-xl sm:text-lg md:mb-8`}>Apa yang baru?</p>
            </div>
            <div className=''>
              <h2 className={`${styles.heroHeadText} cursor-hover text-left primary-text-gradient lg:whitespace-pre-wrap`}>Jelajahi berita terbaru Sekolah Alam Al-Izzah</h2>
            </div>
          </div>
          <div className={`self-stretch lg:ml-5 -mb-14`}>
            <div className='w-full h-full'>
              <img src="https://picsum.photos/seed/picsum/384/240" alt="" className='h-full w-full object-cover' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
