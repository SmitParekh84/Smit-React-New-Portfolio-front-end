import React from "react";
import "./RelatedSEOTools.css";

const RelatedSEOTools = () => {
    return (
        <section className="related-tools section">
            <div className="container">
                <h2 className="section__title">Explore More SEO Tools</h2>
                <span className="section__subtitle">Enhance Your SEO Strategy With These Free Tools</span>
                
                <div className="related-tools__grid">
                    <div className="related-tool__card">
                        <i className="uil uil-tag-alt related-tool__icon"></i>
                        <h3 className="related-tool__title">Meta Tag Checker</h3>                            <p className="related-tool__description">
                                Analyze your website&apos;s meta tags and get recommendations for better SEO performance.
                            </p>
                        <a href="/free-tools/meta-tag-checker" className="related-tool__link">
                            Try Tool <i className="uil uil-arrow-right"></i>
                        </a>
                    </div>
                    
                    <div className="related-tool__card">
                        <i className="uil uil-chart related-tool__icon"></i>
                        <h3 className="related-tool__title">Keyword Density Checker</h3>
                        <p className="related-tool__description">
                            Analyze the keyword usage in your content to ensure optimal density for SEO.
                        </p>
                        <a href="/free-tools" className="related-tool__link">
                            Coming Soon <i className="uil uil-arrow-right"></i>
                        </a>
                    </div>
                    
                    <div className="related-tool__card">
                        <i className="uil uil-sitemap related-tool__icon"></i>
                        <h3 className="related-tool__title">XML Sitemap Generator</h3>
                        <p className="related-tool__description">
                            Create XML sitemaps to help search engines discover and index your content efficiently.
                        </p>
                        <a href="/free-tools" className="related-tool__link">
                            Coming Soon <i className="uil uil-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RelatedSEOTools;
