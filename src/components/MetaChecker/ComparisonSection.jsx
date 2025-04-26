import React from "react";

const ComparisonSection = () => {
  return (
    <section className="comparison-section metachecker-container">
      <h2>Common Meta Tag Issues and Solutions</h2>
      <div className="comparison-table">
        <table>
          <thead>
            <tr>
              <th>Problem</th>
              <th>Impact</th>
              <th>Solution</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Duplicate Title Tags</td>
              <td>Confuses search engines, dilutes ranking potential</td>
              <td>Create unique title tags for each page that accurately describe the page content</td>
            </tr>
            <tr>
              <td>Missing Meta Descriptions</td>
              <td>Search engines generate snippets, often less compelling</td>
              <td>Write descriptive meta descriptions with a clear value proposition and call-to-action</td>
            </tr>
            <tr>
              <td>Keyword Stuffing</td>
              <td>Could trigger spam filters, poor user experience</td>
              <td>Use keywords naturally and focus on creating compelling, readable meta content</td>
            </tr>
            <tr>
              <td>Too Long/Short Title Tags</td>
              <td>Truncation in search results, incomplete information</td>
              <td>Keep title tags between 50-60 characters, prioritizing important information first</td>
            </tr>
            <tr>
              <td>Missing Open Graph Tags</td>
              <td>Poor display when shared on social media</td>
              <td>Implement complete Open Graph markup with title, description, image, and URL</td>
            </tr>
            <tr>
              <td>Non-Responsive Meta Viewport</td>
              <td>Poor mobile experience, negative SEO impact</td>
              <td>Add proper viewport meta tag to ensure mobile-friendly display</td>
            </tr>
            <tr>
              <td>Generic Meta Content</td>
              <td>Low click-through rates, missed opportunity</td>
              <td>Craft unique, specific meta content that addresses user search intent</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ComparisonSection;