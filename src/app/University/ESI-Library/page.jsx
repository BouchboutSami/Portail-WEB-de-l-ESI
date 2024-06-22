"use client";
import Button from "@/components/Buttons/Button";
import Footer from "@/components/Footer";
import ImageLanding from "@/components/ImageLanding";
import ImgSlider from "@/components/Imgslider";
import ListComp from "@/components/ListComp";
import NavBar from "@/components/NavBar";
import UniSideBar from "@/components/UniSideBar";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Stats from "@/components/Stats";
import DropdownDoc from "@/components/DropdownDoc";
const page = () => {
  const menuItems2024 = [
    { text: "January", href: "#" },
    { text: "February", href: "#" },
    { text: "March", href: "#" },
    { text: "April", href: "#" },
  ];
  const menuItems2023 = [
    { text: "January", href: "#" },
    { text: "February", href: "#" },
    { text: "March", href: "#" },
    { text: "April", href: "#" },
    { text: "May", href: "#" },
    { text: "June", href: "#" },
    { text: "July", href: "#" },
    { text: "August", href: "#" },
    { text: "September", href: "#" },
    { text: "October", href: "#" },
    { text: "November", href: "#" },
    { text: "December", href: "#" },
  ];
  const menuItems2022 = [
    { text: "January", href: "#" },
    { text: "February", href: "#" },
    { text: "March", href: "#" },
    { text: "April", href: "#" },
    { text: "May", href: "#" },
    { text: "June", href: "#" },
    { text: "July", href: "#" },
    { text: "August", href: "#" },
    { text: "September", href: "#" },
    { text: "October", href: "#" },
    { text: "November", href: "#" },
    { text: "December", href: "#" },
  ];
  const imagesLib = [
    "/assets/Library1.png",
    "/assets/Library2.png",
    "/assets/Library3.png",
  ];
  const LibPoints = [
    "Acquisition of books according to the pedagogical needs of the university community of the institution.",
    "Management and processing of the documentary fund.",
    "Dissemination of scientific and technical information.",
    "User orientation.",
    "Registration of researchers in the national online documentation system SNDL.",
  ];
  const statsData = [
    { title: "Copies", stats: "+21744" },
    { title: "Theses", stats: 1363 },
    { title: "Dissertations", stats: 123 },
    { title: "Members", stats: 1246 },
  ];
  return (
    <BrowserRouter>
      <div className="w-screen">
        <NavBar />
        <ImageLanding imageUrl="/assets/LibHeader.png" title="ESI's Library" />
        <div className="flex">
          <UniSideBar />
          <div className="w-full flex flex-col items-center pb-12">
            {/* Code here ! */}
            <div className="w-full my-12 items-center px-[5%]">
              <h1 className="font-poppins font-bold text-[24px] text-[#185B9C]">
                PRESENTATION
              </h1>
              <div className="text-black font-light font-poppins text-[18px] mb-4">
                The ESI Library was created when the school was founded in 1969.
                It provides users with a wide range of services, mainly
                documentation. It is mainly specialised in IT.
              </div>
              <div className="flex flex-row justify-center gap-16 mt-4 mb-8">
                <Button title={"Online Catalog of the ESI Library"} />
                <Button title={"Final Year Project Warehouse"} />
              </div>
              <ImgSlider images={imagesLib} />
              <ListComp
                heading={""}
                paragraph={"Its main missions are:"}
                points={LibPoints}
              />
              <div className="flex justify-center">
                <Button title={"See the internal regulations of the library"} />
              </div>
              <h1 className="font-poppins font-bold text-[24px] text-[#185B9C] mt-8">
                LIBRARY ARRANGEMENT
              </h1>
              <p className="font-poppins font-light text-[18px]">
                The library is arranged on three levels:
              </p>
              <div className="font-poppins font-light text-[18px]">
                <ul className="list-disc pl-5">
                  <li>
                    Basement
                    <ul className="list-disc pl-5">
                      <li>
                        Museum of the Library bringing together resources
                        (documents, materials, software) relating to the history
                        of computing.
                      </li>
                      <li>
                        Part of the documentary fund (old versions and
                        editions).
                      </li>
                    </ul>
                  </li>
                  <li>
                    Ground floor
                    <ul className="list-disc pl-5">
                      <li>
                        A large reading room for students, accommodating 160
                        students.
                      </li>
                      <li>Two computers for documentary research.</li>
                      <li>A television for display.</li>
                      <li>A complaints register.</li>
                    </ul>
                  </li>
                  <li>
                    1st floor
                    <ul className="list-disc pl-5">
                      <li>A reading room for teachers.</li>
                      <li>Administrative offices.</li>
                      <li>
                        A counter dedicated to the lending and return of books.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full">
              <Stats table={statsData} />
            </div>
            <div className="px-[5%] pt-[2%] flex flex-row gap-[10%]">
              <div className="flex-grow">
                <h3 className="font-poppins font-bold text-[20px]">
                  Every year, the library organizes:
                </h3>
                <h1 className="font-poppins font-bold text-[22px] text-[#185B9C] mt-8">
                  In April
                </h1>
                <p className="font-poppins font-light text-[18px]">
                  An information day for the preparation of the technical sheet
                  (Purchase Order), concerning new books, is organized, its
                  objective is to collect the needs of students and teachers.
                </p>
                <h1 className="font-poppins font-bold text-[22px] text-[#185B9C] mt-8">
                  In May
                </h1>
                <p className="font-poppins font-light text-[18px]">
                  Open days related to the new acquisitions of books, the
                  objective is the dissemination of information (duration 3 to 4
                  days) regarding the newly acquired books.
                </p>
              </div>
              <div className="flex-shrink-0 flex flex-col">
                <h1 className="font-poppins font-bold text=[18px] text-[#185B9C] mb-2">
                  Reports
                </h1>
                <DropdownDoc menuItems={menuItems2024} text={"Report - 2024"} />
                <DropdownDoc menuItems={menuItems2023} text={"Report - 2023"} />
                <DropdownDoc menuItems={menuItems2022} text={"Report - 2022"} />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default page;
