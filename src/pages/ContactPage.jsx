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
        "name": "Smit Parekh Studio",
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

            <ContactMe />
        </>
    );
};

export default ContactPage;
