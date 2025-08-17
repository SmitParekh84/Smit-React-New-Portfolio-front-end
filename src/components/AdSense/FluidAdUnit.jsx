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
              
              // Push the ad to AdSense (only once per mount)
              if (!adPushed.current) {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
                adPushed.current = true;
              }
            }
          }, 100);
        }
      } else {
        // Development mode - show placeholder
        if (adRef.current) {
          adRef.current.innerHTML = `
            <div class="ad-label">Advertisement (Dev Mode)</div>
            <div style="
              background: linear-gradient(45deg, #f0f0f0 25%, transparent 25%), 
                          linear-gradient(-45deg, #f0f0f0 25%, transparent 25%), 
                          linear-gradient(45deg, transparent 75%, #f0f0f0 75%), 
                          linear-gradient(-45deg, transparent 75%, #f0f0f0 75%);
              background-size: 20px 20px;
              background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
              min-height: 200px;
              display: flex;
              align-items: center;
              justify-content: center;
              color: #666;
              font-size: 14px;
              border-radius: 4px;
              border: 2px dashed #ddd;
            ">
              Fluid Ad Unit (Slot: ${adSlot})
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
