import React from "react";

const CompanyInternships = () => {
  const photos = [
    {
      image: "./assets/internships1.png",
      title: "Why offer an internship at ESI? ",
      text: " Ignite your potential at ESI.  Join a thriving community of learners and propel your career to new heights.",
    },
    {
      image: "./assets/internships2.png",
      title: "What are the benefits of offering internships to our students?",
    },
    {
      image: "./assets/internships3.png",
      title: "How to offer an internship at ESI ?",
      text: "Learn more about the procedures and guidelines for partner companies.",
    },
  ];

  return (
    <div className="w-full bg-[#F5F5F5] p-5">
      <div className="text-black font-bold font-poppins text-3xl text-center mb-4">
        Internship opportunities
      </div>
      <div className="text-black font-medium font-poppins text-xl text-center mb-7">
        Have a look at the program studies that ESI offers
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

export default CompanyInternships;