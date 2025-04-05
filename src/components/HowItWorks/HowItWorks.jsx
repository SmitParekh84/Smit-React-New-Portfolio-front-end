import React from "react";
import "./HowItWorks.css";

const HowItWorks = ({ title, subtitle, steps }) => {
  return (
    <section className="workflow section" id="how-it-works">
      <h2 className="section__title">{title}</h2>
      <span className="section__subtitle">{subtitle}</span>

      <div className="workflow__container container">
        <div className="workflow__steps">
          {steps.map((step, index) => (
            <div className="workflow__step" key={index}>
              <div className="workflow__step-number">{index + 1}</div>
              <div className="workflow__step-content">
                <h3 className="workflow__step-title">{step.title}</h3>
                <p className="workflow__step-description">{step.description}</p>
                {step.image && (
                  <img src={step.image} alt={step.title} className="workflow__step-image" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
