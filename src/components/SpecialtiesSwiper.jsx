/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Pagination } from "swiper/modules";
import SwiperCore from "swiper";
import CardSpecialty from "./Cards/CardSpecialty";

SwiperCore.use([EffectCoverflow, Pagination]);

const SpecialtiesSwiper = ({ specialties }) => {
  return (
    <div className="swiper-container">
      <Swiper
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        style={{ padding: "0rem" }}
      >
        {specialties.map((specialty, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center items-center p-0"
          >
            <CardSpecialty
              imageSrc={specialty.imageSrc}
              specialty={specialty.name}
              className="w-full h-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SpecialtiesSwiper;
