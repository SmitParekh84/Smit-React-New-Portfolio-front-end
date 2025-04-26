import React, { useState } from "react";

const ResourcesSection = () => {
  const [message, setMessage] = useState("");

  const handleLinkClick = (e) => {
    e.preventDefault();
    setMessage("Coming soon!");
    
    // Clear message after 3 seconds
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  const comingSoonStyle = {
    backgroundColor: "#f8d7da",
    color: "#721c24",
    padding: "10px 15px",
    borderRadius: "4px",
    marginBottom: "15px",
    fontWeight: "500",
    textAlign: "center",
    animation: "fadeIn 0.3s ease-in-out"
  };

  return (
    <section className="resources-section metachecker-container">
      <h2>Additional Resources</h2>
      {message && <p style={comingSoonStyle} className="coming-soon-message">{message}</p>}
      <div className="resources-grid">
        <div className="resource-card">
          <h3>Meta Tag Guide</h3>
          <p>Download our comprehensive guide to meta tags and SEO best practices for 2025.</p>
          <a href="/downloads/meta-tag-seo-guide-2025.pdf" className="resource-link" onClick={handleLinkClick}>Download PDF Guide</a>
        </div>
        <div className="resource-card">
          <h3>Related Tools</h3>
          <ul className="resource-list">
            <li><a href="/seo-analyzer" onClick={handleLinkClick}>SEO Analyzer Tool</a></li>
            <li><a href="/keyword-density-checker" onClick={handleLinkClick}>Keyword Density Checker</a></li>
            <li><a href="/schema-generator" onClick={handleLinkClick}>Schema Markup Generator</a></li>
          </ul>
        </div>
        <div className="resource-card">
          <h3>Learning Center</h3>
          <ul className="resource-list">
            <li><a href="/blog/meta-tags-seo-guide" onClick={handleLinkClick}>Complete Meta Tag SEO Guide</a></li>
            <li><a href="/blog/open-graph-optimization" onClick={handleLinkClick}>Open Graph Optimization Tips</a></li>
            <li><a href="/blog/structured-data-benefits" onClick={handleLinkClick}>Benefits of Structured Data</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;