"use client";
import Button from "@/components/Buttons/Button";
import Footer from "@/components/Footer";
import ImageLanding from "@/components/ImageLanding";
import ImgSlider from "@/components/Imgslider";
import ListComp from "@/components/ListComp";
import NavBar from "@/components/NavBar";
import UniSideBar from "@/components/UniSideBar";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Stats from "@/components/Stats";
const page = () => {
    const imagesLib = [
        "/assets/Library1.png",
        "/assets/Library2.png",
        "/assets/Library3.png",
    ]
    const LibPoints = [
        "Acquisition d’ouvrages selon les besoins pédagogiques de la communauté universitaire de l’établissement.",
        "Gestion et traitement du fonds documentaire.",
        "Diffusion de l’information scientifique et technique.",
        "Orientation des usagers.",
        "Inscription des chercheurs au système national de documentation en ligne SNDL."
    ]
    const statsData = [
        { title: 'Exemplaires', stats: "+21744" },
        { title: 'Mémoires', stats: 1363 },
        { title: 'Thèses', stats: 123 },
        { title: 'Adhérents', stats: 1246 },
    ];
    return (
        <BrowserRouter>
            <div className="overflow-scroll">
                <NavBar />
                <ImageLanding
                    imageUrl="/assets/OrganisationAdministrationHeader.png"
                    title="Organisation & Administration"
                />
                <div className="flex">
                    <UniSideBar />
                    <div className="w-full flex flex-col items-center">
                        {/* Code here ! */}
                        <div className="w-full my-12 items-center px-[5%]">
                            <h1 className="font-poppins font-bold text-[24px] text-[#185B9C]">
                                PRESENTATION
                            </h1>
                            <div className="text-black font-light font-poppins text-[18px] mb-4">
                                The ESI Library was created when the school was founded in 1969. It provides users with a wide range of services, mainly documentation. It is mainly specialised in IT.
                            </div>
                            <div className="flex flex-row justify-center gap-16 mt-4 mb-8">
                                <Button title={"Catalogue en ligne de la bibliothèque de l'ESI"} />
                                <Button title={"Entrepôt Mémoires de fin d'études"} />
                            </div>
                            <div className="bg-red-500">
                            <ImgSlider images={imagesLib} />
                            </div>
                            
                            <ListComp heading={""} paragraph={"Elle a pour missions essentielles :"} points={LibPoints} />
                            <div className="flex justify-center">
                                <Button title={"Voir le règlement interne de la bibliothèque"} />
                            </div>
                            <h1 className="font-poppins font-bold text-[24px] text-[#185B9C] mt-8">
                                AMENAGEMENT DE LA BIBLIOTHEQUE
                            </h1>
                            <p className="font-poppins font-light text-[18px]">La bibliothèque est aménagée en trois niveaux :</p>
                            <div className="font-poppins font-light text-[18px]">
                                <ul className="list-disc pl-5">
                                    <li>
                                        Sous-sol
                                        <ul className="list-disc pl-5">
                                            <li>Musée de la Bibliothèque regroupant des moyens (documents, matériels, logiciels) relatant l’histoire de l’informatique.</li>
                                            <li>Une partie du fonds documentaire (anciennes versions et éditions).</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Rez-de-chaussée
                                        <ul className="list-disc pl-5">
                                            <li>Une grande salle de lecture pour les étudiants, pouvant accueillir 160 étudiants.</li>
                                            <li>Deux micros ordinateurs pour la recherche documentaire.</li>
                                            <li>Un téléviseur destiné à l’affichage.</li>
                                            <li>Un registre de doléance.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        1er étage
                                        <ul className="list-disc pl-5">
                                            <li>Une salle de lecture pour les enseignants.</li>
                                            <li>Des bureaux administratifs.</li>
                                            <li>Un guichet dédié aux prêts et restitutions des livres.</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full">
                            <Stats table={statsData} />
                        </div>
                            <div className="px-[5%]">
                                <h3 className="font-poppins font-bold text-[20px]">Chaque année la bibliothèque organise :</h3>
                                <h1 className="font-poppins font-bold text-[22px] text-[#185B9C] mt-8">
                                    Au mois d’Avril
                                </h1>
                                <p className="font-poppins font-light text-[18px]">
                                    Une journée d’information pour la préparation de la fiche technique (Bon de commande), concernant les nouveaux ouvrages est organisée, son objectif est le recueil des besoins des étudiants et des enseignants
                                </p>
                                <h1 className="font-poppins font-bold text-[22px] text-[#185B9C] mt-8">
                                    Au mois de Mai
                                </h1>
                                <p className="font-poppins font-light text-[18px]">
                                    Des portes ouvertes relatives aux nouvelles acquisitions des ouvrages, l’objectif est la diffusion de l’information (durée 3 à 4 jours ) par rapport aux nouveaux ouvrages acquis                            </p>

                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </BrowserRouter >
    );
};

export default page;
