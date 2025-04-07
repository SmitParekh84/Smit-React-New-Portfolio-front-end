import React from "react";
import LinkedInMediaDownloader from "../components/LinkedInMediaDownloader/LinkedInMediaDownloader";
import FAQ from "../components/FAQ/FAQ";
import SEO from "../components/SEO/SEO";

const LinkedInMediaDownloaderPage = () => {
    // FAQ Schema
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Is it legal to download LinkedIn videos?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Downloading LinkedIn videos for personal use is generally acceptable, but redistribution or commercial use may violate LinkedIn's terms of service. Always respect copyright laws and content ownership."
                }
            },
            {
                "@type": "Question",
                "name": "Why can't I download some LinkedIn videos?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Some LinkedIn videos might be private or have restricted access. This tool only works with public LinkedIn posts that anyone can view without logging in."
                }
            },
            {
                "@type": "Question",
                "name": "What LinkedIn photo types can I download?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can download photos from public LinkedIn posts, including profile pictures, cover images, and images shared in posts."
                }
            },
            {
                "@type": "Question",
                "name": "Do you store the downloaded videos?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No, we don't store any videos or images. This tool processes the content in real-time and delivers it directly to you without saving copies on our servers."
                }
            },
            {
                "@type": "Question",
                "name": "What file format are the downloaded videos?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "LinkedIn videos are typically downloaded in MP4 format, which is widely supported by most video players and devices."
                }
            }
        ]
    };

    // SoftwareApplication schema for the tool
    const toolSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "LinkedIn Media Downloader",
        "applicationCategory": "UtilityApplication",
        "operatingSystem": "Web",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "description": "Free tool to download videos and photos from public LinkedIn posts for personal use.",
        "featureList": "LinkedIn video downloader, LinkedIn photo downloader, MP4 video downloads, High-quality image downloads",
        "creator": {
            "@type": "Person",
            "name": "Smit Parekh"
        },
        "datePublished": "2023-12-15",
        "dateModified": "2023-12-15"
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
                "name": "LinkedIn Media Downloader",
                "item": "https://www.smitparekh.studio/free-tools/linkedin-media-downloader"
            }
        ]
    };

    // FAQ data for the FAQ component
    const faqDataLinkedinDownloader = [
        {
            question: "Is it legal to download LinkedIn videos?",
            answer: "Downloading LinkedIn videos for personal use is generally acceptable, but redistribution or commercial use may violate LinkedIn's terms of service. Always respect copyright laws and content ownership."
        },
        {
            question: "Why can't I download some LinkedIn videos?",
            answer: "Some LinkedIn videos might be private or have restricted access. This tool only works with public LinkedIn posts that anyone can view without logging in."
        },
        {
            question: "What LinkedIn photo types can I download?",
            answer: "You can download photos from public LinkedIn posts, including profile pictures, cover images, and images shared in posts."
        },
        {
            question: "Do you store the downloaded videos?",
            answer: "No, we don't store any videos or images. This tool processes the content in real-time and delivers it directly to you without saving copies on our servers."
        },
        {
            question: "What file format are the downloaded videos?",
            answer: "LinkedIn videos are typically downloaded in MP4 format, which is widely supported by most video players and devices."
        }
    ];

    return (
        <>
            <SEO 
                title="LinkedIn Media Downloader | Download Videos & Photos from LinkedIn"
                description="Download videos and photos from public LinkedIn posts with our free online tool. Save LinkedIn media for personal use without watermarks or quality loss."
                keywords="LinkedIn video downloader, LinkedIn photo downloader, download LinkedIn videos, save LinkedIn photos, LinkedIn media downloader"
                canonicalUrl="https://www.smitparekh.studio/free-tools/linkedin-media-downloader"
                ogImage="https://www.smitparekh.studio/images/linkedin-media-downloader.webp"
                ogTitle="Free LinkedIn Media Downloader - Save Videos & Photos"
                ogDescription="Download videos and photos from LinkedIn posts easily with our free online tool. No registration, no watermarks."
                twitterImage="https://www.smitparekh.studio/images/linkedin-media-downloader.webp"
                twitterTitle="LinkedIn Media Downloader - Download Videos & Photos"
                structuredData={[toolSchema, faqSchema, breadcrumbSchema]}
                lastUpdated="2023-12-15"
                language="en-US"
            />
            
            <LinkedInMediaDownloader />
            <FAQ faqData={faqDataLinkedinDownloader} toolName="LinkedIn Media Downloader" />
        </>
    );
};

export default LinkedInMediaDownloaderPage;
