import React from "react";
import { contactData } from '../data/data';
import ContactMe from "../components/ContactMe";
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
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": contactData.phone,
                "contactType": "customer service",
                "areaServed": "IN",
                "availableLanguage": "English"
            },
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Anand",
                "addressRegion": "Gujarat",
                "postalCode": "388001",
                "addressCountry": "IN"
            }
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
                "name": "Contact",
                "item": "https://www.smitparekh.studio/contact"
            }
        ]
    };

    return (
        <>
            <SEO 
                title="Contact Smit Parekh | Web Development & Digital Marketing Services"
                description="Get in touch with Smit Parekh for professional web development, digital marketing, and SEO services. Receive a personalized consultation for your business needs."
                keywords="contact Smit Parekh, web development services, digital marketing inquiry, SEO consultation, hire web developer, professional marketing services, business website development"
                canonicalUrl="https://www.smitparekh.studio/contact"
                structuredData={[contactSchema, breadcrumbSchema]}
            />

            <ContactMe />
        </>
    );
};

export default ContactPage;
