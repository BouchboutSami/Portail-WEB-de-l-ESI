"use client";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import ServicesImage from "@/components/ServicesImage";
import ServicesSideBar from "@/components/ServicesSideBar";
import Themes from "@/components/Themeshome/Themes";
import React from "react";

const page = () => {
  return (
    <div className=" w-screen">
      <NavBar />
      <ServicesImage />
      <div className="flex ">
        <ServicesSideBar />
        <div className="w-full py-10 flex flex-col items-center">
          <h1 className="text-3xl font-bold text-darkblue mb-10">
            Customized Programs
          </h1>
          <Themes />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
