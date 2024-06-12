import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "@/components/Footer";
import Partenaires from "@/components/Partenaires/Partenaires";
import Signalbar from "@/components/SignalBar";
import PostImage from "@/components/PostImage";
import WhyPhD from "@/components/YouArePhD/WhyPhD";
import NextEventsComp from "@/components/YouAreCompany/NextEventsComp";
import PhDNews from "@/components/YouArePhD/PhDNews";
import PostGradAndResearchSection from "@/components/PostGradAndResearchSection";
import PostGradStudies from "@/components/YouArePhD/PostGradStudies";

const page = () => { 
    return (
        <div className="font-poppins text-bleu w-screen flex flex-col relative">
        <NavBar />
        <PostImage 
          img="/assets/PhDImg.png"
          titre="Doctoral candidate Gateway"
          details="We highly value the collaboration with PhD candidates, appreciating their significant contributions to advancing research and innovation in the tech sector."
        />
        <WhyPhD/>
        <PostGradStudies/>
        <PhDNews/>
        <div className="w-full flex flex-col justify-center items-center min-h-max xl:px-[15%] lg:px-[15%] px-[10%] pt-[3%]">
        <h1 className="text-noir font-bold text-3xl mb-4">Upcoming Events </h1>
        <h2 className="mb-10 text-noir text-xl">
         Discover our major upcoming events for PhD candidates
        </h2>
        <NextEventsComp />
        </div>
        <PostGradAndResearchSection/>
        <Partenaires />
        <Footer />
        </div>
    )
}

export default page;