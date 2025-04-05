import FAQ from "../components/FAQ/FAQ";
import QRCodeGenerator from "../components/QRCodeGenerator/QRCodeGenerator";
import SEO from "../components/SEO/SEO";
import { faqDataQRCode } from "../data/data";

const QRCodeGeneratorPage = () => {
    const apiUrl = import.meta.env.VITE_API_URL;
    
    // FAQ Schema
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqDataQRCode.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    };

    // SoftwareApplication schema for the tool
    const toolSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Free Lifetime QR Code Generator Tool",
        "applicationCategory": "UtilitiesApplication, WebApplication",
        "operatingSystem": "Web",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "description": "Generate permanent, free QR codes that never expire. Create custom lifetime QR codes for URLs, text, contact information, WiFi, and more without any subscription.",
        "featureList": "Generate free lifetime QR codes, Create permanent QR codes that never expire, Customize QR code colors and sizes, No sign-up required, Download QR codes as PNG images",
        "creator": {
            "@type": "Person",
            "name": "Smit Parekh"
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
                "item": "https://www.smitparekh.studio"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Free Tools",
                "item": "https://www.smitparekh.studio/tools"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Free Lifetime QR Code Generator",
                "item": "https://www.smitparekh.studio/qr-code-generator"
            }
        ]
    };

    return (
        <>
            <SEO 
                title="Free Lifetime QR Code Generator | Create Permanent QR Codes"
                description="Generate free QR codes that never expire with our lifetime QR code generator. Create permanent, custom QR codes for URLs, text, contact info, WiFi networks - no sign-up required, no watermarks."
                keywords="free qr code generator, lifetime qr code, permanent qr code, create free qr code, qr code no expiry, custom qr code maker, free business qr code, unlimited qr code generator, no subscription qr code"
                canonicalUrl="https://www.smitparekh.studio/qr-code-generator"
                ogTitle="Free Lifetime QR Code Generator | No Expiration, No Subscriptions"
                ogDescription="Generate permanent, free QR codes that never expire. Create unlimited custom QR codes without watermarks or subscriptions."
                ogImage="https://www.smitparekh.studio/images/QR-Code-Generator-Image.webp"
                twitterImage="https://www.smitparekh.studio/images/QR-Code-Generator-Image.webp"
                structuredData={[toolSchema, faqSchema, breadcrumbSchema]}
            />

            <QRCodeGenerator 
                apiUrl={apiUrl} 
                toolName="Free Lifetime QR Code Generator" 
            />
            <FAQ faqData={faqDataQRCode} toolName="Free Lifetime QR Code Generator" />
        </>
    );
};

export default QRCodeGeneratorPage;
