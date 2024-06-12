import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300 py-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-semibold text-[#185B9C]">{question}</h3>
        {isOpen ? (
          <FaChevronUp className="text-[#185B9C]" />
        ) : (
          <FaChevronDown className="text-[#185B9C]" />
        )}
      </div>
      {isOpen && <p className="mt-2 text-gray-700">{answer}</p>}
    </div>
  );
};

export default FAQItem;