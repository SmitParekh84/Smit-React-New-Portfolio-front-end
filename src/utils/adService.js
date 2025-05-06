/**
 * AdSense utility service for handling ads in React SPA
 * Manages ad loading, refreshing, and SPA-specific handling
 */

// Check if AdSense is loaded and ready
export const isAdSenseLoaded = () => {
  return window.adsbygoogle !== undefined;
};

// Initialize AdSense for SPA
export const initAdSense = () => {
  if (!isAdSenseLoaded()) {
    window.adsbygoogle = window.adsbygoogle || [];
  }
};

// Clear all ads on the page (useful during route changes)
export const clearAds = () => {
  const adElements = document.querySelectorAll('.adsbygoogle');
  adElements.forEach(ad => {
    ad.innerHTML = '';
  });
};

// Refresh ads on the page (for SPA route changes)
export const refreshAds = () => {
  if (isAdSenseLoaded()) {
    clearAds();
    try {
      window.adsbygoogle.push({});
    } catch (error) {
      console.error('Error refreshing AdSense ads:', error);
    }
  }
};

// Add non-personalized ads support (for GDPR compliance)
export const setNonPersonalizedAds = (nonPersonalized = true) => {
  if (window.adsbygoogle) {
    // Set non-personalized ads preference
    (window.adsbygoogle = window.adsbygoogle || []).requestNonPersonalizedAds = 
      nonPersonalized ? 1 : 0;
  }
};

// Check if an ad blocker is likely in use
export const detectAdBlocker = async () => {
  try {
    const response = await fetch('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js', {
      method: 'HEAD',
      mode: 'no-cors',
      cache: 'no-store'
    });
    
    return false; // No ad blocker detected
  } catch (error) {
    console.warn('Ad blocker may be in use:', error);
    return true; // Ad blocker likely detected
  }
};

export default {
  isAdSenseLoaded,
  initAdSense,
  clearAds,
  refreshAds,
  setNonPersonalizedAds,
  detectAdBlocker
};