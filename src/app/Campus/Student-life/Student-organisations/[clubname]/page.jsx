"use client";
import NavBar from "@/components/NavBar";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "@/components/Footer";
import Details from "./Details";

const page = () => {
  return (
    <div className="w-screen flex flex-col">
      <NavBar />
      {/* <Breadcrumb /> */}
      <Details />
      <Footer />
    </div>
  );
};

export default page;
