/* eslint-disable @next/next/no-img-element */
import React from "react";

const AlumniPresentation= () => {
  return (
    <div className="p-10 my-10 mx-10 relative w-full">
      <div className="font-poppins mx-auto my-auto font-bold text-noir text-4xl text-center p-8">
        <h1>Alumni</h1>
      </div>
      <div className="flex items-center">
        <div className="w-1/2 relative mr-0">
          <img
            className=" h-auto w-full transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
            src="./assets/Alumni.jpg"
            alt="Alumni"
          />
        </div>
        <div className="bg-bleu w-1/2 p-6 text-white font-poppins absolute right-20 top-50">
          <h1 className="font-bold mb-4">Alumni</h1>
          <p className="text-wrap mb-4">
          Our alumni network is a vibrant tapestry woven from diverse experiences and achievements, offering a rich resource for both professional growth and personal connections. As a cornerstone of our university, we continually strive to support our alumni through lifelong learning opportunities, exclusive networking events, and meaningful career resources, ensuring that your relationship with the university strengthens as you shape the future.
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

export default AlumniPresentation;
