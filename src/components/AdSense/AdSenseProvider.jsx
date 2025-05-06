import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { initAdSense, refreshAds } from '../../utils/adService';

/**
 * AdSense Provider Component
 * Initializes AdSense and refreshes ads on route changes
 */
const AdSenseProvider = ({ children }) => {
  const location = useLocation();

  // Initialize AdSense when the component mounts
  useEffect(() => {
    initAdSense();
  }, []);

  // Refresh ads whenever the route changes
  useEffect(() => {
    refreshAds();
  }, [location.pathname]);

  return children;
};

AdSenseProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default AdSenseProvider;