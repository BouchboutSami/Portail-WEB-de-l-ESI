"use client";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


const EtudeSideBar = () => {
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
    }else if (pathname === "/Entrepreneurship-engineer-training") {
        activesubtitle = "Entrepreneurship Engineer Training";
    }else if (pathname === "/Doctoral-training") {
      activesubtitle = "Doctoral Training";
    }else if (pathname === "/Diplomas-and-authentication") {
      activesubtitle = "Diplomas and Authentication";
    }else if (pathname === "/Entreprise-discovery") {
      activesubtitle = "Entreprise discovery";
    }else if (pathname === "/Schedule") {
      activesubtitle = "Schedule";
    }
    setActiveItem(activeItem);
    setActiveSubtitle(activesubtitle);
    localStorage.setItem("activeItem", activeItem);
    localStorage.setItem("activeSubtitle", activesubtitle);
  }, [location.pathname]);
    const navigation = [
        {
          title: "Training offers",
          link: "/Training-offers",
          subtitles: [
            {
                title: "First preparatory Year",
                link: "/First-preparatory-year",
              },
              {
                title: "Second preparatory Year",
                link: "/Second-preparatory-year",
              },
              {
                title: "Common core of the second cycle",
                link: "/Common-core-of-the-second-cycle",
              },
              {
                title: "SIL Specialty: Computer Systems and Software",
                link: "/SIL-Specialty",
              },
              {
                title: "SIQ Specialty: Computer Systems",
                link: "/SIQ-Specialty",
              },
              {
                title: "Specialty SIT: Information Systems and Technologies",
                link: "/Specialty-SIT",
              },
              {
                title: "Specialty SID: Intelligent Systems and Data",
                link: "/Specialty-SID",
              },
              {
                title: "Master",
                link: "/Master",
              },
              {
                title: "Entrepreneurship Engineer Training",
                link: "/Entrepreneurship-engineer-training",
              },
              {
                title: "Doctoral Training",
                link: "/Doctoral-training",
              },
          ],
        },
        {
          title: "Diplomas and Authentication",
          link: "/Diplomas-and-authentication",
          subtitles: [],
        },
        {
          title: "Entreprise discovery",
          link: "/Entreprise-discovery",
          subtitles: [],
        },
        {
            title: "Schedule",
            link: "/Schedule",
            subtitles: [],
          },
      ];
    return (
        <div className=" min-h-screen bg-white w-fit mr-4 ">
          <div class="sidebar pt-8 flex flex-col w-fit border-r border-[#A9A9A9] h-full ">
            <hr className="border-[#A9A9A9] mt-4 " />
            {navigation.map((item, index) => (
              <>
                <a href={item.link}>
                  <button
                    onClick={() => handleClick(item.title)}
                    className={`font-poppins font-medium hover:text-[#185B9C] pl-8 text-start hover:font-semibold w-[275px] text-[20px] py-2 px-2  ${
                      activeItem === item.title ? "text-[#185B9C] font-semibold " : ""
                    }`}
                  >
                    {item.title}
                  </button>
                </a>
                {activeItem === item.title && (
                  <>
                    {item.subtitles.map((subtitle, idx) => (
                      <a href={subtitle.link}>
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
}
export default EtudeSideBar;