// src/Sitemap.jsx
import { useEffect, useState } from 'react';
import { SitemapGenerator } from 'react-sitemap-generator';

const Sitemap = () => {
    const [sitemapUrls, setSitemapUrls] = useState([]);
    
    useEffect(() => {
        // Try to fetch the sitemap URLs from the generated JSON file
        fetch('/sitemapUrls.json')
            .then(response => response.json())
            .then(data => {
                // Transform the data to the format expected by SitemapGenerator
                const formattedUrls = data.map(item => ({
                    url: `https://www.smitparekh.studio${item.url}`,
                    priority: item.priority.toString(),
                    changefreq: item.changefreq,
                    lastmod: item.lastmod
                }));
                setSitemapUrls(formattedUrls);
            })
            .catch(error => {
                console.error('Failed to load sitemap data:', error);
                // Fallback to hardcoded URLs
                setSitemapUrls([
                    {
                        url: 'https://www.smitparekh.studio/',
                        priority: '1.0',
                        changefreq: 'weekly',
                        lastmod: new Date().toISOString().split('T')[0]
                    },
                    {
                        url: 'https://www.smitparekh.studio/about',
                        priority: '0.9',
                        changefreq: 'monthly',
                        lastmod: '2023-11-01'
                    },
                    {
                        url: 'https://www.smitparekh.studio/skills',
                        priority: '0.8',
                        changefreq: 'monthly',
                        lastmod: '2023-09-25'
                    },
                    {
                        url: 'https://www.smitparekh.studio/portfolio',
                        priority: '0.9',
                        changefreq: 'monthly',
                        lastmod: '2023-11-20'
                    },
                    {
                        url: 'https://www.smitparekh.studio/project',
                        priority: '0.9',
                        changefreq: 'monthly',
                        lastmod: '2023-11-20'
                    },
                    {
                        url: 'https://www.smitparekh.studio/contact',
                        priority: '0.8',
                        changefreq: 'yearly',
                        lastmod: '2023-10-05'
                    },
                    {
                        url: 'https://www.smitparekh.studio/services',
                        priority: '0.9',
                        changefreq: 'monthly',
                        lastmod: '2023-11-10'
                    },
                    {
                        url: 'https://www.smitparekh.studio/free-tools',
                        priority: '0.9',
                        changefreq: 'weekly',
                        lastmod: '2023-10-15'
                    },
                    {
                        url: 'https://www.smitparekh.studio/free-tools/background-remover',
                        priority: '0.8',
                        changefreq: 'monthly',
                        lastmod: '2023-10-20'
                    },
                    {
                        url: 'https://www.smitparekh.studio/free-tools/viral-linkedin-post-generator',
                        priority: '0.8',
                        changefreq: 'monthly',
                        lastmod: '2023-11-15'
                    },
                    {
                        url: 'https://www.smitparekh.studio/free-tools/meta-tag-checker',
                        priority: '0.8',
                        changefreq: 'monthly',
                        lastmod: '2023-10-30'
                    },
                    {
                        url: 'https://www.smitparekh.studio/free-tools/qr-code-generator',
                        priority: '0.7',
                        changefreq: 'monthly',
                        lastmod: '2023-10-10'
                    },
                    {
                        url: 'https://www.smitparekh.studio/free-tools/image-compressor',
                        priority: '0.7',
                        changefreq: 'monthly',
                        lastmod: '2023-09-15'
                    },
                    {
                        url: 'https://www.smitparekh.studio/free-tools/image-converter',
                        priority: '0.7',
                        changefreq: 'monthly',
                        lastmod: '2023-09-20'
                    },
                    {
                        url: 'https://www.smitparekh.studio/free-tools/seo-analyzer',
                        priority: '0.8',
                        changefreq: 'monthly',
                        lastmod: '2023-11-12'
                    }
                ]);
            });
    }, []);

    if (sitemapUrls.length === 0) {
        return null; // Don't render until we have data
    }

    return (
        <SitemapGenerator urls={sitemapUrls} />
    );
};

export default Sitemap;

