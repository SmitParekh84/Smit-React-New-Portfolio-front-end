import React from 'react';
import './BackgroundRemover.css';

const CTASection = () => {
  return (
    <section className="bg-remover-cta">
      <div className="container">
        <div className="cta-wrapper">
          <div className="cta-content">
            <h2>Ready to Remove Image Backgrounds?</h2>
            <p>Experience our free, high-quality background removal tool - no registration, no watermarks, no limitations.</p>
            <div className="cta-features">
              <div className="cta-feature">
                <i className="uil uil-check-circle"></i>
                <span>AI-Powered Accuracy</span>
              </div>
              <div className="cta-feature">
                <i className="uil uil-check-circle"></i>
                <span>Instant Results</span>
              </div>
              <div className="cta-feature">
                <i className="uil uil-check-circle"></i>
                <span>No Sign-up</span>
              </div>
            </div>
            <a href="#bg-remover-tool" className="primary-button cta-button">
              Remove Background Now
              <i className="uil uil-arrow-right"></i>
            </a>
          </div>
          <div className="cta-image">
            <img 
              src="/images/Background-Remover.png" 
              alt="Background Remover Tool" 
              loading="lazy"
              width="400" 
              height="300"
            />
          </div>
        </div>
        
        <div className="cta-testimonials">
          <h3>What Users Say About Our Tool</h3>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <div className="testimonial-rating">
                <i className="uil uil-star"></i>
                <i className="uil uil-star"></i>
                <i className="uil uil-star"></i>
                <i className="uil uil-star"></i>
                <i className="uil uil-star"></i>
              </div>
              <p className="testimonial-text">"This is by far the best free background remover I've found. It handles complex edges like hair perfectly and doesn't require any sign-up."</p>
              <div className="testimonial-author">
                <span className="author-name">Jennifer R.</span>
                <span className="author-title">Freelance Designer</span>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-rating">
                <i className="uil uil-star"></i>
                <i className="uil uil-star"></i>
                <i className="uil uil-star"></i>
                <i className="uil uil-star"></i>
                <i className="uil uil-star"></i>
              </div>
              <p className="testimonial-text">"I needed transparent product images for my online store and this tool saved me hours of work. The results are incredibly professional."</p>
              <div className="testimonial-author">
                <span className="author-name">Mark T.</span>
                <span className="author-title">E-commerce Owner</span>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-rating">
                <i className="uil uil-star"></i>
                <i className="uil uil-star"></i>
                <i className="uil uil-star"></i>
                <i className="uil uil-star"></i>
                <i className="uil uil-star-half-alt"></i>
              </div>
              <p className="testimonial-text">"I use this tool for all my social media graphics. It's so fast and accurate that I've stopped using my paid software subscription."</p>
              <div className="testimonial-author">
                <span className="author-name">Sarah L.</span>
                <span className="author-title">Social Media Manager</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
