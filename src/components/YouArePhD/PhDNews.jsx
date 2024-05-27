import React from "react";
import CampusNewsCard from "@/components/CampusNewsCard";

const PhDNews = () => {
  const News = [
    {
      image: "/assets/PhD2.png",
      title:
        "FAQ: Journée mondiale de l’alimentation",
      link: "/",
    },
    {
      image: "/assets/PhD3.png",
      title:
        "Prix de thèses francophones de prospection, édition 2022",
      link: "/",
    },
    {
      image: "/assets/PhD2.png",
      title:
        "FAQ: Journée mondiale de l’alimentation",
      link: "/",
    },
    {
      image: "/assets/PhD2.png",
      title:
        "FAQ: Journée mondiale de l’alimentation",
      link: "/",
    },
    {
      image: "/assets/PhD3.png",
      title:
        "Prix de thèses francophones de prospection, édition 2022",
      link: "/",
    },
    {
      image: "/assets/PhD2.png",
      title:
        "FAQ: Journée mondiale de l’alimentation",
      link: "/",
    },
   
  ];
  return (
    <div className="w-full bg-[#F5F5F5] flex flex-col items-center gap-8">
      <h1 className="font-poppins font-bold mt-8 text-[28px] text-black hover:text-[#185B9C]">
        Campus News
      </h1>
      <div className="grid grid-cols-3 gap-1 items-center pb-4">
        {/* max 8 elements to display in the section  */}
        {News.slice(0, 8).map((item, index) => (
          <a href={item.link} key={index}>
            <CampusNewsCard title={item.title} image={item.image} />
          </a>
        ))}
      </div>
      <div className=" absolute w-full bottom-0 left-0  hover:underline text-[#185B9C]">
        <div className="flex flex-row justify-between px-4 items-center">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default PhDNews;
