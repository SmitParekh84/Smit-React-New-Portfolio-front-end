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
        "image": {
            "@type": "ImageObject",
            "url": "https://www.smitparekh.studio/images/Tools-Page-Image.webp",
            "width": "1200",
            "height": "630",
            "caption": "Free Online Tools by Smit Parekh"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Smit Parekh",
            "url": "https://www.smitparekh.studio",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.smitparekh.studio/images/logo.webp",
                "width": "112",
                "height": "112"
            }
        },
        "mainEntity": {
            "@type": "SoftwareApplication",
            "name": "Smit Parekh Free Tools Collection",
            "description": "A collection of free online tools for productivity and marketing",
            "applicationCategory": "WebApplication",
            "operatingSystem": "Any",
            "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock"
            },
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "156"
            }
        },
        "keywords": "free online tools, productivity tools, marketing tools, background remover, LinkedIn post generator, meta tag checker, free SEO tools"
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

    const ogDescription = "Access powerful, free online tools including AI-powered LinkedIn Post Generator, Background Remover, and Meta Tag Checker. Boost productivity and enhance your marketing efforts with no cost.";
    const pageUrl = "https://www.smitparekh.studio/tools";
    const imageUrl = "https://www.smitparekh.studio/images/Tools-Page-Image.webp";
    const lastUpdatedDate = "2023-10-15";

    return (
        <>
            <SEO 
                title="Free Online Tools for Productivity & Marketing | Smit Parekh"
                description="Access powerful, free online tools including AI-powered LinkedIn Post Generator, Background Remover, and Meta Tag Checker. Boost productivity and enhance your marketing efforts with no cost."
                keywords="free online tools, productivity tools, marketing tools, background remover, LinkedIn post generator, meta tag checker, free SEO tools, AI tools free, Smit Parekh tools"
                canonicalUrl={pageUrl}
                ogImage={imageUrl}
                ogTitle="Free Productivity & Marketing Tools | Smit Parekh"
                ogDescription={ogDescription}
                ogType="website"
                twitterImage={imageUrl}
                twitterTitle="Free Tools for Marketers & Creators | Smit Parekh"
                twitterDescription={ogDescription}
                structuredData={[toolsSchema, faqSchema, breadcrumbSchema]}
                lastUpdated={lastUpdatedDate}
                language="en-US"
            >
                {/* Additional meta tags */}
                <meta property="article:author" content="https://www.smitparekh.studio/about" />
                <meta property="article:published_time" content="2023-08-01T08:00:00+00:00" />
                <meta property="article:modified_time" content="2023-10-15T10:15:00+00:00" />
            </SEO>

            <ToolsSection />
            <FAQ faqData={faqDataTools} toolName="Viral LinkedIn Post Generator" />
        </>
    );
};

export default ToolsPage;
