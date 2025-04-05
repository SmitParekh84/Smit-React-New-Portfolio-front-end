import React, { useState } from "react";
import "./FAQ.css";

const FAQ = ({ title = "Frequently Asked Questions", subtitle = "Most common questions", faqData = [], toolName }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq section" id="faq">
      <h2 className="section__title">{title || `${toolName} FAQs`}</h2>
      <span className="section__subtitle">{subtitle}</span>

      <div className="faq__container container">
        {Array.isArray(faqData) && faqData.length > 0 ? (
          faqData.map((faq, index) => (
            <div 
              className={`faq__item ${openIndex === index ? 'faq__active' : ''}`} 
              key={index}
              onClick={() => toggleAccordion(index)}
            >
              <div className="faq__header">
                <h3 className="faq__title">{faq.question}</h3>
                <i className={`uil ${openIndex === index ? 'uil-minus' : 'uil-plus'} faq__icon`}></i>
              </div>

              <div className="faq__content">
                <p className="faq__description">{faq.answer}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="faq__empty">
            <p>No FAQs available at the moment.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQ;
