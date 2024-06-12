"use client";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const CampusSideBar = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(
    localStorage.getItem("activeItem") || ""
  );
  const [activeSubtitle, setActiveSubtitle] = useState("");
  useEffect(() => {
    setActiveItem(localStorage.getItem("activeItem") || "");
    setActiveSubtitle(localStorage.getItem("activeSubtitle") || "");
  }, []);
  const handleClick = (item) => {
    setActiveSubtitle("");
    setActiveItem(item);
    localStorage.setItem("activeItem", item);
  };
  const handleSubtitleClick = (subtitle) => {
    setActiveSubtitle(subtitle);
    localStorage.setItem("activeSubtitle", subtitle);
  };

  useEffect(() => {
    const pathname = location.pathname;
    let activeItem = "/Campus";
    let activesubtitle = "/Campus/Performances-and-success";
    if (pathname === "/Campus/Student-life/Performances-and-success") {
      activeItem = "Student Life";
      activesubtitle = "Performances and success";
    } else if (pathname === "/Campus/University-events") {
      activeItem = "University events";
    } else if (pathname === "/Campus/Sports-and-culture") {
      activeItem = "Sports and Culture";
    } else if (pathname === "/Campus/Entrepreneurship-at-school") {
      activeItem = "Entrepreneurship at school";
    } else if (pathname === "/Campus/Numeric-spaces") {
      activeItem = "Numeric spaces";
    } else if (
      pathname === "/Campus/Student-life/Healthcare-and-social-insurance"
    ) {
      activesubtitle = "Healthcare and social insurance";
      activeItem = "Student Life";
    } else if (pathname === "/Campus/Student-life/University-works") {
      activesubtitle = "University works";
      activeItem = "Student Life";
    } else if (pathname === "/Campus/Student-life/Work-spaces") {
      activesubtitle = "Work spaces";
      activeItem = "Student Life";
    } else if (pathname === "/Campus/Student-life/Student-orgs") {
      activesubtitle = "Student organisations";
    } 
    setActiveItem(activeItem);
    setActiveSubtitle(activesubtitle);
    localStorage.setItem("activeItem", activeItem);
    localStorage.setItem("activeSubtitle", activesubtitle);
  }, [location.pathname]);

  const navigation = [
    {
      title: "Student Life",
      link: "/Campus/Student-life/Performances-and-success",
      subtitles: [
        {
          title: "Performances and success",
          link: "/Campus/Student-life/Performances-and-success",
        },
        {
          title: "Student organisations",
          link: "/Campus/Student-life/Student-orgs",
        },
        {
          title: "Healthcare and social insurance",
          link: "/Campus/Student-life/Healthcare-and-social-insurance",
        },
        {
          title: "University works",
          link: "/Campus/Student-life/University-works",
        },
        {
          title: "Work spaces",
          link: "/Campus/Student-life/Work-spaces",
        },
      ],
    },
    {
      title: "University Events",
      link: "/Campus/University-events",
      subtitles: [],
    },
    {
      title: "Sports and Culture",
      link: "/Campus/Sports-and-culture",
      subtitles: [],
    },
    {
      title: "Entrepreneurship at school",
      link: "/Campus/Entrepreneurship-at-school",
      subtitles: [],
    },
    {
      title: "Numeric spaces",
      link: "/Campus/Numeric-spaces",
      subtitles: [
        {
          title: "ESI Talents",
          link: "https://talents.esi.dz/scolar/index",
        },
        {
          title: "Service des stages",
          link: "https://sites.google.com/esi.dz/de-servicestages?pli=1",
        },
      ],
    },
  ];

  return (
    <div className=" min-h-screen bg-white w-fit text-[16px]">
      <div class="sidebar pt-8 flex flex-col w-fit border-r border-[#A9A9A9] h-full ">
        <hr className="border-[#A9A9A9] mt-4" />
        {navigation.map((item, index) => (
          <>
            <a href={item.link}>
              <button
                onClick={() => handleClick(item.title)}
                className={`font-poppins font-medium hover:text-[#185B9C] pl-8 text-start hover:font-semibold w-[325px] text-[16px] py-2 px-2  ${
                  activeItem === item.title
                    ? "text-[#185B9C] font-semibold "
                    : ""
                }`}
              >
                {item.title}
              </button>
            </a>
            {(activeItem === item.title ||
              item.subtitles.some(
                (subtitle) => subtitle.title === activeSubtitle
              )) && (
              <>
                {item.subtitles.map((subtitle, index) => (
                  <a href={subtitle.link} key={index}>
                    <button
                      onClick={() => handleSubtitleClick(subtitle.title)}
                      className={`font-poppins font-medium hover:text-black pl-16 text-start hover:font-semibold w-[250px] text-[14px] py-2 px-2  ${
                        activeSubtitle === subtitle.title
                          ? "text-black font-semibold"
                          : ""
                      }`}
                    >
                      {subtitle.title}
                    </button>
                  </a>
                ))}
              </>
            )}
            <hr className="border-[#A9A9A9] " />
          </>
        ))}
      </div>
    </div>
  );
};

export default CampusSideBar;
