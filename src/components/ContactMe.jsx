import React, { useState } from 'react';
import axios from 'axios';
import { contactData } from '../data/data'; // Adjust the import path as necessary
import { Helmet } from 'react-helmet-async';

const ContactMe = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [description, setDescription] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false); // New state to control form submission
    const [isLoading, setIsLoading] = useState(false); // New state for loading

    const apiUrl = import.meta.env.VITE_API_URL;
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            name,
            email,
            subject,
            description,
        };
        setIsLoading(true); // Start loading when form is submitted
        setIsSubmitted(false); // Reset submission status
        setTimeout(async () => {
            try {
                const response = await axios.post(`${apiUrl}/api/topost`, formData, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                setSuccessMessage(contactData.successMessage);
                setErrorMessage('');
                setIsSubmitted(true); // Set submitted to true when successful


            } catch (error) {
                setErrorMessage(contactData.errorMessage);
                setSuccessMessage('');
                setIsSubmitted(true);

            } finally {
                // Stop loading regardless of success or failure
                setIsLoading(false);
            }
            // Reset form fields
            setName('');
            setEmail('');
            setSubject('');
            setDescription('');
        }, 2000); // Delay for 2 seconds
    };

    return (
        <>
            <Helmet>
                <title>Contact Us - Smit Parekh</title>
                <meta
                    name="description"
                    content="Get in touch with Smit Parekh for web development, digital marketing, and SEO services. Reach out via phone or email for inquiries."
                />
                <meta
                    name="keywords"
                    content="contact, web development, digital marketing, SEO, Smit Parekh, inquiry"
                />

                {/* JSON-LD Schema for Contact Information */}
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "WebPage",
                            "name": "Contact Us - Smit Parekh",
                            "url": "https://www.smitparekh.studio/contact",
                            "description": "Contact Smit Parekh for inquiries regarding web development, digital marketing, and SEO services.",
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "telephone": "${contactData.phone}",
                                "contactType": "customer service",
                                "areaServed": "IN",
                                "availableLanguage": "English"
                            },
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "Anand",
                                "addressRegion": "Gujarat",
                                "postalCode": "388001",
                                "addressCountry": "IN"
                            },
                            "email": "${contactData.email}"
                        }
                    `}
                </script>
            </Helmet>

            <section className="contact section" id="contact">
                <h2 className="section__title">Contact me</h2>
                <span className="section__subtitle">Get in touch</span>

                <div className="contact__container container grid">
                    <div>
                        <div className="contact__information">
                            <i className="uil uil-phone-alt contact__icon"></i>
                            <div>
                                <h3 className="contact__title">Call me</h3>
                                <span className="contact__subtitle">{contactData.phone}</span>
                            </div>
                        </div>

                        <div className="contact__information">
                            <i className="uil uil-envelope contact__icon"></i>
                            <div>
                                <h3 className="contact__title">E-mail</h3>
                                <span className="contact__subtitle">{contactData.email}</span>
                            </div>
                        </div>

                        <div className="contact__information">
                            <i className="uil uil-map-marker contact__icon"></i>
                            <div>
                                <h3 className="contact__title">Location</h3>
                                <span className="contact__subtitle">{contactData.location}</span>
                            </div>
                        </div>
                    </div>

                    {!isSubmitted ? (
                        <form onSubmit={handleSubmit} className="contact__form grid">
                            <div className="contact__inputs grid">
                                <div className="contact__content">
                                    <label className="contact__label">Name</label>
                                    <input
                                        type="text"
                                        className="contact__input"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="contact__content">
                                    <label className="contact__label">E-mail</label>
                                    <input
                                        type="email"
                                        className="contact__input"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="contact__content">
                                <label className="contact__label">Subject</label>
                                <input
                                    type="text"
                                    className="contact__input"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="contact__content">
                                <label className="contact__label">Description</label>
                                <textarea
                                    cols="0"
                                    rows="7"
                                    className="contact__input"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    required
                                ></textarea>
                            </div>

                            <div>
                                <button type="submit" className="button button--flex">
                                    {isLoading ? (
                                        // Show loader when form is submitting
                                        <span className="loader"></span>
                                    ) : (
                                        <>
                                            Send message
                                            <i className="uil uil-message button__icon"></i>
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    ) : (
                        <>
                            {successMessage && <p className="success-message">{successMessage}</p>}
                            {errorMessage && <p className="error-message">{errorMessage}</p>}
                        </>
                    )}
                </div>
            </section>
        </>
    );
};

export default ContactMe;
