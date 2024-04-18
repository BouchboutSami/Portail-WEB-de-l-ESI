import React from "react";

const LandingImage = (props) => {
  return (
    <div className="w-full h-[500px] relative">
      <img
        src={props.image}
        className="object-cover w-full h-full absolute inset-0"
      />
      <div class="absolute top-0 left-0 w-full opacity-90 h-[400px] bg-gradient-to-b from-[#0E375F] " />
      <div class="absolute top-48 left-16 w-full font-poppins font-medium text-white ">
        <div className="flex flex-col">
          <h1 className="text-[54px] font-extrabold text-white max-w-[900px]">
            {props.title}
          </h1>
          <p className="text-[24px] font-medium text-white w-[600px] ">
            {props.subtiltle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingImage;
