"use client";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "@/components/NavBar";
import PostImage from "@/components/PostImage";
import Footer from "@/components/Footer";
import CampusSideBar from "../../CampusSideBar";
import Healthcare from "./Healthcare";

const page = () => {
  return (
    <BrowserRouter>
      <div className=" w-screen">
        <NavBar/>
        <PostImage img="\assets\healthcare.png" titre = "Healthcare & social insurance" description ="Your well-being is our priority at ESI. We provide a supportive environment that goes beyond academics to ensure your physical and mental health. Explore our comprehensive health services and discover how ESI empowers you to thrive throughout your studies. " />
        <div className="flex ">
          <CampusSideBar/> 
          <Healthcare/>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
};

export default page;