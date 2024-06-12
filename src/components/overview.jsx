/* eslint-disable @next/next/no-img-element */
import React from "react";

const Overview = () => {
  return (
    <div className="p-10 relative w-full">
       <h2 className="font-poppins text-4xl font-bold text-center text-bleunuit mb-8">Overview</h2>
      <div className="flex items-center">
        <div className="w-1/2 relative mr-0">
          <img
            className="h-auto w-full transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
            src="/assets/overview.png"
            alt="Overview"
          />
        </div>
        <div className="bg-bleu w-1/2 p-6 text-white font-poppins absolute right-20 top-50">
          <p className="text-wrap">
          Welcome to ESI&apos;s comprehensive training program overview, where your professional development
           journey begins! Explore our diverse range of specialized courses meticulously designed to meet
            the evolving demands of today&apos;s job market. Whether you&apos;re looking to sharpen your technical
             skills, delve into emerging technologies, or enhance your leadership capabilities, ESI offers
              tailored training solutions to suit your needs. With expert instructors, hands-on learning 
              experiences, and flexible scheduling options, we provide the tools and resources you need 
              to succeed in your career. Browse through our training offerings and take the first step
               towards unlocking your full potential with ESI.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Overview;