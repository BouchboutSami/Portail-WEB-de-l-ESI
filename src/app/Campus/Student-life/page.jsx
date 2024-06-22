"use client";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "@/components/NavBar";
import PostImage from "@/components/PostImage";
import Performance from "./Performance";
import Footer from "@/components/Footer";
import CampusSideBar from "../../CampusSideBar";

const page = () => {
  return (
    <div className=" w-screen">
      <NavBar />
      <PostImage
        img="\assets\performance.png"
        titre="Student Life"
        details="Discover student life at ESI, a dynamic environment conducive to success. Remarkable performances and collective successes make our campus a place where academic excellence meets the pleasure of learning. "
      />
      <div className="flex ">
        <CampusSideBar />
        <Performance />
      </div>
      <Footer />
    </div>
  );
};

export default page;
