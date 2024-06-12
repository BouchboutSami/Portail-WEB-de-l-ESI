import React from "react";

const PostGradStudies = () => {
  const photos = [
    {
      image: "./assets/PhD4.png",
      title: "LMD Doctoral Programs",
      text: "ESI offers 12 LMD doctoral programs during the academic year 2023/2024",
    },
    {
      image: "./assets/PhD5.png",
      title: "LMD Doctoral Guide",
      text: "Guide providing detailed information on research opportunities and academic requirements.",
    },
    {
      image: "./assets/PhD4.png",
      title: "Sciences Doctoral Programs",
      text: "ESI offers 27 Sciences doctoral programs.",
    },
  ];

  return (
    <div className="w-full bg-[#F5F5F5] p-5">
      <div className="text-black font-bold font-poppins text-3xl text-center mb-4">
        Postgraduate studies
      </div>
      <div className="text-black font-medium font-poppins text-xl text-center mb-7">
        Here is everything you need to know about Postgraduate studies in ESI
      </div>
      <div className="container mx-auto mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <div key={index} className="flex flex-col text-black items-start mb-[76px]">
              <img
                src={photo.image}
                alt={photo.title}
                className="w-400 h-280 mb-2"
              />
              <p className="font-semibold mb-1 text-black hover:underline m-4">
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

export default PostGradStudies;