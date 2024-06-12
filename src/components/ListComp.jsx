import React from 'react';
import HeadingUnderlined from './HeadingUnderlined';
const ListComp = ({ heading,paragraph, points }) => {
  return (
    <div>
      <HeadingUnderlined text={heading} />
      <div className="text-black font-light font-poppins text-[18px] mb-4 mt-4">
        <p>{paragraph}</p>
        <ul className="list-disc pl-5">
          {points.map((point, index) => (
            <li key={index} className="marker-color">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListComp;
