import React from "react";

const DiscoverSchool = () => {
  const photos = [
    {
      image: "https://via.placeholder.com/400x280",
      title: "Why ESI ?",
      text: " Ignite your potential at ESI.  Join a thriving community of learners and propel your career to new heights.",
      link:"WhyESI"
    },
    {
      image: "https://via.placeholder.com/400x280",
      title: "Titre School",
      text: "Discover ESI: A Center for Excellence in Higher Education",
      link:"School"
    },
    {
      image: "https://via.placeholder.com/400x280",
      title: "Organisation and structure",
      text: "Dive deeper into ESI's staff organization and discover how our expertise aligns to support your journey.",
      link:"Organisation-structure"},
  ];

  return (
    <div className="w-full bg-[#F5F5F5]  p-4">
      <div className="text-black font-bold font-poppins text-[36px] text-center">
      Discover the school
      </div>
      <div className="text-black font-medium font-poppins text-[20px] text-center mb-8">
      Ready to take the next step? Dive into ESI’s world and see where you belong      </div>
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
              <p className="font-normal mb-1 m-4">
                {photo.text}
              </p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscoverSchool;
