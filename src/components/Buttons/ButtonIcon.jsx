import React from "react";
import { GoArrowRight } from "react-icons/go";

const ButtonIcon = ({ title }) => {
  return (
    <div>
      <button className="bg-blue-900 text-white font-semibold font-poppins py-2 px-2 rounded flex items-center">
        <span className="mr-4">{title}</span>
        <GoArrowRight className="w-6 h-6 text-white ml-4" />
      </button>
    </div>
  );
};

export default ButtonIcon;
