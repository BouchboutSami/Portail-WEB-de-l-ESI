import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import { HiMapPin } from "react-icons/hi2";
import { FaCircleUser } from "react-icons/fa6";
const ContactCard = (props) => {
  const contact = props.table;
  
  return (
    <div className="grid grid-cols-3 gap-4">
      {contact.map((item, index) => (
        <div key={index} className="bg-[#185B9C] rounded-md text-white p-4">
          <div className="flex flex-col gap-2 font-semibold">
            <div className="flex items-center gap-2">
              <FaCircleUser className="h-5" />
              <h3 className="capitalize">{item.username}</h3>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="h-5" />
              <h3>{item.phone}</h3>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="h-5" />
              <h3>{item.email}</h3>
            </div>
            <div className="flex items-center gap-2">
              <HiMapPin className="h-5" />
              <h3>{item.adresse}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactCard;