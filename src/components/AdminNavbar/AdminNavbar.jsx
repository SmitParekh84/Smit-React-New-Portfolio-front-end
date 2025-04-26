import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './AdminNavbar.css';

const AdminNavbar = ({ isAuthenticated }) => {
  const location = useLocation();
  
  // Only render if authenticated
  if (!isAuthenticated) return null;
  
  // Check if current path is an admin path
  const isAdminPath = location.pathname.startsWith('/admin');
  
  return (
    <div className={`admin-navbar ${isAdminPath ? 'admin-navbar--expanded' : ''}`}>
      <div className="admin-navbar__container">
        <div className="admin-navbar__left">
          <i className="uil uil-shield admin-navbar__icon"></i>
          <span className="admin-navbar__label">Admin Mode</span>
        </div>
        
        <div className="admin-navbar__links">
          <Link 
            to="/admin/dashboard" 
            className={`admin-navbar__link ${location.pathname === '/admin/dashboard' ? 'active' : ''}`}
          >
            <i className="uil uil-apps admin-navbar__link-icon"></i>
            <span className="admin-navbar__link-text">Dashboard</span>
          </Link>
          
          <Link 
            to="/admin/add-project" 
            className={`admin-navbar__link ${location.pathname === '/admin/add-project' ? 'active' : ''}`}
          >
            <i className="uil uil-plus-circle admin-navbar__link-icon"></i>
            <span className="admin-navbar__link-text">Add Project</span>
          </Link>
          
          <button 
            onClick={() => {
              localStorage.removeItem('projectAuthToken');
              window.location.href = '/';
            }}
            className="admin-navbar__logout"
          >
            <i className="uil uil-sign-out-alt admin-navbar__link-icon"></i>
            <span className="admin-navbar__link-text">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;