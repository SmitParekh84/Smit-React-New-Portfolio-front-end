import React from "react";
import LinkedInPostGenerator from "../components/LinkedInPostGenerator/LinkedInPostGenerator";
import FAQ from "../components/FAQ/FAQ";
import { faqDataLinkedin } from "../data/data";
import SEO from "../components/SEO/SEO";

const LinkedInPostGeneratorPage = () => {
    // FAQ Schema
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqDataLinkedin.map(item => ({
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
        "name": "Free AI-Powered LinkedIn Post Generator",
        "applicationCategory": "BusinessApplication, UtilitiesApplication",
        "operatingSystem": "Web",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "creator": {
            "@type": "Person",
            "name": "Smit Parekh"
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
                "name": "Free Tools",
                "item": "https://www.smitparekh.studio/tools"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "LinkedIn Post Generator",
                "item": "https://www.smitparekh.studio/viral-linkedin-post-generator"
            }
        ]
    };

    return (
        <>
            <SEO 
                title="Free AI LinkedIn Post Generator | Create Viral Content Instantly"
                description="Generate engaging, viral-worthy LinkedIn posts with our free AI tool. Save time, increase engagement, and grow your professional network with compelling content created in seconds."
                keywords="Free LinkedIn post generator, AI content creator, viral LinkedIn posts, professional content writing, LinkedIn engagement tool, free AI writing tool, social media content"
                canonicalUrl="https://www.smitparekh.studio/viral-linkedin-post-generator"
                ogImage="https://www.smitparekh.studio/images/viral-linkedin-post-generator.webp"
                twitterImage="https://www.smitparekh.studio/images/viral-linkedin-post-generator.webp"
                structuredData={[toolSchema, faqSchema, breadcrumbSchema]}
            />

            <LinkedInPostGenerator />
            <FAQ faqData={faqDataLinkedin} toolName="Viral LinkedIn Post Generator" />
        </>
    );
};

export default LinkedInPostGeneratorPage;
