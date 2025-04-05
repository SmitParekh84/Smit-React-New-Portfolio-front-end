import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./BackgroundRemover.css";

const BackgroundRemover = ({ toolName, apiUrl }) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [processedImage, setProcessedImage] = useState(null);
    const [loading, setLoading] = useState(false);

    const validFileTypes = ["image/png", "image/jpeg", "image/jpg", "image/webp"];
    const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB in bytes

    const handleRemoveBackground = async () => {
        if (!selectedFile) {
            toast.error("Please select an image.");
            return;
        }

        // Validate file size
        if (selectedFile.size > MAX_FILE_SIZE) {
            toast.error("File is too large. Maximum size is 10MB.");
            return;
        }
        setLoading(true);

        const formData = new FormData();
        formData.append("image", selectedFile);

        try {
            const response = await fetch(`${apiUrl}/remove-bg`, {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                const data = await response.json();
                toast.error(data.error || "Failed to process the image. Please try again.");
                return;
            }

            const data = await response.json();
            if (data.imageUrl) {
                setProcessedImage(data.imageUrl);
                toast.success("Image processed successfully!");
            } else {
                toast.error("Unexpected error occurred. Please try again.");
            }
        } catch (error) {
            toast.error("Failed to process the image. Please check your connection or try again later.");
        } finally {
            setLoading(false);
        }
    };

    const handleDownload = () => {
        if (!processedImage) {
            toast.error("No processed image available to download.");
            return;
        }

        const link = document.createElement("a");

        if (processedImage.startsWith('data:image')) {
            link.href = processedImage;
        } else {
            fetch(processedImage)
                .then((res) => res.blob())
                .then((blob) => {
                    const objectURL = URL.createObjectURL(blob);
                    link.href = objectURL;
                    link.download = "transparent-image.png";
                    link.click();
                })
                .catch((err) => {
                    toast.error("Error fetching image.");
                });
        }

        link.download = "transparent-image.png";
        link.click();
    };

    const handleClear = () => {
        setSelectedFile(null);
        setProcessedImage(null);
        toast.info("Selection cleared.");
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop: (acceptedFiles) => {
            const file = acceptedFiles[0];
            if (file) {
                if (validFileTypes.includes(file.type)) {
                    setSelectedFile(file);
                    toast.success("File selected successfully.");
                } else {
                    toast.error("Invalid file type. Please upload PNG, JPEG, JPG, or WEBP.");
                }
            } else {
                toast.error("No file selected. Please try again.");
            }
        },
        accept: {
            'image/png': ['.png'],
            'image/jpeg': ['.jpg', '.jpeg'],
            'image/webp': ['.webp']
        },
        multiple: false,
    });

    return (
        <section className="bg-remover-section container">
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
            <h2 className="section__title">{toolName}</h2>
            <p className="section__subtitle">Remove backgrounds from your images in seconds</p>
            
            <div className="bg-remover-container">
                <div
                    {...getRootProps()}
                    className="bg-dropzone"
                >
                    <input {...getInputProps()} />
                    <i className="uil uil-image bg-dropzone-icon"></i>
                    <p className="bg-dropzone-text">
                        {isDragActive
                            ? "Drop your image here..."
                            : "Drag & drop your image here or click to browse"}
                    </p>
                    <p className="bg-dropzone-subtext">
                        Supports PNG, JPG, JPEG, and WEBP (max 10MB)
                    </p>
                    <div className="supported-formats">
                        <span className="format-badge">PNG</span>
                        <span className="format-badge">JPG</span>
                        <span className="format-badge">JPEG</span>
                        <span className="format-badge">WEBP</span>
                    </div>
                </div>

                {selectedFile && (
                    <div className="bg-images-container">
                        <div className="bg-image-card">
                            <div className="bg-image-header">
                                <h3 className="bg-image-title">Original Image</h3>
                            </div>
                            <img
                                src={URL.createObjectURL(selectedFile)}
                                alt="Selected Preview"
                                className="bg-preview-image"
                            />
                        </div>

                        {processedImage && (
                            <div className="bg-image-card">
                                <div className="bg-image-header">
                                    <h3 className="bg-image-title">Processed Image</h3>
                                </div>
                                <img
                                    src={processedImage}
                                    alt="Processed"
                                    className="bg-remover-image"
                                />
                            </div>
                        )}
                    </div>
                )}

                <div className="buttons-container">
                    {selectedFile && (
                        <button
                            onClick={handleClear}
                            className="button-danger"
                        >
                            <i className="uil uil-times"></i> Clear
                        </button>
                    )}

                    {selectedFile && (
                        <button
                            onClick={handleRemoveBackground}
                            className="button-primary"
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <span className="loading-spinner"></span> Processing...
                                </>
                            ) : (
                                <>
                                    <i className="uil uil-image-download"></i> Remove Background
                                </>
                            )}
                        </button>
                    )}

                    {processedImage && (
                        <button
                            onClick={handleDownload}
                            className="button-secondary"
                        >
                            <i className="uil uil-download-alt"></i> Download Image
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
};

export default BackgroundRemover;
