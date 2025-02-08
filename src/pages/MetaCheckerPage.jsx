// Import React and the About component
import React from "react";
import { Helmet } from "react-helmet-async";
import { faqDataMetaChecker } from "../data/data";
import FAQ from "../components/FAQ/FAQ";
import MetaChecker from "../components/MetaChecker/MetaChecker";

// Create the AboutPage component
const MetaCheckerPage = () => {
    const apiUrl = import.meta.env.VITE_API_URL;

    return (
        <>
            <Helmet>
                <title>Free Meta Checker Tool - Analyze Your Website&apos;s Meta Tags | Smit Parekh</title>

                <meta
                    name="description"
                    content="Use the Meta Checker Tool to analyze your website's meta tags, including title, description, Open Graph, and Twitter Cards. Ensure your webpage is optimized for search engines and social media."
                />
                <meta
                    name="keywords"
                    content="Meta Checker, meta tags, SEO tool, Open Graph, Twitter Cards, website optimization, search engine optimization, Smit Parekh"
                />
                <meta name="author" content="Smit Parekh" />
                <link rel="canonical" href="https://www.smitparekh.studio/meta-checker" />

                {/* Open Graph Tags */}
                <meta property="og:title" content="Meta Checker Tool - Analyze Your Website's Meta Tags | Smit Parekh" />
                <meta
                    property="og:description"
                    content="Analyze and optimize your website's meta tags using the Meta Checker Tool. Check your title, description, image, and social media metadata for better SEO and visibility."
                />
                <meta
                    property="og:image"
                    content="https://www.smitparekh.studio/images/Meta-Checker-Image.webp"
                />
                <meta property="og:url" content="https://www.smitparekh.studio/meta-checker" />
                <meta property="og:type" content="website" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Meta Checker Tool - Analyze Your Website's Meta Tags | Smit Parekh" />
                <meta
                    name="twitter:description"
                    content="Check your website's meta tags with the Meta Checker Tool by Smit Parekh. Ensure your page is properly optimized for search engines and social media platforms."
                />
                <meta name="twitter:image" content="https://www.smitparekh.studio/images/Meta-Checker-Image.webp" />

                {/* Structured Data - JSON-LD */}
                <script type="application/ld+json">
                    {`
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Meta Checker Tool - Smit Parekh",
        "url": "https://www.smitparekh.studio/meta-checker",
        "description": "Use the Meta Checker Tool to analyze your website's meta tags and optimize for SEO. Check your title, description, Open Graph, and Twitter Cards.",
        "image": "https://www.smitparekh.studio/images/Meta-Checker-Image.webp",
        "publisher": {
          "@type": "Organization",
          "name": "Smit Parekh Studio",
          "url": "https://www.smitparekh.studio"
        }
      }
    `}
                </script>
            </Helmet>





            <MetaChecker apiUrl={apiUrl} toolName="Website Meta Tag Checker" />
            <FAQ faqData={faqDataMetaChecker} toolName="Website Meta Tag Checker" />


        </>

    );
};



export default MetaCheckerPage;
