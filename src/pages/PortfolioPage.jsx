import React from "react";
import { portfolioData } from "../data/data.js"; // Import the data
import LazyLoad from "react-lazyload"; // Import LazyLoad
import { Helmet } from "react-helmet-async";

export const PortfolioPage = () => {

    return (

        <>

            <Helmet>
                <title>Portfolio of Projects: Web Development, SEO, Digital Marketing & More | Smit Parekh</title>
                <meta
                    name="description"
                    content="Explore the diverse portfolio of Smit Parekh, showcasing projects in SEO Optimization, Digital Marketing, Web Development, Video Editing, and Graphic Design. Discover innovative solutions tailored for various clients."
                />
                <meta
                    name="keywords"
                    content="Smit Parekh, portfolio, projects, web development, SEO optimization, digital marketing, video editing, graphic design"
                />
                <meta name="author" content="Smit Parekh" />
                <link rel="canonical" href="https://www.smitparekh.studio/portfolio" />

                {/* Open Graph Tags */}
                <meta property="og:title" content="Smit Parekh - Portfolio of Projects: Web Development, SEO, Digital Marketing & More" />
                <meta
                    property="og:description"
                    content="Discover a wide array of projects by Smit Parekh, including SEO optimization, digital marketing strategies, and web development showcases designed to enhance online presence."
                />
                <meta
                    property="og:image"
                    content="https://www.smitparekh.studio/images/portfolio-thumbnail.webp" // Replace with an appropriate thumbnail image for the portfolio
                />
                <meta property="og:url" content="https://www.smitparekh.studio/portfolio" />
                <meta property="og:type" content="website" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Smit Parekh - Portfolio of Projects: Web Development, SEO, Digital Marketing & More" />
                <meta
                    name="twitter:description"
                    content="Smit Parekh's portfolio showcases projects in SEO, digital marketing, and web development, reflecting innovative approaches and client-focused solutions."
                />
                <meta name="twitter:image" content="https://www.smitparekh.studio/images/portfolio-thumbnail.webp" />

                {/* Structured Data - JSON-LD */}
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "WebPage",
                            "name": "Smit Parekh's Portfolio",
                            "url": "https://www.smitparekh.studio/portfolio",
                            "description": "Explore the diverse projects of Smit Parekh in web development, SEO optimization, digital marketing, and more.",
                            "image": "https://www.smitparekh.studio/images/portfolio-thumbnail.webp",
                            "mainEntity": [
                                ${portfolioData.map(project => `
                                {
                                    "@type": "CreativeWork",
                                    "name": "${project.title.replace(/"/g, '\\"')}",
                                    "description": "${project.description.replace(/"/g, '\\"')}",
                                    "image": "https://www.smitparekh.studio${project.image}"
                                }`).join(",")}
                            ]
                        }
                    `}
                </script>
            </Helmet>


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
