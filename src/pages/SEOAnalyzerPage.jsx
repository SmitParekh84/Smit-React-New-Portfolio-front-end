import React from "react";
import { faqDataSEOAnalyzer } from "../data/data";
import FAQ from "../components/FAQ/FAQ";
import SEOAnalyzer from "../components/SEOAnalyzer/SEOAnalyzer";
import SEO from "../components/SEO/SEO";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import CTASection from "../components/CTASection/CTASection";

const SEOAnalyzerPage = () => {
    const apiUrl = import.meta.env.VITE_API_URL;
    
    // FAQ Schema
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqDataSEOAnalyzer.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    };

    // SoftwareApplication schema for the tool
    const toolSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Free SEO Analyzer Tool",
        "applicationCategory": "Business",
        "operatingSystem": "Web",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "description": "Analyze your website for common SEO issues and get recommendations to improve your search ranking with our free SEO Analyzer tool.",
        "featureList": "Website SEO analysis, Performance metrics, On-page SEO recommendations",
        "creator": {
            "@type": "Person",
            "name": "Smit Parekh"
        },
        "screenshot": {
            "@type": "ImageObject",
            "url": "https://www.smitparekh.studio/images/SEO-Analyzer-Tool.webp",
            "width": "1200",
            "height": "630"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.7",
            "reviewCount": "89"
        },
        "datePublished": "2023-07-15",
        "dateModified": "2025-04-27"
    };

    // Breadcrumb structured data
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.smitparekh.studio"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Free Tools",
                "item": "https://www.smitparekh.studio/free-tools"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "SEO Analyzer",
                "item": "https://www.smitparekh.studio/free-tools/seo-analyzer"
            }
        ]
    };

    // HowTo schema for the tool
    const howToSchema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Analyze Your Website SEO",
        "description": "Learn how to thoroughly analyze your website for SEO issues and improve your search engine rankings.",
        "step": [
            {
                "@type": "HowToStep",
                "name": "Enter Your Website URL",
                "text": "Input your full website URL into the SEO Analyzer tool"
            },
            {
                "@type": "HowToStep",
                "name": "Run the Analysis",
                "text": "Click on the Analyze button to start the comprehensive SEO scan"
            },
            {
                "@type": "HowToStep",
                "name": "Review Your SEO Score",
                "text": "Check your overall SEO score and the detailed breakdown of specific factors"
            },
            {
                "@type": "HowToStep",
                "name": "Examine On-Page Factors",
                "text": "Review title tags, meta descriptions, headings, and content quality"
            },
            {
                "@type": "HowToStep",
                "name": "Check Technical Aspects",
                "text": "Analyze loading speed, mobile responsiveness, and other technical SEO elements"
            },
            {
                "@type": "HowToStep",
                "name": "Implement Recommendations",
                "text": "Follow the prioritized recommendations to improve your website's SEO"
            }
        ],
        "tool": {
            "@type": "HowToTool",
            "name": "SEO Analyzer Tool"
        }
    };

    // Case study structured data
    const caseStudySchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "How SEO Analysis Increased Organic Traffic by 156%",
        "description": "A case study showing how a complete SEO analysis and optimization helped an e-commerce website dramatically improve their search visibility and traffic.",
        "image": "https://www.smitparekh.studio/images/SEO-Analyzer-Tool.webp",
        "datePublished": "2024-02-15",
        "dateModified": "2025-04-27",
        "author": {
            "@type": "Person",
            "name": "Smit Parekh"
        }
    };

    // How it works steps
    const howItWorksSteps = [
        {
            title: "Enter Your Website URL",
            description: "Simply paste your complete website URL into the analyzer input field. You can analyze any publicly accessible website including your own or your competitors'."
        },
        {
            title: "Run the Comprehensive Analysis",
            description: "Click the 'Analyze' button and our tool will scan your website for over 50 different SEO factors covering technical setup, on-page elements, content quality, and performance."
        },
        {
            title: "Review Your SEO Score",
            description: "Get an overall SEO score along with a detailed breakdown of your website's performance across key SEO categories. The score helps you quickly understand your site's current optimization level."
        },
        {
            title: "Implement Prioritized Recommendations",
            description: "Follow our actionable, priority-based recommendations to fix issues and improve your website's search engine rankings. Each recommendation includes specific implementation steps."
        },
        {
            title: "Track Improvements Over Time",
            description: "Re-analyze your website regularly to track progress and identify new opportunities for improvement as search engine algorithms evolve."
        }
    ];

    // SEO Tool benefits
    const toolBenefits = [
        {
            icon: "uil-search-alt",
            title: "Comprehensive Analysis",
            description: "Our tool examines over 50 critical SEO factors including meta tags, content quality, page speed, mobile optimization, and technical setup."
        },
        {
            icon: "uil-bolt",
            title: "Instant Results",
            description: "Get immediate, in-depth analysis of your website's SEO performance without complex setup or technical knowledge."
        },
        {
            icon: "uil-chart-line",
            title: "Actionable Insights",
            description: "Receive specific, prioritized recommendations with implementation steps rather than just data points."
        },
        {
            icon: "uil-mobile-android",
            title: "Mobile SEO Checks",
            description: "Verify mobile-friendliness factors that directly impact your rankings in mobile search results."
        },
        {
            icon: "uil-comparison",
            title: "Competitor Benchmarking",
            description: "Analyze your competitors' websites to identify opportunities and gain competitive advantages."
        },
        {
            icon: "uil-lock",
            title: "100% Free & Secure",
            description: "Access all features without any cost, subscription, or registration. Your data stays private and secure."
        }
    ];

    return (
        <>
            <SEO 
                title="Free SEO Analyzer Tool | Check Your Website's SEO Performance"
                description="Analyze your website's SEO performance with our free SEO Analyzer tool. Get actionable recommendations to improve your search engine ranking."
                keywords="free SEO analyzer, website SEO checker, SEO audit tool, SEO performance analysis, search engine optimization tool, SEO recommendations"
                canonicalUrl="https://www.smitparekh.studio/free-tools/seo-analyzer"
                ogImage="https://www.smitparekh.studio/images/SEO-Analyzer-Tool.webp"
                twitterImage="https://www.smitparekh.studio/images/SEO-Analyzer-Tool.webp"
                structuredData={[toolSchema, faqSchema, breadcrumbSchema, howToSchema, caseStudySchema]}
                lastUpdated="2025-04-27"
                language="en-US"
            />

            {/* Hero Section with Main Tool */}
            <section className="seo-analyzer-hero section">
                <div className="container">
                    <div className="seo-analyzer-hero__content">
                        <h1 className="seo-analyzer-hero__title">Free SEO Analyzer Tool</h1>
                        <p className="seo-analyzer-hero__description">
                            Analyze your website's SEO performance and get actionable recommendations 
                            to improve your search engine rankings. Our comprehensive tool checks 
                            50+ factors that affect your site's visibility.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main SEO Analyzer Tool */}
            <SEOAnalyzer apiUrl={apiUrl} toolName="SEO Analyzer" />

            {/* Benefits Section */}
            <section className="benefits section">
                <div className="container">
                    <h2 className="section__title">Why Use Our SEO Analyzer?</h2>
                    <span className="section__subtitle">Powerful Features to Improve Your Rankings</span>
                    
                    <div className="benefits__container grid">
                        {toolBenefits.map((benefit, index) => (
                            <div className="benefit__card" key={index}>
                                <i className={`${benefit.icon} benefit__icon`}></i>
                                <h3 className="benefit__title">{benefit.title}</h3>
                                <p className="benefit__description">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How it Works Section */}
            <HowItWorks 
                title="How Our SEO Analyzer Works"
                subtitle="Simple Process, Powerful Insights"
                steps={howItWorksSteps}
            />

            {/* SEO Case Study Section */}
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

            {/* SEO Best Practices Section */}
            <section className="best-practices section">
                <div className="container">
                    <h2 className="section__title">SEO Best Practices for 2025</h2>
                    <span className="section__subtitle">Expert Tips to Improve Your Rankings</span>
                    
                    <div className="best-practices__grid">
                        <div className="practice-card">
                            <h3><i className="uil uil-document-layout-left"></i> Content Quality & Relevance</h3>
                            <p>Create comprehensive, well-researched content that thoroughly addresses user search intent. Focus on E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness).</p>
                            <div className="practice-tip">
                                <strong>Pro Tip:</strong> Updated content signals freshness to search engines. Regularly review and update your top-performing pages.
                            </div>
                        </div>
                        
                        <div className="practice-card">
                            <h3><i className="uil uil-mobile-android"></i> Mobile-First Optimization</h3>
                            <p>Ensure your website provides an exceptional mobile experience with responsive design, fast loading times, and easy navigation on smaller screens.</p>
                            <div className="practice-tip">
                                <strong>Key Metric:</strong> Mobile page speed is now a critical ranking factor. Aim for a load time under 3 seconds.
                            </div>
                        </div>
                        
                        <div className="practice-card">
                            <h3><i className="uil uil-bolt"></i> Core Web Vitals</h3>
                            <p>Optimize key user experience metrics like Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS).</p>
                            <div className="practice-tip">
                                <strong>Impact:</strong> Sites with excellent Core Web Vitals can see up to 25% fewer bounces from visitors.
                            </div>
                        </div>
                        
                        <div className="practice-card">
                            <h3><i className="uil uil-graph-bar"></i> Structured Data & Schema</h3>
                            <p>Implement schema markup to help search engines better understand your content and create rich snippets in search results.</p>
                            <div className="practice-tip">
                                <strong>Types to Focus On:</strong> FAQ, HowTo, Product, Review, LocalBusiness, and Article schemas.
                            </div>
                        </div>
                        
                        <div className="practice-card">
                            <h3><i className="uil uil-lock"></i> Website Security</h3>
                            <p>Implement HTTPS, keep software updated, and protect user data to maintain trust with both visitors and search engines.</p>
                            <div className="practice-tip">
                                <strong>Security Check:</strong> Regularly scan your site for malware and security vulnerabilities.
                            </div>
                        </div>
                        
                        <div className="practice-card">
                            <h3><i className="uil uil-link"></i> High-Quality Backlink Profile</h3>
                            <p>Focus on earning relevant, authoritative backlinks through quality content, outreach, and relationship building.</p>
                            <div className="practice-tip">
                                <strong>Strategy Shift:</strong> Quality now overwhelmingly outweighs quantity in link building.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <FAQ faqData={faqDataSEOAnalyzer} toolName="SEO Analyzer" />

            {/* CTA Section */}
            <CTASection 
                title="Need Professional SEO Services?"
                subtitle="Looking for expert help with your SEO strategy? Get a personalized consultation for your specific business needs."
                buttonText="Contact Me"
                buttonLink="/contact"
                buttonIcon="uil-message"
            />

            {/* Related SEO Tools Section */}
            <section className="related-tools section">
                <div className="container">
                    <h2 className="section__title">Explore More SEO Tools</h2>
                    <span className="section__subtitle">Enhance Your SEO Strategy With These Free Tools</span>
                    
                    <div className="related-tools__grid">
                        <div className="related-tool__card">
                            <i className="uil uil-tag-alt related-tool__icon"></i>
                            <h3 className="related-tool__title">Meta Tag Checker</h3>
                            <p className="related-tool__description">
                                Analyze your website's meta tags and get recommendations for better SEO performance.
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
        </>
    );
};

export default SEOAnalyzerPage;
