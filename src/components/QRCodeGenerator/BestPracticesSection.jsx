import React from 'react';
import './QRCodeGenerator.css';

const BestPracticesSection = () => {
  return (
    <section className="qrcode-best-practices">
      <div className="container">
        <div className="section-header">
          <h2>QR Code Best Practices</h2>
          <p>Follow these guidelines to create effective QR codes that deliver the best possible scanning experience for your users.</p>
        </div>
        
        <div className="best-practices-grid">
          <div className="practice-card">
            <div className="practice-icon">
              <i className="uil uil-crop-alt"></i>
            </div>
            <h3>Optimal Size</h3>
            <p>Make your QR code at least 1.2 inches (3 cm) in size for printed materials. For billboards or distant scanning, scale proportionally based on expected viewing distance.</p>
          </div>
          
          <div className="practice-card">
            <div className="practice-icon">
              <i className="uil uil-palette"></i>
            </div>
            <h3>Contrast Matters</h3>
            <p>Ensure high contrast between your QR code and its background. Dark modules on a light background work best. Avoid low-contrast color combinations.</p>
          </div>
          
          <div className="practice-card">
            <div className="practice-icon">
              <i className="uil uil-compress-lines"></i>
            </div>
            <h3>Quiet Zone</h3>
            <p>Always leave a white border (quiet zone) around your QR code that's at least 4 modules wide. This helps scanners identify the code boundaries.</p>
          </div>
          
          <div className="practice-card">
            <div className="practice-icon">
              <i className="uil uil-image-check"></i>
            </div>
            <h3>Test Before Printing</h3>
            <p>Always test your QR code with multiple devices and scanning apps before publishing or printing it, especially if you've customized colors or added logos.</p>
          </div>
          
          <div className="practice-card">
            <div className="practice-icon">
              <i className="uil uil-arrow-to-bottom"></i>
            </div>
            <h3>Content Destination</h3>
            <p>Make sure your QR code links to mobile-friendly content that loads quickly. Users should immediately understand the value of scanning your code.</p>
          </div>
          
          <div className="practice-card">
            <div className="practice-icon">
              <i className="uil uil-text-fields"></i>
            </div>
            <h3>Add Context</h3>
            <p>Include a text instruction or call-to-action near your QR code to let people know what they'll get by scanning it (e.g., "Scan for menu" or "Scan to visit our website").</p>
          </div>
          
          <div className="practice-card">
            <div className="practice-icon">
              <i className="uil uil-cell"></i>
            </div>
            <h3>Error Correction</h3>
            <p>When creating custom QR codes, use a higher error correction level (L, M, Q or H) especially if adding logos or modifying the appearance.</p>
          </div>
          
          <div className="practice-card">
            <div className="practice-icon">
              <i className="uil uil-image"></i>
            </div>
            <h3>Surface Matters</h3>
            <p>Avoid placing QR codes on highly reflective surfaces, curved objects, or materials that might wrinkle. These can distort the code and make scanning difficult.</p>
          </div>
        </div>
        
        <div className="practices-cta">
          <div className="practices-cta-content">
            <h3>Ready to Apply These Best Practices?</h3>
            <p>Create your own professional QR code using our free tool that follows all these guidelines automatically.</p>
          </div>
          <a href="#qr-generator" className="secondary-button">Create QR Code <i className="uil uil-arrow-right"></i></a>
        </div>
      </div>
    </section>
  );
};

export default BestPracticesSection;