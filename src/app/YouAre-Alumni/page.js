"use client";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "../../Components/NavBar";
import Footer from "@/components/Footer";

import AlumniImage from "@/components/AlumniImage";
import AlumniPresentation from "@/components/AlumniPresentation";
import NewsAlumni from "@/components/NewsAlumni";
import EventsAlumni from "@/components/EventsAlumni";
import AlumniSuccess from "@/components/AlumniSuccess";

const page = () => {
  return (
    <BrowserRouter>
       <div className="font-poppins text-bleu w-screen flex flex-col relative">
      <div className=" w-screen">
i       <NavBar />
        <AlumniImage />
        <AlumniPresentation />
        <NewsAlumni />
        <div className="w-full flex flex-col justify-center items-center min-h-max xl:px-[15%] lg:px-[15%] px-[10%] mb-10">
        <h1 className="text-noir font-bold text-3xl mb-4 mt-8 ">Upcoming Events</h1>
        <h2 className="mb-10 text-noir text-xl">
          Rediscover the vibrant spirit of campus life and join us in shaping the future together.
        </h2>
        <EventsAlumni />
        </div>
        <AlumniSuccess />
      </div>
      <Footer />
      </div>
    </BrowserRouter>
  );
};

export default page;