import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ImageConverter.css";

const ImageConverter = ({ toolName, apiUrl }) => {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [previewImages, setPreviewImages] = useState([]);
    const [convertedImages, setConvertedImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [targetFormat, setTargetFormat] = useState("png");
    const [error, setError] = useState("");
    const [dragActive, setDragActive] = useState(false);
    const [isBulkMode, setIsBulkMode] = useState(false);
    const [processingProgress, setProcessingProgress] = useState(0);

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

    const handleModeToggle = () => {
        // Reset states when toggling mode
        setSelectedFiles([]);
        setPreviewImages([]);
        setConvertedImages([]);
        setError("");
        setIsBulkMode(!isBulkMode);
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
        
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            const droppedFiles = Array.from(e.dataTransfer.files);
            
            if (isBulkMode) {
                handleBulkFileChange(droppedFiles);
            } else if (droppedFiles.length > 0) {
                handleSingleFileChange(droppedFiles[0]);
            }
        }
    };

    const validateImageFile = (file) => {
        // Check if file is an image
        if (!file.type.match('image.*')) {
            return "Please upload only image files";
        }
        
        // Check file size (limit to 10MB)
        if (file.size > 10 * 1024 * 1024) {
            return "File size should be less than 10MB";
        }
        
        return null;
    };

    const handleSingleFileChange = (file) => {
        // Reset previous results
        setConvertedImages([]);
        setError("");
        
        if (!file) return;
        
        const errorMsg = validateImageFile(file);
        if (errorMsg) {
            setError(errorMsg);
            return;
        }
        
        setSelectedFiles([file]);
        
        // Create preview
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreviewImages([{
                name: file.name,
                preview: reader.result
            }]);
        };
        reader.readAsDataURL(file);
    };

    const handleBulkFileChange = (files) => {
        // Reset previous results
        setConvertedImages([]);
        setError("");
        
        if (!files || files.length === 0) return;
        
        // Filter only valid image files
        const validFiles = [];
        const validPreviews = [];
        
        // Process each file
        Promise.all(
            files.map(file => {
                return new Promise((resolve) => {
                    const errorMsg = validateImageFile(file);
                    if (!errorMsg) {
                        validFiles.push(file);
                        
                        // Create preview for valid file
                        const reader = new FileReader();
                        reader.onloadend = () => {
                            validPreviews.push({
                                name: file.name,
                                preview: reader.result
                            });
                            resolve();
                        };
                        reader.readAsDataURL(file);
                    } else {
                        resolve();
                    }
                });
            })
        ).then(() => {
            if (validFiles.length === 0) {
                setError("No valid image files selected");
                return;
            }
            
            setSelectedFiles(prev => [...prev, ...validFiles]);
            setPreviewImages(prev => [...prev, ...validPreviews]);
            
            if (validFiles.length !== files.length) {
                toast.warning(`${files.length - validFiles.length} files were skipped as they were not valid images or exceeded size limit`);
            }
        });
    };

    const handleFileSelect = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            const selectedFilesList = Array.from(e.target.files);
            
            if (isBulkMode) {
                handleBulkFileChange(selectedFilesList);
            } else {
                handleSingleFileChange(selectedFilesList[0]);
            }
        }
    };

    const removeFile = (index) => {
        setSelectedFiles(prev => prev.filter((_, i) => i !== index));
        setPreviewImages(prev => prev.filter((_, i) => i !== index));
    };

    const handleConvert = async () => {
        if (selectedFiles.length === 0) {
            toast.error("Please select image(s) to convert");
            return;
        }
        
        setLoading(true);
        setError("");
        setConvertedImages([]);
        setProcessingProgress(0);
        
        try {
            if (isBulkMode) {
                // Process multiple files
                const results = [];
                
                for (let i = 0; i < selectedFiles.length; i++) {
                    // In a real implementation, you'd call your API here
                    // For now, we'll simulate processing
                    await new Promise(resolve => setTimeout(resolve, 1000));
                    
                    results.push({
                        name: selectedFiles[i].name,
                        url: previewImages[i].preview, // In a real app, this would be the converted image URL
                        originalName: selectedFiles[i].name
                    });
                    
                    // Update progress
                    setProcessingProgress(Math.round(((i + 1) / selectedFiles.length) * 100));
                }
                
                setConvertedImages(results);
                toast.success(`${results.length} images converted to ${targetFormat.toUpperCase()}`);
            } else {
                // Process single file
                // In a real implementation, you'd call your API here
                await new Promise(resolve => setTimeout(resolve, 2000));
                
                setConvertedImages([{
                    name: selectedFiles[0].name,
                    url: previewImages[0].preview, // In a real app, this would be the converted image URL
                    originalName: selectedFiles[0].name
                }]);
                
                toast.success(`Image successfully converted to ${targetFormat.toUpperCase()}`);
            }
            
            setLoading(false);
            setProcessingProgress(100);
            
        } catch (error) {
            console.error("Error converting image(s):", error);
            toast.error("Error converting image(s). Please try again.");
            setError("Failed to convert the image(s). Please try again.");
            setLoading(false);
        }
    };

    const handleDownload = (index) => {
        if (!convertedImages[index]) return;
        
        const link = document.createElement("a");
        link.href = convertedImages[index].url;
        
        // Create a new filename with the target format extension
        const originalName = convertedImages[index].originalName;
        const nameWithoutExt = originalName.substring(0, originalName.lastIndexOf('.')) || originalName;
        link.download = `${nameWithoutExt}.${targetFormat}`;
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const downloadAllImages = () => {
        if (convertedImages.length === 0) return;
        
        // For multiple files, create a zip file (this would need a zip library in a real app)
        // For this demo, we'll just download them one by one
        convertedImages.forEach((_, index) => {
            setTimeout(() => {
                handleDownload(index);
            }, index * 500); // Stagger downloads to avoid browser issues
        });
        
        toast.info("Downloading all converted images");
    };

    const resetConverter = () => {
        setSelectedFiles([]);
        setPreviewImages([]);
        setConvertedImages([]);
        setError("");
        setProcessingProgress(0);
    };

    return (
        <section className="tool__section section">
            <ToastContainer position="top-right" autoClose={5000} />
            
            <div className="tool__container container">
                <h2 className="section__title">{toolName}</h2>
                <span className="section__subtitle">
                    Convert your images to different formats
                </span>

                {/* Mode Toggle */}
                <div className="mode-toggle">
                    <button 
                        className={`mode-toggle-btn ${!isBulkMode ? 'active' : ''}`} 
                        onClick={() => !isBulkMode || handleModeToggle()}
                    >
                        <i className="uil uil-image"></i> Single File
                    </button>
                    <button 
                        className={`mode-toggle-btn ${isBulkMode ? 'active' : ''}`} 
                        onClick={() => isBulkMode || handleModeToggle()}
                    >
                        <i className="uil uil-images"></i> Bulk Converter
                    </button>
                </div>

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
                                multiple={isBulkMode} 
                            />
                            <label htmlFor="file-upload" className="file-upload-label">
                                <div className="upload-icon">
                                    <i className={`uil ${isBulkMode ? 'uil-images' : 'uil-image-upload'}`}></i>
                                </div>
                                <div className="upload-text">
                                    {isBulkMode 
                                        ? `Drag & drop or click to upload multiple images (${selectedFiles.length} selected)`
                                        : previewImages.length > 0 ? previewImages[0].name : "Drag & drop or click to upload an image"
                                    }
                                </div>
                            </label>
                        </div>

                        {/* Preview area */}
                        {isBulkMode && previewImages.length > 0 ? (
                            <div className="bulk-preview-container">
                                <h3 className="bulk-preview-title">Selected Images ({previewImages.length})</h3>
                                <div className="bulk-preview-grid">
                                    {previewImages.map((img, index) => (
                                        <div className="bulk-preview-item" key={index}>
                                            <img 
                                                src={img.preview} 
                                                alt={`Preview ${index}`} 
                                                className="bulk-preview-image" 
                                            />
                                            <div className="bulk-preview-info">
                                                <span className="bulk-preview-name">{img.name}</span>
                                                <button 
                                                    className="bulk-preview-remove"
                                                    onClick={() => removeFile(index)}
                                                >
                                                    <i className="uil uil-times"></i>
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (!isBulkMode && previewImages.length > 0) && (
                            <div className="preview-container">
                                <div className="preview-image-container">
                                    <img 
                                        src={previewImages[0].preview} 
                                        alt="Preview" 
                                        className="preview-image" 
                                    />
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
                                    disabled={selectedFiles.length === 0 || loading}
                                >
                                    {loading ? (
                                        <>Converting {isBulkMode && `(${processingProgress}%)`} <div className="button__loader"></div></>
                                    ) : (
                                        <>Convert {isBulkMode ? "All Images" : "Image"} <i className="uil uil-sync"></i></>
                                    )}
                                </button>
                                
                                {selectedFiles.length > 0 && (
                                    <button 
                                        className="button button--flex button--light converter-button"
                                        onClick={resetConverter}
                                    >
                                        Reset <i className="uil uil-redo"></i>
                                    </button>
                                )}
                            </div>
                        </div>

                        {loading && isBulkMode && (
                            <div className="progress-bar-container">
                                <div 
                                    className="progress-bar" 
                                    style={{ width: `${processingProgress}%` }}
                                ></div>
                            </div>
                        )}

                        {error && <div className="error-message">{error}</div>}
                    </div>

                    {/* Results panel */}
                    {convertedImages.length > 0 && (
                        <div className="converter__panel result-panel">
                            <h3 className="result-title">
                                {isBulkMode 
                                    ? `Converted Images (${convertedImages.length})` 
                                    : "Converted Image"
                                }
                            </h3>

                            {/* For bulk mode, show grid of results */}
                            {isBulkMode ? (
                                <>
                                    <div className="result-actions bulk-result-actions">
                                        <button 
                                            className="button button--flex download-all-button"
                                            onClick={downloadAllImages}
                                        >
                                            Download All {targetFormat.toUpperCase()} <i className="uil uil-download-alt"></i>
                                        </button>
                                        <div className="result-info">
                                            Format: <strong>{targetFormat.toUpperCase()}</strong>
                                        </div>
                                    </div>

                                    <div className="bulk-result-grid">
                                        {convertedImages.map((img, index) => (
                                            <div className="bulk-result-item" key={index}>
                                                <div className="bulk-result-image-container">
                                                    <img 
                                                        src={img.url} 
                                                        alt={`Converted ${index}`} 
                                                        className="bulk-result-image" 
                                                    />
                                                </div>
                                                <div className="bulk-result-info">
                                                    <span className="bulk-result-name">
                                                        {img.name.substring(0, img.name.lastIndexOf('.')) || img.name}.{targetFormat}
                                                    </span>
                                                    <button 
                                                        className="bulk-result-download"
                                                        onClick={() => handleDownload(index)}
                                                    >
                                                        <i className="uil uil-download-alt"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            ) : (
                                // Single mode result display
                                <>
                                    <div className="result-image-container">
                                        <img 
                                            src={convertedImages[0].url} 
                                            alt="Converted" 
                                            className="result-image" 
                                        />
                                    </div>
                                    
                                    <div className="result-actions">
                                        <button 
                                            className="button button--flex download-button"
                                            onClick={() => handleDownload(0)}
                                        >
                                            Download {targetFormat.toUpperCase()} <i className="uil uil-download-alt"></i>
                                        </button>
                                        
                                        <div className="result-info">
                                            Format: <strong>{targetFormat.toUpperCase()}</strong>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    )}
                </div>

                {/* Benefits section */}
                {convertedImages.length === 0 && (
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
                                <h4>Secure Processing</h4>
                                <p>Your files are processed securely</p>
                            </div>
                            <div className="benefit-item">
                                <i className="uil uil-bolt benefit-icon"></i>
                                <h4>Fast Conversion</h4>
                                <p>Quick conversions with no waiting</p>
                            </div>
                            <div className="benefit-item">
                                <i className="uil uil-images benefit-icon"></i>
                                <h4>Bulk Conversion</h4>
                                <p>Convert multiple images at once</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ImageConverter;
