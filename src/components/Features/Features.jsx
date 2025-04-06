import React from "react";
import "./Features.css";

const Features = ({ title, subtitle, features }) => {
  return (
    <section className="features__section" id="features">
      <div className="features__header">
        <h2 className="section__title">{title}</h2>
        <span className="section__subtitle">{subtitle}</span>
      </div>

      <div className="features__container container">
        <div className="features__grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="feature-icon-container">
                <i className={`uil ${feature.icon}`}></i>
              </div>
              <div className="feature-content">
                <h3 className="feature__title">{feature.title}</h3>
                <p className="feature__description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
