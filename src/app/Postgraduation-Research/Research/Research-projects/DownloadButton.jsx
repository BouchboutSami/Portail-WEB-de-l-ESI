import React from "react";
import { FaArrowDown } from "react-icons/fa";

const DownloadButton = ({ title }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/path/to/your/document.pdf"; // Remplacez par le chemin réel de votre fichier
    link.download = "document.pdf"; // Remplacez par le nom de fichier que vous souhaitez
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="flex items-center bg-white text-[#185B9C] py-2 px-4 rounded "
    >
      <div className="bg-[#185B9C] p-2 rounded">
        <FaArrowDown className=" h-5 w-5 text-white" />
      </div>
      <span className="ml-2 font-poppins  text-[15px] text-black">{title}</span>
    </button>
  );
};

export default DownloadButton;
