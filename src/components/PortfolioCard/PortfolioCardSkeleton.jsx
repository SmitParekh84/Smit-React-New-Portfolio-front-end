import React from 'react';
import './PortfolioCardSkeleton.css';

/**
 * PortfolioCardSkeleton component
 * Displays a loading placeholder for portfolio cards while data is being fetched
 */
const PortfolioCardSkeleton = () => {
  return (
    <div className="portfolio-card-skeleton">
      <div className="portfolio-card-skeleton__img-container">
        <div className="portfolio-card-skeleton__img"></div>
      </div>
      <div className="portfolio-card-skeleton__info">
        <div className="portfolio-card-skeleton__title"></div>
        <div className="portfolio-card-skeleton__meta">
          <div className="portfolio-card-skeleton__category"></div>
          <div className="portfolio-card-skeleton__timestamp"></div>
        </div>
        <div className="portfolio-card-skeleton__description"></div>
        <div className="portfolio-card-skeleton__actions">
          <div className="portfolio-card-skeleton__button"></div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCardSkeleton;