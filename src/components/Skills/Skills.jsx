// Skills.js
import React, { useState } from "react"
import { skillsData } from "../../data/data.js"
import { Helmet } from "react-helmet-async"

const Skills = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleSkills = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
   
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
