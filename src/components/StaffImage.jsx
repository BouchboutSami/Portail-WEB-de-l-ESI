/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";

const StaffImage = () => {
  return (
    <div className="w-full h-[500px] relative">
      <img
        src="/assets/FacultyStaff.jpg"
        className="object-cover w-full h-full absolute inset-0"
      />
      <div class="absolute bottom-0 left-0 w-full opacity-90 h-[300px] bg-gradient-to-t from-black " />
      <div class="absolute bottom-8 left-8 w-full font-poppins font-medium text-white ">
        <div className="flex flex-col">
          <h1 className="text-[48px] font-extrabold text-white">
            Faculty Staff
          </h1>
          <p className="text-[16px] font-medium text-white w-[600px] pl-8 ">
          This corner of our virtual campus is dedicated to our valued educators and support staff. Here, you'll find essential resources, helpful tools, and important updates tailored specifically to our school community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StaffImage;
