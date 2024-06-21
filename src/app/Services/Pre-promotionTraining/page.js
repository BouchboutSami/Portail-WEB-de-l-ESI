"use client";
import React from "react";
import NavBar from "@/components/NavBar";
import Signalbar from "@/components/SignalBar";
import Footer from "@/components/Footer";
import PostImage from "@/components/PostImage";
import ServicesSideBar from "@/components/Partenaires/ServicesSideBar";

const page = () => {
  return (
    <div className="font-poppins text-bleu w-screen flex flex-col relative">
      <Signalbar />
      <NavBar />
      {/* <PostImage
        img="/assets/Pre-promotion1.png"
        titre="Pre-promotion Training"
        details="Discover our pre-promotion training themes and perfect your skills in various fields thanks to our wide selection of programs tailored to your professional needs."
      /> */}
      <ServicesSideBar />
      <Footer />
    </div>
  );
};
export default page;
