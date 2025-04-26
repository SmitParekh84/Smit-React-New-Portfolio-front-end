import React from "react";
import ToolsSection from "../components/ToolSection/ToolsSection";
import { faqDataTools } from "../data/data";
import FAQ from "../components/FAQ/FAQ";
import SEO from "../components/SEO/SEO";
import ToolsHero from "../components/ToolsHero/ToolsHero";
import ToolsContentDetails from "../components/ToolsContentDetails/ToolsContentDetails";
import Features from "../components/Features/Features";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import TrustSignals from "../components/TrustSignals/TrustSignals";
import CTASection from "../components/CTASection/CTASection";
import ToolsDetailsComparison from "../components/ToolsDetailsComparison/ToolsDetailsComparison";

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

    // New features section data
    const featuresData = [
        {
            icon: "uil-bolt",
            title: "Time-Saving Efficiency",
            description: "Our tools are designed to automate tedious tasks, reducing hours of manual work to just a few seconds. Increase your productivity with our optimized workflows."
        },
        {
            icon: "uil-shield-check",
            title: "Enterprise-Grade Quality",
            description: "Enjoy professional-level results without the enterprise price tag. Our tools use advanced algorithms to deliver high-quality output comparable to paid solutions."
        },
        {
            icon: "uil-lock",
            title: "Privacy First Approach",
            description: "Your data security is our priority. All processing happens in your browser where possible, and we never store your files on our servers without explicit permission."
        },
        {
            icon: "uil-analytics",
            title: "Data-Driven Results",
            description: "Our tools are built on extensive research and best practices to provide optimal results for your specific use cases and industry standards."
        },
        {
            icon: "uil-users-alt",
            title: "Built for Professionals",
            description: "Created with real-world professional needs in mind, our tools solve genuine pain points faced by marketers, developers, designers, and content creators."
        },
        {
            icon: "uil-headphones",
            title: "Responsive Support",
            description: "Although our tools are free, we provide responsive support to help you maximize their potential. Our documentation and help resources are comprehensive."
        }
    ];

    // How it works steps
    const howItWorksSteps = [
        {
            title: "Select Your Tool",
            description: "Browse our collection of free tools and choose the one that meets your specific needs. Each tool is designed to solve a unique professional challenge."
        },
        {
            title: "Follow Simple Instructions",
            description: "Each tool has a user-friendly interface with clear instructions. No technical knowledge required - our tools are accessible to everyone regardless of skill level."
        },
        {
            title: "Process Your Content",
            description: "Upload your files, enter your data, or provide the necessary input. Our advanced algorithms will process your request instantly with optimal results."
        },
        {
            title: "Download or Use Results",
            description: "Once processing is complete, you can download your results, copy generated content, or use the output directly in your projects without restrictions."
        }
    ];

    const ogDescription = "Access powerful, free online tools including AI-powered LinkedIn Post Generator, Background Remover, and Meta Tag Checker. Boost productivity and enhance your marketing efforts with no cost.";
    const pageUrl = "https://www.smitparekh.studio/tools";
    const imageUrl = "https://www.smitparekh.studio/images/Tools-Page-Image.webp";
    const lastUpdatedDate = new Date().toISOString().split("T")[0]; // Use current date for freshness

    return (
        <>
            <SEO 
                title="Free Online Tools for Productivity & Marketing | Smit Parekh"
                description="Access powerful, free online tools including AI-powered LinkedIn Post Generator, Background Remover, and Meta Tag Checker. Boost productivity and enhance your marketing efforts with no cost."
                keywords="free online tools, productivity tools, marketing tools, background remover, LinkedIn post generator, meta tag checker, free SEO tools, AI tools free, Smit Parekh tools, best free online tools 2025, professional tools for marketers, free developer tools"
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
                <meta property="article:modified_time" content={`${lastUpdatedDate}T10:15:00+00:00`} />
                <meta name="robots" content="index, follow, max-image-preview:large" />
                <meta name="revisit-after" content="7 days" />
                <meta name="rating" content="General" />
            </SEO>

            {/* Hero Section with engaging intro */}
            

            {/* Main Tools Grid Section */}
            <ToolsSection />

            

            {/* Features Section */}
            <Features 
                title="Why Use Our Free Tools?"
                subtitle="Features That Set Us Apart"
                features={featuresData}
            />

            {/* Comparison section */}
            <ToolsDetailsComparison />

            {/* How it Works Section */}
            <HowItWorks 
                title="How Our Tools Work"
                subtitle="Simple Process, Powerful Results"
                steps={howItWorksSteps}
            />

            {/* Trust Signals */}
            <TrustSignals 
                title="Trusted by Professionals"
                subtitle="Join thousands of users who rely on our tools daily"
                companies={['Google', 'Microsoft', 'Amazon', 'Shopify', 'Adobe']}
                animated={true}
            />

            {/* FAQ Section */}
            <FAQ faqData={faqDataTools} toolName="Free Tools" />

            {/* Call to Action */}
            <CTASection
                title="Need Custom Development?"
                subtitle="Looking for tailored solutions for your business? Contact me for custom development services."
                buttonText="Get in Touch"
                buttonLink="/contact"
                buttonIcon="uil-message"
            />
        </>
    );
};

export default ToolsPage;
