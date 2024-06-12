"use client";
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "../../../../Components/NavBar";
import PostImage from "../../../../Components/PostImage";
import PostSideBar from "../../../../Components/PostSideBar";
import Researchproject from "./Researchproject";

const page = () => {
  return (
    <BrowserRouter>
      <div className=" w-screen">
        <NavBar />
        <PostImage
        image="/assets/ResearchProjects.png" 
        titre = 'Research' 
        details = 'Discover research initiatives at ESI. Dive into our diverse array of projects, where innovation thrives and breakthroughs await.'
        />
        <div className="flex ">
          <PostSideBar />
          <Researchproject/>
    </div>
   </div>
    </BrowserRouter>
  );
};

export default page;
