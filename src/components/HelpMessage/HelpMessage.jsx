/* eslint-disable */
import React, { useState, useEffect, useRef } from 'react';
import './HelpMessage.css';

/**
 * HelpMessage Component - Chatbot style
 * Displays a chat interface at the bottom-right corner to help users
 * @returns {JSX.Element} HelpMessage component
 */
const HelpMessage = () => {
    // State to track if the chat is expanded
    const [isExpanded, setIsExpanded] = useState(false);
    // State to track if the component should be visible (after initial delay)
    const [isVisible, setIsVisible] = useState(false);    // State to store chat messages with localStorage persistence
    const [messages, setMessages] = useState(() => {
        // Try to load chat history from localStorage
        try {
            const savedMessages = localStorage.getItem('chatBotMessages');
            return savedMessages ? JSON.parse(savedMessages) : [];
        } catch (error) {
            console.error("Error loading chat history:", error);
            return [];
        }
    });
    
    // State to store user input
    const [userInput, setUserInput] = useState('');
    // State to track if the bot is "typing"
    const [isTyping, setIsTyping] = useState(false);
    // Ref for chat container to auto-scroll
    const chatContainerRef = useRef(null);
    // Ref for input field to auto-focus
    const inputRef = useRef(null);

    // Initial greeting message
    const initialMessage = {
        id: 'init-1',
        type: 'bot',
        text: "👋 Hi there! I'm Smit's assistant. How can I help you today?",
        options: [
            { id: 'tools', text: 'Tell me about the tools', value: 'tools' },
            { id: 'contact', text: 'I need help with something', value: 'help' },
            { id: 'about', text: 'Who is Smit?', value: 'about' }
        ]
    };

    // Bot response data
    const botResponses = {
        tools: {
            text: "I can help with our free tools! Here are some popular ones:",
            options: [
                { id: 'bg-remover', text: 'Background Remover', value: 'bg-remover' },
                { id: 'linkedin', text: 'LinkedIn Post Generator', value: 'linkedin' },
                { id: 'seo', text: 'SEO Analyzer', value: 'seo' },
                { id: 'more-tools', text: 'Show all tools', value: 'more-tools' }
            ]
        },
        'bg-remover': {
            text: "Our Background Remover uses AI to remove backgrounds from images in seconds!",
            action: { type: 'link', url: '/free-tools/background-remover', text: 'Try Background Remover' }
        },
        linkedin: {
            text: "Create viral LinkedIn posts with our AI-powered LinkedIn Post Generator.",
            action: { type: 'link', url: '/free-tools/viral-linkedin-post-generator', text: 'Try LinkedIn Post Generator' }
        },
        seo: {
            text: "Analyze your website's SEO performance and get actionable recommendations.",
            action: { type: 'link', url: '/free-tools/seo-analyzer', text: 'Try SEO Analyzer' }
        },
        'more-tools': {
            text: "We have many more free tools available for you to use.",
            action: { type: 'link', url: '/free-tools', text: 'Explore All Tools' }
        },
        help: {
            text: "I'd be happy to help! Please let me know what you need assistance with.",
            options: [
                { id: 'tool-help', text: 'Help with a tool', value: 'tool-help' },
                { id: 'contact-us', text: 'Contact Support', value: 'contact-us' },
                { id: 'bug', text: 'Report a bug', value: 'bug' }
            ]
        },
        'tool-help': {
            text: "What tool do you need help with?",
            options: [
                { id: 'bg-help', text: 'Background Remover', value: 'bg-help' },
                { id: 'linkedin-help', text: 'LinkedIn Post Generator', value: 'linkedin-help' },
                { id: 'other-help', text: 'Other tools', value: 'other-help' }
            ]
        },
        'bg-help': {
            text: "For Background Remover, upload your image, click 'Remove Background', and download the result. For more help:",
            action: { type: 'link', url: '/contact', text: 'Contact Support' }
        },
        'linkedin-help': {
            text: "For LinkedIn Post Generator, enter your topic, select a tone, and generate. For more specific help:",
            action: { type: 'link', url: '/contact', text: 'Contact Support' }
        },
        'other-help': {
            text: "For help with other tools, please contact our support team:",
            action: { type: 'link', url: '/contact', text: 'Contact Support' }
        },
        'contact-us': {
            text: "You can reach our support team via the contact form.",
            action: { type: 'link', url: '/contact', text: 'Contact Support' }
        },
        bug: {
            text: "Found a bug? Please report it through our contact form with details about what happened.",
            action: { type: 'link', url: '/contact', text: 'Report Bug' }
        },
        about: {
            text: "Smit is a full-stack developer specializing in web development and creating useful online tools. Want to know more?",
            options: [
                { id: 'portfolio', text: 'See Portfolio', value: 'portfolio' },
                { id: 'services', text: 'Services Offered', value: 'services' }
            ]
        },
        portfolio: {
            text: "Check out Smit's portfolio to see previous work and projects.",
            action: { type: 'link', url: '/portfolio', text: 'View Portfolio' }
        },
        services: {
            text: "Smit offers web development, SEO optimization, and custom tool development services.",
            action: { type: 'link', url: '/services', text: 'View Services' }
        },
        default: {
            text: "I'm not sure how to help with that. Would you like to contact support?",
            action: { type: 'link', url: '/contact', text: 'Contact Support' }
        }
    };    // Function to handle sending messages
    const handleSendMessage = (text, isOptionSelected = false) => {
        if (!text.trim() && !isOptionSelected) return;

        // Add user message to chat
        const userMessage = {
            id: `user-${Date.now()}`,
            type: 'user',
            text: text
        };
        
        // Add message to chat history
        setMessages(prevMessages => [...prevMessages, userMessage]);
        
        // Clear input
        setUserInput('');
        
        // Show bot typing indicator
        setIsTyping(true);
        
        // Simulate bot typing delay
        setTimeout(() => {
            // Find appropriate response based on input text
            const inputKey = text.toLowerCase();
            let response;
            
            // Check if we have an exact match for this input
            if (botResponses[inputKey]) {
                response = botResponses[inputKey];
            } else {
                // No exact match, try to find keywords in the input
                const keywords = Object.keys(botResponses);
                const matchedKey = keywords.find(key => 
                    inputKey.includes(key.toLowerCase())
                );
                
                response = matchedKey ? botResponses[matchedKey] : botResponses.default;
            }
            
            // Create bot message
            const botMessage = {
                id: `bot-${Date.now()}`,
                type: 'bot',
                text: response.text,
                options: response.options || [],
                action: response.action || null
            };
            
            // Add to messages array, ensuring we're preserving previous messages
            setMessages(prevMessages => [...prevMessages, botMessage]);
            setIsTyping(false);
        }, 600);
    };
      // We don't need the processResponse function anymore as it's handled in the other functions
      // Handle user clicking a response option
    const handleOptionClick = (option) => {
        // Add user option selection as a message
        const userMessage = {
            id: `user-${Date.now()}`,
            type: 'user',
            text: option.text
        };
        setMessages(prev => [...prev, userMessage]);
        
        // Show bot typing indicator
        setIsTyping(true);
        
        // Simulate bot typing delay then process response
        setTimeout(() => {
            // Get the appropriate response
            const response = botResponses[option.value.toLowerCase()] || botResponses.default;
            
            // Create bot message
            const botMessage = {
                id: `bot-${Date.now()}`,
                type: 'bot',
                text: response.text,
                options: response.options || [],
                action: response.action || null
            };
            
            // Add to messages array
            setMessages(prev => [...prev, botMessage]);
            setIsTyping(false);
        }, 600);
    };

    // Handle form submission (user message input)
    const handleSubmit = (e) => {
        e.preventDefault();
        handleSendMessage(userInput);
    };

    useEffect(() => {
        // Show the chat button after 3 seconds
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);    // Add initial greeting message when chat is first opened
    useEffect(() => {
        if (isExpanded && messages.length === 0) {
            // Add a small delay to initial message for better UX
            setTimeout(() => {
                setMessages([initialMessage]);
            }, 300);
        }
        
        // Focus input when chat is expanded
        if (isExpanded && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isExpanded, messages.length, initialMessage]);    // Auto-scroll to the latest message
    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages, isTyping]);
    
    // Save messages to localStorage whenever they change
    useEffect(() => {
        // Only save if we have messages and they're not just the initial greeting
        if (messages.length > 0) {
            try {
                localStorage.setItem('chatBotMessages', JSON.stringify(messages));
            } catch (error) {
                console.error("Error saving chat history:", error);
            }
        }
    }, [messages]);

    // Toggle the chat expanded state
    const toggleChat = () => {
        setIsExpanded(!isExpanded);
    };    // Close the chat
    const closeChat = () => {
        setIsExpanded(false);
    };
    
    // Clear chat history
    const clearChat = () => {
        setMessages([]);
        localStorage.removeItem('chatBotMessages');
        
        // Add initial greeting after a short delay
        setTimeout(() => {
            setMessages([initialMessage]);
        }, 300);
    };

    return (
        <div className={`chat-bot ${isVisible ? 'visible' : ''}`}>
            {/* Chat button */}
            <button 
                className={`chat-bot__button ${isExpanded ? 'active' : ''}`} 
                onClick={toggleChat}
                aria-label="Chat with assistant"
            >
                <i className={`uil ${isExpanded ? 'uil-times' : 'uil-comments'} chat-bot__icon`}></i>
            </button>

            {/* Chat content */}
            <div className={`chat-bot__content ${isExpanded ? 'expanded' : ''}`}>                <div className="chat-bot__header">
                    <div className="chat-bot__header-info">
                        <div className="chat-bot__avatar">
                            <i className="uil uil-robot"></i>
                        </div>
                        <div className="chat-bot__title">
                            <h3>Smit's Assistant</h3>
                            <span className="chat-bot__status">Online</span>
                        </div>
                    </div>
                    <div className="chat-bot__header-actions">
                        <button 
                            className="chat-bot__action-btn" 
                            onClick={clearChat}
                            aria-label="Clear chat history"
                            title="Clear chat history"
                        >
                            <i className="uil uil-refresh"></i>
                        </button>
                        <button 
                            className="chat-bot__close" 
                            onClick={closeChat}
                            aria-label="Close chat"
                        >
                            <i className="uil uil-times"></i>
                        </button>
                    </div>
                </div>
                
                <div className="chat-bot__messages" ref={chatContainerRef}>
                    {messages.map((message) => (
                        <div key={message.id} className={`chat-message ${message.type}`}>
                            {message.type === 'bot' && (
                                <div className="chat-avatar">
                                    <i className="uil uil-robot"></i>
                                </div>
                            )}
                            <div className="chat-bubble">
                                <div className="chat-text">{message.text}</div>
                                {message.options && message.options.length > 0 && (
                                    <div className="chat-options">
                                        {message.options.map(option => (
                                            <button 
                                                key={option.id}
                                                className="chat-option-btn"
                                                onClick={() => handleOptionClick(option)}
                                            >
                                                {option.text}
                                            </button>
                                        ))}
                                    </div>
                                )}
                                {message.action && (
                                    <a 
                                        href={message.action.url}
                                        className="chat-action-btn"
                                    >
                                        {message.action.text}
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                    
                    {/* Typing indicator */}
                    {isTyping && (
                        <div className="chat-message bot">
                            <div className="chat-avatar">
                                <i className="uil uil-robot"></i>
                            </div>
                            <div className="chat-bubble typing">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    )}
                </div>
                
                <form className="chat-bot__input-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="chat-bot__input"
                        placeholder="Type your message..."
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        ref={inputRef}
                    />
                    <button 
                        type="submit" 
                        className="chat-bot__send"
                        disabled={!userInput.trim()}
                    >
                        <i className="uil uil-message"></i>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default HelpMessage;
