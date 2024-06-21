"use client";
import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import PostImage from "@/components/PostImage";
import ServicesSideBar from "@/components/Partenaires/ServicesSideBar";
import Registration from "./Registration";

const page = () => {
  return (
    <div className="font-poppins text-bleu w-screen flex flex-col relative">
      <NavBar />
      {/* <PostImage
        img="/assets/Pre-promotion1.png"
        titre="Pre-promotion Training"
        details="Discover our pre-promotion training themes and perfect your skills in various fields thanks to our wide selection of programs tailored to your professional needs."
      /> */}
      <div className="flex">
        <ServicesSideBar />
        <Registration />
      </div>
      <Footer />
    </div>
  );
};
export default page;
