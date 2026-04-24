import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import './ServiceModal.css';

const ServiceModal = ({ isOpen, service, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    document.addEventListener('keydown', handleEscKey);
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

  if (!isOpen) return null;

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
        {/* Hero gradient header */}
        <div className="services__modal-header">
          <button
            className="services__modal-close-btn"
            onClick={onClose}
            aria-label="Close modal"
          >
            <i className="uil uil-times"></i>
          </button>
          <div className="services__modal-icon-badge">
            <i className={service.icon}></i>
          </div>
          <h4 className="services__modal-title">{service.title}</h4>
        </div>

        {/* Items */}
        <div className="services__modal-body">
          <ul className="services__modal-services">
            {service.description.map((desc, i) => (
              <li className="services__modal-service" key={i}>
                <span className="services__modal-num">{i + 1}</span>
                <p className="services__modal-text">{desc}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        <div className="services__modal-footer">
          <button
            className="services__modal-close-button"
            onClick={onClose}
          >
            <i className="uil uil-check"></i>
            Got it
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ServiceModal;
