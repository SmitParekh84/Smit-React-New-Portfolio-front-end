import React from "react";
import Services from "../components/Services";
import { servicesData } from "../data/data";
import { Link } from "react-router-dom";
import SEO from "../components/SEO/SEO";

const ServicesPage = () => {
    // Service type schema for structured data
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Smit Parekh's Professional Services",
        "url": "https://www.smitparekh.studio/services",
        "description": "Smit Parekh provides Full Stack Web Development, SEO Optimization, Digital Marketing, Social Media Marketing, Video Editing, and Graphic Design services.",
        "serviceType": servicesData.map(service => ({
            "@type": "Service",
            "name": service.title,
            "description": service.description.join(" "),
            "provider": {
                "@type": "Person",
                "name": "Smit Parekh"
            },
            "areaServed": {
                "@type": "Country",
                "name": "India"
            },
            "availableChannel": {
                "@type": "ServiceChannel",
                "serviceUrl": "https://www.smitparekh.studio/contact",
                "servicePhone": "+91 9537826098"
            }
        })),
        "image": {
            "@type": "ImageObject",
            "url": "https://www.smitparekh.studio/images/Smit-Parekh-Services.webp",
            "width": "1200",
            "height": "630"
        },
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Anand",
            "addressRegion": "Gujarat",
            "addressCountry": "India"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "124"
        }
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
                "name": "Services",
                "item": "https://www.smitparekh.studio/services"
            }
        ]
    };

    return (
        <>
            <SEO 
                title="Professional Services: Web Development, SEO, Marketing & More | Smit Parekh"
                description="Explore comprehensive professional services by Smit Parekh, including Full Stack Web Development, SEO Optimization, Digital Marketing Strategy, Social Media Marketing, Video Editing, and Graphic Design."
                keywords="Smit Parekh services, web development services, SEO optimization, digital marketing strategy, social media marketing, video editing services, graphic design services, professional services"
                canonicalUrl="https://www.smitparekh.studio/services"
                ogImage="https://www.smitparekh.studio/images/Smit-Parekh-Services.webp"
                twitterImage="https://www.smitparekh.studio/images/Smit-Parekh-Services.webp"
                structuredData={[serviceSchema, breadcrumbSchema]}
                lastUpdated="2023-11-10"
                language="en-US"
            />

            {/* Services Introduction */}
            <section className="services-intro section">
                <div className="container">
                    <h1 className="section__title">Professional Services</h1>
                    <span className="section__subtitle">Tailored Solutions for Your Business Needs</span>
                    
                    <div className="services-intro__content">
                        <p className="services-intro__description">
                            As a Marketing Manager and Full-stack Developer, I offer a comprehensive range of services 
                            designed to elevate your brand's digital presence and drive measurable results. From creating 
                            stunning websites to implementing data-driven marketing strategies, my goal is to provide solutions 
                            that align perfectly with your business objectives.
                        </p>
                        
                        <div className="services-intro__cta">
                            <Link to="/contact" className="button button--flex">
                                Request Custom Service
                                <i className="uil uil-message button__icon"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services List Section */}
            <Services />
            
            {/* Service Process Section */}
            <section className="service-process section">
                <div className="container">
                    <h2 className="section__title">How I Work</h2>
                    <span className="section__subtitle">My Service Delivery Process</span>
                    
                    <div className="service-process__steps grid">
                        <div className="service-process__step">
                            <div className="service-process__step-number">1</div>
                            <h3 className="service-process__step-title">Discovery & Consultation</h3>
                            <p className="service-process__step-description">
                                We begin with an in-depth discovery session to understand your business goals, target audience, 
                                and specific requirements to tailor the perfect solution.
                            </p>
                        </div>
                        
                        <div className="service-process__step">
                            <div className="service-process__step-number">2</div>
                            <h3 className="service-process__step-title">Strategy Development</h3>
                            <p className="service-process__step-description">
                                Based on our findings, I create a comprehensive strategy outlining the approach, timeline, 
                                deliverables, and expected outcomes for your project.
                            </p>
                        </div>
                        
                        <div className="service-process__step">
                            <div className="service-process__step-number">3</div>
                            <h3 className="service-process__step-title">Implementation</h3>
                            <p className="service-process__step-description">
                                With your approval, I execute the strategy with precision, providing regular updates 
                                and opportunities for feedback to ensure alignment with your vision.
                            </p>
                        </div>
                        
                        <div className="service-process__step">
                            <div className="service-process__step-number">4</div>
                            <h3 className="service-process__step-title">Review & Optimization</h3>
                            <p className="service-process__step-description">
                                After implementation, we thoroughly review the results, gather insights, and make 
                                necessary optimizations to maximize performance and ROI.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Why Choose Me Section */}
            <section className="why-choose section">
                <div className="container">
                    <h2 className="section__title">Why Choose My Services</h2>
                    <span className="section__subtitle">The Value I Bring to Your Business</span>
                    
                    <div className="why-choose__grid grid">
                        <div className="why-choose__item">
                            <i className="uil uil-award why-choose__icon"></i>
                            <h3 className="why-choose__title">Quality Focused</h3>
                            <p className="why-choose__description">
                                I deliver high-quality work that meets professional standards and exceeds client expectations.
                            </p>
                        </div>
                        
                        <div className="why-choose__item">
                            <i className="uil uil-schedule why-choose__icon"></i>
                            <h3 className="why-choose__title">Timely Delivery</h3>
                            <p className="why-choose__description">
                                I respect deadlines and ensure your projects are completed on time, every time.
                            </p>
                        </div>
                        
                        <div className="why-choose__item">
                            <i className="uil uil-chart-growth why-choose__icon"></i>
                            <h3 className="why-choose__title">Results Driven</h3>
                            <p className="why-choose__description">
                                My solutions are designed to deliver measurable results that contribute to your business growth.
                            </p>
                        </div>
                        
                        <div className="why-choose__item">
                            <i className="uil uil-users-alt why-choose__icon"></i>
                            <h3 className="why-choose__title">Client-Centric Approach</h3>
                            <p className="why-choose__description">
                                I prioritize your needs and maintain open communication throughout the project lifecycle.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Call to Action */}
            <section className="cta-services section">
                <div className="container">
                    <div className="cta-services__content">
                        <h2 className="cta-services__title">Ready to Transform Your Digital Presence?</h2>
                        <p className="cta-services__description">
                            Let's collaborate to create solutions that drive real results for your business.
                        </p>
                        <Link to="/contact" className="button button--flex">
                            Get in Touch
                            <i className="uil uil-message button__icon"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServicesPage;
