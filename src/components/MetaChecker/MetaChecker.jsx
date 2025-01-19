import React, { useState } from "react";
import "./MetaChecker.css";  // Import the enhanced CSS file

const MetaChecker = () => {
    const [url, setUrl] = useState("");
    const [metaInfo, setMetaInfo] = useState(null);
    const [error, setError] = useState(null);

    // Handle URL input change
    const handleUrlChange = (e) => setUrl(e.target.value);

    // Check meta info when the button is clicked
    const handleCheckMeta = async () => {
        setError(null);
        setMetaInfo(null); // Reset previous data
        if (!url) {
            setError("Please enter a URL.");
            return;
        }

        // Define the local API URL (your backend server)
        const apiUrl = `http://localhost:5000/api/meta-check?url=${encodeURIComponent(url)}`;

        try {
            // Fetch meta information from the backend
            const response = await fetch(apiUrl);
            const data = await response.json();

            if (data.error) {
                setError(data.error);
            } else {
                setMetaInfo(data);
            }
        } catch (err) {
            setError("Failed to fetch meta information. Please try again.");
        }
    };

    return (
        <main className="index-main">
            <section className="index-metadata section">
                <div className="index-metadata__sticky">
                    <header>
                        <h3>Metadata</h3>
                    </header>
                    <section className="index-metadata__content">
                        <h4>URL</h4>
                        <input
                            type="text"
                            value={url}
                            onChange={handleUrlChange}
                            placeholder="Enter website URL"
                            className="index-metadata__input"
                        />
                        <button className="index-metadata__button" onClick={handleCheckMeta}>Check Meta</button>

                        {error && <p className="error-message">{error}</p>}

                        {metaInfo && (
                            <>
                                <h4>Image <span className="index-metadata__count">Recommend 1200×628</span></h4>
                                <label htmlFor="input" className="index-metadata__image" style={{ backgroundImage: `url(${metaInfo.image || ""})` }}>
                                    <div className="index-metadata__image-button">
                                        <div className="index-metadata__image-button-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" viewBox="0 0 22 24">
                                                <g fill="none" fillRule="evenodd" stroke="#2A81FB" strokeWidth="4" transform="translate(2 3)">
                                                    <polyline points="0 9 9 0 18 9"></polyline>
                                                    <path d="M9,0 L9,21"></path>
                                                </g>
                                            </svg>
                                        </div>
                                        <div className="index-metadata__image-button-text">Drag & Drop or Click</div>
                                    </div>
                                </label>
                                <input id="input" type="file" style={{ display: "none" }} />
                                <h4>Title <span className="index-metadata__count js-title-count">{metaInfo?.title?.length || 0}</span></h4>
                                <textarea
                                    className="index-metadata__text"
                                    rows="2"
                                    spellCheck="false"
                                    value={metaInfo?.title || ""}
                                    readOnly
                                />
                                <h4>Description <span className="index-metadata__count js-description-count">{metaInfo?.description?.length || 0}</span></h4>
                                <textarea
                                    className="index-metadata__text"
                                    rows="5"
                                    value={metaInfo?.description || ""}
                                    readOnly
                                />
                                <a className="index-preview__button">
                                    <svg width="20" height="15" viewBox="0 0 20 15" xmlns="http://www.w3.org/2000/svg">
                                        <g stroke="#FFF" strokeWidth="2" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5.744 2.857L1 7.732l4.696 4.953M14.304 2.857L19 7.81l-4.696 4.952M11.957 1L8 14"></path>
                                        </g>
                                    </svg>
                                    <span>Get Code</span>
                                </a>
                            </>
                        )}
                    </section>

                    {/* SEO Tools Links */}
                    <h3 className="padding">Official Debuggers</h3>
                    <ul className="index-nav__list index-nav__list--secondary">
                        <li><a href="https://developers.facebook.com/tools/debug/" target="_blank" className="index-nav__link">Facebook</a></li>
                        <li><a href="https://cards-dev.twitter.com/validator" target="_blank" className="index-nav__link">Twitter</a></li>
                        <li><a href="https://www.linkedin.com/post-inspector/inspect/" target="_blank" className="index-nav__link">LinkedIn</a></li>
                        <li><a href="https://search.google.com/structured-data/testing-tool/u/0/" target="_blank" className="index-nav__link">Structured Data</a></li>
                    </ul>
                </div>
            </section>

            <section className="index-preview">
                <div className="index-preview__slide">
                    <header className="index-preview__header">
                        <h3>Preview</h3>
                    </header>

                    {/* Preview Cards */}
                    {metaInfo && ["Google", "Twitter", "Facebook", "LinkedIn"].map(platform => (
                        <div key={platform} id={platform.toLowerCase()} className="metadata-group__display is-active">
                            <h4 className="metadata-group__title"><span>{platform}</span></h4>
                            <div className={`card-seo-${platform.toLowerCase()}`}>
                                <span className={`card-seo-${platform.toLowerCase()}__title js-preview-title`}>
                                    {metaInfo.title}
                                </span>
                                <div className={`card-seo-${platform.toLowerCase()}__url`}>
                                    <span className={`card-seo-${platform.toLowerCase()}__url-title js-preview-domain`}>
                                        {metaInfo.url}
                                    </span>
                                    <span className="card-seo-facebook__url-arrow"></span>
                                </div>
                                <span className={`card-seo-${platform.toLowerCase()}__description js-preview-description`}>
                                    {metaInfo.description}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default MetaChecker;
