// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./CSS/style.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

export default function Skills() {
  const [frontEnd, setFrontEnd] = useState([]);
  const [backEnd, setBackEnd] = useState([]);
  const [others, setOthers] = useState([]);
  useEffect(() => {
    fetch("frontend.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFrontEnd(data);
      });
  }, []);
  useEffect(() => {
    fetch("backend.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBackEnd(data);
      });
  }, []);
  useEffect(() => {
    fetch("backend.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOthers(data);
      });
  }, []);
  return (
    <div className=" text-gray-300">
      <div className=" text-center">
        <h1 className=" text-2xl md:text-3xl lg:text-5xl font-bold my-6">Skills</h1>
        <p className=" max-w-3xl text-base text-justify mx-auto">
          Lorem ipsum dolor sit, amet Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Veniam magnam, soluta fugiat laborum nostrum,
          ducimus fugit! Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Mollitia unde non accusamus aliquid voluptas numquam minus
          sapiente aut laudantium. Nihil magnam qui eligendi sit eos aperiam
          fugiat. Temporibus, commodi odit.
        </p>
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className=" bg-black h-full w-full py-5">
            <h1 className="  text-2xl md:text-3xl lg:text-5xl mb-5 lg:mb-10">Frontend Skills</h1>
            <div className=" grid grid-cols-4 gap-10 w-3/4 mx-auto">
              {frontEnd.map((data) => (
                <div
                  className="  text-2xl flex gap-4 items-center justify-center "
                  key={data.name}
                >
                  <div className=" w-12">
                    <img src={data.image} alt="" />
                  </div>
                  <h1 className=" hidden lg:block">{data.name}</h1>
                </div>
              ))}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-black h-full w-full py-5 md:py-10">
            <h1 className="  text-2xl md:text-3xl lg:text-5xl mb-5 lg:mb-10">Backend Skills</h1>
            <div className=" grid grid-cols-4 gap-10 w-3/4 mx-auto">
              {backEnd.map((data) => (
                <div
                  className=" text-xs lg:text-2xl flex gap-4 items-center justify-center"
                  key={data.name}
                >
                  <div className="w-12">
                    <img src={data.image} alt="" />
                  </div>
                  <h1 className=" hidden lg:block">{data.name}</h1>
                </div>
              ))}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-black h-full w-full py-10">
            <h1 className="  text-2xl md:text-3xl lg:text-5xl mb-5 lg:mb-10">Others Skills</h1>
            <div className=" grid grid-cols-4 gap-10 w-3/4 mx-auto">
              {others.map((data) => (
                <div
                  className="  text-2xl flex gap-4 items-center justify-center"
                  key={data.name}
                >
                  <div className=" w-12">
                    <img src={data.image} alt="" />
                  </div>
                  <h1 className=" hidden lg:block">{data.name}</h1>
                </div>
              ))}
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
