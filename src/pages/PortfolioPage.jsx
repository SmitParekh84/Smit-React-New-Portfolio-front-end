import React from "react";
import { portfolioData } from "../data/data.js";
import LazyLoad from "react-lazyload";
import SEO from "../components/SEO/SEO";

export const PortfolioPage = () => {
    // Portfolio items structured data
    const portfolioSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Smit Parekh's Portfolio",
        "url": "https://www.smitparekh.studio/portfolio",
        "description": "Explore the diverse projects of Smit Parekh in web development, SEO optimization, digital marketing, and more.",
        "image": "https://www.smitparekh.studio/images/portfolio-thumbnail.webp",
        "mainEntity": portfolioData.map(project => ({
            "@type": "CreativeWork",
            "name": project.title.replace(/"/g, '\\"'),
            "description": project.description.replace(/"/g, '\\"'),
            "image": `https://www.smitparekh.studio${project.image}`,
            "creator": {
                "@type": "Person",
                "name": "Smit Parekh"
            }
        }))
    };

    // Breadcrumb structured data
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.smitparekh.studio"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Portfolio",
                "item": "https://www.smitparekh.studio/portfolio"
            }
        ]
    };

    return (
        <>
            <SEO 
                title="Portfolio & Case Studies | Smit Parekh - Web Development, SEO & Digital Marketing Projects"
                description="Explore Smit Parekh's portfolio showcasing successful Web Development projects, SEO optimization case studies, and Digital Marketing campaigns that delivered measurable results for clients."
                keywords="Smit Parekh portfolio, web development projects, SEO case studies, digital marketing portfolio, professional work samples, client projects, UI/UX design portfolio"
                canonicalUrl="https://www.smitparekh.studio/portfolio"
                ogImage="https://www.smitparekh.studio/images/portfolio-thumbnail.webp"
                twitterImage="https://www.smitparekh.studio/images/portfolio-thumbnail.webp"
                structuredData={[portfolioSchema, breadcrumbSchema]}
            />

            <section className="portfolio section" id="portfolio">
                <h2 className="section__title">Portfolio</h2>
                <span className="section__subtitle">
                    Showcasing My Best Work. Client images and information are confidential;{" "}
                    <a href="/contact" className="button button--flex button--small button--link services__button">
                        contact me
                    </a>{" "}
                    for project inquiries.
                </span>

                <div className="portfolio__container container">
                    <div className="portfolio__grid">
                        {/* Dynamically map through portfolioData */}
                        {portfolioData.map((item) => (
                            <div className="portfolio__content" key={item.id}>
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
                                    {item.demoLink !== "#" && (
                                        <a
                                            href={item.demoLink}
                                            className="button button--flex button--small portfolio__button"
                                        >
                                            {item.demoBtn === "view" ? "View" : "Demo"}
                                            <i className="uil uil-arrow-right button__icon"></i>
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};
