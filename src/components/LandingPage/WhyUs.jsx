/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
const WhyUs = () => {
  const [paragraph, setParagraph] = useState("");
  useEffect(() => {
    axios.get("http://localhost:1337/api/why-us").then((response) => {
      setParagraph(response.data.data.attributes.paragraph);
    });
  }, []);
  return (
    paragraph.length > 0 && (
      <div className="p-10  mx-10 relative w-full">
        <div className="font-poppins mx-auto my-auto font-bold text-noir text-4xl text-center p-8">
          <h1>Why us?</h1>
        </div>
        <div className="flex items-center">
          <div className="w-1/2 relative mr-0">
            <img
              className="h-auto w-full transition-all duration-300 rounded-lg filter"
              src="./assets/whyUs1.png"
              alt="ESI graduation ceremony"
            />
          </div>
          <div className="bg-bleu w-1/2 p-6 text-white font-poppins absolute right-20 top-50">
            <h1 className="font-bold mb-4">About us</h1>
            <p className="text-wrap mb-4">{paragraph}</p>
            <a
              href="/University/AboutTheUniversity"
              className="bg-blanc text-bleu py-2 px-6 absolute bottom-2 right-10"
            >
              See more
            </a>
          </div>
        </div>
      </div>
    )
  );
};

export default WhyUs;
