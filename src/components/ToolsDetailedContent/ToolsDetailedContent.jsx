import { useEffect, useRef } from "react";
import "./ToolsDetailedContent.css";

const ToolsDetailedContent = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
        elements.forEach(el => observer.observe(el));

        return () => {
            elements.forEach(el => observer.unobserve(el));
        };
    }, []);

    return (
        <section className="tools-detailed-content section" ref={sectionRef}>
            <div className="container tools_detail_container">
                <h2 className="section__title animate-on-scroll">Understanding Our Free Tools</h2>
                <p className="section__subtitle animate-on-scroll">Comprehensive Guide to Our Professional Suite</p>

                <div className="detailed-content-container">
                    <div className="detailed-content-card animate-on-scroll">
                        <div className="card-header">
                            <i className="uil uil-image-v"></i>
                            <h3>Image Processing Tools</h3>
                        </div>
                        <div className="card-body">
                            <p>Our image processing tools are built with advanced AI algorithms to deliver professional results instantly. The Background Remover utilizes deep learning models to accurately detect and remove backgrounds from any image, while our Image Compressor uses smart compression algorithms that reduce file size without compromising visual quality.</p>
                            
                            <h4>How Our Background Remover Works</h4>
                            <p>Unlike other free tools that use basic algorithms, our Background Remover employs a state-of-the-art U2-Net deep learning model that has been trained on millions of images to recognize complex edges and fine details like hair strands and transparent objects. The tool processes your image in seconds and delivers a clean cutout with a transparent background that's ready to use in your designs.</p>
                            
                            <div className="feature-list">
                                <div className="feature-item">
                                    <i className="uil uil-check-circle"></i>
                                    <div>
                                        <h5>Preserves Fine Details</h5>
                                        <p>Accurately handles complex edges like hair, fur, and transparent objects</p>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <i className="uil uil-check-circle"></i>
                                    <div>
                                        <h5>Fast Processing</h5>
                                        <p>Removes backgrounds in seconds, even for high-resolution images</p>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <i className="uil uil-check-circle"></i>
                                    <div>
                                        <h5>No Watermarks</h5>
                                        <p>Download clean, professional-quality images without any branding or restrictions</p>
                                    </div>
                                </div>
                            </div>
                            
                            <h4>Image Compression Technology</h4>
                            <p>Our Image Compressor uses perceptual compression algorithms that analyze visual content to remove redundant data while preserving details that matter to the human eye. This intelligent approach allows for significantly smaller file sizes without noticeable quality loss.</p>
                        </div>
                    </div>

                    <div className="detailed-content-card animate-on-scroll">
                        <div className="card-header">
                            <i className="uil uil-linkedin"></i>
                            <h3>Content Generation Tools</h3>
                        </div>
                        <div className="card-body">
                            <p>Our content generation tools leverage the latest in natural language processing to help professionals create compelling content that engages their audience. The LinkedIn Post Generator in particular uses customized language models that understand professional communication styles and engagement patterns on the platform.</p>
                            
                            <h4>LinkedIn Post Generator: Behind the Scenes</h4>
                            <p>Our LinkedIn Post Generator is built on a fine-tuned language model that has analyzed thousands of high-performing LinkedIn posts to understand what drives engagement. The tool considers factors like post structure, emotional appeal, call-to-action phrasing, and content length to create posts that are optimized for the LinkedIn algorithm.</p>
                            
                            <div className="feature-list">
                                <div className="feature-item">
                                    <i className="uil uil-check-circle"></i>
                                    <div>
                                        <h5>Engagement Optimization</h5>
                                        <p>Creates content specifically designed to maximize likes, comments, and shares</p>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <i className="uil uil-check-circle"></i>
                                    <div>
                                        <h5>Professional Tone Control</h5>
                                        <p>Adjustable settings to match your personal brand voice and professional style</p>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <i className="uil uil-check-circle"></i>
                                    <div>
                                        <h5>Industry-Specific Content</h5>
                                        <p>Generates relevant content for various industries and professional contexts</p>
                                    </div>
                                </div>
                            </div>
                            
                            <h4>Content Strategy Integration</h4>
                            <p>Beyond just generating individual posts, our tool helps professionals build a consistent content strategy. By using the generated posts as a foundation, you can develop a cohesive voice across all your LinkedIn communications, enhancing your personal brand and professional reputation.</p>
                        </div>
                    </div>

                    <div className="detailed-content-card animate-on-scroll">
                        <div className="card-header">
                            <i className="uil uil-analytics"></i>
                            <h3>SEO & Analytics Tools</h3>
                        </div>
                        <div className="card-body">
                            <p>Our SEO tools provide comprehensive analysis of your website's search performance, helping you identify and fix issues that could be affecting your rankings. Our Meta Tag Checker and SEO Analyzer combine technical analysis with actionable recommendations based on current search engine best practices.</p>
                            
                            <h4>SEO Analyzer: Technical Foundation</h4>
                            <p>The SEO Analyzer performs over 35 different checks across multiple categories including on-page SEO, technical SEO, content quality, and performance metrics. It crawls your website similar to how search engines do, examining HTML structure, meta information, content quality, and page speed to provide a comprehensive analysis.</p>
                            
                            <div className="feature-list">
                                <div className="feature-item">
                                    <i className="uil uil-check-circle"></i>
                                    <div>
                                        <h5>Content Quality Assessment</h5>
                                        <p>Analyzes content length, keyword density, headings structure, and readability</p>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <i className="uil uil-check-circle"></i>
                                    <div>
                                        <h5>Technical SEO Evaluation</h5>
                                        <p>Checks robots.txt, XML sitemaps, canonical tags, and schema markup implementation</p>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <i className="uil uil-check-circle"></i>
                                    <div>
                                        <h5>Mobile Optimization Checks</h5>
                                        <p>Verifies mobile-friendliness, responsive design, and viewport configuration</p>
                                    </div>
                                </div>
                            </div>
                            
                            <h4>Actionable SEO Recommendations</h4>
                            <p>What sets our SEO tools apart is the detailed, prioritized recommendations they provide. Instead of just pointing out problems, our tools suggest specific solutions with step-by-step implementation guides. These recommendations are updated regularly to reflect changes in search engine algorithms and best practices.</p>
                        </div>
                    </div>

                    <div className="detailed-content-card animate-on-scroll">
                        <div className="card-header">
                            <i className="uil uil-qrcode-scan"></i>
                            <h3>Developer Tools</h3>
                        </div>
                        <div className="card-body">
                            <p>Our developer tools are designed to streamline common tasks in the web development workflow. From generating QR codes to compressing HTML and CSS, these tools help developers save time and improve their projects' performance and functionality.</p>
                            
                            <h4>QR Code Generator: Implementation Details</h4>
                            <p>Our QR Code Generator uses the latest QR code standards to create high-quality, scannable codes that work reliably across all devices. The tool supports multiple data types including URLs, text, contact information, and WiFi network details, making it versatile for various use cases.</p>
                            
                            <div className="feature-list">
                                <div className="feature-item">
                                    <i className="uil uil-check-circle"></i>
                                    <div>
                                        <h5>Error Correction</h5>
                                        <p>Implements Reed-Solomon error correction to ensure QR codes remain scannable even when partially damaged</p>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <i className="uil uil-check-circle"></i>
                                    <div>
                                        <h5>Customization Options</h5>
                                        <p>Adjust size, colors, and error correction levels to balance between data capacity and scan reliability</p>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <i className="uil uil-check-circle"></i>
                                    <div>
                                        <h5>Vector Format Support</h5>
                                        <p>Download QR codes in SVG format for scalable, print-ready graphics</p>
                                    </div>
                                </div>
                            </div>
                            
                            <h4>Integration with Marketing Strategies</h4>
                            <p>QR codes have become an essential bridge between physical and digital marketing. Our tool helps marketers create trackable QR codes that can be integrated with analytics platforms to measure engagement from print materials, product packaging, or physical advertisements.</p>
                        </div>
                    </div>
                </div>

                <div className="content-conclusion animate-on-scroll">
                    <h3>Built for Professional Needs</h3>
                    <p>All our tools are developed with professional use cases in mind, focusing on quality, reliability, and ease of use. Whether you're a marketer, designer, developer, or business owner, our free tools provide enterprise-grade functionality without the cost barrier.</p>
                    <p>We regularly update our tools based on user feedback and technological advancements to ensure they remain valuable resources for your professional toolkit. By offering these tools for free, we aim to democratize access to powerful digital solutions and help professionals at all levels succeed in their work.</p>
                </div>
            </div>
        </section>
    );
};

export default ToolsDetailedContent;