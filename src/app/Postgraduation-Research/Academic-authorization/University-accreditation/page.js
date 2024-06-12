"use client";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "../../../../Components/NavBar";
import PostImage from "../../../../Components/PostImage";
import PostSideBar from "../../../../Components/PostSideBar";

const page = () => {
  return (
    <BrowserRouter>
      <div className=" w-screen">
        <NavBar />
        <PostImage
          titre="University Accreditation"
          details="Explore academic authorization at ESI. Join us to keep up to date with all the latest accreditations and news."
        />
        <div className="flex ">
          <PostSideBar />
          <div className=" w-full items-center text-center">
            University accreditation
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default page;
