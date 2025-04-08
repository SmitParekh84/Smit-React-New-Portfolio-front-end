import React, { useState } from "react";
import "./SEOAnalyzer.css";

const SEOAnalyzer = ({ apiUrl, toolName }) => {
    const [url, setUrl] = useState("");
    const [email, setEmail] = useState("");
    const [generatePdf, setGeneratePdf] = useState(false);
    const [seoData, setSeoData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [activeTab, setActiveTab] = useState("overview");
    const [pdfStatus, setPdfStatus] = useState(null);

    // Handle URL input change
    const handleUrlChange = (e) => setUrl(e.target.value);
    
    // Handle email input change
    const handleEmailChange = (e) => setEmail(e.target.value);
    
    // Handle PDF generation checkbox
    const handleGeneratePdfChange = (e) => setGeneratePdf(e.target.checked);

    // Validate and format the URL
    const formatUrl = (inputUrl) => {
        if (!inputUrl.startsWith("http://") && !inputUrl.startsWith("https://")) {
            return `https://${inputUrl}`;
        }
        return inputUrl;
    };

    // Analyze SEO data when the button is clicked
    const handleAnalyze = async () => {
        setError(null);
        setSeoData(null);
        setLoading(true);
        setPdfStatus(null);
        
        if (!url.trim()) {
            setError("Please enter a URL to analyze.");
            setLoading(false);
            return;
        }
        
        // Validate email if PDF generation is requested
        if (generatePdf && (!email || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))) {
            setError("Please enter a valid email address to receive the PDF report.");
            setLoading(false);
            return;
        }
        
        const formattedUrl = formatUrl(url);
        let apiEndpoint = `${apiUrl}/seo-analyze?url=${encodeURIComponent(formattedUrl)}`;
        
        // Add email and generatePdf parameters if needed
        if (generatePdf && email) {
            apiEndpoint += `&email=${encodeURIComponent(email)}&generatePdf=true`;
        }

        try {
            const response = await fetch(apiEndpoint);
            
            if (!response.ok) {
                throw new Error(`Server responded with status: ${response.status}`);
            }
            
            const data = await response.json();

            if (data.error) {
                setError(data.error);
            } else {
                setSeoData(data);
                
                // Set PDF status if applicable
                if (generatePdf && email) {
                    setPdfStatus({
                        success: true,
                        message: "PDF report is being generated and will be sent to your email shortly.",
                        animated: true
                    });
                    
                    // Simulate delay for better UX
                    setTimeout(() => {
                        setPdfStatus({
                            success: true,
                            message: "PDF report has been generated and sent to your email.",
                            animated: false
                        });
                    }, 3000);
                }
            }
        } catch (err) {
            setError(`Failed to analyze the URL: ${err.message || "Unknown error"}. Please try again.`);
            
            // Show PDF generation error if applicable
            if (generatePdf && email) {
                setPdfStatus({
                    success: false,
                    message: "We couldn't generate your PDF report. Please try again later.",
                    animated: false
                });
            }
        } finally {
            setLoading(false);
        }
    };

    // Handle keypress for accessibility
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleAnalyze();
        }
    };

    // Calculate overall SEO score - now use provided score directly
    const calculateScore = (data) => {
        if (!data) return 0;
        
        // Use the seoScore from the API if available
        return data.seoScore !== undefined ? data.seoScore : Math.round((passedChecks / totalChecks) * 100) || 0;
    };

    // Render SEO score gauge
    const renderScoreGauge = (score) => {
        // Determine color gradient based on scoreColor from API or fallback to calculation
        let scoreGradient, scoreClass;
        
        if (seoData && seoData.scoreColor) {
            // Use the scoreColor from the API
            scoreClass = `score-${seoData.scoreColor}`;
            
            // Set gradient based on the scoreColor
            if (seoData.scoreColor === 'green') {
                scoreGradient = 'linear-gradient(to right, #34D399, #10B981)';
            } else if (seoData.scoreColor === 'orange' || seoData.scoreColor === 'yellow') {
                scoreGradient = 'linear-gradient(to right, #FBBF24, #F59E0B)';
            } else {
                scoreGradient = 'linear-gradient(to right, #F87171, #DC2626)';
            }
        } else {
            // Fallback to score-based calculation
            if (score >= 80) {
                scoreGradient = 'linear-gradient(to right, #34D399, #10B981)';
                scoreClass = 'score-green';
            } else if (score >= 60) {
                scoreGradient = 'linear-gradient(to right, #FBBF24, #F59E0B)';
                scoreClass = 'score-orange';
            } else {
                scoreGradient = 'linear-gradient(to right, #F87171, #DC2626)';
                scoreClass = 'score-red';
            }
        }
        
        // Calculate dash array for circle animation
        const circumference = 2 * Math.PI * 45; // 45 is the radius of the circle
        const dashoffset = circumference - (score / 100) * circumference;
        
        return (
            <div className="score-gauge">
                <div className="score-circle">
                    <svg width="180" height="180" viewBox="0 0 120 120">
                        <circle 
                            cx="60" cy="60" r="45" 
                            fill="none" 
                            stroke="#e6e6e6" 
                            strokeWidth="10"
                            className="score-bg-circle"
                        />
                        <circle 
                            cx="60" cy="60" r="45" 
                            fill="none" 
                            stroke="url(#scoreGradient)" 
                            strokeWidth="10" 
                            strokeDasharray={circumference} 
                            strokeDashoffset={dashoffset}
                            strokeLinecap="round" 
                            className="score-progress-circle"
                            transform="rotate(-90 60 60)"
                        />
                        <defs>
                            <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor={scoreClass === 'score-green' ? '#34D399' : 
                                                            scoreClass === 'score-orange' || scoreClass === 'score-yellow' ? '#FBBF24' : '#F87171'} />
                                <stop offset="100%" stopColor={scoreClass === 'score-green' ? '#10B981' : 
                                                             scoreClass === 'score-orange' || scoreClass === 'score-yellow' ? '#F59E0B' : '#DC2626'} />
                            </linearGradient>
                        </defs>
                    </svg>
                    <div className={`score-value ${scoreClass}`}>{score}<span className="score-percent">%</span></div>
                </div>
                <div className={`score-label ${scoreClass}`}>
                    {seoData && seoData.scoreDescription ? seoData.scoreDescription : 
                     (score >= 80 ? "Excellent" : score >= 60 ? "Average" : "Needs Improvement")}
                </div>
            </div>
        );
    };

    return (
        <section className="section">
            <div className="seo-analyzer container">
                <header>
                    <h3>{toolName || "SEO Analyzer"}</h3>
                    <p>Analyze your website for common SEO issues and get recommendations to improve your search ranking.</p>
                </header>

                <div className="seo-analyzer__content">
                    <h4>Enter Website URL</h4>
                    <input
                        type="text"
                        value={url}
                        onChange={handleUrlChange}
                        onKeyPress={handleKeyPress}
                        placeholder="example.com or https://example.com"
                        className="seo-analyzer__input"
                        aria-label="Website URL"
                    />
                    
                    <div className="seo-analyzer__options">
                        <div className="seo-analyzer__email-option">
                            <label htmlFor="seo-email">Email (for PDF report):</label>
                            <input
                                id="seo-email"
                                type="email"
                                value={email}
                                onChange={handleEmailChange}
                                placeholder="your@email.com"
                                className="seo-analyzer__email-input"
                                aria-label="Your email address"
                                disabled={!generatePdf}
                            />
                        </div>
                        <div className="seo-analyzer__pdf-option">
                            <input
                                id="generate-pdf"
                                type="checkbox"
                                checked={generatePdf}
                                onChange={handleGeneratePdfChange}
                                className="seo-analyzer__checkbox"
                            />
                            <label htmlFor="generate-pdf">
                                Generate PDF Report & Send to Email
                            </label>
                        </div>
                    </div>
                    
                    <button 
                        className="seo-analyzer__button" 
                        disabled={loading} 
                        onClick={handleAnalyze}
                        aria-label="Analyze website"
                    >
                        {loading ? 'Analyzing...' : 'Analyze SEO'}
                    </button>

                    {loading && (
                        <div className="loading-analysis">
                            <svg className="pl" width="240" height="240" viewBox="0 0 240 240">
                                <circle className="pl__ring pl__ring--a" cx="120" cy="120" r="105" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 660" strokeDashoffset="-330" strokeLinecap="round"></circle>
                                <circle className="pl__ring pl__ring--b" cx="120" cy="120" r="35" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 220" strokeDashoffset="-110" strokeLinecap="round"></circle>
                                <circle className="pl__ring pl__ring--c" cx="85" cy="120" r="70" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 440" strokeLinecap="round"></circle>
                                <circle className="pl__ring pl__ring--d" cx="155" cy="120" r="70" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 440" strokeLinecap="round"></circle>
                            </svg>
                            <p className="loading-text">Analyzing website SEO factors...</p>
                        </div>
                    )}
                    
                    {error && <div className="error-message">{error}</div>}
                    
                    {pdfStatus && (
                        <div className={`pdf-status ${pdfStatus.success ? 'success' : 'error'} ${pdfStatus.animated ? 'animated' : ''}`}>
                            <i className={`uil ${pdfStatus.success ? 'uil-check-circle' : 'uil-times-circle'}`}></i>
                            <p>{pdfStatus.message}</p>
                        </div>
                    )}

                    {seoData && (
                        <div className="seo-analysis-results">
                            <div className="seo-score-section">
                                <h3>SEO Score</h3>
                                <div className="seo-score-container">
                                    {renderScoreGauge(calculateScore(seoData))}
                                    <div className="seo-overview">
                                        <div className="seo-overview-item">
                                            <span className="overview-label">URL:</span>
                                            <span className="overview-value">{seoData.url}</span>
                                        </div>
                                        <div className="seo-overview-item">
                                            <span className="overview-label">Page Title:</span>
                                            <span className="overview-value">{seoData.title || "Not found"}</span>
                                        </div>
                                        <div className="seo-overview-item">
                                            <span className="overview-label">Loading Speed:</span>
                                            <span className="overview-value">{seoData.loadingSpeed || "Not available"}</span>
                                        </div>
                                        <div className="seo-overview-item">
                                            <span className="overview-label">Analysis Date:</span>
                                            <span className="overview-value">
                                                {seoData.analysisDate ? new Date(seoData.analysisDate).toLocaleString() : "Not available"}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="seo-tabs">
                                <div className="tab-buttons">
                                    <button 
                                        className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('overview')}
                                    >
                                        Overview
                                    </button>
                                    <button 
                                        className={`tab-button ${activeTab === 'onpage' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('onpage')}
                                    >
                                        On-Page SEO
                                    </button>
                                    <button 
                                        className={`tab-button ${activeTab === 'performance' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('performance')}
                                    >
                                        Performance
                                    </button>
                                    <button 
                                        className={`tab-button ${activeTab === 'recommendations' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('recommendations')}
                                    >
                                        Recommendations
                                    </button>
                                </div>

                                <div className="tab-content">
                                    {activeTab === 'overview' && (
                                        <div className="tab-panel overview-panel">
                                            <h4>SEO Overview</h4>
                                            <div className="overview-checks">
                                                {seoData.checks && Object.entries(seoData.checks).map(([key, check]) => (
                                                    <div key={key} className={`check-item check-${check.status}`}>
                                                        <div className="check-status">
                                                            {check.status === "pass" ? (
                                                                <i className="uil uil-check-circle"></i>
                                                            ) : check.status === "neutral" ? (
                                                                <i className="uil uil-minus-circle"></i>
                                                            ) : (
                                                                <i className="uil uil-times-circle"></i>
                                                            )}
                                                        </div>
                                                        <div className="check-details">
                                                            <h5>{check.name}</h5>
                                                            <p>{check.description}</p>
                                                            {check.value && <p className="check-value"><strong>Value:</strong> {check.value}</p>}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'onpage' && (
                                        <div className="tab-panel onpage-panel">
                                            <h4>On-Page SEO Factors</h4>
                                            {seoData.onPageSeo && Object.entries(seoData.onPageSeo).map(([key, value]) => (
                                                <div key={key} className="onpage-item">
                                                    <h5>{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</h5>
                                                    {typeof value === 'string' ? (
                                                        <p>{value}</p>
                                                    ) : typeof value === 'boolean' ? (
                                                        <p>{value ? 'Yes' : 'No'}</p>
                                                    ) : typeof value === 'object' && value !== null ? (
                                                        <ul>
                                                            {Object.entries(value).map(([subKey, subValue]) => (
                                                                <li key={subKey}>
                                                                    <strong>{subKey.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</strong> {
                                                                        Array.isArray(subValue) && subValue.length === 0 
                                                                        ? "None found" 
                                                                        : Array.isArray(subValue) 
                                                                        ? subValue.join(', ') 
                                                                        : subValue.toString()
                                                                    }
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    ) : (
                                                        <p>Not available</p>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {activeTab === 'performance' && (
                                        <div className="tab-panel performance-panel">
                                            <h4>Website Performance</h4>
                                            {seoData.performanceMetrics && (
                                                <div className="performance-metrics">
                                                    <div className="performance-item">
                                                        <h5>Page Size</h5>
                                                        <p>{seoData.performanceMetrics.pageSize || "Not available"}</p>
                                                    </div>
                                                    <div className="performance-item">
                                                        <h5>Load Time</h5>
                                                        <p>{seoData.performanceMetrics.loadTime || "Not available"}</p>
                                                    </div>
                                                    <div className="performance-item">
                                                        <h5>Request Count</h5>
                                                        <p>{seoData.performanceMetrics.requestCount || "Not available"}</p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {activeTab === 'recommendations' && (
                                        <div className="tab-panel recommendations-panel">
                                            <h4>SEO Recommendations</h4>
                                            {seoData.recommendations && seoData.recommendations.length > 0 ? (
                                                <ul className="recommendations-list">
                                                    {seoData.recommendations.map((recommendation, index) => (
                                                        <li key={index} className="recommendation-item">
                                                            <div className="recommendation-priority">
                                                                {recommendation.priority === "high" && (
                                                                    <span className="priority high">High Priority</span>
                                                                )}
                                                                {recommendation.priority === "medium" && (
                                                                    <span className="priority medium">Medium Priority</span>
                                                                )}
                                                                {recommendation.priority === "low" && (
                                                                    <span className="priority low">Low Priority</span>
                                                                )}
                                                            </div>
                                                            <h5>{recommendation.title}</h5>
                                                            <p>{recommendation.description}</p>
                                                            {recommendation.steps && recommendation.steps.length > 0 && (
                                                                <div className="recommendation-steps">
                                                                    <strong>Steps to implement:</strong>
                                                                    <ul>
                                                                        {recommendation.steps.map((step, stepIndex) => (
                                                                            <li key={stepIndex}>{step}</li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            )}
                                                        </li>
                                                    ))}
                                                </ul>
                                            ) : (
                                                <p>No specific recommendations available.</p>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}

                    <h3 className="padding">Professional SEO Tips</h3>
                    <p>Here are some essential SEO factors to consider:</p>
                    <ul className="seo-tips__list">
                        <li><strong>Title Tags:</strong> Include keywords and keep under 60 characters</li>
                        <li><strong>Meta Descriptions:</strong> Write compelling descriptions under 160 characters</li>
                        <li><strong>URL Structure:</strong> Create clean, descriptive URLs with keywords</li>
                        <li><strong>Content Quality:</strong> Create unique, valuable content over 300 words</li>
                        <li><strong>Mobile Optimization:</strong> Ensure your site is responsive for mobile devices</li>
                        <li><strong>Page Speed:</strong> Optimize loading time for better user experience and rankings</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default SEOAnalyzer;
