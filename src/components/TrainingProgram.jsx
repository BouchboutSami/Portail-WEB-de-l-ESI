import React from "react";

const TrainingProgram = ({ pdfPath }) => {
  const openPDF = () => {
    window.open(pdfPath, '_blank');
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <h2 className="font-semibold">The program of the training Offer is available here:</h2>
      <button
        className="bg-[#185B9C] hover:bg-blue-900 text-white  font-bold py-2 px-4 rounded shadow-md "
        onClick={openPDF}
      >
        Download
      </button>
    </div>
  );
};

export default TrainingProgram;
