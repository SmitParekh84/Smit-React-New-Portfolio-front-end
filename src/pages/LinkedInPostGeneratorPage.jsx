// Import React and the About component
import React from "react";
import { Helmet } from "react-helmet-async";
import LinkedInPostGenerator from "../components/LinkedInPostGenerator";
// Create the AboutPage component
const LinkedInPostGeneratorPage = () => {
    return (
        <>
            <Helmet>
                <title>Viral LinkedIn Post Generator | Boost Engagement with Creative Content</title>
                <meta
                    name="description"
                    content="Generate viral LinkedIn posts with ease! Our tool helps you craft engaging content to boost your professional visibility and foster connections."
                />
                <meta
                    name="keywords"
                    content="LinkedIn post generator, viral posts, social media engagement, LinkedIn content, digital marketing, professional content, post creation"
                />
                <meta name="author" content="Smit Parekh" />
                <link rel="canonical" href="https://www.smitparekh.studio/viral-linkedin-post-generator" />

                {/* Open Graph Tags */}
                <meta property="og:title" content="Viral LinkedIn Post Generator | Boost Engagement with Creative Content" />
                <meta
                    property="og:description"
                    content="Create viral LinkedIn posts effortlessly! Generate high-quality content that resonates with your professional audience and drives engagement."
                />
                <meta
                    property="og:image"
                    content="https://www.smitparekh.studio/images/viral-linkedin-post-generator.webp"
                />
                <meta property="og:url" content="https://www.smitparekh.studio/viral-linkedin-post-generator" />
                <meta property="og:type" content="website" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Viral LinkedIn Post Generator | Boost Engagement with Creative Content" />
                <meta
                    name="twitter:description"
                    content="Generate viral LinkedIn posts to boost your professional visibility. Engage your audience with compelling content created in minutes!"
                />
                <meta name="twitter:image" content="https://www.smitparekh.studio/images/viral-linkedin-post-generator.webp" />

                {/* Structured Data - JSON-LD */}
                <script type="application/ld+json">
                    {`
        {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Viral LinkedIn Post Generator",
            "url": "https://www.smitparekh.studio/viral-linkedin-post-generator",
            "description": "Generate viral LinkedIn posts with ease! Create engaging content that drives professional visibility and engagement.",
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

        </>

    );
};




export default LinkedInPostGeneratorPage;
