"use client";
import React, { useState } from "react";
const UpComingEvent = ({ title, date, imageUrl }) => {
  const eventDate = new Date(date);
  const month = eventDate.toLocaleString('en-US', { month: 'short' }).slice(0, 3); 
  const day = eventDate.getDate(); 
  return (
    <div className="relative">
      <div className="flex flex-col m-2 text-start ">
        <div className="w-[270px] h-[190px] relative m-1 border border-gray-100 font-poppins">
          <img
            src={imageUrl}
            className="object-cover w-full h-full absolute inset-0"
          />
          <div className=" bg-white absolute top-0 right-2 text-[14px] text-black z-9 pb-2 px-1">
            <h1 className="text-[13px] text-[#185B9C] font-semibold uppercase">{month}</h1>
            <h1 className="text-[20px] font-semibold">{day}</h1>
          </div>
        </div>
        <h1 className="pl-2 text-[14px] font-medium hover:text-[#185B9C] hover:underline w-[250px]">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default UpComingEvent;
