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
        "description": "Generate engaging, professional LinkedIn posts with our free AI-powered tool. Increase your engagement and grow your network with compelling content.",
        "featureList": "AI-generated content, LinkedIn optimization, Multiple post styles, One-click copying",
        "creator": {
            "@type": "Person",
            "name": "Smit Parekh"
        },
        "screenshot": {
            "@type": "ImageObject",
            "url": "https://www.smitparekh.studio/images/viral-linkedin-post-generator.webp",
            "width": "1200",
            "height": "630"
        },
        "applicationCategory": "Social Media",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "143"
        },
        "datePublished": "2023-05-10",
        "dateModified": "2023-11-15"
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

    // HowTo schema for the tool usage
    const howToSchema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Generate Viral LinkedIn Posts",
        "description": "Learn how to create engaging LinkedIn posts that increase your visibility and engagement on the platform.",
        "step": [
            {
                "@type": "HowToStep",
                "name": "Enter Topic",
                "text": "Type the main topic you want to create a post about"
            },
            {
                "@type": "HowToStep",
                "name": "Select Style",
                "text": "Choose the tone and style that fits your personal brand"
            },
            {
                "@type": "HowToStep",
                "name": "Generate Content",
                "text": "Click 'Generate' to create AI-powered content for your post"
            },
            {
                "@type": "HowToStep",
                "name": "Copy and Post",
                "text": "Copy the generated content and post it to your LinkedIn profile"
            }
        ],
        "tool": {
            "@type": "HowToTool",
            "name": "LinkedIn Post Generator"
        }
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
                structuredData={[toolSchema, faqSchema, breadcrumbSchema, howToSchema]}
                lastUpdated="2023-11-15"
                language="en-US"
            />

            <LinkedInPostGenerator />
            <FAQ faqData={faqDataLinkedin} toolName="Viral LinkedIn Post Generator" />
        </>
    );
};

export default LinkedInPostGeneratorPage;
