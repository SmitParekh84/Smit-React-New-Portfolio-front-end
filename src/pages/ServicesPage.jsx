import { useState } from "react";
import Services from "../components/Services/Services";
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

    // FAQ Data
    const faqItems = [
        {
            question: "What type of businesses do you work with?",
            answer: "I work with businesses of all sizes, from startups to established enterprises, across various industries including technology, e-commerce, education, healthcare, and creative services."
        },
        {
            question: "How long does it typically take to complete a project?",
            answer: "Project timelines vary based on scope and complexity. A simple website might take 2-4 weeks, while a comprehensive marketing strategy with implementation could take 1-3 months. During our initial consultation, I'll provide a detailed timeline specific to your project."
        },
        {
            question: "Do you offer ongoing maintenance and support?",
            answer: "Yes, I offer flexible maintenance packages for websites and digital marketing campaigns. These can include regular updates, performance monitoring, content updates, and technical support to ensure your digital presence remains effective and secure."
        },
        {
            question: "What makes your services different from other providers?",
            answer: "My unique combination of technical expertise and marketing knowledge allows me to deliver solutions that are not only visually appealing but also strategically designed to achieve business goals. I focus on data-driven approaches and maintain transparent communication throughout the process."
        }
    ];

    // Client Testimonials
    const testimonials = [
        {
            name: "Priya Sharma",
            position: "CEO, TechInnovate",
            comment: "Smit transformed our digital presence completely. His strategic approach to web development and SEO increased our organic traffic by 200% within just three months.",
            avatar: "/images/testimonials/client1.webp"
        },
        {
            name: "Raj Patel",
            position: "Marketing Director, EduLearn",
            comment: "Working with Smit was a game-changer for our marketing strategy. His insights and execution helped us reach our target audience more effectively than ever before.",
            avatar: "/images/testimonials/client2.webp"
        },
        {
            name: "Anita Desai",
            position: "Founder, StyleHouse",
            comment: "Smit's creativity and technical skills are unmatched. He created a beautiful website that perfectly represents our brand and has significantly improved our customer engagement.",
            avatar: "/images/testimonials/client3.webp"
        }
    ];

    // Add state for FAQ toggles
    const [activeFaq, setActiveFaq] = useState(null);
    
    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
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

            {/* Hero Banner for Services */}
            <section className="services-hero section">
                <div className="services-hero__container container">
                    <div className="services-hero__content">
                        <h1 className="services-hero__title">Expert Services to Elevate Your Business</h1>
                        <p className="services-hero__description">
                            Comprehensive solutions designed to help your business thrive in the digital landscape
                        </p>
                        <div className="services-hero__cta">
                            <Link to="/contact" className="button button--flex">
                                Request a Free Consultation
                                <i className="uil uil-message button__icon"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="services-hero__image">
                        <img src="/images/services-illustration.png" alt="Professional Services" />
                    </div>
                </div>
            </section>

            {/* Services List Section */}
            <Services />
            
            {/* Modern Service Process Timeline Section */}
            <section className="service-process section" id="process">
                <div className="service-process__bg"></div>
                <div className="container">
                    <h2 className="section__title">How I Work</h2>
                    <span className="section__subtitle">My Service Delivery Process</span>
                    
                    <div className="service-process__timeline">
                        <div className="service-process__line"></div>
                        
                        {/* Step 1 */}
                        <div className="service-process__item">
                            <div className="service-process__item-content">
                                <div className="service-process__icon-box">
                                    <i className="uil uil-search service-process__icon"></i>
                                </div>
                                <div className="service-process__step-number">01</div>
                                <h3 className="service-process__step-title">Discovery & Consultation</h3>
                                <p className="service-process__step-description">
                                    We begin with an in-depth discovery session to understand your business goals, target audience, 
                                    and specific requirements to tailor the perfect solution.
                                </p>
                                <ul className="service-process__features">
                                    <li><i className="uil uil-check-circle"></i> Requirement analysis</li>
                                    <li><i className="uil uil-check-circle"></i> Market research</li>
                                    <li><i className="uil uil-check-circle"></i> Competitor analysis</li>
                                </ul>
                            </div>
                        </div>
                        
                        {/* Step 2 */}
                        <div className="service-process__item">
                            <div className="service-process__item-content">
                                <div className="service-process__icon-box">
                                    <i className="uil uil-apps service-process__icon"></i>
                                </div>
                                <div className="service-process__step-number">02</div>
                                <h3 className="service-process__step-title">Strategy Development</h3>
                                <p className="service-process__step-description">
                                    Based on our findings, I create a comprehensive strategy outlining the approach, timeline, 
                                    deliverables, and expected outcomes for your project.
                                </p>
                                <ul className="service-process__features">
                                    <li><i className="uil uil-check-circle"></i> Solution architecture</li>
                                    <li><i className="uil uil-check-circle"></i> Project roadmap</li>
                                    <li><i className="uil uil-check-circle"></i> Resource planning</li>
                                </ul>
                            </div>
                        </div>
                        
                        {/* Step 3 */}
                        <div className="service-process__item">
                            <div className="service-process__item-content">
                                <div className="service-process__icon-box">
                                    <i className="uil uil-rocket service-process__icon"></i>
                                </div>
                                <div className="service-process__step-number">03</div>
                                <h3 className="service-process__step-title">Implementation</h3>
                                <p className="service-process__step-description">
                                    With your approval, I execute the strategy with precision, providing regular updates 
                                    and opportunities for feedback to ensure alignment with your vision.
                                </p>
                                <ul className="service-process__features">
                                    <li><i className="uil uil-check-circle"></i> Agile methodology</li>
                                    <li><i className="uil uil-check-circle"></i> Regular updates</li>
                                    <li><i className="uil uil-check-circle"></i> Quality assurance</li>
                                </ul>
                            </div>
                        </div>
                        
                        {/* Step 4 */}
                        <div className="service-process__item">
                            <div className="service-process__item-content">
                                <div className="service-process__icon-box">
                                    <i className="uil uil-chart service-process__icon"></i>
                                </div>
                                <div className="service-process__step-number">04</div>
                                <h3 className="service-process__step-title">Review & Optimization</h3>
                                <p className="service-process__step-description">
                                    After implementation, we thoroughly review the results, gather insights, and make 
                                    necessary optimizations to maximize performance and ROI.
                                </p>
                                <ul className="service-process__features">
                                    <li><i className="uil uil-check-circle"></i> Performance analysis</li>
                                    <li><i className="uil uil-check-circle"></i> Data-driven improvements</li>
                                    <li><i className="uil uil-check-circle"></i> Ongoing support</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="service-process__cta">
                        <Link to="/contact" className="button button--flex">
                            Start Your Project
                            <i className="uil uil-message button__icon"></i>
                        </Link>
                    </div>
                </div>
            </section>
            
            {/* Testimonials Section */}
            <section className="services-testimonials section">
                <div className="container">
                    <h2 className="section__title">Client Testimonials</h2>
                    <span className="section__subtitle">What My Clients Say</span>
                    
                    <div className="services-testimonials__container grid">
                        {testimonials.map((testimonial, index) => (
                            <div className="services-testimonial__card" key={index}>
                                <div className="services-testimonial__content">
                                    <p className="services-testimonial__quote">
                                        <i className="uil uil-quote-left services-testimonial__quote-icon"></i>
                                        {testimonial.comment}
                                    </p>
                                    <div className="services-testimonial__client">
                                        <img 
                                            src={testimonial.avatar} 
                                            alt={testimonial.name} 
                                            className="services-testimonial__avatar" 
                                        />
                                        <div className="services-testimonial__client-info">
                                            <h4 className="services-testimonial__name">{testimonial.name}</h4>
                                            <p className="services-testimonial__position">{testimonial.position}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
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
            
            {/* FAQ Section */}
            <section className="services-faq section">
                <div className="container">
                    <h2 className="section__title">Frequently Asked Questions</h2>
                    <span className="section__subtitle">Common Questions About My Services</span>
                    
                    <div className="services-faq__container">
                        {faqItems.map((item, index) => (
                            <div 
                                className={`services-faq__item ${activeFaq === index ? 'active' : ''}`} 
                                key={index}
                            >
                                <div 
                                    className="services-faq__question" 
                                    onClick={() => toggleFaq(index)}
                                >
                                    <h3 className="services-faq__question-text">{item.question}</h3>
                                    <i className="uil uil-angle-down services-faq__icon"></i>
                                </div>
                                <div className="services-faq__answer">
                                    <p>{item.answer}</p>
                                </div>
                            </div>
                        ))}
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
                        <div className="cta-services__buttons">
                            <Link to="/contact" className="button button--flex">
                                Get in Touch
                                <i className="uil uil-message button__icon"></i>
                            </Link>
                            <a href="#services" className="button button--outline button--flex">
                                Explore Services
                                <i className="uil uil-arrow-right button__icon"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServicesPage;
