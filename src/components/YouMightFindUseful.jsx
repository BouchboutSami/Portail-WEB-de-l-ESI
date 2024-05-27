import React from "react";
import { IoIosLink } from "react-icons/io";

const YouMightFindUseful = ({ links }) => {
  return (
    <div className="w-full bg-[#F5F5F5] flex flex-col gap-8 pl-40 pb-8">
      <h1 className="font-poppins font-bold mt-8 text-[28px] text-black hover:text-[#185B9C]">
        You might find useful
      </h1>
      <div className="flex mt-2 flex-col">
        {Object.entries(links).map(([label, link], index) => (
          <div key={label} className="font-poppins font-bold text-bleu">
            <a href={link} style={{ display: "flex", alignItems: "center" }}>
              <IoIosLink className="mr-2 mt-0.5" />
              {label}
            </a>
            {index !== Object.keys(links).length - 1 && <br />} {/* Add a line break if not the last link */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouMightFindUseful;
