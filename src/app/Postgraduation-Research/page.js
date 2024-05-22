"use client";
import React from "react";
import NavBar from "../../Components/NavBar";
import PostImage from "../../Components/PostImage";
import PostSideBar from "../../Components/PostSideBar";
import { BrowserRouter } from "react-router-dom";
import HoverImg from "@/components/HoverImg";

const page = () => {
  const PostgraduateStudiesContent = [
    {
      imageUrl: "/assets/test.png",
      title: "Test Article ",
      link: "/",
    },
    {
      imageUrl: "/assets/test.png",
      title: "Test Article ",
      link: "/",
    },
    {
      imageUrl: "/assets/test.png",
      title: "Test Article ",
      link: "/",
    },
  ];

  const ResearchContent = [
    {
      imageUrl: "/assets/WhyUs1.png",
      title: "Test Article ",
      link: "/",
    },
    {
      imageUrl: "/assets/WhyUs1.png",
      title: "Test Article ",
      link: "/",
    },
  ];
  const AcademicAuthorizationContent = [
    {
      imageUrl: "/assets/test.png",
      title: "Test Article ",
      link: "/",
    },
    {
      imageUrl: "/assets/test.png",
      title: "Test Article ",
      link: "/",
    },
    {
      imageUrl: "/assets/test.png",
      title: "Test Article ",
      link: "/",
    },
  ];
  const UpcomingEvents = [
    {
      title: "Event1",
      imageUrl: "university1.jpg",
      date: "",
    },
  ];
  return (
    <BrowserRouter>
      <div className=" w-screen">
        <NavBar />
        <PostImage
          img="/assets/postGraduationResearch.jpg"
          titre="Postgraduation & Research"
          details="Explore postgraduate studies and research opportunities at ESI. Join us in pushing the boundaries of knowledge and shaping the future of your field."
        />
        <div className="flex ">
          <PostSideBar />
          <div className=" flex w-full justify-center py-8 text-center text-[16px] font-poppins">
            <div className="flex flex-col gap-8">
              <p className="w-[900px]">
                We provide an environment dedicated to nurturing the academic
                and research endeavors of our inidividuals. We empower them to
                explore their passions, push boundaries, and contribute to the
                forefront of knowledge in their respective fields.
              </p>
              <a href="/Postgraduation-Research/Postgraduate-studies">
                <h1 className=" font-extrabold text-[24px] hover:text-[#185B9C] ">
                  Postgraduate studies
                </h1>
              </a>
              {/* Postgraduate studies Content */}
              <div className="flex justify-center">
                <div
                  className={`grid grid-cols-${Math.min(
                    PostgraduateStudiesContent.length,
                    4
                  )} gap-x-2 gap-y-2 p-8 max-w-screen-lg`}
                >
                  {PostgraduateStudiesContent.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-center items-center"
                    >
                      <HoverImg
                        title={item.title}
                        link={item.link}
                        imageUrl={item.imageUrl}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <a href="/Postgraduation-Research/Research">
                <h1 className=" font-extrabold text-[24px] hover:text-[#185B9C] ">
                  Research
                </h1>
              </a>
              {/* Research Content */}
              <div className="flex justify-center">
                <div
                  className={`grid grid-cols-${Math.min(
                    ResearchContent.length,
                    4
                  )} gap-x-2 gap-y-2 p-8 max-w-screen-lg`}
                >
                  {ResearchContent.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-center items-center"
                    >
                      <HoverImg
                        title={item.title}
                        link={item.link}
                        imageUrl={item.imageUrl}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <a href="/Postgraduation-Research/Academic-authorization">
                <h1 className=" font-extrabold text-[24px] hover:text-[#185B9C] ">
                  Academic authorization
                </h1>
              </a>
              {/* Academic authorization Content */}
              <div className="flex justify-center">
                <div
                  className={`grid grid-cols-${Math.min(
                    AcademicAuthorizationContent.length,
                    4
                  )} gap-x-2 gap-y-2 p-8 max-w-screen-lg`}
                >
                  {AcademicAuthorizationContent.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-center items-center"
                    >
                      <HoverImg
                        title={item.title}
                        link={item.link}
                        imageUrl={item.imageUrl}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <h1 className=" font-extrabold text-[24px]">Upcoming Events</h1>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default page;
