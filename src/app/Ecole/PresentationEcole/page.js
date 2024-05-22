"use client";
import Button from "@/components/Buttons/Button";
import ImageLanding from "@/components/ImageLanding";
import ImageWithRectangle from "@/components/ImageWithRectangle";
import NavBar from "@/components/NavBar";
import Signalbar from "@/components/SignalBar";
import UniSideBar from "@/components/UniSideBar";
import React from "react";
import { BrowserRouter } from "react-router-dom";

const page = () => {
  const points = [
    "06 Amphis.",
    "36 Salles de travaux dirigés et travaux pratiques.",
    "Une bibliothèque et 2 salles de lecture d’une capacité de 100 places.",
    "Un auditorium d’une capacité de 270 places.",
    "Une salle de conférences de 130 places.",
    "Une salle équipée pour les étudiants en fin de cycle.",
    "Une académie réseaux.",
    "Une salle de télé-enseignement.",
    "Deux salles équipées dédiées à la formation continue.",
    "Quatre salles de réunions.",
  ];
  return (
    <BrowserRouter>
      <div className="w-screen">
        <NavBar />
        <ImageLanding
          imageUrl="/assets/PresentationEcole.png"
          title="About the university"
        />
        <div className="flex">
          <UniSideBar />
          <div className=" w-full">
            {/* Code here ! */}
            <div className="flex flex-row gap-12 px-[100px] w-full mt-12 items-center">
              <div className="">
                <ImageWithRectangle imageUrl="/assets/ESI-Presentation-Photo-1.png" />
              </div>
              <div className="">
                <h1 className="font-poppins font-bold text-[24px] text-[#185B9C]">
                  CRÉATION DE L’ÉCOLE
                </h1>
                <div className="text-black font-light font-poppins text-[18px] mb-4">
                  L’Ecole a été créée en 1969 sous le nom de Centre d’Etudes et
                  de Recherche en Informatique (CERI). Rattachée au ministère de
                  l’Enseignement Supérieur en 1983 sous le nom de l’Institut
                  National de Formation en Informatique (INI), elle a été
                  transformée en école nationale supérieure par le décret
                  exécutif n° 08-220 du 14 juillet 2008, sous le nom d’Ecole
                  nationale Supérieure d’Informatique (ESI). Elle comptabilise à
                  ce jour plus de <span className="font-bold">8269</span>
                   diplômés.
                </div>
                <h1 className="font-poppins font-bold mt-8 text-[24px] text-[#185B9C]">
                  COMPÉTENCES
                </h1>
                <div className="text-black font-light font-poppins text-[18px] mb-4">
                  L’ingénieur de l’école est apte à résoudre individuellement et
                  collectivement des problèmes complexes au sein des
                  organisations en tenant compte des évolutions technologiques.
                  Il construit ses compétences scientifiques, techniques et
                  humaines à travers un parcours exigeant.
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-12 px-[100px] w-full mt-12 items-center">
              <div className="flex-grow">
                <h1 className="font-poppins font-bold text-[24px] text-[#185B9C]">
                  PLACES PÉDAGOGIQUES
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
              <div className="">
                <h1 className="font-poppins font-bold text-[24px] text-[#185B9C]">
                  VIE A L’ÉCOLE
                </h1>
                <div className="text-black font-light font-poppins text-[18px] mb-4">
                  La vie à notre école est imprégnée d’une richesse culturelle,
                  intellectuelle et sociale, dix clubs et associations
                  d’étudiants dynamiques alimentent le bouillonnement constant
                  de notre campus.De la célébration de la curiosité
                  intellectuelle à travers des ateliers scientifiques
                  passionnants, aux performances artistiques éblouissantes
                  mettant en lumière notre créativité.
                </div>
                <div className="flex justify-end">
                  <Button title={"VOIR DÉTAILS"} />
                </div>
              </div>
            </div>
            <div className="flex flex-col px-[100px] w-full mt-16 items-center justify-center">
              <h1 className="font-poppins font-bold text-[24px] text-[#185B9C] pb-4">
                RECHERCHE SCIENTIFIQUE
              </h1>
              <div className="text-black font-light font-poppins text-[18px] mb-4">
                Notre école offre des formations doctorales, soutenues par deux
                laboratoires de recherche : le LMCS et le LCSI, abritant la
                majorité de nos enseignants-chercheurs. Ces laboratoires sont
                des centres d’excellence où l’innovation et la découverte
                prospèrent, propulsant notre institution vers de nouveaux
                sommets dans le domaine de la recherche.
              </div>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default page;
