import React from "react";

const LandingImage = (props) => {
  return (
    <div className="w-full h-[500px] relative">
      <img
        src="/assets/landing.png"
        className="object-cover w-full h-full absolute inset-0"
      />
      <div class="absolute top-0 left-0 w-full opacity-90 h-[400px] bg-gradient-to-b from-[#0E375F] " />
      <div class="absolute top-48 left-16 w-full font-poppins font-medium text-white ">
        <div className="flex flex-col">
          <p className="text-[20px] font-extralight text-white m-2">
            Since 1969
          </p>
          <h1 className="text-[54px] font-extrabold text-white shadow-xl max-w-[900px]">
            Higher National School Of Computer Science
          </h1>
        </div>
      </div>
    </div>
  );
};

export default LandingImage;
