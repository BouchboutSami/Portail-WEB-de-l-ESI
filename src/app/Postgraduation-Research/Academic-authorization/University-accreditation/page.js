"use client";
import NavBar from "@/components/NavBar";
import PostImage from "@/components/PostImage";
import PostSideBar from "@/components/PostSideBar";
import React from "react";
import { BrowserRouter } from "react-router-dom";

const page = () => {
  return (
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
  );
};

export default page;
