"use client";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import CampusNewsCard from "@/components/CampusNewsCard";
import { IoIosArrowForward } from "react-icons/io";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import PostImage from "@/components/PostImage";
import PostSideBar from "@/components/PostSideBar";

const page = () => {
  const News = [
    {
      image: "/assets/HabilitationAUF.png",
      title: "FAQ: Journée mondiale de l’alimentation",
      link: "/",
    },
    {
      image: "/assets/HabilitationAUF.png",
      title: "Prix de thèses francophones de prospection, édition 2022",
      link: "/",
    },
    {
      image: "/assets/HabilitationAUF.png",
      title: "2ème Assise de la francophonie scientifique",
      link: "/",
    },
    {
      image: "/assets/HabilitationAUF.png",
      title:
        "Une équipe de l'ESI remporte le Hackathon Alger Legal Tech Hackathon",
      link: "/",
    },
    {
      image: "/assets/HabilitationAUF.png",
      title:
        "Une équipe de l'ESI remporte le Hackathon Alger Legal Tech Hackathon",
      link: "/",
    },
    {
      image: "/assets/HabilitationAUF.png",
      title:
        "Une équipe de l'ESI remporte le Hackathon Alger Legal Tech Hackathon",
      link: "/",
    },
  ];
  return (
    <div className=" w-screen">
      <NavBar />
      <PostImage
        image="/assets/ResearchProjects.png"
        titre="Academic authorization"
        details="Explore academic authorization at ESI. Join us to keep up to date with all the latest accreditations and news."
      />
      <div className="flex ">
        <PostSideBar />
        <div className=" w-full items-center text-center">
          <div className="text-black font-poppins text-[20px] mt-6 px-8 py-8">
            Understanding accreditation not only sheds light on the credibility
            and legitimacy of educational offerings but also illuminates the
            broader landscape of academia and its continuous pursuit of
            improvement.
          </div>
          <div className="w-full flex justify-center items-center flex-col">
            <p className="text-black font-poppins font-bold text-[20px] mb-4">
              University accreditation
            </p>
            <div className="flex justify-center items-center gap-5">
              <CampusNewsCard
                title="Annonces"
                image="/assets/HabilitationAnnonce.png"
              />
              <CampusNewsCard
                title="Guide"
                image="/assets/HabilitationGuide.png"
              />
              <CampusNewsCard
                title="Documents"
                image="/assets/HabilitationDocs.png"
              />
            </div>
          </div>

          <div className="bg-[#F5F5F5] w-full px-[5%] mt-4">
            <p className="text-black font-poppins font-bold text-[20px] mb-4">
              Articles News{" "}
            </p>
            <div className="grid grid-cols-3 gap-4 items-center pb-4">
              {/* max 8 elements to display in the section  */}
              {News.slice(0, 8).map((item, index) => (
                <a href={item.link} key={index}>
                  <CampusNewsCard title={item.title} image={item.image} />
                </a>
              ))}
            </div>
            <div className="flex justify-end">
              <a href="" className="flex items-center">
                <span className="mr-1 text-[#185B9C]">Découvrir plus</span>
                <IoIosArrowForward className="w-4 h-4 text-[#185B9C] ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="mb-4"></p>
      <Footer />
    </div>
  );
};

export default page;
