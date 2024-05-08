import React from "react";
import { PhoneIcon } from "@heroicons/react/20/solid";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/outline";
const ExternalContactCard = () => {
  return (
    <div className="inline-flex p-4 bg-[#185B9C] font-poppins font-medium text-white text-[16px] rounded-md m-2">
      <div className="flex flex-col gap-4 pb-8 px-2">
        <h1 className="text-[22px] font-poppins font-bold text-white pb-1">
          Service des stages
        </h1>
        <div className="flex flex-row gap-4 items-center">
          <UserCircleIcon className="h-5" />
          <h1 className=" first-letter:uppercase"> M. Amar BALLA </h1>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <PhoneIcon className="h-5" />
          <h1 className=" first-letter:uppercase">+1012 3456 789</h1>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <EnvelopeIcon className="h-5" />
          <h1 className=" first-letter:uppercase"> s_stages@esi.dz</h1>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <MapPinIcon className="h-5" />
          <h1 className=" first-letter:uppercase">DE</h1>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <GlobeAltIcon className="h-5" />
          <h1 className=" first-letter:uppercase">
            https://sites.google.com/esi.dz/de-servicestages
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ExternalContactCard;
