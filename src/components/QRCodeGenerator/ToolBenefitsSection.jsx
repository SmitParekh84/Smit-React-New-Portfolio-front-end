import React from 'react';
import './QRCodeGenerator.css';

const ToolBenefitsSection = () => {
  return (
    <section className="qrcode-benefits">
      <div className="container">
        <div className="section-header">
          <h2>Why Choose Our Free QR Code Generator</h2>
          <p>Discover the advantages that make our free QR code generator the preferred choice for businesses and individuals alike.</p>
        </div>
        
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon">
              <i className="uil uil-shield-check"></i>
            </div>
            <h3>Truly Free, No Hidden Costs</h3>
            <p>Unlike many services that claim to be "free" but limit essential features, our QR code generator is 100% free with no hidden charges, subscriptions, or premium upgrades required.</p>
          </div>
          
          <div className="benefit-card">
            <div className="benefit-icon">
              <i className="uil uil-sync"></i>
            </div>
            <h3>Permanent QR Codes</h3>
            <p>Once generated, our QR codes last forever. They won't expire or stop working, even years after creation, making them ideal for long-term marketing materials.</p>
          </div>
          
          <div className="benefit-card">
            <div className="benefit-icon">
              <i className="uil uil-bolt"></i>
            </div>
            <h3>No Registration Required</h3>
            <p>Generate QR codes instantly without creating an account, verifying email, or providing personal information. No login barriers means you can create QR codes in seconds.</p>
          </div>
          
          <div className="benefit-card">
            <div className="benefit-icon">
              <i className="uil uil-palette"></i>
            </div>
            <h3>Fully Customizable</h3>
            <p>Personalize your QR codes with custom colors and sizes to match your brand identity. Our tool offers advanced customization options typically found only in paid services.</p>
          </div>
          
          <div className="benefit-card">
            <div className="benefit-icon">
              <i className="uil uil-check-circle"></i>
            </div>
            <h3>High-Quality Output</h3>
            <p>Download your QR codes in high-resolution PNG format, ensuring they scan perfectly even when printed on large materials or viewed from a distance.</p>
          </div>
          
          <div className="benefit-card">
            <div className="benefit-icon">
              <i className="uil uil-browser"></i>
            </div>
            <h3>Works Everywhere</h3>
            <p>Our QR codes are compatible with all modern smartphones and QR scanning apps, ensuring maximum reach and accessibility for your audience.</p>
          </div>
          
          <div className="benefit-card">
            <div className="benefit-icon">
              <i className="uil uil-lock"></i>
            </div>
            <h3>Privacy Focused</h3>
            <p>We don't store your QR code data on our servers or track your usage. Your information remains private and secure throughout the generation process.</p>
          </div>
          
          <div className="benefit-card">
            <div className="benefit-icon">
              <i className="uil uil-clock"></i>
            </div>
            <h3>Instant Generation</h3>
            <p>Create QR codes in just seconds with our efficient, user-friendly interface designed to save you time and effort.</p>
          </div>
        </div>
        
        <div className="benefits-cta">
          <div className="benefits-cta-content">
            <h3>Experience These Benefits Now</h3>
            <p>Try our free QR code generator today and see why thousands of users choose our tool for their QR code needs.</p>
          </div>
          <a href="#qr-generator" className="primary-button">Create Your QR Code <i className="uil uil-qrcode-scan"></i></a>
        </div>
      </div>
    </section>
  );
};

export default ToolBenefitsSection;