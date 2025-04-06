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
  twitterImage,
  twitterTitle,
  structuredData = [],
  lastUpdated,
  language = "en-US",
  author = "Smit Parekh"
}) => {
  // Use provided OG title or fallback to main title
  const finalOgTitle = ogTitle || title;
  // Use provided Twitter title or fallback to OG title
  const finalTwitterTitle = twitterTitle || finalOgTitle;

  return (
    <Helmet>
      {/* Basic Metadata */}
      <html lang={language} />
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />
      {lastUpdated && <meta name="last-modified" content={lastUpdated} />}
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={finalOgTitle} />
      <meta property="og:description" content={description} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta property="og:site_name" content="Smit Parekh Studio" />
      {lastUpdated && <meta property="og:updated_time" content={lastUpdated} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={finalTwitterTitle} />
      <meta name="twitter:description" content={description} />
      {twitterImage && <meta name="twitter:image" content={twitterImage} />}
      <meta name="twitter:creator" content="@SmitParekh84" />
      
      {/* Mobile Specific */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#6E57E0" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Structured Data */}
      {structuredData && structuredData.map((data, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
      
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="rating" content="General" />
      <meta name="format-detection" content="telephone=no" />
    </Helmet>
  );
};

export default SEO;
