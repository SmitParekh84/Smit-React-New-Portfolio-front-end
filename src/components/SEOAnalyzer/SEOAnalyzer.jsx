import React, { useState } from "react";
import "./SEOAnalyzer.css";

const SEOAnalyzer = ({ apiUrl, toolName }) => {
    const [url, setUrl] = useState("");
    const [seoData, setSeoData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [activeTab, setActiveTab] = useState("overview");

    // Handle URL input change
    const handleUrlChange = (e) => setUrl(e.target.value);

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
        
        if (!url.trim()) {
            setError("Please enter a URL to analyze.");
            setLoading(false);
            return;
        }
        
        const formattedUrl = formatUrl(url);
        const apiEndpoint = `${apiUrl}/seo-analyze?url=${encodeURIComponent(formattedUrl)}`;

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
            }
        } catch (err) {
            setError(`Failed to analyze the URL: ${err.message || "Unknown error"}. Please try again.`);
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

    // Calculate overall SEO score
    const calculateScore = (data) => {
        if (!data) return 0;
        
        // Count total checks and passed checks
        const totalChecks = Object.keys(data.checks || {}).length;
        const passedChecks = Object.values(data.checks || {}).filter(check => check.status === "pass").length;
        
        return Math.round((passedChecks / totalChecks) * 100) || 0;
    };

    // Render SEO score gauge
    const renderScoreGauge = (score) => {
        const scoreColor = score >= 80 ? "green" : score >= 60 ? "orange" : "red";
        
        return (
            <div className="score-gauge">
                <div className="score-circle" style={{ 
                    background: `conic-gradient(${scoreColor} ${score}%, #eee ${score}% 100%)` 
                }}>
                    <div className="score-value">{score}%</div>
                </div>
                <div className={`score-label score-${scoreColor}`}>
                    {score >= 80 ? "Good" : score >= 60 ? "Average" : "Poor"}
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
                                                            ) : (
                                                                <i className="uil uil-times-circle"></i>
                                                            )}
                                                        </div>
                                                        <div className="check-details">
                                                            <h5>{check.name}</h5>
                                                            <p>{check.description}</p>
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
                                                                    <strong>{subKey}:</strong> {subValue.toString()}
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
