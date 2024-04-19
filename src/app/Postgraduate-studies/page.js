"use client";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "../../components/NavBar";
import PostImage from "../../components/PostImage";
import PostSideBar from "../../components/PostSideBar";

const page = () => {
  return (
    <BrowserRouter>
      <div className=" w-screen">
        <NavBar />
        <PostImage />
        <div className="flex ">
          <PostSideBar />
          <div className=" w-full items-center text-center">
            postgraduate studies
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default page;
