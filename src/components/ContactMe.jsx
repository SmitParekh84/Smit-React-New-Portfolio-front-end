import React, { useState } from 'react';
import axios from 'axios';
import { contactData } from '../data/data'; // Adjust the import path as necessary

const ContactMe = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [description, setDescription] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            name,
            email,
            subject,
            description,
        };

        try {
            const response = await axios.post('http://localhost:5000/api/topost', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            setSuccessMessage(contactData.successMessage);
            setErrorMessage('');

            // Reset form fields
            setName('');
            setEmail('');
            setSubject('');
            setDescription('');
        } catch (error) {
            setErrorMessage(contactData.errorMessage);
            setSuccessMessage('');
        }
    };

    return (
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
                            Send message
                            <i className="uil uil-message button__icon"></i>
                        </button>
                    </div>
                </form>

                {/* Success or Error Message */}
                {successMessage && <p className="success-message">{successMessage}</p>}
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </div>
        </section>
    );
};

export default ContactMe;
