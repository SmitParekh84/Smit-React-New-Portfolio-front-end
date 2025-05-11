import React from 'react';
import './QRCodeGenerator.css';

const QRTypesSection = () => {
  return (
    <section className="qrcode-types" id="qr-types">
      <div className="container">
        <div className="section-header">
          <h2>Types of QR Codes You Can Create</h2>
          <p>Our free QR Code generator supports multiple types of QR codes to suit your specific needs. All QR codes are permanent and never expire.</p>
        </div>
        
        <div className="types-grid">
          <div className="type-card">
            <div className="type-icon">
              <i className="uil uil-link"></i>
            </div>
            <h3>URL QR Codes</h3>
            <p>Direct users to any webpage when scanned. Perfect for marketing materials, business cards, and product packaging.</p>
            <div className="type-features">
              <span><i className="uil uil-check"></i> Direct website traffic</span>
              <span><i className="uil uil-check"></i> Campaign tracking</span>
              <span><i className="uil uil-check"></i> Product information</span>
            </div>
          </div>
          
          <div className="type-card">
            <div className="type-icon">
              <i className="uil uil-text"></i>
            </div>
            <h3>Text QR Codes</h3>
            <p>Encode any text message that appears when scanned. Useful for short messages, instructions, or descriptions.</p>
            <div className="type-features">
              <span><i className="uil uil-check"></i> Simple messages</span>
              <span><i className="uil uil-check"></i> Product instructions</span>
              <span><i className="uil uil-check"></i> Event details</span>
            </div>
          </div>
          
          <div className="type-card">
            <div className="type-icon">
              <i className="uil uil-envelope"></i>
            </div>
            <h3>Email QR Codes</h3>
            <p>Opens the user's email client with your address pre-filled. Great for customer service or contact information.</p>
            <div className="type-features">
              <span><i className="uil uil-check"></i> Contact forms</span>
              <span><i className="uil uil-check"></i> Customer feedback</span>
              <span><i className="uil uil-check"></i> Business cards</span>
            </div>
          </div>
          
          <div className="type-card">
            <div className="type-icon">
              <i className="uil uil-phone"></i>
            </div>
            <h3>Phone QR Codes</h3>
            <p>Initiates a call to your phone number when scanned. Ideal for service businesses or support centers.</p>
            <div className="type-features">
              <span><i className="uil uil-check"></i> Customer service</span>
              <span><i className="uil uil-check"></i> Appointment booking</span>
              <span><i className="uil uil-check"></i> Sales inquiries</span>
            </div>
          </div>
          
          <div className="type-card">
            <div className="type-icon">
              <i className="uil uil-comment-message"></i>
            </div>
            <h3>SMS QR Codes</h3>
            <p>Opens a text message with pre-filled number and optional message text. Great for contests or text-to-win campaigns.</p>
            <div className="type-features">
              <span><i className="uil uil-check"></i> Text campaigns</span>
              <span><i className="uil uil-check"></i> Opt-in programs</span>
              <span><i className="uil uil-check"></i> Promotions</span>
            </div>
          </div>
          
          <div className="type-card">
            <div className="type-icon">
              <i className="uil uil-wifi"></i>
            </div>
            <h3>WiFi QR Codes</h3>
            <p>Automatically connects devices to your WiFi network when scanned. No need to type complex passwords.</p>
            <div className="type-features">
              <span><i className="uil uil-check"></i> Guest networks</span>
              <span><i className="uil uil-check"></i> Office WiFi</span>
              <span><i className="uil uil-check"></i> Event connectivity</span>
            </div>
          </div>
          
          <div className="type-card">
            <div className="type-icon">
              <i className="uil uil-user"></i>
            </div>
            <h3>Contact (vCard) QR Codes</h3>
            <p>Shares your complete contact information that can be saved directly to the scanner's phonebook.</p>
            <div className="type-features">
              <span><i className="uil uil-check"></i> Business contacts</span>
              <span><i className="uil uil-check"></i> Networking events</span>
              <span><i className="uil uil-check"></i> Digital business cards</span>
            </div>
          </div>
          
          <div className="type-card">
            <div className="type-icon">
              <i className="uil uil-map-marker"></i>
            </div>
            <h3>Location QR Codes</h3>
            <p>Opens a map with your specific location pinned when scanned. Perfect for helping customers find your business.</p>
            <div className="type-features">
              <span><i className="uil uil-check"></i> Store locations</span>
              <span><i className="uil uil-check"></i> Event venues</span>
              <span><i className="uil uil-check"></i> Navigation assistance</span>
            </div>
          </div>
        </div>
        
        <div className="types-note">
          <p><strong>Note:</strong> All QR codes generated with our tool are static QR codes that never expire. They will continue to work indefinitely without any subscription or maintenance fees.</p>
        </div>
      </div>
    </section>
  );
};

export default QRTypesSection;