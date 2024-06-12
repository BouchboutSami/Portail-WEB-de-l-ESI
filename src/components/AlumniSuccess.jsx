import React from "react";
import CampusNewsCard from "./CampusNewsCard";

const AlumniSuccess = () => {
  const News = [
    {
      image: "/assets/CampusNews.jpg",
      title:
        "Un ancien étudiant de l'ESI remporte le prix de  ",
      link: "/",
    },
    {
      image: "/assets/CampusNews.jpg",
      title:
        "Un ancien étudiant de l'ESI remporte le prix de ",
      link: "/",
    },
    {
      image: "/assets/CampusNews.jpg",
      title:
        "Un ancien étudiant de l'ESI remporte le prix de ",
      link: "/",
    },
    {
      image: "/assets/CampusNews.jpg",
      title:
        "Une équipe de l'ESI remporte le Hackathon Alger Legal Tech Hackathon",
      link: "/",
    },
    {
      image: "/assets/CampusNews.jpg",
      title:
        "Une équipe de l'ESI remporte le Hackathon Alger Legal Tech Hackathon",
      link: "/",
    },
    {
      image: "/assets/CampusNews.jpg",
      title:
        "Une équipe de l'ESI remporte le Hackathon Alger Legal Tech Hackathon",
      link: "/",
    },
    {
      image: "/assets/CampusNews.jpg",
      title:
        "Une équipe de l'ESI remporte le Hackathon Alger Legal Tech Hackathon",
      link: "/",
    },
    {
      image: "/assets/CampusNews.jpg",
      title:
        "Une équipe de l'ESI remporte le Hackathon Alger Legal Tech Hackathon",
      link: "/",
    },
    {
      image: "/assets/CampusNews.jpg",
      title:
        "Une équipe de l'ESI remporte le Hackathon Alger Legal Tech Hackathon",
      link: "/",
    },
  ];
  return (
    <div className="w-full bg-[#F5F5F5] flex flex-col items-center gap-8">
      <h1 className="font-poppins font-bold mt-8 text-[28px] text-black hover:text-[#185B9C]">
        Alumni Succes Stories
      </h1>
      <div className="grid grid-cols-4 gap-1 items-center pb-4">
        {/* max 4 elements to display in the section  */}
        {News.slice(0, 4).map((item, index) => (
          <a href={item.link} key={index}>
            <CampusNewsCard title={item.title} image={item.image} />
          </a>
        ))}
      </div>
     
      <div className="flex flex-row justify-between px-4 items-center">
        <div className=" absolute w-full bottom-0 left-0  hover:underline text-[#185B9C]">
          <div></div>
          <div></div>
        </div>
      </div>
      </div>
    
  );
};

export default AlumniSuccess;
