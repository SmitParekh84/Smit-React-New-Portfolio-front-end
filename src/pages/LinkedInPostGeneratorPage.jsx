// Import React and the About component
import React from "react";
import { Helmet } from "react-helmet-async";
import LinkedInPostGenerator from "../components/LinkedInPostGenerator/LinkedInPostGenerator";
// Create the AboutPage component
const LinkedInPostGeneratorPage = () => {
    return (
        <>
            <Helmet>
                <title>Free AI-Powered Viral LinkedIn Post Generator | Boost Engagement with Creative Content</title>
                <meta
                    name="description"
                    content="Generate free viral LinkedIn posts with AI! Our AI-powered, free tool helps you craft engaging content to boost your professional visibility and foster connections."
                />
                <meta
                    name="keywords"
                    content="Free AI tool, Free AI LinkedIn post generator, viral posts, social media engagement, LinkedIn content, digital marketing, professional content, free AI post creation"
                />
                <meta name="author" content="Smit Parekh" />
                <link rel="canonical" href="https://www.smitparekh.studio/viral-linkedin-post-generator" />

                {/* Open Graph Tags */}
                <meta property="og:title" content="Free AI-Powered Viral LinkedIn Post Generator | Boost Engagement with Creative Content" />
                <meta
                    property="og:description"
                    content="Create free viral LinkedIn posts effortlessly with AI! Generate high-quality content that resonates with your professional audience and drives engagement."
                />
                <meta
                    property="og:image"
                    content="https://www.smitparekh.studio/images/viral-linkedin-post-generator.webp"
                />
                <meta property="og:url" content="https://www.smitparekh.studio/viral-linkedin-post-generator" />
                <meta property="og:type" content="website" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Free AI-Powered Viral LinkedIn Post Generator | Boost Engagement with Creative Content" />
                <meta
                    name="twitter:description"
                    content="Generate free viral LinkedIn posts with AI to boost your professional visibility. Engage your audience with compelling content created in minutes!"
                />
                <meta name="twitter:image" content="https://www.smitparekh.studio/images/viral-linkedin-post-generator.webp" />

                {/* Structured Data - JSON-LD */}
                <script type="application/ld+json">
                    {`
        {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Free AI-Powered Viral LinkedIn Post Generator",
            "url": "https://www.smitparekh.studio/viral-linkedin-post-generator",
            "description": "Generate free viral LinkedIn posts effortlessly with AI! Create engaging content that drives professional visibility and engagement.",
            "publisher": {
                "@type": "Organization",
                "name": "Smit Parekh Studio"
            },
            "image": "https://www.smitparekh.studio/images/viral-linkedin-post-generator.webp"
        }
        `}
                </script>
            </Helmet>






            <LinkedInPostGenerator />
<div>

</div>
        </>

    );
};




export default LinkedInPostGeneratorPage;
