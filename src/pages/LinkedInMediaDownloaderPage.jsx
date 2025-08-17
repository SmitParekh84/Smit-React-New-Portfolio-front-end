import LinkedInMediaDownloader from "../components/LinkedInMediaDownloader/LinkedInMediaDownloader";
import FAQ from "../components/FAQ/FAQ";
import SEO from "../components/SEO/SEO";
import { 
    prepareStructuredData, 
    generateFAQSchema,
    getFullUrl,
    generateToolSchema,
    generateBreadcrumbSchema
} from "../utils/SocialMetaHelper";
import {
    BenefitsSection,
    HowItWorksSection,
    UseCasesSection,
    FeaturesSection,
    TipsSection,
    CTASection,
    TechnicalSection,
    RelatedToolsSection
} from "../components/LinkedInMediaDownloader/LinkedInDownloaderComponents";

const LinkedInMediaDownloaderPage = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split('T')[0];
    
    // FAQ data for the FAQ component
    const faqDataLinkedinDownloader = [
        {
            question: "Is it legal to download LinkedIn videos?",
            answer: "Downloading LinkedIn videos for personal use is generally acceptable, but redistribution or commercial use may violate LinkedIn's terms of service. Always respect copyright laws and content ownership."
        },
        {
            question: "Why can't I download some LinkedIn videos?",
            answer: "Some LinkedIn videos might be private or have restricted access. This tool only works with public LinkedIn posts that anyone can view without logging in."
        },
        {
            question: "What LinkedIn photo types can I download?",
            answer: "You can download photos from public LinkedIn posts, including profile pictures, cover images, and images shared in posts."
        },
        {
            question: "Do you store the downloaded videos?",
            answer: "No, we don't store any videos or images. This tool processes the content in real-time and delivers it directly to you without saving copies on our servers."
        },
        {
            question: "What file format are the downloaded videos?",
            answer: "LinkedIn videos are typically downloaded in MP4 format, which is widely supported by most video players and devices."
        }
    ];

    // FAQ Schema using helper function
    const faqSchema = generateFAQSchema(faqDataLinkedinDownloader);

    // SoftwareApplication schema for the tool using helper function
    const toolSchema = generateToolSchema({
        title: "LinkedIn Media Downloader",
        description: "Free tool to download videos and photos from public LinkedIn posts for personal use. No registration required, no watermarks, fast and secure downloads.",
        features: [
            "LinkedIn video downloader", 
            "LinkedIn photo downloader", 
            "MP4 video downloads", 
            "High-quality image downloads",
            "No watermarks",
            "Fast processing",
            "Mobile friendly",
            "100% free"
        ],
        screenshot: "/images/linkedin-media-downloader.webp"
    });

    // Add additional tool-specific properties
    toolSchema.applicationCategory = "UtilityApplication";
    toolSchema.creator = {
        "@type": "Person",
        "name": "Smit Parekh",
        "url": getFullUrl("/portfolio")
    };
    toolSchema.datePublished = "2023-12-15";
    toolSchema.dateModified = formattedDate;
    toolSchema.aggregateRating = {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "156"
    };

    // Breadcrumb structured data using helper function
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Free Tools", path: "/free-tools" },
        { name: "LinkedIn Media Downloader", path: "/free-tools/linkedin-media-downloader" }
    ]);

    // How-To schema
    const howToSchema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Download LinkedIn Videos and Photos",
        "description": "Step-by-step guide to download videos and photos from LinkedIn posts using our free online tool.",
        "step": [
            {
                "@type": "HowToStep",
                "name": "Copy LinkedIn URL",
                "text": "Go to the LinkedIn post and copy the URL from your browser's address bar"
            },
            {
                "@type": "HowToStep", 
                "name": "Select Media Type",
                "text": "Choose whether you want to download a video or photo from the LinkedIn post"
            },
            {
                "@type": "HowToStep",
                "name": "Paste and Download",
                "text": "Paste the URL into our tool and click download to save the media to your device"
            }
        ],
        "tool": {
            "@type": "HowToTool",
            "name": "LinkedIn Media Downloader"
        }
    };

    // Process all structured data to ensure proper URLs
    const processedToolSchema = prepareStructuredData(toolSchema);
    const processedFaqSchema = prepareStructuredData(faqSchema);
    const processedBreadcrumbSchema = prepareStructuredData(breadcrumbSchema);
    const processedHowToSchema = prepareStructuredData(howToSchema);

    const pageUrl = "/free-tools/linkedin-media-downloader";
    const imageUrl = "/images/linkedin-media-downloader.webp";
    const pageDescription = "Download videos and photos from public LinkedIn posts with our free online tool. Save LinkedIn media for personal use without watermarks or quality loss. Fast, secure, and completely free.";

    return (
        <>
            <SEO 
                title="Free LinkedIn Media Downloader | Download Videos & Photos from LinkedIn"
                description={pageDescription}
                keywords="LinkedIn video downloader, LinkedIn photo downloader, download LinkedIn videos, save LinkedIn photos, LinkedIn media downloader, free LinkedIn downloader, LinkedIn content saver, social media downloader, LinkedIn video saver"
                canonicalUrl={getFullUrl(pageUrl)}
                ogImage={getFullUrl(imageUrl)}
                ogTitle="Free LinkedIn Media Downloader - Save Videos & Photos"
                ogDescription={pageDescription}
                ogType="website"
                twitterImage={getFullUrl(imageUrl)}
                twitterTitle="LinkedIn Media Downloader - Download Videos & Photos"
                twitterDescription={pageDescription}
                structuredData={[processedToolSchema, processedFaqSchema, processedBreadcrumbSchema, processedHowToSchema]}
                lastUpdated={`${formattedDate}T14:25:00Z`}
                language="en-US"
                author="Smit Parekh"
                alternateLanguages={[
                    { lang: "en", url: getFullUrl(pageUrl) }
                ]}
            >
                <meta name="application-name" content="LinkedIn Media Downloader" />
                <meta name="msapplication-TileColor" content="#6E57E0" />
                <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
                <link rel="preload" href={getFullUrl(imageUrl)} as="image" />
            </SEO>
            
            <LinkedInMediaDownloader />
            <BenefitsSection />
            <HowItWorksSection />
            <UseCasesSection />
            <FeaturesSection />
            <TipsSection />
            <CTASection />
            <TechnicalSection />
            <FAQ faqData={faqDataLinkedinDownloader} toolName="LinkedIn Media Downloader" />
            <RelatedToolsSection />
        </>
    );
};

export default LinkedInMediaDownloaderPage;
