import React from "react";

const LifeCampus = () => {
  const photos = [
    {
      image: "https://via.placeholder.com/400x280",
      title: "Title 1",
      text: "Text 1",
      link:"WhyESI"
    },
    {
      image: "https://via.placeholder.com/400x280",
      title: "Title 2",
      text: "Text 2",
      link:"WhyESI"
    },
    {
      image: "https://via.placeholder.com/400x280",
      title: "Title 3",
      text: "Text 3",
      link:"WhyESI"
    },
  ];

  return (
    <div className="w-full bg-white p-4">
      <div className="text-black font-bold font-poppins text-[36px] text-center">
        Life at campus
      </div>
      <div className="text-black font-medium font-poppins text-[20px] text-center mb-4">
        Find out about our range of activities designed to liven up student life
      </div>
      <div className="container  mx-auto mt-4">
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <div key={index} className="flex flex-col items-start mb-[76px]">
              <a href={photo.link}>
              <img
                src={photo.image}
                alt={photo.title}
                className="w-400 h-280 mb-2"
              />
              <p className="font-semibold mb-1 hover:underline m-4">
                {photo.title}
              </p>
              </a>
            </div>
          ))}
        </div>
        <div className="text-center ">
          <button className="bg-[#185B9C] text-white font-poppins text-[20px] font-bold py-2 px-4 w-[300px] h-[78] ">
            More about campus life
          </button>
        </div>
      </div>
    </div>
  );
};

export default LifeCampus;
