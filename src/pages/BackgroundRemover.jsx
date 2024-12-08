import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const BackgroundRemover = () => {
    
    const [selectedFile, setSelectedFile] = useState(null);
    const [processedImage, setProcessedImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const apiUrl = import.meta.env.VITE_API_URL;
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleRemoveBackground = async () => {
        if (!selectedFile) {
            alert("Please select an image.");
            return;
        }
        setLoading(true);

        const formData = new FormData();
        formData.append("image", selectedFile);

        try {
            const response = await fetch(`${apiUrl}/api/remove-bg`, {
                method: "POST",
                body: formData,
            });

            if (!response.ok) throw new Error("Failed to process image.");

            const blob = await response.blob();
            setProcessedImage(URL.createObjectURL(blob));
        } catch (error) {
            console.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = processedImage;
        link.download = "processed-image.png";
        link.click();
    };

    return (
        <><Helmet>
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

            <section className="bg-remover-box container" >
                <h2 className="section__title">Background Remover</h2>
                <p className="section__subtitle">
                    Welcome to my free background remover tool! Upload an image, and I’ll help you remove its background in just a few seconds.
                    Perfect for creating clean, professional images for your projects, presentations, or marketing materials.
                </p>
                <div className="bg-container">

                    <div className="bg-remover-container">
                        <h2 className="section__title">Background Remover</h2>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="bg-remover-input"
                        />
                        <button
                            onClick={handleRemoveBackground}
                            className="button button--flex"
                            disabled={loading}
                        >
                            {loading ? "Processing..." : "Remove Background"}
                        </button>
                        {processedImage && (
                            <div className="bg-remover-output">
                                <h3 className="bg-remover-subtitle">Processed Image:</h3>
                                <img src={processedImage} alt="Processed" className="bg-remover-image" />
                                <button
                                    onClick={handleDownload}
                                    className="button button--flex"
                                >
                                    Download Image
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default BackgroundRemover;
