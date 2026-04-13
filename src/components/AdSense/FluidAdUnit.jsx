import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import './AdSense.css';

/**
 * FluidAdUnit - Specific component for the fluid ad layout
 * This component renders the specific Google AdSense ad unit you provided
 */
const FluidAdUnit = ({ 
  adClient = 'ca-pub-9526582197854160',
  adSlot = '6960955517',
  className = '',
  showLabel = true,
  style = {}
}) => {
  const adRef = useRef(null);
  const location = useLocation();
  const adPushed = useRef(false);
  
  useEffect(() => {
    // Reset the ad pushed flag when location changes
    adPushed.current = false;
    
    // Clean up any existing ad content
    if (adRef.current) {
      const existingAds = adRef.current.querySelectorAll('.adsbygoogle');
      existingAds.forEach(ad => {
        ad.innerHTML = '';
      });
    }
    
    try {
      // Only inject ads if we're in production environment
      if (import.meta.env.MODE === 'production') {
        // Wait for AdSense to be ready
        if (window.adsbygoogle && !adPushed.current) {
          setTimeout(() => {
            if (adRef.current && !adPushed.current) {
              // Create the ad container with your specific attributes
              const adContainer = document.createElement('ins');
              adContainer.className = 'adsbygoogle';
              adContainer.style.display = 'block';
              adContainer.setAttribute('data-ad-format', 'fluid');
              adContainer.setAttribute('data-ad-layout-key', '-6t+ed+2i-1n-4w');
              adContainer.setAttribute('data-ad-client', adClient);
              adContainer.setAttribute('data-ad-slot', adSlot);
              
              // Clear and rebuild the ad container
              adRef.current.innerHTML = '';
              
              // Create label if enabled
              if (showLabel) {
                const label = document.createElement('div');
                label.className = 'ad-label';
                label.textContent = 'Advertisement';
                adRef.current.appendChild(label);
              }
              
              // Add the ad to the DOM
              adRef.current.appendChild(adContainer);
              
              // Guard: only push if ins element has not been filled yet
              if (!adContainer.getAttribute('data-adsbygoogle-status') && !adPushed.current) {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
                adPushed.current = true;
              }
            }
          }, 100);
        }
      } else {
        // Development mode - show placeholder (uses CSS class for dark mode support)
        if (adRef.current) {
          adRef.current.innerHTML = `
            <div class="ad-label">Advertisement (Dev)</div>
            <div class="fluid-ad-placeholder">
              Ad Slot: ${adSlot}
            </div>
          `;
        }
      }
    } catch (error) {
      console.error('AdSense Fluid Ad error:', error);
    }

    // Cleanup function
    return () => {
      adPushed.current = false;
    };
  }, [adClient, adSlot, location.pathname, showLabel]);

  return (
    <div 
      ref={adRef} 
      className={`adsense-container fluid-ad-unit ${className}`}
      style={style}
    >
    </div>
  );
};

FluidAdUnit.propTypes = {
  adClient: PropTypes.string,
  adSlot: PropTypes.string,
  className: PropTypes.string,
  showLabel: PropTypes.bool,
  style: PropTypes.object
};

export default FluidAdUnit;
