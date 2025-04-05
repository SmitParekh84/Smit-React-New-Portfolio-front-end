import React, { useState, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ImageCompressor.css";

const ImageCompressor = ({ toolName, apiUrl }) => {
    const [images, setImages] = useState([]);
    const [compressedImages, setCompressedImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [quality, setQuality] = useState(80);
    const [totalSaved, setTotalSaved] = useState(0);
    const [bulkMode, setBulkMode] = useState(true);
    const fileInputRef = useRef(null);

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        if (e.dataTransfer.files) {
            handleFiles(e.dataTransfer.files);
        }
    };

    const handleFileChange = (e) => {
        if (e.target.files) {
            handleFiles(e.target.files);
        }
    };

    const handleFiles = (files) => {
        const validImageTypes = ["image/jpeg", "image/png", "image/webp", "image/jpg"];
        const maxFileSize = 10 * 1024 * 1024; // 10MB
        const imageFiles = Array.from(files);
        
        const validImages = imageFiles.filter(file => {
            const isValidType = validImageTypes.includes(file.type);
            const isValidSize = file.size <= maxFileSize;
            
            if (!isValidType) {
                toast.error(`${file.name} is not a supported image type. Please use JPG, PNG or WEBP.`);
                return false;
            }
            
            if (!isValidSize) {
                toast.error(`${file.name} exceeds the 10MB limit.`);
                return false;
            }
            
            return true;
        }).map(file => ({
            file,
            id: Math.random().toString(36).substring(2),
            name: file.name,
            size: file.size,
            type: file.type,
            preview: URL.createObjectURL(file),
            compressed: false
        }));
        
        if (validImages.length) {
            setImages(prev => [...prev, ...validImages]);
        }
    };

    const compressImages = async () => {
        if (images.length === 0) {
            toast.error("Please add images to compress");
            return;
        }
        
        setLoading(true);
        const compressedResults = [];
        let totalSizeReduction = 0;
        
        try {
            const uncompressedImages = images.filter(img => !img.compressed);
            
            if (uncompressedImages.length === 0) {
                toast.info("All images are already compressed");
                setLoading(false);
                return;
            }

            if (bulkMode && uncompressedImages.length > 1) {
                const formData = new FormData();
                uncompressedImages.forEach(img => {
                    formData.append('images', img.file);
                });
                formData.append('quality', quality);
                
                const response = await fetch(`${apiUrl}/compress-bulk`, {
                    method: 'POST',
                    body: formData
                });
                
                if (!response.ok) {
                    throw new Error("Failed to compress images in bulk");
                }
                
                const result = await response.json();
                
                if (!result.data || !Array.isArray(result.data)) {
                    throw new Error("Invalid response format from server");
                }
                
                const compressedData = result.data;
                
                for (const img of uncompressedImages) {
                    const matchingResult = compressedData.find(item => item.originalName === img.name);
                    
                    if (!matchingResult) {
                        console.error(`No compressed data found for ${img.name}`);
                        continue;
                    }
                    
                    const compressedImageBase64 = matchingResult.compressedImage;
                    if (!compressedImageBase64) {
                        console.error(`Missing compressed image data for ${img.name}`);
                        continue;
                    }
                    
                    const byteString = atob(compressedImageBase64.split(',')[1]);
                    const ab = new ArrayBuffer(byteString.length);
                    const ia = new Uint8Array(ab);
                    
                    for (let i = 0; i < byteString.length; i++) {
                        ia[i] = byteString.charCodeAt(i);
                    }
                    
                    const blob = new Blob([ab], { type: img.type });
                    
                    const compressedSize = matchingResult.compressedSize;
                    const sizeReduction = img.size - compressedSize;
                    totalSizeReduction += sizeReduction;
                    
                    compressedResults.push({
                        ...img,
                        compressed: true,
                        compressedSize,
                        sizeReduction,
                        compressionRatio: matchingResult.compressionPercentage.replace('%', ''),
                        compressedUrl: URL.createObjectURL(blob),
                        blob
                    });
                }
            } else {
                for (const img of uncompressedImages) {
                    const formData = new FormData();
                    formData.append('image', img.file);
                    formData.append('quality', quality);
                    
                    const response = await fetch(`${apiUrl}/compress`, {
                        method: 'POST',
                        body: formData
                    });
                    
                    if (!response.ok) {
                        throw new Error(`Failed to compress ${img.name}`);
                    }
                    
                    const blob = await response.blob();
                    const compressedSize = blob.size;
                    const sizeReduction = img.size - compressedSize;
                    totalSizeReduction += sizeReduction;
                    
                    compressedResults.push({
                        ...img,
                        compressed: true,
                        compressedSize,
                        sizeReduction,
                        compressionRatio: ((1 - (compressedSize / img.size)) * 100).toFixed(2),
                        compressedUrl: URL.createObjectURL(blob),
                        blob
                    });
                }
            }
            
            setCompressedImages(prev => [...prev, ...compressedResults]);
            setTotalSaved((prev) => prev + totalSizeReduction);
            
            setImages(prev => 
                prev.map(img => {
                    const compressed = compressedResults.find(c => c.id === img.id);
                    return compressed || img;
                })
            );
            
            toast.success("Images compressed successfully!");
        } catch (error) {
            console.error("Compression error:", error);
            toast.error("Error compressing images. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const downloadImage = (image) => {
        const link = document.createElement('a');
        link.href = image.compressedUrl;
        link.download = `compressed-${image.name}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const downloadAll = () => {
        if (compressedImages.length === 0) {
            toast.error("No compressed images to download");
            return;
        }
        compressedImages.forEach(image => {
            downloadImage(image);
        });
        toast.success("All images downloaded!");
    };
    
    const removeImage = (id) => {
        setImages(prev => prev.filter(img => img.id !== id));
        setCompressedImages(prev => prev.filter(img => img.id !== id));
    };
    
    const removeAllImages = () => {
        setImages([]);
        setCompressedImages([]);
    };
    
    const formatSize = (bytes) => {
        if (bytes < 1024) return bytes + " B";
        else if (bytes < 1048576) return (bytes / 1024).toFixed(2) + " KB";
        else return (bytes / 1048576).toFixed(2) + " MB";
    };
    
    return (
        <div className="image-compressor section">
            <ToastContainer position="top-center" />
            <h2 className="section__title">{toolName || "Image Compressor"}</h2>
            <span className="section__subtitle">Reduce image file size while maintaining quality</span>
            
            <div className="image-compressor__container container">
                <div 
                    className="image-compressor__upload-area"
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current.click()}
                >
                    <input 
                        type="file" 
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        multiple
                        accept="image/jpeg,image/png,image/webp,image/jpg"
                        style={{ display: 'none' }}
                    />
                    <div className="image-compressor__upload-content">
                        <i className="uil uil-import image-compressor__upload-icon"></i>
                        <p>Drag & drop images here or click to browse</p>
                        <span>Supports JPG, PNG, and WEBP (max 10MB each)</span>
                    </div>
                </div>
                <div className="image-compressor__settings">
                    <h3 className="image-compressor__settings-title">Compression Settings</h3>
                    <div className="image-compressor__slider-container">
                        <label htmlFor="quality">Quality: {quality}%</label>
                        <input 
                            type="range" 
                            id="quality"
                            name="quality"
                            min="40"
                            max="95"
                            step="1"
                            value={quality}
                            onChange={(e) => setQuality(parseInt(e.target.value))}
                            className="image-compressor__slider"
                        />
                        <div className="image-compressor__slider-labels">
                            <span>Smaller file</span>
                            <span>Better quality</span>
                        </div>
                    </div>
                    <div className="image-compressor__toggle-container">
                        <label htmlFor="bulkMode" className="image-compressor__toggle-label">
                            Bulk Processing Mode:
                            <input
                                type="checkbox"
                                id="bulkMode"
                                checked={bulkMode}
                                onChange={() => setBulkMode(!bulkMode)}
                                className="image-compressor__toggle-checkbox"
                            />
                            <span className="image-compressor__toggle-switch"></span>
                        </label>
                        <p className="image-compressor__toggle-description">
                            {bulkMode 
                                ? "Process multiple images in a single request (faster)" 
                                : "Process each image individually (more reliable)"}
                        </p>
                    </div>
                    <div className="image-compressor__buttons">
                        <button 
                            className="button button--flex image-compressor__button"
                            onClick={compressImages}
                            disabled={loading || images.length === 0}
                        >
                            {loading ? (
                                <>Processing... <div className="image-compressor__spinner"></div></>
                            ) : (
                                <>Compress Images <i className="uil uil-compress image-compressor__button-icon"></i></>
                            )}
                        </button>
                        <button 
                            className="button button--outline button--flex image-compressor__button"
                            onClick={removeAllImages}
                            disabled={loading || images.length === 0}
                        >
                            Clear All <i className="uil uil-trash-alt image-compressor__button-icon"></i>
                        </button>
                    </div>
                </div>
                {images.length > 0 && (
                    <div className="image-compressor__preview">
                        <h3 className="image-compressor__preview-title">
                            Images ({images.length})
                            {totalSaved > 0 && (
                                <span className="image-compressor__total-saved">
                                    Total Saved: {formatSize(totalSaved)}
                                </span>
                            )}
                        </h3>
                        <div className="image-compressor__grid">
                            {images.map((image) => (
                                <div className="image-compressor__item" key={image.id}>
                                    <div className="image-compressor__item-header">
                                        <span className="image-compressor__item-name">{image.name}</span>
                                        <button 
                                            className="image-compressor__item-remove"
                                            onClick={() => removeImage(image.id)}
                                        >
                                            <i className="uil uil-times"></i>
                                        </button>
                                    </div>
                                    <div className="image-compressor__item-preview">
                                        <img src={image.preview} alt={image.name} />
                                    </div>
                                    
                                    <div className="image-compressor__item-details">
                                        <div className="image-compressor__item-size">
                                            <span>Original: {formatSize(image.size)}</span>
                                            {image.compressed && (
                                                <span>Compressed: {formatSize(image.compressedSize)}</span>
                                            )}
                                        </div>
                                        
                                        {image.compressed && (
                                            <div className="image-compressor__item-saved">
                                                <span>Saved: {formatSize(image.sizeReduction)} ({image.compressionRatio}%)</span>
                                                <button 
                                                    className="button button--small button--flex"
                                                    onClick={() => downloadImage(image)}
                                                >
                                                    Download <i className="uil uil-download-alt"></i>
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                        {compressedImages.length > 0 && (
                            <div className="image-compressor__download-all">
                                <button 
                                    className="button button--flex"
                                    onClick={downloadAll}
                                >
                                    Download All Files <i className="uil uil-download-alt"></i>
                                </button>
                            </div>
                        )}
                    </div>
                )}
                <div className="image-compressor__features">
                    <h3 className="image-compressor__features-title">Tool Features</h3>
                    <div className="image-compressor__features-grid">
                        <div className="image-compressor__feature">
                            <i className="uil uil-compress-alt image-compressor__feature-icon"></i>
                            <h4>Smart Compression</h4>
                            <p>Reduce image size while maintaining visual quality for web and social media.</p>
                        </div>
                        <div className="image-compressor__feature">
                            <i className="uil uil-bolt image-compressor__feature-icon"></i>
                            <h4>Fast Processing</h4>
                            <p>Compress multiple images quickly with our optimized processing engine.</p>
                        </div>
                        <div className="image-compressor__feature">
                            <i className="uil uil-shield-check image-compressor__feature-icon"></i>
                            <h4>Privacy First</h4>
                            <p>Your images are processed securely and not stored on our servers.</p>
                        </div>
                        <div className="image-compressor__feature">
                            <i className="uil uil-dollar-sign-alt image-compressor__feature-icon"></i>
                            <h4>Completely Free</h4>
                            <p>No watermarks, no signup required, no limits on usage.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageCompressor;
