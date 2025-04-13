import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import SEO from "../components/SEO/SEO";
import ProjectForm from '../components/ProjectForm/ProjectForm';
import '../components/ProjectForm/ProjectForm.css';

const EditProjectPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const navigate = useNavigate();

  // Check for authentication and fetch project data
  useEffect(() => {
    const token = localStorage.getItem('projectAuthToken');
    if (!token) {
      navigate('/project');
      return;
    }

    const fetchProjectData = async () => {
      try {
        setFetchLoading(true);
        const response = await fetch(`${import.meta.env.VITE_API_URL}/projects/${id}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch project data');
        }

        const data = await response.json();
        if (data.success && data.data) {
          setProject(data.data);
        } else {
          throw new Error('Invalid response format');
        }
      } catch (err) {
        setError(err.message || 'Error fetching project data');
      } finally {
        setFetchLoading(false);
      }
    };

    fetchProjectData();
  }, [id, navigate]);

  // Form submission handler
  const handleSubmit = async (projectData) => {
    setLoading(true);
    setError(null);
    
    try {
      const token = localStorage.getItem('projectAuthToken');
      
      const response = await fetch(`${import.meta.env.VITE_API_URL}/projects/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(projectData)
      });
      
      if (!response.ok) {
        throw new Error('Failed to update project');
      }
      
      setSuccessMessage('Project updated successfully!');
      
      // Automatically clear success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage('');
        // Navigate back to the project detail page
        navigate(`/project/${encodeURIComponent(projectData.title)}`);
      }, 3000);
      
    } catch (err) {
      setError(err.message || 'Error updating project');
    } finally {
      setLoading(false);
    }
  };

  if (fetchLoading) {
    return (
      <section className="edit-project section">
        <div className="container">
          <div className="loader-container" style={{ padding: "3rem 0" }}>
            <div className="loader"></div>
            <h2>Loading Project Data...</h2>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <SEO 
        title="Edit Project | Admin"
        description="Admin page for editing existing projects"
        noIndex={true}
      />
      
      <section className="edit-project section">
        <div className="container">
          <div className="edit-project__header">
            <h2 className="section__title">Edit Project</h2>
            <p className="edit-project__subtitle">Update details for "{project?.title}"</p>
          </div>
          
          <ProjectForm
            initialData={project}
            onSubmit={handleSubmit}
            loading={loading}
            error={error}
            successMessage={successMessage}
            submitButtonText={loading ? 'Saving Changes...' : 'Update Project'}
            cancelHandler={() => navigate(-1)}
            extraActions={
              <Link 
                to={`/project/${encodeURIComponent(project?.title)}`}
                className="button button--outline index-metadata__button"
              >
                <i className="uil uil-eye"></i> View Project
              </Link>
            }
          />
        </div>
      </section>
    </>
  );
};

export default EditProjectPage;
