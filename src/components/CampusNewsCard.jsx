/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const CampusNewsCard = (props) => {
  const [Shadow, setShadow] = useState(false);
  return (
    <div
      className="w-[270px] h-[190px] relative m-1 border border-gray-100"
      onMouseLeave={() => setShadow(false)}
    >
      <img
        src={props.image}
        className="object-cover w-full h-full absolute inset-0"
        onMouseEnter={() => setShadow(true)}
      />
      {Shadow && (
        <>
          <div class="absolute bottom-0 left-0 w-full opacity-90 h-40 bg-gradient-to-t from-[#0E375F] " />
          <div class="absolute bottom-8 left-0 w-full font-poppins font-medium text-white  text-[12px]">
            <p className=" overflow-hidden line-clamp-3 px-2 font-medium text-[14px]">
              {props.title}
            </p>
            <a href="/">
              <div className="flex flex-row gap-1 items-center right-2 absolute pb-2 hover:font-bold hover:shadow-sm">
                Learn More
                <HiOutlineArrowLongRight className="h-4" />
              </div>
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default CampusNewsCard;
