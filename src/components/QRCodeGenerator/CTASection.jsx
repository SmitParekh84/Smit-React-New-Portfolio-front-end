import React from 'react';
import './QRCodeGenerator.css';

const CTASection = () => {
  return (
    <section className="qrcode-cta">
      <div className="container">
        <div className="cta-wrapper">
          <div className="cta-content">
            <h2>Ready to Create Your Free QR Code?</h2>
            <p>Generate permanent, custom QR codes that never expire - no sign-up or subscription required.</p>
            <div className="cta-features">
              <div className="cta-feature">
                <i className="uil uil-check-circle"></i>
                <span>100% Free Forever</span>
              </div>
              <div className="cta-feature">
                <i className="uil uil-check-circle"></i>
                <span>No Registration</span>
              </div>
              <div className="cta-feature">
                <i className="uil uil-check-circle"></i>
                <span>Instant Download</span>
              </div>
            </div>
            <a href="#qr-generator" className="primary-button cta-button">
              Create Your QR Code Now
              <i className="uil uil-arrow-right"></i>
            </a>
          </div>
          <div className="cta-image">
            <img 
              src="/images/qr-code-generator-demo.png" 
              alt="Free QR Code Generator" 
              loading="lazy"
              width="400" 
              height="300"
            />
          </div>
        </div>
        
        <div className="cta-testimonials">
          <h3>Trusted by Thousands of Users</h3>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <div className="testimonial-rating">
                <i className="uil uil-star"></i>
                <i className="uil uil-star"></i>
                <i className="uil uil-star"></i>
                <i className="uil uil-star"></i>
                <i className="uil uil-star"></i>
              </div>
              <p className="testimonial-text">"The best free QR code generator I've found. No annoying sign-ups and the QR codes actually work permanently. Highly recommended!"</p>
              <div className="testimonial-author">
                <span className="author-name">Michael T.</span>
                <span className="author-title">Small Business Owner</span>
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
              <p className="testimonial-text">"This tool saved me so much time. I needed QR codes for our restaurant menu and was able to create professional looking codes in minutes."</p>
              <div className="testimonial-author">
                <span className="author-name">Sarah L.</span>
                <span className="author-title">Restaurant Manager</span>
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
              <p className="testimonial-text">"I love how you can customize the colors to match our branding. The download quality is excellent for print materials."</p>
              <div className="testimonial-author">
                <span className="author-name">David K.</span>
                <span className="author-title">Marketing Director</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;