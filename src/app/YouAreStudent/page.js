import ImageLanding from "@/components/ImageLanding";
import NavBar from "@/components/NavBar";
import Signalbar from "@/components/SignalBar";
import React from "react";
import CampusNews from "@/components/CampusNews";
import UpcomingEvents from "@/components/UpcomingEvents";
import TrainingOffers from "@/components/TrainingOffers";
import LifeCampus from "@/components/LandingPage/LifeCampus";
import YouMightFindUseful from "@/components/YouMightFindUseful";
import Footer from "@/components/Footer";

const page = () => {
  const links = {
    "University works": "UniversityWorks",
    "Health & Social insurance": "Health-SocialInsurance",
    "Entrepreneurship at school": "EntrepreneurshipAtSchool",
    "Numeric Spaces": "NumericSpaces",
  };
  return (
    <div>
      <NavBar />
      <ImageLanding
        imageUrl="/assets/studentGatewayLanding.png"
        title="Student Gateway"
        description="Empower your success at ESI. Access everything you need – innovative programs, resources, and community – all in one place."
      />
      <div class="flex justify-center items-center">
        <h1 class="font-poppins font-bold mt-8 text-[28px] text-black hover:text-[#185B9C] text-center">
          Welcome, dear students!
        </h1>
      </div>
      <div className="py-10 pr-10 pl-20 relative w-full flex items-center">
        <div className="w-1/2 relative mr-0">
          <img
            className="h-auto w-full transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
            src="/assets/StudentGateway.png"
            alt="ESI Student Gateway"
          />
        </div>
        <div className="bg-bleu w-5/12 p-6 text-white font-poppins absolute left-1/2 -translate-x-[10%]">
          <p className="text-wrap mb-2">
            The Student Gateway is your one-stop shop for everything you need to
            thrive at ESI. We provide a comprehensive suite of resources and
            support services designed to empower you throughout your academic
            journey. Our dedicated staff is here to guide you, answer your
            questions, and connect you with the tools you need to excel.
          </p>
        </div>
      </div>
      <CampusNews />
      <UpcomingEvents />
      <TrainingOffers />
      <LifeCampus/>
      <YouMightFindUseful links={links} />
      <Footer/>
    </div>
  );
};

export default page;
