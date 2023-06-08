import React from "react";
import SwiperCore, { EffectCoverflow, Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { activityCard } from "../constants";

import { shuffle } from "../utils";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

SwiperCore.use([EffectCoverflow, Autoplay, Pagination]);

const shuffleActivityCard = shuffle(activityCard);

const SwiperAlbum = () => {
  return (
    <Swiper
      speed={1500}
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 10,
        depth: 200,
        modifier: 1,
        slideShadows: false,
      }}
      pagination={{ clickable: true, dynamicBullets: true, dynamicMainBullets: 5 }}
      autoplay={{ delay: 1800 }}
      className="mySwiper"
    >
      {shuffleActivityCard.map((index, id) => {
        return (
          <SwiperSlide key={id} className="flex max-w-full">
            <img
              src={index.img}
              alt=""
              className="h-auto overflow-clip rounded-3xl border-2 border-tertiary object-cover shadow-inner"
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SwiperAlbum;
