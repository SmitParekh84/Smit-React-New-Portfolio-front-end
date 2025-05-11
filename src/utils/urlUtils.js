/**
 * Utility functions for URL formatting
 */

/**
 * Converts text to a URL-friendly slug
 * @param {string} text - The text to convert to a slug
 * @returns {string} The formatted slug
 */
export const formatUrlSlug = (text) => {
  if (!text) return '';
  
  // Replace ampersands with "and"
  let slug = text.replace(/&/g, 'and');
  
  // Replace dashes, en-dashes, em-dashes with regular hyphens
  slug = slug.replace(/[\u2013\u2014\-–—]/g, '-');
  
  // Replace multiple spaces with a single space
  slug = slug.replace(/\s+/g, ' ');
  
  // Remove special characters and replace spaces with hyphens
  slug = slug.replace(/[^\w\s-]/g, '').trim();
  
  // Replace spaces with hyphens and convert to lowercase
  slug = slug.replace(/\s+/g, '-').toLowerCase();
  
  // Replace multiple hyphens with single hyphen
  slug = slug.replace(/-+/g, '-');
  
  return slug;
};

/**
 * Converts a slug back to a readable title
 * @param {string} slug - The slug to convert
 * @returns {string} The formatted title
 */
export const slugToTitle = (slug) => {
  if (!slug) return '';
  
  // First, replace all hyphens with spaces
  let title = slug.replace(/-+/g, ' ');
  
  return title;
};