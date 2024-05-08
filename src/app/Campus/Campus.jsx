import CardEvent from "@/components/Cards/CardEvent";
import Stats from "@/components/Stats";
import React from "react";

const table = [
  { title: "Student", stats: "5000+" },
  { title: "Organisations", stats: "12" },
  { title: "Event per year", stats: "40+" },
];

const Campus = () => {
  return (
    <div className="w-full flex flex-col py-24 items-center">
      <p className="text-center px-[10%] font-medium text-2xl mb-10">
        We are a community that celebrates deep intellectual curiosity,
        creativity and individuality. And ESI has long enjoyed a reputation for
        students who are at the same time happy and fulfilled.
      </p>
      <div className="w-full h-96 bg-[url(/assets/CampusMain.png)] bg-cover bg-no-repeat bg-center" />
      <Stats table={table} />
      <h2 className="my-10 font-bold text-3xl">Student life</h2>
      <div className="flex flex-row items-center justify-evenly w-full cursor-pointer mb-10">
        <div className="bg-[url(/assets/CampusMain.png)] bg-cover bg-no-repeat bg-center w-1/5 h-48" />
        <div className="bg-[url(/assets/CampusMain.png)] bg-cover bg-no-repeat bg-center w-1/5 h-48" />
        <div className="bg-[url(/assets/CampusMain.png)] bg-cover bg-no-repeat bg-center w-1/5 h-48" />
      </div>
      <div className="w-full flex flex-col py-10 bg-grisbg items-center">
        <h2 className="mb-10 font-bold text-3xl">Upcoming events</h2>
        <div className="flex flex-row items-center justify-evenly w-full cursor-pointer">
          <CardEvent />
          <CardEvent />
          <CardEvent />
        </div>
      </div>
    </div>
  );
};

export default Campus;
