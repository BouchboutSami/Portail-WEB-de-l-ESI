import React from "react";

const TrainingProfiles = ({ profiles }) => {
  return (
    <div>
      <ul className="list-disc pl-4">
        {profiles.map((profile, index) => (
          <li key={index}>{profile}</li>
        ))}
      </ul>
    </div>
  );
};

export default TrainingProfiles;
