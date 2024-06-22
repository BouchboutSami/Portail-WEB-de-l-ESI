"use client";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import NextEvents from "@/components/LandingPage/NextEvents";
import EventSearch from "@/components/EventSearch";
import PostImage from "@/components/PostImage";
import EventDiscoverArtcile from "@/components/EventDiscoverArticle";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

const page = () => {
  return (
    <div className=" w-screen">
      <NavBar />
      <PostImage
        img="/assets/postGraduationResearch.jpg"
        titre="University events"
        details="Discover the dynamic world of the higher national school of computer science through our Events page. Keep up to date with the latest news, discoveries and events that reflect our commitment to knowledge sharing and the scientific community."
      />
      <div className="flex flex-col items-center">
        <div className=" mt-10 mb-8 justify-center items-center min-h-max bg-bleu rounded-md w-3/4 px-[5%] py-4">
          <EventSearch />
        </div>
        <div className="flex w-full">
          <div className="w-full flex flex-col bg-[#F5F5F5] justify-center items-center min-h-max xl:px-[15%] lg:px-[15%] px-[10%]">
            <h1 className="text-noir font-bold text-4xl m-5">
              Upcoming Events
            </h1>
            <NextEvents />
          </div>
        </div>
        <div className="w-3/5 flex flex-col items-center mb-4 mt-4 gap-10">
          <h1 className="text-center font-bold text-4xl mb-4 mt-4">
            Discover ESI&apos;s major events{" "}
          </h1>
          <EventDiscoverArtcile
            imageUrl={"/assets/campus4.jpg"}
            title={"Journée portes ouvertes"}
            description={
              "Every year, ESI opens its doors at the beginning of the year to baccalaureate students to find out about the courses on offer, ask questions, talk to students and teachers at the school and find out more about life at ESI."
            }
          />
          <EventDiscoverArtcile
            imageUrl={"/assets/campus5.jpg"}
            title={"Graduation Ceremony"}
            description={
              "Every year ESI organises a ceremony for that year's graduating engineers to celebrate their success and share a good time together"
            }
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
