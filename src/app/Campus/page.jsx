"use client";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "../../components/NavBar";
import PostImage from "../../components/PostImage";
import PostSideBar from "../../components/PostSideBar";
import Campus from "./Campus";

const page = () => {
  return (
    <BrowserRouter>
      <div className=" w-screen">
        <NavBar />
        <PostImage
          img="/assets/campusBG.png"
          titre="Campus"
          details="Explore postgraduate studies and research opportunities at ESI. Join
            us in pushing the boundaries of knowledge and shaping the future of
            your field."
        />
        <div className="flex ">
          <PostSideBar />
          <div className="w-full">
            <Campus />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default page;
