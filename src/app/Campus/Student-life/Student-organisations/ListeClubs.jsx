"use client";
import React, { useEffect, useState } from "react";
import ClubCard from "./ClubCard";
import axios from "axios";

const ListeClubs = () => {
  const [Clubs, setClubs] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    axios
      .get(
        "https://portail-web-de-l-esi-backend.onrender.com/api/clubs?populate=*"
      )
      .then((response) => {
        setClubs(response.data.data);
      })
      .then(() => {
        setisLoading(false);
      });
  }, []);
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full flex items-center justify-center text-xl px-[25%] text-center py-6 text-[#323232] border-black font-bold">
        ESI is home to 12 student organisations in various fields, enabling
        students to pursue their passions and liven up student life with a
        variety of events and exciting initiatives.
      </div>
      <div className="bg-grisbg w-full flex flex-col items-center gap-10 py-10">
        <div className="flex flex-col items-center w-max bg-grisbg ">
          <h1 className="flex flex-col font-normal text-4xl overflow-hidden">
            Liste des clubs
          </h1>
          <div className="w-full h-1 bg-black rounded-xl"></div>
        </div>
        <div className="container w-3/4 self-center grid grid-cols-3 gap-6">
          {Clubs.map((club, index) => {
            return (
              // <ClubCard
              //   nom={club.attributes.nom}
              //   categorie={club.attributes.categorie}
              //   logo={
              //     "http://localhost:1337" +
              //     club.attributes.logo.data.attributes.formats.thumbnail.url
              //   }
              //   description={club.attributes.description}
              //   link={club.attributes.link}
              //   key={index}
              // />
              <ClubCard club={club} key={index} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ListeClubs;