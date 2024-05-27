import React from 'react';
import FAQItem from './FAQItem';
const FAQSection = ({ faqs, sectionTitle, sectionDescription }) => {
  return (
    <section className="py-8">
      <div className="container flex mx-auto px-4 gap-4">
        <div className="w-1/3 pr-4">
          <h4 className="font-poppins text-3xl font-bold mb-2 text-bleunuit">{sectionTitle}</h4>
          <p className="text-lg text-gray-700 mb-8">{sectionDescription}</p>
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
