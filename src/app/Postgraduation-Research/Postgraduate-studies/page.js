"use client";
import React from "react";
import NavBar from "../../../Components/NavBar";
import PostImage from "../../../Components/PostImage";
import PostSideBar from "../../../Components/PostSideBar";
import { BrowserRouter } from "react-router-dom";
import ArticleCard from "@/components/ArticleCard";

const page = () => {
  return (
    <BrowserRouter>
      <div className=" w-screen">
        <NavBar />
        <PostImage
        img="/assets/postGraduationResearch.jpg"
        titre= 'Postgraduate studies'
        details = 'Explore postgraduate studies at ESI. Join us in pushing the boundaries of knowledge and shaping the future of your field.' />
        <div className="flex ">
          <PostSideBar />
          <div className=" w-full items-center text-center">

          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default page;
