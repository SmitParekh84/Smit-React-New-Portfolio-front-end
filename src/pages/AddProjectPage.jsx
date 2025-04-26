import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from "../components/SEO/SEO";
import ProjectForm from '../components/ProjectForm/ProjectForm';
import '../components/ProjectForm/ProjectForm.css';

const AddProjectPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const navigate = useNavigate();

  // Check for authentication
  useEffect(() => {
    const token = localStorage.getItem('projectAuthToken');
    if (!token) {
      navigate('/project');
    }
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
          
          <ProjectForm
            onSubmit={handleSubmit}
            loading={loading}
            error={error}
            successMessage={successMessage}
            submitButtonText={loading ? 'Adding Project...' : 'Add Project'}
            cancelHandler={() => navigate(-1)}
          />
        </div>
      </section>
    </>
  );
};

export default AddProjectPage;
