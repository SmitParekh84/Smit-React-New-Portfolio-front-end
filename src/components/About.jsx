// components/About.jsx
import React, { useState, useEffect } from 'react';
import { aboutData } from '../data/data.js'; // Adjust the path if necessary
import LazyLoad from 'react-lazyload';
import '../assets/css/modal.css'; // Import modal styles
import { useNavigate } from 'react-router-dom';

const About = () => {
    const [showModal, setShowModal] = useState(false);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState('');
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const navigate = useNavigate();

    // Prevent body scrolling when modal is open
    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [showModal]);

    const handleDownloadClick = (e) => {
        e.preventDefault();
        setShowModal(true);
        // Reset form state when opening modal
        setEmail('');
        setName('');
        setSubmitError('');
        setSubmitSuccess(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError('');

        try {
            // Log the CV download event to the API
            const response = await fetch(`${import.meta.env.VITE_API_URL}/cv-downloads`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    email, 
                    name, 
                    timestamp: new Date().toISOString(),
                    source: window.location.href
                }),
            });

            if (response.ok) {
                setSubmitSuccess(true);
                
                // Store access data in localStorage with expiry time (30 minutes)
                const accessData = {
                    name,
                    email,
                    pdfUrl: aboutData.cvLink,
                    timestamp: Date.now(),
                    expiresAt: Date.now() + (30 * 60 * 1000) // 30 minutes
                };
                localStorage.setItem('cvViewerAccess', JSON.stringify(accessData));
                
                setTimeout(() => {
                    setShowModal(false);
                    // Navigate to PDF viewer page
                    navigate('/cv-viewer');
                }, 1500);
            } else {
                const errorData = await response.json();
                setSubmitError(errorData.message || 'Failed to submit your information. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitError('Network error. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    // Close modal if clicked outside content
    const handleModalClick = (e) => {
        if (e.target.className === 'modal') {
            setShowModal(false);
        }
    };

    return (<>
        {showModal && (
            <div className="modal" onClick={handleModalClick}>
                <div className="modal__content">
                    <span className="close" onClick={() => setShowModal(false)}>&times;</span>
                    {submitSuccess ? (
                        <div className="success-message">
                            <h3>Thank you!</h3>
                            <p>Your CV will download shortly...</p>
                        </div>
                    ) : (
                        <>
                            <h3>Please provide your information to download CV</h3>
                            <form onSubmit={handleSubmit} className="modal__form">
                                <div className="form__group">
                                    <label htmlFor="name">Name</label>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div className="form__group">
                                    <label htmlFor="email">Email</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        placeholder="Enter your email"
                                    />
                                </div>
                                {submitError && <p className="error-message">{submitError}</p>}
                                <button 
                                    type="submit" 
                                    className="button button--flex"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Processing...' : 'Download CV'}
                                    {!isSubmitting && <i className="uil uil-download-alt button__icon"></i>}
                                </button>
                            </form>
                        </>
                    )}
                </div>
            </div>
        )}

        <section className="about section" id="about">
            <h2 className="section__title">{aboutData.title}</h2>
            <span className="section__subtitle">{aboutData.subtitle}</span>

            <div className="about__container container grid">
                <LazyLoad className="about__img" offset={100}>
                    <img src={aboutData.image} alt={aboutData.title} className="about__img" />
                </LazyLoad>

                <div className="about__data">
                    <p className="about__description">
                        {aboutData.description}
                    </p>
                    <div className="about__info">
                        <div>
                            <span className="about__info-title">{aboutData.experience.years}</span>
                            <span className="about__info-name">Years <br /> experience</span>
                        </div>
                        <div>
                            <span className="about__info-title">{aboutData.experience.certifications}</span>
                            <span className="about__info-name">Completed <br /> certifications</span>
                        </div>
                        <div>
                            <span className="about__info-title">{aboutData.experience.companies}</span>
                            <span className="about__info-name">companies<br />worked</span>
                        </div>
                    </div>

                    <div className="about__buttons">
                        <a href="#" onClick={handleDownloadClick} className="button button--flex">
                            Download CV<i className="uil uil-download-alt button__icon"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </>
    );
};

export default About;
