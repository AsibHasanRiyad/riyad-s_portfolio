
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './css/style.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide >
          <img src="https://i.ibb.co/B32PZs1/c2c59f267df6e4f35fc630252dd2016d-sticker.png" alt="" />
        </SwiperSlide>
        <SwiperSlide >
          <img src="https://i.ibb.co/B32PZs1/c2c59f267df6e4f35fc630252dd2016d-sticker.png" alt="" />
        </SwiperSlide>
        <SwiperSlide >
          <img src="https://i.ibb.co/B32PZs1/c2c59f267df6e4f35fc630252dd2016d-sticker.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
