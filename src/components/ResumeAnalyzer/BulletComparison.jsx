// front-end/src/components/ResumeAnalyzer/BulletComparison.jsx
import { useState } from "react";
import { toast } from "react-toastify";

const BulletComparison = ({ rewrittenBullets }) => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (text, i) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIndex(i);
      toast.success("Copied to clipboard!");
      setTimeout(() => setCopiedIndex(null), 2000);
    });
  };

  if (!rewrittenBullets || rewrittenBullets.length === 0) return null;

  return (
    <div className="bullet-comparison">
      <h3 className="bullet-comparison__title">
        <i className="uil uil-edit-alt" /> Improved Bullet Points
      </h3>
      <p className="bullet-comparison__subtitle">Side-by-side: your original vs AI-improved versions</p>
      {rewrittenBullets.map((item, i) => (
        <div key={i} className="bullet-comparison__pair">
          <div className="bullet-comparison__column bullet-comparison__column--original">
            <span className="bullet-comparison__col-label">Original</span>
            <p>{item.original}</p>
          </div>
          <div className="bullet-comparison__column bullet-comparison__column--improved">
            <span className="bullet-comparison__col-label">Improved</span>
            <p>{item.rewritten}</p>
            <button
              className="bullet-comparison__copy-btn"
              onClick={() => handleCopy(item.rewritten, i)}
              type="button"
            >
              <i className={`uil ${copiedIndex === i ? "uil-check" : "uil-copy"}`} />
              {copiedIndex === i ? "Copied" : "Copy"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BulletComparison;
