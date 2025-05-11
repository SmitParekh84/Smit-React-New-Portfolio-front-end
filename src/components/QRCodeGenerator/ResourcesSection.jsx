import React from 'react';
import './QRCodeGenerator.css';

const ResourcesSection = () => {
  return (
    <section className="qrcode-resources">
      <div className="container">
        <div className="section-header">
          <h2>QR Code Resources & Learning Center</h2>
          <p>Enhance your knowledge about QR codes with these helpful resources and expert tips.</p>
        </div>
        
        <div className="resources-grid">
          <div className="resource-card">
            <div className="resource-icon">
              <i className="uil uil-book-alt"></i>
            </div>
            <h3>QR Code Standards</h3>
            <p>Understanding the ISO/IEC 18004 standard that defines QR code specifications helps ensure your codes meet global requirements.</p>
            <a href="#" className="resource-link">Learn More</a>
          </div>
          
          <div className="resource-card">
            <div className="resource-icon">
              <i className="uil uil-window"></i>
            </div>
            <h3>Design Guidelines</h3>
            <p>Follow professional design guidelines to create QR codes that are both visually appealing and technically functional.</p>
            <a href="#" className="resource-link">Learn More</a>
          </div>
          
          <div className="resource-card">
            <div className="resource-icon">
              <i className="uil uil-chart-growth"></i>
            </div>
            <h3>Marketing Strategies</h3>
            <p>Discover effective ways to incorporate QR codes into your marketing campaigns and measure their success.</p>
            <a href="#" className="resource-link">Learn More</a>
          </div>
          
          <div className="resource-card">
            <div className="resource-icon">
              <i className="uil uil-shield-question"></i>
            </div>
            <h3>Security Considerations</h3>
            <p>Learn about QR code security risks and how to create safe, trustworthy QR codes for your audience.</p>
            <a href="#" className="resource-link">Learn More</a>
          </div>
        </div>
        
        <div className="resources-articles">
          <h3>Popular QR Code Articles</h3>
          <div className="article-list">
            <a href="#" className="article-item">
              <span className="article-title">How to Use QR Codes for Event Marketing</span>
              <i className="uil uil-arrow-right"></i>
            </a>
            <a href="#" className="article-item">
              <span className="article-title">QR Codes vs Barcodes: Understanding the Differences</span>
              <i className="uil uil-arrow-right"></i>
            </a>
            <a href="#" className="article-item">
              <span className="article-title">10 Creative Ways to Use QR Codes in Retail</span>
              <i className="uil uil-arrow-right"></i>
            </a>
            <a href="#" className="article-item">
              <span className="article-title">QR Codes for Contactless Payments: A Complete Guide</span>
              <i className="uil uil-arrow-right"></i>
            </a>
            <a href="#" className="article-item">
              <span className="article-title">How to Track QR Code Performance in Marketing Campaigns</span>
              <i className="uil uil-arrow-right"></i>
            </a>
            <a href="#" className="article-item">
              <span className="article-title">QR Code Design: Balancing Aesthetics and Scannability</span>
              <i className="uil uil-arrow-right"></i>
            </a>
          </div>
        </div>
        
        <div className="resources-tip">
          <div className="tip-icon">
            <i className="uil uil-lightbulb-alt"></i>
          </div>
          <div className="tip-content">
            <h3>Expert Tip</h3>
            <p>When using QR codes in print materials, always test your final printed product to ensure the QR code scans properly. Factors like ink absorption, printing quality, and material texture can affect scannability.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;