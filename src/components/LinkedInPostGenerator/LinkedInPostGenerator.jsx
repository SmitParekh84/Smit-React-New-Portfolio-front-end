import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { marked } from "marked";
import he from "he";

import './LinkedlnPostGenerator.css';
import linekedln from '../../assets/img/linkeldn.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faEarthAmericas, faCheckCircle, faMagic } from "@fortawesome/free-solid-svg-icons";
import ModelSelector from "../ModelSelector";
const LinkedInPostGenerator = () => {
    const [model, setModel] = useState("gemini"); // Default model selection
    const [activity, setActivity] = useState("");
    const [advice, setAdvice] = useState("");
    const [cringeLevel, setCringeLevel] = useState(0);
    const [generatedPost, setGeneratedPost] = useState("");
    const [selectedHook, setSelectedHook] = useState(""); // New state for selected hook
    const [ask, setAsk] = useState(""); // New state for selected hook
    const [loading, setLoading] = useState(false); // State to track loading status
    const [xValue, setXValue] = useState(); // Value of X (range between 2 and 5)  
    const [useBulletPoints, setUseBulletPoints] = useState(false);
    const [useEmojis, setUseEmojis] = useState(false);
    const [bulletType, setBulletType] = useState("emoji");
    const [characterLength, setCharacterLength] = useState("");
    const [scrollAfterGenerate, setScrollAfterGenerate] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [useAdvanceOption, setUseAdvanceOption] = useState(false);
    const [copied, setCopied] = useState(false);  // State to manage the copied status  
    const [showFullContent, setShowFullContent] = useState(false);
    const apiUrl = import.meta.env.VITE_API_URL;
    const models = [
        { name: "gemini", logo: "/images/Ai/gemini.png" },
        { name: "deepseek", logo: "/images/Ai/deepseek.png" },
    ]; const hooks = [
        { id: 1, label: "A Superior Method", template: "[Common belief or practice] [negative consequence]. Here's the [notable method] [famous individuals or groups] use instead:" },
        // { id: 2, label: "My Takeaways", ask: "How Many Takeaways ?", template: "Here are X [insights/lessons/learnings] I've picked up along the way:" },
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
        setAsk(hooks.find((hook) => hook.template === selectedValue)?.ask || ""); // Set the ask value based on the selected hook
        setSelectedHook(selectedValue);

        // For hooks with IDs 2, 3, 4, and 5, set a random X value between 2 and 5
        if ([2, 3, 4, 5].includes(selectedId)) {

            setXValue(2);

        } else {
            setXValue(0); // Reset for other hooks
        }
    };

    useEffect(() => {
        if (generatedPost && scrollAfterGenerate) {
            const contentSection = document.getElementById("card-container");
            if (contentSection) {
                contentSection.scrollIntoView({ behavior: "smooth" });
            }
            // Reset the scroll flag after the scroll is triggered
            setScrollAfterGenerate(false);
        }
    }, [generatedPost, scrollAfterGenerate]);


    const handleGeneratePost = async () => {
        setLoading(true); // Set loading to true when the button is clicked

        let timeoutId;
        if (model === "deepseek") {
            timeoutId = setTimeout(() => {
                toast.info("DeepSeek takes time, please be patient.");
            }, 5000); // Show after 5 seconds
        }
        try {
            const modifiedHookTemplate = selectedHook.replace(/X/g, xValue);
            const response = await axios.post(`${apiUrl}/api/generate-post`, {
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
            // Show success toast when post is generated
            toast.success("Post successfully generated!");
            setScrollAfterGenerate(true);
            setShowFullContent(false); // Reset the showFullContent state when generating a new post

        } catch (error) {
            toast.error("Oops! Something went wrong. Please try again.", error);
            setGeneratedPost("Sorry, there was an issue generating the post. Please try again later.");
        } finally {
            setLoading(false); // Set loading to false once the request is complete
            clearTimeout(timeoutId);// Clear the timeout if request finishes early
        }
    };


    const renderGeneratedPost = () => {
        // Convert the generated post into HTML and add extra <br> for spacing
        let htmlContent = marked(generatedPost, { breaks: true }); // Enables line breaks
        htmlContent = he.decode(htmlContent);
        // Highlight hashtags
        htmlContent = htmlContent.replace(/#(\w+)/g, '<span class="hashtag">#$1</span>');
        const enhancedContent = htmlContent.replace(/\n/g, "<br>"); // Adds an extra <br> for more space
        // Truncate the content to 200 characters for the "See More" feature
        const truncatedContent = enhancedContent.slice(0, 200);
        const remainingContent = enhancedContent.slice(200);
        return (
            <div className="generated-post-container">
                <div id="result-content" className="generated-post">
                    {/* Render truncated content */}
                    <span
                        dangerouslySetInnerHTML={{
                            __html: showFullContent ? enhancedContent : truncatedContent,
                        }}
                    />
                    {!showFullContent && (
                        <>
                            {/* See More button placed inline */}
                            <button
                                onClick={() => setShowFullContent(true)}
                                className="see-more-btn"
                            >
                                ... See More
                            </button>
                            {/* Render remaining content with opacity */}
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

        // Replace <br> tags with newline characters
        let formattedContent = content
            .replace(/<br\s*\/?>/gi, '\n') // Convert <br> to newlines
            .replace(/<\/p>/gi, '') // Remove the closing </p> tags
            .replace(/<strong>/gi, '') // Remove <strong> tags
            .replace(/<\/strong>/gi, '') // Remove closing </strong> tags
            .replace(/<[^>]+>/g, '') // Remove all remaining HTML tags

        // Create a temporary textarea element to copy the text
        const textArea = document.createElement('textarea');
        textArea.value = formattedContent;
        document.body.appendChild(textArea);

        // Select the text in the textarea and copy it
        textArea.select();
        document.execCommand('copy');

        // Clean up by removing the textarea
        document.body.removeChild(textArea);

        // Optionally, notify the user that the text has been copied
        toast.success('Post copied to clipboard!');
        // Change the icon to the right icon (check circle) for 1 second
        setCopied(true);

        // Revert back to the copy icon after 1 second
        setTimeout(() => {
            setCopied(false);
        }, 1000);
    };

    return (
        <>
            <section className="bg-remover-box container">
                <ToastContainer position="top-center" />

                <div className="linkedin-post-generator">
                    <h2>Viral LinkedIn Post Generator</h2>
                    <div>
                        <label>
                            Select a Viral Hook:
                            <div className={`custom-dropdown ${isOpen ? 'open' : ''}`}> {/* Add 'open' class based on state */}                                <select
                                value={selectedHook}
                                onChange={handleHookChange}
                                onClick={handleDropdownToggle} // Toggle on select click
                            >
                                <option value="">-- Default Hook --</option>
                                {hooks.map((hook) => (
                                    <option key={hook.id} value={hook.template}>
                                        {hook.label}
                                    </option>
                                ))}
                            </select>
                            </div>
                        </label>
                        {xValue > 0 && (
                            <div>

                                <label>
                                    {ask}  <span className="range-value">{xValue}</span>
                                    <div className="range-container">
                                        <input
                                            type="range"
                                            min="2"
                                            max="5"
                                            value={xValue}
                                            onChange={(e) => setXValue(e.target.value)}
                                        />

                                    </div>
                                </label>
                            </div>
                        )}
                        <label>
                            What did you do today?(Topic)
                            <textarea
                                type="text"
                                placeholder="Worked on a new project..."
                                value={activity}
                                onChange={(e) => setActivity(e.target.value)}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Inspirational advice
                            <textarea
                                type="text"
                                placeholder="Believe in yourself..."
                                value={advice}
                                onChange={(e) => setAdvice(e.target.value)}
                            />
                        </label>
                        <label>
                            Cringe level <span className="range-value">{cringeLevel}</span>
                            <div className="range-container">
                                <input
                                    type="range"
                                    min="0"
                                    max="5"
                                    value={cringeLevel}
                                    onChange={(e) => setCringeLevel(e.target.value)}
                                />

                            </div>
                        </label>
                    </div>

                    {useAdvanceOption && (
                        <div>
                            <p>Here are the advanced options...</p>
                            <div className="checkbox-container">
                                <label>
                                    Use Emojis :
                                    <input
                                        type="checkbox"
                                        checked={useEmojis}
                                        onChange={(e) => setUseEmojis(e.target.checked)}
                                    />
                                </label>
                                <label>
                                    Use Bullet Points:
                                    <input
                                        type="checkbox"
                                        checked={useBulletPoints}
                                        onChange={(e) => setUseBulletPoints(e.target.checked)}
                                    />
                                </label>
                            </div>
                            {useBulletPoints && (
                                <label>
                                    Bullet Type:
                                    <div className={`custom-dropdown ${isOpen ? 'open' : ''}`}> {/* Add 'open' class based on state */}

                                        <select value={bulletType} onChange={(e) => setBulletType(e.target.value)}>
                                            <option value="emoji">➟</option>
                                            <option value="dash">👉</option>
                                        </select>
                                    </div>
                                </label>
                            )}
                            <label>

                                Desired Character Length:
                                <input
                                    type="number"
                                    placeholder="600"
                                    value={characterLength}
                                    onChange={(e) => setCharacterLength(e.target.value)}
                                />
                            </label>
                            {/* Model Selection Dropdown */}
                            <ModelSelector model={model} setModel={setModel} />

                        </div>)}


                    <div className="button-container ">


                        <div className="toggle-container ">

                            {useAdvanceOption ? "Advanced Options" : "Advanced Options"}

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
                        ><FontAwesomeIcon
                                icon={faMagic}
                                className={`mr-1 ${loading ? "animate-spin" : ""}`} // Add a spinning animation if loading
                            />
                            {loading ? 'Generating...' : 'Generate Post'}
                        </button>
                    </div>




                </div>
                {loading && (
                    <div className="loading-post" >
                        <svg className="pl" width="240" height="240" viewBox="0 0 240 240">
                            <circle className="pl__ring pl__ring--a" cx="120" cy="120" r="105" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 660" strokeDashoffset="-330" strokeLinecap="round"></circle>
                            <circle className="pl__ring pl__ring--b" cx="120" cy="120" r="35" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 220" strokeDashoffset="-110" strokeLinecap="round"></circle>
                            <circle className="pl__ring pl__ring--c" cx="85" cy="120" r="70" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 440" strokeLinecap="round"></circle>
                            <circle className="pl__ring pl__ring--d" cx="155" cy="120" r="70" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 440" strokeLinecap="round"></circle>
                        </svg></div>

                )}
                {generatedPost && (
                    <div className="card-container" id="card-container">

                        {/* Profile Section */}
                        <div className="profile-section">
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
                            <button onClick={handleCopyPost} className="linkedln-copybutton">
                                {/* Change icon based on `copied` state */}
                                <FontAwesomeIcon icon={copied ? faCheckCircle : faCopy} className="mr-1" />
                                {copied ? "Copied" : "Copy"}
                            </button>
                        </div>

                        {/* Content Section */}
                        <div className="content-section" id="result-content" >
                            {renderGeneratedPost()}
                        </div>
                        <img src={linekedln} alt="LinkedIn" className="linkedIn-image" />
                    </div>)}
            </section >
        </>
    );
};

export default LinkedInPostGenerator;
