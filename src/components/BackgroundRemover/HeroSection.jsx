import React from 'react';
import './BackgroundRemover.css';

const HeroSection = () => {
  return (
    <section className="bg-remover-hero">
      <div className="container">
        <div className="bg-remover-hero-content">
          <h1>Free Background Remover Tool</h1>
          <h2>Remove Image Backgrounds in Seconds</h2>
          <p className="hero-description">
            Our AI-powered background remover instantly creates transparent PNG images with perfect edge detection. 
            Ideal for product photos, portraits, and graphics – completely free with no sign-up required.
          </p>
          <div className="hero-features">
            <div className="feature-item">
              <i className="uil uil-check-circle"></i>
              <span>100% Free</span>
            </div>
            <div className="feature-item">
              <i className="uil uil-check-circle"></i>
              <span>No Registration</span>
            </div>
            <div className="feature-item">
              <i className="uil uil-check-circle"></i>
              <span>AI-Powered Precision</span>
            </div>
            <div className="feature-item">
              <i className="uil uil-check-circle"></i>
              <span>Download as PNG</span>
            </div>
          </div>
          <div className="cta-buttons">
            <a href="#bg-remover-tool" className="button primary-button">
              Remove Background Now
              <i className="uil uil-arrow-right"></i>
            </a>
            <a href="#how-it-works" className="outline-button">
              How It Works
              <i className="uil uil-info-circle"></i>
            </a>
          </div>
        </div>
        <div className="bg-remover-hero-image">
          <img 
            src="/images/Background-Remover.webp" 
            alt="Background Remover Tool Preview" 
            width="500" 
            height="400" 
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
