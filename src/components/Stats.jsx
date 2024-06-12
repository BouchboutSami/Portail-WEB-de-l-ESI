import React from "react";

const Stats = (props) => {
  const stat = props.table;
  return (
    <div className="bg-[#185B9C] py-24 sm:py-14">
      <div className="max-w-7xl">
        <dl className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-16 text-center gap-x-0">
          {stat.map((item, index) => (
            <div
              key={index}
              className="mx-auto flex max-w-xs justify-center flex-col gap-y-4"
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
