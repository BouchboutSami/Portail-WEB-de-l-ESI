/* eslint-disable @next/next/no-img-element */
import React from "react";

const ClubCard = ({ club }) => {
  console.log(club);
  return (
    <div className="flex flex-grow flex-col justify-between px-5 py-4 gap-4 cardClub rounded-xl shadow-xl">
      <div className="flex flex-col gap-5">
        <h1 className="font-bold text-2xl overflow-hidden">
          {club.attributes.nom}
        </h1>
        <h2 className="font-light text-[#A9A9A9]">
          {club.attributes.categorie}
        </h2>
        <div className="w-2/5 h-auto self-center">
          <img
            src={
              "https://portail-web-de-l-esi-backend.onrender.com" +
              club.attributes.logo.data.attributes.formats.thumbnail.url
            }
            alt="logo"
          />
        </div>
        <p>{club.attributes.description}</p>
      </div>
      <a
        href={"./Student-organisations/" + club.attributes.nom}
        className="px-2 py-1 border-[1px] border-black w-max rounded-md font-medium"
        onClick={() => {
          localStorage.setItem("club", JSON.stringify(club));
        }}
      >
        Découvrir plus
      </a>
    </div>
  );
};

export default ClubCard;
