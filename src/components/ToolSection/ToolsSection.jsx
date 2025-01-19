import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import { toolsData } from "../../data/data.js"; // Import the tools data
import "./ToolsSection.css";

const ToolsSection = () => {
    const [activeModalIndex, setActiveModalIndex] = useState(null);
    const navigate = useNavigate(); // Initialize the navigation hook

    const openModal = (index) => setActiveModalIndex(index);
    const closeModal = () => setActiveModalIndex(null);

    // Function to handle navigation to tool page
    const handleRedirect = (path) => {
        navigate(path); // Redirect to the specific tool's page
    };

    return (
        <section className="tools section" id="tools">
            <h2 className="section__title">Free Tools</h2>
            <span className="section__subtitle">Explore the free tools we offer</span>

            <div className="tools__container container grid">
                {toolsData.map((tool, index) => (
                    <div className="tools__content" key={index}>
                        <div>
                            <i className={`${tool.icon} tools__icon`}></i>{" "}
                            {/* Icon for the tool */}
                            <h3 className="tools__title">{tool.title}</h3>
                            <p className="tools__short-description">{tool.shortDescription}</p>
                        </div>
                        <span
                            className="button button--flex button--small button--link tools__button"
                            onClick={() => handleRedirect(tool.path)} // Redirect on click
                        >
                            Go to Tool
                            <i className="uil uil-arrow-right button__icon"></i>
                        </span>

                        {/* Modal */}
                        {activeModalIndex === index && (
                            <div className="tools__modal active-modal">
                                <div className="tools__modal-content">
                                    <h4 className="tools__modal-title">{tool.title}</h4>
                                    <i
                                        className="uil uil-times tools__modal-close"
                                        onClick={closeModal}
                                    ></i>

                                    <ul className="tools__modal-services grid">
                                        {/* Example of description */}
                                        {tool.description?.map((desc, i) => (
                                            <li className="tools__modal-service" key={i}>
                                                <i className="uil uil-check-circle tools__modal-icon"></i>
                                                <p>{desc}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ToolsSection;
