"use client";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "../../../Components/NavBar";
import PostSideBar from "../../../Components/PostSideBar";
import PostImage from "@/components/PostImage";

const page = () => {
  return (
    <BrowserRouter>
      <div className=" w-screen">
        <NavBar />
        <PostImage
        image="/images/Event.png" 
        titre = 'Research' 
        details = 'Discover research initiatives at ESI. Dive into our diverse array of projects, where innovation thrives and breakthroughs await.'
        />
        <div className="flex ">
          <PostSideBar />
          <div className=" w-full items-center text-center">Research</div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default page;
