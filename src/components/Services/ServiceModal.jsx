import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import './ServiceModal.css';

const ServiceModal = ({ isOpen, service, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    // Add escape key listener
    const handleEscKey = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    
    document.addEventListener('keydown', handleEscKey);
    
    // Prevent scrolling when modal is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);
  
  // If not open, don't render anything
  if (!isOpen) return null;
  
  // Create portal to render modal at document body level
  return createPortal(
    <div 
      className={`services__modal ${isOpen ? 'active-modal' : ''}`} 
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div 
        className="services__modal-content" 
        onClick={(e) => e.stopPropagation()}
        ref={modalRef}
      >
        <div className="services__modal-header">
          <div className="services__modal-title-group">
            <i className={`${service.icon} services__modal-header-icon`}></i>
            <h4 className="services__modal-title">{service.title}</h4>
          </div>
          <button 
            className="services__modal-close-btn"
            onClick={onClose} 
            aria-label="Close modal"
          >
            <i className="uil uil-times services__modal-close"></i>
          </button>
        </div>

        <div className="services__modal-body">
          <ul className="services__modal-services grid">
            {service.description.map((desc, i) => (
              <li className="services__modal-service" key={i}>
                <div className="services__modal-icon-wrapper">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                </div>
                <p className="services__modal-text">{desc}</p>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="services__modal-footer">
          <button 
            className="button button--small button--flex services__modal-close-button" 
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>,
    document.body // Mount the modal directly to the body
  );
};

export default ServiceModal;
