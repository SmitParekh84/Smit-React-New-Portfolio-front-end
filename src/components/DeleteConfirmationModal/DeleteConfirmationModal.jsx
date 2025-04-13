import React from 'react';
import './DeleteConfirmationModal.css';

const DeleteConfirmationModal = ({ title, onCancel, onDelete, isLoading }) => {
  // Prevent click propagation when clicking on the modal content
  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="delete-modal-overlay" onClick={onCancel}>
      <div className="delete-modal-wrapper">
        <div className="delete-modal-content" onClick={handleContentClick}>
          <h3>
            <i className="uil uil-exclamation-triangle delete-modal-icon"></i>
            Delete Project
          </h3>
          <p>Are you sure you want to delete "{title}"? This action cannot be undone.</p>
          <div className="delete-modal-actions">
            <button 
              className="button button--small" 
              onClick={onCancel}
              disabled={isLoading}
            >
              <i className="uil uil-times"></i> Cancel
            </button>
            <button 
              className="button button--small button--danger" 
              onClick={onDelete}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <div className="button-loader"></div> Deleting...
                </>
              ) : (
                <>
                  <i className="uil uil-trash-alt"></i> Delete Project
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
