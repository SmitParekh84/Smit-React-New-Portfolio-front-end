// front-end/src/components/ResumeAnalyzer/KeywordsPanel.jsx

const KeywordsPanel = ({ missingKeywords }) => {
  if (!missingKeywords || missingKeywords.length === 0) {
    return (
      <div className="keywords-panel">
        <h3 className="keywords-panel__title">Missing Keywords</h3>
        <p className="keywords-panel__empty">No missing keywords — great job!</p>
      </div>
    );
  }

  return (
    <div className="keywords-panel">
      <h3 className="keywords-panel__title">
        <i className="uil uil-tag-alt" /> Missing Keywords
      </h3>
      <p className="keywords-panel__subtitle">Add these to your resume to improve your ATS score:</p>
      <div className="keywords-panel__tags">
        {missingKeywords.map((kw, i) => (
          <span key={i} className="keywords-panel__tag">{kw}</span>
        ))}
      </div>
    </div>
  );
};

export default KeywordsPanel;
