import React from 'react';
import './QRCodeGenerator.css';

const ComparisonSection = () => {
  return (
    <section className="qrcode-comparison">
      <div className="container">
        <div className="section-header">
          <h2>Free vs. Paid QR Code Generators</h2>
          <p>Understand the differences between our free permanent QR code generator and paid subscription-based services.</p>
        </div>
        
        <div className="comparison-table-container">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Our Free QR Code Generator</th>
                <th>Typical Paid QR Services</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cost</td>
                <td><span className="feature-check"><i className="uil uil-check-circle"></i> 100% Free Forever</span></td>
                <td>Monthly/Annual Subscription</td>
              </tr>
              <tr>
                <td>QR Code Expiration</td>
                <td><span className="feature-check"><i className="uil uil-check-circle"></i> Never Expires</span></td>
                <td>Often expires if subscription ends</td>
              </tr>
              <tr>
                <td>Account Required</td>
                <td><span className="feature-check"><i className="uil uil-check-circle"></i> No Sign-up Needed</span></td>
                <td>Usually requires account creation</td>
              </tr>
              <tr>
                <td>Watermarks</td>
                <td><span className="feature-check"><i className="uil uil-check-circle"></i> No Watermarks</span></td>
                <td>Free tiers often include branding/watermarks</td>
              </tr>
              <tr>
                <td>High-Resolution Download</td>
                <td><span className="feature-check"><i className="uil uil-check-circle"></i> Available</span></td>
                <td>Often limited in free plans</td>
              </tr>
              <tr>
                <td>Custom Colors</td>
                <td><span className="feature-check"><i className="uil uil-check-circle"></i> Full Color Customization</span></td>
                <td>Limited in free plans</td>
              </tr>
              <tr>
                <td>Transparent Background</td>
                <td><span className="feature-check"><i className="uil uil-check-circle"></i> Supported</span></td>
                <td>Often a premium feature</td>
              </tr>
              <tr>
                <td>QR Code Types</td>
                <td><span className="feature-check"><i className="uil uil-check-circle"></i> All Standard Types</span></td>
                <td>Some types restricted to premium</td>
              </tr>
              <tr>
                <td>Dynamic QR Codes</td>
                <td>Not supported (static codes only)</td>
                <td>Available in paid plans</td>
              </tr>
              <tr>
                <td>Analytics & Tracking</td>
                <td>Not included</td>
                <td>Available in paid plans</td>
              </tr>
              <tr>
                <td>Bulk Generation</td>
                <td>Not supported</td>
                <td>Available in premium plans</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="comparison-note">
          <h3>When to Choose Our Free QR Code Generator:</h3>
          <ul>
            <li><i className="uil uil-check"></i> You need permanent, reliable QR codes that never expire</li>
            <li><i className="uil uil-check"></i> You want professional, customizable QR codes without watermarks</li>
            <li><i className="uil uil-check"></i> You don't need real-time analytics or dynamic content changes</li>
            <li><i className="uil uil-check"></i> You want to avoid ongoing subscription costs</li>
          </ul>
          
          <h3>When You Might Need a Paid Service:</h3>
          <ul>
            <li><i className="uil uil-arrow-right"></i> You require scan analytics and tracking capabilities</li>
            <li><i className="uil uil-arrow-right"></i> You need to change the QR code destination without reprinting</li>
            <li><i className="uil uil-arrow-right"></i> You need to generate hundreds of unique QR codes in bulk</li>
            <li><i className="uil uil-arrow-right"></i> You want advanced design features like logos inside QR codes</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;