import React from "react";

const ImportanceSection = () => {
  return (
    <section className="importance-section metachecker-container">
      <h2>Why Meta Tags Are Critical for SEO Success</h2>
      <div className="importance-content">
        <div className="importance-text">
          <p className="importance-intro">
            Meta tags are crucial HTML elements that provide information about your webpage to search engines and website visitors. They significantly influence how your pages appear in search results and across social media platforms.
          </p>
          
          <div className="importance-stats">
            <h3>Impact of Optimized Meta Tags</h3>
            <ul>
              <li>
                <span className="stat-highlight">5.8% higher click-through rates</span> 
                <p>Pages with optimized meta descriptions get more clicks from search results</p>
              </li>
              <li>
                <span className="stat-highlight">50% more engagement</span> 
                <p>Websites with proper Open Graph tags see significantly higher engagement on social media</p>
              </li>
              <li>
                <span className="stat-highlight">93% of online experiences</span> 
                <p>Begin with a search engine where meta tags directly impact visibility</p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="importance-image">
          <img 
            src="/images/SEO-Analyzer-Tool.webp" 
            alt="SEO Benefits of Meta Tags" 
            loading="lazy" 
            width="450" 
            height="320" 
          />
          <div className="image-caption">
            Optimize your meta tags to improve search visibility and user engagement
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImportanceSection;