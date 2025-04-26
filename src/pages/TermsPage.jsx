import React from 'react';
import SEO from '../components/SEO/SEO';
import './TermsPage.css';

const TermsPage = () => {
    return (
        <>
            <SEO 
                title="Terms and Conditions | Smit Parekh"
                description="Read our terms and conditions to understand the rules, guidelines, and agreements that govern the use of our website, tools, and services."
                keywords="terms and conditions, terms of service, user agreement, legal terms, service terms"
                canonicalUrl="https://www.smitparekh.studio/terms"
            />

            <section className="terms-page section">
                <div className="terms-page__container container">
                    <h1 className="section__title">Terms and Conditions</h1>
                    <p className="section__subtitle">Last Updated: April 26, 2025</p>

                    <div className="terms-page__content">
                        <div className="terms-page__section">
                            <h2>1. Introduction</h2>
                            <p>Welcome to Smit Parekh's portfolio and tools website. These Terms and Conditions ("Terms", "Terms and Conditions") govern your use of our website located at <a href="https://www.smitparekh.studio">www.smitparekh.studio</a> (the "Service") operated by Smit Parekh ("us", "we", or "our").</p>
                            <p>By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.</p>
                        </div>

                        <div className="terms-page__section">
                            <h2>2. Use of the Service</h2>
                            <h3>2.1 User Responsibilities</h3>
                            <p>When using our Service, you agree to:</p>
                            <ul>
                                <li>Provide accurate, current, and complete information when using our tools and services</li>
                                <li>Use the Service in a manner consistent with any and all applicable laws and regulations</li>
                                <li>Not use the Service for any illegal or unauthorized purpose</li>
                                <li>Not attempt to harm, disrupt, or interfere with the Service or its underlying technology</li>
                                <li>Not copy, modify, distribute, sell, or lease any part of our Service without explicit permission</li>
                            </ul>

                            <h3>2.2 Free Tools</h3>
                            <p>Our website offers several free tools, including but not limited to Background Remover, LinkedIn Post Generator, QR Code Generator, and SEO Analyzer. By using these tools, you agree to:</p>
                            <ul>
                                <li>Use them for personal and lawful purposes only</li>
                                <li>Not overload or flood the system with excessive requests</li>
                                <li>Not attempt to bypass any usage limits or restrictions</li>
                                <li>Acknowledge that tools are provided "as is" without any guarantees of continuous availability</li>
                            </ul>
                        </div>

                        <div className="terms-page__section">
                            <h2>3. Intellectual Property</h2>
                            <h3>3.1 Our Content</h3>
                            <p>The Service and its original content (excluding content provided by users), features, and functionality are and will remain the exclusive property of Smit Parekh and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Smit Parekh.</p>
                            
                            <h3>3.2 User Content</h3>
                            <p>When you upload content to our Service for processing (such as images for the Background Remover or URLs for the SEO Analyzer), you retain all rights to your content. However, by uploading, you grant us a non-exclusive, royalty-free license to use, process, and store your content for the purpose of providing the Service to you.</p>
                            
                            <h3>3.3 Portfolio Projects</h3>
                            <p>The portfolio projects displayed on this website are the intellectual property of Smit Parekh unless otherwise stated. These projects are presented for informational and demonstration purposes only. Unauthorized use, reproduction, or distribution of these projects without explicit permission is prohibited.</p>
                        </div>

                        <div className="terms-page__section">
                            <h2>4. Limitation of Liability</h2>
                            <p>In no event shall Smit Parekh, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:</p>
                            <ul>
                                <li>Your access to or use of or inability to access or use the Service</li>
                                <li>Any conduct or content of any third party on the Service</li>
                                <li>Any content obtained from the Service</li>
                                <li>Unauthorized access, use, or alteration of your transmissions or content</li>
                            </ul>
                            <p>Our tools are provided on an "as is" and "as available" basis without any warranties, either express or implied, including but not limited to, the implied warranties of merchantability, fitness for a particular purpose, or non-infringement.</p>
                        </div>

                        <div className="terms-page__section">
                            <h2>5. Third-Party Services</h2>
                            <p>Our Service may contain links to third-party websites or services that are not owned or controlled by Smit Parekh. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. We do not warrant the offerings of any of these entities/individuals or their websites.</p>
                            <p>You acknowledge and agree that we shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such third-party websites or services.</p>
                        </div>

                        <div className="terms-page__section">
                            <h2>6. User Data</h2>
                            <p>Our Privacy Policy governs the collection, use, and disclosure of your information when you use the Service. By using our Service, you agree to the collection and use of information in accordance with our Privacy Policy.</p>
                            <p>For more details about how we handle user data, please refer to our <a href="/privacy-policy">Privacy Policy</a>.</p>
                        </div>

                        <div className="terms-page__section">
                            <h2>7. Termination</h2>
                            <p>We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
                            <p>All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.</p>
                        </div>

                        <div className="terms-page__section">
                            <h2>8. Changes to Terms</h2>
                            <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will make reasonable efforts to provide notice of any significant changes, but you are responsible for regularly reviewing these Terms. Your continued use of the Service after changes constitutes your acceptance of the updated Terms.</p>
                        </div>

                        <div className="terms-page__section">
                            <h2>9. Governing Law</h2>
                            <p>These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.</p>
                            <p>Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.</p>
                        </div>

                        <div className="terms-page__section">
                            <h2>10. Contact Us</h2>
                            <p>If you have any questions about these Terms and Conditions, please contact us at:</p>
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

export default TermsPage;