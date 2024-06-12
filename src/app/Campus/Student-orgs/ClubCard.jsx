/* eslint-disable @next/next/no-img-element */
import React from "react";

const ClubCard = (props) => {
  return (
    <div className="flex flex-grow flex-col justify-between px-5 py-4 gap-4 cardClub rounded-xl shadow-xl">
      <div className="flex flex-col gap-5">
        <h1 className="font-bold text-2xl overflow-hidden">{props.club}</h1>
        <h2 className="font-light text-[#A9A9A9]">{props.categorie}</h2>
        <div className="w-2/5 h-auto self-center">
          <img src={props.logo} alt="logo" />
        </div>
        <p>{props.description}</p>
      </div>
      <a
        href={props.link}
        target="_blank"
        className="px-2 py-1 border-[1px] border-black w-max rounded-md font-medium"
      >
        Découvrir plus
      </a>
    </div>
  );
};

export default ClubCard;
