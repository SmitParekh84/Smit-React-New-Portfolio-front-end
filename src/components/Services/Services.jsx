import React, { useState, useEffect } from "react";
import { servicesData } from "../../data/data"; // Adjust the import path as necessary
import "./Services.css";

const Services = () => {
  const [activeModalIndex, setActiveModalIndex] = useState(null);
  const [animatedItems, setAnimatedItems] = useState([]);
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    // Staggered animation effect for service cards
    const timeout = setTimeout(() => {
      const items = Array.from({ length: servicesData.length }, (_, i) => i);
      setAnimatedItems(items);
    }, 300);
    
    return () => clearTimeout(timeout);
  }, []);

  const openModal = (index) => {
    setActiveModalIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setActiveModalIndex(null);
    document.body.style.overflow = "";
  };
  
  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">
        Tailored Solutions for Your Needs
      </span>

      <div className="services__container container grid">
        {servicesData.map((service, index) => (
          <div 
            className={`services__content ${animatedItems.includes(index) ? 'services__content--animated' : ''}`} 
            key={index}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="services__card-header">
              <i className={`${service.icon} services__icon`}></i>
              <h3 className="services__title">{service.title}</h3>
            </div>
            <p className="services__brief">{service.brief || service.description[0]}</p>
            <span
              className="button button--flex button--small button--link services__button"
              onClick={() => openModal(index)}
            >
              View more
              <i className="uil uil-arrow-right button__icon"></i>
            </span>

            {/* Modal */}
            {activeModalIndex === index && (
              <div className="services__modal active-modal" onClick={closeModal}>
                <div className="services__modal-content" onClick={(e) => e.stopPropagation()}>
                  <div className="services__modal-header">
                    <i className={`${service.icon} services__modal-header-icon`}></i>
                    <h4 className="services__modal-title">{service.title}</h4>
                    <i
                      className="uil uil-times services__modal-close"
                      onClick={closeModal}
                    ></i>
                  </div>

                  <ul className="services__modal-services grid">
                    {service.description.map((desc, i) => (
                      <li className="services__modal-service" key={i}>
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p>{desc}</p>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="services__modal-footer">
                    <button className="button button--small button--flex" onClick={closeModal}>
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
