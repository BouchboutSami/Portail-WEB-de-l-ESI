/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
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
  const club = JSON.parse(localStorage.getItem("club"));
  return club.id > 0 ? (
    <div className="w-full flex flex-row px-[10%] gap-20 py-[5%]">
      <div className="logo flex flex-col w-1/5 items-center gap-10">
        <div className="logoClub">
          <img
            src={
              "http://localhost:1337" +
              club.attributes.logo.data.attributes.formats.thumbnail.url
            }
            alt=""
          />
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
        <h1 className="text-[#666] font-bold">{club.attributes.categorie}</h1>
        <p>{club.attributes.description}</p>
        <div className="flex flex-row items-center gap-2">
          <VscAccount />
          <h2 className="font-bold">Président :</h2>
          <p>{club.attributes.president}</p>
        </div>
        <div className="flex flex-row items-center gap-2">
          <GiPositionMarker />
          <h2 className="font-bold">Local :</h2>
          <p>{club.attributes.local}</p>
        </div>
        <div className="flex flex-row items-center gap-2">
          <AiOutlineMail />
          <h2 className="font-bold">Email :</h2>
          <p>{club.attributes.email}</p>
        </div>
        <div className="flex flex-row items-center gap-2">
          <TbWorldWww />
          <h2 className="font-bold">Site web :</h2>
          <p>{club.attributes.website}</p>
        </div>
      </div>
    </div>
  ) : (
    <div>loading</div>
  );
};

export default Details;
