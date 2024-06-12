import React from 'react';
import FAQItem from './FAQItem';
const FAQ = ({ faqs}) => {
  return (
    <section className="p-8">
        <div className="space-y-4 mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
    </section>
  );
};

export default FAQ;
