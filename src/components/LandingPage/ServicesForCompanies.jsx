/* eslint-disable @next/next/no-img-element */
import React from "react";

const ServicesForCompanies = () => {
  return (
    <div className="p-10 my-10 mx-10 relative w-full">
      <div className="font-poppins mx-auto my-auto mb-2 font-bold text-noir text-4xl text-center p-8">
        <h1>Services for companies</h1>
      </div>
      <div className="flex items-center">
        <div className="w-1/2 relative mr-0">
          <img
            className="h-auto w-full transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
            src="./assets/ServicesForCompanies.png"
            alt="ESI graduation ceremony"
          />
        </div>
        <div className="bg-bleu w-1/2 p-6 text-white font-poppins absolute right-20 top-50 leading-10">
          <p className="text-wrap text-md pb-12">
            ESI, maintaining its status as a leading training institute, offers
            customized training services and pre-promotion training sessions
            regulated by the Ministry of Education. These high-quality training
            programs cover a variety of topics and are delivered by highly
            qualified trainers, enabling companies to enhance their teams&apos;
            skills and stay at the forefront of their industry.
          </p>
          <a
            href="/Services"
            className="bg-blanc text-bleu py-1  px-4 absolute bottom-2 right-10"
          >
            Discover more !
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServicesForCompanies;
