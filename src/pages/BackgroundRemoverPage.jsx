import { Helmet } from "react-helmet-async";

import "react-toastify/dist/ReactToastify.css";
import BackgroundRemover from "../components/BackgroundRemover/BackgroundRemover";
import FAQ from "../components/FAQ/FAQ";
import { faqDataBackgroundRemover } from "../data/data";

const BackgroundRemoverPage = () => {
    const apiUrl = import.meta.env.VITE_API_URL;
    return (
        <>
            <Helmet>
                <title>Background Remover | Free Image Background Removal Tool</title>
                <meta
                    name="description"
                    content="Use our free background remover tool to easily remove the background from your images. Upload your image and download the background-free version in seconds!"
                />
                <meta
                    name="keywords"
                    content="background remover, free background remover, remove image background, background removal tool, online image background removal"
                />
                <meta name="author" content="Smit Parekh" />
                <link rel="canonical" href="https://www.smitparekh.studio/background-remover" />

                {/* Open Graph Tags */}
                <meta property="og:title" content="Free Background Remover Tool" />
                <meta
                    property="og:description"
                    content="Easily remove the background from your images using our free tool. Perfect for professionals and casual users alike. Upload and download your image in seconds!"
                />
                <meta
                    property="og:image"
                    content="https://www.smitparekh.studio/images/Background-Remover.png"
                />
                <meta property="og:url" content="https://www.smitparekh.studio/background-remover" />
                <meta property="og:type" content="website" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Free Background Remover Tool" />
                <meta
                    name="twitter:description"
                    content="Use our free tool to quickly remove backgrounds from images. Upload and download your image in just a few clicks!"
                />
                <meta name="twitter:image" content="https://www.smitparekh.studio/images/Background-Remover.png" />

                {/* Structured Data - JSON-LD */}
                <script type="application/ld+json">
                    {`
            {
                "@context": "https://schema.org",
                "@type": "WebPage",
                "name": "Background Remover",
                "url": "https://www.smitparekh.studio/background-remover",
                "description": "Use this free background remover tool to remove the background from images quickly and easily. Perfect for designers, marketers, and casual users.",
                "image": "https://www.smitparekh.studio/images/Background-Remover.png",
                "publisher": {
                    "@type": "Organization",
                    "name": "Smit Parekh Studio",
                    "url": "https://www.smitparekh.studio"
                }
            }
            `}
                </script>
            </Helmet>
            <BackgroundRemover
                toolName="Background Remover"  // Pass dynamic tool name
                apiUrl={apiUrl}  // Pass dynamic API URL
            />
            <FAQ faqData={faqDataBackgroundRemover} toolName="Background Remover" />
        </>
    );
};

export default BackgroundRemoverPage;
