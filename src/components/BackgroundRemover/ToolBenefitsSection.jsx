import React from 'react';
import './BackgroundRemover.css';

const ToolBenefitsSection = () => {
  return (
    <section className="bg-remover-benefits" id="benefits">
      <div className="container">
        <div className="section-header">
          <h2>Why Choose Our Free Background Remover</h2>
          <p>Experience the advantages of our AI-powered tool designed to make background removal simple, accurate, and efficient.</p>
        </div>
        
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon">
              <i className="uil uil-bolt"></i>
            </div>
            <h3>Lightning-Fast Results</h3>
            <p>Get your transparent images in seconds, not minutes. Our optimized AI processes images quickly without sacrificing quality.</p>
          </div>
          
          <div className="benefit-card">
            <div className="benefit-icon">
              <i className="uil uil-robot"></i>
            </div>
            <h3>Advanced AI Technology</h3>
            <p>Powered by cutting-edge machine learning algorithms that accurately detect and separate subjects from backgrounds with precision.</p>
          </div>
          
          <div className="benefit-card">
            <div className="benefit-icon">
              <i className="uil uil-shield-check"></i>
            </div>
            <h3>100% Free to Use</h3>
            <p>Unlike many tools that limit features in free versions, our background remover provides full functionality at no cost whatsoever.</p>
          </div>
          
          <div className="benefit-card">
            <div className="benefit-icon">
              <i className="uil uil-user-circle"></i>
            </div>
            <h3>No Sign-up Required</h3>
            <p>Start removing backgrounds immediately without creating accounts or providing personal information. No email required.</p>
          </div>
          
          <div className="benefit-card">
            <div className="benefit-icon">
              <i className="uil uil-image"></i>
            </div>
            <h3>Perfect Edge Detection</h3>
            <p>Our algorithm excels at handling complex edges like hair, fur, and transparent objects that challenge other background removers.</p>
          </div>
          
          <div className="benefit-card">
            <div className="benefit-icon">
              <i className="uil uil-download-alt"></i>
            </div>
            <h3>Instant Downloads</h3>
            <p>Download your transparent PNG images immediately after processing, with no watermarks, quality restrictions, or hidden fees.</p>
          </div>
        </div>
        
        <div className="benefits-cta">
          <div className="benefits-cta-content">
            <h3>Ready to Remove Backgrounds?</h3>
            <p>Try our free tool now and see the difference in quality and ease of use.</p>
          </div>
          <a href="#bg-remover-tool" className="primary-button">Remove Background Now <i className="uil uil-arrow-up-right"></i></a>
        </div>
      </div>
    </section>
  );
};

export default ToolBenefitsSection;
