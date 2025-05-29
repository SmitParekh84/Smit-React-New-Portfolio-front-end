import React from 'react';
import './BackgroundRemover.css';

const HowItWorksSection = () => {
  return (
    <section className="bg-remover-how-it-works" id="how-it-works">
      <div className="container">
        <div className="section-header">
          <h2>How Our Background Remover Works</h2>
          <p>Remove backgrounds from your images in just a few simple steps with our powerful AI technology.</p>
        </div>
        
        <div className="how-it-works-container">
          <div className="steps-timeline">
            <div className="step-item">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Upload Your Image</h3>
                <p>Click the upload area to select an image from your device, or simply drag and drop your file. We support JPG, PNG, and WEBP formats up to 10MB.</p>
              </div>
            </div>
            
            <div className="step-item">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>AI Processing</h3>
                <p>Our advanced AI algorithm analyzes your image, identifies the foreground subject, and separates it from the background with exceptional precision.</p>
              </div>
            </div>
            
            <div className="step-item">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Review Results</h3>
                <p>In seconds, you'll see your image with the background removed. The result appears with a transparent background, ready for download.</p>
              </div>
            </div>
            
            <div className="step-item">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Download Your Image</h3>
                <p>Download your transparent PNG image instantly with a single click. No watermarks, no quality loss, and absolutely free.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="how-it-works-tips">
          <h3>Pro Tips for Best Results:</h3>
          <ul>
            <li><i className="uil uil-check-circle"></i> <strong>Use Good Lighting:</strong> Images with good lighting produce cleaner results.</li>
            <li><i className="uil uil-check-circle"></i> <strong>Clear Subject:</strong> Make sure the main subject is clearly visible against the background.</li>
            <li><i className="uil uil-check-circle"></i> <strong>Higher Resolution:</strong> Better quality input images typically result in better background removal.</li>
            <li><i className="uil uil-check-circle"></i> <strong>Avoid Extreme Blur:</strong> Very blurry images may affect the edge detection accuracy.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
