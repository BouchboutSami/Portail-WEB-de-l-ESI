"use client";
import React, { useState } from "react";
import Signalbar from "./SignalBar";

const NavBar = () => {
  const [DropdownList, setDropdownList] = useState(false);
  const [Shadow, setShadow] = useState(null);
  const [listContent, setListContent] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const handleSearch = () => {
    setShowSearch(!showSearch);
    setDropdownList(false);
  };

  const universityItems = [
    {
      title: "About the University ",
      imageUrl: "/assets/university1.jpg",
      link: "/University/AboutTheUniversity",
      description:
        "Discover the history of university, its perks, trainings and adapted life",
    },
    {
      title: "Organization & Administration",
      imageUrl: "/assets/university2.jpg",
      link: "/University/Organisation-Administration",
      description:
        "Check out the competent staff that insures our stellar reputation",
    },
    {
      title: "Bachelor Space",
      imageUrl: "/assets/university3.png",
      link: "/University/Bachelor-Space",
      description:
        "Get inspired by many students’ testimonies and an all-in-one Q&A ",
    },
    {
      title: "University Library",
      imageUrl: "/assets/university4.png",
      link: "/University/ESI-Library",
      description:
        "Source of Zen for our students, Discover the School’s library",
    },
  ];

  const academicsItems = [
    {
      title: "Education",
      imageUrl: "/assets/academics1.jpg",
      link: "/Academics/Education",
      description:
        "Explore diverse educational programs for transformative learning.",
    },
    {
      title: "Graduate & Professional",
      imageUrl: "/assets/academics2.jpg",
      link: "/Academics/Graduate-and-professional",
      description: "Elevate your career with specialized programs.",
    },
    {
      title: "Internship departement",
      imageUrl: "/assets/academics3.jpg",
      link: "/Academics/Internship-departement",
      description: " Gain practical experience bridging theory and practice.",
    },
    {
      title: "Schedule",
      imageUrl: "/assets/academics4.jpg",
      link: "/Academics/Schedule",
      description: "Stay organized with academic scheduling.",
    },
  ];

  const campusItems = [
    {
      title: "Student Life",
      imageUrl: "/assets/campus1.jpg",
      link: "/Campus/Student-Life",
      description: "Engage in a vibrant campus community.",
    },
    {
      title: "University events",
      imageUrl: "/assets/campus2.jpg",
      link: "/Campus/University-events",
      description: "Experience exciting cultural and academic events.",
    },
    {
      title: "Sports & Culture",
      imageUrl: "/assets/campus3.jpg",
      link: "/Campus/Sports-and-culture",
      description: "Embrace a healthy lifestyle and celebrate diversity.",
    },
    {
      title: "Entrepreneurship at school ",
      imageUrl: "/assets/campus4.jpg",
      link: "/Campus/Entrepreneurship-at-school",
      description: "Ignite your entrepreneurial spirit in our innovation hub.",
    },
    {
      title: "Numeric spaces",
      imageUrl: "/assets/campus5.jpg",
      link: "/Campus",
      description:
        "Immersing in technology and innovation within collaborative workspaces",
    },
  ];

  const postgraduationItems = [
    {
      title: "Postgraduate studies",
      imageUrl: "/assets/post1.jpg",
      link: "/Postgraduation-Research/Postgraduate-studies",
      description:
        "Pursue advanced studies and contribute to cutting-edge research.",
    },
    {
      title: "Research",
      imageUrl: "/assets/post2.jpg",
      link: "/Postgraduation-Research/Research/LCSI",
      description:
        "Join visionary researchers and explore innovative projects.",
    },
    {
      title: "Academic authorization",
      imageUrl: "/assets/post3.jpg",
      link: "/Postgraduation-Research/Academic-authorization",
      description: "Navigate the authorization process with expert guidance.",
    },
  ];

  const servicesItems = [
    {
      title: "Customized programs",
      imageUrl: "/assets/services1.jpg",
      link: "/Services/Customizedprograms",
      description: "Tailor your learning experience to achieve your goals.",
    },
    {
      title: "Pre-promotion Training",
      imageUrl: "/assets/services2.jpg",
      link: "/Services/Pre-promotionTraining",
      description: "Prepare for career advancement with specialized training.",
    },
    {
      title: "Trainers",
      imageUrl: "/assets/services3.jpg",
      link: "/Services/Trainers",
      description: "Learn from industry experts committed to your success.",
    },
    {
      title: "Calendar",
      imageUrl: "/assets/services4.jpg",
      link: "/Services/Calendar",
      description: "Stay informed with our comprehensive academic calendar.",
    },
  ];

  const YouAreItems = [
    {
      title: "Futur Student",
      imageUrl: "/assets/FuturStudent.jpg",
      link: "/YouAreFuturStudent",
    },
    {
      title: "Student",
      imageUrl: "/assets/Student.jpg",
      link: "/YouAreStudent",
    },
    {
      title: "Doctoral Condidate",
      imageUrl: "/assets/DoctoralCondidate.jpg",
      link: "/YouAre-PhD",
    },
    {
      title: "Company",
      imageUrl: "/assets/Company.jpg",
      link: "/YouAre-Company",
    },
    {
      title: "Faculty Staff",
      imageUrl: "/assets/FacultyStaff.jpg",
      link: "/YouAre-Staff",
    },
    { title: "Alumni", imageUrl: "/assets/Alumni.jpg", link: "/YouAre-Alumni" },
  ];

  const handleHover = (category) => {
    let content;
    switch (category) {
      case "University":
        content = { category, items: universityItems };
        break;
      case "Academics":
        content = { category, items: academicsItems };
        break;
      case "Campus":
        content = { category, items: campusItems };
        break;
      case "Postgraduation&Research":
        content = { category, items: postgraduationItems };
        break;
      case "Services for companies":
        content = { category, items: servicesItems };
        break;
      case "You are":
        content = { category, items: YouAreItems };
        break;
      default:
        content = { category, items: [] };
        break;
    }
    setListContent(content);
    setDropdownList(true);
  };

  return (
    <>
      <div className=" top-0 z-50 sticky flex flex-col">
        <Signalbar />
        <nav className="bg-white top-0 z-10 sticky px-8 flex justify-items-stretch items-center w-full font-poppins shadow-md">
          <div className="flex items-center pl-4 ">
            <a href="/">
              <img src="/assets/esi.jpg" />
            </a>
          </div>
          {showSearch === false ? (
            <div className="flex flex-row items-center gap-6 ml-auto font-bold text-[16px] text-[#185B9C] ">
              <a href="/University/AboutTheUniversity">
                <ul
                  className="py-1 border-b-4 border-transparent hover:border-b-4 hover:border-[#185B9C] rounded relative"
                  onMouseEnter={() => handleHover("University")}
                >
                  University
                </ul>
              </a>
              <a href="/Academics/Education">
                <ul
                  className="py-1 border-b-4 border-transparent hover:border-b-4 hover:border-[#185B9C] rounded"
                  onMouseEnter={() => handleHover("Academics")}
                >
                  Academics
                </ul>
              </a>
              <a href="/Campus">
                <ul
                  className="py-1 border-b-4 border-transparent hover:border-b-4 hover:border-[#185B9C] rounded"
                  onMouseEnter={() => handleHover("Campus")}
                >
                  Campus
                </ul>
              </a>
              <a href="/Postgraduation-Research">
                <ul
                  className="py-1 border-b-4 border-transparent hover:border-b-4 hover:border-[#185B9C] rounded"
                  onMouseEnter={() => handleHover("Postgraduation&Research")}
                >
                  Postgraduation&Research
                </ul>
              </a>
              <a href="/Services">
                <ul
                  className="py-1 border-b-4 border-transparent hover:border-b-4 hover:border-[#185B9C] rounded"
                  onMouseEnter={() => handleHover("Services for companies")}
                >
                  Services for companies
                </ul>
              </a>
            </div>
          ) : (
            <div className="inline-flex items-center ml-auto pl-4 font-bold text-[16px] text-[#185B9C] ">
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2  border border-3/2 border-[#185B9C] font-poppins font-normal text-[16px] rounded-xl focus:outline-none focus:border-blue-500 w-[750px]"
              />
            </div>
          )}
          <div className="flex flex-row gap-20 items-center ml-auto pr-8">
            <div
              className={`py-1 px-2 hover:bg-gray-100 hover:rounded-2xl hover:cursor-pointer mr-${
                showSearch ? "16" : "0"
              } `}
              onClick={() => {
                handleSearch();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={21}
                height={21}
                fill="none"
              >
                <path
                  fill="#185B9C"
                  d="m20.428 19.322-4.89-4.888a8.605 8.605 0 1 0-1.104 1.104l4.888 4.89a.781.781 0 1 0 1.106-1.106M1.906 8.937a7.031 7.031 0 1 1 7.032 7.032 7.04 7.04 0 0 1-7.032-7.032"
                />
              </svg>
            </div>
            <div
              className="flex flex-col items-center"
              onMouseEnter={() => handleHover("You are")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={28}
                height={28}
                fill="none"
              >
                <path
                  fill="#185B9C"
                  d="M25.257 23.188c-1.666-2.88-4.233-4.945-7.229-5.924a7.875 7.875 0 1 0-8.056 0c-2.996.977-5.563 3.043-7.229 5.924a.875.875 0 1 0 1.515.875C6.318 20.5 9.961 18.375 14 18.375s7.681 2.126 9.742 5.688a.876.876 0 1 0 1.515-.875M7.875 10.5A6.125 6.125 0 1 1 14 16.625 6.13 6.13 0 0 1 7.875 10.5"
                />
              </svg>
              <h1 className="font-bold text-[17px] text-[#185B9C] ">You are</h1>
            </div>
          </div>
        </nav>
      </div>
      {DropdownList && (
        <div className=" top-0 z-50 fixed mt-24 bg-transparent w-full py-2">
          <div
            className=" w-full bg-[#F5F5F5] opacity-95 font-poppins font-semibold text-[16px] text-black"
            onMouseLeave={() => setDropdownList(false)}
          >
            {listContent.category === "You are" ? (
              <div>
                <h1 className=" inline-flex font-poppins font-bold just text-black ml-16 text-[36px] border-b pb-2  border-black ">
                  You Are
                </h1>
                <div className="flex justify-center items-center ">
                  <div className="grid grid-cols-3 gap-x-4 gap-y-4 py-4 px-2 items-center justify-center">
                    {listContent.items.map((item, index) => (
                      <a href={item.link} key={index}>
                        <div className="flex flex-col gap-2">
                          <div class="relative inline-block w-fit">
                            <div class="flex items-end">
                              <img
                                src={item.imageUrl}
                                className="hover:shadow-sm rounded-xl h-48"
                                onMouseEnter={() => setShadow(index)}
                                onMouseLeave={() => setShadow(null)}
                              />
                              {Shadow === index && (
                                <div class="absolute bottom-0 left-0 w-full opacity-90 h-16 bg-gradient-to-t from-black rounded-xl"></div>
                              )}
                              <div class="absolute bottom-0 left-0 w-full opacity-70 h-12 bg-gradient-to-t from-black rounded-xl" />
                              <div class="absolute bottom-4 left-1 w-full font-poppins font-bold text-white text-[20px] ">
                                <div className="flex flex-row justify-between w-full px-4 items-center">
                                  <h1 className="w-[120px] text-[16px] ">
                                    {item.title}
                                  </h1>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={45}
                                    height={45}
                                    fill="none"
                                  >
                                    <path
                                      fill="#fff"
                                      d="M22.5 4.57A17.93 17.93 0 1 0 40.43 22.5 17.95 17.95 0 0 0 22.5 4.57m0 33.75A15.82 15.82 0 1 1 38.32 22.5 15.84 15.84 0 0 1 22.5 38.32m4.964-16.565a1.055 1.055 0 0 1 0 1.49l-7.031 7.032a1.055 1.055 0 0 1-1.49-1.491l6.283-6.286-6.284-6.286a1.055 1.055 0 0 1 1.49-1.49z"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex justify-center items-center ">
                <div
                  className={`grid grid-cols-${Math.min(
                    listContent.items.length,
                    4
                  )} gap-x-16 gap-y-2 p-8 justify-center `}
                >
                  {listContent.items.map((item, index) => (
                    <a href={item.link} key={index}>
                      <div className="flex flex-col gap-4">
                        <div class="relative inline-block w-fit ">
                          <div class="flex items-end  ">
                            <img
                              src={item.imageUrl}
                              className="hover:shadow-sm rounded-xl "
                              onMouseEnter={() => setShadow(index)}
                              onMouseLeave={() => setShadow(null)}
                            />
                            {Shadow === index && (
                              <div class="absolute bottom-0 rounded-xl left-0 w-full opacity-50 h-8 bg-gradient-to-t from-black"></div>
                            )}
                          </div>
                        </div>
                        <div className="gap-2">
                          <h1 className="hover:text-[#185B9C]">{item.title}</h1>
                          <h1 className="hover:text-[#185B9C] text-[12px] text-[#808080] pr-2 font-medium w-[260px] ">
                            {item.description}
                          </h1>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
