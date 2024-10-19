import React from "react";
import { portfolioData } from "../data/data.js"; // Import the data
import LazyLoad from "react-lazyload"; // Import LazyLoad

export const PortfolioPage = () => {
    return (
        <section className="portfolio section" id="portfolio">
            <h2 className="section__title">Portfolio</h2>
            <span className="section__subtitle">
                Showcasing My Best Work. Client images and information are confidential;{" "}
                <a href="#contact" className="button button--flex button--small button--link services__button">
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
    );
};
