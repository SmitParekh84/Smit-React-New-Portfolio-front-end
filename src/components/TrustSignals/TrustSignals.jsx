import React, { useEffect, useRef, useState } from 'react';
import './TrustSignals.css';

const TrustSignals = ({ 
    title = 'Trusted by Thousands',
    subtitle = 'Join professionals worldwide who rely on our free tools for daily productivity',
    companies = ['Google', 'Microsoft', 'Amazon', 'Shopify', 'Adobe'],
    animated = true,
    darkMode = false,
    className = ''
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setIsVisible(true);
                observer.disconnect();
            }
        }, { threshold: 0.1 });
        
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className={`trust-signals-section ${darkMode ? 'dark-mode' : ''} ${className}`}>
            <div className="container">
                <div className={`trust-signals__wrapper ${animated && isVisible ? 'animate' : ''}`}>
                    <div className="trust-signals__header">
                        <h2 className="trust-signals__title">{title}</h2>
                        <p className="trust-signals__subtitle">{subtitle}</p>
                    </div>
                    
                    <div className="trust-signals__companies">
                        {companies.map((company, index) => (
                            <div 
                                key={index} 
                                className="trust-signals__company"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="company-logo">
                                    <i className={getCompanyIcon(company)}></i>
                                </div>
                                <span className="company-name">{company}</span>
                            </div>
                        ))}
                    </div>
                    
                    <div className="trust-signals__metrics">
                        <div className="trust-metric">
                            <div className="trust-metric__value">10,000+</div>
                            <div className="trust-metric__label">Daily Users</div>
                        </div>
                        <div className="trust-metric">
                            <div className="trust-metric__value">4.9/5</div>
                            <div className="trust-metric__label">Average Rating</div>
                        </div>
                        <div className="trust-metric">
                            <div className="trust-metric__value">50+</div>
                            <div className="trust-metric__label">Countries</div>
                        </div>
                    </div>
                    
                    <div className="trust-signals__testimonial">
                        <div className="testimonial-quote">
                            <i className="uil uil-quote-left"></i>
                            <p>These tools have revolutionized my workflow and saved me countless hours. I'm more productive than ever!</p>
                            <i className="uil uil-quote-right"></i>
                        </div>
                        <div className="testimonial-author">
                            <div className="author-avatar">
                                <span>JS</span>
                            </div>
                            <div className="author-info">
                                <h4>John Smith</h4>
                                <p>Marketing Director</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Background elements */}
            <div className="trust-signals__bg-circle"></div>
            <div className="trust-signals__bg-dots"></div>
        </section>
    );
};

// Helper function to get company-specific icons
const getCompanyIcon = (company) => {
    const companyIcons = {
        'Google': 'uil uil-google',
        'Microsoft': 'uil uil-microsoft',
        'Amazon': 'uil uil-amazon',
        'Shopify': 'uil uil-shopping-cart',
        'Adobe': 'uil uil-adobe',
        'Facebook': 'uil uil-facebook',
        'Twitter': 'uil uil-twitter',
        'LinkedIn': 'uil uil-linkedin',
        'Apple': 'uil uil-apple'
    };
    
    return companyIcons[company] || 'uil uil-building';
};

export default TrustSignals;