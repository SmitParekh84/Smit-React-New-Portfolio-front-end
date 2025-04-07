/**
 * Sitemap Generator for better SEO indexing
 * 
 * This utility can be used to generate a sitemap.xml file for your website
 * Run this script with Node.js to generate the sitemap
 */

const fs = require('fs');
const path = require('path');

// Base configuration
const BASE_URL = 'https://www.smitparekh.studio';
const SITEMAP_PATH = path.join(__dirname, '../../../public/sitemap.xml');

// Define all your website routes with their change frequency and priority
const routes = [
  { url: '/', changefreq: 'weekly', priority: 1.0, lastmod: new Date().toISOString() },
  { url: '/portfolio', changefreq: 'monthly', priority: 0.9, lastmod: new Date().toISOString() },
  { url: '/services', changefreq: 'monthly', priority: 0.8, lastmod: new Date().toISOString() },
  { url: '/about', changefreq: 'monthly', priority: 0.7, lastmod: new Date().toISOString() },
  { url: '/contact', changefreq: 'monthly', priority: 0.7, lastmod: new Date().toISOString() },
  { url: '/free-tools', changefreq: 'weekly', priority: 0.9, lastmod: new Date().toISOString() },
  { url: '/free-tools/background-remover', changefreq: 'weekly', priority: 0.8, lastmod: new Date().toISOString() },
  { url: '/free-tools/viral-linkedin-post-generator', changefreq: 'weekly', priority: 0.8, lastmod: new Date().toISOString() },
  { url: '/free-tools/meta-tag-checker', changefreq: 'weekly', priority: 0.8, lastmod: new Date().toISOString() },
  { url: '/free-tools/qr-code-generator', changefreq: 'weekly', priority: 0.8, lastmod: new Date().toISOString() },
  { url: '/free-tools/image-compressor', changefreq: 'weekly', priority: 0.8, lastmod: new Date().toISOString() },
  { url: '/free-tools/image-converter', changefreq: 'weekly', priority: 0.8, lastmod: new Date().toISOString() },
  { url: '/free-tools/seo-analyzer', changefreq: 'weekly', priority: 0.8, lastmod: new Date().toISOString() },
  { url: '/free-tools/linkedin-media-downloader', changefreq: 'weekly', priority: 0.8, lastmod: new Date().toISOString() },
];

// Generate sitemap XML content
function generateSitemapXml() {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  routes.forEach(route => {
    xml += '  <url>\n';
    xml += `    <loc>${BASE_URL}${route.url}</loc>\n`;
    xml += `    <lastmod>${route.lastmod}</lastmod>\n`;
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;
    xml += '  </url>\n';
  });
  
  xml += '</urlset>';
  
  return xml;
}

// Write sitemap to file
function writeSitemap() {
  const xml = generateSitemapXml();
  
  try {
    fs.writeFileSync(SITEMAP_PATH, xml);
    console.log(`Sitemap generated successfully at ${SITEMAP_PATH}`);
  } catch (error) {
    console.error('Error writing sitemap file:', error);
  }
}

// Execute sitemap generation
// This script can be run directly with Node.js
if (require.main === module) {
  writeSitemap();
}

module.exports = {
  generateSitemapXml,
  writeSitemap,
  routes
};
