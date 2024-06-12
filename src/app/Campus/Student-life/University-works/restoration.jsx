import React from 'react';

const Restoration = () => {
  return (
    <div className="bg-[#F5F5F5] flex flex-col items-center w-full p-10">
      <h2 className="font-bold text-3xl mb-10">Restoration</h2>
      <h3 className="font-bold text-2xl mb-5 ml-5 text-bleu">Menu</h3>
        <div className="bg-bleu text-white font-bold p-2 inline-block ml-10 mb-5">
          Week of 03/03/2024
        </div>
        <div className="w-full flex justify-center">
          <ul className="list-none text-center">
            {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'].map((day) => (
              <li key={day} className="mb-2 flex justify-between">
                <span className="font-semibold text-bold text-xl text-bleu">{day}</span>
                <span className="ml-5">Loubia + Green salad + apple</span>
              </li>
            ))}
          </ul>
        </div>
    </div>
  );
}

export default Restoration;
