/* eslint-disable @next/next/no-img-element */
import React from "react";

const Academics = () => {
  const photos = [
    {
      image: "/assets/Prepa.png",
      title: "Preparatory classes",
      text: "Discover more about the program ESI offers to preparatory class students. This program aims to provide a smooth transition to the field of computer science ",
      link: "/Academics/Education",
    },
    {
      image: "/assets/Sup.png",
      title: "Superior classes",
      text: "Explore advanced academic opportunities at ESI, tailored to your expertise and career goals.",
      link: "/Academics/Education",
    },
    {
      image: "/assets/Complementary.png",
      title: "Complementary studies",
      text: "Enhance your skills and knowledge with our range of supplementary courses designed to complement your primary academic pursuits at ESI.",
      link: "/Postgraduation-Research",
    },
  ];

  return (
    <div className="w-full bg-[#F5F5F5] p-4">
      <a href="/Academics/Education">
        <div className="text-black font-bold font-poppins text-[36px] text-center hover:text-[#185B9C]">
          Academics
        </div>
      </a>
      <div className="text-black font-medium font-poppins text-md text-center mb-4 pb-2">
        Have a look at the program studies that ESI offers
      </div>
      <div className="flex justify-center w-full mx-auto mt-4">
        <div className="grid grid-cols-3 gap-[70px] items-start justify-center ">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="flex flex-col justify-center w-fit items-start mb-[76px] "
            >
              <img
                src={photo.image}
                alt={photo.title}
                className="w-[300px] h-[200px] mb-2"
              />
              <a href={photo.link} className="hover:underline">
                <p className="font-semibold mb-1 hover:underline mt-4">
                  {photo.title}
                </p>
              </a>
              <p className="mb-4 text-sm  w-[300px] text-black ">
                {photo.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Academics;
