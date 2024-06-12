/* eslint-disable @next/next/no-img-element */
import React from "react";

const SocialBenefits = () => {
  const photos = [
    {
      image: "https://via.placeholder.com/400x280",
      title: "Housing",
      text: "Text 1",
    },
    {
      image: "https://via.placeholder.com/400x280",
      title: "Social security",
      text: "Text 2",
    },
    {
      image: "https://via.placeholder.com/400x280",
      title: "Supplementary Health Insurance",
      text: "Text 3",
    },
  ];

  return (
    <div className="w-full bg-[#F5F5F5] p-4">
      <div className="text-black font-bold font-poppins text-[36px] text-center">
        Social Benefits
      </div>
      <div className="text-black font-medium font-poppins text-[20px] text-center mb-4">
      "Embracing social benefits fosters a workplace culture that values the well-being of our employees."
      </div>
      <div className="container mx-auto mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <div key={index} className="flex flex-col items-start mb-[76px]">
              <img
                src={photo.image}
                alt={photo.title}
                className="w-400 h-280 mb-2"
              />
              <p className="font-semibold mb-1 hover:underline m-4">
                {photo.title}
              </p>
              <p className="m-4">{photo.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialBenefits;
