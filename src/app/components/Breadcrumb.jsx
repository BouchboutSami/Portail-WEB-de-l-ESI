'use client'; 
import React, { useState, useEffect } from 'react';
import { ChevronRightIcon} from "@heroicons/react/outline";
const Breadcrumb = () => {
    const breadcrumbData = [
        { label: 'Home', path: '/' },
        { label: 'Page', path: '/Page' },
        { label: 'SousPage', path: '/SousPage' },
        { label: 'SSousPage', path: '/SSousPage' }
      ];


  return (
    <div className='w-fit bg-[#F5F5F5] rounded-[35px] px-2'>
      <ol className=" flex space-x-2">
        {breadcrumbData.map((breadcrumb, index) => (
          <li key={index} className="flex items-center">
            <a href={breadcrumb.path} className="text-black font-semibold font-poppins hover:underline">  
              { ((breadcrumbData.length - 1) !== index ) ? (
                <div className='flex flex-row gap-2 items-center'>
                    {breadcrumb.label} 
                    <ChevronRightIcon className=' h-4'/>
                </div>
              ) : (
                <div>
                {breadcrumb.label}
                </div>
              )

              }
            </a>
            {index < breadcrumb.length - 1 && (
              <svg
                className="fill-current w-3 h-3 mx-2 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M9.293 4.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H4a1 1 0 010-2h10.586L9.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Breadcrumb;
