import { useParams, Link, useNavigate } from "react-router-dom"
import SEO from "../components/SEO/SEO"
import { useEffect, useState, useRef } from "react"
import ReactMarkdown from "react-markdown"
import DeleteConfirmationModal from "../components/DeleteConfirmationModal/DeleteConfirmationModal"
import "../styles/markdown.css"
import "../assets/css/project-detail.css"
import { formatUrlSlug, slugToTitle } from "../utils/urlUtils" // Import the enhanced utility functions

// ProjectDetailPage component definition starts here
const ProjectDetailPage = () => {
  // Get project slug from URL params
  const { id: projectSlug } = useParams()
  const projectTitle = slugToTitle(projectSlug)
  const [project, setProject] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [deleteLoading, setDeleteLoading] = useState(false)
  const [activeSection, setActiveSection] = useState("summary")
  const [showCopyNotification, setShowCopyNotification] = useState(false)

  // Refs for scroll animations
  const imageRef = useRef(null)
  const contentRef = useRef(null)

  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)

    // Check if authentication token exists
    const projectAuthToken = localStorage.getItem("projectAuthToken")
    setIsAuthenticated(!!projectAuthToken)

    const fetchProject = async () => {
      try {
        setLoading(true)

        // First try to fetch by slug directly, which is more reliable
        let response = await fetch(
          `${import.meta.env.VITE_API_URL}/projects/slug/${encodeURIComponent(
            projectSlug
          )}`
        )

        // If that fails, fall back to the title-based approach
        if (!response.ok) {
          response = await fetch(
            `${
              import.meta.env.VITE_API_URL
            }/projects/title/${encodeURIComponent(projectTitle)}`
          )
        }

        if (!response.ok) {
          throw new Error("Project not found")
        }

        const data = await response.json()
        if (data.success && data.data) {
          setProject(data.data)

          // Add slight delay to trigger animations after content loads
          setTimeout(() => {
            if (imageRef.current) imageRef.current.classList.add("animate-in")
            if (contentRef.current)
              contentRef.current.classList.add("animate-in")
          }, 100)
        } else {
          throw new Error("Invalid response format")
        }
      } catch (err) {
        console.error("Error fetching project:", err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProject()
  }, [projectSlug, projectTitle])

  // Handle project deletion
  const handleDeleteProject = async () => {
    if (!project || !isAuthenticated) return

    try {
      setDeleteLoading(true)
      const projectAuthToken = localStorage.getItem("projectAuthToken")

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/projects/${project._id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${projectAuthToken}`,
          },
        }
      )

      if (!response.ok) {
        throw new Error("Failed to delete project")
      }

      // Redirect to projects page after successful deletion
      navigate("/project")
    } catch (err) {
      alert(`Error deleting project: ${err.message}`)
    } finally {
      setDeleteLoading(false)
      setShowDeleteConfirm(false)
    }
  }

  // Handle clipboard copy with better user feedback
  const handleCopyToClipboard = () => {
    // Use formatted slug URL directly rather than trying to replace %20 after the fact
    const formattedUrl = `${window.location.origin}/project/${formatUrlSlug(
      project.title
    )}`
    navigator.clipboard.writeText(formattedUrl)
    setShowCopyNotification(true)
    setTimeout(() => {
      setShowCopyNotification(false)
    }, 3000)
  }

  // Define custom renderers for ReactMarkdown
  const markdownRenderers = {
    h1: ({ node, ...props }) => (
      <h1 className="markdown-heading markdown-h1" {...props} />
    ),
    h2: ({ node, ...props }) => (
      <h2 className="markdown-heading markdown-h2" {...props} />
    ),
    h3: ({ node, ...props }) => (
      <h3 className="markdown-heading markdown-h3" {...props} />
    ),
    h4: ({ node, ...props }) => (
      <h4 className="markdown-heading markdown-h4" {...props} />
    ),
    p: ({ node, ...props }) => <p className="markdown-paragraph" {...props} />,
    ul: ({ node, ...props }) => (
      <ul className="markdown-list markdown-ul" {...props} />
    ),
    ol: ({ node, ...props }) => (
      <ol className="markdown-list markdown-ol" {...props} />
    ),
    li: ({ node, ...props }) => (
      <li className="markdown-list-item" {...props} />
    ),
    a: ({ node, href, ...props }) => (
      <a
        className="markdown-link"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      />
    ),
    code: ({ node, inline, ...props }) =>
      inline ? (
        <code className="markdown-inline-code" {...props} />
      ) : (
        <pre className="markdown-code-block">
          <code {...props} />
        </pre>
      ),
    blockquote: ({ node, ...props }) => (
      <blockquote className="markdown-blockquote" {...props} />
    ),
    img: ({ node, src, alt, ...props }) => (
      <img
        className="markdown-image"
        src={src}
        alt={alt || ""}
        loading="lazy"
        {...props}
      />
    ),
  }

  // Calculate project duration or publish date display
  const getProjectTimeInfo = () => {
    if (!project) return ""

    if (project.startDate && project.endDate) {
      const start = new Date(project.startDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
      })
      const end =
        project.endDate === "present"
          ? "Present"
          : new Date(project.endDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
            })
      return `${start} - ${end}`
    }

    if (project.publishDate) {
      return `Published: ${new Date(project.publishDate).toLocaleDateString(
        "en-US",
        {
          year: "numeric",
          month: "long",
          day: "numeric",
        }
      )}`
    }

    return ""
  }
  // Navigation controls are outside the loading conditional
  const renderNavigationControls = () => (
    <div className="project-detail__nav">
      <Link to="/project" className="project-detail__back">
        <i className="uil uil-arrow-left"></i> Back to Projects
      </Link>

      {isAuthenticated && project && (
        <div className="project-detail__admin-controls">
          <Link
            to={`/admin/edit-project/${project._id}`}
            className="button button--small button--edit"
          >
            <i className="uil uil-edit"></i> Edit
          </Link>
          <button
            onClick={() => setShowDeleteConfirm(true)}
            className="button button--small button--danger"
          >
            <i className="uil uil-trash-alt"></i> Delete
          </button>
        </div>
      )}
    </div>
  )
  // Improved loading state with animation
  if (loading) {
    return (
      <div className="project-detail section">
        <div className="project-detail__container container">
          {renderNavigationControls()}

          <div className="project-detail__loading">
            <div className="loader-container">
              <div className="loader-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <h2>Loading project details...</h2>
              <p>Just a moment while we prepare everything for you</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Enhanced error state with illustration
  if (error || !project) {
    return (
      <div className="project-detail section">
        <div className="project-detail__container container">
          {renderNavigationControls()}

          <div className="project-detail__error">
            <div className="error-container">
              <div className="error-icon">
                <i className="uil uil-exclamation-circle"></i>
              </div>
              <h2>Oops! {error || "Project not found"}</h2>
              <p>We couldn't find the project you're looking for.</p>
              <Link to="/project" className="button button--flex">
                <i className="uil uil-arrow-left"></i> Browse All Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Schema for structured data - Enhanced with more properties
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.shortDescription,
    image: project.imageUrl,
    url: `https://www.smitparekh.co.in/project/${formatUrlSlug(project.title)}`,
    creator: {
      "@type": "Person",
      name: "Smit Parekh",
      url: "https://www.smitparekh.co.in",
    },
    datePublished: project.publishDate || project.startDate || "2023-01-01",
    keywords: project.technologies
      ? project.technologies.join(", ")
      : project.title,
    thumbnailUrl: project.imageUrl,
    ...(project.repoLink && { codeRepository: project.repoLink }),
    ...(project.demoLink && { workExample: project.demoLink }),
  }

  // Add BreadcrumbList schema for better navigation structure
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.smitparekh.co.in",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: "https://www.smitparekh.co.in/project",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: `https://www.smitparekh.co.in/project/${formatUrlSlug(
          project.title
        )}`,
      },
    ],
  }

  // Person schema for author information
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Smit Parekh",
    url: "https://www.smitparekh.co.in",
    jobTitle: "Web Developer & Digital Marketer",
    worksFor: {
      "@type": "Organization",
      name: "Smit Parekh Studio",
    },
  }

  return (
    <>
      {/* Only render SEO component when project data is loaded */}
      {project && (
        <SEO
          title={`${project.title} | Smit Parekh Portfolio`}
          description={project.shortDescription}
          keywords={`${project.title}, ${
            project.technologies ? project.technologies.join(", ") : ""
          }, project details, Smit Parekh, portfolio project, ${getCategoryName(
            project.category
          )}`}
          canonicalUrl={`https://www.smitparekh.co.in/project/${formatUrlSlug(
            project.title
          )}`}
          ogType="article"
          ogImage={project.imageUrl}
          ogTitle={`${project.title} - Portfolio Project by Smit Parekh`}
          twitterImage={project.imageUrl}
          twitterTitle={`${project.title} - See my work`}
          structuredData={[projectSchema, breadcrumbSchema, personSchema]}
          articlePublishedTime={project.publishDate || project.startDate}
          articleModifiedTime={
            project.endDate !== "present" ? project.endDate : undefined
          }
          lastUpdated={project.updatedAt}
          language="en-US"
          author="Smit Parekh"
        />
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <DeleteConfirmationModal
          title={project.title}
          onCancel={() => setShowDeleteConfirm(false)}
          onDelete={handleDeleteProject}
          isLoading={deleteLoading}
        />
      )}

      <section className="project-detail section">
        <div className="project-detail__container container">
          {renderNavigationControls()}

          {/* Header placed outside grid layout */}
          <div className="project-detail__header">
            <h1 className="project-detail__title">{project.title}</h1>
            <div className="project-detail__meta">
              <div className="project-detail__category">
                <i className="uil uil-folder"></i>
                {project.categories && project.categories.length > 0 ? (
                  <>
                    <span className="project-detail__category-tag">
                      {getCategoryName(project.categories[0])}
                    </span>

                    {project.categories.length > 1 && (
                      <div className="project-detail__category-more">
                        <button
                          className="category-expand-button"
                          onClick={(e) => {
                            e.currentTarget.classList.toggle("active")
                            e.currentTarget.nextElementSibling.classList.toggle(
                              "expanded"
                            )
                          }}
                          aria-label="Show more categories"
                        >
                          +{project.categories.length - 1}
                        </button>
                        <div className="project-detail__category-expanded">
                          {project.categories.slice(1).map((categoryId) => (
                            <span
                              key={categoryId}
                              className="project-detail__category-tag"
                            >
                              {getCategoryName(categoryId)}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <span className="project-detail__category-tag">
                    {getCategoryName(project.category)}
                  </span>
                )}
              </div>
              {getProjectTimeInfo() && (
                <span className="project-detail__date">
                  <i className="uil uil-calendar-alt"></i>{" "}
                  {getProjectTimeInfo()}
                </span>
              )}
            </div>
          </div>

          {/* Horizontal ad before content - COMMENTED OUT UNTIL VERIFIED */}
          {/*
          <div className="ad-container after-header-ad">
            <HorizontalBannerAd adSlot="5678901234" />
          </div>
          */}

          {/* Using regular content layout instead of SidebarAdLayout until verified */}
          <div className="project-detail__content">
            {/* Image container at the top */}
            <div className="project-detail__image-container" ref={imageRef}>
              <img
                src={project.imageUrl}
                alt={project.title}
                className="project-detail__image"
              />
              {project.imageCaption && (
                <div className="project-detail__image-caption">
                  {project.imageCaption}
                </div>
              )}
            </div>

            {/* Info section below the image */}
            <div className="project-detail__info" ref={contentRef}>
              {/* Tab navigation for mobile */}
              <div className="project-detail__tabs">
                <button
                  className={`project-detail__tab ${
                    activeSection === "summary" ? "active" : ""
                  }`}
                  onClick={() => setActiveSection("summary")}
                >
                  <i className="uil uil-clipboard-notes"></i> Summary
                </button>
                {project.detailMarkdown && (
                  <button
                    className={`project-detail__tab ${
                      activeSection === "details" ? "active" : ""
                    }`}
                    onClick={() => setActiveSection("details")}
                  >
                    <i className="uil uil-document-layout-center"></i> Details
                  </button>
                )}
                {project.technologies && project.technologies.length > 0 && (
                  <button
                    className={`project-detail__tab ${
                      activeSection === "tech" ? "active" : ""
                    }`}
                    onClick={() => setActiveSection("tech")}
                  >
                    <i className="uil uil-brackets-curly"></i> Tech
                  </button>
                )}
              </div>

              {/* Content sections in vertical order */}
              <div
                className={`project-detail__summary ${
                  activeSection === "summary" ? "active" : ""
                }`}
              >
                <h3>
                  <i className="uil uil-clipboard-notes"></i> Project Summary
                </h3>
                <p>{project.shortDescription}</p>

                {project.challenges && (
                  <div className="project-detail__challenges">
                    <h4>
                      <i className="uil uil-mountains"></i> Challenges &
                      Solutions
                    </h4>
                    <p>{project.challenges}</p>
                  </div>
                )}

                {project.outcome && (
                  <div className="project-detail__outcome">
                    <h4>
                      <i className="uil uil-check-circle"></i> Outcome
                    </h4>
                    <p>{project.outcome}</p>
                  </div>
                )}
              </div>

              {/* Project details below summary */}
              {project.detailMarkdown && (
                <div
                  className={`project-detail__markdown ${
                    activeSection === "details" ? "active" : ""
                  }`}
                >
                  <h3>
                    <i className="uil uil-document-layout-center"></i> Project
                    Details
                  </h3>
                  <div className="markdown-content styled-markdown">
                    <ReactMarkdown components={markdownRenderers}>
                      {project.detailMarkdown}
                    </ReactMarkdown>
                  </div>
                </div>
              )}

              {project.technologies && project.technologies.length > 0 && (
                <div
                  className={`project-detail__technologies ${
                    activeSection === "tech" ? "active" : ""
                  }`}
                >
                  <h3>
                    <i className="uil uil-brackets-curly"></i> Technologies Used
                  </h3>
                  <ul>
                    {project.technologies.map((tech, index) => (
                      <li key={index}>
                        <span className="tech-name">{tech}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Only render links section if there are links */}
              {(project.demoLink || project.repoLink) && (
                <div className="project-detail__links">
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      className="button button--flex"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="uil uil-globe"></i>{" "}
                      {project.demoBtn || "View Live Demo"}
                    </a>
                  )}

                  {project.repoLink && (
                    <a
                      href={project.repoLink}
                      className="button button--outline button--flex"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="uil uil-github"></i> View Code
                    </a>
                  )}
                </div>
              )}

              {/* Social sharing section with accessibility improvements */}
              <div className="project-detail__share">
                <h4>
                  <i className="uil uil-share-alt"></i> Share this project
                </h4>
                <div className="project-detail__share-buttons">
                  <a
                    href={`https://twitter.com/intent/tweet?text=Check out this awesome project: ${
                      project.title
                    }&url=${encodeURIComponent(
                      `${window.location.origin}/project/${formatUrlSlug(
                        project.title
                      )}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="share-button twitter"
                    aria-label="Share on Twitter"
                  >
                    <i className="uil uil-twitter"></i>
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                      `${window.location.origin}/project/${formatUrlSlug(
                        project.title
                      )}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="share-button linkedin"
                    aria-label="Share on LinkedIn"
                  >
                    <i className="uil uil-linkedin"></i>
                  </a>
                  <button
                    onClick={handleCopyToClipboard}
                    className="share-button copy"
                    aria-label="Copy link to clipboard"
                  >
                    <i className="uil uil-link"></i>
                  </button>
                </div>

                {/* Non-intrusive copy notification */}
                <div
                  className={`copy-notification ${
                    showCopyNotification ? "show" : ""
                  }`}
                >
                  <i className="uil uil-check"></i> Link copied to clipboard!
                </div>
              </div>
            </div>
          </div>

          {/* Original SidebarAdLayout code commented out until verified 
          <SidebarAdLayout adSlot="6789012345" adPosition="right" className="project-detail-layout">
            // ...existing content code...
          </SidebarAdLayout>
          */}

          <div className="project-detail__related">
            <h2>Explore More Projects</h2>
            <Link to="/project" className="explore-all-link">
              <span>View All Projects</span>{" "}
              <i className="uil uil-arrow-right"></i>
            </Link>
          </div>

          {/* Horizontal ad at the bottom - COMMENTED OUT UNTIL VERIFIED */}
          {/*
          <div className="ad-container before-footer-ad">
            <HorizontalBannerAd adSlot="7890123456" />
          </div>
          */}
        </div>
      </section>
    </>
  )
}

// Helper function to get category name
const getCategoryName = (categoryId) => {
  switch (categoryId) {
    case "webdev":
      return "Web Development"
    case "frontend":
      return "Frontend Development"
    case "backend":
      return "Backend Development"
    case "fullstack":
      return "Full-Stack Development"
    case "api":
      return "API Development"
    case "ecommerce":
      return "E-Commerce Solutions"
    case "analytics":
      return "Analytics Integration"
    case "ui-ux":
      return "UI/UX Design"
    case "seo":
      return "SEO Optimization"
    case "performance":
      return "Performance Optimization"
    case "marketing":
      return "Digital Marketing"
    case "video":
      return "Video Production"
    default:
      return categoryId || "Project"
  }
}

export default ProjectDetailPage
