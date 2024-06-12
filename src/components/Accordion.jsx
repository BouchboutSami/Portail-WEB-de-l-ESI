import React, { useState } from 'react';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-[800px] flex flex-col gap-1">
      <div
        className="border-2 border-[#185B9C] shadow-md rounded-md flex justify-between items-center p-4 cursor-pointer"
        onClick={toggleAccordion}
      >
        <h2 className="text-lg font-regular">{title}</h2>
        <svg
          className={`w-6 h-6 transition-transform transform ${
            isOpen ? 'rotate-180' : ''
          } text-[#185B9C]`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          style={{
            transitionDuration: '0.5s', 
            transitionProperty: 'transform', 
          }}
        >
          <path
            fillRule="evenodd"
            d="M10 18a1 1 0 0 1-.707-.293l-8-8a1 1 0 0 1 1.414-1.414L10 15.586l6.293-6.293a1 1 0 1 1 1.414 1.414l-7.999 7.999A1 1 0 0 1 10 18z"
          />
        </svg>
      </div>
      
      {isOpen && (
        <div className="p-4 bg-[#F5F5F5] rounded-lg">{children}</div>
      )}
    </div>
  );
};

export default Accordion;
