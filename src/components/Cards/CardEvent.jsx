/* eslint-disable @next/next/no-img-element */
import React from "react";

const CardEvent = (props) => {
  return (
    <div className="card w-full min-h-max text-black flex flex-col items-center rounded-xl border-collapse hover:drop-shadow-md hover:scale-[1.02] ease-in-out">
      <div
        className="min-w-full h-36 rounded-t-xl bg-cover"
        style={{ backgroundImage: props.image }}
      >
        {/* <img
          src="/images/Event.png"
          alt="event"
          className="w-full h-full"
          style={{ borderRadius: "12px 12px 0 0" }}
        /> */}
      </div>
      <div className="content flex flex-row p-4 bg-bleu/[.22] gap-6 rounded-b-xl text-left">
        <div className="date flex flex-col items-center">
          <div className="month text-[#3D37F1] font-bold">{props.month}</div>
          <div className="day text-2xl font-bold">{props.day}</div>
        </div>
        <div className="paras flex flex-col gap-2">
          <h2 className="font-bold text-sm">{props.title}</h2>
          <h3 className="text-[#6a6a6a] text-sm">{props.text}</h3>
        </div>
      </div>
    </div>
  );
};

export default CardEvent;
