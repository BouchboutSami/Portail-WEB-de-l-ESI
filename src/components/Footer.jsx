
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full flex flex-col text-white">
      <div className="links bg-bleu flex flex-row w-full py-10 px-[10%] gap-[10%]">
        <div className="flex flex-col gap-6">
          <h1>École</h1>
          <h2 className="opacity-75">Présentation de l&apos;école</h2>
          <h2 className="opacity-75">Organisation & Gestion</h2>
          <h2 className="opacity-75">La bibliothèque</h2>
          <h2 className="opacity-75">Pourquoi l&apos;ESI ?</h2>
        </div>
        <div className="flex flex-col gap-6">
          <h1>Études</h1>
          <h2 className="opacity-75">Présentation de l&apos;école</h2>
          <h2 className="opacity-75">Organisation & Gestion</h2>
          <h2 className="opacity-75">La bibliothèque</h2>
          <h2 className="opacity-75">Pourquoi l&apos;ESI ?</h2>
        </div>
        <div className="flex flex-col gap-6">
          <h1>École</h1>
          <h2 className="opacity-75">Présentation de l&apos;école</h2>
          <h2 className="opacity-75">Organisation & Gestion</h2>
          <h2 className="opacity-75">La bibliothèque</h2>
          <h2 className="opacity-75">Pourquoi l&apos;ESI ?</h2>
        </div>
        <div className="flex flex-col gap-6">
          <h1>Situation géographique</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12794.725851776133!2d3.1678454924060055!3d36.70619168516716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sdz!4v1711912514796!5m2!1sfr!2sdz"
            width="full"
            height="75%"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="creditLogo bg-bleunuit px-[10%] flex flex-row items-center gap-[10%] py-4 relative min-h-max">
        <div className="h-full w-max">
          <img
            className="h-full w-max"
            src="/images/logoBlanc.png"
            alt="Logo blanc de l'ESI"
          />
        </div>

        <div className="credit flex flex-col gap-6">
          <div className="extraLinks flex gap-4">
            <a href="">Actes réglementaires</a>
            <a href="">Contact</a>
            <a href="">Logos</a>
          </div>
          <div className="esi flex items-center gap-4">
            <AiOutlineCopyright style={{ color: "#A9A9A9" }} />
            <p>École Supérieure d’Informatique ESI</p>
            <FaFacebook style={{ color: "#A9A9A9" }} />
            <FaTwitter style={{ color: "#A9A9A9" }} />
            <IoLogoInstagram style={{ color: "#A9A9A9" }} />
            <FaLinkedin style={{ color: "#A9A9A9" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;