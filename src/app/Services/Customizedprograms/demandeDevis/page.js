/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DemandeDevis = () => {
  // State for form fields
  const [organisme, setOrganisme] = useState("");
  const [numTel, setNumTel] = useState("");
  const [email, setEmail] = useState("");
  const [siege, setSiege] = useState("");
  const [nbParticipants, setNbParticipants] = useState("");
  const [date, setDate] = useState("");
  const [Theme, setTheme] = useState({});
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const themeChoisi = localStorage.getItem("ThemeDevis");
    if (themeChoisi) {
      setTheme(JSON.parse(themeChoisi));
      setloading(false);
    }
  }, []);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Merci d'avoir rempli le formulaire, nous vous enverrons le devis associé à votre demande dans les plus brefs délais"
    );
    console.log("Form submitted!");
  };

  return (
    <div>
      {" "}
      <Navbar />
      {!loading && (
        <div className="flex">
          {/* Left side with form */}
          <div className="w-1/2 p-8">
            <h1 className="text-blue font-bold border-b-2 border-blue-700 pb-1 mb-4">
              Demande de devis
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="theme"
                  className="block text-sm font-medium text-gray-600"
                >
                  Theme
                </label>
                <p className="text-lg font-black text-blue">
                  {Theme.attributes.name}
                </p>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="organisme"
                  className="block text-sm font-medium text-gray-600"
                >
                  Nom de l&apos;organisme
                </label>
                <input
                  type="text"
                  id="organisme"
                  className="mt-1 p-2 border rounded w-full"
                  onChange={(e) => setOrganisme(e.target.value)}
                  value={organisme}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="numTel"
                  className="block text-sm font-medium text-gray-600"
                >
                  Numéro de téléphone
                </label>
                <input
                  type="tel"
                  id="numTel"
                  className="mt-1 p-2 border rounded w-full"
                  onChange={(e) => setNumTel(e.target.value)}
                  value={numTel}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600"
                >
                  Adresse mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 p-2 border rounded w-full"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="siege"
                  className="block text-sm font-medium text-gray-600"
                >
                  Siège
                </label>
                <input
                  type="text"
                  id="siege"
                  className="mt-1 p-2 border rounded w-full"
                  onChange={(e) => setSiege(e.target.value)}
                  value={siege}
                />
              </div>

              <div className="flex mb-4">
                <div className="w-1/2 mr-2">
                  <label
                    htmlFor="nbParticipants"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Nombre de participants
                  </label>
                  <input
                    type="number"
                    id="nbParticipants"
                    className="mt-1 p-2 border rounded w-full"
                    onChange={(e) => setNbParticipants(e.target.value)}
                    value={nbParticipants}
                  />
                </div>
                <div className="w-1/2 ml-2">
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    className="mt-1 p-2 border rounded w-full"
                    onChange={(e) => setDate(e.target.value)}
                    value={date}
                  />
                </div>
              </div>
              <div className="flex justify-start mt-4">
                <button className="bg-bleu text-white text-semibold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
                  Soumettre la demande
                </button>
              </div>
            </form>
          </div>

          {/* Right side with image */}
          <div className="w-1/2 flex justify-end">
            <img
              src="/assets/devis.png"
              alt="Devis"
              className="w-99 h-auto ml-auto"
            />
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default DemandeDevis;
