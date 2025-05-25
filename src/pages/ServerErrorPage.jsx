// filepath: f:\Udemy\web development\project\portfolio\Smit-React-New-Portfolio\front-end\src\pages\ServerErrorPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO/SEO";
import "../assets/css/error-page.css";

const ServerErrorPage = () => {
    // Structured data for the 5xx error page
    const serverErrorSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Server Error - 5xx Error | Smit Parekh",
        "description": "We're experiencing technical difficulties. Please try again later or navigate back to the homepage."
    };

    return (
        <>
            <SEO 
                title="Server Error - 5xx Error | Smit Parekh"
                description="We're experiencing technical difficulties on our server. Please try again later or navigate back to the homepage."
                canonicalUrl="https://www.smitparekh.studio/500"
                structuredData={serverErrorSchema}
                lastUpdated={new Date().toISOString()}
                language="en-US"
                author="Smit Parekh"
                indexPage={false}
            />

            <section className="error-page section">
                <div className="container">
                    <div className="error-page__content">
                        <div className="error-page__image">
                            <i className="uil uil-server-network-alt" style={{ fontSize: "8rem", color: "var(--first-color)" }}></i>
                            <h1 className="error-page__code">500</h1>
                        </div>
                        
                        <h2 className="section__title">Server Error</h2>
                        <p className="error-page__description">
                            Sorry, we're experiencing some technical difficulties with our server. This is our fault, not yours.
                        </p>
                        <p className="error-page__description">
                            Please try again later or use one of the links below.
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
                            <h3>Need help with something?</h3>
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
                                    <Link to="/about">About Tools</Link>
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

export default ServerErrorPage;
