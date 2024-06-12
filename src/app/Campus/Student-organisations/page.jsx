"use client";
import NavBar from "@/components/NavBar";
import PostImage from "@/components/PostImage";
import PostSideBar from "@/components/PostSideBar";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Campus from "../Campus";
import Footer from "@/components/Footer";
import ListeClubs from "./ListeClubs";

const page = ({ params }) => {
  return (
    <BrowserRouter>
      <div className=" w-screen">
        <NavBar />
        {params.clubname}
        <PostImage
          img="/assets/studentorgs.png"
          titre="Student organisations"
          details="Student clubs set the pace for life at the school.They are an opportunity for students to get together, get their campus moving, and share their passions."
        />
        <div className="w-full">
          <ListeClubs />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default page;
