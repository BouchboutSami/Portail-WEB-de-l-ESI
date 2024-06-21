import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import StaffImage from "@/components/StaffImage";
import StaffPresentation from "@/components/StaffPresentation";
import NewsStaff from "@/components/NewsStaff";
import SocialBenefits from "@/components/SocialBenefits";
import EventsStaff from "@/components/EventsStaff";

const page = () => {
  return (
    <div className="font-poppins text-bleu w-screen flex flex-col relative">
      <div className=" w-screen">
        <NavBar />
        <StaffImage />
        <StaffPresentation />
        <NewsStaff />
        <div className="w-full flex flex-col justify-center items-center min-h-max xl:px-[15%] lg:px-[15%] px-[10%]">
          <h1 className="text-noir font-bold text-3xl mb-4">Upcoming Events</h1>
          <h2 className="mb-10 text-noir text-xl">
            Discover our major upcoming events
          </h2>
          <EventsStaff />
        </div>
        <SocialBenefits />
      </div>
      <Footer />
    </div>
  );
};

export default page;
