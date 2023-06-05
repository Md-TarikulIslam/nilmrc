import React from "react";
import allImages from "./fakedata";
import "./Carousel.css";
import logo from '../../../assets/images/home/logo.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay, FreeMode } from "swiper";

const Carousel = () => {
  return (
    <div>
      <div>
        <Swiper
          modules={[Pagination, Autoplay, FreeMode]}
          slidesPerView={1}
          loop={true}
          direction="horizontal"
          autoplay={{
            delay: 2500,
          }}
          // navigation={true}
          effect={"fade"}
          className="mySwiper"
        >
          <div>
            {allImages.map((image) => (
              <SwiperSlide key={image.id}>
                <img
                  className="mx-auto w-full slider-img"
                  src={image.image}
                  alt=""
                />
              </SwiperSlide>
            ))}
          </div>
          <div className="flex items-center relative bottom-20 md:bottom-48 z-10 ml-0 md:ml-10">
            <img src={logo} alt="" />
            <p className="text-white text-sm md:text-3xl font-bold ml-5 text-shadow">National Institute of Laboratory <br /> Medicine & Referral Centre</p>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
