import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
    title, 
    description, 
    keywords = "", 
    canonicalUrl, 
    ogType = "website", 
    ogImage, 
    ogTitle,
    twitterImage, 
    twitterTitle,
    twitterCard = "summary_large_image",
    twitterCreator = "@smitparekh",
    twitterSite = "@smitparekh",
    structuredData,
    articlePublishedTime,
    articleModifiedTime,
    children,
    lastUpdated,
    language = "en-US",
    author = "Smit Parekh",
    alternateLanguages = [],
    noIndex = false,
}) => {
    
    // Use default values if specific og/twitter values aren't provided
    const metaOgTitle = ogTitle || title;
    const metaTwitterTitle = twitterTitle || title;
    const metaOgImage = ogImage || "https://www.smitparekh.studio/images/default-og-image.webp";
    const metaTwitterImage = twitterImage || metaOgImage;

    // Convert multiple structured data objects to string
    const structuredDataString = Array.isArray(structuredData) 
        ? structuredData.map(data => JSON.stringify(data)) 
        : structuredData ? [JSON.stringify(structuredData)] : [];

    return (
        <Helmet prioritizeSeoTags>
            {/* Primary Meta Tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />
            <meta name="language" content={language} />
            {lastUpdated && <meta name="last-updated" content={lastUpdated} />}

            {/* Robots meta tags */}
            {noIndex ? (
                <meta name="robots" content="noindex, nofollow" />
            ) : (
                <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
            )}

            {/* Canonical URL */}
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={metaOgTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={metaOgImage} />
            <meta property="og:site_name" content="Smit Parekh" />
            <meta property="og:locale" content="en_US" />
            {articlePublishedTime && <meta property="article:published_time" content={articlePublishedTime} />}
            {articleModifiedTime && <meta property="article:modified_time" content={articleModifiedTime} />}

            {/* Twitter */}
            <meta name="twitter:card" content={twitterCard} />
            <meta name="twitter:url" content={canonicalUrl} />
            <meta name="twitter:title" content={metaTwitterTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={metaTwitterImage} />
            <meta name="twitter:creator" content={twitterCreator} />
            <meta name="twitter:site" content={twitterSite} />

            {/* Alternate languages */}
            {alternateLanguages.map((alt) => (
                <link 
                    key={alt.lang} 
                    rel="alternate" 
                    hrefLang={alt.lang} 
                    href={alt.url} 
                />
            ))}

            {/* Structured Data - handles multiple schema objects */}
            {structuredDataString.map((dataString, index) => (
                <script 
                    key={`structured-data-${index}`} 
                    type="application/ld+json"
                >
                    {dataString}
                </script>
            ))}

            {/* Mobile-specific metadata */}
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black" />
            <meta name="format-detection" content="telephone=no" />
            
            {/* Additional meta tags */}
            {children}
        </Helmet>
    );
};

export default SEO;
