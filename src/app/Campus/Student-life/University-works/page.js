"use client";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "@/components/NavBar";
import PostImage from "@/components/PostImage";
import Footer from "@/components/Footer";
import CampusSideBar from "../../CampusSideBar";
import Uniworks from "./Uniworks";

const page = () => {
  return (
    <BrowserRouter>
      <div className=" w-screen">
        <NavBar/>
        <PostImage img="\assets\uniworks.png" titre = "University works" details ="Beyond academics, ESI offers a comprehensive support system to ease your daily life and empower your success.  University Works provides a range of resources designed for your well-being" />
        <div className="flex ">
          <CampusSideBar/> 
          <Uniworks/>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
};

export default page;