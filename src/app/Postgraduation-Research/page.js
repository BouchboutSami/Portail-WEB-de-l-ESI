"use client";
import React from "react";
import NavBar from "../../Components/NavBar";
import PostImage from "../../Components/PostImage";
import PostSideBar from "../../Components/PostSideBar";
import { BrowserRouter } from "react-router-dom";

const page = () => {
  return (
    <BrowserRouter>
      <div className=" w-screen">
        <NavBar />
        <PostImage />
        <div className="flex ">
          <PostSideBar />
          <div className=" w-full items-center text-center"></div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default page;
