import React from "react";

const CaseStudySection = () => {
  return (
    <section className="case-study metachecker-container">
      <h2>Meta Tag Optimization Case Study</h2>
      <div className="case-study-content">
        <div className="case-study-text">
          <h3>E-commerce Website Sees 43% Increase in Organic Traffic</h3>
          <p>
            An online retailer was struggling with low visibility in search results despite having quality products. After a comprehensive meta tag optimization:
          </p>
          <ul>
            <li><strong>Actions taken:</strong> Rewrote all product page title tags and meta descriptions, implemented product schema markup, added Open Graph tags</li>
            <li><strong>Results:</strong> 43% increase in organic traffic, 27% higher click-through rates, 18% increase in social media shares</li>
          </ul>
          <p>
            The most significant improvement came from optimizing product title tags with specific model numbers and key features, which made them more relevant to user search queries.
          </p>
        </div>
        <div className="case-study-stats">
          <div className="stat">
            <span className="stat-number">43%</span>
            <span className="stat-label">Increase in<br />Organic Traffic</span>
          </div>
          <div className="stat">
            <span className="stat-number">27%</span>
            <span className="stat-label">Higher<br />Click-Through Rate</span>
          </div>
          <div className="stat">
            <span className="stat-number">18%</span>
            <span className="stat-label">More Social<br />Media Shares</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;