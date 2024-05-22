"use client";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import CampusSideBar from "../CampusSideBar";
import NavBar from "@/components/NavBar";
import PostImage from "@/components/PostImage";
import Sports from "./sports";

const page = () => {
  return (
    <BrowserRouter>
      <div className=" w-screen">
        <NavBar/>
        <PostImage img="\assets\sports.png" titre = "Sports and culture" description ="Discover a range of stimulating sporting and cultural activities at ESI. Balance your studies with activities that nourish body and mind. Explore our modern facilities and engage in cultural experiences that will enrich your academic journey. " />
        <div className="flex ">
          <CampusSideBar/> 
          <Sports/>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default page;
