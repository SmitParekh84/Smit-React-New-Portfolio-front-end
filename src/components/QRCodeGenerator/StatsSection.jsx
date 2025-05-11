import React from 'react';
import './QRCodeGenerator.css';

const StatsSection = () => {
  return (
    <section className="qrcode-stats">
      <div className="container">
        <div className="section-header">
          <h2>QR Code Usage Statistics</h2>
          <p>See why QR codes have become an essential marketing tool for businesses worldwide in 2025.</p>
        </div>
        
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">89<span>%</span></div>
            <div className="stat-description">of smartphone users have scanned a QR code at least once</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-number">1.34<span>B</span></div>
            <div className="stat-description">QR code coupons will be redeemed by mobile users in 2025</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-number">45<span>%</span></div>
            <div className="stat-description">increase in QR code usage since 2022</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-number">75<span>%</span></div>
            <div className="stat-description">of restaurants now use QR codes for digital menus</div>
          </div>
        </div>
        
        <div className="stats-chart">
          <h3>QR Code Adoption by Industry (2025)</h3>
          <div className="chart-container">
            <div className="chart-bar-container">
              <div className="chart-label">Retail</div>
              <div className="chart-bar" style={{ width: '92%' }}>92%</div>
            </div>
            <div className="chart-bar-container">
              <div className="chart-label">Hospitality</div>
              <div className="chart-bar" style={{ width: '88%' }}>88%</div>
            </div>
            <div className="chart-bar-container">
              <div className="chart-label">Healthcare</div>
              <div className="chart-bar" style={{ width: '67%' }}>67%</div>
            </div>
            <div className="chart-bar-container">
              <div className="chart-label">Education</div>
              <div className="chart-bar" style={{ width: '71%' }}>71%</div>
            </div>
            <div className="chart-bar-container">
              <div className="chart-label">Manufacturing</div>
              <div className="chart-bar" style={{ width: '59%' }}>59%</div>
            </div>
            <div className="chart-bar-container">
              <div className="chart-label">Financial Services</div>
              <div className="chart-bar" style={{ width: '78%' }}>78%</div>
            </div>
          </div>
        </div>
        
        <div className="stats-info">
          <div className="stats-info-content">
            <h3>Why QR Codes Are More Important Than Ever</h3>
            <p>QR code usage has skyrocketed since 2020, with businesses and consumers embracing this touchless technology for everything from payments to information sharing. As smartphone capabilities improve and consumer familiarity increases, QR codes have become an essential bridge between physical and digital experiences.</p>
            <p>Our free QR code generator helps businesses of all sizes take advantage of this powerful technology without any cost or technical barriers.</p>
          </div>
          <a href="#qr-generator" className="secondary-button">Create Free QR Code <i className="uil uil-arrow-right"></i></a>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;