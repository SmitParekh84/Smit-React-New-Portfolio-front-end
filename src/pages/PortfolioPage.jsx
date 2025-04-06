import React from "react";
import { Link } from "react-router-dom";
import { portfolioData } from "../data/data";
import LazyLoad from "react-lazyload";
import SEO from "../components/SEO/SEO";
// Import the new CSS file
import "../assets/css/portfolio.css";

export const PortfolioPage = () => {
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
      "itemListElement": portfolioData.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": `https://www.smitparekh.studio/project#${item.id}`,
        "item": {
          "@type": "CreativeWork",
          "name": item.title,
          "description": item.description,
          "image": item.image,
          "url": item.demoLink,
          "creator": {
            "@type": "Person",
            "name": "Smit Parekh"
          },
          "dateCreated": item.dateCreated || "2023-01-01",
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

      {/* Improved navigation links at top of portfolio page */}
      <div className="portfolio-nav-section section">
        <div className="container">
          <h1 className="section__title">My Projects</h1>
          <p className="portfolio-nav__description">Browse through my collection of web development and digital marketing projects</p>
          
          <div className="portfolio-nav__tabs">
            <Link 
              to="/portfolio" 
              className={`portfolio-nav__tab ${window.location.pathname === "/portfolio" ? "portfolio-nav__tab--active" : ""}`}
            >
              <i className="uil uil-presentation-play portfolio-nav__icon"></i>
              Full Portfolio
            </Link>
            <Link 
              to="/project" 
              className={`portfolio-nav__tab ${window.location.pathname === "/project" ? "portfolio-nav__tab--active" : ""}`}
            >
              <i className="uil uil-image portfolio-nav__icon"></i>
              Projects Gallery
            </Link>
          </div>
        </div>
      </div>

      <section className="portfolio section">
        <span className="section__subtitle">
          Browse My Recent Projects
        </span>

        <div className="portfolio__container container">
          <div className="portfolio__grid">
            {portfolioData.map((item) => (
              <div className="portfolio__content" key={item.id} id={`portfolio-${item.id}`}>
                <LazyLoad height={200} offset={100}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="portfolio__img"
                    loading="lazy"
                  />
                </LazyLoad>
                <div className="portfolio__info">
                  <h3 className="portfolio__title">{item.title}</h3>
                  <p className="portfolio__description">{item.description}</p>
                  {item.demoLink && (
                    <a
                      href={item.demoLink}
                      className="button button--flex button--small portfolio__button"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.demoBtn || "Demo"}
                      <i className="uil uil-arrow-right button__icon"></i>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <Link to="/contact" className="button button--flex">
            Need a custom project?
            <i className="uil uil-message button__icon"></i>
          </Link>
        </div>
      </section>
    </>
  );
};

export default PortfolioPage;
