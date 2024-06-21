"use client";
import ImageLanding from "@/components/ImageLanding";
import NavBar from "@/components/NavBar";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "@/components/Footer";
import Hierarchy from "@/components/Hierarchy";

const page = () => {
  const hierarchy = [
    {
      text: "Internal Regulations",
      subItems: [
        {
          text: "Library Internal Regulations",
          link: "https://www.esi.dz/wp-content/uploads/2022/07/Reglement-Interieur-de-la-Bibliotheque-de-lESI.pdf",
        },
        {
          text: "Preparatory Classes Internal Regulations",
          link: "https://www.esi.dz/wp-content/uploads/2022/05/Reglement-Classes-Preparatoire.pdf",
        },
        {
          text: "Higher Cycle Internal Regulations",
          link: "https://www.esi.dz/wp-content/uploads/2022/05/Reglement_Second-cycle.pdf",
        },
      ],
    },
    {
      text: "Doctorate",
      subItems: [
        {
          text: "Doctorate in Science",
          subItems: [
            {
              text: "Executive Decree No. 98-254 of August 17, 1998",
              link: "https://www.esi.dz/wp-content/uploads/2021/10/decret-98-254-du-17-aout-1998-Formation-doctorale-Habilitation.pdf",
            },
            {
              text: "Executive Decree No. 10-231 of October 2, 2010",
              link: "https://www.esi.dz/wp-content/uploads/2021/10/Decret-10-231-statut-doctorant-enseignant-chercheur-2010.pdf",
            },
            {
              text: "Order No. 153 of May 14, 2012",
              link: "https://www.esi.dz/wp-content/uploads/2021/10/Arrete-153-2012-Fichier-Central-des-Theses.pdf",
            },
            {
              text: "Order No. 704 of June 16, 2016",
              link: "https://www.esi.dz/wp-content/uploads/2021/10/Arrete-704-juin-2016-cotutelle.pdf",
            },
            {
              text: "Circular No. 03 of March 8, 2018",
              link: "https://www.esi.dz/wp-content/uploads/2021/10/circulaire-03-du-08-03-2018-Soutenance-Doctorat-Sciences.pdf",
            },
            {
              text: "Order No. 1082 of December 27, 2020",
              link: "https://www.esi.dz/wp-content/uploads/2021/10/Plagiat-ARRETE-1082-27.12.2020.pdf",
            },
          ],
        },
        {
          text: "LMD (License, Master, Doctorate)",
          subItems: [
            {
              text: "Executive Decree No. 98-254 of August 17, 1998",
              link: "https://www.esi.dz/wp-content/uploads/2021/10/decret-98-254-du-17-aout-1998-Formation-doctorale-Habilitation.pdf",
            },
            {
              text: "Executive Decree No. 08-265 of August 19, 2008",
              link: "https://www.esi.dz/wp-content/uploads/2021/10/decret-08-265-du-19-08-2008-LMD.pdf",
            },
            {
              text: "Executive Decree No. 10-231 of October 2, 2010",
              link: "https://www.esi.dz/wp-content/uploads/2021/10/Decret-10-231-statut-doctorant-enseignant-chercheur-2010.pdf",
            },
            {
              text: "Order No. 153 of May 14, 2012",
              link: "https://www.esi.dz/wp-content/uploads/2021/10/Arrete-153-2012-Fichier-Central-des-Theses.pdf",
            },
            {
              text: "Order No. 191 of July 16, 2012",
              link: "https://www.esi.dz/wp-content/uploads/2021/10/arrete-191-16-juillet-2012-DLMD.pdf",
            },
            {
              text: "Order No. 547 of June 2, 2016",
              link: "https://www.esi.dz/wp-content/uploads/2021/10/Arrete-547-2016-DLMD.pdf",
            },
            {
              text: "Order No. 704 of June 16, 2016",
              link: "https://www.esi.dz/wp-content/uploads/2021/10/Arrete-704-juin-2016-cotutelle.pdf",
            },
            {
              text: "Circular No. 03 of July 7, 2019",
              link: "https://www.esi.dz/wp-content/uploads/2021/10/Circulaire-3-du-07-07-2019-soutenance-DLMD.pdf",
            },
            {
              text: "Order No. 961 of December 2, 2020",
              link: "https://www.esi.dz/wp-content/uploads/2021/10/Arrete-961-du-02-12-2020-DLMD.pdf",
            },
            {
              text: "Order No. 1082 of December 27, 2020",
              link: "https://www.esi.dz/wp-content/uploads/2021/10/Plagiat-ARRETE-1082-27.12.2020.pdf",
            },
            {
              text: "Order No. 28 of January 9, 2022",
              link: "https://www.esi.dz/wp-content/uploads/2022/05/Arrete-28-du-09-janvier-2022-Modalites-Acces-et-Organisation-DLMD-et-Conditions-Preparation-Soutenance-These-Doctorat..pdf",
            },
            {
              text: "Order No. 991 of August 1, 2022",
              link: "https://www.esi.dz/wp-content/uploads/2023/01/Arrete-991-01-08-2022-Modalites-Acces-Organisation-DLMD.pdf",
            },
            {
              text: "Annex 1 of Order No. 547 of June 2, 2016",
              link: "https://www.esi.dz/wp-content/uploads/2022/05/Annexe-1-Arrete-547-du-02-juin-2016-Carnet-du-Doctorant..pdf",
            },
            {
              text: "Annex 2 of Order No. 547 of June 2, 2016",
              link: "https://www.esi.dz/wp-content/uploads/2022/05/Annexe-2-Arrete-547-du-02-juin-2016-Grille-de-Recevabilite-du-Dossier-de-Soutenance.pdf",
            },
            {
              text: "Annex 1 of Order No. 961 of December 2, 2020",
              link: "https://www.esi.dz/wp-content/uploads/2022/05/Annexe-1-Arrete-961-du-02-decembre-2020-Carnet-du-Doctorant.pdf",
            },
            {
              text: "Annex 2 of Order No. 961 of December 2, 2020",
              link: "https://www.esi.dz/wp-content/uploads/2022/05/Annexe-2-Arrete-961-du-02-decembre-2020-Grille-de-Recevabilite-du-Dossier-de-Soutenance.pdf",
            },
            {
              text: "Annex 1 of Order No. 28 of January 9, 2022",
              link: "https://www.esi.dz/wp-content/uploads/2022/05/Annexe-1-Arrete-28-du-09-janvier-2022-Carnet-du-Doctorant.pdf",
            },
            {
              text: "Annex 2 of Order No. 28 of January 9, 2022",
              link: "https://www.esi.dz/wp-content/uploads/2022/05/Annexe-2-Arrete-961-du-02-decembre-2020-Grille-de-Recevabilite-du-Dossier-de-Soutenance.pdf",
            },
          ],
        },
      ],
    },
    {
      text: "Laboratories",
      subItems: [
        {
          text: "Decree No. 99-244 of 1999 Governing Laboratories",
          link: "https://www.esi.dz/wp-content/uploads/2021/11/Decret-99-244-de-1999-regissant-les-laboratoires.pdf",
        },
        {
          text: "Regulations Governing Laboratories",
          link: "https://www.esi.dz/wp-content/uploads/2021/11/Textes_regissant_labos.pdf",
        },
      ],
    },
    {
      text: "University Habilitation",
      subItems: [
        {
          text: "Order No. 493 of April 20, 2022",
          link: "https://www.esi.dz/wp-content/uploads/2022/04/HU-Arrete-493-du-20-4-2022-modifiant-et-completant-larrete-804.pdf",
        },
        {
          text: "Decree No. 21-50 of January 28, 2021",
          link: "https://www.esi.dz/wp-content/uploads/2021/11/Habilitation-Universitaire-Decret-21-50-28-01-2021-Modalites.pdf",
        },
        {
          text: "Order No. 804 of July 14, 2021",
          link: "https://www.esi.dz/wp-content/uploads/2021/11/Habilitation-Universitaire-Arrete-804-du-14-juil-2021.pdf",
        },
      ],
    },
    {
      text: "Training Before Promotion",
      subItems: [
        {
          text: "Executive Decree No. 220-08 of July 14, 2008",
          link: "https://www.esi.dz/wp-content/uploads/2022/10/A2008040.pdf",
        },
        {
          text: "Executive Decree No. 194-20 of July 25, 2020",
          link: "https://www.esi.dz/wp-content/uploads/2022/10/A2020043.pdf",
        },
        {
          text: "Order of December 19, 2019",
          link: "https://www.esi.dz/wp-content/uploads/2022/10/A2020045.pdf",
        },
        {
          text: "Order of December 5, 2019",
          link: "https://www.esi.dz/wp-content/uploads/2022/10/A2020013.pdf",
        },
        {
          text: "Executive Decree No. 280-16 of November 2, 2016",
          link: "https://www.esi.dz/wp-content/uploads/2022/10/A2016066.pdf",
        },
        {
          text: "Executive Decree No. 397-11 of November 24, 2011",
          link: "https://www.esi.dz/wp-content/uploads/2022/10/232-FR-1.pdf",
        },
        {
          text: "Executive Decree No. 176-16 of June 14, 2016",
          link: "https://www.esi.dz/wp-content/uploads/2022/10/Statut-de-lESI.pdf",
        },
        {
          text: "Order No. 353 of May 13, 2013",
          link: "https://www.esi.dz/wp-content/uploads/2022/10/238-BIS-FR-1.pdf",
        },
      ],
    },
    {
      text: "Other Regulations",
      subItems: [
        {
          text: "Mobility",
          link: "https://www.esi.dz/wp-content/uploads/2022/10/Arrete-1349-du-4-10-2022-Perfectionnement.pdf",
        },
      ],
    },
  ];

  return (
    <BrowserRouter>
      <div className="overflow-hidden">
        <NavBar />
        <ImageLanding
          imageUrl="/assets/reglementations.png"
          title="Reglementary texts"
        />
        <div className="flex mx-16 my-8">
          <Hierarchy hierarchy={hierarchy} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default page;
