import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { marked } from "marked";
import './LinkedlnPostGenerator.css';
import linekedln from '../../assets/img/linkeldn.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
const LinkedInPostGenerator = () => {
    const [activity, setActivity] = useState("");
    const [advice, setAdvice] = useState("");
    const [cringeLevel, setCringeLevel] = useState(2);
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
    const apiUrl = import.meta.env.VITE_API_URL;
    const hooks = [
        { id: 1, label: "A Superior Method", template: "[Common belief or practice] [negative consequence]. Here's the [notable method] [famous individuals or groups] use instead:" },
        { id: 2, label: "My Takeaways", ask: "How Many Takeaways ?", template: "I had a great time working for [Company/Organization]. Here are X [insights/lessons/learnings] I've picked up along the way:" },
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

        try {
            const modifiedTemplate = selectedHook.replace(/X/g, xValue);
            const response = await axios.post(`${apiUrl}/api/generate-post`, {
                activity,
                advice,
                cringeLevel,
                modifiedTemplate,
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
        } catch (error) {
            toast.error("Oops! Something went wrong. Please try again.", error);
            setGeneratedPost("Sorry, there was an issue generating the post. Please try again later.");
        } finally {
            setLoading(false); // Set loading to false once the request is complete
        }
    };

    // Function to convert \n to <br /> for HTML rendering
    const formatGeneratedPost = (text) => {
        const formattedText = text.replace(/\*(.*?)\*/g, (match, p1) => p1); // Removes the asterisks and keeps the text
        return formattedText.split("\n").map((line, index) => (
            <React.Fragment key={index}>
                {line}
                <br />

            </React.Fragment>
        ));
    };
    const renderGeneratedPost = () => {
        // Convert the generated post into HTML and add extra <br> for spacing
        const htmlContent = marked(generatedPost, { breaks: true }); // Enables line breaks
        const enhancedContent = htmlContent.replace(/\n/g, "<br>"); // Adds an extra <br> for more space
        return <div dangerouslySetInnerHTML={{ __html: enhancedContent }} />;
    };
    const handleCopyPost = () => {
        const content = document.getElementById('result-content').innerHTML;

        // Replace <br> tags with newline characters
        let formattedContent = content
            .replace(/<br\s*\/?>/gi, '\n') // Convert <br> to newlines
            .replace(/<p>/gi, '\n') // Replace <p> with a newline at the start of each paragraph
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
    };

    return (
        <>
            <section className="bg-remover-box container">
                <ToastContainer position="top-center" autoClose={3000} hideProgressBar />

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
                            What did you do today?
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
                                            <option value="emoji">Emoji(▪️)</option>
                                            <option value="dash">Dash(-)</option>
                                        </select>
                                    </div>
                                </label>
                            )}
                            <label>

                                Desired Character Length:
                                <input
                                    type="number"
                                    placeholder="500"
                                    value={characterLength}
                                    onChange={(e) => setCharacterLength(e.target.value)}
                                />
                            </label>
                        </div>)}
                    <div className="button-container">
                        <button
                            onClick={() => setUseAdvanceOption(prev => !prev)}
                            className="btn-toggle-advanced"
                        >
                            {useAdvanceOption ? "Hide Advanced Options" : "Show Advanced Options"}
                        </button>

                        <button
                            onClick={handleGeneratePost}
                            disabled={loading}
                            className="generate-button"
                        >
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
                                src="/images/Smit-Parekh-Home.png"
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
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="profile-icon"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M12 2a10 10 0 100 20 10 10 0 000-20zm-7.938 9.5h5.127a1.501 1.501 0 001.282-.72l.69-1.037c.19-.283.14-.652-.109-.876l-1.292-1.177a.502.502 0 01-.138-.545l.84-2.506A8.035 8.035 0 0112 4c.36 0 .716.03 1.065.09a.5.5 0 01.364.682l-.703 2.108c-.13.39.092.81.481.946l1.628.543c.33.11.543.432.543.78v1.5a.5.5 0 00.496.5h.553a.499.499 0 00.451-.28l.276-.552a.5.5 0 01.894.013l.582 1.363a.5.5 0 01-.454.694h-.76a.5.5 0 00-.471.333l-.276.828a.499.499 0 00.06.468l.845 1.268c.345.517.92.855 1.546.898a8.01 8.01 0 01-4.794 2.437 1.502 1.502 0 00-1.147.642l-.826 1.102a8.007 8.007 0 01-7.514-6.68z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </span>
                            </div>
                            <button onClick={handleCopyPost} className="linkedln-copybutton">
                                <FontAwesomeIcon icon={faCopy} /> Copy
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
