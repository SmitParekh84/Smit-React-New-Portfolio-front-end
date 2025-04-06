import { toolsData, toolTestimonials, features, steps, toolsFaqs } from "../data/toolsData";
import SEO from "../components/SEO/SEO";
import ToolsHero from "../components/ToolsHero/ToolsHero";
import ToolsGrid from "../components/ToolsGrid/ToolsGrid";
import Features from "../components/Features/Features";
import ProductShowcase from "../components/ProductShowcase/ProductShowcase";
import Testimonials from "../components/Testimonials/Testimonials";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import FAQ from "../components/FAQ/FAQ";
import CTASection from "../components/CTASection/CTASection";

const ToolsShowcasePage = () => {
    // Create product showcase data from toolsData
    const productShowcaseData = toolsData.map(tool => ({
        title: tool.title,
        icon: tool.icon,
        description: tool.shortDescription,
        features: ["Professional results in seconds", "No watermarks or quality loss", "Available 24/7"],
        path: tool.path,
        buttonText: "Try it now"
    }));

    return (
        <>
            <SEO 
                title="Free Online Tools for Productivity | Smit Parekh Studio"
                description="Access powerful, free online tools including AI-powered LinkedIn Post Generator, Background Remover, and Meta Tag Checker. Boost productivity with no cost."
                keywords="free online tools, productivity tools, background remover, LinkedIn post generator, meta tag checker, free SEO tools, AI tools"
                canonicalUrl="https://www.smitparekh.studio/"
                ogImage="https://www.smitparekh.studio/images/Tools-Page-Image.webp"
                twitterImage="https://www.smitparekh.studio/images/Tools-Page-Image.webp"
            />

            {/* Modern Hero Section */}
            <ToolsHero />

            {/* Tools Grid Section */}
            <ToolsGrid tools={toolsData} />

            {/* Features Section */}
            <Features 
                title="Why Use Our Tools?"
                subtitle="Designed for Professionals"
                features={features}
            />

            {/* Product Showcase Section */}
            <ProductShowcase 
                title="Our Tools in Detail"
                subtitle="Learn More About Each Tool"
                products={productShowcaseData}
            />

            {/* How It Works Section */}
            <HowItWorks 
                title="How It Works"
                subtitle="Simple Process, Powerful Results"
                steps={steps}
            />

            {/* Testimonials Section */}
            {typeof window !== 'undefined' && (
                <Testimonials 
                    title="What Users Say"
                    subtitle="Success Stories from Our Community"
                    testimonials={toolTestimonials}
                />
            )}

            {/* FAQ Section */}
            <FAQ 
                title="Frequently Asked Questions"
                subtitle="Find Quick Answers to Common Questions"
                faqData={toolsFaqs}
            />

            {/* Newsletter Section
            <Newsletter 
                title="Stay Updated"
                subtitle="Subscribe to our newsletter for updates on new tools and features"
                placeholder="Enter your email address"
                buttonText="Subscribe"
            /> */}

            {/* CTA Section */}
            <CTASection 
                title="Need Custom Development?"
                subtitle="Looking for custom tools or web development services? I can help with tailored solutions for your business needs."
                buttonText="Contact Me"
                buttonLink="/contact"
                buttonIcon="uil-message"
            />
        </>
    );
};

export default ToolsShowcasePage;
