"use client";
import React from "react";
import NavBar from "../../Components/NavBar";
import PostImage from "../../Components/PostImage";
import PostSideBar from "../../Components/PostSideBar";
import { BrowserRouter } from "react-router-dom";
import HoverImg from "@/components/HoverImg";
import Footer from "@/components/Footer";
import UpComingEvent from "@/components/UpComingEvent";
import ArticleCard from "@/components/ArticleCard";

const page = () => {
  const PostgraduateStudiesContent = [
    {
      imageUrl: "/assets/test.png",
      title: "LMD Doctoral Programs ",
      link: "/",
    },
    {
      imageUrl: "/assets/test.png",
      title: "Sciences Doctoral Programs",
      link: "/",
    },
    {
      imageUrl: "/assets/test.png",
      title: "LMD Doctoral Guide ",
      link: "/",
    },
  ];

  const ResearchContent = [
    {
      imageUrl: "/assets/laboratoires.png",
      title: "Laboratories",
      link: "/",
    },
    {
      imageUrl: "/assets/projetsPost.png",
      title: "Research Projects",
      link: "/",
    },
  ];

  const AcademicAuthorizationContent = [
    {
      imageUrl: "/assets/docs.png",
      title: "Test Article ",
      link: "/",
    },
    {
      imageUrl: "/assets/docs.png",
      title: "Test Article ",
      link: "/",
    },
    {
      imageUrl: "/assets/docs.png",
      title: "Test Article ",
      link: "/",
    },
  ];

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

  return (
    <BrowserRouter>
      <div className="w-screen">
        <NavBar />
        <PostImage
          img="/assets/postGraduationResearch.jpg"
          titre="Postgraduation & Research"
          details="Explore postgraduate studies and research opportunities at ESI. Join us in pushing the boundaries of knowledge and shaping the future of your field."
        />
        <div className="flex">
          <PostSideBar />
          <div className="flex w-full justify-center pt-8 text-center text-[16px] font-poppins">
            <div className="flex flex-col gap-8 w-full items-center">
              <p className="w-[900px] mx-8">
                We provide an environment dedicated to nurturing the academic
                and research endeavors of our individuals. We empower them to
                explore their passions, push boundaries, and contribute to the
                forefront of knowledge in their respective fields.
              </p>

              {/* Postgraduate studies Content */}
              <div className="flex flex-col gap-2 w-full items-center">
                <a href="/Postgraduation-Research/Postgraduate-studies">
                  <h1 className="font-extrabold text-[20px] hover:text-[#185B9C]">
                    Postgraduate studies
                  </h1>
                </a>
                <div className="grid grid-cols-3 justify-items-center gap-x-2 gap-y-2 p-2 max-w-screen-lg">
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

              {/* Research Content */}
              <div className="flex flex-col gap-2 w-full items-center bg-[#F5F5F5] p-4">
                <a href="/Postgraduation-Research/Research">
                  <h1 className="font-extrabold text-[20px] hover:text-[#185B9C]">
                    Research
                  </h1>
                </a>
                <div className="grid grid-cols-2 justify-items-center gap-x-2 gap-y-2 p-2 max-w-screen-lg">
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

              {/* Academic authorization Content */}
              <div className="flex flex-col gap-2 w-full items-center">
                <a href="/Postgraduation-Research/Academic-authorization">
                  <h1 className="font-extrabold text-[20px] hover:text-[#185B9C]">
                    Academic authorization
                  </h1>
                </a>
                <div className="grid grid-cols-3 justify-items-center gap-x-2 gap-y-2 p-2 max-w-screen-lg">
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

              {/* Upcoming Events */}
              <div className="flex flex-col gap-2 w-full items-center bg-[#F5F5F5] p-4">
                <h1 className="font-extrabold text-[20px]">Upcoming Events</h1>
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
