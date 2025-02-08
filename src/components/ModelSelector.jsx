import React, { useState } from "react";
import "./ModelSelector.css";

const models = [
    { name: "gemini", logo: "/images/Ai/gemini.png" },
    { name: "deepseek", logo: "/images/Ai/deepseek.png" },
];

const ModelSelector = ({ model, setModel }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="model-selector">
            <label>Select AI Model:</label>
            <div
                className={`custom-dropdown-model ${isOpen ? "open" : ""}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="dropdown-selected">
                    <img
                        src={models.find((m) => m.name === model)?.logo}
                        alt={model}
                        width="24"
                        height="24"
                    />
                    <span>{model.toUpperCase()}</span>
                </div>
                {isOpen && (
                    <div className="dropdown-options">
                        {models.map(({ name, logo }) => (
                            <div
                                key={name}
                                className="dropdown-option"
                                onClick={() => {
                                    setModel(name);
                                    setIsOpen(false);
                                }}
                            >
                                <img className="model-image" src={logo} alt={name} width="24" height="24" />
                                <span>{name.toUpperCase()}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ModelSelector;
