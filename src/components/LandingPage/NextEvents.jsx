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
import CardEvent from "../Cards/CardEvent";
import { title } from "process";

export default function NextEvents() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        navigation={true}
        grid={{
          rows: 2,
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
        <CardEvent 
          img="/assets/VIVATECH.jpg"
          month="MAY"
          day="22"
          title="VivaTechnology 2024"
          text="The European annual meeting place for technology innovations and startups"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardEvent 
          img="/assets/CTO.png"
          month="MAY"
          day="20"
          title="CTO Forum Algeria"
          text="The Algerian annual Information and Communication Technology Forum"
          />
        </SwiperSlide>
       
        <SwiperSlide>
        <CardEvent 
          img="/assets/ASC.jpeg"
          month="DEC"
          day="05"
          title="Algerian Startup Conference"
          text="The most inspiring entrepreneurial event on the continent"
          />
        </SwiperSlide>
        <SwiperSlide>
        <CardEvent 
          img="/assets/VIVATECH.jpg"
          month="MAY"
          day="22"
          title="VivaTechnology 2024"
          text="The European annual meeting place for technology innovations and startups"
          />
        </SwiperSlide>
        <SwiperSlide>
        <CardEvent 
          img="/assets/CTO.png"
          month="MAY"
          day="20"
          title="CTO Forum Algeria"
          text="Le forum des technologies de l’Information et de la Communication"
          />
        </SwiperSlide>
       
        <SwiperSlide>
        <CardEvent 
          img="/assets/CTO.png"
          month="MAY"
          day="20"
          title="CTO Forum Algeria"
          text="Le forum des technologies de l’Information et de la Communication"
          />
        </SwiperSlide>
        <SwiperSlide>
        <CardEvent 
          img="/assets/ASC.jpeg"
          month="DEC"
          day="05"
          title="Algerian Startup Conference"
          text="The most inspiring entrepreneurial event on the continent"
          />
        </SwiperSlide>
        <SwiperSlide>
        <CardEvent 
          img="/assets/VIVATECH.jpg"
          month="MAY"
          day="22"
          title="VivaTechnology 2024"
          text="The European annual meeting place for technology innovations and startups"
          />
        </SwiperSlide>
        <SwiperSlide>
        <CardEvent 
          img="/assets/CTO.png"
          month="MAY"
          day="20"
          title="CTO Forum Algeria"
          text="Le forum des technologies de l’Information et de la Communication"
          />
        </SwiperSlide>
        <SwiperSlide className="mb-16">
        <CardEvent 
          img="/assets/ASC.jpeg"
          month="DEC"
          day="05"
          title="Algerian Startup Conference"
          text="The most inspiring entrepreneurial event on the continent"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
