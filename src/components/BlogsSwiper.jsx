import React from 'react';
import SwiperCore, { Autoplay, Pagination, Scrollbar, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { newsList } from '../constants';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

SwiperCore.use([Autoplay, Pagination, Scrollbar, EffectFade]);

const BlogsSwiper = ({ Component }) => {
  return (
    <Swiper
      style={{
        '--swiper-pagination-color': '#1e1e1e',
        '--swiper-pagination-bullet-inactive-color': '#999999',
        '--swiper-pagination-bullet-inactive-opacity': '1',
        '--swiper-pagination-bullet-size': '16px',
        '--swiper-pagination-bullet-horizontal-gap': '0px',
        '--swiper-pagination-bullet-border-radius': '50%',
        '--swiper-pagination-bullet-width': 'var(--swiper-pagination-bullet-size)',
        '--swiper-pagination-bullet-height': 'var(--swiper-pagination-bullet-size)',
      }}
      speed={300}
      grabCursor={true}
      breakpoints={{
        0: { slidesPerView: 1, spaceBetween: 0 },
        450: { slidesPerView: 1.5 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 2.5 },
        1280: { slidesPerView: 3 },
        1440: { slidesPerView: 4 },
      }}
      pagination={{ clickable: true, type: 'bullets', bulletClass: 'swiper-pagination-bullet swiper-pagination-bullet-blogs', bulletActiveClass: 'swiper-pagination-bullet-active swiper-pagination-bullet-blogs-active' }}
      autoplay={{ delay: 2400 }}
      className={`mx-auto pb-16 xs:px-3 xs:pb-20 sm:px-14 sm:pb-24 md:px-12`}
    >
      {newsList.map((items, index) => {
        return (
          <SwiperSlide
            key={index}
            className='flex h-full w-full max-w-full flex-col xs:w-[75vw] sm:w-[50vw] md:w-96 lg:min-h-[530px]'
          >
            <Component
              {...items}
              index={index}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default BlogsSwiper;
