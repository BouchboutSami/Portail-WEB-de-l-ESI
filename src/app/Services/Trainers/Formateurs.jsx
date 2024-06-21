"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import AccordionFormateurs from "./AccordionFormateurs";
import Contactrfce from "@/components/Themeshome/Contactrfce";

const Formateurs = () => {
  return (
    <div
      className="w-full flex flex-row justify-center gap-2 px-[2%]"
      id="formateurs"
    >
      <AccordionFormateurs />
      <Contactrfce />
    </div>
  );
};

export default Formateurs;
