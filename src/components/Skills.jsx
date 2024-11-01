// Skills.js
import React, { useState } from "react"
import { skillsData } from "../data/data.js"
import { Helmet } from "react-helmet-async"

const Skills = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleSkills = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
    <Helmet>
    <title>Smit Parekh - Skills in Web Development, Digital Marketing & Creative Design</title>
    <meta 
        name="description" 
        content="Explore Smit Parekh's skills in Web Development, Digital Marketing, and Creative Design, including proficiency in JavaScript, React.js, Social Media Management, Video Editing, and more." 
    />
    <meta 
        name="keywords" 
        content="Smit Parekh, Web Development, Digital Marketing, JavaScript, React, Node.js, Social Media Management, Video Content Creation, Graphic Design, Video Editing" 
    />
    <meta name="author" content="Smit Parekh" />
    <link rel="canonical" href="https://www.smitparekh.studio/skills" />

    {/* Open Graph Tags */}
    <meta property="og:title" content="Smit Parekh - Skills in Web Development, Digital Marketing & Creative Design" />
    <meta 
        property="og:description" 
        content="Smit Parekh's professional skill set includes Web Development, Digital Marketing, and Creative Design, with expertise in technologies like JavaScript, React.js, and skills in Social Media and Video Editing." 
    />
    <meta 
        property="og:image" 
        content="https://www.smitparekh.studio/images/Smit-Parekh-Skills.webp" 
    />
    <meta property="og:url" content="https://www.smitparekh.studio/skills" />
    <meta property="og:type" content="website" />

    {/* Twitter Card Tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Smit Parekh - Skills in Web Development, Digital Marketing & Creative Design" />
    <meta 
        name="twitter:description" 
        content="Discover Smit Parekh's expertise in Web Development, Digital Marketing, and Creative Design, from JavaScript and React.js to Social Media and Video Content Creation." 
    />
    <meta name="twitter:image" content="https://www.smitparekh.studio/images/Smit-Parekh-Skills.webp" />

    {/* Structured Data - JSON-LD */}
    <script type="application/ld+json">
        {`
            {
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Smit Parekh",
                "url": "https://www.smitparekh.studio/skills",
                "jobTitle": "Marketing Manager & Web Developer",
                "skills": [
                    "JavaScript", "React.js", "HTML/CSS", "Node.js", "SQL", "PHP", "MongoDB",
                    "Social Media Management", "Brand Promotion", "Video Content Creation", 
                    "Strategic Planning", "Graphic Design", "Video Editing"
                ],
                "description": "Smit Parekh is a Marketing Manager and Web Developer with expertise in Web Development, Digital Marketing, and Creative Design."
            }
        `}
    </script>
    </Helmet>
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">Technical Proficiency Unleashed</span>

      <div className="skills__container container grid">
        {skillsData.map((skillCategory, index) => (
          <div key={index}>
            <div
              className={`skills__content ${
                openIndex === index ? "skills__open" : "skills__close"
              }`}
            >
              <div
                className="skills__header"
                onClick={() => toggleSkills(index)}
              >
                <i className={`${skillCategory.icon} skills__icon`}></i>
                <div>
                  <h1 className="skills__title">{skillCategory.title}</h1>
                  <span className="skills__subtitle">
                    {skillCategory.subtitle}
                  </span>
                </div>
                <i className="uil uil-angle-down skills__arrow"></i>
              </div>
              <div className="skills__list grid">
                {skillCategory.skills.map((skill, skillIndex) => (
                  <div className="skills__data" key={skillIndex}>
                    <div className="skills__titles">
                      <h3 className="skills__name">{skill.name}</h3>
                      <span className="skills__number">{skill.percentage}</span>
                    </div>
                    <div className="skills__bar">
                      <span
                        className="skills__percentage"
                        style={{ width: skill.percentage }} // Use inline style for width
                      ></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  )
}

export default Skills
