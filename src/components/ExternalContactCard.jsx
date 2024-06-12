import React from "react";
import { FaPhone, FaEnvelope, FaMapPin, FaGlobe, FaUserCircle } from "react-icons/fa";

const ExternalContactCard = ({ title, contactName, phone, email, officeHours, address, website }) => {
  return (
    <div className="w-full lg:w-1/4 p-4 bg-[#185B9C] text-white rounded-md shadow-lg">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="space-y-4">
        {contactName && (
          <div className="flex items-start">
            <FaUserCircle className="h-6 w-6 mr-3" />
              <span className="block">{contactName}</span>
          </div>
        )}
        {phone && (
          <div className="flex items-start">
            <FaPhone className="h-6 w-6 mr-3" />
              <span className="block">{phone}</span>
          </div>
        )}
        {email && (
          <div className="flex items-start">
            <FaEnvelope className="h-6 w-6 mr-3" />
              <span className="block">{email}</span>
          </div>
        )}
        {officeHours && (
          <div className="flex items-start">
            <FaMapPin className="h-6 w-6 mr-3" />
              <span className="block">{officeHours}</span>
          </div>
        )}
        {address && (
          <div className="flex items-start">
            <FaMapPin className="h-6 w-6 mr-3" />
            <div>
              <span className="font-semibold">Address:</span>
              <span className="block">{address}</span>
            </div>
          </div>
        )}
        {website && (
          <div className="flex items-start">
            <FaGlobe className="h-6 w-6 mr-3" />
              <span className="block">
                <a href={website} target="_blank" rel="noopener noreferrer" className="text-white underline">
                  {website}
                </a>
              </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExternalContactCard;
