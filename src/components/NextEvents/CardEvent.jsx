/* eslint-disable @next/next/no-img-element */
import React from "react";

const CardEvent = () => {
  return (
    <div className="card w-full min-h-max text-black flex flex-col items-center rounded-xl border-collapse">
      <div className="min-w-full h-36 rounded-t-xl bg-[url(/images/Event2.png)]">
        {/* <img
          src="/images/Event.png"
          alt="event"
          className="w-full h-full"
          style={{ borderRadius: "12px 12px 0 0" }}
        /> */}
      </div>
      <div className="content flex flex-row p-4 bg-bleu/[.22] gap-6 rounded-b-xl text-left">
        <div className="date flex flex-col items-center">
          <div className="month text-[#3D37F1] font-bold">APR</div>
          <div className="day text-2xl font-bold">14</div>
        </div>
        <div className="paras flex flex-col gap-2">
          <h2 className="font-bold text-sm">
            Algerian Doctoral Conference on Computer Science ADCCS’2024
          </h2>
          <h3 className="text-[#6a6a6a] text-sm">
            We’ll get you directly seated and inside for you to enjoy the show.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CardEvent;
