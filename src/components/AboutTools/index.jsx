import React from "react";
import "./AboutTools.css";
import { toolsData } from "../../data/toolsData";

/**
 * AboutTools component - Displays information about the tools collection
 */
const AboutTools = () => {
    // Count total tools
    const totalTools = toolsData.length;
    
    // Count unique categories
    const uniqueCategories = new Set(toolsData.map(tool => tool.category)).size;
    
    return (
        <section className="about-tools section" id="about-tools">
            <h2 className="section__title">About Our Tools</h2>
            <span className="section__subtitle">Professional Tools, Free Access</span>

            <div className="about-tools__container container grid">
                <div className="about-tools__img">
                    <img 
                        src="/images/services-illustration.svg" 
                        alt="Free professional tools collection"
                        className="about-tools__image"
                    />
                </div>

                <div className="about-tools__data">
                    <p className="about-tools__description">
                        Our collection of free professional tools is designed to help businesses, content creators, 
                        and developers streamline their workflows and enhance productivity. From image processing 
                        to content optimization, we provide powerful utilities that are completely free to use.
                    </p>

                    <div className="about-tools__info">
                        <div>
                            <span className="about-tools__info-title">{totalTools}+</span>
                            <span className="about-tools__info-name">Free <br /> Tools</span>
                        </div>
                        
                        <div>
                            <span className="about-tools__info-title">{uniqueCategories}</span>
                            <span className="about-tools__info-name">Tool <br /> Categories</span>
                        </div>

                        <div>
                            <span className="about-tools__info-title">24/7</span>
                            <span className="about-tools__info-name">Available <br /> Anytime</span>
                        </div>
                    </div>

                    <div className="about-tools__buttons">
                        <a href="/free-tools" className="button button--flex">
                            View All Tools <i className="uil uil-apps button__icon"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutTools;