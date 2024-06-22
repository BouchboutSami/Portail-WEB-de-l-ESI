"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const EtudeSideBar = () => {
  const [activeItem, setActiveItem] = useState("");
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
    let activeItem = "/";
    let activesubtitle = "";
    if (pathname === "/Training-offers") {
      activeItem = "Training offers";
    } else if (pathname === "/First-preparatory-year") {
      activeItem = "First preparatory year";
    } else if (pathname === "/Second-preparatory-year") {
      activeItem = "Second preparatory class";
    } else if (pathname === "/Common-core-of-the-second-cycle") {
      activeItem = "Common core of the second cycle";
    } else if (pathname === "/SIL-Specialty") {
      activesubtitle = "SIL Specialty: Computer Systems and Software";
    } else if (pathname === "/SIQ-Specialty") {
      activesubtitle = "SIQ Specialty: Computer Systems";
    } else if (pathname === "/Specialty-SIT") {
      activesubtitle = "Specialty SIT: Information Systems and Technologies";
    } else if (pathname === "/Specialty-SID") {
      activesubtitle = "Specialty SID: Intelligent Systems and Data";
    } else if (pathname === "/Master") {
      activesubtitle = "Master";
    } else if (pathname === "/Entrepreneurship-engineer-training") {
      activesubtitle = "Entrepreneurship Engineer Training";
    } else if (pathname === "/Doctoral-training") {
      activesubtitle = "Doctoral Training";
    } else if (pathname === "/Diplomas-and-authentication") {
      activesubtitle = "Diplomas and Authentication";
    } else if (pathname === "/Entreprise-discovery") {
      activesubtitle = "Entreprise discovery";
    } else if (pathname === "/Schedule") {
      activesubtitle = "Schedule";
    }
    setActiveItem(activeItem);
    setActiveSubtitle(activesubtitle);
    localStorage.setItem("activeItem", activeItem);
    localStorage.setItem("activeSubtitle", activesubtitle);
  }, [pathname]);
  const navigation = [
    {
      title: "Education",
      link: "/Academics/Education",
      subtitles: [
        {
          title: "First preparatory Year",
          link: "/Academics/Education/First-preparatory-year",
        },
        {
          title: "Second preparatory Year",
          link: "/Academics/Education/Second-preparatory-year",
        },
        {
          title: "Common core of the second cycle",
          link: "/Academics/Education/Common-core-of-the-second-cycle",
        },
        {
          title: "SIL Specialty: Computer Systems and Software",
          link: "/Academics/Education/SIL-Specialty",
        },
        {
          title: "SIQ Specialty: Computer Systems",
          link: "/Academics/Education/SIQ-Specialty",
        },
        {
          title: "Specialty SIT: Information Systems and Technologies",
          link: "/Academics/Education/Specialty-SIT",
        },
        {
          title: "Specialty SID: Intelligent Systems and Data",
          link: "/Academics/Education/Specialty-SID",
        },
        {
          title: "Master",
          link: "/Academics/Education/Master",
        },
        {
          title: "Entrepreneurship Engineer Training",
          link: "/Academics/Education/Entrepreneurship-engineer-training",
        },
        {
          title: "Doctoral Training",
          link: "/Academics/Education/Doctoral-training",
        },
      ],
    },
    {
      title: "Diplomas and Authentication",
      link: "/Academics/Graduate-and-professional",
      subtitles: [],
    },
    {
      title: "Entreprise discovery",
      link: "/Academics/Internship-department",
      subtitles: [],
    },
    {
      title: "Schedule",
      link: "/Academics/Schedule",
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
export default EtudeSideBar;
