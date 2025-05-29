import React from "react";
import "./SEOCaseStudy.css";

const SEOCaseStudy = () => {
    return (
        <section className="case-study section">
            <div className="container">
                <h2 className="section__title">SEO Success Story</h2>
                <span className="section__subtitle">Real Results from SEO Optimization</span>
                
                <div className="case-study__content">
                    <div className="case-study__text">
                        <h3>E-commerce Website Sees 156% Increase in Organic Traffic</h3>
                        <p>
                            An online retailer was struggling with low visibility in search results despite having quality products. 
                            After a comprehensive SEO analysis and optimization:
                        </p>
                        <ul className="case-study__list">
                            <li>
                                <strong>Challenge:</strong> Poor search visibility, low organic traffic, and high bounce rates
                            </li>
                            <li>
                                <strong>Solution:</strong> Complete SEO audit, content optimization, technical fixes, and mobile improvements
                            </li>
                            <li>
                                <strong>Results:</strong> 156% increase in organic traffic, 43% higher click-through rates, 27% lower bounce rates
                            </li>
                        </ul>
                        <p>
                            The most significant improvement came from optimizing meta tags, fixing crawl errors, 
                            improving page load speeds, and creating more targeted content based on keyword research.
                        </p>
                    </div>
                    
                    <div className="case-study__stats">
                        <div className="stat">
                            <span className="stat-number">156%</span>
                            <span className="stat-label">Increase in<br />Organic Traffic</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number">43%</span>
                            <span className="stat-label">Higher<br />Click-Through Rate</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number">27%</span>
                            <span className="stat-label">Lower<br />Bounce Rate</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SEOCaseStudy;
