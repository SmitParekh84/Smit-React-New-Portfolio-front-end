import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ImageConverter.css";

const ImageConverter = ({ toolName, apiUrl }) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);
    const [convertedImage, setConvertedImage] = useState(null);
    const [fileName, setFileName] = useState("");
    const [loading, setLoading] = useState(false);
    const [targetFormat, setTargetFormat] = useState("png");
    const [error, setError] = useState("");
    const [dragActive, setDragActive] = useState(false);

    // Supported formats
    const supportedFormats = [
        { value: "png", label: "PNG - Portable Network Graphics" },
        { value: "jpg", label: "JPG - JPEG Image" },
        { value: "webp", label: "WEBP - Web Picture Format" },
        { value: "gif", label: "GIF - Graphics Interchange Format" },
        { value: "bmp", label: "BMP - Bitmap Image" }
    ];

    const handleFormatChange = (e) => {
        setTargetFormat(e.target.value);
    };

    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFileChange(e.dataTransfer.files[0]);
        }
    };

    const handleFileChange = (file) => {
        // Reset previous results
        setConvertedImage(null);
        setError("");
        
        if (!file) return;
        
        // Check if file is an image
        if (!file.type.match('image.*')) {
            setError("Please upload an image file");
            return;
        }
        
        // Check file size (limit to 10MB)
        if (file.size > 10 * 1024 * 1024) {
            setError("File size should be less than 10MB");
            return;
        }
        
        setFileName(file.name);
        setSelectedFile(file);
        
        // Create preview
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreviewImage(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const handleFileSelect = (e) => {
        if (e.target.files && e.target.files[0]) {
            handleFileChange(e.target.files[0]);
        }
    };

    const handleConvert = async () => {
        if (!selectedFile) {
            toast.error("Please select an image to convert");
            return;
        }
        
        setLoading(true);
        setError("");
        
        try {
            const formData = new FormData();
            formData.append('image', selectedFile);
            formData.append('format', targetFormat);
            
            // API call would go here
            // Example:
            // const response = await fetch(`${apiUrl}/api/convert-image`, {
            //     method: "POST",
            //     body: formData,
            // });
            
            // if (!response.ok) {
            //     throw new Error("Failed to convert image");
            // }
            
            // const data = await response.json();
            // setConvertedImage(data.imageUrl);
            
            // For now, we'll simulate a successful conversion after 2 seconds
            setTimeout(() => {
                // Simulate converted image (using original for demo)
                setConvertedImage(previewImage);
                toast.success(`Image successfully converted to ${targetFormat.toUpperCase()}`);
                setLoading(false);
            }, 2000);
            
        } catch (error) {
            console.error("Error converting image:", error);
            toast.error("Error converting image. Please try again.");
            setError("Failed to convert the image. Please try again.");
            setLoading(false);
        }
    };

    const handleDownload = () => {
        if (!convertedImage) return;
        
        const link = document.createElement("a");
        
        // In a real implementation, you'd use the URL from the API response
        link.href = convertedImage;
        
        // Create a new filename with the target format extension
        const originalName = fileName.substring(0, fileName.lastIndexOf('.')) || fileName;
        link.download = `${originalName}.${targetFormat}`;
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const resetConverter = () => {
        setSelectedFile(null);
        setPreviewImage(null);
        setConvertedImage(null);
        setFileName("");
        setError("");
    };

    return (
        <section className="tool__section section">
            <ToastContainer position="top-right" autoClose={5000} />
            
            <div className="tool__container container">
                <h2 className="section__title">{toolName}</h2>
                <span className="section__subtitle">
                    Convert your images to different formats
                </span>

                <div className="tool__content">
                    {/* First panel - Upload and settings */}
                    <div className="converter__panel">
                        <div 
                            className={`file-upload-area ${dragActive ? 'drag-active' : ''}`}
                            onDragEnter={handleDrag}
                            onDragOver={handleDrag}
                            onDragLeave={handleDrag}
                            onDrop={handleDrop}
                        >
                            <input 
                                type="file" 
                                id="file-upload" 
                                accept="image/*" 
                                className="file-upload-input"
                                onChange={handleFileSelect} 
                            />
                            <label htmlFor="file-upload" className="file-upload-label">
                                <div className="upload-icon">
                                    <i className="uil uil-image-upload"></i>
                                </div>
                                <div className="upload-text">
                                    {previewImage ? fileName : "Drag & drop or click to upload an image"}
                                </div>
                            </label>
                        </div>

                        {previewImage && (
                            <div className="preview-container">
                                <div className="preview-image-container">
                                    <img src={previewImage} alt="Preview" className="preview-image" />
                                </div>
                            </div>
                        )}

                        <div className="converter-options">
                            <div className="option-group">
                                <label htmlFor="format-select" className="option-label">Convert to:</label>
                                <select 
                                    id="format-select" 
                                    value={targetFormat} 
                                    onChange={handleFormatChange}
                                    className="format-select"
                                >
                                    {supportedFormats.map((format) => (
                                        <option key={format.value} value={format.value}>
                                            {format.label}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="converter-actions">
                                <button 
                                    className="button button--flex converter-button"
                                    onClick={handleConvert}
                                    disabled={!selectedFile || loading}
                                >
                                    {loading ? (
                                        <>Converting <div className="button__loader"></div></>
                                    ) : (
                                        <>Convert Image <i className="uil uil-sync"></i></>
                                    )}
                                </button>
                                
                                {selectedFile && (
                                    <button 
                                        className="button button--flex button--light converter-button"
                                        onClick={resetConverter}
                                    >
                                        Reset <i className="uil uil-redo"></i>
                                    </button>
                                )}
                            </div>
                        </div>

                        {error && <div className="error-message">{error}</div>}
                    </div>

                    {/* Second panel - Results */}
                    {convertedImage && (
                        <div className="converter__panel result-panel">
                            <h3 className="result-title">Converted Image</h3>
                            <div className="result-image-container">
                                <img src={convertedImage} alt="Converted" className="result-image" />
                            </div>
                            
                            <div className="result-actions">
                                <button 
                                    className="button button--flex download-button"
                                    onClick={handleDownload}
                                >
                                    Download {targetFormat.toUpperCase()} <i className="uil uil-download-alt"></i>
                                </button>
                                
                                <div className="result-info">
                                    Format: <strong>{targetFormat.toUpperCase()}</strong>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {!convertedImage && (
                    <div className="tool-benefits">
                        <h3 className="tool-benefits-title">Why Use Our Image Converter</h3>
                        <div className="benefits-grid">
                            <div className="benefit-item">
                                <i className="uil uil-check-circle benefit-icon"></i>
                                <h4>Multiple Formats</h4>
                                <p>Convert to PNG, JPG, WEBP, GIF and more</p>
                            </div>
                            <div className="benefit-item">
                                <i className="uil uil-shield-check benefit-icon"></i>
                                <p>Secure Processing</p>
                                <p>Your files are processed securely</p>
                            </div>
                            <div className="benefit-item">
                                <i className="uil uil-bolt benefit-icon"></i>
                                <h4>Fast Conversion</h4>
                                <p>Quick conversions with no waiting</p>
                            </div>
                            <div className="benefit-item">
                                <i className="uil uil-image-check benefit-icon"></i>
                                <h4>Quality Preserved</h4>
                                <p>No loss in image quality during conversion</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ImageConverter;
