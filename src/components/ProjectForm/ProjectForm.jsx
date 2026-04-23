import { useState, useEffect, useRef } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { toast } from 'react-toastify';

const ProjectForm = ({ 
  initialData = {}, 
  onSubmit, 
  loading, 
  error, 
  successMessage, 
  submitButtonText,
  cancelHandler,
  extraActions
}) => {
  const [title, setTitle] = useState(initialData.title || '');
  // Change from single category to multiple categories
  const [selectedCategories, setSelectedCategories] = useState(
    initialData.categories ? 
    (Array.isArray(initialData.categories) ? initialData.categories : [initialData.category || 'webdev']) : 
    [initialData.category || 'webdev']
  );
  const [shortDescription, setShortDescription] = useState(initialData.shortDescription || '');
  const [detailMarkdown, setDetailMarkdown] = useState(initialData.detailMarkdown || '');
  const [imageUrl, setImageUrl] = useState(initialData.imageUrl || '');
  const [isShowcased, setIsShowcased] = useState(initialData.isShowcased || false);
  const [repoLink, setRepoLink] = useState(initialData.repoLink || '');
  const [demoLink, setDemoLink] = useState(initialData.demoLink || '');
  const [demoBtn, setDemoBtn] = useState(initialData.demoBtn || 'View Live Demo');
  const [imageUploading, setImageUploading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

  const editorRef = useRef(null);
  const categoryDropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (categoryDropdownRef.current && !categoryDropdownRef.current.contains(event.target)) {
        setShowCategoryDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Show error and success toasts when they change
  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    if (successMessage) {
      toast.success(successMessage);
    }
  }, [error, successMessage]);

    // Professional categories for the dropdown
    const categories = [
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

  // Handle category selection/deselection
  const toggleCategory = (categoryId) => {
    setSelectedCategories(prevSelected => {
      if (prevSelected.includes(categoryId)) {
        // Remove category if already selected
        return prevSelected.filter(id => id !== categoryId);
      } else {
        // Add category if not selected
        return [...prevSelected, categoryId];
      }
    });
  };

  // Image upload handler
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);
    
    setImageUploading(true);
    
    try {
      const token = localStorage.getItem('projectAuthToken');
      
      const response = await fetch(`${import.meta.env.VITE_API_URL}/upload`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData
      });

      if (!response.ok) {
        throw new Error('Failed to upload image');
      }

      const data = await response.json();
      setImageUrl(data.url); 
      toast.success("Image uploaded successfully!");
      
    } catch (err) {
      console.error('Error uploading image:', err);
      toast.error("Failed to upload image. Please try again.");
    } finally {
      setImageUploading(false);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    // Validate that at least one category is selected
    if (selectedCategories.length === 0) {
      toast.error("Please select at least one category");
      return;
    }
    
    setIsSubmitting(true);
    
    const projectData = {
      title,
      // For backward compatibility, keep single category as primary
      category: selectedCategories[0],
      // Add the array of categories
      categories: selectedCategories,
      shortDescription,
      detailMarkdown,
      imageUrl,
      isShowcased,
      repoLink,
      demoLink,
      demoBtn
    };
    
    try {
      await onSubmit(projectData);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Add tooltips to MDEditor toolbar buttons
  useEffect(() => {
    if (editorRef.current) {
      const toolbarButtons = editorRef.current.querySelectorAll('.w-md-editor-toolbar ul li button');
      
      // Map of button icons to tooltip texts
      const tooltipTexts = {
        'bold': 'Bold (Ctrl+B)',
        'italic': 'Italic (Ctrl+I)',
        'quote': 'Quote (Ctrl+Q)',
        'code': 'Code (Ctrl+K)',
        'link': 'Link (Ctrl+L)',
        'image': 'Image',
        'unordered-list': 'Bullet List',
        'ordered-list': 'Numbered List',
        'task-list': 'Task List',
        'checked-list': 'Checked List',
        'heading': 'Heading',
        'fullscreen': 'Fullscreen',
        'preview': 'Preview',
        'edit': 'Edit'
      };
      
      toolbarButtons.forEach((button, index) => {
        // Try to infer button type from classes or content
        const buttonClasses = button.className;
        const buttonIcon = button.querySelector('svg')?.getAttribute('aria-label') || '';
        
        let tooltipText = '';
        for (const [key, value] of Object.entries(tooltipTexts)) {
          if (buttonClasses.includes(key) || buttonIcon.toLowerCase().includes(key)) {
            tooltipText = value;
            break;
          }
        }
        
        // If we couldn't identify the button, use a generic name
        if (!tooltipText) {
          tooltipText = `Tool ${index + 1}`;
        }
        
        // Add tooltip attributes
        button.setAttribute('data-tooltip-id', 'md-toolbar-tooltip');
        button.setAttribute('data-tooltip-content', tooltipText);
      });
    }
  }, [detailMarkdown]); // Re-run when content changes as toolbar might re-render

  // Get selected categories names for display
  const getSelectedCategoriesText = () => {
    if (selectedCategories.length === 0) return "Select categories";
    
    const selectedNames = selectedCategories.map(id => {
      const category = categories.find(cat => cat.id === id);
      return category ? category.name : id;
    });
    
    if (selectedNames.length <= 2) return selectedNames.join(", ");
    return `${selectedNames.length} categories selected`;
  };

  return (
    <>
      
      <form onSubmit={handleFormSubmit} className="add-project__form">
        <div className="add-project__form-grid">
          <div className="add-project__form-group">
            <label htmlFor="title">
              <i className="uil uil-heading form-icon"></i>
              Project Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              placeholder="Enter a descriptive title"
            />
          </div>
          
          <div className="add-project__form-group">
            <label>
              <i className="uil uil-list-ul form-icon"></i>
              Categories
            </label>
            <div className="custom-multi-select" ref={categoryDropdownRef}>
              <div 
                className="select-display"
                onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
              >
                <span>{getSelectedCategoriesText()}</span>
                <i className={`uil ${showCategoryDropdown ? 'uil-angle-up' : 'uil-angle-down'} select-icon`}></i>
              </div>
              {showCategoryDropdown && (
                <div className="select-dropdown">
                  {categories.map((cat) => (
                    <div 
                      key={cat.id} 
                      className={`select-option ${selectedCategories.includes(cat.id) ? 'selected' : ''}`}
                      onClick={() => toggleCategory(cat.id)}
                    >
                      <span className="checkbox-custom">
                        {selectedCategories.includes(cat.id) && <span className="check-mark">✓</span>}
                      </span>
                      {cat.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="form-helper">Select all categories that apply to this project</div>
          </div>
        </div>
        
        <div className="add-project__form-group">
          <label htmlFor="shortDescription">
            <i className="uil uil-comment-alt-lines form-icon"></i>
            Short Description
          </label>
          <textarea
            id="shortDescription"
            value={shortDescription}
            onChange={(e) => setShortDescription(e.target.value)}
            required
            rows="3"
            placeholder="A brief summary of your project (will appear in cards)"
            className="index-metadata__text"
          />
          <div className="form-helper">Keep it concise, ideally under 150 characters</div>
        </div>
        
        <div className="add-project__form-group">
          <label htmlFor="imageUrl">
            <i className="uil uil-image form-icon"></i>
            Project Image
          </label>
          <div className="add-project__image-upload">
            {imageUrl && (
              <div className="add-project__image-preview">
                <img src={imageUrl} alt="Project preview" />
              </div>
            )}
            <div className="add-project__upload-controls">
              <div className="custom-file-upload">
                <input
                  type="file"
                  id="imageUpload"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
                <label htmlFor="imageUpload">
                  <i className="uil uil-upload"></i>
                  {imageUploading ? 'Uploading...' : 'Choose File'}
                </label>
              </div>
              <div className="add-project__url-input">
                <input
                  type="text"
                  id="imageUrl"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="Or enter image URL directly"
                  required
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="add-project__form-grid">
          <div className="add-project__form-group">
            <label htmlFor="repoLink">
              <i className="uil uil-github form-icon"></i>
              Repository Link
            </label>
            <input
              type="text"
              id="repoLink"
              value={repoLink}
              onChange={(e) => setRepoLink(e.target.value)}
              placeholder="GitHub repository URL (optional)"
            />
          </div>
          
          <div className="add-project__form-group">
            <label htmlFor="demoLink">
              <i className="uil uil-globe form-icon"></i>
              Demo Link
            </label>
            <input
              type="text"
              id="demoLink"
              value={demoLink}
              onChange={(e) => setDemoLink(e.target.value)}
              placeholder="Live demo URL (optional)"
            />
          </div>
        </div>

        <div className="add-project__form-group">
          <label htmlFor="demoBtn">
            <i className="uil uil-text form-icon"></i>
            Demo Button Text
          </label>
          <input
            type="text"
            id="demoBtn"
            value={demoBtn}
            onChange={(e) => setDemoBtn(e.target.value)}
            placeholder="Custom text for demo button"
          />
          <div className="form-helper">Customize the text that appears on the demo button (default: "View Live Demo")</div>
        </div>
        
        <div className="add-project__form-group showcase-checkbox">
          <label htmlFor="isShowcased" className="checkbox-label">
            <input
              type="checkbox"
              id="isShowcased"
              checked={isShowcased}
              onChange={(e) => setIsShowcased(e.target.checked)}
            />
            <span className="checkbox-custom"></span>
            <span className="checkbox-text">
              <i className="uil uil-star form-icon"></i>
              Showcase this project (will appear in featured section)
            </span>
          </label>
        </div>
        
        <div className="add-project__form-group">
          <label htmlFor="detailMarkdown">
            <i className="uil uil-document-layout-left form-icon"></i>
            Project Details (Markdown)
          </label>
          <div className="add-project__markdown" ref={editorRef}>
            <MDEditor
              value={detailMarkdown}
              onChange={setDetailMarkdown}
              preview="edit"
              height={400}
              textareaProps={{
                placeholder: 'Write your detailed project description here...',
                style: {
                  lineHeight: '1.6',
                }
              }}
            />
            <Tooltip id="md-toolbar-tooltip" />
          </div>
          <div className="form-helper">
            Use markdown to format your content. You can include headers, lists, links, and more.
          </div>
        </div>
        
        <div className="add-project__form-actions">
          {extraActions}
          <button 
            type="button" 
            onClick={cancelHandler}
            disabled={loading || isSubmitting}
            className="button button--secondary index-metadata__button"
          >
            <i className={loading || isSubmitting ? "uil uil-spinner-alt fa-spin" : "uil uil-times"}></i> 
            {loading || isSubmitting ? 'Please wait...' : 'Cancel'}
          </button>
          <button 
            type="submit" 
            disabled={loading || imageUploading || isSubmitting}
            className="button button--primary index-metadata__button"
          >
            {loading || isSubmitting ? (
              <>
                <i className="uil uil-spinner-alt fa-spin"></i> 
                Processing...
              </>
            ) : (
              submitButtonText || 'Save Project'
            )}
          </button>
        </div>
      </form>
    </>
  );
};

export default ProjectForm;