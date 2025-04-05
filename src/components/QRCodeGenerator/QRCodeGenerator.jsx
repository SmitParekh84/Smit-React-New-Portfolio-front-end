import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./QRCodeGenerator.css";

const QRCodeGenerator = ({ apiUrl, toolName }) => {
    const [content, setContent] = useState("");
    const [qrSize, setQrSize] = useState(200);
    const [qrColor, setQrColor] = useState("#000000");
    const [bgColor, setBgColor] = useState("#ffffff");
    const [qrType, setQrType] = useState("url");
    const [generatedQR, setGeneratedQR] = useState("");
    const [loading, setLoading] = useState(false);
    const [showOptions, setShowOptions] = useState(false);

    // URL validation
    const isValidUrl = (string) => {
        try {
            new URL(string);
            return true;
        } catch (_) {
            return false;
        }
    };

    // Generate QR code
    const handleGenerateQR = async () => {
        if (!content.trim()) {
            toast.error("Please enter content for the QR code");
            return;
        }

        // Validate URL if type is URL
        if (qrType === "url" && !isValidUrl(content)) {
            toast.error("Please enter a valid URL (including http:// or https://)");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch(`${apiUrl}/generate-qr`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    content,
                    size: qrSize,
                    color: qrColor.replace("#", ""),
                    backgroundColor: bgColor.replace("#", ""),
                    type: qrType
                }),
            });

            if (!response.ok) {
                const errorData = await response.text();
                console.error("Server error response:", errorData);
                throw new Error(`Failed to generate QR code: ${response.status}`);
            }

            const data = await response.json();
            console.log("QR code response:", data); // Debug the response
            
            // Check for qrCodeDataUrl instead of qrCodeUrl
            if (data.qrCodeDataUrl) {
                setGeneratedQR(data.qrCodeDataUrl);
                toast.success("QR code generated successfully!");
            } else if (data.qrCodeUrl) {
                setGeneratedQR(data.qrCodeUrl);
                toast.success("QR code generated successfully!");
            } else {
                throw new Error("QR code URL not found in response");
            }
        } catch (error) {
            console.error("Error generating QR code:", error);
            toast.error(`Failed to generate QR code: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    // Download QR code
    const handleDownloadQR = () => {
        if (!generatedQR) {
            toast.error("No QR code to download");
            return;
        }

        const link = document.createElement("a");
        link.href = generatedQR;
        link.download = `qr-code-${Date.now()}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // Get direct image URL for download
    const getDirectImageUrl = () => {
        if (!content.trim()) return null;
        
        try {
            const params = new URLSearchParams({
                content,
                size: qrSize,
                color: qrColor.replace("#", ""),
                backgroundColor: bgColor.replace("#", ""),
                type: qrType
            });
            
            const directUrl = `${apiUrl}/generate-qr-image?${params.toString()}`;
            console.log("Direct image URL:", directUrl); // Debug the URL
            return directUrl;
        } catch (error) {
            console.error("Error generating direct image URL:", error);
            return null;
        }
    };

    // Template suggestions for QR content
    const contentPlaceholder = {
        url: "https://example.com",
        text: "Hello world!",
        email: "example@domain.com",
        phone: "+1234567890",
        sms: "+1234567890",
        wifi: "SSID: MyWifi\nPassword: MyPassword\nEncryption: WPA",
        contact: "Name: John Doe\nPhone: +1234567890\nEmail: john@example.com"
    };

    return (
        <section className="section container">
            <ToastContainer position="top-right" />
            
            <div className="qr-generator">
                <div className="qr-header">
                    <h2>{toolName || "Free Lifetime QR Code Generator"}</h2>
                    <p>Create permanent, free QR codes that never expire for your website, business card, or marketing materials</p>
                </div>

                <div className="qr-container">
                    <div className="qr-form">
                        <div className="form-group">
                            <label>QR Code Type</label>
                            <select 
                                value={qrType} 
                                onChange={(e) => setQrType(e.target.value)}
                                className="qr-select"
                            >
                                <option value="url">URL</option>
                                <option value="text">Plain Text</option>
                                <option value="email">Email Address</option>
                                <option value="phone">Phone Number</option>
                                <option value="sms">SMS</option>
                                <option value="wifi">WiFi Network</option>
                                <option value="contact">Contact Information</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Content</label>
                            <textarea
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                placeholder={contentPlaceholder[qrType] || "Enter content for your QR code"}
                                className="qr-input"
                                rows={qrType === "wifi" || qrType === "contact" ? 4 : 2}
                            />
                        </div>

                        <div className="qr-options-toggle" onClick={() => setShowOptions(!showOptions)}>
                            <span>{showOptions ? "Hide" : "Show"} Customization Options</span>
                            <i className={`uil uil-angle-${showOptions ? "up" : "down"}`}></i>
                        </div>

                        {showOptions && (
                            <div className="qr-options">
                                <div className="form-group">
                                    <label>QR Code Size (px)</label>
                                    <input
                                        type="range"
                                        min="100"
                                        max="500"
                                        value={qrSize}
                                        onChange={(e) => setQrSize(parseInt(e.target.value))}
                                        className="qr-range"
                                    />
                                    <span className="range-value">{qrSize}px</span>
                                </div>

                                <div className="form-group color-group">
                                    <label>QR Code Color</label>
                                    <div className="color-input-container">
                                        <input
                                            type="color"
                                            value={qrColor}
                                            onChange={(e) => setQrColor(e.target.value)}
                                            className="color-input"
                                        />
                                        <span className="color-value">{qrColor}</span>
                                    </div>
                                </div>

                                <div className="form-group color-group">
                                    <label>Background Color</label>
                                    <div className="color-input-container">
                                        <input
                                            type="color"
                                            value={bgColor}
                                            onChange={(e) => setBgColor(e.target.value)}
                                            className="color-input"
                                        />
                                        <span className="color-value">{bgColor}</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="qr-buttons">
                            <button
                                onClick={handleGenerateQR}
                                className="qr-button primary-button"
                                disabled={loading || !content.trim()}
                            >
                                {loading ? 'Generating...' : 'Generate QR Code'}
                                {!loading && <i className="uil uil-qrcode-scan"></i>}
                            </button>
                        </div>
                    </div>

                    <div className="qr-preview">
                        <div className="qr-preview-container" style={{ backgroundColor: bgColor }}>
                            {generatedQR ? (
                                <img
                                    src={generatedQR}
                                    alt="Generated QR Code"
                                    className="qr-image"
                                    onError={(e) => {
                                        console.error("Error loading QR code image:", e);
                                        toast.error("Failed to load QR code image");
                                        e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%23f0f0f0'/%3E%3Ctext x='50%' y='50%' font-family='Arial' font-size='12' text-anchor='middle' dominant-baseline='middle' fill='%23999'%3EImage Error%3C/text%3E%3C/svg%3E";
                                    }}
                                />
                            ) : (
                                <div className="qr-placeholder">
                                    <i className="uil uil-qrcode-scan"></i>
                                    <p>Your QR code will appear here</p>
                                </div>
                            )}
                        </div>

                        {generatedQR && (
                            <div className="qr-download">
                                <button
                                    onClick={handleDownloadQR}
                                    className="qr-button secondary-button"
                                >
                                    Download QR Code
                                    <i className="uil uil-download-alt"></i>
                                </button>
                                <a 
                                    href={getDirectImageUrl()}
                                    download={`qr-code-${Date.now()}.png`}
                                    className="qr-button outline-button"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Direct Image Link
                                    <i className="uil uil-link"></i>
                                </a>
                            </div>
                        )}
                    </div>
                </div>

                <div className="qr-instructions">
                    <h3>How to use this Free Lifetime QR Code Generator</h3>
                    <ol>
                        <li>Select the type of QR code you want to create (URL, text, email, etc.)</li>
                        <li>Enter the content for your permanent QR code</li>
                        <li>Customize your QR code's appearance (optional)</li>
                        <li>Click "Generate QR Code"</li>
                        <li>Download your free QR code that never expires</li>
                    </ol>
                    <div className="qr-benefits">
                        <h4>Benefits of our Free QR Code Generator:</h4>
                        <ul>
                            <li><strong>100% Free Forever</strong> - No hidden fees or subscriptions</li>
                            <li><strong>Lifetime QR Codes</strong> - Your QR codes never expire</li>
                            <li><strong>No Sign-up Required</strong> - Generate QR codes instantly</li>
                            <li><strong>No Watermarks</strong> - Clean, professional QR codes</li>
                            <li><strong>Fully Customizable</strong> - Change colors and size to match your brand</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QRCodeGenerator;
