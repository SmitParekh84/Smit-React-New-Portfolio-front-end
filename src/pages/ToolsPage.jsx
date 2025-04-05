import React from "react";
import ToolsSection from "../components/ToolSection/ToolsSection";
import { faqDataTools } from "../data/data";
import FAQ from "../components/FAQ/FAQ";
import SEO from "../components/SEO/SEO";

const ToolsPage = () => {
    // FAQ Structured data
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqDataTools.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    };

    // Tools structured data
    const toolsSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Free Tools - Smit Parekh",
        "url": "https://www.smitparekh.studio/tools",
        "description": "Explore a variety of free tools designed by Smit Parekh to enhance your productivity, including background removal and post generation tools.",
        "image": "https://www.smitparekh.studio/images/Tools-Page-Image.webp",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Smit Parekh Studio",
            "url": "https://www.smitparekh.studio"
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
            }
        ]
    };

    return (
        <>
            <SEO 
                title="Free Online Tools for Productivity & Marketing | Smit Parekh Studio"
                description="Access powerful, free online tools including AI-powered LinkedIn Post Generator, Background Remover, and Meta Tag Checker. Boost productivity and enhance your marketing efforts with no cost."
                keywords="free online tools, productivity tools, marketing tools, background remover, LinkedIn post generator, meta tag checker, free SEO tools, AI tools free, Smit Parekh tools"
                canonicalUrl="https://www.smitparekh.studio/tools"
                ogImage="https://www.smitparekh.studio/images/Tools-Page-Image.webp"
                twitterImage="https://www.smitparekh.studio/images/Tools-Page-Image.webp"
                structuredData={[toolsSchema, faqSchema, breadcrumbSchema]}
            />

            <ToolsSection />
            <FAQ faqData={faqDataTools} toolName="Viral LinkedIn Post Generator" />
        </>
    );
};

export default ToolsPage;
