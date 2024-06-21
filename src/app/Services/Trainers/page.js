import NavBar from "@/components/NavBar";
import React from "react";
import HeroSectionFormateurs from "./HeroSectionFormateurs";
import Formateurs from "./Formateurs";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div className="w-screen flex flex-col gap-20">
      <NavBar />
      <HeroSectionFormateurs />
      <Formateurs />
      <Footer />
    </div>
  );
};

export default page;
