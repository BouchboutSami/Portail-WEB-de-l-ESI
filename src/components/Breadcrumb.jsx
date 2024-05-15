"use client";
import React, { useState, useEffect } from "react";
import { LuChevronRight } from "react-icons/lu";
import { usePathname } from "next/navigation";

const Breadcrumb = () => {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path.replace("-"," "));
  pathNames.forEach((element,index) => {
    pathNames[index]=element.replace("-"," ");
  });

  return (
    <div className="w-fit bg-[#F5F5F5] rounded-[35px] px-2">
      <ol className=" flex space-x-2">
        <li className="flex items-center">
          <a
            href="/"
            className="text-black font-normal font-poppins hover:underline"
          >
            <div className="flex flex-row gap-2 items-center">
              Home
              <LuChevronRight className=" h-4" />
            </div>
          </a>
        </li>
        {pathNames.map((path, index) => (
          <li key={index} className="flex items-center cursor-pointer">
            <a
              href={"/" + pathNames.slice(0, index + 1).join("/").replace(" ","-")}
              className="text-black font-normal font-poppins hover:underline"
            >
              {pathNames.length - 1 !== index ? (
                <div className="flex flex-row gap-2 items-center">
                  {path}
                  <LuChevronRight className=" h-4" />
                </div>
              ) : (
                <div>{path}</div>
              )}
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Breadcrumb;
