import React, { useState } from "react";

const TextToSpeech = () => {
    const [text, setText] = useState("");

    const handleTextChange = (e) => setText(e.target.value);

    const handleSpeak = () => {
        if (text) {
            const speech = new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(speech);
        } else {
            alert("Please enter some text.");
        }
    };

    return (
        <div className="tool-container">
            <h2>Text to Speech</h2>
            <textarea
                value={text}
                onChange={handleTextChange}
                placeholder="Enter text to convert to speech..."
                rows="5"
                cols="30"
            />
            <button onClick={handleSpeak}>Speak</button>
        </div>
    );
};

export default TextToSpeech;
