import React from "react";

const MetaTypesSection = () => {
  return (
    <section className="types-section metachecker-container">
      <h2>Essential Meta Tags for SEO Optimization</h2>
      <div className="meta-types-table">
        <table>
          <thead>
            <tr>
              <th>Meta Tag Type</th>
              <th>Purpose</th>
              <th>Optimal Length</th>
              <th>Impact on SEO</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Title Tag</td>
              <td>Displays as the clickable headline in search results</td>
              <td>50-60 characters</td>
              <td>High - Direct ranking factor</td>
            </tr>
            <tr>
              <td>Meta Description</td>
              <td>Provides a summary of page content in search results</td>
              <td>150-160 characters</td>
              <td>Medium - Impacts click-through rates</td>
            </tr>
            <tr>
              <td>Open Graph Tags</td>
              <td>Controls how content appears when shared on Facebook, LinkedIn</td>
              <td>Varies by platform</td>
              <td>Medium - Improves social engagement</td>
            </tr>
            <tr>
              <td>Twitter Cards</td>
              <td>Controls appearance when shared on Twitter</td>
              <td>Varies by card type</td>
              <td>Medium - Improves social visibility</td>
            </tr>
            <tr>
              <td>Canonical Tag</td>
              <td>Prevents duplicate content issues</td>
              <td>Full URL</td>
              <td>High - Resolves duplicate content</td>
            </tr>
            <tr>
              <td>Robots Meta Tag</td>
              <td>Controls how search engines crawl and index pages</td>
              <td>N/A</td>
              <td>High - Controls indexing</td>
            </tr>
            <tr>
              <td>Viewport Meta Tag</td>
              <td>Controls mobile responsiveness</td>
              <td>N/A</td>
              <td>High - Mobile SEO factor</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MetaTypesSection;