import React from "react";
import { useState } from 'react';

const TrainingDurOrga = ({ duree, semestre1, semestre2, imageS1, imageS2 }) => {
  const [activeSemester, setActiveSemester] = useState('semester1');

  const handleSemesterSelect = (semester) => {
    setActiveSemester(semester);
  };

  return (
    <div className="flex flex-col gap-3">
      <div>
      <h3>
        <span className="text-[#185B9C]">Duration:</span> {duree}
      </h3>
      <h3>
        <span className="text-[#185B9C]">Semester 1:</span> {semestre1}
      </h3>
      <h3>
        <span className="text-[#185B9C]">Semester 2:</span> {semestre2}
      </h3>
      </div>

      {/* Semester selection items */}
      <div className="flex space-x-4">
        <span
          className={`px-2 py-1 rounded-md transition-colors ${
            activeSemester === 'semester1' ? 'bg-[#185B9C] text-white' : 'cursor-pointer hover:bg-gray-200'
          }`}
          onClick={() => handleSemesterSelect('semester1')}
        >
          Semester 1
        </span>
        <span
          className={`px-2 py-1 rounded-md transition-colors ${
            activeSemester === 'semester2' ? 'bg-[#185B9C] text-white' : 'cursor-pointer hover:bg-gray-200'
          }`}
          onClick={() => handleSemesterSelect('semester2')}
        >
          Semester 2
        </span>
      </div>

      {/* Display selected semester image */}
      
      {activeSemester === 'semester1' && <img src={imageS1} alt="Semester 1 Planning" className="w-500 h-600"/>}
      {activeSemester === 'semester2' && <img src={imageS2} alt="Semester 2 Planning" className="w-500 h-600" />}
    </div>
  );
};

export default TrainingDurOrga;