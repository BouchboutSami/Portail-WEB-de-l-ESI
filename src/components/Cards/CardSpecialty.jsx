import React from "react";

const CardSpecialty = ({ imageSrc, specialty }) => {
  return (
    <div className="bg-green-400 rounded p-0">
    <div className="relative w-52 h-52">
      <img
        src={imageSrc}
        alt={specialty}
        className="object-cover p-0"
      />
      <div className="bg-[#185B9C] text-white px-4 py-2">
        {specialty}
      </div>
    </div></div>
  );
};

export default CardSpecialty;
