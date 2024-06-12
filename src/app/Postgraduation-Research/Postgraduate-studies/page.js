"use client";
import React from "react";
import NavBar from "../../../Components/NavBar";
import PostImage from "../../../Components/PostImage";
import PostSideBar from "../../../Components/PostSideBar";
import { BrowserRouter } from "react-router-dom";
import ArticleCard from "@/components/ArticleCard";
import DoctoralRegistration from "@/components/DoctoralRegistration";
import PostEventCard from "@/components/PostEventCard";
import Footer from "@/components/Footer";

const Page = () => {
  const articles = [
    {
      imageUrl: "/assets/test.png",
      title: "LMD Doctoral Guide",
      description:
        "Guide providing detailed information on research opportunities and academic requirements.",
      link: "/",
      linkText: "LMD Doctoral Programs",
    },
    {
      imageUrl: "/assets/test.png",
      title: "LMD Doctoral Guide",
      description:
        "Guide providing detailed information on research opportunities and academic requirements.",
      link: "/",
      linkText: "LMD Doctoral Programs",
    },
    {
      imageUrl: "/assets/test.png",
      title: "LMD Doctoral Guide",
      description:
        "Guide providing detailed information on research opportunities and academic requirements.",
      link: "/",
      linkText: "LMD Doctoral Programs",
    },
  ];

  const upcomingEvents = [
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
          img="/assets/postgraduateStudies.png"
          titre="Postgraduate studies"
          details="Explore postgraduate studies at ESI. Join us in pushing the boundaries of knowledge and shaping the future of your field."
        />
        <div className="flex">
          <PostSideBar />
          <div className="flex flex-col w-full items-center py-8 text-center text-[16px] font-poppins">
            {/* Articles */}
            <div className="flex flex-col gap-8 w-full items-center">
              {articles.map((article, index) => (
                <div className="items-center flex justify-center" key={index}>
                  <ArticleCard
                    imageUrl={article.imageUrl}
                    title={article.title}
                    description={article.description}
                    link={article.link}
                    linkText={article.linkText}
                  />
                </div>
              ))}
            </div>
            {/* Upcoming Events */}
            <div className="flex flex-col gap-8 w-full bg-[#F5F5F5] p-4 mt-8">
              <div className="flex flex-col gap-2 items-center w-full">
                <h1 className="font-extrabold text-[20px] pb-4">
                  Upcoming Events
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-lg">
                  {upcomingEvents.map((event, index) => (
                    <div
                      key={index}
                      className="flex justify-center items-center"
                    >
                      <PostEventCard
                        date="14"
                        month="May"
                        title="Algerian Doctoral Conference on Computer Science ADCCS’2024"
                        time="8:00 UTC+1"
                        location="ESI"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-md font-light text-[#185B9C] hover:underline flex justify-end px-8">
                Docoral events {" >"}
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full items-center px-4 pt-4 mt-8">
              <DoctoralRegistration />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default Page;
