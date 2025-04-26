import React, { useState, useEffect, useRef } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  const [category, setCategory] = useState(initialData.category || 'webdev');
  const [shortDescription, setShortDescription] = useState(initialData.shortDescription || '');
  const [detailMarkdown, setDetailMarkdown] = useState(initialData.detailMarkdown || '');
  const [imageUrl, setImageUrl] = useState(initialData.imageUrl || '');
  const [isShowcased, setIsShowcased] = useState(initialData.isShowcased || false);
  // Add states for repo link, demo link and demo button text
  const [repoLink, setRepoLink] = useState(initialData.repoLink || '');
  const [demoLink, setDemoLink] = useState(initialData.demoLink || '');
  const [demoBtn, setDemoBtn] = useState(initialData.demoBtn || 'View Live Demo');
  const [imageUploading, setImageUploading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const editorRef = useRef(null);

  // Show error and success toasts when they change
  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    if (successMessage) {
      toast.success(successMessage);
    }
  }, [error, successMessage]);

  // Categories for the dropdown
  const categories = [
    { id: "webdev", name: "Web Development" },
    { id: "frontend", name: "Frontend Design" },
    { id: "seo", name: "SEO" },
    { id: "marketing", name: "Marketing" },
    { id: "video", name: "Video Editing" },
  ];

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
      setImageUrl(data.url); // Updated to use data.url instead of data.imageUrl
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
    setIsSubmitting(true);
    
    const projectData = {
      title,
      category,
      shortDescription,
      detailMarkdown,
      imageUrl,
      isShowcased,
      // Add the new fields to project data
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

  return (
    <>
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      
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
            <label htmlFor="category">
              <i className="uil uil-list-ul form-icon"></i>
              Category
            </label>
            <div className="select-wrapper">
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
              <i className="uil uil-angle-down select-icon"></i>
            </div>
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
        
        {/* Add repository and demo link fields */}
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
