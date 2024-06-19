import React from "react";
import CampusNewsCard from "./CampusNewsCard";

const CampusNews = () => {
  const News = [
    {
      image: "/assets/Natixis.jpg",
      title:
        "Le S2EE15 s'est tenu ce Samedi 18 mai 2024 et ce fut un grand succès",
      link: "/",
    },
    {
      image: "/assets/SBC.png",
      title:
        "ETIC remporte la 1ère place à la 2ème édition du Summer Break Challenge organisé par Djezzy",
      link: "/",
    },
    {
      image: "/assets/Datahack.png",
      title: "Organisation de la 1ère édition du DataHack par le CSE",
      link: "/",
    },
    {
      image: "/assets/CampusNews.jpg",
      title:
        "2 membres de GDG remportent la 2ème place au plus grand hackathon d'IA de la région MENA",
      link: "/",
    },

    {
      image: "/assets/salle.jpeg",
      title: "Inauguration de la nouvelle salle de sport de l'ESI ",
      link: "/",
    },

    {
      image: "/assets/plante.png",
      title: "Campagne de plantation : Un arbre pour chaque étudiant ",
      link: "/",
    },
    {
      image: "/assets/iftar.jpg",
      title:
        "Un iftar collectif rassemble les étudiants, enseignants et personnel de l'ESI",
      link: "/",
    },
    {
      image: "/assets/Yennayer1.jpeg",
      title: "Célébrations de Yennayer à l'ESI, organisé par le CACE",
      link: "/",
    },
    {
      image: "/assets/CampusNews.jpg",
      title:
        "Une équipe de l'ESI remporte le Hackathon Alger Legal Tech Hackathon",
      link: "/",
    },
  ];
  return (
    <div className="w-full bg-[#F5F5F5] flex flex-col items-center gap-8">
      <h1 className="font-poppins font-bold mt-8 text-[28px] text-black ">
        Campus News
      </h1>
      <div className="grid grid-cols-4 gap-1 items-center pb-4">
        {/* max 8 elements to display in the section  */}
        {News.slice(0, 8).map((item, index) => (
          <a href={item.link} key={index}>
            <CampusNewsCard title={item.title} image={item.image} />
          </a>
        ))}
      </div>
      <div className=" absolute w-full bottom-0 left-0  hover:underline text-[#185B9C]">
        <div className="flex flex-row justify-between px-4 items-center">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default CampusNews;
