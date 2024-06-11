"use client";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
const HoverImg = ({ title, link, imageUrl }) => {
  const [Shadow, setShadow] = useState(false);
  return (
    <div
      className="w-[270px] h-[190px] relative m-1 border border-gray-100 font-poppins"
      onMouseLeave={() => setShadow(false)}
      onClick={() => {
        Navigate({ link });
      }}
    >
      <img
        src={imageUrl}
        className="object-cover w-full h-full absolute inset-0"
        onMouseEnter={() => setShadow(true)}
      />
      {Shadow && (
        <>
          <div class="absolute bottom-0 left-0 w-full opacity-90 h-40 bg-gradient-to-t from-black " />
          <div class="absolute bottom-4 left-0 w-full font-poppins font-medium text-white">
            <p className=" overflow-hidden line-clamp-3 px-2 font-medium text-[14px]">
              {title}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default HoverImg;
