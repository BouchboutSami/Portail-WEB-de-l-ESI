/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";

const PostImage = () => {
  return (
    <div className="w-full h-[500px] relative">
      <img
        src="/assets/postGraduationResearch.jpg"
        className="object-cover w-full h-full absolute inset-0"
      />
      <div class="absolute bottom-0 left-0 w-full opacity-90 h-[300px] bg-gradient-to-t from-black " />
      <div class="absolute bottom-8 left-8 w-full font-poppins font-medium text-white ">
        <div className="flex flex-col">
          <h1 className="text-[48px] font-extrabold text-white">
            Postgraduation & Research
          </h1>
          <p className="text-[16px] font-medium text-white w-[600px] pl-8 ">
            Explore postgraduate studies and research opportunities at ESI. Join
            us in pushing the boundaries of knowledge and shaping the future of
            your field.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostImage;
