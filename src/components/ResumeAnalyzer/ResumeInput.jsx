// front-end/src/components/ResumeAnalyzer/ResumeInput.jsx
import { useState, useRef } from "react";

const ResumeInput = ({ onResumeTextChange, onFileChange, onJobDescriptionChange }) => {
  const [activeTab, setActiveTab] = useState("paste"); // "paste" | "upload"
  const [dragOver, setDragOver] = useState(false);
  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef(null);

  const handleFileSelect = (file) => {
    if (!file) return;
    setFileName(file.name);
    onFileChange(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    handleFileSelect(file);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    // Reset both inputs when switching tabs
    onResumeTextChange("");
    onFileChange(null);
    setFileName("");
  };

  return (
    <div className="resume-input">
      {/* Tab switcher */}
      <div className="resume-input__tabs">
        <button
          className={`resume-input__tab ${activeTab === "paste" ? "active" : ""}`}
          onClick={() => handleTabChange("paste")}
          type="button"
        >
          <i className="uil uil-clipboard-alt" /> Paste Text
        </button>
        <button
          className={`resume-input__tab ${activeTab === "upload" ? "active" : ""}`}
          onClick={() => handleTabChange("upload")}
          type="button"
        >
          <i className="uil uil-upload" /> Upload File
        </button>
      </div>

      {/* Paste text panel */}
      {activeTab === "paste" && (
        <textarea
          className="resume-input__textarea"
          placeholder="Paste your resume text here..."
          rows={12}
          onChange={(e) => onResumeTextChange(e.target.value)}
        />
      )}

      {/* Upload file panel */}
      {activeTab === "upload" && (
        <div
          className={`resume-input__dropzone ${dragOver ? "drag-over" : ""}`}
          onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current.click()}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,.doc,.docx"
            style={{ display: "none" }}
            onChange={(e) => handleFileSelect(e.target.files[0])}
          />
          {fileName ? (
            <p className="resume-input__filename"><i className="uil uil-check-circle" /> {fileName}</p>
          ) : (
            <>
              <i className="uil uil-file-upload-alt resume-input__upload-icon" />
              <p>Drag & drop your PDF or DOCX here, or <span className="resume-input__link">browse</span></p>
              <p className="resume-input__hint">Max 5 MB</p>
            </>
          )}
        </div>
      )}

      {/* Optional Job Description */}
      <div className="resume-input__jd">
        <label className="resume-input__label">
          Job Description <span className="resume-input__optional">(optional — improves keyword matching)</span>
        </label>
        <textarea
          className="resume-input__textarea resume-input__textarea--jd"
          placeholder="Paste the job description here..."
          rows={5}
          onChange={(e) => onJobDescriptionChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default ResumeInput;
