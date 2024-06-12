/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Pagination } from "swiper/modules";
import PartenairesCard from "./PartenairesCard";

export default function Partenaires() {
  return (
    <div className="flex flex-col gap-10 w-full items-center relative bg-grisbg py-10">
      <h1 className="text-4xl text-[#0E1422] font-semibold">Our partners</h1>
      <div className="w-full px-[10%]">
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper w-full"
        >
        
          <SwiperSlide>
            <PartenairesCard image="/assets/PwC.png" />
          </SwiperSlide>
          <SwiperSlide>
            <PartenairesCard image="/assets/Ooredoo.png"/>
          </SwiperSlide>
          <SwiperSlide>
            <PartenairesCard image="/assets/Ouedkniss.png"/>
          </SwiperSlide>
          <SwiperSlide>
            <PartenairesCard image="/assets/AVenture.png"/>
          </SwiperSlide>
          <SwiperSlide>
            <PartenairesCard image="/assets/Djezzy.png"/>
          </SwiperSlide>
          <SwiperSlide>
            <PartenairesCard image="/assets/Yassir.png"/>
          </SwiperSlide>
          <SwiperSlide>
            <PartenairesCard image="/assets/AVenture.png"/>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
