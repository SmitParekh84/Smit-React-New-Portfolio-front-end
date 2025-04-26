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
  return text.replace(/\s+/g, '-').toLowerCase();
};

/**
 * Converts a slug back to a readable title
 * @param {string} slug - The slug to convert
 * @returns {string} The formatted title
 */
export const slugToTitle = (slug) => {
  if (!slug) return '';
  return slug.replace(/-+/g, ' ');
};