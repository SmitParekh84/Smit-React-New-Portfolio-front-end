import AdSenseComponent from './AdSenseComponent';
import PropTypes from 'prop-types';

// In-article ad format
export const InArticleAd = ({ adSlot, className = '' }) => (
  <AdSenseComponent 
    adSlot={adSlot}
    adFormat="fluid"
    adStyle={{ display: 'block' }}
    className={`in-article-ad ${className}`}
  />
);

// Display ad format (horizontal banner)
export const HorizontalBannerAd = ({ adSlot, className = '' }) => (
  <AdSenseComponent 
    adSlot={adSlot}
    adFormat="auto"
    adStyle={{ display: 'block' }}
    className={`horizontal-banner-ad ${className}`}
  />
);

// Display ad format (vertical sidebar)
export const SidebarAd = ({ adSlot, className = '' }) => (
  <AdSenseComponent 
    adSlot={adSlot}
    adFormat="auto"
    adStyle={{ display: 'block', height: '600px' }}
    className={`sidebar-ad ${className}`}
  />
);

// Common PropTypes for all ad components
const commonPropTypes = {
  adSlot: PropTypes.string.isRequired,
  className: PropTypes.string
};

InArticleAd.propTypes = commonPropTypes;
HorizontalBannerAd.propTypes = commonPropTypes;
SidebarAd.propTypes = commonPropTypes;