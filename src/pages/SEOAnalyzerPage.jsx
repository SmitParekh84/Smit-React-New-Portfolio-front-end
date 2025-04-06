import React from "react";
import { faqDataSEOAnalyzer } from "../data/data";
import FAQ from "../components/FAQ/FAQ";
import SEOAnalyzer from "../components/SEOAnalyzer/SEOAnalyzer";
import SEO from "../components/SEO/SEO";

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
        "applicationCategory": "SEOApplication, WebApplication",
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

    return (
        <>
            <SEO 
                title="Free SEO Analyzer Tool | Check Your Website's SEO Performance"
                description="Analyze your website's SEO performance with our free SEO Analyzer tool. Get actionable recommendations to improve your search engine ranking."
                keywords="free SEO analyzer, website SEO checker, SEO audit tool, SEO performance analysis, search engine optimization tool, SEO recommendations"
                canonicalUrl="https://www.smitparekh.studio/free-tools/seo-analyzer"
                ogImage="https://www.smitparekh.studio/images/SEO-Analyzer-Tool.webp"
                twitterImage="https://www.smitparekh.studio/images/SEO-Analyzer-Tool.webp"
                structuredData={[toolSchema, faqSchema, breadcrumbSchema]}
            />

            <SEOAnalyzer apiUrl={apiUrl} toolName="SEO Analyzer" />
            <FAQ faqData={faqDataSEOAnalyzer} toolName="SEO Analyzer" />
        </>
    );
};

export default SEOAnalyzerPage;
