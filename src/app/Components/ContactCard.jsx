import React from "react";
import { PhoneIcon } from "@heroicons/react/20/solid";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/outline";
const ContactCard = (props) => {
  const contact = props.table;
  
  return (
    <div className="grid grid-cols-3 gap-4">
      {contact.map((item, index) => (
        <div key={index} className="bg-[#185B9C] rounded-md text-white p-4">
          <div className="flex flex-col gap-2 font-semibold">
            <div className="flex items-center gap-2">
              <UserCircleIcon className="h-5" />
              <h3 className="capitalize">{item.username}</h3>
            </div>
            <div className="flex items-center gap-2">
              <PhoneIcon className="h-5" />
              <h3>{item.phone}</h3>
            </div>
            <div className="flex items-center gap-2">
              <EnvelopeIcon className="h-5" />
              <h3>{item.email}</h3>
            </div>
            <div className="flex items-center gap-2">
              <MapPinIcon className="h-5" />
              <h3>{item.adresse}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactCard;