"use client";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const UniSideBar = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(
    localStorage.getItem("activeItem") || ""
  );
  useEffect(() => {
    setActiveItem(localStorage.getItem("activeItem") || "");
  }, []);
  const handleClick = (item) => {
    setActiveItem(item);
    localStorage.setItem("activeItem", item);
  };

  useEffect(() => {
    const pathname = location.pathname;
    let activeItem = "/University/AboutTheUniveristy";
    if (pathname === "/University/AboutTheUniversity") {
      activeItem = "About the university";
    } else if (pathname === "/University/Organisation-Administration") {
      activeItem = "Organisation & Structure";
    } else if (pathname === "/University/Bachelor-Space") {
      activeItem = "Futur Bachelor space";
    } else if (pathname === "/University/ESI-Library") {
      activeItem = "ESI's library";
    }
    setActiveItem(activeItem);
    localStorage.setItem("activeItem", activeItem);
  }, [location.pathname]);

  const navigation = [
    {
      title: "About the university",
      link: "/University/AboutTheUniversity",
      subtitles: [],
    },
    {
      title: "Organisation & Structure",
      link: "/University/Organisation-Administration",
      subtitles: [],
    },
    {
      title: "Futur Bachelor space",
      link: "/University/Bachelor-Space",
      subtitles: [],
    },
    {
      title: "ESI's library",
      link: "/University/ESI-Library",
      subtitles: [],
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

export default UniSideBar;
