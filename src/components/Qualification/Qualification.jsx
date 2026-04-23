import React, { useState } from "react"
import { qualificationsData } from "../../data/data" // Adjust the path as necessary
import { Helmet } from "react-helmet-async"

const Qualification = () => {
  const [activeTab, setActiveTab] = useState("work")

  // Function to handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab)
  }

  return (
    <>
      <Helmet>
        <title>
          Smit Parekh - Qualifications in Marketing, Development, and IT
          Education
        </title>
        <meta
          name="description"
          content="Discover Smit Parekh's qualifications, including a Master’s and Bachelor’s in Information Technology from Charusat University, and experience as a Marketing Manager, Node.js Developer, and Video Editor."
        />
        <meta
          name="keywords"
          content="Smit Parekh, qualifications, Master of Science in IT, Bachelor of Science in IT, Charusat University, Marketing Manager, Node.js Developer, Cilans System, Video Editor, Content Beta"
        />
        <meta name="author" content="Smit Parekh" />
        <link
          rel="canonical"
          href="https://www.smitparekh.co.in/qualifications"
        />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Smit Parekh - Qualifications in Marketing, Development, and IT Education"
        />
        <meta
          property="og:description"
          content="Smit Parekh holds a Master’s in IT and a Bachelor’s in IT from Charusat University. With roles in marketing, development, and video editing, he brings a diverse skill set and professional experience."
        />
        <meta
          property="og:image"
          content="https://www.smitparekh.co.in/images/Smit-Parekh-Qualifications.webp"
        />
        <meta
          property="og:url"
          content="https://www.smitparekh.co.in/qualifications"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Smit Parekh - Qualifications in Marketing, Development, and IT Education"
        />
        <meta
          name="twitter:description"
          content="Smit Parekh's qualifications include a Master's in IT, and professional experience in marketing, web development, and video editing."
        />
        <meta
          name="twitter:image"
          content="https://www.smitparekh.co.in/images/Smit-Parekh-Qualifications.webp"
        />

        {/* Structured Data - JSON-LD */}
        <script type="application/ld+json">
          {`
            {
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Smit Parekh",
                "url": "https://www.smitparekh.co.in/qualifications",
                "jobTitle": "Marketing Manager & Node.js Developer",
                "alumniOf": "Charusat University",
                "degree": [
                    {
                        "degreeType": "Master of Science in Information Technology",
                        "institute": "Charusat University",
                        "date": "2023 - 2025",
                        "cgpa": "8.18"
                    },
                    {
                        "degreeType": "Bachelor of Science in Information Technology",
                        "institute": "Charusat University",
                        "date": "2020 - 2023",
                        "cgpa": "8.84"
                    }
                ],
                "workExperience": [
                    {
                        "jobTitle": "Marketing Manager and Node.js Developer",
                        "organization": "Cilans System",
                        "date": "Aug 2024 - Present"
                    },
                    {
                        "jobTitle": "Web Developer Intern",
                        "organization": "InternPe",
                        "date": "Four-week Training Program"
                    },
                    {
                        "jobTitle": "Video Editor/Social Media Manager",
                        "organization": "Content Beta",
                        "date": "Jun 2023 - Jan 2024"
                    },
                    {
                        "jobTitle": "Freelance Video Editor",
                        "organization": "Freelancer",
                        "date": "Apr 2020 - Jun 2023"
                    }
                ],
                "description": "Smit Parekh is a Marketing Manager, Node.js Developer, and IT specialist with a Master’s in Information Technology."
            }
        `}
        </script>
      </Helmet>

      <section className="qualification__section" id="qualification">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Journey to Expertise</span>

        <div className="qualification__container container">
          <div className="qualification__tabs">
            <div
              className={`qualification__button button--flex ${
                activeTab === "education" ? "qualification__active" : ""
              }`}
              onClick={() => handleTabChange("education")}
            >
              <i className="uil uil-graduation-cap qualification__icon"></i>
              Education
            </div>

            <div
              className={`qualification__button button--flex ${
                activeTab === "work" ? "qualification__active" : ""
              }`}
              onClick={() => handleTabChange("work")}
            >
              <i className="uil uil-briefcase-alt qualification__icon"></i>
              Work Experience
            </div>
          </div>

          <div className="qualification__sections">
            {/* Education Tab Content */}
            <div
              className={`qualification__content ${
                activeTab === "education" ? "qualification__active" : ""
              }`}
              data-content
              id="education"
            >
              {qualificationsData.education.map((qual, index) => (
                <React.Fragment key={index}>
                  <div className="qualification__data">
                    {/* Insert an empty <div> before every second qualification */}
                    {index % 2 === 1 && <div></div>}
                    {index % 2 === 1 && (
                      <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                      </div>
                    )}
                    <div>
                      <h3 className="qualification__title">{qual.title}</h3>
                      <span className="qualification__subtitle">
                        {qual.subtitle}
                      </span>
                      <div className="qualification__calendar">
                        <i className="uil uil-calendar-alt"></i>
                        {qual.date}
                      </div>
                    </div>
                    {index % 2 === 0 && (
                      <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                      </div>
                    )}
                  </div>
                </React.Fragment>
              ))}
            </div>

            {/* Work Tab Content */}
            <div
              className={`qualification__content ${
                activeTab === "work" ? "qualification__active" : ""
              }`}
              data-content
              id="work"
            >
              {qualificationsData.work.map((qual, index) => (
                <React.Fragment key={index}>
                  <div className="qualification__data">
                    {/* Insert an empty <div> before every second qualification */}
                    {index % 2 === 1 && <div></div>}
                    {index % 2 === 1 && (
                      <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                      </div>
                    )}
                    <div>
                      <h3 className="qualification__title">{qual.title}</h3>
                      <span className="qualification__subtitle">
                        {qual.subtitle}
                      </span>
                      <div className="qualification__calendar">
                        <i className="uil uil-calendar-alt"></i>
                        {qual.date}
                      </div>
                    </div>
                    {index % 2 === 0 && (
                      <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                      </div>
                    )}
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Qualification
