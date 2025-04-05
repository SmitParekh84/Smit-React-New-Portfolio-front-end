import React, { useState } from "react";
import "./MetaChecker.css";

const MetaChecker = ({ apiUrl, toolName }) => {
    const [url, setUrl] = useState("");
    const [metaInfo, setMetaInfo] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    // Handle URL input change
    const handleUrlChange = (e) => setUrl(e.target.value);

    // Validate and format the URL
    const formatUrl = (inputUrl) => {
        if (!inputUrl.startsWith("http://") && !inputUrl.startsWith("https://")) {
            return `https://${inputUrl}`;
        }
        return inputUrl;
    };

    // Check meta info when the button is clicked
    const handleCheckMeta = async () => {
        setError(null);
        setMetaInfo(null);
        setLoading(true);
        
        if (!url.trim()) {
            setError("Please enter a URL to analyze.");
            setLoading(false);
            return;
        }
        
        const formattedUrl = formatUrl(url);
        const apiUrlMeta = `${apiUrl}/api/meta-check?url=${encodeURIComponent(formattedUrl)}`;

        try {
            const response = await fetch(apiUrlMeta);
            
            if (!response.ok) {
                throw new Error(`Server responded with status: ${response.status}`);
            }
            
            const data = await response.json();

            if (data.error) {
                setError(data.error);
            } else {
                setMetaInfo(data);
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
            handleCheckMeta();
        }
    };

    return (
        <section className="section">
            <div className="index-metadata container">
                <header>
                    <h3>{toolName || "Meta Tag Checker"}</h3>
                    <p>Analyze website metadata, Open Graph tags, and Twitter Cards to improve SEO and social sharing.</p>
                </header>

                <div className="index-metadata__content">
                    <h4>Enter Website URL</h4>
                    <input
                        type="text"
                        value={url}
                        onChange={handleUrlChange}
                        onKeyPress={handleKeyPress}
                        placeholder="example.com or https://example.com"
                        className="index-metadata__input"
                        aria-label="Website URL"
                    />
                    <button 
                        className="index-metadata__button" 
                        disabled={loading} 
                        onClick={handleCheckMeta}
                        aria-label="Check metadata"
                    >
                        {loading ? 'Analyzing...' : 'Analyze Metadata'}
                    </button>

                    {loading && (
                        <div className="loading-post">
                            <svg className="pl" width="240" height="240" viewBox="0 0 240 240">
                                <circle className="pl__ring pl__ring--a" cx="120" cy="120" r="105" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 660" strokeDashoffset="-330" strokeLinecap="round"></circle>
                                <circle className="pl__ring pl__ring--b" cx="120" cy="120" r="35" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 220" strokeDashoffset="-110" strokeLinecap="round"></circle>
                                <circle className="pl__ring pl__ring--c" cx="85" cy="120" r="70" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 440" strokeLinecap="round"></circle>
                                <circle className="pl__ring pl__ring--d" cx="155" cy="120" r="70" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 440" strokeLinecap="round"></circle>
                            </svg>
                        </div>
                    )}
                    
                    {error && <div className="error-message">{error}</div>}

                    {metaInfo && (
                        <div className="metadata-results">
                            <h4>Title <span className="index-metadata__count">({metaInfo.title ? metaInfo.title.length : 0} characters)</span></h4>
                            <textarea
                                className="index-metadata__text"
                                rows="2"
                                spellCheck="false"
                                value={metaInfo.title || ""}
                                readOnly
                                aria-label="Page title"
                            />

                            <h4>Description <span className="index-metadata__count">({metaInfo.description ? metaInfo.description.length : 0} characters)</span></h4>
                            <textarea
                                className="index-metadata__text"
                                rows="4"
                                value={metaInfo.description || ""}
                                readOnly
                                aria-label="Page description"
                            />

                            <h4>Keywords</h4>
                            <textarea
                                className="index-metadata__text"
                                rows="2"
                                value={metaInfo.keywords || ""}
                                readOnly
                                aria-label="Page keywords"
                            />

                            <h4>Main Image</h4>
                            <div
                                className="index-metadata__image"
                                style={{ backgroundImage: metaInfo.image ? `url(${metaInfo.image})` : 'none' }}
                            >
                                {!metaInfo.image && <span>No image found</span>}
                                <div className="index-metadata__image-button">
                                    <div className="index-metadata__image-button-text">Preview Image</div>
                                </div>
                            </div>

                            <h4>Open Graph URL</h4>
                            <textarea
                                className="index-metadata__text"
                                rows="1"
                                value={metaInfo.url || ""}
                                readOnly
                                aria-label="Open Graph URL"
                            />

                            <h4>Open Graph Site Name</h4>
                            <textarea
                                className="index-metadata__text"
                                rows="1"
                                value={metaInfo.siteName || ""}
                                readOnly
                                aria-label="Open Graph site name"
                            />

                            <h4>Favicon</h4>
                            <div
                                className="index-metadata__image"
                                style={{ 
                                    backgroundImage: metaInfo.favicon ? `url(${metaInfo.favicon})` : 'none',
                                    height: '150px',
                                    backgroundSize: 'contain',
                                    backgroundRepeat: 'no-repeat'
                                }}
                            >
                                {!metaInfo.favicon && <span>No favicon found</span>}
                                <div className="index-metadata__image-button">
                                    <div className="index-metadata__image-button-text">Favicon</div>
                                </div>
                            </div>
                        </div>
                    )}

                    <h3 className="padding">Official Debuggers</h3>
                    <p>Verify your metadata with these official debuggers:</p>
                    <ul className="index-nav__list">
                        <li><a href="https://developers.facebook.com/tools/debug/" target="_blank" rel="noopener noreferrer" className="index-nav__link">Facebook Debugger</a></li>
                        <li><a href="https://cards-dev.twitter.com/validator" target="_blank" rel="noopener noreferrer" className="index-nav__link">Twitter Card Validator</a></li>
                        <li><a href="https://www.linkedin.com/post-inspector/inspect/" target="_blank" rel="noopener noreferrer" className="index-nav__link">LinkedIn Inspector</a></li>
                        <li><a href="https://search.google.com/structured-data/testing-tool/u/0/" target="_blank" rel="noopener noreferrer" className="index-nav__link">Structured Data Testing</a></li>
                    </ul>
                </div>
            </div>

            {metaInfo && (
                <div className="index-preview__slide container">
                    <header className="index-preview__header">
                        <h3>Preview Cards</h3>
                        <p>See how your page appears on different platforms</p>
                    </header>

                    {["Google", "Twitter", "Facebook", "LinkedIn"].map(platform => (
                        <div key={platform} className="metadata-group__display">
                            <h4 className="metadata-group__title"><span>{platform}</span></h4>
                            <div className={`card-seo-${platform.toLowerCase()}`}>
                                {metaInfo.image && (
                                    <img
                                        src={metaInfo.image}
                                        alt={`${platform} preview`}
                                        className={`card-seo-${platform.toLowerCase()}__image`}
                                    />
                                )}
                                <span className={`card-seo-${platform.toLowerCase()}__title`}>
                                    {metaInfo.title || "No title found"}
                                </span>
                                <div className={`card-seo-${platform.toLowerCase()}__url`}>
                                    <span className={`card-seo-${platform.toLowerCase()}__url-title`}>
                                        {metaInfo.url || url}
                                    </span>
                                </div>
                                <span className={`card-seo-${platform.toLowerCase()}__description`}>
                                    {metaInfo.description || "No description found"}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default MetaChecker;
