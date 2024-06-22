/* eslint-disable @next/next/no-img-element */
import React from "react";

const LifeCampus = () => {
  const photos = [
    {
      image: "/assets/studentorgs2.png",
      title: "Student organizations",
      text: "Text 1",
      link: "/Campus/Student-life/Student-organisations",
    },
    {
      image: "/assets/Sports1.png",
      title: "Sports & Culture",
      text: "Text 2",
      link: "/Campus/Sports-and-culture",
    },
    {
      image: "/assets/ESIFabLab.png",
      title: "ESI FabLab",
      text: "Text 3",
      link: "/Campus/Student-life/Work-spaces",
    },
  ];

  return (
    <div className="w-full bg-white p-4 px-8">
      <a href="/Campus/">
        <h1 className="font-poppins font-bold mt-8 mb-4 text-[36px] text-center text-black hover:text-[#185B9C]">
          Life at Campus
        </h1>
      </a>
      <div className="text-black font-medium font-poppins text-md text-center mb-8">
        Find out about our range of activities designed to liven up student life
      </div>
      <div className="container  mx-auto mt-4">
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="flex flex-col items-start mb-[76px] w-fit h-280"
            >
              <a href={photo.link} className="h-full">
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
        <div className="text-center "></div>
      </div>
    </div>
  );
};

export default LifeCampus;
