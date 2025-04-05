import React, { useEffect, useRef } from "react";
import "./HowItWorks.css";

const HowItWorks = ({ title, subtitle, steps }) => {
  const stepsRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('workflow__step--visible');
          observer.unobserve(entry.target); // Stop observing once it's visible
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    // Observe all step elements
    stepsRef.current.forEach(step => {
      if (step) observer.observe(step);
    });

    return () => {
      if (observer) {
        stepsRef.current.forEach(step => {
          if (step) observer.unobserve(step);
        });
      }
    };
  }, [steps]);

  // Ensure stepsRef array has the right length
  stepsRef.current = stepsRef.current.slice(0, steps.length);

  return (
    <section className="workflow section" id="how-it-works">
      <h2 className="section__title">{title}</h2>
      <span className="section__subtitle">{subtitle}</span>

      <div className="workflow__container container">
        <div className="workflow__steps">
          {steps.map((step, index) => (
            <div 
              className="workflow__step" 
              key={index} 
              ref={el => stepsRef.current[index] = el}
            >
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
