import React from "react";

const TrainingObjectives = ({ objectives }) => {
  return (
    <div>
      <ul className="list-disc pl-4">
        {objectives.map((objective, index) => (
          <li key={index}>{objective}</li>
        ))}
      </ul>
    </div>
  );
};

export default TrainingObjectives;
