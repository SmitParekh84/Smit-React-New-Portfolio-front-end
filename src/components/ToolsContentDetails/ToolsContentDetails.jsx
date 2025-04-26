import React from 'react';
import './ToolsContentDetails.css';

const ToolsContentDetails = ({ 
    className = '',
    title = 'Professional Tools For Everyone',
    animated = true,
    darkMode = false
}) => {
    return (
        <section className={`tools-content-details-section ${darkMode ? 'dark-mode' : ''} ${className}`}>
            <div className="container tools-content-details__container">
                <div className={`tools-content-details__wrapper ${animated ? 'animate-section' : ''}`}>
                    <h2 className="tools-content-details__title">{title}</h2>
                    
                    <div className="tools-content-details__content">
                        <div className="tools-content-details__description">
                            <p>
                                Our collection of free online tools is designed to help professionals, small business owners, 
                                students, and creators enhance their workflow. Each tool is carefully crafted to solve 
                                specific problems you encounter in your daily work.
                            </p>
                            <p>
                                Whether you need to remove backgrounds from images, generate engaging LinkedIn posts, 
                                analyze your website's SEO performance, or create QR codes - we've got you covered with 
                                enterprise-grade solutions that are completely free to use.
                            </p>
                        </div>
                        
                        <div className="tools-content-details__key-benefits">
                            <div className="key-benefit">
                                <i className="uil uil-check-circle"></i>
                                <span>No registration required</span>
                            </div>
                            <div className="key-benefit">
                                <i className="uil uil-check-circle"></i>
                                <span>Unlimited usage with no hidden fees</span>
                            </div>
                            <div className="key-benefit">
                                <i className="uil uil-check-circle"></i>
                                <span>Professional-quality results every time</span>
                            </div>
                            <div className="key-benefit">
                                <i className="uil uil-check-circle"></i>
                                <span>Privacy-focused with no data storage</span>
                            </div>
                            <div className="key-benefit">
                                <i className="uil uil-check-circle"></i>
                                <span>Mobile-friendly interface</span>
                            </div>
                            <div className="key-benefit">
                                <i className="uil uil-check-circle"></i>
                                <span>Regular updates with new features</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Background elements */}
            <div className="tools-content-details__bg-circle"></div>
            <div className="tools-content-details__bg-pattern"></div>
        </section>
    );
};

export default ToolsContentDetails;