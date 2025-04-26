import React from "react";

const BestPracticesSection = () => {
  return (
    <section className="best-practices metachecker-container">
      <h2>Meta Tag Best Practices for 2025</h2>
      <div className="practices-grid">
        <div className="practice-card">
          <h3>1. Unique, Descriptive Titles</h3>
          <p>Create unique title tags for each page that accurately describe the content. Include primary keywords near the beginning.</p>
          <div className="example">
            <strong>Example:</strong> <code>&lt;title&gt;Professional SEO Services | Website Optimization&lt;/title&gt;</code>
          </div>
        </div>
        <div className="practice-card">
          <h3>2. Compelling Meta Descriptions</h3>
          <p>Write compelling meta descriptions that include a call-to-action and your target keywords to improve click-through rates.</p>
          <div className="example">
            <strong>Example:</strong> <code>&lt;meta name="description" content="Boost your rankings with our professional SEO services. Get a free website audit today and start climbing the search results."&gt;</code>
          </div>
        </div>
        <div className="practice-card">
          <h3>3. Implement Structured Data</h3>
          <p>Use structured data markup to create rich snippets that stand out in search results and provide additional context to search engines.</p>
          <div className="example">
            <strong>Benefits:</strong> Enhanced visibility, higher CTR, better indexing
          </div>
        </div>
        <div className="practice-card">
          <h3>4. Optimize Open Graph Tags</h3>
          <p>Implement complete Open Graph markup to control how your content appears when shared on social platforms.</p>
          <div className="example">
            <strong>Must-have tags:</strong> og:title, og:description, og:image, og:url, og:type
          </div>
        </div>
        <div className="practice-card">
          <h3>5. Mobile Optimization</h3>
          <p>Include viewport meta tags to ensure your pages render correctly on mobile devices, which affects your mobile SEO rankings.</p>
          <div className="example">
            <strong>Example:</strong> <code>&lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;</code>
          </div>
        </div>
        <div className="practice-card">
          <h3>6. Regular Audits</h3>
          <p>Regularly audit your meta tags to ensure they remain relevant, optimized, and aligned with your current content and SEO strategy.</p>
          <div className="example">
            <strong>Frequency:</strong> Monthly for active sites, quarterly for stable sites
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestPracticesSection;