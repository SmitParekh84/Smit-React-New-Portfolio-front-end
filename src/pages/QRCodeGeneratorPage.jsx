import { faqDataQRCode } from "../data/data";
import FAQ from "../components/FAQ/FAQ";
import SEO from "../components/SEO/SEO";
import "../components/QRCodeGenerator/QRCodeGenerator.css";
import { 
    prepareStructuredData, 
    generateFAQSchema,
    getFullUrl,
    generateToolSchema,
    generateBreadcrumbSchema
} from "../utils/SocialMetaHelper";

// Import all QRCodeGenerator components
import QRCodeGenerator, {
    HeroSection,
    UseCasesSection,
    QRTypesSection,
    BestPracticesSection,
    HowToSection,
    StatsSection,
    ComparisonSection,
    ToolBenefitsSection,
    ResourcesSection,
    CTASection
} from "../components/QRCodeGenerator";

const QRCodeGeneratorPage = () => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split('T')[0];
    
    // FAQ Schema using helper function
    const faqSchema = generateFAQSchema(faqDataQRCode);

    // SoftwareApplication schema for the tool
    const toolSchema = generateToolSchema({
        title: "Free Lifetime QR Code Generator Tool",
        description: "Generate permanent, free QR codes that never expire. Create custom lifetime QR codes for URLs, text, contact information, WiFi, and more without any subscription.",
        features: [
            "Generate free lifetime QR codes", 
            "Create permanent QR codes that never expire", 
            "Customize QR code colors and sizes",
            "No sign-up required",
            "Download QR codes as PNG images",
            "Create QR codes for URLs, text, contact info, WiFi",
            "High-resolution output",
            "Transparent background support"
        ],
        screenshot: "/images/qr-code-generator-hero.png"
    });

    // Add additional tool-specific properties
    toolSchema.applicationCategory = "UtilitiesApplication, WebApplication";
    toolSchema.creator = {
        "@type": "Person",
        "name": "Smit Parekh"
    };
    toolSchema.aggregateRating = {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "87"
    };
    toolSchema.datePublished = "2023-08-15";
    toolSchema.dateModified = formattedDate;

    // Breadcrumb structured data using helper function
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Free Tools", path: "/tools" },
        { name: "Free Lifetime QR Code Generator", path: "/qr-code-generator" }
    ]);

    // Tool benefits schema (How-To)
    const howToSchema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Create Free QR Codes",
        "description": "Follow these steps to generate professional, permanent QR codes for your website, business, or personal needs.",
        "step": [
            {
                "@type": "HowToStep",
                "name": "Select QR Code Type",
                "text": "Choose the type of QR code you want to create (URL, text, email, phone, SMS, WiFi, or contact information)"
            },
            {
                "@type": "HowToStep",
                "name": "Enter Content",
                "text": "Add the information you want your QR code to contain"
            },
            {
                "@type": "HowToStep",
                "name": "Customize Appearance",
                "text": "Personalize your QR code with custom colors and size options"
            },
            {
                "@type": "HowToStep",
                "name": "Generate & Download",
                "text": "Create your QR code and download the high-resolution image"
            }
        ],
        "tool": {
            "@type": "HowToTool",
            "name": "Free Lifetime QR Code Generator Tool"
        }
    };

    // Process all structured data to ensure proper URLs
    const processedToolSchema = prepareStructuredData(toolSchema);
    const processedFaqSchema = prepareStructuredData(faqSchema);
    const processedBreadcrumbSchema = prepareStructuredData(breadcrumbSchema);
    const processedHowToSchema = prepareStructuredData(howToSchema);

    const pageUrl = "/qr-code-generator";
    const imageUrl = "/images/qr-code-generator-hero.png";
    const pageDescription = "Generate free QR codes that never expire with our lifetime QR code generator. Create permanent, custom QR codes for URLs, text, contact info, WiFi networks - no sign-up required, no watermarks.";
    
    return (
        <>
            <SEO 
                title="Free Lifetime QR Code Generator | Create Permanent QR Codes"
                description={pageDescription}
                keywords="free qr code generator, lifetime qr code, permanent qr code, create free qr code, qr code no expiry, custom qr code maker, free business qr code, unlimited qr code generator, no subscription qr code, wifi qr code creator, contact qr code generator"
                canonicalUrl={getFullUrl(pageUrl)}
                ogImage={getFullUrl(imageUrl)}
                ogTitle="Free Lifetime QR Code Generator | No Expiration, No Subscriptions"
                ogDescription="Generate permanent, free QR codes that never expire. Create unlimited custom QR codes without watermarks or subscriptions."
                ogType="website"
                twitterImage={getFullUrl(imageUrl)}
                twitterTitle="Free QR Code Generator: Create Permanent QR Codes"
                twitterDescription={pageDescription}
                structuredData={[processedToolSchema, processedFaqSchema, processedBreadcrumbSchema, processedHowToSchema]}
                lastUpdated={`${formattedDate}T10:30:00Z`}
                language="en-US"
                author="Smit Parekh"
                alternateLanguages={[
                    { lang: "en", url: getFullUrl(pageUrl) }
                ]}
            >
                <meta name="application-name" content="Free QR Code Generator" />
                <meta name="msapplication-TileColor" content="#6E57E0" />
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon_180.png" />
                <link rel="preload" href={getFullUrl(imageUrl)} as="image" />
            </SEO>

            <HeroSection />

            <div className="qr-generator-container" id="qr-generator">
                <QRCodeGenerator 
                    apiUrl={apiUrl} 
                    toolName="Free Lifetime QR Code Generator" 
                />
            </div>

            <UseCasesSection />
            <QRTypesSection />
            <BestPracticesSection />
            <HowToSection />
            <StatsSection />
            <ComparisonSection />
            <ToolBenefitsSection />

            <div className="qr-generator-container">
                <FAQ faqData={faqDataQRCode} toolName="Free Lifetime QR Code Generator" />
            </div>

            <ResourcesSection />
            <CTASection />
        </>
    );
};

export default QRCodeGeneratorPage;
