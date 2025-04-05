import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = ({ 
  title, 
  subtitle, 
  primaryButtonText, 
  primaryButtonLink, 
  secondaryButtonText,
  secondaryButtonLink,
  secondaryButtonIcon,
  backgroundImage,
  showLogo = false,
  logoSrc
}) => {
  const heroStyle = backgroundImage ? {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  } : {};

  return (
    <section className="hero__section" id="hero">
      <div className="hero__container" style={heroStyle}>
        {showLogo && logoSrc && (
          <div className="hero__logo">
            <img src={logoSrc} alt="Logo" className="hero__logo-img" />
          </div>
        )}
        
        <h1 className="hero__title">{title}</h1>
        <p className="hero__subtitle">{subtitle}</p>
        
        <div className="hero__buttons">
          {primaryButtonLink && (primaryButtonLink.startsWith("#") ? (
            <a href={primaryButtonLink} className="button button--flex">
              {primaryButtonText}
              <i className="uil uil-arrow-down button__icon"></i>
            </a>
          ) : (
            <Link to={primaryButtonLink} className="button button--flex">
              {primaryButtonText}
              <i className="uil uil-arrow-right button__icon"></i>
            </Link>
          ))}
          
          {secondaryButtonText && (
            <Link to={secondaryButtonLink} className="button button--flex button--white">
              {secondaryButtonText}
              <i className={`uil ${secondaryButtonIcon} button__icon`}></i>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
