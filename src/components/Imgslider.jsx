/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Pagination } from "swiper/modules";
import SwiperCore from "swiper";

// Install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

const ImgSlider = ({ images }) => {
  return (
    <div className="swiper-container">
      <Swiper

        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        centeredSlidesBounds={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} style={{ width: "auto", height: "18rem" }}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              style={{
                width: "100%",
                height: "85%",
                borderRadius: "15px",
                objectFit: "cover",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImgSlider;
