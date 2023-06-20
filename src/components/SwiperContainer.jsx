import React from 'react';
import SwiperCore, { EffectCoverflow, Autoplay, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { newsList } from '../constants';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import { Dot } from '../svg';
import { Link } from 'react-router-dom';

SwiperCore.use([EffectCoverflow, Autoplay, Pagination, Scrollbar]);

const SwiperContainer = ({ Component }) => {
  return (
    <Swiper
      style={{
        '--swiper-pagination-color': '#1e1e1e',
        '--swiper-pagination-bullet-inactive-color': '#999999',
        '--swiper-pagination-bullet-inactive-opacity': '1',
        '--swiper-pagination-bullet-size': '64px',
        '--swiper-pagination-bullet-horizontal-gap': '0px',
        '--swiper-pagination-bullet-border-radius': 'none',
        '--swiper-pagination-bullet-width': 'var(--swiper-pagination-bullet-size)',
        '--swiper-pagination-bullet-height': '2px',
      }}
      speed={300}
      grabCursor={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 0,
        slideShadows: false,
      }}
      pagination={{ clickable: true, type: 'bullets', bulletClass: 'swiper-pagination-bullet' }}
      autoplay={{ delay: 1800 }}
      className='mySwiper pb-32'
    >
      {newsList.map((news, id) => {
        return (
          <SwiperSlide
            key={id}
            className='flex h-full min-h-[482px] min-w-fit max-w-full'
          >
            <Component {...news} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SwiperContainer;
