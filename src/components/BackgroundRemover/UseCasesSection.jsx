import React from 'react';
import './BackgroundRemover.css';

const UseCasesSection = () => {
  return (
    <section className="bg-remover-use-cases" id="use-cases">
      <div className="container">
        <div className="section-header">
          <h2>Popular Uses for Background Removal</h2>
          <p>Discover the many creative and professional applications of transparent images created with our free background remover tool.</p>
        </div>
        
        <div className="uses-grid">
          <div className="use-card">
            <div className="use-icon">
              <i className="uil uil-store"></i>
            </div>
            <h3>E-commerce Product Photos</h3>
            <p>Create clean, professional product images with transparent backgrounds for your online store, improving product presentation and increasing sales.</p>
          </div>
          
          <div className="use-card">
            <div className="use-icon">
              <i className="uil uil-social-distancing"></i>
            </div>
            <h3>Professional Headshots</h3>
            <p>Remove backgrounds from portraits for LinkedIn profiles, company websites, and professional social media accounts.</p>
          </div>
          
          <div className="use-card">
            <div className="use-icon">
              <i className="uil uil-image-plus"></i>
            </div>
            <h3>Photo Composites</h3>
            <p>Extract subjects from images to create collages, composite artwork, or place subjects into new scenes or backgrounds.</p>
          </div>
          
          <div className="use-card">
            <div className="use-icon">
              <i className="uil uil-designer-tool"></i>
            </div>
            <h3>Graphic Design</h3>
            <p>Create marketing materials, banners, and social media posts by combining transparent images with custom backgrounds or text.</p>
          </div>
          
          <div className="use-card">
            <div className="use-icon">
              <i className="uil uil-presentation-play"></i>
            </div>
            <h3>Presentations</h3>
            <p>Enhance your presentations by incorporating transparent images that blend seamlessly with your slide designs.</p>
          </div>
          
          <div className="use-card">
            <div className="use-icon">
              <i className="uil uil-print"></i>
            </div>
            <h3>Print Materials</h3>
            <p>Create professional brochures, flyers, and other print materials using transparent images that can overlay any design element.</p>
          </div>
        </div>
        
        <div className="use-case-cta">
          <div className="use-case-cta-content">
            <h3>Ready to Transform Your Images?</h3>
            <p>Try our free background remover tool for your creative and professional projects today.</p>
          </div>
          <a href="#bg-remover-tool" className="secondary-button">Remove Background Now <i className="uil uil-arrow-right"></i></a>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
