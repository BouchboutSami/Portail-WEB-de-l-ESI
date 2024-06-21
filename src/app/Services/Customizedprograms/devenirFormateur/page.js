/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import { Loader } from "rsuite";
import axios from "axios";
import NavBar from "@/components/NavBar";

const devenirFormateur = () => {
  // State for form fields
  const [fullName, setFullName] = useState("");
  const [numTel, setNumTel] = useState("");
  const [email, setEmail] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [file, setFile] = useState(null);
  const [CV, setCV] = useState(null);
  const [Themes, setThemes] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    axios.get("http://localhost:8000/theme/domaines").then((response) => {
      setThemes(response.data);
      setloading(false);
    });
  }, []);

  const tableData = [
    { id: 1, label: "Option 1" },
    { id: 2, label: "Option 2" },
    { id: 3, label: "Option 3" },
    // Add more data as needed
  ];

  // State to store selected options
  const [selectedOptions, setSelectedOptions] = useState([]);

  // Event handler for changing selected options
  const handleCheckboxChange = (value) => {
    const updatedOptions = selectedOptions.includes(value)
      ? selectedOptions.filter((item) => item !== value)
      : [...selectedOptions, value];

    setSelectedOptions(updatedOptions);
  };
  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    // Using FileReader to read the file and convert it to a data URL
    const reader = new FileReader();
    reader.onload = () => {
      setImageLink(reader.result);
    };

    reader.readAsDataURL(selectedFile);
  };

  const handleFileChange = (e) => {
    setCV(e.target.files[0]);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for form submission here
    console.log("Form submitted!");
  };
  if (loading)
    return (
      <div className="w-full h-max flex justify-center">
        <Loader size="lg" content="Loading" vertical />
      </div>
    );
  return (
    <div>
      {" "}
      <NavBar />
      <div className="flex justify-between">
        {/* Left side with form */}
        <div className="w-1/2 p-8">
          <h1 className="text-blue font-bold border-b-2 border-blue-700 pb-1 mb-4">
            Devenir un de nos formateurs
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-600"
              >
                Nom complet
              </label>
              <input
                type="text"
                id="fullName"
                className="mt-1 p-2 border rounded w-full"
                onChange={(e) => setFullName(e.target.value)}
                value={fullName}
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
                Adresse Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 p-2 border rounded w-full"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            {/* Image input field */}
            <div className="mb-4">
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-600"
              >
                Photo
              </label>
              <div className="flex items-center">
                <input
                  type="file"
                  id="image"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="mt-1 p-2 border rounded w-full bg-darkblue text-white"
                />
              </div>
              {imageLink && (
                <img
                  src={imageLink}
                  alt="Selected"
                  className="mt-2 max-h-[150px] w-auto object-cover"
                  height="100px"
                  width="auto"
                />
              )}
            </div>
            {/* CV input field */}
            <div className="mb-4">
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-600"
              >
                CV
              </label>
              <div className="flex items-center">
                <input
                  type="file"
                  id="image"
                  onChange={handleFileChange}
                  className="mt-1 p-2 border rounded w-full bg-darkblue text-white"
                />
              </div>
            </div>
            {/* Checkbox input field */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Thèmes souhaités
              </label>
              {Themes.map((item) => (
                <div key={item.idDomaine} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    id={`option-${item.idDomaine}`}
                    className="mr-2 focus:ring-blue h-4 w-4 text-blue border-gray-300 rounded"
                    value={item.NomDomaine}
                    checked={selectedOptions.includes(item.NomDomaine)}
                    onChange={() => handleCheckboxChange(item.NomDomaine)}
                  />
                  <label
                    htmlFor={`option-${item.idDomaine}`}
                    className="text-gray-700"
                  >
                    {item.NomDomaine}
                  </label>
                </div>
              ))}
            </div>

            <div className="flex justify-start">
              <button
                type="submit"
                className="bg-blue text-white text-semibold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
                onClick={() => {
                  alert(
                    "Merci d'avoir rempli le formulaire, nous reviendrons vers vous très prochainement"
                  );
                }}
              >
                Soumettre
              </button>
            </div>
          </form>
        </div>

        {/* Right side with image */}
        <div className="w-1/3 h-auto flex justify-end">
          <img
            src="/images/formateur.png"
            alt="Devis"
            className="w-99 h-auto ml-auto "
          />
        </div>
      </div>
    </div>
  );
};

export default devenirFormateur;
