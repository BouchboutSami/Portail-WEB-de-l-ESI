"use-client";
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { CiCalendar } from "react-icons/ci";
import { useRouter } from "next/navigation";

const Themecontent = ({ Theme, contenus }) => {
  console.log("contenus", contenus);
  const [isOpen, setisOpen] = useState(false);
  const router = useRouter();
  function handleClick() {
    setisOpen(!isOpen);
  }
  async function handleDemandeDevis() {
    localStorage.setItem("ThemeDevis", JSON.stringify(Theme));

    router.push("/demandeDevis");
  }
  function handleCommandeFormation() {
    localStorage.setItem("ThemeCommande", JSON.stringify(Theme));
    router.push("/commandeFormation");
  }
  return (
    <div className="w-full flex flex-col gap-4">
      <div
        className="w-full bg-grey flex flex-row items-center py-6 px-4"
        style={{ backgroundColor: isOpen ? "#1E73BE" : "#EEE5E5" }}
        onClick={handleClick}
      >
        <p
          className="flex flex-row gap-2 items-center"
          style={{ color: !isOpen ? "#1E73BE" : "#FFFFFF", fontWeight: "bold" }}
        >
          <span>+</span>
          {Theme.attributes.name}
        </p>
      </div>
      {isOpen && (
        <>
          <div className="px-2 flex flex-col gap-2">
            {contenus.map((contenu, i) => {
              return (
                <div
                  key={i}
                  className="w-full flex flex-row items-center gap-2"
                >
                  <FaCheck color="#1E73BE" />
                  <p className="text-grey font-medium">
                    {contenu.attributes.title} ({contenu.attributes.duree}{" "}
                    Jours)
                  </p>
                </div>
              );
            })}
          </div>
          <div className="flex flex-row w-full justify-between px-[15%]">
            <button
              className="flex items-center gap-4 px-4 py-2 text-white bg-bleu rounded-lg hover:scale-[1.03]"
              onClick={() => {
                handleDemandeDevis();
              }}
            >
              <FaMoneyBillTransfer />
              Demander devis
            </button>
            <button
              className="flex items-center gap-4 px-4 py-2 border-2 border-blue rounded-lg text-blue hover:scale-[1.03]"
              onClick={() => {
                handleCommandeFormation();
              }}
            >
              <CiCalendar />
              Commander la formation
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Themecontent;
