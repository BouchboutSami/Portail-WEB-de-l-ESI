"use client";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const UniSideBar = () => {
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
    let activeItem = "/";
    let activesubtitle = "";
    if (pathname === "/Postgraduate-studies") {
      activeItem = "Postgraduate studies";
    } else if (pathname === "/Research") {
      activeItem = "Research";
    } else if (pathname === "/Academic-authorization") {
      activeItem = "Academic authorization";
    } else if (pathname === "/LCSI") {
      activesubtitle = "LCSI";
    } else if (pathname === "/LMCS") {
      activesubtitle = "LMCS";
    } else if (pathname === "/Research-projects") {
      activesubtitle = "Research Projects";
    } else if (pathname === "/University-accreditation") {
      activesubtitle = "University accreditation";
    } else if (pathname === "/Artciles-news") {
      activesubtitle = "Articles News";
    }
    setActiveItem(activeItem);
    setActiveSubtitle(activesubtitle);
    localStorage.setItem("activeItem", activeItem);
    localStorage.setItem("activeSubtitle", activesubtitle);
  }, [location.pathname]);

  const navigation = [
    {
      title: "About the university",
      link: "/Ecole/PresentationEcole",
      subtitles: [],
    },
    {
      title: "Organisation & Structure",
      link: "/Ecole/Organisation-Structure",
      subtitles: [],
    },
    {
      title: "Futur Bachelor space",
      link: "/Ecole/Futur-Bachelor-Space",
      subtitles: [],
    },
    {
      title: "ESI's library",
      link: "/Ecole/ESI-Library",
      subtitles: [],
    },
  ];

  return (
    <div className=" min-h-screen bg-white w-fit mr-4 ">
      <div class="sidebar pt-8 flex flex-col w-fit border-r border-[#A9A9A9] h-full ">
        <hr className="border-[#A9A9A9] mt-4" />
        {navigation.map((item, index) => (
          <>
            <a href={item.link}>
              <button
                onClick={() => handleClick(item.title)}
                className={`font-poppins font-medium hover:text-[#185B9C] pl-8 text-start hover:font-semibold w-[275px] text-[20px] py-2 px-2  ${
                  activeItem === item.title
                    ? "text-[#185B9C] font-semibold "
                    : ""
                }`}
              >
                {item.title}
              </button>
            </a>
            {activeItem === item.title && (
              <>
                {item.subtitles.map((subtitle, index) => (
                  <a href={subtitle.link} key={index}>
                    <button
                      onClick={() => handleSubtitleClick(subtitle.title)}
                      className={`font-poppins font-medium hover:text-black pl-16 text-start hover:font-semibold w-[250px] text-[16px] py-2 px-2  ${
                        activeSubtitle === subtitle.title
                          ? "text-black font-black"
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

export default UniSideBar;
