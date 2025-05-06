import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import './AdSense.css';

const AdSenseComponent = ({ 
  adClient = 'ca-pub-9526582197854160', 
  adSlot, 
  adFormat = 'auto', 
  adStyle = { display: 'block' },
  className = ''
}) => {
  const adRef = useRef(null);
  const location = useLocation();
  
  useEffect(() => {
    // Clean up any existing ad
    if (adRef.current) {
      adRef.current.innerHTML = '';
    }
    
    try {
      // Wait for AdSense to be ready
      if (window.adsbygoogle) {
        // Create the ad container
        const adContainer = document.createElement('ins');
        adContainer.className = 'adsbygoogle';
        adContainer.style.display = adStyle.display || 'block';
        adContainer.style.width = adStyle.width || '100%';
        adContainer.style.height = adStyle.height || 'auto';
        adContainer.setAttribute('data-ad-client', adClient);
        adContainer.setAttribute('data-ad-slot', adSlot);
        adContainer.setAttribute('data-ad-format', adFormat);
        
        // Add the ad to the DOM
        if (adRef.current) {
          adRef.current.innerHTML = '';
          adRef.current.appendChild(adContainer);
          
          // Push the ad to AdSense
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
      }
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, [adClient, adSlot, adFormat, adStyle, location.pathname]);

  return <div ref={adRef} className={`adsense-container ${className}`}></div>;
};

AdSenseComponent.propTypes = {
  adClient: PropTypes.string,
  adSlot: PropTypes.string.isRequired,
  adFormat: PropTypes.string,
  adStyle: PropTypes.object,
  className: PropTypes.string
};

export default AdSenseComponent;