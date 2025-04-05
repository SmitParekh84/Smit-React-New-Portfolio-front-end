import React from "react";
import { Link } from "react-router-dom";
import "./ToolsGrid.css";

const ToolsGrid = ({ tools }) => {
    return (
        <section className="tools section" id="tools">
            <div className="tools__content-wrapper">
                <h2 className="section__title tools__title">Featured Tools</h2>
                <span className="section__subtitle tools__subtitle">
                    Professional Tools to Enhance Your Workflow
                </span>

                <div className="tools__container container grid">
                    {tools.map((tool, index) => (
                        <div className="tools__content" key={index}>
                            <div>
                                <div className="tools__header">
                                    <div className="tools__icon-container">
                                        <i className={`uil ${tool.icon} tools__icon`}></i>
                                    </div>
                                    <h3 className="tools__title">{tool.title}</h3>
                                </div>
                                <p className="tools__description">{tool.shortDescription}</p>
                            </div>
                            <Link to={tool.path} className="button button--flex button--small tools__button">
                                Try it now
                                <i className="uil uil-arrow-right button__icon"></i>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Background elements for modern look */}
            <div className="tools__bg-circle-large"></div>
            <div className="tools__bg-circle-small"></div>
        </section>
    );
};

export default ToolsGrid;
