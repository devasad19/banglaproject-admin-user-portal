"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";

const AppSliderNew = ({ sliders }:{sliders:any}) => {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 1000,
        }}
        loop={true}
        className="mySwiper"
      >
        {sliders?.map((item:any, index:number) => {
          return (
            <SwiperSlide key={index}>
              <Image
                src={process.env.NEXT_PUBLIC_IMAGE_URL + item}
                className="w-full !h-[246px] rounded-lg"
                width={1000}
                height={1000}
                alt="slider1"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default AppSliderNew;
