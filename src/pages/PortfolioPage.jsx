import React from "react";
import { Link } from "react-router-dom";
import { portfolioData } from "../data/data";
import LazyLoad from "react-lazyload";
import SEO from "../components/SEO/SEO";

export const PortfolioPage = () => {
  // Schema for structured data
  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
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
          "url": item.demoLink
        }
      }))
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
        structuredData={portfolioSchema}
      />

      {/* Navigation links at top of portfolio page */}
      <div className="portfolio-nav container" style={{marginTop: "5rem", textAlign: "center", marginBottom: "2rem"}}>
        <h1 className="section__title">My Projects</h1>
        <div style={{display: "flex", justifyContent: "center", gap: "1rem", marginTop: "1rem"}}>
          <Link to="/portfolio" className="button button--flex button--small" style={{backgroundColor: window.location.pathname === "/portfolio" ? "var(--first-color)" : "var(--first-color-alt)"}}>
            <i className="uil uil-presentation-play button__icon"></i> Full Portfolio
          </Link>
          <Link to="/project" className="button button--flex button--small" style={{backgroundColor: window.location.pathname === "/project" ? "var(--first-color)" : "var(--first-color-alt)"}}>
            <i className="uil uil-image button__icon"></i> Projects Gallery
          </Link>
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
