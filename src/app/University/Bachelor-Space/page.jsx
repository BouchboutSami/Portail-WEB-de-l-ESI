"use client";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import ImageLanding from "@/components/ImageLanding";
import NavBar from "@/components/NavBar";
import TelechargerDoc from "@/components/TelechargerDoc";
import UniSideBar from "@/components/UniSideBar";
import React from "react";
import { BrowserRouter } from "react-router-dom";

const page = () => {
  const reasonsToJoinESI = [
    {
      question: "What is ESI?",
      answer:
        "ESI is a renowned institution specialized in teaching computer science and information technology.",
    },
    {
      question: "What are the advantages of studying at ESI?",
      answer:
        "Studying at ESI offers a dynamic learning environment, quality academic programs, and exceptional career opportunities in the field of computer science.",
    },
    {
      question: "Why choose ESI for computer science education?",
      answer:
        "ESI distinguishes itself with its highly qualified faculty, modern infrastructure, and commitment to academic and professional excellence.",
    },
  ];

  return (
    <BrowserRouter>
      <div className="w-screen">
        <NavBar />
        <ImageLanding imageUrl="/assets/WhyESIHeader.png" title="Why ESI?" />
        <div className="flex">
          <UniSideBar />
          <div className="w-full flex flex-col items-center pb-12">
            {/* Code here ! */}
            <div className="w-full my-12 items-center px-[5%]">
              <h1 className="font-poppins font-bold text-[32px] text-[#185B9C]">
                WHY ESI?
              </h1>
              <FAQ faqs={reasonsToJoinESI} />
              <h1 className="font-poppins font-bold text-[32px] text-[#185B9C]">
                USEFUL DOCUMENTS
              </h1>
              <TelechargerDoc
                text={"ESI Presentation Brochure (Arabic)"}
                link={
                  "https://www.esi.dz/wp-content/uploads/2020/10/Depliant_ESI_Alger-en-Arabe.pdf"
                }
              />
              <TelechargerDoc
                text={"ESI Presentation Brochure (French)"}
                link={
                  "https://www.esi.dz/wp-content/uploads/2020/10/Depliant_ESI_Alger-en-Francais.pdf"
                }
              />
              <TelechargerDoc
                text={"ESI Presentation Brochure (English)"}
                link={
                  "https://www.esi.dz/wp-content/uploads/2020/10/Depliant_ESI_Alger-en-Anglais.pdf"
                }
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default page;
