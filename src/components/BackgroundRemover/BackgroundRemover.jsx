import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BackgroundRemover = ({ toolName, apiUrl }) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [processedImage, setProcessedImage] = useState(null);
    const [loading, setLoading] = useState(false);

    const validFileTypes = ["image/png", "image/jpeg", "image/jpg", "image/webp"];
    const MAX_FILE_SIZE = 10 * 1024 * 1024; // 5MB in bytes

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
            const response = await fetch(`${apiUrl}/api/remove-bg`, {
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
                    link.download = "processed-image.png";
                    link.click();
                })
                .catch((err) => {
                    toast.error("Error fetching image.");
                });
        }

        link.download = "processed-image.png";
        link.click();
    };

    const handleClear = () => {
        setSelectedFile(null);
        setProcessedImage(null);
        toast.info("Selection cleared.");
    };

    const { getRootProps, getInputProps } = useDropzone({
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
        accept: validFileTypes.join(","),
        multiple: false,
    });

    return (
        <section className="bg-remover-box container">
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
            <h2 className="section__title">{toolName}</h2>
            <p className="section__subtitle">Upload an image to remove its background.</p>
            <div className="bg-container">
                <div className="bg-remover-container">
                    <div
                        {...getRootProps()}
                        className="bg-dropzone"
                        style={{
                            border: "2px dashed #ddd",
                            padding: "80px",
                            textAlign: "center",
                            marginBottom: "20px",
                        }}
                    >
                        <input {...getInputProps()} />
                        <p>Drag & drop an image here, or click to select an image</p>
                    </div>

                    {selectedFile && (
                        <div className="bg-preview">
                            <h3 className="bg-preview-title">Selected Image:</h3>
                            <img
                                src={URL.createObjectURL(selectedFile)}
                                alt="Selected Preview"
                                className="bg-preview-image"
                                style={{
                                    maxWidth: "300px",
                                    marginBottom: "20px",
                                }}
                            />
                        </div>
                    )}
                    {selectedFile && (
                        <button
                            onClick={handleClear}
                            className="button button--clear"
                            style={{
                                backgroundColor: "#ff6b6b",
                                color: "#fff",
                                border: "none",
                                padding: "10px 15px",
                                cursor: "pointer",
                                marginTop: "20px",
                                marginBottom: "20px",
                            }}
                        >
                            Clear
                        </button>
                    )}

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
                            <img
                                src={processedImage}
                                alt="Processed"
                                className="bg-remover-image"
                            />
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
    );
};

export default BackgroundRemover;
