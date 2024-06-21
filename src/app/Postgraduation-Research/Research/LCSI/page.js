"use client";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { FaUserGroup } from "react-icons/fa6";
import UpComingEvent from "@/components/UpComingEvent";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import PostImage from "@/components/PostImage";
import PostSideBar from "@/components/PostSideBar";

const page = () => {
  const laboratory = {
    Title: "Laboratory of Communication in Information Systems",
    imageUrl: "/assets/lcsi.png",
    Director: " D.E Zeggour",
    ServiceTitle: "Communication in Information Systems",
    Website: "https://lcsi.esi.dz",
    Stats: [
      { label: "Professors", value: "4" },
      { label: "Lecturers", value: "2" },
      { label: "Doctoral Candidates", value: "+60" },
    ],
    ResearchTeams: [
      {
        TeamLabel: "Dynamic data distribution",
      },
      {
        TeamLabel: "Advanced Databases",
      },
      {
        TeamLabel: "Intelligent Processes",
      },
      {
        TeamLabel: "Applied Mathematics",
      },
    ],
  };
  const UpcomingEvents = [
    {
      title: "Algerian Doctoral Conference on Computer Science ADCCS’2024",
      imageUrl: "/assets/event.png",
      date: "10 May",
    },
    {
      title: "Algerian Doctoral Conference on Computer Science ADCCS’2024",
      imageUrl: "/assets/event.png",
      date: "10 May",
    },
    {
      title: "Algerian Doctoral Conference on Computer Science ADCCS’2024",
      imageUrl: "/assets/event.png",
      date: "10 May",
    },
  ];
  const DiscoverMore = [
    { linkText: "Scientific Production", link: "/" },
    { linkText: "Lab Archive", link: "/" },
    { linkText: "Ongoing projects", link: "/" },
  ];
  return (
    <BrowserRouter>
      <div className="w-screen">
        <NavBar />
        <PostImage
          img="/assets/research.png"
          titre="Research"
          details="Discover research initiatives at ESI. Dive into our diverse array of projects, where innovation thrives and breakthroughs await."
        />
        <div className="flex">
          <PostSideBar />
          <div className="flex w-full justify-center pt-8 text-center text-[16px] font-poppins">
            <div className="flex flex-col gap-4 w-full items-center">
              <h1 className="text-[24px] font-black">{laboratory.Title}</h1>
              <div className="flex flex-row items-center gap-4">
                <img
                  src={laboratory.imageUrl}
                  alt="Logo LCSI"
                  className="h-[150px]"
                />
                <div className="flex flex-col gap-2 items-start">
                  <div className="font-bold">
                    Director:{" "}
                    <span className="font-medium">{laboratory.Director}</span>
                  </div>
                  <div className="font-bold">
                    Service Title:{" "}
                    <span className="font-medium">
                      {laboratory.ServiceTitle}
                    </span>
                  </div>
                  <div className="font-bold">
                    Website:{" "}
                    <span className="font-medium">{laboratory.Website}</span>
                  </div>
                </div>
              </div>
              {/**Statistiques */}
              <div className="flex flex-col gap-2 w-full items-center bg-[#185B9C] p-4">
                <div className="grid grid-cols-3 justify-items-center gap-x-2 gap-y-2 p-2 max-w-screen-lg text-[20px]">
                  {laboratory.Stats.map((item, index) => (
                    <div
                      className="flex flex-col text-white items-center"
                      key={index}
                    >
                      <span>{item.value}</span>
                      <h1>{item.label}</h1>
                    </div>
                  ))}
                </div>
              </div>
              {/**Teams */}
              <div className="flex flex-col gap-2 w-full items-center p-4">
                <h1 className="font-extrabold text-[20px]">Research Teams</h1>
                <div className="grid grid-cols-2 justify-items-center gap-x-2 gap-y-2 p-2 max-w-screen-lg text-[20px]">
                  {laboratory.ResearchTeams.map((item, index) => (
                    <div
                      className="flex flex-col bg-[#F4F4F4] hover:bg-[#E8E9E9] text-left w-[300px] items-start pl-8 p-4 gap-2"
                      key={index}
                    >
                      <div className="flex flex-row gap-4 text-[#002E5F] hover:text-[#3587DE]">
                        <FaUserGroup className="border-[#002E5F] h-7" />
                        Team {index + 1}
                      </div>
                      <h1 className="text-black text-[16px]">
                        {item.TeamLabel}
                      </h1>
                    </div>
                  ))}
                </div>
              </div>
              {/* Events */}
              <div className="flex flex-col gap-2 w-full bg-[#F5F5F5] p-4">
                <h1 className="font-extrabold text-[20px]">Events & Updates</h1>
                <div className="grid grid-cols-3 justify-items-center gap-x-2 gap-y-2 p-2 max-w-screen-lg">
                  {UpcomingEvents.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-center items-center"
                    >
                      <UpComingEvent
                        title={item.title}
                        date={item.date}
                        imageUrl={item.imageUrl}
                      />
                    </div>
                  ))}
                </div>
                <div className="text-md font-light text-[#185B9C] hover:underline flex justify-end px-8">
                  See more {" >"}
                </div>
                {/**DiscoverMore */}
                <div className="flex flex-col gap-2 w-full items-center p-4">
                  <h1 className="font-extrabold text-[20px]">Discover more</h1>
                  <div className="grid grid-cols-2 justify-items-center gap-x-2 gap-y-2 p-2 max-w-screen-lg text-[16px]">
                    {DiscoverMore.map((item, index) => (
                      <div
                        className="flex flex-col w-[300px] items-start pl-8 p-4 gap-2"
                        key={index}
                      >
                        <h1 className="text-[#185B9C] hover:text-[#3587DE] underline ">
                          {item.linkText} {">"}
                        </h1>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default page;
