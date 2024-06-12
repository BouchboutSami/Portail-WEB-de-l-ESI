/* eslint-disable @next/next/no-img-element */
"use client";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const HeroSectionFormateurs = () => {
  const router = useRouter();
  const formationsRef = useRef();
  return (
    <div className="w-full flex items-center justify-between font-montserrat pl-[5%]">
      <div className="left flex flex-col gap-10">
        <p className="text-bleu font-bold">L’ESI met à votre disposition</p>
        <h1 className="text-darkbleu font-extrabold text-6xl">
          Des formateurs expérimentés
        </h1>
        <p className="text-grey text-xl">
          Découvrez notre équipe de formateurs prêts à partager leur <br />
          savoir-faire pour stimuler votre croissance professionnelle
        </p>
        <div className="buttons flex flex-row gap-5 items-center justify-start w-full">
          <button
            className="bg-bleu text-white flex w-fit px-6 py-3 justify-center items-center gap-4 rounded-md"
            onClick={(event) => {
              event.preventDefault();
              const element = document.getElementById("formations");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <p className="font-montserrat font-medium">
              Découvrez nos formateurs
            </p>
            <FaLongArrowAltRight />
          </button>
          <button
            className="bg-transparent flex w-fit px-6 py-3 justify-center items-center gap-4 rounded-md border-bleu border-2 text-bleu"
            onClick={(event) => {
              event.preventDefault();
              router.push("/devenirFormateur");
            }}
          >
            <p className="font-montserrat font-medium">Devenir formateur</p>
            <FaLongArrowAltRight />
          </button>
        </div>
      </div>
      <div className="right inline">
        <img src="/assets/formateur.png" alt="Informatique" />
      </div>
    </div>
  );
};

export default HeroSectionFormateurs;
