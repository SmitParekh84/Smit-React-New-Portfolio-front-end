import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from "react-lazyload";
import PropTypes from 'prop-types';
import './PortfolioCard.css';
import { formatUrlSlug } from '../../App'; // Import the utility function

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
        <span className="portfolio-card__category">{getCategoryName(project.category)}</span>
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
  }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default PortfolioCard;
