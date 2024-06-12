"use client";
import React from 'react';
import NavBar from "@/components/NavBar";
import { FaDownload, FaUserCircle, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import PageImg from "@/components/PageImg";
import Footer from "@/components/Footer"; 
import Accordion from '@/components/Accordion';

export default function Home() {
  const documents = {
    "Diplôme Final Ingénieur": {
      "Retrait Du Diplôme Final Ingénieur": [
        { name: "Extrait de Naissance (N° 07)" },
        { name: "Original du Relevé de notes du BAC" },
        { name: "Originaux des Relevés de Notes du Cursus" },
        { name: "Attestation provisoire de succès" },
        { name: "Fiche de Renseignements (Ingénieur)", url: "https://www.esi.dz/wp-content/uploads/2021/05/Fiche-de-Renseignement-Ingenieur.pdf" },
        { name: "Demande manuscrite" }
      ],
      "Authentification Diplôme Final Ingénieur": [
        { name: "Etudiants n’ayant pas encore terminé leur scolarité:" },
        { name: "Originaux des Certificats de Scolarité" },
        { name: "Copie du Relevé de Note du BAC" },
        { name: "Originaux des Relevés de Notes" },
        { name: "Etudiants diplômés Ingénieurs:" },
        { name: "Diplôme final ou l’original de l’Attestation provisoire" },
        { name: "Copie du Relevé de Note du BAC" },
        { name: "Original du relevé des Notes Global ou originaux des Relevés de Notes" },
        { name: "N.B : Ne plus légaliser les documents pédagogiques photocopiés" }
      ]
    },
    "Diplôme Final Master": {
      "Retrait Du Diplôme Final Master": [
        { name: "Extrait de Naissance (N° 07)" },
        { name: "Original du Relevé de notes du BAC" },
        { name: "Originaux des Relevés de Notes du Cursus" },
        { name: "Attestation provisoire de succès" },
        { name: "Fiche de Renseignements (Master)", url: "https://www.esi.dz/wp-content/uploads/2021/05/Fiche-de-Renseignement-Ingenieur-et-Master.pdf" },
        { name: "Demande manuscrite" }
      ],
      "Authentification Diplôme Final Master": [
        // List the required documents
      ]
    },
    "Diplôme Final Magister": {
      "Retrait Du Diplôme Final Magister": [
        { name: "Extrait de Naissance (N° 07)" },
        { name: "Original du Relevé de notes du BAC" },
        { name: "Originaux des Relevés de Notes du Cursus" },
        { name: "Attestation provisoire de succès" },
        { name: "Fiche de Renseignements (Magister)", url: "https://www.esi.dz/wp-content/uploads/2021/05/Fiche-de-Renseignement-Magister.pdf" },
        { name: "Demande manuscrite" }
      ],
      "Authentification Diplôme Final Magister": [
        // List the required documents
      ]
    },
    "Diplôme Final Docteur en Sciences et docteur LMD": {
      "Retrait Du Diplôme Final Docteur en Sciences et docteur LMD": [
        { name: "Extrait de Naissance (N° 07)" },
        { name: "Original du Relevé de notes du BAC" },
        { name: "Originaux des Relevés de Notes du Cursus" },
        { name: "Attestation provisoire de succès" },
        { name: "Fiche de Renseignements (Docteur en Sciences)", url: "https://www.esi.dz/wp-content/uploads/2021/05/Fiche-de-Renseignement-Docteur-En-Sciences.pdf" },
        { name: "Fiche de Renseignements (LMD)", url: "https://www.esi.dz/wp-content/uploads/2021/05/Fiche-de-Renseignement-Docteur-LMD.pdf" },
        { name: "Demande manuscrite" }
      ],
      "Authentification Diplôme Final Docteur en Sciences et docteur LMD": [
        // List the required documents
      ]
    }
  };

  return (
    <div className="font-poppins w-full flex flex-col relative">
      <NavBar />
      <PageImg
        img="/assets/Diplomas.jpg" 
        titre="Diplomas and Authentication" 
        details="Our meticulous verification process guarantees the legitimacy of your academic 
        achievements and professional certifications, providing you with peace of mind and credibility in today's competitive world."
      />
      
      <div className="p-8 flex flex-col gap-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-bleunuit mb-4">Diplomas and Authentication</h1>
          <p className="text-lg text-gray-700">Find all the necessary information and required documents for obtaining and authenticating diplomas.</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 space-y-4">
            {Object.keys(documents).map((diploma, index) => (
              <Accordion key={index} title={diploma}>
                {Object.keys(documents[diploma]).map((category, idx) => (
                  <div key={idx} className="mb-4">
                    <h3 className="text-xl font-semibold text-[#185B9C] mb-2">
                      {category}
                    </h3>
                    <ul className="list-disc list-inside ml-4 space-y-2">
                      {documents[diploma][category].map((doc, id) => (
                        <li key={id} className="flex items-center justify-between">
                          <span>{doc.name}</span>
                          {doc.url && (
                            <a
                              href={doc.url}
                              download
                              className="text-[#185B9C] hover:text-[#154b7a] transition-colors"
                            >
                              <FaDownload className="inline-block w-5 h-5" />
                            </a>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </Accordion>
            ))}
          </div>
          <div className="lg:w-1/3">
            <div className="bg-bleu rounded-lg shadow-lg p-6 text-[#FFFFFF] text-sm ">
              <h2 className="text-xl font-semibold mb-4">
                Contact Diplomas Service
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FaUserCircle className="w-5 h-5" />
                  <div className="capitalize flex-1">M. Mohamed BENHADJI</div>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhone className="w-5 h-5" />
                  <div className="flex-1">+213 23 93 91 43 Poste 3007</div>
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="w-5 h-5" />
                  <div className="flex-1">s_stages@esi.dz</div>
                </div>
                <div className="flex items-center gap-3">
                  <FaClock className="w-5 h-5" />
                  <div className="flex-1">8:00 AM - 4:00 PM, Sunday to Thursday</div>
                </div>
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="w-5 h-5" />
                  <div className="flex-1">Lorem ipsum dolor sit amet</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
