import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogType = "website",
  ogImage,
  ogTitle,
  ogDescription,
  twitterImage,
  twitterTitle,
  twitterDescription,
  structuredData = [],
  lastUpdated,
  language = "en-US",
  author = "Smit Parekh",
  indexPage = true,
  children
}) => {
  // Use provided OG title or fallback to main title
  const finalOgTitle = ogTitle || title;
  // Use provided Twitter title or fallback to OG title
  const finalTwitterTitle = twitterTitle || finalOgTitle;
  // Use provided descriptions or fallback to main description
  const finalOgDescription = ogDescription || description;
  const finalTwitterDescription = twitterDescription || finalOgDescription;

  // Ensure structuredData is an array
  const structuredDataArray = Array.isArray(structuredData) 
    ? structuredData 
    : structuredData ? [structuredData] : [];

  // Format date if provided but not in ISO string format
  const formattedLastUpdated = lastUpdated && typeof lastUpdated === 'string' && !lastUpdated.includes('T') 
    ? new Date(lastUpdated).toISOString()
    : lastUpdated;

  return (
    <Helmet>
      {/* Basic Metadata */}
      <html lang={language} />
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />
      {formattedLastUpdated && <meta name="last-modified" content={formattedLastUpdated} />}
      
      {/* Robots control */}
      <meta name="robots" content={indexPage ? "index, follow, max-image-preview:large" : "noindex, nofollow"} />
      <meta name="googlebot" content={indexPage ? "index, follow" : "noindex, nofollow"} />
      
      {/* Canonical URL - critical for SEO */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={finalOgTitle} />
      <meta property="og:description" content={finalOgDescription} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      {ogImage && <meta property="og:image:secure_url" content={ogImage} />}
      {ogImage && <meta property="og:image:width" content="1200" />}
      {ogImage && <meta property="og:image:height" content="630" />}
      {ogImage && <meta property="og:image:alt" content={finalOgTitle} />}
      <meta property="og:site_name" content="Smit Parekh Studio" />
      {formattedLastUpdated && <meta property="article:modified_time" content={formattedLastUpdated} />}
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@SmitParekh84" />
      <meta name="twitter:creator" content="@SmitParekh84" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={finalTwitterTitle} />
      <meta name="twitter:description" content={finalTwitterDescription} />
      {twitterImage && <meta name="twitter:image" content={twitterImage} />}
      {twitterImage && <meta name="twitter:image:alt" content={finalTwitterTitle} />}
      
      {/* Mobile Specific */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#6E57E0" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Structured Data */}
      {structuredDataArray.map((data, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
      
      {/* Allow child elements (additional meta tags) */}
      {children}
    </Helmet>
  );
};

export default SEO;
