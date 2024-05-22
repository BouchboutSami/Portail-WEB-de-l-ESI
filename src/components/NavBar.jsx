/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";

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
      link: "/Ecole/PresentationEcole",
    },
    {
      title: "Organization & Administration",
      imageUrl: "/assets/university2.jpg",
      link: "/",
    },
    { title: "Bachelor Space", imageUrl: "/assets/university3.png", link: "/" },
    {
      title: "University Library",
      imageUrl: "/assets/university4.png",
      link: "/",
    },
  ];

  const academicsItems = [
    { title: "Education", imageUrl: "/assets/academics1.jpg", link: "/" },
    {
      title: "Graduate & Professional",
      imageUrl: "/assets/academics2.jpg",
      link: "/",
    },
    {
      title: "Internship departement",
      imageUrl: "/assets/academics3.jpg",
      link: "/",
    },
    { title: "Schedule", imageUrl: "/assets/academics4.jpg", link: "/" },
  ];

  const campusItems = [
    { title: "Student Life", imageUrl: "/assets/campus1.jpg", link: "/" },
    { title: "University events", imageUrl: "/assets/campus2.jpg", link: "/" },
    { title: "Sports & Culture", imageUrl: "/assets/campus3.jpg", link: "/" },
    {
      title: "Entrepreneurship at school ",
      imageUrl: "/assets/campus4.jpg",
      link: "/",
    },
    { title: "Numeric spaces", imageUrl: "/assets/campus5.jpg", link: "/" },
  ];

  const postgraduationItems = [
    { title: "Postgraduate studies", imageUrl: "/assets/post1.jpg", link: "/" },
    { title: "Research", imageUrl: "/assets/post2.jpg", link: "/" },
    {
      title: "Academic authorization",
      imageUrl: "/assets/post3.jpg",
      link: "/",
    },
    { title: "Regulations", imageUrl: "/assets/post4.jpg", link: "/" },
  ];

  const servicesItems = [
    {
      title: "Customized programs",
      imageUrl: "/assets/services1.jpg",
      link: "/",
    },
    {
      title: "Pre-promotion Training",
      imageUrl: "/assets/services2.jpg",
      link: "/",
    },
    { title: "Trainers", imageUrl: "/assets/services3.jpg", link: "/" },
    { title: "Calendar", imageUrl: "/assets/services4.jpg", link: "/" },
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
      link: "/",
    },
    { title: "Company", imageUrl: "/assets/Company.jpg", link: "/" },
    { title: "Faculty Staff", imageUrl: "/assets/FacultyStaff.jpg", link: "/" },
    { title: "Alumni", imageUrl: "/assets/Alumni.jpg", link: "/" },
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
      <nav className="bg-white top-0 z-10 sticky px-8 flex justify-items-stretch items-center w-full font-poppins shadow-md">
        <div className="flex items-center pl-4 ">
          <a href="/">
            <img src="/assets/esi.jpg" />
          </a>
        </div>
        {showSearch === false ? (
          <div className="flex flex-row items-center gap-6 ml-auto font-bold text-[20px] text-[#185B9C] ">
            <ul
              className="py-1 border-b-4 border-transparent hover:border-b-4 hover:border-[#185B9C] rounded relative"
              onMouseEnter={() => handleHover("University")}
            >
              University
            </ul>
            <ul
              className="py-1 border-b-4 border-transparent hover:border-b-4 hover:border-[#185B9C] rounded"
              onMouseEnter={() => handleHover("Academics")}
            >
              Academics
            </ul>
            <ul
              className="py-1 border-b-4 border-transparent hover:border-b-4 hover:border-[#185B9C] rounded"
              onMouseEnter={() => handleHover("Campus")}
            >
              Campus
            </ul>
            <a href="/Postgraduation-Research">
              <ul
                className="py-1 border-b-4 border-transparent hover:border-b-4 hover:border-[#185B9C] rounded"
                onMouseEnter={() => handleHover("Postgraduation&Research")}
              >
                Postgraduation&Research
              </ul>
            </a>
            <ul
              className="py-1 border-b-4 border-transparent hover:border-b-4 hover:border-[#185B9C] rounded"
              onMouseEnter={() => handleHover("Services for companies")}
            >
              Services for companies
            </ul>
          </div>
        ) : (
          <div className="inline-flex items-center ml-auto pl-4 font-bold text-[20px] text-[#185B9C] ">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2  border border-3/2 border-[#185B9C] font-poppins font-normal text-[18px] rounded-xl focus:outline-none focus:border-blue-500 w-[750px]"
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
            <h1 className="font-bold text-[20px] text-[#185B9C] ">You are</h1>
          </div>
        </div>
      </nav>
      {DropdownList && (
        <div className=" top-0 z-10 fixed mt-16 bg-transparent w-full py-3">
          <div
            className=" w-full bg-[#F5F5F5] opacity-95 font-poppins font-semibold text-[18px] text-black"
            onMouseLeave={() => setDropdownList(false)}
          >
            {listContent.category === "You are" ? (
              <div>
                <h1 className=" inline-flex font-poppins font-bold just text-black ml-16 text-[48px] border-b pt-4 pb-4  border-black ">
                  You Are
                </h1>
                <div className="flex justify-center items-center ">
                  <div className="grid grid-cols-3 gap-x-4 gap-y-4 p-4 items-center justify-center">
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
                              <div class="absolute bottom-4 left-2 w-full font-poppins font-bold text-white text-[20px] ">
                                <div className="flex flex-row justify-between px-4 items-center">
                                  {item.title}
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
              <div className="grid grid-cols-4 gap-x-16 gap-y-2 p-4">
                {listContent.items.map((item, index) => (
                  <a href={item.link} key={index}>
                    <div className="flex flex-col gap-2">
                      <h1 className="hover:text-[#185B9C]">{item.title}</h1>
                      <div class="relative inline-block w-fit">
                        <div class="flex items-end">
                          <img
                            src={item.imageUrl}
                            className="hover:shadow-sm"
                            onMouseEnter={() => setShadow(index)}
                            onMouseLeave={() => setShadow(null)}
                          />
                          {Shadow === index && (
                            <div class="absolute bottom-0 left-0 w-full opacity-50 h-8 bg-gradient-to-t from-black"></div>
                          )}
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
