import React from 'react';
import SEO from '../components/SEO/SEO';
import './PrivacyPolicyPage.css';

const PrivacyPolicyPage = () => {
    return (
        <>
            <SEO 
                title="Privacy Policy | Smit Parekh"
                description="Read our privacy policy to understand how we collect, use, and protect your personal information when you use our tools and services."
                keywords="privacy policy, data protection, personal information, user privacy, cookie policy"
                canonicalUrl="https://www.smitparekh.studio/privacy-policy"
            />

            <section className="privacy-policy section">
                <div className="privacy-policy__container container">
                    <h1 className="section__title">Privacy Policy</h1>
                    <p className="section__subtitle">Last Updated: April 26, 2025</p>

                    <div className="privacy-policy__content">
                        <div className="privacy-policy__section">
                            <h2>1. Introduction</h2>
                            <p>Welcome to Smit Parekh's portfolio and tools website. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <a href="https://www.smitparekh.studio">www.smitparekh.studio</a>, including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the "Site").</p>
                            <p>Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the Site.</p>
                        </div>

                        <div className="privacy-policy__section">
                            <h2>2. Information We Collect</h2>
                            <p>We collect information that you provide directly to us when using our Services:</p>
                            <ul>
                                <li><strong>Personal Information:</strong> When you use our contact form, we collect your name, email address, and any other information you choose to provide.</li>
                                <li><strong>Tool Usage Data:</strong> When you use our free tools like Background Remover, LinkedIn Post Generator, or SEO Analyzer, we may collect the data you input for processing purposes.</li>
                                <li><strong>Feedback:</strong> If you provide us with feedback or contact us, we will collect your name and contact information, as well as any other content included in your message.</li>
                            </ul>
                            <p>We also automatically collect certain information when you visit, use, or navigate the Site:</p>
                            <ul>
                                <li><strong>Device Information:</strong> We collect device information such as your IP address, browser type, operating system, and other technical information.</li>
                                <li><strong>Usage Data:</strong> We collect information about how you interact with our Site, including the pages you visit, the time spent on those pages, and other diagnostic data.</li>
                                <li><strong>Cookies and Similar Technologies:</strong> We use cookies and similar tracking technologies to track activity on our Site and store certain information.</li>
                            </ul>
                        </div>

                        <div className="privacy-policy__section">
                            <h2>3. How We Use Your Information</h2>
                            <p>We use the information we collect in various ways, including to:</p>
                            <ul>
                                <li>Provide, operate, and maintain our website and tools</li>
                                <li>Improve, personalize, and expand our website functionality</li>
                                <li>Understand and analyze how you use our website</li>
                                <li>Develop new products, services, features, and functionality</li>
                                <li>Communicate with you, either directly or through one of our partners, for customer service, updates, and other information relating to the website</li>
                                <li>Process transactions (if applicable)</li>
                                <li>Send you emails regarding updates or informative communications about our services</li>
                                <li>Find and prevent fraud</li>
                            </ul>
                        </div>

                        <div className="privacy-policy__section">
                            <h2>4. Third-Party Services</h2>
                            <p>Our website may use third-party services that collect, monitor, and analyze user data to help us improve our services.</p>
                            <h3>4.1 Google Analytics</h3>
                            <p>We use Google Analytics to track and analyze website usage. Google Analytics may collect information such as your IP address, browser type, operating system, the referring web page, pages visited, location, your mobile carrier, device information, and search terms.</p>
                            <h3>4.2 Google AdSense</h3>
                            <p>We use Google AdSense to display advertising on our Site. Google AdSense uses cookies to serve ads based on a user's prior visits to our website or other websites. Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our Site and/or other websites on the Internet.</p>
                        </div>

                        <div className="privacy-policy__section">
                            <h2>5. Tool-Specific Data Processing</h2>
                            <h3>5.1 Background Remover</h3>
                            <p>When you use our Background Remover tool, we process your images through our servers. The images are not permanently stored on our servers and are deleted immediately after processing. We do not claim ownership of any images you upload.</p>
                            <h3>5.2 LinkedIn Post Generator</h3>
                            <p>The content you input to generate LinkedIn posts is processed through our servers but is not permanently stored or used for purposes other than generating the posts you requested.</p>
                            <h3>5.3 SEO Analyzer</h3>
                            <p>When you submit a URL for analysis, we collect and analyze data from that URL. We may temporarily store the analysis results but do not claim ownership of the analyzed content.</p>
                        </div>

                        <div className="privacy-policy__section">
                            <h2>6. Data Security</h2>
                            <p>We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.</p>
                        </div>

                        <div className="privacy-policy__section">
                            <h2>7. Your Privacy Rights</h2>
                            <p>Depending on your location, you may have certain rights regarding your personal information, such as:</p>
                            <ul>
                                <li>The right to access personal information we hold about you</li>
                                <li>The right to request correction of your personal information</li>
                                <li>The right to request deletion of your personal information</li>
                                <li>The right to withdraw consent</li>
                                <li>The right to object to processing of your personal information</li>
                            </ul>
                            <p>To exercise any of these rights, please contact us using the information provided in the "Contact Us" section below.</p>
                        </div>

                        <div className="privacy-policy__section">
                            <h2>8. Children's Privacy</h2>
                            <p>Our Site is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us at the address below.</p>
                        </div>

                        <div className="privacy-policy__section">
                            <h2>9. Changes to This Privacy Policy</h2>
                            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this page. You are advised to review this Privacy Policy periodically for any changes.</p>
                        </div>

                        <div className="privacy-policy__section">
                            <h2>10. Contact Us</h2>
                            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
                            <ul className="contact-details">
                                <li><strong>Email:</strong> <a href="mailto:smitparekh02@gmail.com">smitparekh02@gmail.com</a></li>
                                <li><strong>Contact Form:</strong> <a href="/contact">Contact Page</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PrivacyPolicyPage;