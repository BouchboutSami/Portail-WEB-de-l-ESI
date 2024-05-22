"use client";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const PostSideBar = () => {
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
    let activeItem = "/Postgraduation-Research";
    let activesubtitle = "";
    if (pathname === "/Postgraduation-Research/Postgraduate-studies") {
      activeItem = "Postgraduate studies";
    } else if (pathname === "/Postgraduation-Research/Research") {
      activeItem = "Research";
    } else if (pathname === "/Postgraduation-Research/Academic-authorization") {
      activeItem = "Academic authorization";
    } else if (pathname === "/Postgraduation-Research/Research/LCSI") {
      activesubtitle = "LCSI";
    } else if (pathname === "/Postgraduation-Research/Research/LMCS") {
      activesubtitle = "LMCS";
    } else if (
      pathname === "/Postgraduation-Research/Research/Research-projects"
    ) {
      activesubtitle = "Research Projects";
    } else if (
      pathname ===
      "/Postgraduation-Research/Academic-authorization/University-accreditation"
    ) {
      activesubtitle = "University accreditation";
    } else if (
      pathname ===
      "/Postgraduation-Research/Academic-authorization/Articles-news"
    ) {
      activesubtitle = "Articles News";
    }
    setActiveItem(activeItem);
    setActiveSubtitle(activesubtitle);
    localStorage.setItem("activeItem", activeItem);
    localStorage.setItem("activeSubtitle", activesubtitle);
  }, [location.pathname]);

  const navigation = [
    {
      title: "Postgraduate studies",
      link: "/Postgraduation-Research/Postgraduate-studies",
      subtitles: [],
    },
    {
      title: "Research",
      link: "/Postgraduation-Research/Research",
      subtitles: [
        {
          title: "LCSI",
          link: "/Postgraduation-Research/Research/LCSI",
        },
        {
          title: "LMCS",
          link: "/Postgraduation-Research/Research/LMCS",
        },
        {
          title: "Research Projects",
          link: "/Postgraduation-Research/Research/Research-projects",
        },
      ],
    },
    {
      title: "Academic authorization",
      link: "/Postgraduation-Research/Academic-authorization",
      subtitles: [
        {
          title: "University accreditation",
          link: "/Postgraduation-Research/Academic-authorization/University-accreditation",
        },
        {
          title: "Articles News",
          link: "/Postgraduation-Research/Academic-authorization/Articles-news",
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

export default PostSideBar;
