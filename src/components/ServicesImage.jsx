/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";

const ServicesImage = () => {
  return (
    <div className="w-full h-[500px] relative">
      <img
        src="/assets/Custumized_Training.jpg"
        className="object-cover w-full h-full absolute inset-0"
      />
      <div class="absolute bottom-0 left-0 w-full opacity-90 h-[300px] bg-gradient-to-t from-black " />
      <div class="absolute bottom-8 left-8 w-full font-poppins font-medium text-white ">
        <div className="flex flex-col">
          <h1 className="text-[48px] font-extrabold text-white">
            Services
          </h1>
          <p className="text-[16px] font-medium text-white w-[600px] pl-8 ">
           Discover our training themes before promotion and enhance your skills in various fields with our wide selection of programs tailored to your professional needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesImage;
