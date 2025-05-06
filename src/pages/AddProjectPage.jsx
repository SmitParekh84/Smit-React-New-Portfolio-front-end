import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from "../components/SEO/SEO";
import ProjectForm from '../components/ProjectForm/ProjectForm';
import '../components/ProjectForm/ProjectForm.css';
import '../components/ProjectForm/ProjectFormSkeleton.css';

const AddProjectPage = () => {
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const navigate = useNavigate();

  // Check for authentication
  useEffect(() => {
    const token = localStorage.getItem('projectAuthToken');
    if (!token) {
      navigate('/project');
    }
    
    // Simulate a small delay to show the skeleton loading
    setTimeout(() => {
      setInitialLoading(false);
    }, 500);
  }, [navigate]);

  // Form submission handler
  const handleSubmit = async (projectData) => {
    setLoading(true);
    setError(null);
    
    try {
      const token = localStorage.getItem('projectAuthToken');
      
      const response = await fetch(`${import.meta.env.VITE_API_URL}/projects`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(projectData)
      });
      
      if (!response.ok) {
        throw new Error('Failed to add project');
      }
      
      setSuccessMessage('Project added successfully!');
      
      // Automatically clear success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage('');
        navigate('/project');
      }, 3000);
      
    } catch (err) {
      setError(err.message || 'Error adding project');
    } finally {
      setLoading(false);
    }
  };

  // Skeleton loading component for the form
  const ProjectFormSkeleton = () => (
    <div className="project-form-skeleton">
      <div className="skeleton-header">
        <div className="skeleton-title"></div>
        <div className="skeleton-subtitle"></div>
      </div>
      
      <div className="skeleton-form-grid">
        <div className="skeleton-form-group">
          <div className="skeleton-label"></div>
          <div className="skeleton-input"></div>
        </div>
        <div className="skeleton-form-group">
          <div className="skeleton-label"></div>
          <div className="skeleton-input"></div>
        </div>
      </div>
      
      <div className="skeleton-form-group">
        <div className="skeleton-label"></div>
        <div className="skeleton-textarea"></div>
      </div>
      
      <div className="skeleton-form-group">
        <div className="skeleton-label"></div>
        <div className="skeleton-image-upload"></div>
      </div>
      
      <div className="skeleton-form-group">
        <div className="skeleton-label"></div>
        <div className="skeleton-md-editor"></div>
      </div>
      
      <div className="skeleton-form-actions">
        <div className="skeleton-button"></div>
        <div className="skeleton-button"></div>
      </div>
    </div>
  );

  return (
    <>
      <SEO 
        title="Add New Project | Admin"
        description="Admin page for adding new projects"
        noIndex={true}
      />
      
      <section className="add-project section">
        <div className="container">
          <div className="add-project__header">
            <h2 className="section__title">Add New Project</h2>
            <p className="add-project__subtitle">Create a new showcase entry for your portfolio</p>
          </div>
          
          {initialLoading ? (
            <ProjectFormSkeleton />
          ) : (
            <ProjectForm
              onSubmit={handleSubmit}
              loading={loading}
              error={error}
              successMessage={successMessage}
              submitButtonText={loading ? 'Adding Project...' : 'Add Project'}
              cancelHandler={() => navigate(-1)}
            />
          )}
        </div>
      </section>
    </>
  );
};

export default AddProjectPage;
