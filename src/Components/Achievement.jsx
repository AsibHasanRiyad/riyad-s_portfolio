// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./CSS/achivement.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function Achievement() {
  return (
    <div
      data-aos="fade-left"
      data-aos-duration="600"
      data-aos-easing="ease-in-sine"
    >
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        // pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className=" w-full h-full"
            src="https://i.ibb.co/FBz9xJY/IMG-4855.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" w-full h-full"
            src="https://i.ibb.co/qrg6BZk/Asib-Hasan-Riyad-Graduation-Certificate.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" w-full h-full"
            src="https://i.ibb.co/hd05pH0/Asib-Hasan-Riyad-HSC-Testimonial-JPG.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
