import React, { useState } from 'react';
import { qualificationsData } from '../data/data'; // Adjust the path as necessary

const Qualification = () => {
  const [activeTab, setActiveTab] = useState('education');

  // Function to handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="qualification__section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={`qualification__button button--flex ${activeTab === 'education' ? 'qualification__active' : ''}`}
            onClick={() => handleTabChange('education')}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={`qualification__button button--flex ${activeTab === 'work' ? 'qualification__active' : ''}`}
            onClick={() => handleTabChange('work')}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Work
          </div>
        </div>

        <div className="qualification__sections">
          {/* Education Tab Content */}
          <div className={`qualification__content ${activeTab === 'education' ? 'qualification__active' : ''}`} data-content id="education">
            {qualificationsData.education.map((qual, index) => (
              <React.Fragment key={index}>
                
                <div className="qualification__data">
                {/* Insert an empty <div> before every second qualification */}
                {index % 2 === 1 && <div></div> }
                {index % 2 === 1 &&
                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>}
                  <div>
                    <h3 className="qualification__title">{qual.title}</h3>
                    <span className="qualification__subtitle">{qual.subtitle}</span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt"></i>
                      {qual.date}
                    </div>
                  </div>
                  {index % 2 === 0 &&
                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>}
                </div>
              </React.Fragment>
            ))}
          </div>

          {/* Work Tab Content */}
          <div className={`qualification__content ${activeTab === 'work' ? 'qualification__active' : ''}`} data-content id="work">
            {qualificationsData.work.map((qual, index) => (
              <React.Fragment key={index}>
                

                <div className="qualification__data">
                {/* Insert an empty <div> before every second qualification */}
                {index % 2 === 1 && <div></div>}
                {index % 2 === 1 &&
                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>}
                  <div>
                    <h3 className="qualification__title">{qual.title}</h3>
                    <span className="qualification__subtitle">{qual.subtitle}</span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt"></i>
                      {qual.date}
                    </div>
                  </div>
                  {index % 2 === 0 &&
                  <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                  </div>}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
