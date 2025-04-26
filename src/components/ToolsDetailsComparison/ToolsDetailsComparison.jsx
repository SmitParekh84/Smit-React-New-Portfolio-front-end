import React from 'react';
import './ToolsDetailsComparison.css';

const ToolsDetailsComparison = () => {
    const comparisonData = [
        {
            category: "Image Tools",
            features: [
                "Background removal",
                "Image compression",
                "Image conversion",
                "Privacy-focused processing",
                "No watermarks",
                "No registration required",
                "Advanced AI algorithms"
            ],
            comparisons: [
                {
                    name: "Our Tools",
                    ratings: [true, true, true, true, true, true, true],
                    highlight: true
                },
                {
                    name: "Premium Services",
                    ratings: [true, true, true, false, false, false, true],
                    highlight: false
                },
                {
                    name: "Other Free Tools",
                    ratings: [true, true, false, false, false, true, false],
                    highlight: false
                }
            ]
        },
        {
            category: "Content Tools",
            features: [
                "LinkedIn post generation",
                "SEO analysis",
                "Meta tag checking",
                "Social media optimization",
                "Unlimited free usage",
                "Professional-grade quality",
                "Regular updates"
            ],
            comparisons: [
                {
                    name: "Our Tools",
                    ratings: [true, true, true, true, true, true, true],
                    highlight: true
                },
                {
                    name: "Premium Services",
                    ratings: [true, true, true, true, false, true, true],
                    highlight: false
                },
                {
                    name: "Other Free Tools",
                    ratings: [false, true, true, false, true, false, false],
                    highlight: false
                }
            ]
        }
    ];

    return (
        <section className="tools-comparison section">
            <h2 className="section__title">How Our Tools Compare</h2>
            <span className="section__subtitle">See why professionals choose our solutions</span>

            <div className="container comparison-container">
                {comparisonData.map((category, index) => (
                    <div key={index} className="comparison-category">
                        <h3 className="comparison-category-title">{category.category}</h3>
                        
                        <div className="comparison-table-container">
                            <table className="comparison-table">
                                <thead>
                                    <tr>
                                        <th className="feature-column">Features</th>
                                        {category.comparisons.map((comparison, i) => (
                                            <th key={i} className={comparison.highlight ? 'highlighted-column' : ''}>
                                                {comparison.name}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {category.features.map((feature, featureIndex) => (
                                        <tr key={featureIndex}>
                                            <td className="feature-name">{feature}</td>
                                            {category.comparisons.map((comparison, compIndex) => (
                                                <td 
                                                    key={compIndex} 
                                                    className={comparison.highlight ? 'highlighted-column' : ''}
                                                >
                                                    {comparison.ratings[featureIndex] ? (
                                                        <i className="uil uil-check-circle feature-check"></i>
                                                    ) : (
                                                        <i className="uil uil-times-circle feature-x"></i>
                                                    )}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ))}

                <div className="comparison-summary">
                    <h3 className="comparison-summary-title">Why Our Tools Are Superior</h3>
                    <p className="comparison-summary-text">
                        Unlike many alternatives, our free tools provide enterprise-grade quality without the cost. 
                        We prioritize user privacy, seamless experience, and professional results while maintaining 
                        unlimited access without registration barriers. Our continuous development ensures you always 
                        have access to the latest features and improvements.
                    </p>
                    <div className="comparison-badges">
                        <div className="comparison-badge">
                            <i className="uil uil-shield-check"></i>
                            <span>100% Free</span>
                        </div>
                        <div className="comparison-badge">
                            <i className="uil uil-lock"></i>
                            <span>Privacy-First</span>
                        </div>
                        <div className="comparison-badge">
                            <i className="uil uil-bolt"></i>
                            <span>Fast Performance</span>
                        </div>
                        <div className="comparison-badge">
                            <i className="uil uil-award"></i>
                            <span>Professional Quality</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ToolsDetailsComparison;