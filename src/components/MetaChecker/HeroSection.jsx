import React from "react";

const HeroSection = () => {
  return (
    <section className="hero-section metachecker-container">
      <div className="hero-content">
        <h1>Free Meta Tag Checker Tool</h1>
        <p className="hero-subtitle">
          Instantly analyze and optimize your website's meta tags, Open Graph, and Twitter Cards to improve SEO rankings and social media presence.
        </p>
        <div className="hero-features">
          <div className="feature-item">
            <span className="feature-icon">✓</span>
            <span>100% Free Tool</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">✓</span>
            <span>Instant Analysis</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">✓</span>
            <span>No Sign-up Required</span>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/Meta-Checker-Image.webp" alt="Meta Tag Checker Tool Preview" loading="eager" width="500" height="300" />
      </div>
    </section>
  );
};

export default HeroSection;