import React from "react";
import { RxCaretRight } from "react-icons/rx";

const DescriptionText = ({ imageUrl, title, description, link, right }) => {
  return (
    <div className="flex items-center pb-4">
      {right ? (
        <div className="w-1/2 flex flex-col items-center pr-4">
          <img src={imageUrl} alt={title} className="w-[400px] h-auto" />
          <p className="font-black text-lg mt-2 text-center text-black">{title}</p>
        </div>
      ) : (
        <div className="w-1/2 flex flex-col pl-44">
            <p className="text-base font-normal text-black">{description}</p>
          <div className="flex mt-2">
            <a href={link} className="flex font-poppins font-bold text-bleu">
              See More <RxCaretRight className="mt-1" />
            </a>
          </div>
        </div>
      )}
      {right ? (
        <div className="w-1/2 flex flex-col items-start pr-44">
          <div>
            <p className="text-base font-normal text-black">{description}</p>
          </div>
          <div className="w-full flex mt-2 justify-end">
            <a href={link} className="flex font-poppins font-bold text-bleu">
              See More <RxCaretRight className="mt-1" />
            </a>
          </div>
        </div>
      ) : (
        <div className="w-1/2 flex flex-col items-center pr-4">
          <img src={imageUrl} alt={title} className="w-[400px] h-auto" />
          <p className="font-black text-lg mt-2 text-center">{title}</p>
        </div>
      )}
    </div>
  );
};

export default DescriptionText;
