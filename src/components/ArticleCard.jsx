"use client";
import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';

const ArticleCard = ({ title, description, imageUrl, link }) => {
  return (
    <div
      className="bg-cover bg-center rounded-lg shadow-md p-6 flex flex-col justify-between transition-transform transform hover:scale-[1.01] h-80 relative"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="bg-black bg-opacity-65 p-4 rounded-lg flex-1 flex flex-col">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-200 flex-1 overflow-hidden">{description}</p>
      </div>
      <Link href={link}>
        <div className="text-white font-semibold mt-4 flex items-center absolute bottom-8 left-8">
          <span className="mr-2 ">Read More</span>
          <FaChevronRight className="w-6 h-6" />
        </div>
      </Link>
    </div>
  );
};

export default ArticleCard;
