import { Link, useNavigate } from "react-router-dom";
import SEO from "../components/SEO/SEO";
import { useState, useEffect, useRef } from "react";
import PortfolioCard from "../components/PortfolioCard/PortfolioCard";
import PortfolioSkeletonGrid from "../components/PortfolioCard/PortfolioSkeletonGrid"; // Import the skeleton grid component
import DeleteConfirmationModal from "../components/DeleteConfirmationModal/DeleteConfirmationModal";
// Import Swiper
import Swiper from "swiper/bundle";
// Import the CSS file
import "../assets/css/portfolio.css";
// Import eye icons for password visibility toggle
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { formatUrlSlug } from "../App"; // Import the utility function

export const PortfolioPage = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [authLoading, setAuthLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  // Add state for password visibility
  const [showPassword, setShowPassword] = useState(false);
  
  // Add state for deletion modal
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState(null);
  const swiperRef = useRef(null);
  const navigate = useNavigate();

  // Check authentication status
  useEffect(() => {
    const projectAuthToken = localStorage.getItem('projectAuthToken');
    setIsAuthenticated(!!projectAuthToken);
  }, []);

  // Initialize Swiper for category tabs
  useEffect(() => {
    // Make sure Swiper is available
    if (typeof Swiper === 'undefined') {
      console.error('Swiper not found. Make sure it is properly imported.');
      return;
    }

    // Initialize Swiper for category tabs
    const initializeSwiper = () => {
      if (swiperRef.current) return;
      
      try {
        swiperRef.current = new Swiper(".portfolio-tabs-swiper", {
          slidesPerView: "auto",
          spaceBetween: 10,
          grabCursor: true,
          loop: true, // Enable infinite scrolling
          loopAdditionalSlides: 2, // Helps with smoother transitions
          navigation: {
            nextEl: ".tab-scroll-right",
            prevEl: ".tab-scroll-left",
          },
          breakpoints: {
            576: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            992: {
              slidesPerView: 5,
            },
            1200: {
              slidesPerView: 6,
            },
          },
        });
      } catch (error) {
        console.error("Error initializing Swiper:", error);
      }
    };

    // Initialize Swiper after a short delay to ensure DOM is ready
    const timer = setTimeout(initializeSwiper, 300);

    // Cleanup function
    return () => {
      clearTimeout(timer);
      if (swiperRef.current && swiperRef.current.destroy) {
        swiperRef.current.destroy();
        swiperRef.current = null;
      }
    };
  }, []);

  // Handle project deletion
  const handleDeleteProject = async () => {
    if (!projectToDelete || !isAuthenticated) return;
    
    try {
      setDeleteLoading(true);
      const projectAuthToken = localStorage.getItem('projectAuthToken');
      
      const response = await fetch(`${import.meta.env.VITE_API_URL}/projects/${projectToDelete._id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${projectAuthToken}`
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete project');
      }
      
      // Remove the deleted project from the state
      setProjects(prevProjects => 
        prevProjects.filter(project => project._id !== projectToDelete._id)
      );
      
    } catch (err) {
      alert(`Error deleting project: ${err.message}`);
    } finally {
      setDeleteLoading(false);
      setShowDeleteConfirm(false);
      setProjectToDelete(null);
    }
  };

  // Function to open delete confirmation modal
  const openDeleteModal = (project) => {
    setProjectToDelete(project);
    setShowDeleteConfirm(true);
  };

  // Get unique categories for tabs - SYNCED with ProjectForm.jsx
  const categories = [
    { id: "all", name: "All Projects" },
    { id: "webdev", name: "Web Development" },
    { id: "frontend", name: "Frontend Development" },
    { id: "backend", name: "Backend Development" },
    { id: "fullstack", name: "Full-Stack Development" },
    { id: "api", name: "API Development" },
    { id: "ecommerce", name: "E-Commerce Solutions" },
    { id: "analytics", name: "Analytics Integration" },
    { id: "ui-ux", name: "UI/UX Design" },
    { id: "seo", name: "SEO Optimization" },
    { id: "performance", name: "Performance Optimization" },
    { id: "marketing", name: "Digital Marketing" },
    { id: "video", name: "Video Production" },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Admin authentication function
  const handleAdminLogin = async (e) => {
    e.preventDefault();
    setAuthError("");
    setAuthLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/projecteditaccess`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: adminEmail, password: adminPassword }),
      });

      if (!response.ok) {
        throw new Error('Authentication failed');
      }

      const data = await response.json();
      localStorage.setItem('projectAuthToken', data.token);
      setShowAdminModal(false);
      navigate('/admin/add-project');

    } catch (err) {
      setAuthError(err.message || 'Failed to authenticate');
    } finally {
      setAuthLoading(false);
    }
  };

  // Fetch projects data
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${import.meta.env.VITE_API_URL}/projects`);

        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }

        const data = await response.json();
        // Extract the projects array from the data field in the response
        if (data.success && data.data) {
          // Sort projects by updatedAt in descending order (newest first)
          const sortedProjects = [...data.data].sort((a, b) => {
            return new Date(b.updatedAt || b.createdAt) - new Date(a.updatedAt || a.createdAt);
          });
          setProjects(sortedProjects);
        } else {
          throw new Error('Invalid response format');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Filter projects based on active tab
  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(project => {
        // Check if project has categories array and includes the active tab
        if (project.categories && Array.isArray(project.categories)) {
          return project.categories.includes(activeTab);
        }
        // Fall back to single category field for backwards compatibility
        return project.category === activeTab;
      });

  // Handle category selection from dropdown
  const handleCategorySelect = (categoryId) => {
    setActiveTab(categoryId);
    setDropdownOpen(false);
  };

  // Get current category name for dropdown display
  const getCurrentCategoryName = () => {
    const category = categories.find(cat => cat.id === activeTab);
    return category ? category.name : 'All Projects';
  };

  // Schema for structured data
  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Smit Parekh's Portfolio",
    "description": "A collection of web development and digital marketing projects by Smit Parekh",
    "author": {
      "@type": "Person",
      "name": "Smit Parekh"
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": projects.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": `https://www.smitparekh.studio/project/${formatUrlSlug(item.title)}`,
        "item": {
          "@type": "CreativeWork",
          "name": item.title,
          "description": item.shortDescription,
          "image": item.imageUrl,
          "url": item.demoLink,
          "creator": {
            "@type": "Person",
            "name": "Smit Parekh"
          },
          "dateCreated": item.publishDate || "2023-01-01",
          "keywords": item.keywords || "web development, portfolio project"
        }
      }))
    },
    "datePublished": "2023-01-15",
    "dateModified": "2023-11-20"
  };

  // Website schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Smit Parekh Portfolio",
    "url": "https://www.smitparekh.studio",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.smitparekh.studio/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <SEO 
        title="Portfolio | Smit Parekh - Web Development & Digital Marketing Projects"
        description="Explore Smit Parekh's portfolio of web development projects and digital marketing campaigns. View case studies of SEO optimization, website development, and creative solutions."
        keywords="portfolio, web development projects, digital marketing portfolio, SEO case studies, Smit Parekh portfolio, web design examples"
        canonicalUrl="https://www.smitparekh.studio/project"
        ogImage="https://www.smitparekh.studio/images/portfolio-preview.webp"
        twitterImage="https://www.smitparekh.studio/images/portfolio-preview.webp"
        structuredData={[portfolioSchema, websiteSchema]}
        lastUpdated="2023-11-20"
        language="en-US"
      />

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && projectToDelete && (
        <DeleteConfirmationModal 
          title={projectToDelete.title}
          onCancel={() => setShowDeleteConfirm(false)}
          onDelete={handleDeleteProject}
          isLoading={deleteLoading}
        />
      )}

      {/* Hidden Admin Button */}
      <div 
        onClick={() => setShowAdminModal(true)}
        className="admin-access-point"
      ></div>

      {/* Admin Authentication Modal */}
      {showAdminModal && (
        <div className="admin-modal">
          <div className="admin-modal__content">
            <h2>Admin Access</h2>
            <form onSubmit={handleAdminLogin}>
              {authError && <p className="admin-modal__error">{authError}</p>}
              <div className="admin-modal__input-group">
                <label htmlFor="admin-email">Email</label>
                <input
                  id="admin-email"
                  type="email"
                  value={adminEmail}
                  onChange={(e) => setAdminEmail(e.target.value)}
                  required
                />
              </div>
              <div className="admin-modal__input-group">
                <label htmlFor="admin-password">Password</label>
                <div className="password-input-wrapper" style={{ position: 'relative' }}>
                  <input
                    id="admin-password"
                    type={showPassword ? "text" : "password"}
                    value={adminPassword}
                    onChange={(e) => setAdminPassword(e.target.value)}
                    required
                    style={{ width: '100%' }}
                  />
                  <button 
                    type="button" 
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                      position: 'absolute',
                      right: '10px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '0',
                      fontSize: '16px'
                    }}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>
              <div className="admin-modal__actions">
                <button type="button" onClick={() => setShowAdminModal(false)}>
                  Cancel
                </button>
                <button type="submit" disabled={authLoading}>
                  {authLoading ? 'Authenticating...' : 'Login'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Enhanced Portfolio Header Section */}
      <section className="portfolio-nav-section">
        <div className="portfolio__container">
          <h2 className="section__title">My Projects</h2>
          <p className="portfolio-nav__description">
            Browse through my recent projects showcasing a range of skills in web development,
            frontend design, SEO optimization, digital marketing, and more.
          </p>

          {/* Admin Project Management Buttons */}
          {isAuthenticated && (
            <div className="admin-controls">
              <Link to="/admin/add-project" className="button button--flex button--small">
                <i className="uil uil-plus"></i> Add Project
              </Link>
            </div>
          )}

          {/* Mobile Dropdown Filter */}
          <div className="portfolio-filter-dropdown" ref={dropdownRef}>
            <button 
              className={`portfolio-filter-button ${dropdownOpen ? 'active' : ''}`}
              onClick={() => setDropdownOpen(!dropdownOpen)}
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
            >
              <span>
                <i className={`uil uil-${getCategoryIcon(activeTab)} mr-1`}></i> 
                {getCurrentCategoryName()}
              </span>
              <i className="uil uil-angle-down"></i>
            </button>
            
            {/* Backdrop for mobile dropdown */}
            <div 
              className={`portfolio-filter-backdrop ${dropdownOpen ? 'show' : ''}`} 
              onClick={() => setDropdownOpen(false)}
            ></div>
            
            <div className={`portfolio-filter-menu ${dropdownOpen ? 'show' : ''}`}>
              {categories.map((category) => (
                <div
                  key={category.id}
                  className={`portfolio-filter-item ${activeTab === category.id ? 'active' : ''}`}
                  onClick={() => handleCategorySelect(category.id)}
                >
                  <i className={`uil uil-${getCategoryIcon(category.id)}`}></i>
                  {category.name}
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Category tabs using Swiper */}
          <div className="portfolio-tabs-container">
            <button 
              className="tab-scroll-button tab-scroll-left"
              aria-label="Scroll categories left"
            >
              <i className="uil uil-angle-left"></i>
            </button>
            
            <div className="portfolio-tabs-swiper swiper-container">
              <div className="swiper-wrapper">
                {categories.map((category) => (
                  <div className="swiper-slide" key={category.id}>
                    <button
                      className={`portfolio-nav__tab ${activeTab === category.id ? 'portfolio-nav__tab--active' : ''}`}
                      onClick={() => setActiveTab(category.id)}
                      title={category.name}
                    >
                      <i className={`uil uil-${getCategoryIcon(category.id)} portfolio-nav__icon`}></i>
                      <span className="portfolio-nav__tab-text">{category.name}</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              className="tab-scroll-button tab-scroll-right"
              aria-label="Scroll categories right"
            >
              <i className="uil uil-angle-right"></i>
            </button>
          </div>
        </div>
      </section>

      <section className="portfolio section">
        <div className="portfolio__container">
          {loading ? (
            <PortfolioSkeletonGrid /> // Use the skeleton grid component here
          ) : error ? (
            <div className="portfolio__error">
              <h3>Error: {error}</h3>
            </div>
          ) : (
            <div className="portfolio__grid">
              {filteredProjects.length === 0 ? (
                <div className="portfolio__empty">
                  <p>No projects found in this category.</p>
                </div>
              ) : (
                filteredProjects.map((project) => (
                  <PortfolioCard 
                    key={project._id}
                    project={project}
                    isAuthenticated={isAuthenticated}
                    onDeleteClick={() => openDeleteModal(project)}
                  />
                ))
          )}
            </div>
          )}
        </div>

        {/* Call to action */}
        <div className="portfolio__container">
          <div className="portfolio__cta">
            <Link to="/contact" className="button button--flex">
              Need a custom project?
              <i className="uil uil-message button__icon"></i>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

// Helper function to get category icon
const getCategoryIcon = (categoryId) => {
  switch(categoryId) {
    case 'webdev': return 'window-grid';
    case 'frontend': return 'desktop';
    case 'backend': return 'server';
    case 'fullstack': return 'code-branch';
    case 'api': return 'cloud';
    case 'ecommerce': return 'shopping-cart';
    case 'analytics': return 'chart-pie';
    case 'ui-ux': return 'paint-brush';
    case 'seo': return 'chart-growth';
    case 'performance': return 'rocket';
    case 'marketing': return 'megaphone';
    case 'video': return 'video';
    default: return 'apps';
  }
};

// Helper function to get category name
const getCategoryName = (categoryId) => {
  switch(categoryId) {
    case 'webdev': return 'Web Development';
    case 'frontend': return 'Frontend Development';
    case 'backend': return 'Backend Development';
    case 'fullstack': return 'Full-Stack Development';
    case 'api': return 'API Development';
    case 'ecommerce': return 'E-Commerce Solutions';
    case 'analytics': return 'Analytics Integration';
    case 'ui-ux': return 'UI/UX Design';
    case 'seo': return 'SEO Optimization';
    case 'performance': return 'Performance Optimization';
    case 'marketing': return 'Digital Marketing';
    case 'video': return 'Video Production';
    default: return 'Project';
  }
};

export default PortfolioPage;
