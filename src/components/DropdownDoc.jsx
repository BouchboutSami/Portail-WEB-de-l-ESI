import React, { useState } from 'react';
import { FaRegFolderOpen } from 'react-icons/fa';
import { RxCaretDown } from "react-icons/rx";
import { RxCaretUp } from "react-icons/rx";

function DropdownDoc({ text, menuItems }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative my-[5%]">
      <div className="flex items-center">
        <button
          onClick={toggleDropdown}
          className="text-black bg-white border border-gray-400 shadow-sm relative z-10"
          type="button"
        >
          <div className="flex items-center">
            <div className="bg-[#185B9C] w-12 h-12 flex justify-center items-center text-white">
              <FaRegFolderOpen size={24} />
            </div>
            <div className="p-2 ml-2 flex items-center">
              <span className="font-poppins text-[18px]">{text}</span>
            </div>
            <div className="p-2 ml-2 flex items-center">
              {isOpen ? <RxCaretUp size={24}/> : <RxCaretDown size={24}/>}
            </div>
          </div>
        </button>

        {/* Dropdown menu */}
        {isOpen && (
          <div className="absolute top-full left-0 z-50 w-full">
            <div className="font-poppins font-medium text-[18px] bg-gray-200 text-black border border-gray-400 shadow-sm">
              <ul className="text-sm text-gray-700">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="block px-4 py-2 hover:bg-gray-300"
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DropdownDoc;
