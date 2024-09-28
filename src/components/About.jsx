// components/About.jsx
import React from 'react';
import { aboutData } from '../data/data.js'; // Adjust the path if necessary

const About = () => {
    

    return (
        <section className="about section" id="about">
            <h2 className="section__title">{aboutData.title}</h2>
            <span className="section__subtitle">{aboutData.subtitle}</span>

            <div className="about__container container grid">
                <img src={aboutData.image} alt="About Me" className="about__img" />
                <div className="about__data">
                    <p className="about__description">
                        {aboutData.description}
                    </p>
                    <div className="about__info">
                        <div>
                            <span className="about__info-title">{aboutData.experience.years}</span>
                            <span className="about__info-name">Years <br /> experience</span>
                        </div>
                        <div>
                            <span className="about__info-title">{aboutData.experience.certifications}</span>
                            <span className="about__info-name">Completed <br /> certifications</span>
                        </div>
                        <div>
                            <span className="about__info-title">{aboutData.experience.companies}</span>
                            <span className="about__info-name">companies<br />worked</span>
                        </div>
                    </div>

                    <div className="about__buttons">
                        <a download href={aboutData.cvLink} className="button button--flex">
                            Download CV<i className="uil uil-download-alt button__icon"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
