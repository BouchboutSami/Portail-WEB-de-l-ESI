import React from "react";

const WhyCompany = () => {
  return (
    <div className="p-10 my-10 mx-10 relative w-full">
      <div className="font-poppins mx-auto my-auto font-bold text-noir text-4xl text-center p-8">
        <h1>ESI & Companies </h1>
      </div>
      <div className="flex items-center">
        <div className="w-1/2 relative mr-0">
          <img
            className="h-auto w-full transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
            src="./assets/Company1.png"
            alt="ESI graduation ceremony"
          />
        </div>
        <div className="bg-bleu w-1/2 p-6 text-white font-poppins absolute right-20 top-50">
          <p className="text-wrap mb-4">
          At ESI, maintaining close relations with companies is crucial. These partnerships are vital for preparing our students for the tech industry's demands.
          Through collaborations and internships, we ensure our curriculum remains aligned with real-world needs, providing students with sought-after skills and experiences. 
          This bond not only benefits companies by accessing top talent but also empowers students for their professional growth, bridging academia and industry for innovation in technology.
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

export default WhyCompany;
