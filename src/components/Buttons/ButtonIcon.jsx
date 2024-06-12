import React from "react";
import { GoArrowRight } from "react-icons/go";

const ButtonIcon = ({ title, link }) => {
  return (
    <div>
      <a href={link}>
        <button className="bg-blue-900 text-white font-semibold font-poppins py-2 px-2 rounded flex items-center">
          <span className="mr-4 pl-2">{title}</span>
          <GoArrowRight className="w-6 h-6 text-white pr-2" />
        </button>
      </a>
    </div>
  );
};

export default ButtonIcon;
