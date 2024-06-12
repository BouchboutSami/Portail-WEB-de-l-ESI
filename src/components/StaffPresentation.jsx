/* eslint-disable @next/next/no-img-element */
import React from "react";

const StaffPresentation= () => {
  return (
    <div className="p-10 my-10 mx-10 relative w-full">
      <div className="font-poppins mx-auto my-auto font-bold text-noir text-4xl text-center p-8">
        <h1>Faculty Staff</h1>
      </div>
      <div className="flex items-center">
        <div className="w-1/2 relative mr-0">
          <img
            className="h-auto w-full transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
            src="./assets/FacultyStaff.jpg"
            alt="Faculty Staff"
          />
        </div>
        <div className="bg-bleu w-1/2 p-6 text-white font-poppins absolute right-20 top-50">
          <h1 className="font-bold mb-4">Faculty Staff</h1>
          <p className="text-wrap mb-4">
          Our dedicated staff members are the cornerstone of our organization, 
          contributing their diverse talents, skills, and expertise to propel our mission forward. 
          With their unwavering commitment and passion, they embody our values, cultivate a supportive work environment, 
          and foster collaboration and success across all levels. 
          Together, we celebrate their invaluable contributions as they continue to inspire and elevate our collective endeavors.
          </p>
          <a
            href="/"
            className="bg-blanc text-bleu py-2 px-6 absolute bottom-2 right-10"
          >
            See more
          </a>
        </div>
      </div>
    </div>
  );
};

export default StaffPresentation;
