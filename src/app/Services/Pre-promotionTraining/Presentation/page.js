"use client";
import React from "react";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import ServicesSideBar from "@/components/ServicesSideBar";
import ServicesImage from "@/components/ServicesImage";
const page = () => {
  return (
    <div className=" w-screen">
      <NavBar />
      <ServicesImage />
      <ServicesSideBar />
      <div className="flex">
        <div className="w-full">
          <div className="px-[100px] w-full my-12 items-center">
            <div className="">
              <h1 className="font-poppins font-bold text-[24px] text-[#185B9C]">
                ORGANIZATION & MANAGEMENT
              </h1>
              <div className="text-black font-light font-poppins text-[18px] mb-4">
                The ESI currently has 1,206 students in the graduation phase,
                accompanied by 134 doctoral students who are continuing their
                research. The teaching staff is made up of 120 permanent members
                dedicated to teaching and research. In addition, the
                establishment benefits from the contribution of 175 workers who
                support various administrative and logistical activities, thus
                contributing to the efficiency and vitality of the institution.
              </div>
              <div>
                <h1 className="font-poppins font-bold text-[24px] text-[#185B9C] mb-4">
                  STRUCTURES
                </h1>
              </div>

              <h1 className="font-poppins font-bold text-[24px] text-[#185B9C] mb-4">
                CONTACT BOOK
              </h1>
              <p>
                Discover our complete directory bringing together our permanent
                teachers as well as our dedicated staff, each bringing unique
                expertise in their respective fields.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
