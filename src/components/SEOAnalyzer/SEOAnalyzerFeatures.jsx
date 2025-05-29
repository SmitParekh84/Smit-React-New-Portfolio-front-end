import React from "react";
import "./SEOAnalyzerFeatures.css";

const SEOAnalyzerFeatures = () => {
    return (
        <section className="analyzer-features section">
            <div className="container">
                <h2 className="section__title">Complete SEO Analyzer Features</h2>
                <span className="section__subtitle">Why Our Free SEO Analyzer Tool Stands Out</span>
                
                <div className="analyzer-features__content">
                    <div className="analyzer-features__text">
                        <p>
                            Our free SEO analyzer tool provides comprehensive website analysis to help improve your search engine rankings. 
                            Unlike other online SEO analyzers, we focus on delivering actionable insights that make a real difference to your visibility.
                        </p>
                        
                        <div className="analyzer-features__list">
                            <div className="feature-item">
                                <i className="uil uil-check-circle feature-icon"></i>
                                <div>
                                    <h4>Technical SEO Analysis</h4>
                                    <p>Crawlability checks, indexation issues, robots.txt validation, site architecture analysis</p>
                                </div>
                            </div>
                            
                            <div className="feature-item">
                                <i className="uil uil-check-circle feature-icon"></i>
                                <div>
                                    <h4>On-Page SEO Evaluation</h4>
                                    <p>Title tags, meta descriptions, heading structure, content quality, keyword optimization</p>
                                </div>
                            </div>
                            
                            <div className="feature-item">
                                <i className="uil uil-check-circle feature-icon"></i>
                                <div>
                                    <h4>User Experience Analysis</h4>
                                    <p>Core Web Vitals assessment, mobile-friendliness evaluation, page speed optimization</p>
                                </div>
                            </div>
                            
                            <div className="feature-item">
                                <i className="uil uil-check-circle feature-icon"></i>
                                <div>
                                    <h4>Competitive SEO Edge</h4>
                                    <p>Benchmark against competitors, identify keyword gaps, discover content opportunities</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="analyzer-features__image">
                        <img src="/images/SEO-Analyzer-Tool.webp" alt="SEO Analyzer Tool Dashboard" className="features-image" />
                        <div className="features-badge">
                            <span className="badge-text">Free Forever</span>
                            <span className="badge-subtext">No Credit Card Required</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SEOAnalyzerFeatures;
