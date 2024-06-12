"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Grid, Pagination, Navigation } from "swiper/modules";
import CardEvent from "./Cards/CardEvent";

export default function EventsStaff() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        navigation={true}
        grid={{
          rows: 1,
          fill: "row",
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination, Navigation]}
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
        <SwiperSlide className="mb-16">
          <CardEvent />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
