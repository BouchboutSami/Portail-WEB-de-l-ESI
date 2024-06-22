import React from "react";

const Stats = (props) => {
  const stat = props.table;
  return (
    <div className="bg-[#185B9C] py-24 sm:py-14">
      <div className="max-w-7xl flex justify-center">
        <dl className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-16 text-center justify-center items-center gap-x-[5%]">
          {stat.map((item, index) => (
            <div
              key={index}
              className="mx-auto flex w-fit justify-center items-center flex-col gap-y-4"
            >
              <dt className="text-3xl font-semibold leading-7 text-white font-poppins">
                {item.title}
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                {item.stats}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default Stats;
