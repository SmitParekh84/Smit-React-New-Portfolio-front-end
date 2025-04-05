import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/cv-viewer.css';

const CVViewer = () => {
    const navigate = useNavigate();
    const [viewerData, setViewerData] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        // Check for valid access from localStorage
        const checkAccess = () => {
            const accessData = localStorage.getItem('cvViewerAccess');
            
            if (!accessData) {
                // No access data found, redirect to home
                navigate('/portfolio');
                return null;
            }
            
            try {
                const parsedData = JSON.parse(accessData);
                
                // Check if access has expired
                if (parsedData.expiresAt < Date.now()) {
                    // Access expired, clear and redirect
                    localStorage.removeItem('cvViewerAccess');
                    navigate('/');
                    return null;
                }
                
                return parsedData;
            } catch (error) {
                console.error('Error parsing access data:', error);
                navigate('/');
                return null;
            }
        };
        
        const data = checkAccess();
        setViewerData(data);
        setLoading(false);
        
        // Set page title
        document.title = "CV Viewer - Smit Parekh";
        
        // Cleanup function - runs when component unmounts
        return () => {
            // Don't remove access data here to allow for page refreshes
        };
    }, [navigate]);
    
    // Function to handle closing and cleanup
    const handleClose = () => {
        localStorage.removeItem('cvViewerAccess');
        navigate('/');
    };
    
    if (loading) {
        return (
            <div className="cv-viewer-loading">
                <div className="cv-viewer-spinner"></div>
                <p>Loading CV viewer...</p>
            </div>
        );
    }
    
    if (!viewerData) {
        return null; // This will redirect via the useEffect
    }

    return (
        <div className="cv-viewer-container">
            <div className="cv-viewer-header">
                <h2>Thank you for your interest, {viewerData.name}!</h2>
                <p>You can download or print this CV for your reference.</p>
                <div className="cv-viewer-actions">
                    <button 
                        className="button button--flex"
                        onClick={handleClose}
                    >
                        Back to Portfolio <i className="uil uil-arrow-left"></i>
                    </button>
                    <button 
                        className="button button--flex"
                        onClick={() => {
                            const link = document.createElement('a');
                            link.href = viewerData.pdfUrl;
                            link.download = 'SmitParekh_CV.pdf';
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                        }}
                    >
                        Download PDF <i className="uil uil-download-alt"></i>
                    </button>
                </div>
            </div>
            <div className="cv-viewer-content">
                <iframe 
                    src={`${viewerData.pdfUrl}#toolbar=1`} 
                    title="CV Viewer"
                    width="100%" 
                    height="100%" 
                />
            </div>
        </div>
    );
};

export default CVViewer;
