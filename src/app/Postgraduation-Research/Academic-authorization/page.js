"use client";
import React from "react";
import NavBar from "../../../Components/NavBar";
import PostImage from "../../../Components/PostImage";
import PostSideBar from "../../../Components/PostSideBar";
import { BrowserRouter } from "react-router-dom";

const page = () => {
  return (
    <BrowserRouter>
      <div className=" w-screen">
        <NavBar />
        <PostImage
        titre = 'Academic authorization' 
        details='Explore academic authorization at ESI. Join us to keep up to date with all the latest accreditations and news.' />
        <div className="flex ">
          <PostSideBar />
          <div className=" w-full items-center text-center">
            academic authorization
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default page;
