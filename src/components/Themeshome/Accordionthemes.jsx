import React, { useEffect, useState } from "react";
import axios from "axios";
import Themecontent from "./Themecontent";
import Divider from "../Divider";
import { Loader } from "rsuite";

const Accordionthemes = () => {
  const [Themes, setThemes] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    axios
      .get(
        "http://localhost:1337/api/domaine-prestations?populate[formations][populate][0]=tests"
      )
      .then((response) => {
        setThemes(response.data.data);
        setloading(false);
      });
  }, []);
  if (loading)
    return (
      <div className="w-full h-max flex justify-center">
        <Loader size="lg" content="Loading" vertical />
      </div>
    );
  return (
    <div className="w-[65%] py-4 px-10 flex flex-col gap-10">
      {Themes.filter(
        (domaine) => domaine.attributes.formations.data.length > 0
      ).map((domaine, Dindex) => {
        return (
          <div className="flex flex-col gap-6" key={Dindex}>
            <h1 className="xl:text-4xl lg:text-3xl text-darkblue xl:font-bold lg:font-semibold">
              {domaine.attributes.nameDomaine}
            </h1>
            {domaine.attributes.formations.data.map((theme, Tindex) => {
              return (
                <Themecontent
                  key={Tindex}
                  Theme={theme}
                  contenus={theme.attributes.tests.data}
                />
              );
            })}
            <Divider />
          </div>
        );
      })}
    </div>
  );
};

export default Accordionthemes;
