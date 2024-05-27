"use client";
import NavBar from "@/components/NavBar";
import PostImage from "@/components/PostImage";
import PostSideBar from "@/components/PostSideBar";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Campus from "../Campus";
import Details from "./Details";

const page = () => {
  return (
    <BrowserRouter>
      <div className="w-screen flex flex-col">
        <NavBar />
        <Breadcrumb />
        <Details />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default page;
