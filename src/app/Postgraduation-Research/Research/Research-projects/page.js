"use client";
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Researchproject from "./Researchproject";
import NavBar from "@/components/NavBar";
import PostImage from "@/components/PostImage";
import PostSideBar from "@/components/PostSideBar";

const page = () => {
  return (
    <BrowserRouter>
      <div className=" w-screen">
        <NavBar />
        <PostImage
          image="/assets/ResearchProjects.png"
          titre="Research"
          details="Discover research initiatives at ESI. Dive into our diverse array of projects, where innovation thrives and breakthroughs await."
        />
        <div className="flex ">
          <PostSideBar />
          <Researchproject />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default page;
