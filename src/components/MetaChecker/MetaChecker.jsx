import { useState, useEffect } from "react";
import "./MetaChecker.css";

const MetaChecker = ({ apiUrl, toolName }) => {
    const [url, setUrl] = useState("");
    const [metaInfo, setMetaInfo] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [copiedText, setCopiedText] = useState("");

    // Clear copied text notification after 2 seconds
    useEffect(() => {
        let timeout;
        if (copiedText) {
            timeout = setTimeout(() => {
                setCopiedText("");
            }, 2000);
        }
        return () => clearTimeout(timeout);
    }, [copiedText]);

    // Handle URL input change
    const handleUrlChange = (e) => {
        setUrl(e.target.value);
        // Clear previous results when changing URL
        if (e.target.value !== url) {
            setError(null);
            setMetaInfo(null);
        }
    };

    // Validate and format the URL
    const formatUrl = (inputUrl) => {
        if (!inputUrl.trim()) return "";
        
        try {
            // Try to create a URL object to validate
            new URL(inputUrl.includes('://') ? inputUrl : `https://${inputUrl}`);
            
            if (!inputUrl.startsWith("http://") && !inputUrl.startsWith("https://")) {
                return `https://${inputUrl}`;
            }
            return inputUrl;
        } catch (err) {
            setError("Please enter a valid URL");
            return "";
        }
    };

    // Copy text to clipboard
    const copyToClipboard = (text, label) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                setCopiedText(`${label} copied!`);
            })
            .catch(() => {
                setCopiedText("Failed to copy");
            });
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
        if (!formattedUrl) {
            setLoading(false);
            return;
        }
        
        const apiUrlMeta = `${apiUrl}/meta-check?url=${encodeURIComponent(formattedUrl)}`;

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
            <div className="index-metadata metachecker_container">
                <header>
                    <h3>{toolName || "Meta Tag Checker"}</h3>
                    <p>Analyze website metadata, Open Graph tags, and Twitter Cards to improve SEO and social sharing.</p>
                </header>

                <div className="index-metadata__content">
                    <h4>Enter Website URL</h4>
                    <div className="input-container">
                        <input
                            type="text"
                            value={url}
                            onChange={handleUrlChange}
                            onKeyPress={handleKeyPress}
                            placeholder="example.com or https://example.com"
                            className="index-metadata__input"
                            aria-label="Website URL"
                            autoComplete="url"
                        />
                        <button 
                            className="index-metadata__button" 
                            disabled={loading} 
                            onClick={handleCheckMeta}
                            aria-label="Check metadata"
                        >
                            {loading ? 'Analyzing...' : 'Analyze Metadata'}
                        </button>
                    </div>

                    {loading && (
                        <div className="loading-post" aria-live="polite" aria-busy="true">
                            <svg className="pl" width="240" height="240" viewBox="0 0 240 240">
                                <circle className="pl__ring pl__ring--a" cx="120" cy="120" r="105" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 660" strokeDashoffset="-330" strokeLinecap="round"></circle>
                                <circle className="pl__ring pl__ring--b" cx="120" cy="120" r="35" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 220" strokeDashoffset="-110" strokeLinecap="round"></circle>
                                <circle className="pl__ring pl__ring--c" cx="85" cy="120" r="70" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 440" strokeLinecap="round"></circle>
                                <circle className="pl__ring pl__ring--d" cx="155" cy="120" r="70" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 440" strokeLinecap="round"></circle>
                            </svg>
                            <span className="sr-only">Loading metadata information</span>
                        </div>
                    )}
                    
                    {error && (
                        <div className="error-message" role="alert">
                            <i className="uil uil-exclamation-triangle"></i> {error}
                        </div>
                    )}

                    {metaInfo && (
                        <div className="metadata-results" aria-live="polite">
                            <h4>Title <span className="index-metadata__count">({metaInfo.title ? metaInfo.title.length : 0} characters)</span></h4>
                            <div className="text-with-copy">
                                <textarea
                                    className="index-metadata__text"
                                    rows="2"
                                    spellCheck="false"
                                    value={metaInfo.title || ""}
                                    readOnly
                                    aria-label="Page title"
                                />
                                {metaInfo.title && (
                                    <button 
                                        className="copy-btn" 
                                        onClick={() => copyToClipboard(metaInfo.title, "Title")}
                                        aria-label="Copy title"
                                    >
                                        <i className="uil uil-copy"></i>
                                    </button>
                                )}
                            </div>

                            <h4>Description <span className="index-metadata__count">({metaInfo.description ? metaInfo.description.length : 0} characters)</span></h4>
                            <div className="text-with-copy">
                                <textarea
                                    className="index-metadata__text"
                                    rows="4"
                                    value={metaInfo.description || ""}
                                    readOnly
                                    aria-label="Page description"
                                />
                                {metaInfo.description && (
                                    <button 
                                        className="copy-btn" 
                                        onClick={() => copyToClipboard(metaInfo.description, "Description")}
                                        aria-label="Copy description"
                                    >
                                        <i className="uil uil-copy"></i>
                                    </button>
                                )}
                            </div>

                            <h4>Keywords</h4>
                            <div className="text-with-copy">
                                <textarea
                                    className="index-metadata__text"
                                    rows="2"
                                    value={metaInfo.keywords || ""}
                                    readOnly
                                    aria-label="Page keywords"
                                />
                                {metaInfo.keywords && (
                                    <button 
                                        className="copy-btn" 
                                        onClick={() => copyToClipboard(metaInfo.keywords, "Keywords")}
                                        aria-label="Copy keywords"
                                    >
                                        <i className="uil uil-copy"></i>
                                    </button>
                                )}
                            </div>

                            <h4>Main Image</h4>
                            <div
                                className="index-metadata__image"
                                style={{ backgroundImage: metaInfo.image ? `url(${metaInfo.image})` : 'none' }}
                            >
                                {!metaInfo.image && <span>No image found</span>}
                                {metaInfo.image && (
                                    <div className="index-metadata__image-button" onClick={() => window.open(metaInfo.image, '_blank')}>
                                        <div className="index-metadata__image-button-text">
                                            <i className="uil uil-image"></i> View Image
                                        </div>
                                    </div>
                                )}
                            </div>

                            <h4>Open Graph URL</h4>
                            <div className="text-with-copy">
                                <textarea
                                    className="index-metadata__text"
                                    rows="1"
                                    value={metaInfo.url || ""}
                                    readOnly
                                    aria-label="Open Graph URL"
                                />
                                {metaInfo.url && (
                                    <button 
                                        className="copy-btn" 
                                        onClick={() => copyToClipboard(metaInfo.url, "URL")}
                                        aria-label="Copy URL"
                                    >
                                        <i className="uil uil-copy"></i>
                                    </button>
                                )}
                            </div>

                            <h4>Open Graph Site Name</h4>
                            <div className="text-with-copy">
                                <textarea
                                    className="index-metadata__text"
                                    rows="1"
                                    value={metaInfo.siteName || ""}
                                    readOnly
                                    aria-label="Open Graph site name"
                                />
                                {metaInfo.siteName && (
                                    <button 
                                        className="copy-btn" 
                                        onClick={() => copyToClipboard(metaInfo.siteName, "Site name")}
                                        aria-label="Copy site name"
                                    >
                                        <i className="uil uil-copy"></i>
                                    </button>
                                )}
                            </div>

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
                                {metaInfo.favicon && (
                                    <div className="index-metadata__image-button" onClick={() => window.open(metaInfo.favicon, '_blank')}>
                                        <div className="index-metadata__image-button-text">
                                            <i className="uil uil-image"></i> View Favicon
                                        </div>
                                    </div>
                                )}
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

                    {/* SEO Recommendations section - added only if metadata is available */}
                    {metaInfo && (
                        <div className="metadata-recommendations">
                            <h3 className="padding">SEO Recommendations</h3>
                            
                            {/* Title recommendations */}
                            <div className={`recommendation-item ${metaInfo.title && metaInfo.title.length > 10 && metaInfo.title.length < 60 ? 'good' : 'warning'}`}>
                                <div className="recommendation-status">
                                    <i className={`uil ${metaInfo.title && metaInfo.title.length > 10 && metaInfo.title.length < 60 ? 'uil-check-circle' : 'uil-exclamation-triangle'}`}></i>
                                </div>
                                <div className="recommendation-content">
                                    <h5>Title Tag</h5>
                                    <p>
                                        {metaInfo.title && metaInfo.title.length > 10 && metaInfo.title.length < 60 
                                            ? 'Great! Your title is an optimal length (between 10-60 characters).' 
                                            : metaInfo.title && metaInfo.title.length > 60 
                                                ? 'Your title is too long. Consider shortening it to 60 characters or less.' 
                                                : 'Your title is too short or missing. Aim for 10-60 characters.'}
                                    </p>
                                </div>
                            </div>
                            
                            {/* Description recommendations */}
                            <div className={`recommendation-item ${metaInfo.description && metaInfo.description.length > 50 && metaInfo.description.length < 160 ? 'good' : 'warning'}`}>
                                <div className="recommendation-status">
                                    <i className={`uil ${metaInfo.description && metaInfo.description.length > 50 && metaInfo.description.length < 160 ? 'uil-check-circle' : 'uil-exclamation-triangle'}`}></i>
                                </div>
                                <div className="recommendation-content">
                                    <h5>Meta Description</h5>
                                    <p>
                                        {metaInfo.description && metaInfo.description.length > 50 && metaInfo.description.length < 160 
                                            ? 'Great! Your description is an optimal length (between 50-160 characters).' 
                                            : metaInfo.description && metaInfo.description.length > 160 
                                                ? 'Your description is too long. Consider shortening it to 160 characters or less.' 
                                                : 'Your description is too short or missing. Aim for 50-160 characters.'}
                                    </p>
                                </div>
                            </div>
                            
                            {/* Image recommendations */}
                            <div className={`recommendation-item ${metaInfo.image ? 'good' : 'error'}`}>
                                <div className="recommendation-status">
                                    <i className={`uil ${metaInfo.image ? 'uil-check-circle' : 'uil-times-circle'}`}></i>
                                </div>
                                <div className="recommendation-content">
                                    <h5>Open Graph Image</h5>
                                    <p>
                                        {metaInfo.image 
                                            ? 'Great! You have an Open Graph image which improves social sharing.' 
                                            : 'No Open Graph image found. Add an og:image tag to improve social sharing.'}
                                    </p>
                                </div>
                            </div>
                            
                            {/* Site Name recommendations */}
                            <div className={`recommendation-item ${metaInfo.siteName ? 'good' : 'warning'}`}>
                                <div className="recommendation-status">
                                    <i className={`uil ${metaInfo.siteName ? 'uil-check-circle' : 'uil-exclamation-triangle'}`}></i>
                                </div>
                                <div className="recommendation-content">
                                    <h5>Site Name</h5>
                                    <p>
                                        {metaInfo.siteName 
                                            ? 'Good! Your site name is defined which helps with brand recognition.' 
                                            : 'No site name found. Add an og:site_name tag to improve brand recognition.'}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
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
                                        loading="lazy"
                                        onClick={() => window.open(metaInfo.image, '_blank')}
                                        style={{ cursor: 'pointer' }}
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

            {/* Copied text notification */}
            {copiedText && (
                <div className="copy-notification" role="status" aria-live="polite">
                    <i className="uil uil-check"></i> {copiedText}
                </div>
            )}
        </section>
    );
};

export default MetaChecker;
