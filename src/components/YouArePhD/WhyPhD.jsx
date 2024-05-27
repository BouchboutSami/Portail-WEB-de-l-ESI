import React from "react";

const WhyPhD = () => {
  return (
    <div className="p-10 my-10 mx-10 relative w-full">
      <div className="font-poppins mx-auto my-auto font-bold text-noir text-4xl text-center p-8">
        <h1>Welcome, doctoral candidates !</h1>
      </div>
      <div className="flex items-center">
        <div className="w-1/2 relative mr-0">
          <img
            className="h-auto w-full transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
            src="./assets/PhD1.png"
            alt="ESI graduation ceremony"
          />
        </div>
        <div className="bg-bleu w-1/2 p-6 text-white font-poppins absolute right-20 top-50">
          <p className="text-wrap mb-4 pb-4">
          At ESI, we place a strong emphasis on post-graduation and research as integral pillars of our academic mission. Beyond undergraduate studies, post-graduation offers students specialized training and advanced skills tailored to meet the demands of today's tech industry. 
          This commitment to post-graduation and research not only enhances our academic rigor but also ensures that our graduates emerge as leaders and innovators in their fields, equipped to tackle the challenges of tomorrow.
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

export default WhyPhD;
