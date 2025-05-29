import React from "react";

const ComparisonSection = () => {
 // Adding styles for row hover effect
  const tableRowHoverStyle = {
    transition: 'background-color 0.3s',
  };
  
  const onRowHover = (e) => {
    e.currentTarget.style.backgroundColor = 'rgba(110, 87, 224, 0.1)';
  };
  
  const onRowLeave = (e) => {
    // Restore original background color based on even/odd row
    const isEven = [...e.currentTarget.parentNode.children].indexOf(e.currentTarget) % 2 === 1;
    e.currentTarget.style.backgroundColor = isEven ? 'rgba(110, 87, 224, 0.05)' : '';
  };

  return (
    <section className="comparison-section metachecker-container">
      <h2>Common Meta Tag Issues and Solutions</h2>
      <div className="comparison-table" style={{ overflow: 'auto', maxWidth: '100%' }}>        <table style={{ width: '100%', borderCollapse: 'collapse', borderRadius: '10px', overflow: 'hidden' }}>
          <thead>
            <tr>
              <th style={{ backgroundColor: 'var(--first-color)', color: 'white', padding: '1rem', textAlign: 'left' }}>Problem</th>
              <th style={{ backgroundColor: 'var(--first-color)', color: 'white', padding: '1rem', textAlign: 'left' }}>Impact</th>
              <th style={{ backgroundColor: 'var(--first-color)', color: 'white', padding: '1rem', textAlign: 'left' }}>Solution</th>
            </tr>
          </thead>          <tbody>
            <tr style={{ backgroundColor: 'rgba(110, 87, 224, 0.05)', ...tableRowHoverStyle }} onMouseEnter={onRowHover} onMouseLeave={onRowLeave}>
              <td style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }}>Duplicate Title Tags</td>
              <td style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }}>Confuses search engines, dilutes ranking potential</td>
              <td style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }}>Create unique title tags for each page that accurately describe the page content</td>
            </tr>            <tr style={{ ...tableRowHoverStyle }} onMouseEnter={onRowHover} onMouseLeave={onRowLeave}>
              <td style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }}>Missing Meta Descriptions</td>
              <td style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }}>Search engines generate snippets, often less compelling</td>
              <td style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }}>Write descriptive meta descriptions with a clear value proposition and call-to-action</td>
            </tr>
            <tr style={{ backgroundColor: 'rgba(110, 87, 224, 0.05)', ...tableRowHoverStyle }} onMouseEnter={onRowHover} onMouseLeave={onRowLeave}>
              <td style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }}>Keyword Stuffing</td>
              <td style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }}>Could trigger spam filters, poor user experience</td>
              <td style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }}>Use keywords naturally and focus on creating compelling, readable meta content</td>
            </tr>
            <tr style={{ ...tableRowHoverStyle }} onMouseEnter={onRowHover} onMouseLeave={onRowLeave}>
              <td style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }}>Too Long/Short Title Tags</td>
              <td style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }}>Truncation in search results, incomplete information</td>
              <td style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }}>Keep title tags between 50-60 characters, prioritizing important information first</td>
            </tr>
            <tr style={{ backgroundColor: 'rgba(110, 87, 224, 0.05)', ...tableRowHoverStyle }} onMouseEnter={onRowHover} onMouseLeave={onRowLeave}>
              <td style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }}>Missing Open Graph Tags</td>
              <td style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }}>Poor display when shared on social media</td>
              <td style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }}>Implement complete Open Graph markup with title, description, image, and URL</td>
            </tr>
            <tr style={{ ...tableRowHoverStyle }} onMouseEnter={onRowHover} onMouseLeave={onRowLeave}>
              <td style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }}>Non-Responsive Meta Viewport</td>
              <td style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }}>Poor mobile experience, negative SEO impact</td>
              <td style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }}>Add proper viewport meta tag to ensure mobile-friendly display</td>
            </tr>
            <tr style={{ backgroundColor: 'rgba(110, 87, 224, 0.05)', ...tableRowHoverStyle }} onMouseEnter={onRowHover} onMouseLeave={onRowLeave}>
              <td style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }}>Generic Meta Content</td>
              <td style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }}>Low click-through rates, missed opportunity</td>
              <td style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }}>Craft unique, specific meta content that addresses user search intent</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ComparisonSection;