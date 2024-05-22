import React from "react";
import { RxCaretRight } from "react-icons/rx";

const EventDiscoverArtcile = ({ imageUrl, title, description }) => {
  return (
    <div className="flex flex-row justify-between pb-4 ">
        <div className=" flex flex-col items-center">
          <img src={imageUrl} alt={title} className="w-[400px] h-auto rounded-md" />
        </div>
         <div className="w-1/2 flex flex-col">
            <p className="font-black text-lg  text-black">{title}</p>
            <p className="text-base font-normal text-black">{description}</p>
        </div>
    </div>
  );
};

export default EventDiscoverArtcile;
