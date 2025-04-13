import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from "react-lazyload";
import PropTypes from 'prop-types';
import './PortfolioCard.css';
import { formatUrlSlug } from '../../App'; // Import the utility function

// Function to format date to relative time (e.g. "2 hours ago")
const getRelativeTime = (dateString) => {
  if (!dateString) return '';
  
  const now = new Date();
  const date = new Date(dateString);
  const secondsAgo = Math.floor((now - date) / 1000);
  
  // Time units in seconds
  const minute = 60;
  const hour = minute * 60;
  const day = hour * 24;
  const week = day * 7;
  const month = day * 30;
  const year = day * 365;
  
  if (secondsAgo < minute) {
    return 'just now';
  } else if (secondsAgo < hour) {
    const minutes = Math.floor(secondsAgo / minute);
    return `${minutes} ${minutes === 1 ? 'min' : 'mins'} ago`;
  } else if (secondsAgo < day) {
    const hours = Math.floor(secondsAgo / hour);
    return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
  } else if (secondsAgo < week) {
    const days = Math.floor(secondsAgo / day);
    return `${days} ${days === 1 ? 'day' : 'days'} ago`;
  } else if (secondsAgo < month) {
    const weeks = Math.floor(secondsAgo / week);
    return `${weeks} ${weeks === 1 ? 'week' : 'weeks'} ago`;
  } else if (secondsAgo < year) {
    const months = Math.floor(secondsAgo / month);
    return `${months} ${months === 1 ? 'month' : 'months'} ago`;
  } else {
    const years = Math.floor(secondsAgo / year);
    return `${years} ${years === 1 ? 'year' : 'years'} ago`;
  }
};

const PortfolioCard = ({ project, isAuthenticated, onDeleteClick }) => {
  // Helper function to get category name
  const getCategoryName = (categoryId) => {
    switch(categoryId) {
      case 'webdev': return 'Web Development';
      case 'frontend': return 'Frontend Design';
      case 'seo': return 'SEO';
      case 'marketing': return 'Marketing';
      case 'video': return 'Video Editing';
      default: return 'Project';
    }
  };

  return (
    <div className="portfolio-card" id={`portfolio-${project._id}`}>
      <LazyLoad height={200} offset={100}>
        <div className="portfolio-card__img-container">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="portfolio-card__img"
            loading="lazy"
          />
          <div className="portfolio-card__img-overlay">
            <Link to={`/project/${formatUrlSlug(project.title)}`} className="portfolio-card__overlay-link">
              <i className="uil uil-eye"></i>
            </Link>
            
            {project.demoLink && (
              <a href={project.demoLink} className="portfolio-card__overlay-link" target="_blank" rel="noopener noreferrer">
                <i className="uil uil-external-link"></i>
              </a>
            )}
            
            {/* Admin Controls */}
            {isAuthenticated && (
              <div className="portfolio-card__admin-controls">
                <Link
                  to={`/admin/edit-project/${project._id}`}
                  className="portfolio-card__admin-btn portfolio-card__admin-btn--edit"
                  title="Edit Project"
                >
                  <i className="uil uil-edit"></i>
                </Link>
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    onDeleteClick();
                  }} 
                  className="portfolio-card__admin-btn portfolio-card__admin-btn--delete"
                  title="Delete Project"
                >
                  <i className="uil uil-trash-alt"></i>
                </button>
              </div>
            )}
          </div>
        </div>
      </LazyLoad>
      <div className="portfolio-card__info">
        <h3 className="portfolio-card__title">{project.title}</h3>
        
        <div className="portfolio-card__meta">
          <span className="portfolio-card__category">{getCategoryName(project.category)}</span>
          
          {/* Add timestamp display */}
          {project.updatedAt && (
            <span className="portfolio-card__timestamp">
              <i className="uil uil-clock-three"></i>
              Updated {getRelativeTime(project.updatedAt)}
            </span>
          )}
        </div>
        
        <p className="portfolio-card__description">{project.shortDescription}</p>
        <div className="portfolio-card__actions">
          <Link
            to={`/project/${formatUrlSlug(project.title)}`}
            className="button button--flex button--small portfolio-card__button"
          >
            View Details
            <i className="uil uil-arrow-right button__icon"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

PortfolioCard.propTypes = {
  project: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    shortDescription: PropTypes.string.isRequired,
    demoLink: PropTypes.string,
    updatedAt: PropTypes.string, // Add updatedAt prop
  }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default PortfolioCard;
