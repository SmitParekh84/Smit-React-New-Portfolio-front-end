import React from "react";
import { Link } from "react-router-dom";
import "./ToolsHero.css";

const ToolsHero = () => {
    return (
        <section className="home__section tools-hero">
            <div className="container tools-hero__container">
                <div className="tools-hero__content">
                    <span className="tools-hero__badge">
                        <i className="uil uil-fire mr-1"></i>
                        <span className="badge-pulse"></span>
                        Trusted by 10,000+ professionals worldwide
                    </span>
                    
                    <h1 className="tools-hero__title">
                        Powerful Free Tools That <span className="tools-hero__highlight">Save You Time</span> & Boost Productivity
                    </h1>
                    
                    <p className="tools-hero__description">
                        Access professional-grade tools without spending a penny. No sign-ups, no credit cards, no limitations – just instant results that help you work smarter.
                    </p>
                    
                    <div className="tools-hero__trust-signals">
                        <div className="trust-logos">
                            <span>Trusted by teams at</span>
                            <div className="logo-container">
                                <span>Google</span>
                                <span>Microsoft</span>
                                <span>Amazon</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="tools-hero__buttons">
                        <a href="/free-tools" className="tools-hero__button-primary">
                            Get Started Now - It's Free
                            <i className="uil uil-arrow-right button__icon"></i>
                        </a>
                        <Link to="/contact" className="tools-hero__button-secondary">
                            Need Custom Solution?
                            <i className="uil uil-message button__icon"></i>
                        </Link>
                    </div>

                    <div className="tools-hero__metrics">
                        <div className="tools-hero__metric">
                            <h3 className="tools-hero__metric-number">100%</h3>
                            <p className="tools-hero__metric-label">Free Forever</p>
                        </div>
                        <div className="tools-hero__metric">
                            <h3 className="tools-hero__metric-number">5M+</h3>
                            <p className="tools-hero__metric-label">Tasks Completed</p>
                        </div>
                        <div className="tools-hero__metric">
                            <h3 className="tools-hero__metric-number">4.9/5</h3>
                            <p className="tools-hero__metric-label">User Rating</p>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Enhanced background elements with texture */}
            <div className="tools-hero__bg-circle-large"></div>
            <div className="tools-hero__bg-circle-small"></div>
            <div className="tools-hero__bg-circle-medium"></div>
            <div className="tools-hero__bg-pattern"></div>
            <div className="tools-hero__grid-overlay"></div>
            <div className="tools-hero__noise-texture"></div>
            <div className="tools-hero__floating-shape shape1"></div>
            <div className="tools-hero__floating-shape shape2"></div>
            <div className="tools-hero__floating-shape shape3"></div>
            <div className="tools-hero__floating-shape shape4"></div>
            <div className="tools-hero__floating-shape shape5"></div>
        </section>
    );
};

export default ToolsHero;
