import React from "react";

const CompanyImg = () => {
  return (
    <div className="w-full h-[500px] relative">
      <img
        src="/assets/CompanyImg.png"
        className="object-cover w-full h-full absolute inset-0"
      />
      <div class="absolute bottom-0 left-0 w-full opacity-90 h-[300px] bg-gradient-to-t from-black " />
      <div class="absolute bottom-8 left-8 w-full font-poppins font-medium text-white ">
        <div className="flex flex-col">
          <h1 className="text-[48px] font-extrabold text-white">
            Company Gateway
          </h1>
          <p className="text-[16px] font-medium text-white w-[600px] pl-8 ">
          At ESI, we prioritize our partnerships with companies, valuing the crucial role they play in shaping the future of the tech industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyImg;
