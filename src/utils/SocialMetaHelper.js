/**
 * Advanced SEO helper functions for maximum search engine visibility
 */

// Generates a complete URL with the site domain
export const getFullUrl = (path) => {
  const baseUrl = 'https://www.smitparekh.studio';
  // Make sure path starts with / and there's no double //
  const formattedPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${formattedPath}`;
};

// Creates standard meta properties for social sharing with enhanced parameters
export const getSocialMeta = (title, description, imagePath, url, options = {}) => {
  const fullImageUrl = imagePath?.startsWith('http') ? imagePath : getFullUrl(imagePath || '/images/default-og-image.webp');
  const fullPageUrl = getFullUrl(url);
  
  return {
    title: title,
    description: description,
    canonicalUrl: fullPageUrl,
    ogImage: fullImageUrl,
    ogTitle: options.ogTitle || title,
    twitterImage: options.twitterImage || fullImageUrl,
    twitterTitle: options.twitterTitle || title,
    // Advanced SEO options
    ogType: options.ogType || 'website',
    ogLocale: options.ogLocale || 'en_US',
    twitterCard: options.twitterCard || 'summary_large_image',
    twitterCreator: options.twitterCreator || '@smitparekh',
    twitterSite: options.twitterSite || '@smitparekh',
    articlePublishedTime: options.publishedTime || null,
    articleModifiedTime: options.modifiedTime || new Date().toISOString(),
    keywords: options.keywords || '',
  };
};

// Prepares schema.org structured data with proper URLs
export const prepareStructuredData = (data) => {
  // Deep clone the data to avoid mutations
  const processedData = JSON.parse(JSON.stringify(data));
  
  // Function to recursively process all URLs in the object
  const processUrls = (obj) => {
    if (!obj || typeof obj !== 'object') return;
    
    Object.keys(obj).forEach(key => {
      // Process URL properties
      if (key === 'url' && typeof obj[key] === 'string' && !obj[key].startsWith('http')) {
        obj[key] = getFullUrl(obj[key]);
      }
      
      // Process image URLs
      if (key === 'image' && typeof obj[key] === 'string' && !obj[key].startsWith('http')) {
        obj[key] = getFullUrl(obj[key]);
      }
      
      // Process sameAs arrays (social media links)
      if (key === 'sameAs' && Array.isArray(obj[key])) {
        obj[key] = obj[key].map(url => 
          url.startsWith('http') ? url : getFullUrl(url)
        );
      }
      
      // Recursively process nested objects and arrays
      if (typeof obj[key] === 'object') {
        processUrls(obj[key]);
      }
    });
  };
  
  processUrls(processedData);
  return processedData;
};

// Generate breadcrumb schema for improved search appearance
export const generateBreadcrumbSchema = (items) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": getFullUrl(item.path)
    }))
  };
};

// Generate article schema for blog posts and articles
export const generateArticleSchema = (article) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "image": getFullUrl(article.image),
    "author": {
      "@type": "Person",
      "name": article.author || "Smit Parekh",
      "url": getFullUrl("/portfolio")
    },
    "publisher": {
      "@type": "Organization",
      "name": "Smit Parekh Studio",
      "logo": {
        "@type": "ImageObject",
        "url": getFullUrl("/images/smit-parekh-logo.webp")
      }
    },
    "datePublished": article.publishedDate,
    "dateModified": article.modifiedDate || article.publishedDate
  };
};

// Generate FAQPage schema for FAQ sections
export const generateFAQSchema = (faqs) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

// Generate Tool schema for software tools
export const generateToolSchema = (tool) => {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": tool.title,
    "description": tool.description,
    "applicationCategory": "WebApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "screenshot": tool.screenshot ? getFullUrl(tool.screenshot) : undefined,
    "featureList": tool.features?.join(", ")
  };
};
