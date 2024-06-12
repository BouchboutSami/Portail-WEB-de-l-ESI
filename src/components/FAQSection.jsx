import React from 'react';
import FAQItem from './FAQItem';

const FAQSection = () => {
  const faqs = [
    {
      question: "Quel est l'avantage d'une formation d'ingénieur à l'école par rapport à un master à l'université ?",
      answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ommodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore edeserunt mollit anim id est laborum. ",
    },
    {
      question: "Quel est l'avantage d'une formation d'ingénieur à l'école par rapport à un master à l'université ? ",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ommodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore edeserunt mollit anim id est laborum. ",
    },
    {
      question: "Quel est l'avantage d'une formation d'ingénieur à l'école par rapport à un master à l'université ? ",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ommodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore edeserunt mollit anim id est laborum. ",
    },
    {
      question: "Quel est l'avantage d'une formation d'ingénieur à l'école par rapport à un master à l'université ?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ommodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore edeserunt mollit anim id est laborum. ",
    },
  ];

  return (
    <section className="py-8">
      <div className="container flex mx-auto px-4 gap-4">
        <div className="w-1/3 pr-4">
          <h4 className="font-poppins text-3xl font-bold  mb-2  text-bleunuit ">COMMON QUESTIONS STUDENTS ARE ASKING US</h4>
          <p className="text-lg text-gray-700 mb-8">Questions regarding our academic programs offered at ESI</p>
          <div className="mb-8">
            <button className="px-6 py-3 bg-[#185B9C] text-white rounded-lg hover:bg-[#154b7a] shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
              View More
            </button>
          </div>
        </div>
        <div className="w-2/3 space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
    
  );
};

export default FAQSection;
