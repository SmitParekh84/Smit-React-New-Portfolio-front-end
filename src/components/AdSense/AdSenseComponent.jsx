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
    if (import.meta.env.MODE !== 'production') return;

    // Wipe the slot so we start fresh on route changes
    if (adRef.current) adRef.current.innerHTML = '';

    const timer = setTimeout(() => {
      try {
        if (!adRef.current) return;

        const adContainer = document.createElement('ins');
        adContainer.className = 'adsbygoogle';
        adContainer.style.display = adStyle.display || 'block';
        adContainer.style.width = adStyle.width || '100%';
        adContainer.style.height = adStyle.height || 'auto';
        adContainer.setAttribute('data-ad-client', adClient);
        adContainer.setAttribute('data-ad-slot', adSlot);
        adContainer.setAttribute('data-ad-format', adFormat);
        adContainer.setAttribute('data-full-width-responsive', 'true');

        adRef.current.innerHTML = '';
        if (showLabel) {
          const label = document.createElement('div');
          label.className = 'ad-label';
          label.textContent = 'Advertisement';
          adRef.current.appendChild(label);
        }
        adRef.current.appendChild(adContainer);

        // Guard against double-push: only push if the ins has no ad yet
        if (!adContainer.getAttribute('data-adsbygoogle-status')) {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
      } catch (error) {
        console.error('AdSense error:', error);
      }
    }, 150);

    return () => clearTimeout(timer);
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