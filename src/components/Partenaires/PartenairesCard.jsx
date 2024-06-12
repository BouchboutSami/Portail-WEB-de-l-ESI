/* eslint-disable @next/next/no-img-element */
import React from "react";

const PartenairesCard = ({image}) => {
  return (
    <div className="mb-16 flex justify-center items-center">
      <img
        loading="lazy"
        src={image}
        alt="Image 1"
        className="w-[350px] h-[150px] object-contain"
      />
    </div>
  );
};

export default PartenairesCard;
