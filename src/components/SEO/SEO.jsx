import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({ 
  title, 
  description, 
  keywords, 
  author = "Smit Parekh", 
  canonicalUrl, 
  ogType = "website", 
  ogTitle, 
  ogDescription, 
  ogImage, 
  twitterTitle, 
  twitterDescription, 
  twitterImage, 
  structuredData,
  children 
}) => {
  // Set defaults for optional social media tags
  ogTitle = ogTitle || title;
  ogDescription = ogDescription || description;
  twitterTitle = twitterTitle || title;
  twitterDescription = twitterDescription || description;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Smit Parekh Studio" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={twitterTitle} />
      <meta name="twitter:description" content={twitterDescription} />
      {twitterImage && <meta name="twitter:image" content={twitterImage} />}
      <meta name="twitter:creator" content="@hunteredits84" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {typeof structuredData === 'string' 
            ? structuredData 
            : JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Additional elements passed as children */}
      {children}
    </Helmet>
  );
};

export default SEO;
