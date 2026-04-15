// front-end/src/components/ResumeAnalyzer/ResumeAnalyzer.jsx
import { useState } from "react";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ResumeInput from "./ResumeInput";
import ScoreCard from "./ScoreCard";
import KeywordsPanel from "./KeywordsPanel";
import SectionBreakdown from "./SectionBreakdown";
import BulletComparison from "./BulletComparison";
import "./ResumeAnalyzer.css";

const ResumeAnalyzer = () => {
  const [resumeText, setResumeText] = useState("");
  const [resumeFile, setResumeFile] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const apiUrl = import.meta.env.VITE_API_URL;

  const handleAnalyze = async () => {
    setError("");
    setResult(null);

    if (!resumeText && !resumeFile) {
      setError("Please paste your resume text or upload a PDF/DOCX file.");
      return;
    }

    setLoading(true);

    try {
      let response;

      if (resumeFile) {
        // File upload — use FormData
        const formData = new FormData();
        formData.append("resumeFile", resumeFile);
        if (jobDescription) formData.append("jobDescription", jobDescription);

        response = await axios.post(`${apiUrl}/api/resume/analyze`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        // Paste text — use JSON
        response = await axios.post(`${apiUrl}/api/resume/analyze`, {
          resumeText,
          jobDescription,
        });
      }

      setResult(response.data);
    } catch (err) {
      const msg = err.response?.data?.error || "Something went wrong. Please try again.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="resume-analyzer">
      <ToastContainer position="bottom-right" autoClose={2000} />

      <ResumeInput
        onResumeTextChange={setResumeText}
        onFileChange={setResumeFile}
        onJobDescriptionChange={setJobDescription}
      />

      <button
        className="resume-analyzer__btn"
        onClick={handleAnalyze}
        disabled={loading}
        type="button"
      >
        {loading ? (
          <><i className="uil uil-spinner-alt" /> Analyzing...</>
        ) : (
          <><i className="uil uil-search" /> Analyze Resume</>
        )}
      </button>

      {error && <p className="resume-analyzer__error"><i className="uil uil-exclamation-circle" /> {error}</p>}

      {result && (
        <div className="resume-analyzer__results" style={{ marginTop: "2rem" }}>
          <ScoreCard atsScore={result.atsScore} />
          <KeywordsPanel missingKeywords={result.missingKeywords} />
          <SectionBreakdown sectionBreakdown={result.sectionBreakdown} />
          <BulletComparison rewrittenBullets={result.rewrittenBullets} />
        </div>
      )}
    </div>
  );
};

export default ResumeAnalyzer;
