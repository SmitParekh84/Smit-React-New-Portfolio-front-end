import React from "react";
import ImageConverter from "../components/ImageConverter/ImageConverter";
import FAQ from "../components/FAQ/FAQ";
import SEO from "../components/SEO/SEO";
import { faqDataImageConverter } from "../data/data";

const ImageConverterPage = () => {
    const apiUrl = import.meta.env.VITE_API_URL;
    
    // FAQ Schema
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqDataImageConverter.map(item => ({
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
        "name": "Free Image Converter Tool",
        "applicationCategory": "UtilitiesApplication, WebApplication",
        "operatingSystem": "Web",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "description": "Convert images between multiple formats including PNG, JPG, WEBP and more. This free online tool makes format conversion simple and fast with no loss in quality.",
        "featureList": "Convert images to multiple formats, Maintain original image quality, Fast processing, Support for PNG, JPG, WEBP, and more formats, Batch conversion available",
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
                "name": "Image Converter",
                "item": "https://www.smitparekh.studio/image-converter"
            }
        ]
    };

    return (
        <>
            <SEO 
                title="Free Image Converter | Convert Images Between Multiple Formats"
                description="Convert images online between PNG, JPG, WEBP, GIF and more formats. Fast, free image converter with no quality loss and no registration required."
                keywords="free image converter, convert images online, PNG to JPG, JPG to WEBP, image format converter, convert to WEBP, online image converter, free format conversion"
                canonicalUrl="https://www.smitparekh.studio/image-converter"
                ogTitle="Free Online Image Converter - Convert Between Multiple Formats"
                ogDescription="Convert your images between PNG, JPG, WEBP and other formats with this free online tool. No signup, no watermarks."
                ogImage="https://www.smitparekh.studio/images/Image-Converter-Tool.webp"
                twitterImage="https://www.smitparekh.studio/images/Image-Converter-Tool.webp"
                structuredData={[toolSchema, faqSchema, breadcrumbSchema]}
            />
            
            <ImageConverter
                toolName="Image Converter"
                apiUrl={apiUrl}
            />
            <FAQ faqData={faqDataImageConverter} toolName="Image Converter" />
        </>
    );
};

export default ImageConverterPage;
