"use client";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import PostImage from "@/components/PostImage";
import ServicesSideBar from "@/components/ServicesSideBar";
import Themes from "@/components/Themeshome/Themes";
import React from "react";
import { BrowserRouter } from "react-router-dom";

const page = () => {
  return (
    <BrowserRouter>
      <div className=" w-screen">
        <NavBar />
        <PostImage
          img="/assets/campusBG.png"
          titre="Campus"
          details="Explore postgraduate studies and research opportunities at ESI. Join
            us in pushing the boundaries of knowledge and shaping the future of
            your field."
        />
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
    </BrowserRouter>
  );
};

export default page;
