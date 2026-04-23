import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { marked } from "marked";
import he from "he";

import './LinkedlnPostGenerator.css';
import linekedln from '../../assets/img/linkeldn.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCopy, faEarthAmericas, faCheckCircle, faMagic,
    faLightbulb, faPen, faThumbsUp,
    faListUl, faAlignLeft, faAlignCenter, faAlignJustify
} from "@fortawesome/free-solid-svg-icons";

const hooks = [
    { id: 1,  icon: "🏆", label: "Superior Method",  template: "[Common belief or practice] [negative consequence]. Here's the [notable method] [famous individuals or groups] use instead:" },
    { id: 3,  icon: "💡", label: "Impactful Advice",  ask: "How Many Advice?",  template: "[Unusual habit/action] solves [high percentage of major problem]. X more [simple/quick/easy] [habits/actions] to [improve/change a specific situation]:" },
    { id: 4,  icon: "👣", label: "Simple Steps",      ask: "How Many Steps?",   template: "X [easy/simple/quick] steps to [achieve impressive result] in [short time frame] - even if you [face common obstacle]:" },
    { id: 5,  icon: "⚡", label: "Industry Issues",   ask: "How Many Issues?",  template: "X huge issues we're dealing with in [industry/profession] today: [Specific problem] → [Striking statistic or fact]." },
    { id: 6,  icon: "📖", label: "Personal Story",    template: "I remember when I [specific event]. It taught me [important lesson]. Now, I [action taken] to [improve/change specific situation]:" },
    { id: 7,  icon: "💪", label: "Pro Challenge",     template: "I faced a major challenge at work today: [Specific problem]. I handled it by [specific action]. Here's what I learned:" },
    { id: 8,  icon: "📈", label: "Industry Trend",    template: "I've noticed a new trend in [industry/profession] lately: [Specific trend]. Here's why it's [positive/negative] for [profession/industry]:" },
    { id: 9,  icon: "🎯", label: "Career Milestone",  template: "I've reached a major milestone in my career: [Specific achievement]. It's a reminder that [important lesson learned]:" },
    { id: 10, icon: "🌱", label: "Pro Growth",        template: "I've grown so much in my career since [specific event]. I'm proud of how far I've come, and I'm excited for what's next:" },
];

const charPresets = [
    { icon: faAlignLeft,    label: "Short",  value: 300,  desc: "~300" },
    { icon: faAlignCenter,  label: "Medium", value: 600,  desc: "~600" },
    { icon: faAlignJustify, label: "Long",   value: 1200, desc: "~1200" },
];

const cringeMarkers = [
    { value: 0, emoji: "🎓", label: "Professional" },
    { value: 1, emoji: "😊", label: "Casual" },
    { value: 2, emoji: "😏", label: "Relatable" },
    { value: 3, emoji: "🔥", label: "Bold" },
    { value: 4, emoji: "💥", label: "Edgy" },
    { value: 5, emoji: "🤡", label: "Peak Cringe" },
];

const LinkedInPostGenerator = () => {
    const [activity, setActivity] = useState("");
    const [advice, setAdvice] = useState("");
    const [cringeLevel, setCringeLevel] = useState(0);
    const [generatedPost, setGeneratedPost] = useState("");
    const [selectedHook, setSelectedHook] = useState("");
    const [ask, setAsk] = useState("");
    const [loading, setLoading] = useState(false);
    const [xValue, setXValue] = useState(0);
    const [useBulletPoints, setUseBulletPoints] = useState(false);
    const [useEmojis, setUseEmojis] = useState(false);
    const [bulletType, setBulletType] = useState("emoji");
    const [characterLength, setCharacterLength] = useState(600);
    const [scrollAfterGenerate, setScrollAfterGenerate] = useState(false);
    const [copied, setCopied] = useState(false);
    const [showFullContent, setShowFullContent] = useState(false);
    const apiUrl = import.meta.env.VITE_API_URL;

    const handleHookSelect = (hook) => {
        setAsk(hook.ask || "");
        setSelectedHook(hook.template);
        setXValue([3, 4, 5].includes(hook.id) ? 2 : 0);
    };

    useEffect(() => {
        if (generatedPost && scrollAfterGenerate) {
            document.getElementById("card-container")?.scrollIntoView({ behavior: "smooth" });
            setScrollAfterGenerate(false);
        }
    }, [generatedPost, scrollAfterGenerate]);

    const handleGeneratePost = async () => {
        if (!activity.trim()) {
            toast.warn("Please enter what you did today before generating.");
            return;
        }
        setLoading(true);
        let timeoutId;
        if (model === "deepseek") {
            timeoutId = setTimeout(() => toast.info("DeepSeek takes time, please be patient."), 5000);
        }
        try {
            const modifiedHookTemplate = selectedHook.replace(/X/g, xValue);
            const response = await axios.post(`${apiUrl}/generate-post`, {
                activity, advice, cringeLevel,
                modifiedHookTemplate, useBulletPoints, useEmojis, bulletType, characterLength,
            });
            setGeneratedPost(response.data.generatedPost || "Failed to generate a post.");
            toast.success("Post successfully generated!");
            setScrollAfterGenerate(true);
            setShowFullContent(false);
        } catch (error) {
            if (error.response?.status === 429) {
                toast.error("AI is busy right now. Please wait a minute and try again.");
            } else {
                toast.error("Oops! Something went wrong. Please try again.");
            }
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
                    <span dangerouslySetInnerHTML={{ __html: showFullContent ? enhancedContent : truncatedContent }} />
                    {!showFullContent && (
                        <>
                            <button onClick={() => setShowFullContent(true)} className="see-more-btn">
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
        const text = content
            .replace(/<br\s*\/?>/gi, '\n')
            .replace(/<\/p>/gi, '')
            .replace(/<strong>/gi, '')
            .replace(/<\/strong>/gi, '')
            .replace(/<[^>]+>/g, '');
        const ta = document.createElement('textarea');
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        toast.success('Post copied to clipboard!');
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
    };

    const currentCringe = cringeMarkers[cringeLevel];

    const loadingMessages = [
        "Analysing your topic…",
        "Crafting the perfect hook…",
        "Adding a sprinkle of cringe…",
        "Optimising for engagement…",
        "Polishing your post…",
    ];
    const [loadingMsgIdx, setLoadingMsgIdx] = useState(0);
    useEffect(() => {
        if (!loading) return;
        setLoadingMsgIdx(0);
        const interval = setInterval(() => {
            setLoadingMsgIdx((i) => (i + 1) % loadingMessages.length);
        }, 1800);
        return () => clearInterval(interval);
    }, [loading]);

    return (
        <>
            <section className="bg-remover-box container">

                <div className="linkedin-post-generator">
                    <div className="linkedin-header">
                        <h2>
                            <FontAwesomeIcon icon={faLightbulb} className="header-icon" />
                            Viral LinkedIn Post Generator
                        </h2>
                        <p className="linkedin-subtitle">Create engagement-optimized posts in seconds</p>
                    </div>

                    <div className="form-grid">

                        {/* ── Step 1: Hook ── */}
                        <div className="form-section">
                            <div className="section-label">
                                <span className="section-number">1</span>
                                <span className="section-title">Choose Your Viral Hook</span>
                                <span className="section-hint">Pick a proven formula for maximum engagement</span>
                            </div>

                            <div className="hook-cards-grid">
                                {hooks.map((hook) => (
                                    <button
                                        key={hook.id}
                                        type="button"
                                        className={`hook-card${selectedHook === hook.template ? ' hook-card--active' : ''}`}
                                        onClick={() => handleHookSelect(hook)}
                                    >
                                        <span className="hook-card__icon">{hook.icon}</span>
                                        <span className="hook-card__label">{hook.label}</span>
                                        {selectedHook === hook.template && (
                                            <span className="hook-card__check">✓</span>
                                        )}
                                    </button>
                                ))}
                            </div>

                            {selectedHook && (
                                <div className="hook-preview">
                                    <span className="hook-preview__tag">Template preview</span>
                                    <p className="hook-preview__text">{selectedHook}</p>
                                </div>
                            )}

                            {xValue > 0 && (
                                <div className="x-value-container">
                                    <label className="form-label">
                                        <span className="label-text">
                                            {ask}&nbsp;
                                            <span className="range-value highlight-value">{xValue}</span>
                                        </span>
                                        <div className="range-container">
                                            <input
                                                type="range" min="2" max="5" value={xValue}
                                                onChange={(e) => setXValue(Number(e.target.value))}
                                                className="range-slider"
                                            />
                                            <div className="range-marks">
                                                <span>2</span><span>3</span><span>4</span><span>5</span>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            )}
                        </div>

                        {/* ── Step 2: Content ── */}
                        <div className="form-section">
                            <div className="section-label">
                                <span className="section-number">2</span>
                                <span className="section-title">Your Content</span>
                            </div>

                            <div className="form-group">
                                <label className="form-label">
                                    <span className="label-text">
                                        <FontAwesomeIcon icon={faPen} className="input-icon" />
                                        What did you do today? (Topic)
                                    </span>
                                    <textarea
                                        placeholder="e.g., Worked on a new project, Had an insight about leadership..."
                                        value={activity}
                                        onChange={(e) => setActivity(e.target.value)}
                                        className="input-textarea"
                                    />
                                </label>
                            </div>

                            <div className="form-group">
                                <label className="form-label">
                                    <span className="label-text">
                                        <FontAwesomeIcon icon={faThumbsUp} className="input-icon" />
                                        Inspirational advice
                                    </span>
                                    <textarea
                                        placeholder="e.g., Always believe in yourself, Persistence is key to success..."
                                        value={advice}
                                        onChange={(e) => setAdvice(e.target.value)}
                                        className="input-textarea"
                                    />
                                </label>
                            </div>
                        </div>

                        {/* ── Step 3: Style ── */}
                        <div className="form-section">
                            <div className="section-label">
                                <span className="section-number">3</span>
                                <span className="section-title">Tune Your Style</span>
                            </div>

                            {/* Cringe */}
                            <div className="form-group">
                                <span className="label-text">
                                    Cringe Level
                                    <span className="cringe-badge">
                                        {currentCringe.emoji}&nbsp;{currentCringe.label}
                                    </span>
                                </span>
                                <div className="range-container">
                                    <input
                                        type="range" min="0" max="5" value={cringeLevel}
                                        onChange={(e) => setCringeLevel(Number(e.target.value))}
                                        className="range-slider"
                                    />
                                    <div className="cringe-marks">
                                        {cringeMarkers.map((m) => (
                                            <span
                                                key={m.value}
                                                className={`cringe-mark${cringeLevel === m.value ? ' cringe-mark--active' : ''}`}
                                                onClick={() => setCringeLevel(m.value)}
                                                title={m.label}
                                            >
                                                {m.emoji}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Post length — icon buttons */}
                            <div className="form-group">
                                <span className="label-text">Post Length</span>
                                <div className="icon-btn-row">
                                    {charPresets.map((p) => (
                                        <button
                                            key={p.value}
                                            type="button"
                                            className={`icon-btn${characterLength === p.value ? ' icon-btn--active' : ''}`}
                                            onClick={() => setCharacterLength(p.value)}
                                            title={`${p.label} — ${p.desc} characters`}
                                        >
                                            <FontAwesomeIcon icon={p.icon} className="icon-btn__ico" />
                                            <span className="icon-btn__label">{p.label}</span>
                                            <span className="icon-btn__sub">{p.desc}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Formatting — icon toggle buttons */}
                            <div className="form-group">
                                <span className="label-text">Formatting</span>
                                <div className="icon-btn-row">
                                    <button
                                        type="button"
                                        className={`icon-btn${useEmojis ? ' icon-btn--active' : ''}`}
                                        onClick={() => setUseEmojis(!useEmojis)}
                                        title={useEmojis ? "Emojis On" : "Emojis Off"}
                                    >
                                        <span className="icon-btn__ico icon-btn__ico--emoji">😄</span>
                                        <span className="icon-btn__label">Emojis</span>
                                        <span className="icon-btn__sub">{useEmojis ? 'On' : 'Off'}</span>
                                    </button>

                                    <button
                                        type="button"
                                        className={`icon-btn${useBulletPoints ? ' icon-btn--active' : ''}`}
                                        onClick={() => setUseBulletPoints(!useBulletPoints)}
                                        title={useBulletPoints ? "Bullets On" : "Bullets Off"}
                                    >
                                        <FontAwesomeIcon icon={faListUl} className="icon-btn__ico" />
                                        <span className="icon-btn__label">Bullets</span>
                                        <span className="icon-btn__sub">{useBulletPoints ? 'On' : 'Off'}</span>
                                    </button>

                                    {useBulletPoints && (
                                        <button
                                            type="button"
                                            className="icon-btn icon-btn--active"
                                            onClick={() => setBulletType(bulletType === 'emoji' ? 'dash' : 'emoji')}
                                            title="Toggle bullet style"
                                        >
                                            <span className="icon-btn__ico icon-btn__ico--emoji">
                                                {bulletType === 'emoji' ? '➟' : '👉'}
                                            </span>
                                            <span className="icon-btn__label">Style</span>
                                            <span className="icon-btn__sub">{bulletType === 'emoji' ? 'Arrow' : 'Hand'}</span>
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>


                        {/* ── Generate ── */}
                        <button
                            onClick={handleGeneratePost}
                            disabled={loading}
                            className="linkedin-button-class"
                        >
                            <FontAwesomeIcon
                                icon={faMagic}
                                className={`mr-1 ${loading ? "animate-spin" : ""}`}
                            />
                            {loading ? 'Crafting your post…' : 'Generate Post'}
                        </button>

                    </div>
                </div>

                {loading && (
                    <div className="loading-post">
                        <div className="loading-content">
                            <div className="ai-loader">
                                <span></span><span></span><span></span>
                                <span></span><span></span>
                            </div>
                            <p className="loading-text" key={loadingMsgIdx}>
                                {loadingMessages[loadingMsgIdx]}
                            </p>
                        </div>
                    </div>
                )}

                {generatedPost && (
                    <div className="card-container" id="card-container">
                        <div className="profile-section">
                            <div className="profile-info-container">
                                <img
                                    width="50" height="50" decoding="async" id="finalImage"
                                    src="/favicon_512.png" alt="Profile" className="profile-image"
                                />
                                <div className="profile-info">
                                    <span id="finalName" className="profile-name">Viral Post Generator</span>
                                    <br />
                                    <span className="profile-description">User of smitparekh.studio</span>
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
