import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const LinkedInPostGenerator = () => {
    const [activity, setActivity] = useState("");
    const [advice, setAdvice] = useState("");
    const [cringeLevel, setCringeLevel] = useState(3);
    const [generatedPost, setGeneratedPost] = useState("");
    const [loading, setLoading] = useState(false); // State to track loading status
    const apiUrl = import.meta.env.VITE_API_URL;

    const handleGeneratePost = async () => {
        setLoading(true); // Set loading to true when the button is clicked
        try {
            const response = await axios.post(`${apiUrl}/api/generate-post`, {
                activity,
                advice,
                cringeLevel,
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
                                    min="1"
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
