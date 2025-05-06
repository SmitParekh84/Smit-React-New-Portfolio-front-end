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
import ToolsDetailedContent from "../components/ToolsDetailedContent/ToolsDetailedContent";
import TrustSignals from "../components/TrustSignals/TrustSignals";
import ToolsContentDetails from "../components/ToolsContentDetails/ToolsContentDetails";
import { 
    prepareStructuredData, 
    generateFAQSchema,
    getFullUrl 
} from "../utils/SocialMetaHelper";
import { HorizontalBannerAd, InArticleAd } from "../components/AdSense";

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

    // Create structured data for tools collection page
    const toolsPageStructuredData = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Free Online Tools for Productivity | Smit Parekh",
        "description": "Access powerful, free online tools including AI-powered LinkedIn Post Generator, Background Remover, and Meta Tag Checker. Boost productivity with no cost.",
        "url": "/free-tools",
        "mainEntity": {
            "@type": "ItemList",
            "itemListElement": toolsData.map((tool, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": tool.title,
                "description": tool.shortDescription,
                "url": tool.path
            }))
        },
        "author": {
            "@type": "Person",
            "name": "Smit Parekh",
            "url": "/portfolio"
        },
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
        },
        "potentialAction": {
            "@type": "UseAction",
            "target": "/free-tools"
        }
    };

    // Generate FAQ schema
    const faqSchema = generateFAQSchema(toolsFaqs);

    // Generate breadcrumb schema
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
            }
        ]
    };

    // Process all structured data to ensure proper URLs
    const processedPageSchema = prepareStructuredData(toolsPageStructuredData);
    const processedFaqSchema = prepareStructuredData(faqSchema);
    const processedBreadcrumbSchema = prepareStructuredData(breadcrumbSchema);

    return (
        <>
            <SEO 
                title="Free Online Tools for Productivity | Smit Parekh"
                description="Access powerful, free online tools including AI-powered LinkedIn Post Generator, Background Remover, and Meta Tag Checker. Boost productivity with no cost."
                keywords="free online tools, productivity tools, background remover, LinkedIn post generator, meta tag checker, free SEO tools, AI tools, image compressor, QR code generator, SEO analyzer"
                canonicalUrl={getFullUrl("/free-tools")}
                ogType="website"
                ogImage={getFullUrl("/images/Tools-Page-Image.webp")}
                ogTitle="Free Professional Tools - Smit Parekh"
                twitterImage={getFullUrl("/images/Tools-Page-Image.webp")}
                twitterTitle="Free Online Tools by Smit Parekh"
                structuredData={[processedPageSchema, processedFaqSchema, processedBreadcrumbSchema]}
                lastUpdated={new Date().toISOString()}
                language="en-US"
                author="Smit Parekh"
                alternateLanguages={[
                    { lang: "en", url: getFullUrl("/free-tools") }
                ]}
            >
                {/* Add extra SEO tags */}
                <meta name="google-site-verification" content="your-verification-code" />
                <meta property="og:video" content={getFullUrl("/videos/tools-demo.mp4")} />
                <meta property="og:video:type" content="video/mp4" />
                <meta property="og:video:width" content="1280" />
                <meta property="og:video:height" content="720" />
                <link rel="preload" href={getFullUrl("/images/Tools-Page-Image.webp")} as="image" />
            </SEO>

            {/* Modern Hero Section */}
            <ToolsHero />
            
            {/* Horizontal Banner Ad after Hero Section */}
            <div className="ad-container">
                <HorizontalBannerAd adSlot="1234567890" />
            </div>

            {/* Tools Grid Section */}
            <ToolsGrid tools={toolsData} />

            {/* Tools Content Details - Added as separate section */}
            <ToolsContentDetails title="Professional Tools For Everyone" />
            
            {/* In-article Ad between sections */}
            <div className="ad-container content-ad">
                <InArticleAd adSlot="2345678901" />
            </div>
            
            {/* Features Section */}
            <Features 
                title="Why Use Our Tools?"
                subtitle="Designed for Professionals"
                features={features}
            />

            {/* Trust Signals Section */}
            <TrustSignals 
                title="Trusted by Thousands"
                subtitle="Join professionals worldwide who rely on our free tools for daily productivity"
                companies={['Google', 'Microsoft', 'Amazon', 'Shopify', 'Adobe']}
                animated={true}
            />

            {/* Product Showcase Section */}
            <ProductShowcase 
                title="Our Tools in Detail"
                subtitle="Learn More About Each Tool"
                products={productShowcaseData}
            />
            
            {/* Horizontal Banner Ad before Detailed Content */}
            <div className="ad-container">
                <HorizontalBannerAd adSlot="3456789012" />
            </div>
            
            {/* Detailed Content Section - Added for AdSense compliance */}
            <ToolsDetailedContent />

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

            {/* In-article Ad before FAQ section */}
            <div className="ad-container content-ad">
                <InArticleAd adSlot="4567890123" />
            </div>

            {/* FAQ Section */}
            <FAQ 
                title="Frequently Asked Questions"
                subtitle="Find Quick Answers to Common Questions"
                faqData={toolsFaqs}
            />

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
