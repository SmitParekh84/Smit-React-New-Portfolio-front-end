import React from "react";
import { faqDataMetaChecker } from "../data/data";
import FAQ from "../components/FAQ/FAQ";
import MetaChecker from "../components/MetaChecker/MetaChecker";
import SEO from "../components/SEO/SEO";
import { 
    prepareStructuredData, 
    generateFAQSchema,
    getFullUrl,
    generateToolSchema,
    generateBreadcrumbSchema
} from "../utils/SocialMetaHelper";

const MetaCheckerPage = () => {
    const apiUrl = import.meta.env.VITE_API_URL;
    
    // FAQ Schema using helper function
    const faqSchema = generateFAQSchema(faqDataMetaChecker);

    // SoftwareApplication schema for the tool
    const toolSchema = generateToolSchema({
        title: "Meta Tag Checker Tool",
        description: "Use the Meta Tag Checker Tool to analyze your website's meta tags and optimize for SEO. Check your title, description, Open Graph, and Twitter Cards.",
        features: [
            "Analyze website meta tags", 
            "Verify Open Graph and Twitter Cards", 
            "Check SEO compliance"
        ],
        screenshot: "/images/Meta-Checker-Image.webp"
    });

    // Add additional tool-specific properties
    toolSchema.applicationCategory = "SEOApplication";
    toolSchema.creator = {
        "@type": "Person",
        "name": "Smit Parekh"
    };
    toolSchema.aggregateRating = {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "72"
    };
    toolSchema.datePublished = "2023-06-20";
    toolSchema.dateModified = "2023-10-30";

    // Breadcrumb structured data using helper function
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Free Tools", path: "/tools" },
        { name: "Meta Tag Checker", path: "/meta-checker" }
    ]);

    // Tool benefits schema (How-To)
    const howToSchema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Check Website Meta Tags",
        "description": "Follow these steps to check and optimize your website's meta tags for better SEO and social media visibility.",
        "step": [
            {
                "@type": "HowToStep",
                "name": "Enter URL",
                "text": "Enter the URL of the website you want to analyze"
            },
            {
                "@type": "HowToStep",
                "name": "Analyze Results",
                "text": "Review the meta tags, Open Graph tags, and Twitter Card information"
            },
            {
                "@type": "HowToStep",
                "name": "Implement Recommendations",
                "text": "Use the suggestions to improve your website's metadata"
            }
        ],
        "tool": {
            "@type": "HowToTool",
            "name": "Meta Tag Checker Tool"
        }
    };

    // Process all structured data to ensure proper URLs
    const processedToolSchema = prepareStructuredData(toolSchema);
    const processedFaqSchema = prepareStructuredData(faqSchema);
    const processedBreadcrumbSchema = prepareStructuredData(breadcrumbSchema);
    const processedHowToSchema = prepareStructuredData(howToSchema);

    const pageUrl = "/meta-checker";
    const imageUrl = "/images/Meta-Checker-Image.webp";
    const pageDescription = "Instantly analyze your website's meta tags, Open Graph tags, and Twitter Cards with our free Meta Tag Checker. Improve your SEO and social media presence with actionable insights.";
    
    return (
        <>
            <SEO 
                title="Free Meta Tag Checker Tool | Analyze & Optimize Your Website SEO"
                description={pageDescription}
                keywords="meta tag checker tool, SEO analyzer, Open Graph validation, Twitter Card checker, website metadata tool, free SEO tool, meta description analyzer, social media preview tester"
                canonicalUrl={getFullUrl(pageUrl)}
                ogImage={getFullUrl(imageUrl)}
                ogTitle="Free Meta Tag Checker Tool | Analyze Your Website's SEO"
                ogDescription={pageDescription}
                ogType="website"
                twitterImage={getFullUrl(imageUrl)}
                twitterTitle="Meta Tag Checker: Optimize Your Website SEO"
                twitterDescription={pageDescription}
                structuredData={[processedToolSchema, processedFaqSchema, processedBreadcrumbSchema, processedHowToSchema]}
                lastUpdated="2023-10-30T14:25:00Z"
                language="en-US"
                author="Smit Parekh"
                alternateLanguages={[
                    { lang: "en", url: getFullUrl(pageUrl) }
                ]}
            >
                <meta name="application-name" content="Meta Tag Checker" />
                <meta name="msapplication-TileColor" content="#6E57E0" />
                <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
                <link rel="preload" href={getFullUrl(imageUrl)} as="image" />
            </SEO>

            <MetaChecker apiUrl={apiUrl} toolName="Website Meta Tag Checker" />
            <FAQ faqData={faqDataMetaChecker} toolName="Website Meta Tag Checker" />
        </>
    );
};

export default MetaCheckerPage;
