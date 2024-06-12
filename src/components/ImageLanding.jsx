import React from "react";

const ImageLanding = ({ imageUrl, title, description }) => {
  return (
    <div className="w-full h-[500px] relative">
      <img
        src={imageUrl}
        className="object-cover w-full h-full absolute inset-0"
        alt={title}
      />
      <div className="absolute bottom-0 left-0 w-full opacity-90 h-[300px] bg-gradient-to-t from-black" />
      <div className="absolute bottom-8 left-8 w-full font-poppins font-medium text-white">
        <div className="flex flex-col">
          <h1 className="text-[48px] font-extrabold text-white">{title}</h1>
          <p className="text-[16px] font-medium text-white w-[600px] pl-8">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageLanding;
