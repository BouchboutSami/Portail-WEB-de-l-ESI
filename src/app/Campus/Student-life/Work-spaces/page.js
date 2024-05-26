"use client";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "@/components/NavBar";
import PostImage from "@/components/PostImage";
import Footer from "@/components/Footer";
import CampusSideBar from "../../CampusSideBar";
import Workspaces from "./Workspaces";

const page = () => {
  return (
    <BrowserRouter>
      <div className=" w-screen">
        <NavBar/>
        <PostImage img="\assets\workspaces.png" titre = "Work spaces" details ="ESI's workspaces offer a perfect mix of focus areas and collaborative zones, all designed to fuel your academic success. Equipped with advanced technology and a supportive environment, you'll have what you need to thrive." />
        <div className="flex ">
          <CampusSideBar/> 
          <Workspaces/>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
};

export default page;