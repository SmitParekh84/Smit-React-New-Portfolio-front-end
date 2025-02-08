import React, { useState } from "react";
import "./MetaChecker.css";  // Import the enhanced CSS file

const MetaChecker = (apiUrl) => {
    const [url, setUrl] = useState("");
    const [metaInfo, setMetaInfo] = useState(null);
    const [error, setError] = useState(null);
    
    // Handle URL input change
    // Handle URL input change
    const handleUrlChange = (e) => setUrl(e.target.value);

    // Validate and format the URL to ensure it starts with http:// or https://
    const formatUrl = (inputUrl) => {
        if (!inputUrl.startsWith("http://") && !inputUrl.startsWith("https://")) {
            return `http://${inputUrl}`;
        }
        return inputUrl;
    };
    // Check meta info when the button is clicked
    const handleCheckMeta = async () => {
        setError(null);
        setMetaInfo(null); // Reset previous data
        if (!url.trim()) {
            setError("Please enter a URL.");
            return;
        }
        const formattedUrl = formatUrl(url);
        // Define the local API URL (your backend server)
        const apiUrl = `${apiUrl}/api/meta-check?url=${encodeURIComponent(formattedUrl)}`;

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
        <section className="section">

            <div className="index-metadata__sticky index-metadata container">
                <header>
                    <h3>Metadata</h3>
                </header>

                <h4>URL</h4>
                <input
                    type="text"
                    value={url}
                    onChange={handleUrlChange}
                    placeholder="www.smitparekh.studio"
                    className="index-metadata__input"
                />
                <button className="index-metadata__button" onClick={handleCheckMeta}>Check Meta</button>

                {error && <p className="error-message">{error}</p>}

                {metaInfo && (
                    <>
                        <h4>Title</h4>
                        <textarea
                            className="index-metadata__text"
                            rows="2"
                            spellCheck="false"
                            value={metaInfo.title || ""}
                            readOnly
                        />

                        <h4>Description</h4>
                        <textarea
                            className="index-metadata__text"
                            rows="5"
                            value={metaInfo.description || ""}
                            readOnly
                        />

                        <h4>Keywords</h4>
                        <textarea
                            className="index-metadata__text"
                            rows="2"
                            value={metaInfo.keywords || ""}
                            readOnly
                        />

                        <h4>Image</h4>
                        <label
                            htmlFor="input"
                            className="index-metadata__image"
                            style={{ backgroundImage: `url(${metaInfo.image || ""})` }}
                        >
                            <div className="index-metadata__image-button">
                                <div className="index-metadata__image-button-text">Preview Image</div>
                            </div>
                        </label>

                        <h4>Open Graph URL</h4>
                        <textarea
                            className="index-metadata__text"
                            rows="2"
                            value={metaInfo.url || ""}
                            readOnly
                        />

                        <h4>Open Graph Site Name</h4>
                        <textarea
                            className="index-metadata__text"
                            rows="2"
                            value={metaInfo.siteName || ""}
                            readOnly
                        />



                        <h4>Favicon</h4>
                        <label
                            htmlFor="input"
                            className="index-metadata__image"
                            style={{ backgroundImage: `url(${metaInfo.favicon || ""})` }}
                        >
                            <div className="index-metadata__image-button">
                                <div className="index-metadata__image-button-text">Favicon</div>
                            </div>
                        </label>
                    </>
                )}


                {/* SEO Tools Links */}
                <h3 className="padding">Official Debuggers</h3>
                <ul className="index-nav__list index-nav__list--secondary">
                    <li><a href="https://developers.facebook.com/tools/debug/" target="_blank" className="index-nav__link">Facebook</a></li>
                    <li><a href="https://cards-dev.twitter.com/validator" target="_blank" className="index-nav__link">Twitter</a></li>
                    <li><a href="https://www.linkedin.com/post-inspector/inspect/" target="_blank" className="index-nav__link">LinkedIn</a></li>
                    <li><a href="https://search.google.com/structured-data/testing-tool/u/0/" target="_blank" className="index-nav__link">Structured Data</a></li>
                </ul>
            </div>



            <div className="index-preview__slide container">


                {/* Preview Cards */}
                {metaInfo && ["Google", "Twitter", "Facebook", "LinkedIn"].map(platform => (
                    <>  <header className="index-preview__header">
                        <h3>Preview</h3>
                    </header>
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
                        </div></>
                ))}
            </div>

        </section>
    );
};

export default MetaChecker;
