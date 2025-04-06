import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toolsData } from "../../data/data.js";
import "./ToolsSection.css";

const ToolsSection = () => {
    const [activeModalIndex, setActiveModalIndex] = useState(null);
    const navigate = useNavigate();

    const openModal = (index) => setActiveModalIndex(index);
    const closeModal = () => setActiveModalIndex(null);

    const handleRedirect = (path) => {
        navigate(path);
    };

    // Group tools by category for the section headers
    const categories = [...new Set(toolsData.map(tool => tool.category))];

    return (
        <section className="tools section" id="tools">
            <h2 className="section__title">Free Tools</h2>
            <span className="section__subtitle">Explore our collection of powerful free tools</span>

            <div className="tools__wrapper container">
                {categories.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="tools__category-section">
                        <h3 className="tools__category-title">{category}</h3>
                        
                        <div className="tools__container grid">
                            {toolsData
                                .filter(tool => tool.category === category)
                                .map((tool, index) => {
                                    const toolIndex = toolsData.findIndex(t => t.title === tool.title);
                                    
                                    return (
                                        <div className="tools__card" key={index} onClick={() => handleRedirect(tool.path)}>
                                            <div className="tools__card-content">
                                                <div className="tools__icon-container">
                                                    <i className={`${tool.icon} tools__icon`}></i>
                                                </div>
                                                
                                                <div className="tools__info">
                                                    <h4 className="tools__title">{tool.title}</h4>
                                                    <p className="tools__description">{tool.shortDescription}</p>
                                                    
                                                    <div className="tools__action">
                                                        <span className="tools__action-text">Try Tool</span>
                                                        <i className="uil uil-arrow-right tools__action-icon"></i>
                                                    </div>
                                                </div>

                                                <div 
                                                    className="tools__details-btn"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        openModal(toolIndex);
                                                    }}
                                                >
                                                    <i className="uil uil-info-circle"></i>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                ))}
            </div>

            {/* Modals */}
            {activeModalIndex !== null && (
                <div className="tools__modal active-modal">
                    <div className="tools__modal-content">
                        <div className="tools__modal-header">
                            <i className={`${toolsData[activeModalIndex].icon} tools__modal-tool-icon`}></i>
                            <h3 className="tools__modal-title">{toolsData[activeModalIndex].title}</h3>
                            <i className="uil uil-times tools__modal-close" onClick={closeModal}></i>
                        </div>
                        
                        <span className="tools__modal-category">{toolsData[activeModalIndex].category}</span>
                        
                        <ul className="tools__modal-features">
                            {toolsData[activeModalIndex].description?.map((desc, i) => (
                                <li className="tools__modal-feature" key={i}>
                                    <i className="uil uil-check-circle tools__modal-feature-icon"></i>
                                    <p>{desc}</p>
                                </li>
                            ))}
                        </ul>
                        
                        <button 
                            className="tools__modal-button"
                            onClick={() => {
                                handleRedirect(toolsData[activeModalIndex].path);
                                closeModal();
                            }}
                        >
                            Try This Tool Now
                            <i className="uil uil-arrow-right"></i>
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ToolsSection;
