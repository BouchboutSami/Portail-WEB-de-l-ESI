import React from "react";

const DoctoralRegistration = () => {
  return (
    <div className="w-full flex flex-col items-center py-10">
      <h1 className="text-2xl font-bold mb-6">Doctoral Registration</h1>
      <div className="flex flex-row relative">
        <div className="w-[250px] h-[200px]">
            <div className="bg-[#D9D9D9] ml-[40px] h-[200px] "></div>
        </div>
        <img
          src="/assets/doctoralRegistration.png"
          alt="Doctoral Registration"
          className="w-[250px] h-[200px] object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center">
          <div className="bg-blue-900 bg-opacity-80 text-white p-6 w-[350px] h-[150px] flex flex-col items-start justify-center">
            <h2 className="text-xl text-left font-bold mb-2">
              Program Registration Resources
            </h2>
            <p className="text-sm hover:underline text-left">
              Explore links to various portals and resources for current
              program participants &gt;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctoralRegistration;
