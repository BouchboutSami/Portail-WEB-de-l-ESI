"use client";
import Button from "@/components/Buttons/Button";
import ImageLanding from "@/components/ImageLanding";
import ImageWithRectangle from "@/components/ImageWithRectangle";
import UniSideBar from "@/components/UniSideBar";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import SpecialtiesSwiper from "@/components/SpecialtiesSwiper";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Academics from "@/components/Academics";
const page = () => {
  const mySpecialties = [
    { id: 1, imageSrc: "/assets/university1.jpg", name: "Specialty 1" },
    { id: 2, imageSrc: "/assets/university2.jpg", name: "Specialty 2" },
    { id: 3, imageSrc: "/assets/university3.png", name: "Specialty 3" },
    { id: 4, imageSrc: "/assets/university4.png", name: "Specialty 4" },
  ];

  const points = [
    "06 Lecture Halls.",
    "36 Tutorial and practical work rooms.",
    "A library and 2 reading rooms with a capacity of 100 seats.",
    "An auditorium with a capacity of 270 seats.",
    "A conference room with 130 seats.",
    "A room equipped for students at the end of their cycle.",
    "A network academy.",
    "A tele-teaching room.",
    "Two equipped rooms dedicated to continuing education.",
    "Four meeting rooms.",
  ];
  return (
    <div className="w-full">
      <NavBar />
      <ImageLanding
        imageUrl="/assets/PresentationEcole.png"
        title="About the university"
      />
      <div className="flex">
        <UniSideBar />
        <div className="w-full">
          {/* Code here ! */}
          <div className="flex flex-row gap-12 px-[100px] w-full my-12 items-center">
            <div className="">
              <ImageWithRectangle imageUrl="/assets/ESI-Presentation-Photo-1.png" />
            </div>
            <div className="">
              <h1 className="font-poppins font-bold text-[24px] text-[#185B9C]">
                ESTABLISHMENT OF THE SCHOOL
              </h1>
              <div className="text-black font-light font-poppins text-[18px] mb-4">
                The School was founded in 1969 under the name Centre d′Études et
                de Recherche en Informatique (CERI). Attached to the Ministry of
                Higher Education in 1983 under the name Institut National de
                Formation en Informatique (INI), it was transformed into a
                national higher school by executive decree No. 08-220 of July
                14, 2008, under the name École Nationale Supérieure
                d′Informatique (ESI). To date, it has produced over{" "}
                <span className="font-bold">8269</span> graduates.
              </div>
              <h1 className="font-poppins font-bold mt-8 text-[24px] text-[#185B9C]">
                SKILLS
              </h1>
              <div className="text-black font-light font-poppins text-[18px] mb-4">
                The engineer from the school is able to solve complex problems
                individually and collectively within organizations, taking into
                account technological developments. He develops his scientific,
                technical, and human skills through a demanding course.
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-12 px-[100px] w-full mt-12 items-center">
            <div className="flex-grow">
              <h1 className="font-poppins font-bold text-[24px] text-[#185B9C]">
                EDUCATIONAL FACILITIES
              </h1>
              <div className="text-black font-light font-poppins text-[18px] mb-4">
                <ul className="list-disc pl-5">
                  {points.map((point, index) => (
                    <li key={index} className="marker-color">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex-shrink-0">
              <ImageWithRectangle imageUrl="/assets/Places-Pedagogiques.png" />
            </div>
          </div>
          <div className="flex flex-row gap-12 px-[100px] w-full mt-12 items-center">
            <div className="">
              <ImageWithRectangle imageUrl="/assets/VIE-A-LECOLE.png" />
            </div>
            <div className="mb-8">
              <h1 className="font-poppins font-bold text-[24px] text-[#185B9C]">
                LIFE AT SCHOOL
              </h1>
              <div className="text-black font-light font-poppins text-[18px] mb-4">
                Life at our school is imbued with cultural, intellectual, and
                social richness, ten dynamic student clubs and associations fuel
                the constant buzz of our campus. <br /> From celebrating
                intellectual curiosity through exciting scientific workshops to
                dazzling artistic performances showcasing our creativity.
              </div>
              <div className="flex justify-end">
                <a href="/Campus/Student-life">
                  <Button title={"SEE DETAILS"} />
                </a>
              </div>
            </div>
          </div>

          <div>
            <div>{/* <SpecialtiesSwiper specialties={mySpecialties} /> */}</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
