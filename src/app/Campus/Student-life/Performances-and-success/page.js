"use client";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import CampusSideBar from "../../CampusSideBar";
import NavBar from "@/components/NavBar";
import PostImage from "@/components/PostImage";
import Performance from "./Performance";

const page = () => {
  return (
    <BrowserRouter>
      <div className=" w-screen">
        <NavBar/>
        <PostImage img="\assets\performance.png" titre = "Student Life" description ="Discover student life at ESI, a dynamic environment conducive to success. Remarkable performances and collective successes make our campus a place where academic excellence meets the pleasure of learning. " />
        <div className="flex ">
          <CampusSideBar/> 
          <Performance/>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default page;
