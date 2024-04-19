import React from 'react';

const Button = ({ title }) => {
  return (
    <div>
      <button className="bg-[#185B9C] text-white font-semibold font-poppins py-2 px-14 rounded flex items-center">
      <span className="mr-2">{title}</span>
      </button>
    </div>
  );
};

export default Button;

