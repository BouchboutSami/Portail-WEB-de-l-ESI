import React from "react";
import NextEvents from "./LandingPage/NextEvents";

const UpcomingEvents = () => {
  return (
    <div className="w-full flex flex-col font-poppins justify-center items-center min-h-max xl:px-[15%] lg:px-[15%] px-[10%] pt-8 pb-4">
      <h1 className="text-noir font-bold text-3xl mb-4">Upcoming Events</h1>
      <h2 className="mb-10 text-noir text-xl">
        Discover our major upcoming events
      </h2>
      <NextEvents/>
    </div>
  );
};

export default UpcomingEvents;

