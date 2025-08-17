import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./LinkedInMediaDownloader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faLink, faSpinner, faCheckCircle, faImage, faVideo } from "@fortawesome/free-solid-svg-icons";

const LinkedInMediaDownloader = () => {
    const [url, setUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [downloaded, setDownloaded] = useState(false);
    const [mediaType, setMediaType] = useState("video"); // 'video' or 'photo'
    const apiUrl = import.meta.env.VITE_API_URL;

    const handleUrlChange = (e) => {
        setUrl(e.target.value);
        // Reset results when changing the URL
        setResult(null);
        setDownloaded(false);
    };

    const handleMediaTypeChange = (type) => {
        setMediaType(type);
        // Reset results when changing media type
        setResult(null);
        setDownloaded(false);
    };

    const validateUrl = (url) => {
        // Check if it's a LinkedIn URL
        if (!/linkedin\.com/i.test(url)) {
            return "Please enter a valid LinkedIn URL";
        }
        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Reset previous results
        setResult(null);
        setDownloaded(false);
        
        // Validate URL
        const error = validateUrl(url);
        if (error) {
            toast.error(error);
            return;
        }

        setLoading(true);

        try {
            const response = await fetch(`${apiUrl}/linkedin-media-download`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ url, mediaType }),
            });

            const data = await response.json();

            if (!response.ok || data.error) {
                // Show error from API response if available
                throw new Error(data.error || data.message || "Failed to download media");
            }
            
            if (data.success && data.media && data.media.length > 0) {
                // Format the result object to be used in the component
                const formattedResult = {
                    downloadUrl: data.media[0],
                    previewUrl: data.media[0],
                    mediaType: data.mediaType,
                    filename: `linkedin-${data.mediaType}-${Date.now()}.${data.mediaType === 'video' ? 'mp4' : 'jpg'}`
                };
                setResult(formattedResult);
                toast.success(`LinkedIn ${data.mediaType} found! Ready to download.`);
            } else {
                toast.error(`No ${mediaType} found at this URL.`);
            }
        } catch (error) {
            console.error("Error downloading media:", error);
            toast.error(error.message || `Failed to download ${mediaType}. Please check the URL and try again.`);
        } finally {
            setLoading(false);
        }
    };

    const handleDownload = () => {
        if (!result || !result.downloadUrl) {
            toast.error("No media available to download");
            return;
        }

        // Create a temporary link element and trigger download
        const link = document.createElement("a");
        link.href = result.downloadUrl;
        link.download = result.filename || `linkedin-${mediaType}-${Date.now()}.${mediaType === 'video' ? 'mp4' : 'jpg'}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        toast.success("Download started!");
        setDownloaded(true);
    };

    return (
        <section className="linkedin-media-downloader-section container">
            <ToastContainer position="top-center" autoClose={3000} />
            
            <div className="linkedin-media-downloader">
                <div className="linkedin-media-header">
                    <h2>LinkedIn Media Downloader</h2>
                    <p className="linkedin-media-subtitle">Download videos and photos from LinkedIn posts</p>
                </div>

                <div className="media-type-selector">
                    <button 
                        className={`media-type-btn ${mediaType === 'video' ? 'active' : ''}`} 
                        onClick={() => handleMediaTypeChange('video')}
                    >
                        <FontAwesomeIcon icon={faVideo} />
                        <span>Video</span>
                    </button>
                    <button 
                        className={`media-type-btn ${mediaType === 'photo' ? 'active' : ''}`} 
                        onClick={() => handleMediaTypeChange('photo')}
                    >
                        <FontAwesomeIcon icon={faImage} />
                        <span>Photo</span>
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="linkedin-media-form">
                    <div className="input-group">
                        <label htmlFor="linkedinUrl">
                            <FontAwesomeIcon icon={faLink} className="form-icon" />
                            LinkedIn {mediaType === 'video' ? 'Video' : 'Photo'} URL
                        </label>
                        <input
                            type="url"
                            id="linkedinUrl"
                            placeholder={`Paste LinkedIn ${mediaType} post URL here`}
                            value={url}
                            onChange={handleUrlChange}
                            required
                            className="linkedin-media-input"
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="download-btn primary-btn"
                        disabled={loading || url.trim() === ''}
                    >
                        {loading ? (
                            <>
                                <FontAwesomeIcon icon={faSpinner} spin />
                                <span>Processing...</span>
                            </>
                        ) : (
                            <>
                                <FontAwesomeIcon icon={faDownload} />
                                <span>Find {mediaType === 'video' ? 'Video' : 'Photo'}</span>
                            </>
                        )}
                    </button>
                </form>

                {result && (
                    <div className="result-container">
                        <h3>Media Found</h3>
                        <div className="media-preview">
                            {mediaType === 'video' && (
                                <video 
                                    src={result.previewUrl || result.downloadUrl} 
                                    controls
                                    className="preview-media"
                                />
                            )}
                            {mediaType === 'photo' && (
                                <img 
                                    src={result.previewUrl || result.downloadUrl} 
                                    alt="LinkedIn photo" 
                                    className="preview-media"
                                />
                            )}
                        </div>
                        <div className="media-info">
                            {result.title && <p className="media-title">{result.title}</p>}
                            {result.author && <p className="media-author">By: {result.author}</p>}
                        </div>
                        <button 
                            className="download-btn secondary-btn"
                            onClick={handleDownload}
                        >
                            {downloaded ? (
                                <>
                                    <FontAwesomeIcon icon={faCheckCircle} />
                                    <span>Downloaded</span>
                                </>
                            ) : (
                                <>
                                    <FontAwesomeIcon icon={faDownload} />
                                    <span>Download {mediaType === 'video' ? 'Video' : 'Photo'}</span>
                                </>
                            )}
                        </button>
                    </div>
                )}

                <div className="instructions">
                    <h3>How to use:</h3>
                    <ol>
                        <li>Select media type (video or photo)</li>
                        <li>Copy the URL of a LinkedIn post containing a {mediaType}</li>
                        <li>Paste the URL in the input field above</li>
                        <li>Click "Find {mediaType === 'video' ? 'Video' : 'Photo'}" button</li>
                        <li>Click "Download" when the {mediaType} is found</li>
                    </ol>
                </div>

                <div className="instructions">
                    <h3>Why Download LinkedIn Media?</h3>
                    <p>LinkedIn has become a powerful platform for professional content sharing, with millions of videos and images posted daily. Our LinkedIn media downloader helps you save valuable content for:</p>
                    <ul>
                        <li><strong>Personal Archives:</strong> Keep important educational or inspirational content for offline viewing</li>
                        <li><strong>Content Research:</strong> Study successful LinkedIn posts and media strategies</li>
                        <li><strong>Educational Purpose:</strong> Save tutorials, webinars, and educational videos shared by industry experts</li>
                        <li><strong>Backup Content:</strong> Preserve your own LinkedIn posts before they get lost in the timeline</li>
                        <li><strong>Offline Viewing:</strong> Watch LinkedIn videos without internet connection during travel</li>
                    </ul>
                </div>

                <div className="instructions">
                    <h3>Features of Our LinkedIn Downloader:</h3>
                    <ul>
                        <li><strong>High-Quality Downloads:</strong> Get videos in original resolution and photos in full quality</li>
                        <li><strong>No Registration Required:</strong> Start downloading immediately without creating accounts</li>
                        <li><strong>Multiple Formats Support:</strong> Download LinkedIn videos in MP4 format and photos in JPG/PNG</li>
                        <li><strong>Fast Processing:</strong> Quick extraction and download of LinkedIn media content</li>
                        <li><strong>Mobile Friendly:</strong> Works perfectly on smartphones, tablets, and desktop computers</li>
                        <li><strong>Safe & Secure:</strong> No malware, no ads, just a clean downloading experience</li>
                        <li><strong>Free Forever:</strong> Completely free tool with no hidden costs or premium features</li>
                    </ul>
                </div>

                <div className="instructions">
                    <h3>Supported LinkedIn Content Types:</h3>
                    <p>Our downloader works with various types of LinkedIn media content:</p>
                    <ul>
                        <li><strong>LinkedIn Videos:</strong> Native videos uploaded directly to LinkedIn posts</li>
                        <li><strong>LinkedIn Photos:</strong> Images shared in LinkedIn posts and articles</li>
                        <li><strong>Carousel Images:</strong> Multiple photos from LinkedIn carousel posts</li>
                        <li><strong>Profile Pictures:</strong> Download LinkedIn profile photos in high resolution</li>
                        <li><strong>Company Page Media:</strong> Images and videos from LinkedIn company pages</li>
                        <li><strong>LinkedIn Stories:</strong> Save content from LinkedIn story posts</li>
                    </ul>
                </div>

                <div className="instructions">
                    <h3>Tips for Best Results:</h3>
                    <ul>
                        <li><strong>Use Complete URLs:</strong> Copy the full LinkedIn post URL including all parameters</li>
                        <li><strong>Check Post Visibility:</strong> Ensure the LinkedIn post is publicly accessible</li>
                        <li><strong>Try Different Formats:</strong> Some content may be available in multiple resolutions</li>
                        <li><strong>Clear Browser Cache:</strong> If download fails, clear cache and try again</li>
                        <li><strong>Stable Internet:</strong> Use a stable internet connection for faster processing</li>
                        <li><strong>Update Browser:</strong> Use the latest browser version for best compatibility</li>
                    </ul>
                </div>

                <div className="notes">
                    <p><strong>Note:</strong> This tool only works with public LinkedIn posts. Private posts cannot be accessed.</p>
                    <p>Please use downloaded media in accordance with LinkedIn&rsquo;s terms of service and respect copyright ownership.</p>
                    <p><strong>Privacy &amp; Security:</strong> We don&rsquo;t store any of your data or downloaded content. All processing happens in real-time, and no personal information is collected or saved on our servers.</p>
                </div>
            </div>
        </section>
    );
};

export default LinkedInMediaDownloader;
