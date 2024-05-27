/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { GiPositionMarker } from "react-icons/gi";
import { AiOutlineMail } from "react-icons/ai";
import { TbWorldWww } from "react-icons/tb";
import { FaTiktok } from "react-icons/fa";

const Details = () => {
  return (
    <div className="w-full flex flex-row px-[10%] gap-20 py-[5%]">
      <div className="logo flex flex-col w-1/5 items-center gap-10">
        <div className="logoClub">
          <img src="/images/LOGO_ETIC_1.png" alt="" />
        </div>
        <div className="w-full icons flex flex-row justify-between">
          <FaFacebook color="#185B9C" size={25} />
          <FaYoutube color="#F31010" size={25} />
          <FaLinkedin color="#185B9C" size={25} />
          <BiLogoInstagramAlt color="#E43977" size={25} />
          <FaTiktok color="black" size={25} />
        </div>
      </div>
      <div className="detailstext flex flex-col w-3/5 min-h-max justify-between">
        <h1 className="text-[#666] font-bold">
          Entrepreneuriat et Technologies d’Informations et de communication{" "}
        </h1>
        <p>
          ETIC est une organisations estudiantine à but non lucratif créée en
          2009, son but est de rapprocher les étudiants du monde professionnel
          et de l’entrepreneuriat
        </p>
        <div className="flex flex-row items-center gap-2">
          <VscAccount />
          <h2 className="font-bold">Président :</h2>
          <p>BOUCHBOUT Sami Anis</p>
        </div>
        <div className="flex flex-row items-center gap-2">
          <GiPositionMarker />
          <h2 className="font-bold">Local :</h2>
          <p>BP N°124</p>
        </div>
        <div className="flex flex-row items-center gap-2">
          <AiOutlineMail />
          <h2 className="font-bold">Email :</h2>
          <p>etic@esi.dz</p>
        </div>
        <div className="flex flex-row items-center gap-2">
          <TbWorldWww />
          <h2 className="font-bold">Site web :</h2>
          <p>etic-club.com</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
