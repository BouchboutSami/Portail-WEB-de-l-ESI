/* eslint-disable @next/next/no-img-element */
import React from "react";

const LifeCampus = () => {
  const photos = [
    {
      image: "/assets/Sports1.png",
      title: "Student organizations",
      text: "Text 1",
      link: "WhyESI",
    },
    {
      image: "/assets/Sports1.png",
      title: "Sports & Culture",
      text: "Text 2",
      link: "WhyESI",
    },
    {
      image: "/assets/ESIFabLab.png",
      title: "ESI FabLab",
      text: "Text 3",
      link: "WhyESI",
    },
  ];

  return (
    <div className="w-full bg-white p-4 pb-8">
      <div className="text-black font-bold font-poppins text-[36px] text-center">
        Life at campus
      </div>
      <div className="text-black font-medium font-poppins text-[20px] text-center mb-4">
        Find out about our range of activities designed to liven up student life
      </div>
      <div className="container  mx-auto mt-4">
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="flex flex-col items-start mb-[76px] w-400 h-280"
            >
              <a href={photo.link} className="w-full h-full">
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="mb-2 object-fill"
                />
                <p className="font-semibold mb-1 hover:underline m-4">
                  {photo.title}
                </p>
              </a>
            </div>
          ))}
        </div>
        <div className="text-center ">
          <a href="/Academics/Education">
            <button className="bg-[#185B9C] hover:bg-[#002E5F] text-white font-poppins text-md rounded-lg py-3 px-4 w-[300px] h-[78] ">
              More about campus life
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LifeCampus;
