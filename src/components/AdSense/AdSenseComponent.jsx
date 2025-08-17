import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import './AdSense.css';

/**
 * AdSenseComponent - Improved implementation with better policy compliance
 * This component renders Google AdSense advertisements with proper labeling and formatting
 */
const AdSenseComponent = ({ 
  adClient = 'ca-pub-9526582197854160', 
  adSlot, 
  adFormat = 'auto', 
  adStyle = { display: 'block' },
  className = '',
  showLabel = true
}) => {
  const adRef = useRef(null);
  const location = useLocation();
  
  useEffect(() => {
    // Clean up any existing ad
    if (adRef.current) {
      adRef.current.innerHTML = '';
    }
    
    try {
      // Only inject ads if we're not in a development environment
      if (import.meta.env.MODE === 'production') {
        // Wait for AdSense to be ready
        if (window.adsbygoogle) {
          // Create the ad container with proper attributes
          const adContainer = document.createElement('ins');
          adContainer.className = 'adsbygoogle';
          adContainer.style.display = adStyle.display || 'block';
          adContainer.style.width = adStyle.width || '100%';
          adContainer.style.height = adStyle.height || 'auto';
          adContainer.setAttribute('data-ad-client', adClient);
          adContainer.setAttribute('data-ad-slot', adSlot);
          adContainer.setAttribute('data-ad-format', adFormat);
          
          // Add responsive attribute for better adaptation
          adContainer.setAttribute('data-full-width-responsive', 'true');
          
          // Add the ad to the DOM
          if (adRef.current) {
            adRef.current.innerHTML = '';
            // Create label if enabled
            if (showLabel) {
              const label = document.createElement('div');
              label.className = 'ad-label';
              label.textContent = 'Advertisement';
              adRef.current.appendChild(label);
            }
            adRef.current.appendChild(adContainer);
            
            // Push the ad to AdSense
            (window.adsbygoogle = window.adsbygoogle || []).push({});
          }
        }
      }
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, [adClient, adSlot, adFormat, adStyle, location.pathname, showLabel]);

  return <div ref={adRef} className={`adsense-container ${className}`}></div>;
};

AdSenseComponent.propTypes = {
  adClient: PropTypes.string,
  adSlot: PropTypes.string.isRequired,
  adFormat: PropTypes.string,
  adStyle: PropTypes.object,
  className: PropTypes.string,
  showLabel: PropTypes.bool
};

export default AdSenseComponent;