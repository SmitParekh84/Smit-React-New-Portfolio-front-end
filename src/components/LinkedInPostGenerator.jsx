import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const LinkedInPostGenerator = () => {
    const [activity, setActivity] = useState("");
    const [advice, setAdvice] = useState("");
    const [cringeLevel, setCringeLevel] = useState(2);
    const [generatedPost, setGeneratedPost] = useState("");
    const [selectedHook, setSelectedHook] = useState(""); // New state for selected hook
    const [ask, setAsk] = useState(""); // New state for selected hook
    const [loading, setLoading] = useState(false); // State to track loading status
    const [xValue, setXValue] = useState(); // Value of X (range between 2 and 5)  
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




    const handleGeneratePost = async () => {
        setLoading(true); // Set loading to true when the button is clicked

        try {
            const modifiedTemplate = selectedHook.replace(/X/g, xValue);
            const response = await axios.post(`${apiUrl}/api/generate-post`, {
                activity,
                advice,
                cringeLevel,
                modifiedTemplate,
            });
            setGeneratedPost(response.data.generatedPost || "Failed to generate a post.");
        } catch (error) {
            toast.error("Error generating post:", error);
            setGeneratedPost("An error occurred while generating the post.");
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
                <br />
            </React.Fragment>
        ));
    };
    const handleCopyPost = () => {
        if (generatedPost) {
            // Create a temporary element to hold the HTML content
            const tempTextArea = document.createElement("textarea");
            tempTextArea.value = generatedPost; // Set the value to the generated post
            document.body.appendChild(tempTextArea);
            tempTextArea.select(); // Select the content
            document.execCommand("copy"); // Copy the selected content
            document.body.removeChild(tempTextArea); // Clean up the temporary element

            toast.success("Post copied to clipboard!"); // You can customize this alert or add a success notification.
        }
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
                            <select
                                value={selectedHook}
                                onChange={handleHookChange}
                            >
                                <option value="">-- Select Hook --</option>
                                {hooks.map((hook) => (
                                    <option key={hook.id} value={hook.template}>
                                        {hook.label}
                                    </option>
                                ))}
                            </select>
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
                            <input
                                type="text"
                                placeholder="I started a new job"
                                value={activity}
                                onChange={(e) => setActivity(e.target.value)}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Inspirational advice
                            <input
                                type="text"
                                placeholder="Shoot for the stars"
                                value={advice}
                                onChange={(e) => setAdvice(e.target.value)}
                            />
                        </label>
                    </div>
                    <div>
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
                    <button onClick={handleGeneratePost} disabled={loading} className="generate-button">
                        {loading ? 'Generating...' : 'Generate Post'}
                    </button>
                    {generatedPost && (
                        <div className="generated-post">
                            <h3>Generated Post:</h3>
                            <p>{formatGeneratedPost(generatedPost)}</p>
                            <button onClick={handleCopyPost} className="copy-button">
                                <i className="fa fa-copy"></i> Copy
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default LinkedInPostGenerator;
