/* eslint-disable @next/next/no-img-element */
import React from "react";

const WhyUs = () => {
  return (
    <div className="p-10 my-10 mx-10 relative w-full">
      <div className="font-poppins mx-auto my-auto font-bold text-noir text-4xl text-center p-8">
        <h1>Why us?</h1>
      </div>
      <div className="flex items-center">
        <div className="w-1/2 relative mr-0">
          <img
            className="h-auto w-full transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
            src="./assets/whyUs1.png"
            alt="ESI graduation ceremony"
          />
        </div>
        <div className="bg-bleu w-1/2 p-6 text-white font-poppins absolute right-20 top-50">
          <h1 className="font-bold mb-4">About us</h1>
          <p className="text-wrap mb-4">
            For more than 50 years, ESI has been at the forefront of technology
            education, shaping the minds of tomorrow&apos;s innovators and
            leaders. Established in 1969 as the Center for Studies and Research
            in Computer Science (CERI), our school has evolved into a beacon of
            excellence in the field. We&apos;ve matured into an industry leader
            and trusted resource for those seeking quality, innovation, and
            reliability.
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

export default WhyUs;
