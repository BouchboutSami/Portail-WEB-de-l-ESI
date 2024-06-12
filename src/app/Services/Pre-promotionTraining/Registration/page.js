"use client";
import React from "react";
import NavBar from "@/components/NavBar";
import Signalbar from "@/components/SignalBar";
import Footer from "@/components/Footer";
import PostImage from "@/components/PostImage";
import ServicesSideBar from "@/components/Partenaires/ServicesSideBar";
import HeadingUnderlined from "@/components/HeadingUnderlined";
import { BrowserRouter } from "react-router-dom";
import Registration from "./Registration";

const page = () => { 
    return (
      <BrowserRouter>
      <div className="font-poppins text-bleu w-screen flex flex-col relative">
        <Signalbar />
        <NavBar />
        <PostImage 
          img="/assets/Pre-promotion1.png"
          titre="Pre-promotion Training"
          details="Discover our pre-promotion training themes and perfect your skills in various fields thanks to our wide selection of programs tailored to your professional needs."
        />
        <div className="flex">
        <ServicesSideBar/>
        <Registration/>
        </div>
        <Footer/>
      </div>
      </BrowserRouter>
         );
}
export default page;