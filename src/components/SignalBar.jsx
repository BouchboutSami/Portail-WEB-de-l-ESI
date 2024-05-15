"use client";
import React, { useState } from "react";
import {
  FaEye,
  FaLanguage,
  FaExclamationCircle,
  FaEyeSlash,
} from "react-icons/fa";
import Link from "next/link";

const Signalbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [colorBlind, setColorBlind] = useState(false);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setShowDropdown(false);
  };

  const languageOptions = [
    { label: "English", value: "en" },
    { label: "French", value: "fr" },
    { label: "Arabic", value: "ar" },
  ];
 const handleColorBlind = () =>{
  setColorBlind(!colorBlind); 
 }
  return (
    <div className=" top-0 mx-0 my-0 px-5 text-xs flex justify-between bg-bleu text-white h-7 relative z-50">
      <div className="flex items-center gap-3 hover:cursor-pointer" onClick={handleColorBlind} title="Accessibility Function">
        {colorBlind ? (
          <FaEye style={{ width: "15px", height: "15px" }} />
        ) : (
          <FaEyeSlash style={{ width: "15px", height: "15px" }} />
        )}
        <Link href="https://infoplag.com/esidz/fr">
          <span className="cursor-pointer">Anti-Plagiarism</span>
        </Link>
      </div>
      <div className="flex items-center gap-3 relative">
        <div
          className="cursor-pointer"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <FaLanguage style={{ width: "25px", height: "25px" }} />
        </div>
        <Link href="/report-problem">
          <span className="cursor-pointer relative" title="Report a Problem">
            <FaExclamationCircle style={{ width: "16px", height: "16px" }} />
          </span>
        </Link>
        {showDropdown && (
          <div className="absolute top-6 right-0 bg-bleunuit shadow-md rounded-md z-50">
            <ul>
              {languageOptions.map((option) => (
                <li
                  key={option.value}
                  onClick={() => handleLanguageChange(option.value)}
                  className={`py-1 px-3 cursor-pointer rounded-md ${
                    option.value === selectedLanguage ? "bg-gray-400" : ""
                  }`}
                >
                  {option.label}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Signalbar;
