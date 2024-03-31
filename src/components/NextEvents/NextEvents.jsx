"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Grid, Pagination } from "swiper/modules";
import CardEvent from "./CardEvent";

export default function NextEvents() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        grid={{
          columns: 3,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <CardEvent />
        </SwiperSlide>
        <SwiperSlide>
          <CardEvent />
        </SwiperSlide>
        <SwiperSlide>
          <CardEvent />
        </SwiperSlide>
        <SwiperSlide>
          <CardEvent />
        </SwiperSlide>
        <SwiperSlide>
          <CardEvent />
        </SwiperSlide>
        <SwiperSlide>
          <CardEvent />
        </SwiperSlide>
        <SwiperSlide>
          <CardEvent />
        </SwiperSlide>
        <SwiperSlide>
          <CardEvent />
        </SwiperSlide>
        <SwiperSlide>
          <CardEvent />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
