import "./LinkedInDownloaderComponents.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faDownload, 
    faBolt, 
    faShieldAlt, 
    faMobileAlt, 
    faGift, 
    faFileVideo,
    faVideo,
    faChartLine,
    faGraduationCap,
    faArchive,
    faCheck,
    faTimes,
    faLightbulb,
    faEye,
    faFolder,
    faShareAlt,
    faRocket,
    faFire,
    faBullseye,
    faArrowRight,
    faSearch,
    faCompress,
    faExternalLinkAlt
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

// Benefits Section
export const BenefitsSection = () => {
    return (
        <section className="linkedin-benefits-section">
            <div className="container">
                <div className="section-header">
                    <h2>Why Use Our LinkedIn Media Downloader?</h2>
                    <p>Save LinkedIn videos and photos with zero hassle and maximum quality</p>
                </div>
                
                <div className="benefits-grid">
                    <div className="benefit-card">
                        <div className="benefit-icon">
                            <FontAwesomeIcon icon={faDownload} />
                        </div>
                        <h3>High-Quality Downloads</h3>
                        <p>Download LinkedIn videos in original quality without any compression or watermarks</p>
                    </div>
                    
                    <div className="benefit-card">
                        <div className="benefit-icon">
                            <FontAwesomeIcon icon={faBolt} />
                        </div>
                        <h3>Lightning Fast</h3>
                        <p>Get your LinkedIn media downloads in seconds with our optimized processing technology</p>
                    </div>
                    
                    <div className="benefit-card">
                        <div className="benefit-icon">
                            <FontAwesomeIcon icon={faShieldAlt}  />
                        </div>
                        <h3>100% Safe & Secure</h3>
                        <p>Your privacy is protected. We don&apos;t store any downloaded content or personal information</p>
                    </div>
                    
                    <div className="benefit-card">
                        <div className="benefit-icon">
                            <FontAwesomeIcon icon={faMobileAlt} />
                        </div>
                        <h3>Mobile Friendly</h3>
                        <p>Download LinkedIn media from any device - desktop, tablet, or smartphone</p>
                    </div>
                    
                    <div className="benefit-card">
                        <div className="benefit-icon">
                            <FontAwesomeIcon icon={faGift} />
                        </div>
                        <h3>Completely Free</h3>
                        <p>No registration, no fees, no limits. Download as many LinkedIn videos as you need</p>
                    </div>
                    
                    <div className="benefit-card">
                        <div className="benefit-icon">
                            <FontAwesomeIcon icon={faFileVideo} />
                        </div>
                        <h3>Multiple Formats</h3>
                        <p>Support for various LinkedIn media formats including MP4 videos and high-res images</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

// How It Works Section
export const HowItWorksSection = () => {
    return (
        <section className="how-it-works-section">
            <div className="container">
                <div className="section-header">
                    <h2>How to Download LinkedIn Videos & Photos</h2>
                    <p>Follow these simple steps to save any LinkedIn media content</p>
                </div>
                
                <div className="steps-container">
                    <div className="step">
                        <div className="step-number">1</div>
                        <div className="step-content">
                            <h3>Copy LinkedIn URL</h3>
                            <p>Go to the LinkedIn post containing the video or photo you want to download. Copy the post URL from your browser&apos;s address bar.</p>
                        </div>
                    </div>
                    
                    <div className="step">
                        <div className="step-number">2</div>
                        <div className="step-content">
                            <h3>Paste & Select Type</h3>
                            <p>Paste the LinkedIn URL into our tool above and select whether you want to download a video or photo.</p>
                        </div>
                    </div>
                    
                    <div className="step">
                        <div className="step-number">3</div>
                        <div className="step-content">
                            <h3>Download Instantly</h3>
                            <p>Click the download button and get your LinkedIn media file saved to your device in seconds.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Use Cases Section
export const UseCasesSection = () => {
    return (
        <section className="use-cases-section">
            <div className="container">
                <div className="section-header">
                    <h2>Perfect for Content Creators & Professionals</h2>
                    <p>Discover how our LinkedIn media downloader can enhance your workflow</p>
                </div>
                
                <div className="use-cases-grid">
                    <div className="use-case-card">
                        <div className="use-case-icon">
                            <FontAwesomeIcon icon={faVideo} />
                        </div>
                        <h3>Content Creation</h3>
                        <p>Save inspiring LinkedIn videos for reference, study successful content strategies, and create better posts.</p>
                    </div>
                    
                    <div className="use-case-card">
                        <div className="use-case-icon">
                            <FontAwesomeIcon icon={faChartLine} />
                        </div>
                        <h3>Market Research</h3>
                        <p>Analyze competitor content, download industry-specific videos, and stay updated with market trends.</p>
                    </div>
                    
                    <div className="use-case-card">
                        <div className="use-case-icon">
                            <FontAwesomeIcon icon={faGraduationCap} />
                        </div>
                        <h3>Educational Content</h3>
                        <p>Save educational LinkedIn videos for offline learning, training materials, and professional development.</p>
                    </div>
                    
                    <div className="use-case-card">
                        <div className="use-case-icon">
                            <FontAwesomeIcon icon={faArchive} />
                        </div>
                        <h3>Content Archiving</h3>
                        <p>Backup your own LinkedIn content, create portfolio collections, and preserve important business videos.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Features Comparison Section
export const FeaturesSection = () => {
    return (
        <section className="features-section">
            <div className="container">
                <div className="section-header">
                    <h2>Why Choose Our LinkedIn Downloader?</h2>
                    <p>Compare our features with other LinkedIn downloading solutions</p>
                </div>
                
                {/* 👇 Scroll wrapper */}
                <div className="table-scroll-wrapper">
                    <div className="comparison-table">
                        <div className="table-header">
                            <div className="feature-column">Features</div>
                            <div className="our-tool-column">Our Tool</div>
                            <div className="others-column">Other Tools</div>
                        </div>
                        
                        <div className="table-row">
                            <div className="feature-name">Free to Use</div>
                            <div className="our-feature">
                                <FontAwesomeIcon icon={faCheck} />
                            </div>
                            <div className="other-feature">
                                <FontAwesomeIcon icon={faTimes} />
                            </div>
                        </div>

                        <div className="table-row">
                            <div className="feature-name">No Registration Required</div>
                            <div className="our-feature">
                                <FontAwesomeIcon icon={faCheck} />
                            </div>
                            <div className="other-feature">
                                <FontAwesomeIcon icon={faTimes} />
                            </div>
                        </div>

                        <div className="table-row">
                            <div className="feature-name">High Quality Downloads</div>
                            <div className="our-feature">
                                <FontAwesomeIcon icon={faCheck} />
                            </div>
                            <div className="other-feature">
                                <FontAwesomeIcon icon={faCheck} />
                            </div>
                        </div>

                        <div className="table-row">
                            <div className="feature-name">No Watermarks</div>
                            <div className="our-feature">
                                <FontAwesomeIcon icon={faCheck} />
                            </div>
                            <div className="other-feature">
                                <FontAwesomeIcon icon={faTimes} />
                            </div>
                        </div>

                        <div className="table-row">
                            <div className="feature-name">Mobile Responsive</div>
                            <div className="our-feature">
                                <FontAwesomeIcon icon={faCheck} />
                            </div>
                            <div className="other-feature">
                                <FontAwesomeIcon icon={faCheck} />
                            </div>
                        </div>

                        <div className="table-row">
                            <div className="feature-name">Download Speed</div>
                            <div className="our-feature">Ultra Fast</div>
                            <div className="other-feature">Slow</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


// Tips and Best Practices Section
export const TipsSection = () => {
    return (
        <section className="tips-section">
            <div className="container">
                <div className="section-header">
                    <h2>Pro Tips for LinkedIn Media Downloads</h2>
                    <p>Maximize your LinkedIn content strategy with these expert tips</p>
                </div>
                
                <div className="tips-grid">
                    <div className="tip-card">
                        <div className="tip-icon">
                            <FontAwesomeIcon icon={faLightbulb} />
                        </div>
                        <h3>Check Copyright</h3>
                        <p>Always respect copyright laws and only download content for personal use or with proper permissions.</p>
                    </div>
                    
                    <div className="tip-card">
                        <div className="tip-icon">
                            <FontAwesomeIcon icon={faEye} />
                        </div>
                        <h3>Analyze Successful Content</h3>
                        <p>Download high-performing LinkedIn videos to study their structure, messaging, and engagement strategies.</p>
                    </div>
                    
                    <div className="tip-card">
                        <div className="tip-icon">
                            <FontAwesomeIcon icon={faFolder} />
                        </div>
                        <h3>Organize Your Downloads</h3>
                        <p>Create folders to categorize downloaded content by industry, topic, or content type for easy reference.</p>
                    </div>
                    
                    <div className="tip-card">
                        <div className="tip-icon">
                            <FontAwesomeIcon icon={faShareAlt} />
                        </div>
                        <h3>Credit Original Creators</h3>
                        <p>When sharing insights from downloaded content, always credit the original LinkedIn creator.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

// CTA Section for Viral LinkedIn Post Generator
export const CTASection = () => {
    return (
        <section className="linkedin-cta-section">
            <div className="container">
                <div className="cta-content">
                    <div className="cta-text">
                        <h2>Ready to Create Viral LinkedIn Content?</h2>
                        <p>Now that you can download inspiring LinkedIn content, take it to the next level with our AI-powered Viral LinkedIn Post Generator. Create engaging posts that get maximum reach and engagement.</p>
                        
                        <div className="cta-features">
                            <div className="cta-feature">
                                <FontAwesomeIcon icon={faRocket} />
                                <span>AI-Powered Content Generation</span>
                            </div>
                            <div className="cta-feature">
                                <FontAwesomeIcon icon={faFire} />
                                <span>Viral Content Templates</span>
                            </div>
                            <div className="cta-feature">
                                <FontAwesomeIcon icon={faBullseye} />
                                <span>Engagement Optimization</span>
                            </div>www.smitparekh.co.in
                        </div>
                        
                        <a 
                            href="https://www.smitparekh.co.in/free-tools/viral-linkedin-post-generator" 
                            className="cta-button"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Try Viral Post Generator Free
                            <FontAwesomeIcon icon={faArrowRight} />
                        </a>
                    </div>
                    
                    <div className="cta-visual">
                        <div className="cta-badge">
                            <FontAwesomeIcon icon={faLinkedin} />
                            <span>Generate Viral Content</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Technical Details Section
export const TechnicalSection = () => {
    return (
        <section className="technical-section">
            <div className="container">
                <div className="section-header">
                    <h2>Technical Information</h2>
                    <p>Everything you need to know about our LinkedIn media downloading process</p>
                </div>
                
                <div className="technical-grid">
                    <div className="technical-card">
                        <h3>Supported Formats</h3>
                        <ul>
                            <li><strong>Videos:</strong> MP4, WebM</li>
                            <li><strong>Images:</strong> JPG, PNG, WebP</li>
                            <li><strong>Quality:</strong> Original resolution maintained</li>
                            <li><strong>Size:</strong> No file size restrictions</li>
                        </ul>
                    </div>
                    
                    <div className="technical-card">
                        <h3>Privacy & Security</h3>
                        <ul>
                            <li>No content stored on our servers</li>
                            <li>Direct download to your device</li>
                            <li>SSL encrypted connections</li>
                            <li>No personal data collection</li>
                        </ul>
                    </div>
                    
                    <div className="technical-card">
                        <h3>Browser Compatibility</h3>
                        <ul>
                            <li>Chrome, Firefox, Safari, Edge</li>
                            <li>Mobile browsers supported</li>
                            <li>No browser extensions required</li>
                            <li>Works on all operating systems</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Related Tools Section
export const RelatedToolsSection = () => {
    return (
        <section className="related-tools-section">
            <div className="container">
                <div className="section-header">
                    <h2>More Free LinkedIn Tools</h2>
                    <p>Boost your LinkedIn presence with our complete toolkit</p>
                </div>
                
                <div className="tools-grid">
                    <div className="tool-card">
                        <div className="tool-icon">
                            <FontAwesomeIcon icon={faRocket} />
                        </div>www.smitparekh.co.in
                        <h3>Viral LinkedIn Post Generator</h3>
                        <p>Create engaging LinkedIn posts that get maximum reach and engagement with AI-powered content generation.</p>
                        <a 
                            href="https://www.smitparekh.co.in/free-tools/viral-linkedin-post-generator" 
                            className="tool-link"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Try Now <FontAwesomeIcon icon={faExternalLinkAlt} />
                        </a>
                    </div>
                    
                    <div className="tool-card">
                        <div className="tool-icon">
                            <FontAwesomeIcon icon={faSearch} />
                        </div>www.smitparekh.co.in
                        <h3>SEO Meta Tag Checker</h3>
                        <p>Analyze and optimize your website&apos;s meta tags for better search engine visibility and social media sharing.</p>
                        <a 
                            href="https://www.smitparekh.co.in/meta-checker" 
                            className="tool-link"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Check Meta Tags <FontAwesomeIcon icon={faExternalLinkAlt} />
                        </a>
                    </div>
                    
                    <div className="tool-card">
                        <div className="tool-icon">
                            <FontAwesomeIcon icon={faCompress} />
                        </div>www.smitparekh.co.in
                        <h3>Image Compressor</h3>
                        <p>Compress your LinkedIn images without losing quality. Perfect for faster loading times and better engagement.</p>
                        <a 
                            href="https://www.smitparekh.co.in/free-tools/image-compressor" 
                            className="tool-link"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Compress Images <FontAwesomeIcon icon={faExternalLinkAlt} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
