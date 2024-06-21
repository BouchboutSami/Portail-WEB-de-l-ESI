import React, { useEffect, useState } from "react";
import axios from "axios";
import { Loader } from "rsuite";
import { FaCheck } from "react-icons/fa";
import Divider from "@/components/Divider";

const AccordionFormateurs = () => {
  const [Formateurs, setFormateurs] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "https://portail-web-de-l-esi-backend.onrender.com/api/formateurs?populate=*"
      )
      .then((response) => {
        setFormateurs(response.data.data);
        setloading(false);
      });
  }, []);
  if (loading)
    return (
      <div className="w-full h-max flex justify-center" id="formations">
        <Loader size="lg" content="Loading" vertical />
      </div>
    );
  return (
    <div className="w-[65%] py-4 px-10 flex flex-col gap-10">
      {Formateurs.map((formateur, Findex) => {
        console.log(formateur);
        return (
          <div className="flex flex-col gap-6" key={Findex}>
            <div
              className="w-full bg-grey flex flex-row items-center py-6 px-4"
              style={{
                backgroundColor: "#1E73BE",
              }}
            >
              <p
                className="flex flex-row gap-2 items-center"
                style={{
                  color: "#FFFFFF",
                  fontWeight: "bold",
                }}
              >
                <span>+</span>
                {formateur.attributes.nomComplet}
              </p>
            </div>
            <h2 className="font-bold">Thèmes associés</h2>
            {formateur.attributes.formations.data.map(
              (themeformateur, Tindex) => {
                return (
                  <div
                    key={Tindex}
                    className="w-full flex flex-row items-center gap-2"
                  >
                    <FaCheck color="#1E73BE" />
                    <p className="text-grey font-medium">
                      {themeformateur.attributes.name}
                    </p>
                  </div>
                );
              }
            )}
            <Divider />
          </div>
        );
      })}
    </div>
  );
};

export default AccordionFormateurs;
