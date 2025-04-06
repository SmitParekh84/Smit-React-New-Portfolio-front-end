import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO/SEO";
import "../assets/css/error-page.css";

const NotFoundPage = () => {
    // Structured data for the 404 page
    const notFoundSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Page Not Found - 404 Error | Smit Parekh Studio",
        "description": "The page you're looking for couldn't be found. Navigate back to the homepage or explore our available tools and services."
    };

    return (
        <>
            <SEO 
                title="Page Not Found - 404 Error | Smit Parekh Studio"
                description="Sorry, the page you're looking for doesn't exist or has been moved. Explore our tools, services, or contact us for assistance."
                canonicalUrl="https://www.smitparekh.studio/404"
                structuredData={notFoundSchema}
                lastUpdated={new Date().toISOString()}
                language="en-US"
                author="Smit Parekh"
                indexPage={false}
            />

            <section className="error-page section">
                <div className="container">
                    <div className="error-page__content">
                        <div className="error-page__image">
                            <i className="uil uil-exclamation-triangle" style={{ fontSize: "8rem", color: "var(--first-color)" }}></i>
                            <h1 className="error-page__code">404</h1>
                        </div>
                        
                        <h2 className="section__title">Page Not Found</h2>
                        <p className="error-page__description">
                            Sorry, the page you're looking for doesn't exist or has been moved.
                        </p>
                        
                        <div className="error-page__actions">
                            <Link to="/" className="button button--flex">
                                <i className="uil uil-home button__icon"></i> Back to Home
                            </Link>
                            
                            <Link to="/free-tools" className="button button--flex button--light">
                                <i className="uil uil-apps button__icon"></i> Explore Tools
                            </Link>
                        </div>
                        
                        <div className="error-page__help">
                            <h3>Looking for something specific?</h3>
                            <ul className="error-page__links">
                                <li>
                                    <i className="uil uil-arrow-right"></i>
                                    <Link to="/contact">Contact Support</Link>
                                </li>
                                <li>
                                    <i className="uil uil-arrow-right"></i>
                                    <Link to="/services">Services</Link>
                                </li>
                                <li>
                                    <i className="uil uil-arrow-right"></i>
                                    <Link to="/about">About Smit</Link>
                                </li>
                                <li>
                                    <i className="uil uil-arrow-right"></i>
                                    <Link to="/portfolio">Portfolio</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default NotFoundPage;
