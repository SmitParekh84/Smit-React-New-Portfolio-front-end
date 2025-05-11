import React from 'react';
import './QRCodeGenerator.css';

const HowToSection = () => {
  return (
    <section className="qrcode-how-to">
      <div className="container">
        <div className="section-header">
          <h2>How to Create and Use QR Codes</h2>
          <p>Follow these simple steps to generate professional QR codes and implement them effectively in your marketing materials.</p>
        </div>
        
        <div className="how-to-container">
          <div className="how-to-timeline">
            <div className="timeline-item">
              <div className="timeline-number">1</div>
              <div className="timeline-content">
                <h3>Choose Your QR Code Type</h3>
                <p>Select the type of QR code that best suits your needs (URL, text, email, phone, SMS, WiFi, or contact information).</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-number">2</div>
              <div className="timeline-content">
                <h3>Enter Your Content</h3>
                <p>Add the information you want your QR code to contain. This could be a website URL, contact details, or any other supported content type.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-number">3</div>
              <div className="timeline-content">
                <h3>Customize Your QR Code</h3>
                <p>Personalize your QR code by changing colors, size, and other visual elements to match your brand identity.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-number">4</div>
              <div className="timeline-content">
                <h3>Test Your QR Code</h3>
                <p>Before using your QR code, test it with different devices and scanning apps to ensure it works correctly.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-number">5</div>
              <div className="timeline-content">
                <h3>Download and Implement</h3>
                <p>Download your QR code as a high-resolution PNG image and implement it in your marketing materials, products, or digital content.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-number">6</div>
              <div className="timeline-content">
                <h3>Track and Analyze (Optional)</h3>
                <p>Consider using URL shorteners with analytics to track scans and measure the effectiveness of your QR code campaigns.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="how-to-tips">
          <h3>Pro Tips for QR Code Success:</h3>
          <ul>
            <li><i className="uil uil-check-circle"></i> <strong>Add a Call-to-Action:</strong> Tell people why they should scan your QR code.</li>
            <li><i className="uil uil-check-circle"></i> <strong>Test in Different Lighting:</strong> Ensure your QR code can be scanned in various lighting conditions.</li>
            <li><i className="uil uil-check-circle"></i> <strong>Consider Placement:</strong> Place QR codes where they can be easily scanned (avoid hard-to-reach locations).</li>
            <li><i className="uil uil-check-circle"></i> <strong>Update Content as Needed:</strong> While the QR code remains the same, you can update the destination URL if using a URL shortener.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HowToSection;