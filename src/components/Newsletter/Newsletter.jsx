import React, { useState } from "react";
import "./Newsletter.css";

const Newsletter = ({ title, subtitle, placeholder, buttonText }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage("Please enter a valid email address");
      setIsSuccess(false);
      return;
    }
    
    // Here you would normally send the email to your backend
    // For demo purposes, we'll just show a success message
    setMessage("Thank you for subscribing!");
    setIsSuccess(true);
    setEmail("");
    
    // Reset the success message after 5 seconds
    setTimeout(() => {
      setMessage("");
    }, 5000);
  };

  return (
    <section className="newsletter section">
      <div className="newsletter__container container">
        <div className="newsletter__content">
          <h2 className="newsletter__title">{title}</h2>
          <p className="newsletter__description">{subtitle}</p>
          
          <form onSubmit={handleSubmit} className="newsletter__form">
            <input
              type="email"
              className="newsletter__input"
              placeholder={placeholder || "Enter your email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="button button--flex newsletter__button">
              {buttonText || "Subscribe"}
              <i className="uil uil-arrow-right button__icon"></i>
            </button>
          </form>
          
          {message && (
            <p className={`newsletter__message ${isSuccess ? 'newsletter__message-success' : 'newsletter__message-error'}`}>
              {message}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
