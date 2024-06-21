"use client";
import NavBar from "@/components/NavBar";
import PostImage from "@/components/PostImage";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Campus from "./Campus";
import Footer from "@/components/Footer";
import CampusSideBar from "./CampusSideBar";

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
          <CampusSideBar />
          <div className="w-full">
            <Campus />
          </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default page;
