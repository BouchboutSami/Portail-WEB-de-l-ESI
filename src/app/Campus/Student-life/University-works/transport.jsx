import FAQItem from '@/components/FAQItem';
import React, { useState } from 'react';

const faqtransport = [
  {
    question: "How can I get the transport card?",
    answer: "Each student can get the transport card if they pay 1510 in the progres website at the beginning of the year.",
  },
  {
    question: "What does this card cover?",
    answer: "It covers the bus, the tramway and the metro",
  },
];

const Transport = () => {
  const [open, setOpen] = useState(null);

  const toggleAnswer = (index) => {
    if (open === index) {
      setOpen(null);
    } else {
      setOpen(index);
    }
  };

  return (
    <div className="flex flex-col items-center w-full p-10">
      <h2 className="font-bold text-3xl mb-10">Transport</h2>
      <div className="bg-white shadow-md rounded-lg w-full p-5 flex">
        <div className="w-2/3 p-5">
          <h3 className="font-bold text-xl mb-5">Q&A</h3>
          {faqtransport.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
        <div className="w-1/3 p-5">
          <img src="/assets/bus.png" alt="MyBus" className="rounded-lg shadow-md" />
          <div className="text-center mt-2">MyBus</div>
        </div>
      </div>
    </div>
  );
};

export default Transport;
