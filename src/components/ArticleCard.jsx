import React from "react";
import { RxCaretRight } from "react-icons/rx";

const ArticleCard = ({ imageUrl, title, description, link, linkText }) => {
  return (
    <div className="flex flex-col gap-1 max-w-[950px]">
      <div className="flex flex-row justify-center pb-4 gap-4">
        <div className="pr-4 w-[250px] h-[150px] relative ">
          <img src={imageUrl} alt={title} className="
          object-cover w-full h-full absolute inset-0" />
        </div>
        <div className="w-1/2 flex flex-col text-left">
          <p className="font-black text-xl text-black first-letter:uppercase">{title}</p>
          <p className="text-sm font-light mt-2  text-black first-letter:uppercase overflow-hidden line-clamp-3">
            {description}
          </p>
          <div className="flex mt-2 text-sm ">
            <a
              href={link}
              className="flex font-poppins font-semibold text-amber-800 hover:underline"
            >
              {linkText} <RxCaretRight className="mt-1" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-2 mb-2 mx-24 w-full h-[1px] bg-gray-400 opacity-60"></div>
    </div>
  );
        <div className="flex flex-row justify-center pb-4">
            <div className=" pr-4">
                <img src={imageUrl} alt={title} className="w-[300px] h-auto" />
            </div>
            <div className="w-1/2 flex flex-col">
                <p className="font-black text-lg mt-2 text-black">{title}</p>
                <p className="text-base font-normal text-black">{description}</p>
                <div className="flex mt-2">
                    <a href={link} className="flex font-poppins font-bold text-amber-800 hover:underline">
                {linkText} <RxCaretRight className="mt-1" />
                </a>
                </div>
            </div>
        </div>
        <div className=" mt-2 mb-2 w-full h-[1px] bg-gray-400 opacity-60"></div>
    </div>
  )
};

export default ArticleCard;
