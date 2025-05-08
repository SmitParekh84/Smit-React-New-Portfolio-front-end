import React from "react";
import AboutTools from "../components/AboutTools";
import SEO from "../components/SEO/SEO";
import { toolsData } from "../data/toolsData";
import { getFullUrl, prepareStructuredData } from "../utils/SocialMetaHelper";
import { InArticleAd, HorizontalBannerAd } from "../components/AdSense";
import "../styles/ToolsAboutPage.css";

const ToolsAboutPage = () => {
    // Count tools by category
    const toolCategories = {};
    toolsData.forEach(tool => {
        if (!toolCategories[tool.category]) {
            toolCategories[tool.category] = 0;
        }
        toolCategories[tool.category]++;
    });

    // Structured data for tools collection
    const toolsCollectionSchema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "About Our Free Professional Tools | Smit Parekh",
        "description": "Learn about our collection of free professional tools designed to enhance productivity and streamline workflows for businesses and content creators.",
        "url": "/free-tools/about",
        "mainEntity": {
            "@type": "ItemList",
            "itemListElement": Object.keys(toolCategories).map((category, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": category,
                "description": `${category} - ${toolCategories[category]} tools available`,
                "url": "/free-tools"
            }))
        },
        "author": {
            "@type": "Person",
            "name": "Smit Parekh",
            "url": "/portfolio"
        }
    };

    // Breadcrumb structured data
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": getFullUrl("/")
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Free Tools",
                "item": getFullUrl("/free-tools")
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "About Our Tools",
                "item": getFullUrl("/free-tools/about")
            }
        ]
    };
    
    // Process all structured data to ensure proper URLs
    const processedCollectionSchema = prepareStructuredData(toolsCollectionSchema);
    const processedBreadcrumbSchema = prepareStructuredData(breadcrumbSchema);
    
    const pageUrl = getFullUrl("/free-tools/about");
    const imageUrl = getFullUrl("/images/services-illustration.svg");

    return (
        <>
            <SEO 
                title="About Our Free Professional Tools | Smit Parekh"
                description="Learn about our collection of free professional tools designed to enhance productivity and streamline workflows for businesses and content creators."
                keywords="free tools, professional tools, productivity tools, content creation tools, image tools, SEO tools, developer tools, Smit Parekh tools"
                canonicalUrl={pageUrl}
                ogType="website"
                ogImage={imageUrl}
                ogTitle="About Our Free Tools Collection | Smit Parekh"
                ogDescription="Discover our suite of free professional tools designed to help businesses and content creators work more efficiently."
                twitterImage={imageUrl}
                twitterTitle="About Our Free Tools | Smit Parekh"
                twitterDescription="Learn about our free professional tools that help streamline workflows and enhance productivity."
                structuredData={[processedCollectionSchema, processedBreadcrumbSchema]}
                lastUpdated={new Date().toISOString()}
                language="en-US"
                author="Smit Parekh"
                alternateLanguages={[
                    { lang: "en", url: pageUrl }
                ]}
            />

            <AboutTools />

            {/* Banner ad after the intro section */}
            <div className="ad-container top-banner-ad">
                <HorizontalBannerAd adSlot="1234567890" />
            </div>

            <section className="tools-mission section">
                <div className="container">
                    <h2 className="section__title">Our Mission</h2>
                    <span className="section__subtitle">Why We Created These Tools</span>
                    
                    <div className="tools-mission__content">
                        <p className="tools-mission__description">
                            Our mission is to democratize access to professional-grade tools that enhance productivity 
                            and creativity. We believe that powerful tools should be accessible to everyone, 
                            regardless of budget or technical expertise. Each tool is built with a focus on 
                            user experience, performance, and practical application for real-world needs.
                        </p>
                        
                        <div className="tools-mission__data">
                            <div className="tools-mission__box">
                                <h3 className="tools-mission__subtitle">Free Access</h3>
                                <p className="tools-mission__text">
                                    All tools are completely free to use with no hidden costs or premium features. 
                                    We're committed to maintaining this free model to ensure accessibility for students, 
                                    small businesses, and professionals at all levels.
                                </p>
                            </div>
                            
                            <div className="tools-mission__box">
                                <h3 className="tools-mission__subtitle">Professional Quality</h3>
                                <p className="tools-mission__text">
                                    Built with the same attention to detail and quality as enterprise software.
                                    We use industry-standard algorithms and techniques to ensure our tools 
                                    deliver reliable, consistent, and professional-grade results.
                                </p>
                            </div>
                            
                            <div className="tools-mission__box">
                                <h3 className="tools-mission__subtitle">Constant Improvement</h3>
                                <p className="tools-mission__text">
                                    We regularly update and enhance our tools based on user feedback and technological advances.
                                    Our development roadmap is guided by community needs and emerging technologies 
                                    to ensure our tools remain relevant and effective.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="tools-detailed-info section">
                <div className="container">
                    <h2 className="section__title">The Quality Standard</h2>
                    <span className="section__subtitle">How We Build Our Tools</span>
                    
                    <div className="tools-detailed__content">
                        <div className="tools-detailed__text">
                            <p>
                                Each tool in our collection undergoes a rigorous development process to ensure it meets 
                                the highest standards of quality and performance. We begin with extensive research to 
                                understand user needs and industry best practices, followed by careful planning and 
                                architecture design to create tools that are both powerful and user-friendly.
                            </p>
                            
                            <p>
                                Our development team uses cutting-edge technologies and frameworks to build tools 
                                that work efficiently across devices and browsers. Before release, each tool undergoes 
                                comprehensive testing for functionality, security, and performance to ensure a 
                                seamless user experience.
                            </p>
                            
                            <p>
                                Beyond the initial launch, we continuously monitor tool performance and gather user 
                                feedback to identify opportunities for improvement. This iterative approach allows 
                                us to refine features, fix issues, and add enhancements that make our tools even more 
                                valuable to our users.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* In-article ad after substantial content */}
            <div className="ad-container content-ad">
                <InArticleAd adSlot="2345678901" />
            </div>
            
            <section className="tools-categories section">
                <h2 className="section__title">Tool Categories</h2>
                <span className="section__subtitle">Explore Our Collection</span>
                
                <div className="tools-categories__container container grid">
                    {Object.keys(toolCategories).map((category, index) => (
                        <div className="tools-categories__content" key={index}>
                            <div>
                                <i className={`uil ${
                                    category === "Image Tools" ? "uil-image" : 
                                    category === "Content Tools" ? "uil-document-layout-center" : 
                                    "uil-wrench"
                                } tools-categories__icon`}></i>
                                <h3 className="tools-categories__title">{category}</h3>
                            </div>
                            
                            <span className="tools-categories__button">
                                {toolCategories[category]} Tools <i className="uil uil-arrow-right tools-categories__button-icon"></i>
                            </span>
                            
                            <div className="tools-categories__description">
                                <p>
                                    {category === "Image Tools" ? 
                                        "Professional-grade tools for manipulating, converting, and optimizing images for web and print. Our image tools help you enhance visual content with features like background removal, compression while maintaining quality, and format conversion to support different use cases and platforms." : 
                                    category === "Content Tools" ? 
                                        "Comprehensive tools for creating, analyzing, and optimizing web content for better engagement. From generating compelling LinkedIn posts to checking meta tags and analyzing SEO performance, these tools help content creators and marketers maximize the impact of their digital content." : 
                                        "Specialized utilities for developers to enhance workflow and productivity. These tools streamline common development tasks, helping programmers work more efficiently and produce better results with less effort."}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            
            <section className="tools-benefits section">
                <div className="container">
                    <h2 className="section__title">Benefits of Our Tools</h2>
                    <span className="section__subtitle">How Our Tools Help You Succeed</span>
                    
                    <div className="tools-benefits__container grid">
                        <div className="tools-benefits__content">
                            <i className="uil uil-clock tools-benefits__icon"></i>
                            <h3 className="tools-benefits__title">Time Efficiency</h3>
                            <p className="tools-benefits__description">
                                Our tools automate complex processes that would otherwise take hours to complete manually.
                                The time saved can be redirected to more strategic activities, increasing overall productivity.
                                For example, our Background Remover tool processes images in seconds that would take 
                                up to 30 minutes in traditional editing software.
                            </p>
                        </div>
                        
                        <div className="tools-benefits__content">
                            <i className="uil uil-analytics tools-benefits__icon"></i>
                            <h3 className="tools-benefits__title">Better Results</h3>
                            <p className="tools-benefits__description">
                                The algorithms powering our tools are designed to produce professional-quality results
                                consistently. Whether you're optimizing images, generating content, or analyzing SEO,
                                our tools provide insights and outputs that help you achieve your goals more effectively.
                                Many users report significant improvements in their work quality after incorporating our tools.
                            </p>
                        </div>
                        
                        <div className="tools-benefits__content">
                            <i className="uil uil-dollar-sign tools-benefits__icon"></i>
                            <h3 className="tools-benefits__title">Cost Savings</h3>
                            <p className="tools-benefits__description">
                                By providing enterprise-grade tools at no cost, we help individuals and businesses
                                save thousands of dollars on software licenses and subscriptions annually. Our free tools
                                offer functionality comparable to many paid solutions, making professional capabilities
                                accessible to everyone regardless of budget constraints.
                            </p>
                        </div>
                        
                        <div className="tools-benefits__content">
                            <i className="uil uil-graduation-cap tools-benefits__icon"></i>
                            <h3 className="tools-benefits__title">Learning Opportunities</h3>
                            <p className="tools-benefits__description">
                                Our tools are designed with educational value in mind, helping users learn industry
                                best practices while using them. For instance, our SEO Analyzer not only provides
                                recommendations but explains the reasoning behind them, helping users develop a deeper
                                understanding of search engine optimization principles and techniques.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Another in-article ad after more substantial content */}
            <div className="ad-container content-ad">
                <InArticleAd adSlot="3456789012" />
            </div>
            
            <section className="tools-future section">
                <div className="container">
                    <h2 className="section__title">Future Roadmap</h2>
                    <span className="section__subtitle">What's Coming Next</span>
                    
                    <div className="tools-future__container grid">
                        <div className="tools-future__content">
                            <div>
                                <h3 className="tools-future__title">New Tools</h3>
                                <p className="tools-future__description">
                                    We're constantly developing new tools to add to our collection. Coming soon:
                                    HTML Minifier for optimizing web page loading speeds, CSS Beautifier for improving
                                    code readability and maintenance, and JSON Formatter for easier data structure visualization.
                                    Each tool is being developed with real-world use cases in mind to address specific
                                    challenges faced by our user community.
                                </p>
                            </div>
                        </div>
                        
                        <div className="tools-future__content">
                            <div>
                                <h3 className="tools-future__title">Enhanced Features</h3>
                                <p className="tools-future__description">
                                    Existing tools will receive updates with new features, improved performance,
                                    and expanded capabilities based on user feedback and needs. Our Background Remover
                                    will soon support batch processing, the LinkedIn Post Generator will incorporate
                                    more industry-specific templates, and the Meta Tag Checker will provide more
                                    detailed performance analytics and competitor benchmarking.
                                </p>
                            </div>
                        </div>
                        
                        <div className="tools-future__content">
                            <div>
                                <h3 className="tools-future__title">Integration Options</h3>
                                <p className="tools-future__description">
                                    We're working on API access and integration options to allow our tools to
                                    be used within your own workflows and applications. This will enable seamless
                                    integration with content management systems, design software, and marketing
                                    platforms, creating a more connected ecosystem for digital professionals.
                                    The API documentation will include comprehensive guides, examples, and support
                                    resources to facilitate easy implementation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="tools-usage-policy section">
                <div className="container">
                    <h2 className="section__title">Usage Policy</h2>
                    <span className="section__subtitle">Guidelines for Using Our Tools</span>
                    
                    <div className="tools-usage__content">
                        <div className="tools-usage__text">
                            <p>
                                All tools provided on this website are available for personal and commercial use 
                                free of charge. While we encourage widespread use of our tools, we ask users to
                                respect the following guidelines to ensure a positive experience for everyone:
                            </p>
                            
                            <ul className="tools-usage__list">
                                <li>
                                    <strong>Fair Usage:</strong> Please use our tools responsibly and avoid excessive 
                                    automated requests that could impact performance for other users.
                                </li>
                                <li>
                                    <strong>Content Responsibility:</strong> Users are responsible for ensuring they 
                                    have the necessary rights to process any content uploaded to our tools, particularly 
                                    regarding copyright and intellectual property.
                                </li>
                                <li>
                                    <strong>No Redistribution:</strong> The tools themselves may not be redistributed, 
                                    repackaged, or represented as your own creation. However, the outputs created 
                                    using our tools are yours to use as needed.
                                </li>
                                <li>
                                    <strong>Feedback Welcome:</strong> We encourage users to provide feedback on 
                                    their experience, report bugs, and suggest improvements to help us continually 
                                    enhance our offerings.
                                </li>
                            </ul>
                            
                            <p>
                                By using our tools, you acknowledge and agree to these guidelines. For more detailed 
                                information, please refer to our full Terms of Service and Privacy Policy.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="tools-contact section">
                <div className="container">
                    <div className="tools-contact__container grid">
                        <div className="tools-contact__content">
                            <h2 className="tools-contact__title">Have Questions or Suggestions?</h2>
                            <p className="tools-contact__description">
                                We're always looking to improve our tools and add new ones based on user feedback. 
                                If you have questions about how to use our tools, suggestions for improvements, 
                                or ideas for new tools that would be valuable to you, please don't hesitate to reach out.
                            </p>
                            <a href="/contact" className="button button--flex tools-contact__button">
                                Contact Us <i className="uil uil-message button__icon"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Banner ad at the bottom of the page */}
            <div className="ad-container bottom-banner-ad">
                <HorizontalBannerAd adSlot="4567890123" />
            </div>
        </>
    );
};

export default ToolsAboutPage;