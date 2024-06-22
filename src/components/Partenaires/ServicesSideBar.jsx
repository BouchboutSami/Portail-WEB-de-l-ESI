"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
const ServicesSideBar = () => {
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
  const pathname = usePathname();

  useEffect(() => {
    let activeItem = "/Services/Customizedprograms";
    let activesubtitle = "Custumized programs";
    if (pathname === "/Services/Pre-promotionTraining") {
      activeItem = "Pre-promotionTraining";
    } else if (pathname === "/Services/Trainers") {
      activeItem = "Trainers";
    } else if (pathname === "/Services/Calendar") {
      activeItem = "Calendar";
    }
    setActiveItem(activeItem);
    setActiveSubtitle(activesubtitle);
    localStorage.setItem("activeItem", activeItem);
    localStorage.setItem("activeSubtitle", activesubtitle);
  }, [pathname]);

  const navigation = [
    {
      title: "Customized programs",
      link: "/Services/Customizedprograms",
      subtitles: [],
    },
    {
      title: "Pre-promotion Training",
      link: "/Services/Pre-promotionTraining",
      subtitles: [
        {
          title: "Presentation",
          link: "/Services/Pre-promotionTraining/Presentation",
        },
        {
          title: "Syllabus",
          link: "/Services/Pre-promotionTraining/Syllabus",
        },
        {
          title: "Planning",
          link: "/Services/Pre-promotionTraining/Planning",
        },
        {
          title: "Registration",
          link: "/Services/Pre-promotionTraining/Registration",
        },
      ],
    },
    {
      title: "Trainers",
      link: "/Services/Trainers",
      subtitles: [],
    },
    {
      title: "Calendar",
      link: "/Services/Calendar",
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

export default ServicesSideBar;
