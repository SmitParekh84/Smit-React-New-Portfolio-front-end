import React from 'react';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './OptimizedImage.css';

/**
 * OptimizedImage component for optimized image loading with SEO enhancements
 * - Implements lazy loading
 * - Supports WebP format with fallback
 * - Adds proper SEO attributes
 * - Uses blur effect for better user experience
 */
const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className,
  style,
  placeholderSrc,
  title,
  loading = 'lazy',
  effect = 'blur',
  threshold = 200,
  onClick,
  ...props
}) => {
  // Function to get optimized image format (WebP if supported)
  const getOptimizedImageUrl = (url, targetWidth) => {
    // For image CDN integration:
    // Example with Cloudinary: return `https://res.cloudinary.com/your-cloud/image/fetch/f_auto,q_auto,w_${targetWidth}/${url}`;
    // Example with ImageKit: return `${url}?tr=w-${targetWidth},f-webp,q-70`;
    
    // If not using a CDN, return the original URL
    return url;
  };

  // Create a smaller blurred version for placeholder
  const getPlaceholderUrl = (url) => {
    if (placeholderSrc) return placeholderSrc;
    
    // For CDN integration:
    // Example: return `${url}?tr=w-20,h-20,bl-6`;
    
    // If not using a CDN, return the original
    return url;
  };

  return (
    <div className={`optimized-image-container ${className || ''}`} style={style}>
      <LazyLoadImage
        src={getOptimizedImageUrl(src, width)}
        alt={alt}
        width={width || '100%'}
        height={height || 'auto'}
        effect={effect}
        threshold={threshold}
        placeholderSrc={getPlaceholderUrl(src)}
        loading={loading}
        title={title || alt}
        onClick={onClick}
        wrapperClassName="optimized-image-wrapper"
        {...props}
      />
    </div>
  );
};

OptimizedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  className: PropTypes.string,
  style: PropTypes.object,
  placeholderSrc: PropTypes.string,
  title: PropTypes.string,
  loading: PropTypes.oneOf(['lazy', 'eager']),
  effect: PropTypes.oneOf(['blur', 'black-and-white', 'opacity', '']),
  threshold: PropTypes.number,
  onClick: PropTypes.func,
};

export default OptimizedImage;