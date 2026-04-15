// front-end/src/components/ResumeAnalyzer/ScoreCard.jsx

const getScoreColor = (score) => {
  if (score >= 76) return "#22c55e"; // green
  if (score >= 50) return "#f59e0b"; // yellow
  return "#ef4444"; // red
};

const getScoreLabel = (score) => {
  if (score >= 76) return "Excellent";
  if (score >= 50) return "Good";
  return "Needs Work";
};

const ScoreCard = ({ atsScore }) => {
  const color = getScoreColor(atsScore);
  const label = getScoreLabel(atsScore);

  return (
    <div className="score-card">
      <h3 className="score-card__title">ATS Score</h3>
      <div className="score-card__circle" style={{ borderColor: color }}>
        <span className="score-card__number" style={{ color }}>{atsScore}</span>
        <span className="score-card__out-of">/100</span>
      </div>
      <span className="score-card__label" style={{ color }}>{label}</span>
      <div className="score-card__bar-track">
        <div
          className="score-card__bar-fill"
          style={{ width: `${atsScore}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
};

export default ScoreCard;
