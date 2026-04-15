// front-end/src/components/ResumeAnalyzer/SectionBreakdown.jsx
import { useState } from "react";

const ratingColor = {
  Excellent: "#22c55e",
  Good: "#3b82f6",
  "Needs Improvement": "#f59e0b",
  Missing: "#ef4444",
};

const SectionBreakdown = ({ sectionBreakdown }) => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="section-breakdown">
      <h3 className="section-breakdown__title">
        <i className="uil uil-layers" /> Section Breakdown
      </h3>
      {sectionBreakdown.map((item, i) => (
        <div key={i} className="section-breakdown__item">
          <button
            className="section-breakdown__header"
            onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
            type="button"
          >
            <span className="section-breakdown__section-name">{item.section}</span>
            <span
              className="section-breakdown__rating"
              style={{ color: ratingColor[item.rating] || "#6b7280" }}
            >
              {item.rating}
            </span>
            <i className={`uil ${openIndex === i ? "uil-angle-up" : "uil-angle-down"}`} />
          </button>
          {openIndex === i && (
            <div className="section-breakdown__body">
              <p>{item.comments}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionBreakdown;
