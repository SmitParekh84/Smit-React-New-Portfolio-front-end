import { contactData,faqDataContact } from '../data/data';
import ContactMe from "../components/ContactMe/ContactMe";
import FAQ from "../components/FAQ/FAQ";
import SEO from "../components/SEO/SEO";

const ContactPage = () => {
    // Contact page schema
    const contactSchema = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Smit Parekh",
        "url": "https://www.smitparekh.studio/contact",
        "description": "Contact Smit Parekh for inquiries regarding web development, digital marketing, and SEO services.",
        "mainEntity": {
            "@type": "Person",
            "name": "Smit Parekh",
            "telephone": contactData.phone,
            "email": contactData.email,
            "url": "https://www.smitparekh.studio",
            "image": "https://www.smitparekh.studio/images/profile.webp",
            "jobTitle": "Marketing Manager & Full-Stack Developer",
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": contactData.phone,
                "contactType": "customer service",
                "areaServed": "IN",
                "availableLanguage": ["English", "Hindi", "Gujarati"]
            },
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Anand",
                "addressRegion": "Gujarat",
                "postalCode": "388001",
                "addressCountry": "IN"
            },
            "sameAs": [
                "https://linkedin.com/in/smit-parekh-n/",
                "https://github.com/SmitParekh84",
                "https://www.instagram.com/smit_8_4/"
            ]
        },
        "availableChannel": [
            {
                "@type": "ServiceChannel",
                "name": "Email",
                "serviceUrl": "mailto:smitparekh1184@gmail.com",
                "servicePhone": contactData.phone
            },
            {
                "@type": "ServiceChannel",
                "name": "Contact Form",
                "serviceUrl": "https://www.smitparekh.studio/contact"
            }
        ]
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
                "name": "Contact",
                "item": "https://www.smitparekh.studio/contact"
            }
        ]
    };

    // Organization schema
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Smit Parekh",
        "url": "https://www.smitparekh.studio",
        "logo": "https://www.smitparekh.studio/images/logo.webp",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": contactData.phone,
            "contactType": "customer service",
            "areaServed": "IN",
            "availableLanguage": ["English", "Hindi", "Gujarati"]
        },
        "sameAs": [
            "https://linkedin.com/in/smit-parekh-n/",
            "https://github.com/SmitParekh84",
            "https://www.instagram.com/smit_8_4/"
        ]
    };

    return (
        <>
            <SEO 
                title="Contact Smit Parekh | Web Development & Digital Marketing Services"
                description="Get in touch with Smit Parekh for professional web development, digital marketing, and SEO services. Receive a personalized consultation for your business needs."
                keywords="contact Smit Parekh, web development services, digital marketing inquiry, SEO consultation, hire web developer, professional marketing services, business website development"
                canonicalUrl="https://www.smitparekh.studio/contact"
                structuredData={[contactSchema, breadcrumbSchema, organizationSchema]}
                lastUpdated="2023-10-05"
                language="en-US"
                ogImage="https://www.smitparekh.studio/images/contact-page.webp"
                twitterImage="https://www.smitparekh.studio/images/contact-page.webp"
            />
            
            <div className="contact-page-header">
                <div className="container">
                    <h1 className="contact-page-title">Let's Start a Conversation</h1>
                    <p className="contact-page-description">
                        I'm always excited to discuss new projects, creative ideas, or opportunities to be part of your vision. 
                        Whether you need help with web development, digital marketing, or just want to say hello, I'm here to help.
                    </p>
                </div>
            </div>

            <ContactMe />
            
            {/* Using the FAQ component instead of custom markup */}
            <FAQ 
                title="Frequently Asked Questions" 
                subtitle="Common questions about my services" 
                faqData={faqDataContact} 
            />
            
            <section className="contact-cta">
                <div className="container">
                    <div className="contact-cta__content">
                        <h2>Ready to bring your ideas to life?</h2>
                        <p>Let's create something amazing together. Reach out today to get started!</p>
                        <a href="#contact" className="button button--flex">
                            Get in touch <i className="uil uil-message button__icon"></i>
                        </a>
                    </div>
                </div>
            </section>
            
            <style jsx>{`
                .contact-page-header {
                    background: linear-gradient(135deg, rgba(var(--first-color-rgb), 0.1) 0%, rgba(var(--first-color-rgb), 0.2) 100%);
                    padding: 5rem 0 3rem;
                    text-align: center;
                    margin-bottom: 2rem;
                }
                
                .contact-page-title {
                    font-size: 2.5rem;
                    color: var(--title-color);
                    margin-bottom: 1rem;
                }
                
                .contact-page-description {
                    max-width: 800px;
                    margin: 0 auto;
                    font-size: 1.1rem;
                    line-height: 1.6;
                    color: var(--text-color);
                }
                
                .contact-cta {
                    background: linear-gradient(135deg, rgba(var(--first-color-rgb), 0.9) 0%, rgba(var(--first-color-rgb), 1) 100%);
                    padding: 4rem 0;
                    margin-top: 2rem;
                    text-align: center;
                    color: #fff;
                }
                
                .contact-cta__content {
                    max-width: 800px;
                    margin: 0 auto;
                }
                
                .contact-cta h2 {
                    font-size: 2rem;
                    margin-bottom: 1rem;
                    color: #fff;
                }
                
                .contact-cta p {
                    font-size: 1.1rem;
                    margin-bottom: 2rem;
                    opacity: 0.9;
                }
                
                .contact-cta .button {
                    background-color: #fff;
                    color: var(--first-color);
                }
                
                .contact-cta .button:hover {
                    background-color: #f0f0f0;
                    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
                }
                
                @media screen and (max-width: 768px) {
                    .contact-page-header {
                        padding: 3rem 1rem 2rem;
                    }
                    
                    .contact-page-title {
                        font-size: 2rem;
                    }
                    
                    .contact-cta {
                        padding: 3rem 1rem;
                    }
                    
                    .contact-cta h2 {
                        font-size: 1.8rem;
                    }
                }
            `}</style>
        </>
    );
};

export default ContactPage;
