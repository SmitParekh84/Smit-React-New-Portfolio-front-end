import React from "react";
import { Link } from "react-router-dom";
import "./CTASection.css";

const CTASection = ({ 
  title, 
  subtitle, 
  buttonText, 
  buttonLink, 
  buttonIcon = "uil-message", 
  background = "var(--first-color-second)"
}) => {
  return (
    <section className="cta section">
      <div className="cta__bg" style={{ background }}>
        <div className="cta__container container">
          <div className="cta__data">
            <h2 className="cta__title">{title}</h2>
            <p className="cta__description">{subtitle}</p>
            <Link to={buttonLink} className="button button--flex button--white">
              {buttonText}
              <i className={`uil ${buttonIcon} cta__icon button__icon`}></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
