// Import React and the About component
import React from "react";
import About from "../components/About"; // Adjust the path based on your folder structure
import { Helmet } from "react-helmet-async";
import { contactData } from '../data/data'; // Adjust the import path as necessary
import ContactMe from "../components/ContactMe";

// Create the AboutPage component
const ContactPage = () => {
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





            <ContactMe />

        </>

    );
};



// Export the AboutPage
export default ContactPage;
