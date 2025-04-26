import React from "react";

const HowToSection = () => {
  return (
    <section className="how-to-section metachecker-container">
      <h2>How to Optimize Your Meta Tags: Step-by-Step Guide</h2>
      <div className="steps-container">
        <div className="step">
          <div className="step-number">1</div>
          <div className="step-content">
            <h3>Analyze Your Current Meta Tags</h3>
            <p>Use our Meta Tag Checker to scan your website and identify existing meta tags, their quality, and any missing elements.</p>
            <div className="step-tip">
              <strong>Pro Tip:</strong> Check your competitors' meta tags to identify opportunities for improvement.
            </div>
          </div>
        </div>
        <div className="step">
          <div className="step-number">2</div>
          <div className="step-content">
            <h3>Research Relevant Keywords</h3>
            <p>Conduct keyword research to identify the most relevant terms for your content. Focus on search intent and user queries.</p>
            <div className="step-tip">
              <strong>Tools to use:</strong> Google Keyword Planner, SEMrush, Ahrefs
            </div>
          </div>
        </div>
        <div className="step">
          <div className="step-number">3</div>
          <div className="step-content">
            <h3>Craft Compelling Title Tags</h3>
            <p>Create unique, descriptive title tags that include your primary keyword near the beginning. Keep them under 60 characters.</p>
            <div className="step-tip">
              <strong>Formula:</strong> Primary Keyword | Secondary Keyword | Brand Name
            </div>
          </div>
        </div>
        <div className="step">
          <div className="step-number">4</div>
          <div className="step-content">
            <h3>Write Effective Meta Descriptions</h3>
            <p>Create persuasive meta descriptions that summarize your content and include a call-to-action. Keep them under 160 characters.</p>
            <div className="step-tip">
              <strong>Elements to include:</strong> Value proposition, keywords, CTA
            </div>
          </div>
        </div>
        <div className="step">
          <div className="step-number">5</div>
          <div className="step-content">
            <h3>Optimize Social Media Tags</h3>
            <p>Implement Open Graph and Twitter Card tags to control how your content appears when shared on social media platforms.</p>
            <div className="step-tip">
              <strong>Image dimensions:</strong> Facebook (1200×630px), Twitter (1200×675px)
            </div>
          </div>
        </div>
        <div className="step">
          <div className="step-number">6</div>
          <div className="step-content">
            <h3>Implement Schema Markup</h3>
            <p>Add structured data markup to provide additional context about your content to search engines and enable rich snippets.</p>
            <div className="step-tip">
              <strong>Common types:</strong> Article, Product, Review, FAQ, How-to, LocalBusiness
            </div>
          </div>
        </div>
        <div className="step">
          <div className="step-number">7</div>
          <div className="step-content">
            <h3>Test and Monitor Performance</h3>
            <p>Regularly test your meta tags using our Meta Tag Checker and monitor their performance in search results and social shares.</p>
            <div className="step-tip">
              <strong>Metrics to track:</strong> Click-through rates, bounce rates, social engagement
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToSection;