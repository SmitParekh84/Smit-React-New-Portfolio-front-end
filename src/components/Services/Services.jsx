import React, { useState, useEffect } from "react";
import { servicesData } from "../../data/data";
import ServiceModal from "./ServiceModal";
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
  };

  const closeModal = () => {
    setActiveModalIndex(null);
  };
  
  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Get the currently selected service or null if none selected
  const activeService = activeModalIndex !== null ? servicesData[activeModalIndex] : null;

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
              <div className="services__icon-wrap">
                <i className={`${service.icon} services__icon`}></i>
              </div>
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
          </div>
        ))}
      </div>

      {/* Modal component moved outside the service cards loop */}
      {activeService && (
        <ServiceModal
          isOpen={activeModalIndex !== null}
          service={activeService}
          onClose={closeModal}
        />
      )}
    </section>
  );
};

export default Services;
