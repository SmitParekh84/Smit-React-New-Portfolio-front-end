import PropTypes from 'prop-types';
import { SidebarAd } from './AdFormats';
import './AdSense.css';

/**
 * SidebarAdLayout Component
 * Creates a responsive layout with content and a sidebar ad
 */
const SidebarAdLayout = ({ 
  children, 
  adSlot, 
  className = '',
  contentClassName = '',
  adPosition = 'right'
}) => {
  return (
    <div className={`sidebar-ad-layout ${className} ${adPosition === 'left' ? 'ad-left' : 'ad-right'}`}>
      {adPosition === 'left' && (
        <div className="sidebar-ad-container">
          <SidebarAd adSlot={adSlot} />
        </div>
      )}
      
      <div className={`content-container ${contentClassName}`}>
        {children}
      </div>
      
      {adPosition === 'right' && (
        <div className="sidebar-ad-container">
          <SidebarAd adSlot={adSlot} />
        </div>
      )}
    </div>
  );
};

SidebarAdLayout.propTypes = {
  children: PropTypes.node.isRequired,
  adSlot: PropTypes.string.isRequired,
  className: PropTypes.string,
  contentClassName: PropTypes.string,
  adPosition: PropTypes.oneOf(['left', 'right'])
};

export default SidebarAdLayout;