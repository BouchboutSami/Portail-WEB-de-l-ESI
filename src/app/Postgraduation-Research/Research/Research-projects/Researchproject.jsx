import React from "react";
import DownloadButton from "./DownloadButton";

const Researchproject = () => {
  const data = [
    { title: "Donnée 1", situation: "Donnée A" },
    { title: "Donnée 2", situation: "Donnée B" },
    { title: "Donnée 3", situation: "Donnée C" },
    { title: "Donnée 1", situation: "Donnée A" },
    { title: "Donnée 2", situation: "Donnée B" },
    { title: "Donnée 3", situation: "Donnée C" },
  ];
  const data2 = [
    { year: "2018", NbPrjt: "2", EsgtESI: "5", EsgtHESI: "2", Dcts: "1" },
    { year: "2019", NbPrjt: "2", EsgtESI: "5", EsgtHESI: "2", Dcts: "1" },
    { year: "2020", NbPrjt: "2", EsgtESI: "5", EsgtHESI: "2", Dcts: "1" },
    { year: "2021", NbPrjt: "2", EsgtESI: "5", EsgtHESI: "2", Dcts: "1" },
    { year: "2022", NbPrjt: "2", EsgtESI: "5", EsgtHESI: "2", Dcts: "1" },
  ];
  return (
    <div className="flex w-full py-8 text-center">
      <div className="flex flex-col gap-4 w-full">
        <div className="px-[5%] flex flex-col gap-5">
          <p className="flex left-4 text-black font-bold text-[20px] underline self-start">
            Summary table of ESI research projects
          </p>
          <div>
            <table className="border-collapse border border-[#185B9C]">
              <thead>
                <tr className="bg-[#185B9C] border-[#185B9C]">
                  <th className="w-[600px] h-[50px] border border-white text-white font-bold text-[18px] p-2">
                    Statistics
                  </th>
                  <th className="w-[240px] h-[50px] border border-white text-white font-bold text-[18px] p-2">
                    Situation 2021
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr key={index} className="bg-[#F5F5F5] border-[#185B9C]">
                    <td className="w-[600px] h-[50px] border border-[#185B9C] font-bold">
                      {row.title}
                    </td>
                    <td className="w-[240px] h-[50px] border border-[#185B9C] font-bold">
                      {row.situation}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="px-[5%] flex flex-col gap-5">
          <p className="flex left-4 text-black font-bold text-[20px] underline">
            PRFU Projects
          </p>
          <div>
            <table className="table-auto border-collapse border border-[#185B9C]">
              <thead>
                <tr className="bg-[#185B9C]  border-white">
                  <th className="w-[100px] h-[50px] border border-white font-bold"></th>
                  {data2.map((row, index) => (
                    <th
                      key={index}
                      className="w-[50px] h-[50px] border border-white text-white font-bold"
                    >
                      {row.year}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="bg-[#F5F5F5] border-[#185B9C]">
                  <td className="w-[400px] h-[50px] border border-[#185B9C] font-bold">
                    Nombre de projets
                  </td>
                  {data2.map((row, index) => (
                    <td
                      key={index}
                      className="w-[50px] h-[50px] border border-[#185B9C] font-bold"
                    >
                      {row.NbPrjt}
                    </td>
                  ))}
                </tr>
                <tr className="bg-[#F5F5F5] border-[#185B9C]">
                  <td className="w-[400px] h-[50px] border border-[#185B9C] font-bold">
                    Enseignants ESI impliqués
                  </td>
                  {data2.map((row, index) => (
                    <td
                      key={index}
                      className="w-[50px] h-[50px] border border-[#185B9C] font-bold"
                    >
                      {row.EsgtESI}
                    </td>
                  ))}
                </tr>
                <tr className="bg-[#F5F5F5] border-[#185B9C]">
                  <td className="w-[400px] h-[50px] border border-[#185B9C] font-bold">
                    Enseignants hors ESI impliqués
                  </td>
                  {data2.map((row, index) => (
                    <td
                      key={index}
                      className="w-[50px] h-[50px] border border-[#185B9C] font-bold"
                    >
                      {row.EsgtHESI}
                    </td>
                  ))}
                </tr>
                <tr className="bg-[#F5F5F5] border-[#185B9C]">
                  <td className="w-[400px] h-[50px] border border-[#185B9C] font-bold">
                    Doctorants impliqués
                  </td>
                  {data2.map((row, index) => (
                    <td
                      key={index}
                      className="w-[50px] h-[50px] border border-[#185B9C] font-bold"
                    >
                      {row.Dcts}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-[#F5F5F5] w-full px-[5%]">
          <p className="flex left-4 text-black font-bold text-[20px] underline mt-2">
            Appel à projets
          </p>
          <p className="flex left-4 text-[#185B9C] text-[15px] mt-2 mb-1">
            PNR2:
          </p>
          <div className="mb-4">
            <DownloadButton title="Procédure de soumission" />
          </div>
          <div className="mb-4">
            <DownloadButton title="Caneva de proposition de création d’équipe de recherche mixte" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Researchproject;
