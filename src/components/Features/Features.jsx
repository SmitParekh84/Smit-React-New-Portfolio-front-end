import React from "react";
import "./Features.css";

const Features = ({ title, subtitle, features }) => {
  return (
    <section className="features__section" id="features">
      <h2 className="section__title">{title}</h2>
      <span className="section__subtitle">{subtitle}</span>

      <div className="features__container container grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <i className={`uil ${feature.icon}`}></i>
            <h3 className="feature__title">{feature.title}</h3>
            <p className="feature__description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
