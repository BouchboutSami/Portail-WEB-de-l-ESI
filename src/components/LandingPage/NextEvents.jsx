"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
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
            img="/assets/Alumni.jpg"
            title="Algerian Doctoral Conference on Computer Science ADCCS’2024"
            month="APR"
            day="16"
            text="Algerian Doctoral Conference on Computer Science ADCCS’2024"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardEvent
            img="/assets/Alumni.jpg"
            title="Algerian Doctoral Conference on Computer Science ADCCS’2024"
            month="APR"
            day="16"
            text="Algerian Doctoral Conference on Computer Science ADCCS’2024"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardEvent
            img="/assets/Alumni.jpg"
            title="Algerian Doctoral Conference on Computer Science ADCCS’2024"
            month="APR"
            day="16"
            text="Algerian Doctoral Conference on Computer Science ADCCS’2024"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardEvent
            img="/assets/Alumni.jpg"
            title="Algerian Doctoral Conference on Computer Science ADCCS’2024"
            month="APR"
            day="16"
            text="Algerian Doctoral Conference on Computer Science ADCCS’2024"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardEvent
            img="/assets/Alumni.jpg"
            title="Algerian Doctoral Conference on Computer Science ADCCS’2024"
            month="APR"
            day="16"
            text="Algerian Doctoral Conference on Computer Science ADCCS’2024"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardEvent
            img="/assets/Alumni.jpg"
            title="Algerian Doctoral Conference on Computer Science ADCCS’2024"
            month="APR"
            day="16"
            text="Algerian Doctoral Conference on Computer Science ADCCS’2024"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardEvent
            img="/assets/Alumni.jpg"
            title="Algerian Doctoral Conference on Computer Science ADCCS’2024"
            month="APR"
            day="16"
            text="Algerian Doctoral Conference on Computer Science ADCCS’2024"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardEvent
            img="/assets/Alumni.jpg"
            title="Algerian Doctoral Conference on Computer Science ADCCS’2024"
            month="APR"
            day="16"
            text="Algerian Doctoral Conference on Computer Science ADCCS’2024"
          />
        </SwiperSlide>
        <SwiperSlide className="mb-16">
          <CardEvent
            img="/assets/Alumni.jpg"
            title="Algerian Doctoral Conference on Computer Science ADCCS’2024"
            month="APR"
            day="16"
            text="Algerian Doctoral Conference on Computer Science ADCCS’2024"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
