"use client";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "@/components/NavBar";
import PostImage from "@/components/PostImage";
import Footer from "@/components/Footer";
import Entrepreneurship from "./Entrepreneurship";
import CampusSideBar from "../CampusSideBar";

const page = () => {
  return (
    <div className=" w-screen">
      <NavBar />
      <PostImage
        img="\assets\entrepreneurship.png"
        titre="Entrepreneurship at school"
        details="Unleash your inner innovator at ESI.  Collaborate, gain practical skills, and turn your business dreams into reality.  ESI ignites your entrepreneurial spirit."
      />
      <div className="flex ">
        <CampusSideBar />
        <Entrepreneurship />
      </div>
      <Footer />
    </div>
  );
};

export default page;
