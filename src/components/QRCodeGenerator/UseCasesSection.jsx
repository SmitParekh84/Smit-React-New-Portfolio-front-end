import React from 'react';
import './QRCodeGenerator.css';

const UseCasesSection = () => {
  return (
    <section className="qrcode-uses" id="qr-uses">
      <div className="container">
        <div className="section-header">
          <h2>Popular QR Code Uses</h2>
          <p>QR codes have revolutionized how we connect physical and digital worlds. Discover the most effective ways to use QR codes for your business or personal needs.</p>
        </div>
        
        <div className="uses-grid">
          <div className="use-card">
            <div className="use-icon">
              <i className="uil uil-globe"></i>
            </div>
            <h3>Website URLs</h3>
            <p>Direct customers to your website, landing pages, or social media profiles instantly. Perfect for business cards, flyers, and print advertising.</p>
          </div>
          
          <div className="use-card">
            <div className="use-icon">
              <i className="uil uil-restaurant"></i>
            </div>
            <h3>Restaurant Menus</h3>
            <p>Create touchless digital menus that customers can access by simply scanning a QR code at their table.</p>
          </div>
          
          <div className="use-card">
            <div className="use-icon">
              <i className="uil uil-wifi"></i>
            </div>
            <h3>WiFi Access</h3>
            <p>Let guests connect to your WiFi network without typing passwords. Place QR codes in visible areas for easy access.</p>
          </div>
          
          <div className="use-card">
            <div className="use-icon">
              <i className="uil uil-credit-card"></i>
            </div>
            <h3>Payments</h3>
            <p>Simplify transactions by creating QR codes that link directly to payment platforms or contain payment details.</p>
          </div>
          
          <div className="use-card">
            <div className="use-icon">
              <i className="uil uil-ticket"></i>
            </div>
            <h3>Event Tickets</h3>
            <p>Distribute digital tickets as QR codes for easy verification at events, conferences, or venues.</p>
          </div>
          
          <div className="use-card">
            <div className="use-icon">
              <i className="uil uil-map-marker"></i>
            </div>
            <h3>Location Sharing</h3>
            <p>Share exact geographic locations through QR codes that open in map applications when scanned.</p>
          </div>
          
          <div className="use-card">
            <div className="use-icon">
              <i className="uil uil-user-plus"></i>
            </div>
            <h3>Contact Information</h3>
            <p>Share your contact details instantly with a vCard QR code that can be saved directly to the scanner's phonebook.</p>
          </div>
          
          <div className="use-card">
            <div className="use-icon">
              <i className="uil uil-feedback"></i>
            </div>
            <h3>Feedback Forms</h3>
            <p>Collect customer feedback by linking QR codes to online surveys or feedback forms.</p>
          </div>
        </div>
        
        <div className="use-case-cta">
          <p>Ready to create your own QR code for any of these purposes?</p>
          <a href="#qr-generator" className="secondary-button">Create Your QR Code <i className="uil uil-arrow-right"></i></a>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;