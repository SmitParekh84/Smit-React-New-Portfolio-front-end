import React from 'react';
import './QRCodeGenerator.css';

const HeroSection = () => {
  return (
    <section className="qrcode-hero">
      <div className="container">
        <div className="qrcode-hero-content">
          <h1>Free QR Code Generator Tool</h1>
          <h2>Create Custom, Lifetime QR Codes Instantly</h2>
          <p className="hero-description">
            Generate permanent QR codes that never expire with our 100% free tool. 
            Create professional QR codes for websites, contact information, WiFi networks, 
            and more without any watermarks or subscriptions.
          </p>
          <div className="hero-features">
            <div className="feature-item">
              <i className="uil uil-check-circle"></i>
              <span>Permanent & Free</span>
            </div>
            <div className="feature-item">
              <i className="uil uil-check-circle"></i>
              <span>No Login Required</span>
            </div>
            <div className="feature-item">
              <i className="uil uil-check-circle"></i>
              <span>High-Quality QR Codes</span>
            </div>
            <div className="feature-item">
              <i className="uil uil-check-circle"></i>
              <span>Fully Customizable</span>
            </div>
          </div>
          <div className="  cta-buttons">
            <a href="#qr-generator" className="button">
              Generate QR Code Now
              <i className="uil uil-arrow-right"></i>
            </a>
            <a href="#qr-types" className="outline-button">
              Learn More
              <i className="uil uil-info-circle"></i>
            </a>
          </div>
        </div>
        <div className="qrcode-hero-image">
          <img 
            src="/images/qr-code-generator-hero.png" 
            alt="QR Code Generator Tool Preview" 
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