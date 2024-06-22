"use client";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import CampusSideBar from "../CampusSideBar";
import NavBar from "@/components/NavBar";
import PostImage from "@/components/PostImage";
import Sports from "./sports";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div className=" w-screen">
      <NavBar />
      <PostImage
        img="\assets\sports.png"
        titre="Sports and culture"
        details="Discover a range of stimulating sporting and cultural activities at ESI. Balance your studies with activities that nourish body and mind. Explore our modern facilities and engage in cultural experiences that will enrich your academic journey. "
      />
      <div className="flex ">
        <CampusSideBar />
        <Sports />
      </div>
      <Footer />
    </div>
  );
};

export default page;
