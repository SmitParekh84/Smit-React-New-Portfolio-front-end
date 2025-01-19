// Import React and the About component
import React from "react";
import { Helmet } from "react-helmet-async";
import ToolsSection from "../components/ToolSection/ToolsSection";
import { faqDataTools } from "../data/data";
import FAQ from "../components/FAQ/FAQ";

// Create the AboutPage component
const ToolsPage = () => {

    return (
        <>
            <Helmet>
                <title>Free Tools - Enhance Your Productivity | Smit Parekh</title>
                <meta
                    name="description"
                    content="Explore Smit Parekh's free tools designed to help improve your workflow, productivity, and digital marketing efforts. Try out our background remover and post generators."
                />
                <meta
                    name="keywords"
                    content="Free Tools, Smit Parekh, background remover, viral post generator, productivity tools, digital marketing tools"
                />
                <meta name="author" content="Smit Parekh" />
                <link rel="canonical" href="https://www.smitparekh.studio/tools" />

                {/* Open Graph Tags */}
                <meta property="og:title" content="Free Tools - Enhance Your Productivity | Smit Parekh" />
                <meta
                    property="og:description"
                    content="Discover free tools by Smit Parekh that help streamline your workflow and boost your productivity. Access background removers, post generators, and more."
                />
                <meta
                    property="og:image"
                    content="https://www.smitparekh.studio/images/Tools-Page-Image.webp"
                />
                <meta property="og:url" content="https://www.smitparekh.studio/tools" />
                <meta property="og:type" content="website" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Free Tools - Enhance Your Productivity | Smit Parekh" />
                <meta
                    name="twitter:description"
                    content="Explore free tools offered by Smit Parekh to help you improve your digital marketing and workflow. Try the background remover and LinkedIn post generator."
                />
                <meta name="twitter:image" content="https://www.smitparekh.studio/images/Tools-Page-Image.webp" />

                {/* Structured Data - JSON-LD */}
                <script type="application/ld+json">
                    {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Free Tools - Smit Parekh",
              "url": "https://www.smitparekh.studio/tools",
              "description": "Explore a variety of free tools designed by Smit Parekh to enhance your productivity, including background removal and post generation tools.",
              "image": "https://www.smitparekh.studio/images/Tools-Page-Image.webp",
              "publisher": {
                "@type": "Organization",
                "name": "Smit Parekh Studio",
                "url": "https://www.smitparekh.studio"
              }
            }
          `}
                </script>
            </Helmet>




            <ToolsSection />
            <FAQ faqData={faqDataTools} toolName="Viral LinkedIn Post Generator" />


        </>

    );
};



export default ToolsPage;
