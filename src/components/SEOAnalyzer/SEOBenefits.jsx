import React from "react";
import "./SEOBenefits.css";

const SEOBenefits = ({ benefits }) => {
    return (
        <section className="benefits section">
            <div className="container">
                <h2 className="section__title">Why Use Our SEO Analyzer?</h2>
                <span className="section__subtitle">Powerful Features to Improve Your Rankings</span>
                
                <div className="benefits__container grid">
                    {benefits.map((benefit, index) => (
                        <div className="benefit__card" key={index}>
                            <i className={`${benefit.icon} benefit__icon`}></i>
                            <h3 className="benefit__title">{benefit.title}</h3>
                            <p className="benefit__description">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SEOBenefits;
