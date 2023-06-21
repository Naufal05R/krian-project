import React from 'react';
import SwiperCore, { EffectCoverflow, Autoplay, Pagination, Scrollbar, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { newsList } from '../constants';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import { Dot } from '../svg';
import { Link } from 'react-router-dom';
import { styles } from '../js';

SwiperCore.use([EffectCoverflow, Autoplay, Pagination, Scrollbar, EffectFade]);

const SwiperContainer = ({ Component }) => {
  return (
    <Swiper
      style={{
        '--swiper-pagination-color': '#1e1e1e',
        '--swiper-pagination-bullet-inactive-color': '#999999',
        '--swiper-pagination-bullet-inactive-opacity': '1',
        '--swiper-pagination-bullet-size': '16px',
        '--swiper-pagination-bullet-horizontal-gap': '0px',
        '--swiper-pagination-bullet-border-radius': 'none',
        '--swiper-pagination-bullet-width': 'var(--swiper-pagination-bullet-size)',
        '--swiper-pagination-bullet-height': '2px',
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
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 0,
        slideShadows: false,
      }}
      pagination={{ clickable: true, type: 'bullets', bulletClass: 'swiper-pagination-bullet', bulletActiveClass: 'swiper-pagination-bullet-active' }}
      autoplay={{ delay: 1800 }}
      className={`mySwiper mx-auto pb-16 xs:pb-20 xs:px-3 sm:px-14 sm:pb-24 md:px-12`}
    >
      {newsList.map((news, index) => {
        return (
          <SwiperSlide
            key={index}
            className='flex h-full lg:min-h-[530px] w-full max-w-full flex-col xs:w-[75vw] sm:w-[50vw] md:w-96'
          >
            <Component
              {...news}
              index={index}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SwiperContainer;
