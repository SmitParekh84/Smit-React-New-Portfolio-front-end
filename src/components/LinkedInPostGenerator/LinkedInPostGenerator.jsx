import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { marked } from "marked";
import he from "he";

import './LinkedlnPostGenerator.css';
import linekedln from '../../assets/img/linkeldn.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faEarthAmericas, faCheckCircle, faMagic, faLightbulb, faPen, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import ModelSelector from "../ModelSelector";

const LinkedInPostGenerator = () => {
    const [model, setModel] = useState("gemini");
    const [activity, setActivity] = useState("");
    const [advice, setAdvice] = useState("");
    const [cringeLevel, setCringeLevel] = useState(0);
    const [generatedPost, setGeneratedPost] = useState("");
    const [selectedHook, setSelectedHook] = useState("");
    const [ask, setAsk] = useState("");
    const [loading, setLoading] = useState(false);
    const [xValue, setXValue] = useState();
    const [useBulletPoints, setUseBulletPoints] = useState(false);
    const [useEmojis, setUseEmojis] = useState(false);
    const [bulletType, setBulletType] = useState("emoji");
    const [characterLength, setCharacterLength] = useState("");
    const [scrollAfterGenerate, setScrollAfterGenerate] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [useAdvanceOption, setUseAdvanceOption] = useState(false);
    const [copied, setCopied] = useState(false);
    const [showFullContent, setShowFullContent] = useState(false);
    const apiUrl = import.meta.env.VITE_API_URL;

    const models = [
        { name: "gemini", logo: "/images/Ai/gemini.png" },
        { name: "deepseek", logo: "/images/Ai/deepseek.png" },
    ];

    const hooks = [
        { id: 1, label: "A Superior Method", template: "[Common belief or practice] [negative consequence]. Here's the [notable method] [famous individuals or groups] use instead:" },
        { id: 3, label: "Impactful Advice", ask: "How Many Advice ?", template: "[Unusual habit/action] solves [high percentage of major problem]. X more [simple/quick/easy] [habits/actions] to [improve/change a specific situation]:" },
        { id: 4, label: "Simple Steps", ask: "How Many Steps ?", template: "X [easy/simple/quick] steps to [achieve impressive result] in [short time frame] - even if you [face common obstacle]:" },
        { id: 5, label: "Industry Issues", ask: "How Many Issues ?", template: "X huge issues we're dealing with in [industry/profession] today: [Specific problem] → [Striking statistic or fact]." },
        { id: 6, label: "Personal Story", template: "I remember when I [specific event]. It taught me [important lesson]. Now, I [action taken] to [improve/change specific situation]:" },
        { id: 7, label: "Professional Challenge", template: "I faced a major challenge at work today: [Specific problem]. I handled it by [specific action]. Here's what I learned:" },
        { id: 8, label: "Industry Trend", template: "I've noticed a new trend in [industry/profession] lately: [Specific trend]. Here's why it's [positive/negative] for [profession/industry]:" },
        { id: 9, label: "Career Milestone", template: "I've reached a major milestone in my career: [Specific achievement]. It's a reminder that [important lesson learned]:" },
        { id: 10, label: "Professional Growth", template: "I've grown so much in my career since [specific event]. I'm proud of how far I've come, and I'm excited for what's next:" },
    ];

    const handleDropdownToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleHookChange = (e) => {
        const selectedValue = e.target.value;
        const selectedId = hooks.find((hook) => hook.template === selectedValue)?.id;
        setAsk(hooks.find((hook) => hook.template === selectedValue)?.ask || "");
        setSelectedHook(selectedValue);

        if ([2, 3, 4, 5].includes(selectedId)) {
            setXValue(2);
        } else {
            setXValue(0);
        }
    };

    useEffect(() => {
        if (generatedPost && scrollAfterGenerate) {
            const contentSection = document.getElementById("card-container");
            if (contentSection) {
                contentSection.scrollIntoView({ behavior: "smooth" });
            }
            setScrollAfterGenerate(false);
        }
    }, [generatedPost, scrollAfterGenerate]);

    const handleGeneratePost = async () => {
        setLoading(true);

        let timeoutId;
        if (model === "deepseek") {
            timeoutId = setTimeout(() => {
                toast.info("DeepSeek takes time, please be patient.");
            }, 5000);
        }
        try {
            const modifiedHookTemplate = selectedHook.replace(/X/g, xValue);
            const response = await axios.post(`${apiUrl}/generate-post`, {
                activity,
                model,
                advice,
                cringeLevel,
                modifiedHookTemplate,
                useBulletPoints,
                useEmojis,
                bulletType,
                characterLength,
            });
            const generatedContent = response.data.generatedPost || "Failed to generate a post.";
            setGeneratedPost(generatedContent);
            toast.success("Post successfully generated!");
            setScrollAfterGenerate(true);
            setShowFullContent(false);
        } catch (error) {
            toast.error("Oops! Something went wrong. Please try again.", error);
            setGeneratedPost("Sorry, there was an issue generating the post. Please try again later.");
        } finally {
            setLoading(false);
            clearTimeout(timeoutId);
        }
    };

    const renderGeneratedPost = () => {
        let htmlContent = marked(generatedPost, { breaks: true });
        htmlContent = he.decode(htmlContent);
        htmlContent = htmlContent.replace(/#(\w+)/g, '<span class="hashtag">#$1</span>');
        const enhancedContent = htmlContent.replace(/\n/g, "<br>");
        const truncatedContent = enhancedContent.slice(0, 200);
        const remainingContent = enhancedContent.slice(200);
        return (
            <div className="generated-post-container">
                <div id="result-content" className="generated-post">
                    <span
                        dangerouslySetInnerHTML={{
                            __html: showFullContent ? enhancedContent : truncatedContent,
                        }}
                    />
                    {!showFullContent && (
                        <>
                            <button
                                onClick={() => setShowFullContent(true)}
                                className="see-more-btn"
                            >
                                ... See More
                            </button>
                            <span
                                dangerouslySetInnerHTML={{ __html: remainingContent }}
                                style={{ opacity: "0.6", display: showFullContent ? "inline" : "none" }}
                            />
                        </>
                    )}
                </div>
            </div>
        );
    };

    const handleCopyPost = () => {
        const content = document.getElementById('result-content').innerHTML;

        let formattedContent = content
            .replace(/<br\s*\/?>/gi, '\n')
            .replace(/<\/p>/gi, '')
            .replace(/<strong>/gi, '')
            .replace(/<\/strong>/gi, '')
            .replace(/<[^>]+>/g, '');

        const textArea = document.createElement('textarea');
        textArea.value = formattedContent;
        document.body.appendChild(textArea);

        textArea.select();
        document.execCommand('copy');

        document.body.removeChild(textArea);

        toast.success('Post copied to clipboard!');
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 1000);
    };

    return (
        <>
            <section className="bg-remover-box container">
                <ToastContainer position="top-center" />

                <div className="linkedin-post-generator">
                    <div className="linkedin-header">
                        <h2><FontAwesomeIcon icon={faLightbulb} className="header-icon" /> Viral LinkedIn Post Generator</h2>
                        <p className="linkedin-subtitle">Create engagement-optimized posts in seconds</p>
                    </div>

                    <div className="form-grid">
                        <div className="form-group">
                            <label className="form-label">
                                <span className="label-text">Select a Viral Hook:</span>
                                <div className={`custom-dropdown ${isOpen ? 'open' : ''}`}>
                                    <select
                                        value={selectedHook}
                                        onChange={handleHookChange}
                                        onClick={handleDropdownToggle}
                                        className="hook-select"
                                    >
                                        <option value="">-- Select a viral formula --</option>
                                        {hooks.map((hook) => (
                                            <option key={hook.id} value={hook.template}>
                                                {hook.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </label>
                            {xValue > 0 && (
                                <div className="x-value-container">
                                    <label className="form-label">
                                        <span className="label-text">{ask} <span className="range-value highlight-value">{xValue}</span></span>
                                        <div className="range-container">
                                            <input
                                                type="range"
                                                min="2"
                                                max="5"
                                                value={xValue}
                                                onChange={(e) => setXValue(e.target.value)}
                                                className="range-slider"
                                            />
                                            <div className="range-marks">
                                                <span>2</span>
                                                <span>3</span>
                                                <span>4</span>
                                                <span>5</span>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            )}
                        </div>

                        <div className="form-group">
                            <label className="form-label">
                                <span className="label-text"><FontAwesomeIcon icon={faPen} className="input-icon" /> What did you do today? (Topic)</span>
                                <textarea
                                    type="text"
                                    placeholder="e.g., Worked on a new project, Had an insight about leadership..."
                                    value={activity}
                                    onChange={(e) => setActivity(e.target.value)}
                                    className="input-textarea"
                                />
                            </label>
                        </div>

                        <div className="form-group">
                            <label className="form-label">
                                <span className="label-text"><FontAwesomeIcon icon={faThumbsUp} className="input-icon" /> Inspirational advice</span>
                                <textarea
                                    type="text"
                                    placeholder="e.g., Always believe in yourself, Persistence is key to success..."
                                    value={advice}
                                    onChange={(e) => setAdvice(e.target.value)}
                                    className="input-textarea"
                                />
                            </label>
                        </div>

                        <div className="form-group">
                            <label className="form-label">
                                <span className="label-text">Cringe level <span className="range-value highlight-value">{cringeLevel}</span></span>
                                <div className="range-container">
                                    <input
                                        type="range"
                                        min="0"
                                        max="5"
                                        value={cringeLevel}
                                        onChange={(e) => setCringeLevel(e.target.value)}
                                        className="range-slider"
                                    />
                                    <div className="range-marks">
                                        <span>0</span>
                                        <span>1</span>
                                        <span>2</span>
                                        <span>3</span>
                                        <span>4</span>
                                        <span>5</span>
                                    </div>
                                </div>
                            </label>
                        </div>

                        {useAdvanceOption && (
                            <div className="advanced-options-container">
                                <h3 className="advanced-options-title">Advanced Options</h3>
                                
                                <div className="advanced-options-grid">
                                    <div className="checkbox-container">
                                        <label className="checkbox-label">
                                            Use Emojis
                                            <input
                                                type="checkbox"
                                                checked={useEmojis}
                                                onChange={(e) => setUseEmojis(e.target.checked)}
                                                className="checkbox-input"
                                            />
                                            <span className="checkmark"></span>
                                        </label>
                                        
                                        <label className="checkbox-label">
                                            Use Bullet Points
                                            <input
                                                type="checkbox"
                                                checked={useBulletPoints}
                                                onChange={(e) => setUseBulletPoints(e.target.checked)}
                                                className="checkbox-input"
                                            />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>

                                    {useBulletPoints && (
                                        <div className="bullet-type-container">
                                            <label className="form-label">
                                                <span className="label-text">Bullet Type:</span>
                                                <div className="custom-dropdown">
                                                    <select 
                                                        value={bulletType} 
                                                        onChange={(e) => setBulletType(e.target.value)}
                                                        className="bullet-select"
                                                    >
                                                        <option value="emoji">➟ Arrow Style</option>
                                                        <option value="dash">👉 Pointing Hand</option>
                                                    </select>
                                                </div>
                                            </label>
                                        </div>
                                    )}
                                    
                                    <div className="char-length-container">
                                        <label className="form-label">
                                            <span className="label-text">Character Length:</span>
                                            <input
                                                type="number"
                                                placeholder="600"
                                                value={characterLength}
                                                onChange={(e) => setCharacterLength(e.target.value)}
                                                className="input-number"
                                            />
                                        </label>
                                    </div>

                                    <ModelSelector model={model} setModel={setModel} />
                                </div>
                            </div>
                        )}

                        <div className="button-container">
                            <div className="toggle-container">
                                <span className={`toggle-label ${useAdvanceOption ? "active-toggle-label" : ""}`}>
                                    Advanced Options
                                </span>
                                <div
                                    onClick={() => setUseAdvanceOption((prev) => !prev)}
                                    className={`toggle-switch ${useAdvanceOption ? "active" : ""}`}
                                >
                                    <span className="toggle-thumb"></span>
                                </div>
                            </div>
                            
                            <button
                                onClick={handleGeneratePost}
                                disabled={loading}
                                className="linkedin-button-class"
                            >
                                <FontAwesomeIcon
                                    icon={faMagic}
                                    className={`mr-1 ${loading ? "animate-spin" : ""}`}
                                />
                                {loading ? 'Generating...' : 'Generate Post'}
                            </button>
                        </div>
                    </div>
                </div>
                
                {loading && (
                    <div className="loading-post">
                        <div className="loading-content">
                            <svg className="pl" width="240" height="240" viewBox="0 0 240 240">
                                <circle className="pl__ring pl__ring--a" cx="120" cy="120" r="105" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 660" strokeDashoffset="-330" strokeLinecap="round"></circle>
                                <circle className="pl__ring pl__ring--b" cx="120" cy="120" r="35" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 220" strokeDashoffset="-110" strokeLinecap="round"></circle>
                                <circle className="pl__ring pl__ring--c" cx="85" cy="120" r="70" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 440" strokeLinecap="round"></circle>
                                <circle className="pl__ring pl__ring--d" cx="155" cy="120" r="70" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 440" strokeLinecap="round"></circle>
                            </svg>
                            <p className="loading-text">Crafting your viral LinkedIn post...</p>
                        </div>
                    </div>
                )}

                {generatedPost && (
                    <div className="card-container" id="card-container">
                        <div className="profile-section">
                            <div className="profile-info-container">
                                <img
                                    width="50"
                                    height="50"
                                    decoding="async"
                                    id="finalImage"
                                    src="/favicon_512.png"
                                    alt="Profile"
                                    className="profile-image"
                                />
                                <div className="profile-info">
                                    <span id="finalName" className="profile-name">
                                        Viral Post Generator
                                    </span>
                                    <br />
                                    <span className="profile-description">
                                        User of smitparekh.studio
                                    </span>
                                    <span className="profile-time">
                                        3h •
                                        <FontAwesomeIcon icon={faEarthAmericas} className="profile-icon" />
                                    </span>
                                </div>
                            </div>
                            <button onClick={handleCopyPost} className="linkedln-copybutton">
                                <FontAwesomeIcon icon={copied ? faCheckCircle : faCopy} className="mr-1" />
                                {copied ? "Copied" : "Copy"}
                            </button>
                        </div>

                        <div className="content-section" id="result-content">
                            {renderGeneratedPost()}
                        </div>
                        <img src={linekedln} alt="LinkedIn" className="linkedIn-image" />
                    </div>
                )}
            </section>
        </>
    );
};

export default LinkedInPostGenerator;
