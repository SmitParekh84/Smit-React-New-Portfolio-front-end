import React from 'react';
import PortfolioCardSkeleton from './PortfolioCardSkeleton';
import './PortfolioSkeletonGrid.css';

/**
 * PortfolioSkeletonGrid component
 * Displays a grid of portfolio card skeletons while data is being fetched
 * 
 * @param {number} count - Number of skeleton cards to display
 */
const PortfolioSkeletonGrid = ({ count = 6 }) => {
  return (
    <div className="portfolio-skeleton-grid">
      {Array.from({ length: count }).map((_, index) => (
        <div className="portfolio-skeleton-item" key={index}>
          <PortfolioCardSkeleton />
        </div>
      ))}
    </div>
  );
};

export default PortfolioSkeletonGrid;