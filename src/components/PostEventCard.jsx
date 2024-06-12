"use client"; 
import React, { useState } from "react";
import { FaClock, FaMapMarkerAlt} from "react-icons/fa";
import { BiSolidBellRing , BiSolidBell} from "react-icons/bi";


const PostEventCard = ({ date, month, title, time, location }) => {
  const [isRinging, setIsRinging] = useState(false);

  return (
    <div className="w-[300px] p-4 bg-white shadow-lg hover:shadow-xl rounded-2xl flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <div className="text-center">
          <p className="text-2xl font-bold">{date}</p>
          <p className="text-sm">{month.toUpperCase()}</p>
          <div className="border-b border-2 px-6 rounded-4xl border-[#185B9C] my-2"></div>
        </div>
        <div className="flex flex-col gap-1 items-start text-xs text-gray-600">
          <div className="flex items-center gap-1">
            <FaClock />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaMapMarkerAlt />
            <span>{location}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <p className="font-semibold text-md">{title}</p>
        <div
          className="flex justify-end "
          onMouseEnter={() => setIsRinging(true)}
          onMouseLeave={() => setIsRinging(false)}
        >
          <div className="flex flex-row gap-3 bg-[#185B9C] hover:bg-[#002E5F] text-white text-[14px] items-center rounded px-4 py-2 w-fit  ">
            <h1>Set Reminder</h1>
            {isRinging ? <BiSolidBellRing className="h-5" /> : <BiSolidBell className="h-5"/>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostEventCard;
