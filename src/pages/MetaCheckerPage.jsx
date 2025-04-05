import React from "react";
import { faqDataMetaChecker } from "../data/data";
import FAQ from "../components/FAQ/FAQ";
import MetaChecker from "../components/MetaChecker/MetaChecker";
import SEO from "../components/SEO/SEO";

const MetaCheckerPage = () => {
    const apiUrl = import.meta.env.VITE_API_URL;
    
    // FAQ Schema
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqDataMetaChecker.map(item => ({
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
        "name": "Meta Tag Checker Tool",
        "applicationCategory": "SEOApplication, WebApplication",
        "operatingSystem": "Web",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "description": "Use the Meta Tag Checker Tool to analyze your website's meta tags and optimize for SEO. Check your title, description, Open Graph, and Twitter Cards.",
        "featureList": "Analyze website meta tags, Verify Open Graph and Twitter Cards, Check SEO compliance",
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
                "name": "Meta Tag Checker",
                "item": "https://www.smitparekh.studio/meta-checker"
            }
        ]
    };

    return (
        <>
            <SEO 
                title="Free Meta Tag Checker Tool | Analyze & Optimize Your Website SEO"
                description="Instantly analyze your website's meta tags, Open Graph tags, and Twitter Cards with our free Meta Tag Checker. Improve your SEO and social media presence with actionable insights."
                keywords="meta tag checker tool, SEO analyzer, Open Graph validation, Twitter Card checker, website metadata tool, free SEO tool, meta description analyzer, social media preview tester"
                canonicalUrl="https://www.smitparekh.studio/meta-checker"
                ogImage="https://www.smitparekh.studio/images/Meta-Checker-Image.webp"
                twitterImage="https://www.smitparekh.studio/images/Meta-Checker-Image.webp"
                structuredData={[toolSchema, faqSchema, breadcrumbSchema]}
            />

            <MetaChecker apiUrl={apiUrl} toolName="Website Meta Tag Checker" />
            <FAQ faqData={faqDataMetaChecker} toolName="Website Meta Tag Checker" />
        </>
    );
};

export default MetaCheckerPage;
