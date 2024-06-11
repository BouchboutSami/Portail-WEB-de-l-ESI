import React from "react";
import NavBar from "../../components/NavBar";
import Signalbar from "@/components/SignalBar";
import CompanyImg from "@/components/YouAreCompany/CompanyImg";
import WhyCompany from "@/components/YouAreCompany/WhyCompany";
import NextEventsComp from "@/components/YouAreCompany/NextEventsComp";
import CompanyInternships from "@/components/YouAreCompany/CompanyInternships";
import Partenaires from "@/components/Partenaires/Partenaires";
import Footer from "@/components/Footer";
import CompanyTrainingOffers from "@/components/YouAreCompany/CompanyTrainingOffers";

const page = () => { 
    return (
      <div className="font-poppins text-bleu w-screen flex flex-col relative">
        <Signalbar />
        <NavBar />
        <CompanyImg />
        <WhyCompany />
        <CompanyTrainingOffers/>
        <div className="w-full flex flex-col justify-center items-center min-h-max xl:px-[15%] lg:px-[15%] px-[10%] pt-[3%]">
        <h1 className="text-noir font-bold text-3xl mb-4">Upcoming Events for companies </h1>
        <h2 className="mb-10 text-noir text-xl">
          Discover our major upcoming events for companies
        </h2>
        <NextEventsComp />
      </div>
      <CompanyInternships />
      <Partenaires />
      <Footer />
      </div>

  );
}
export default page;