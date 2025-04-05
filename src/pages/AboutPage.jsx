import React from "react";
import About from "../components/About";
import Skills from "../components/Skills";
import Qualification from "../components/Qualification";
import Project from "../components/Project";
import SEO from "../components/SEO/SEO";

const AboutPage = () => {
    // Structured data for personal profile
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Smit Parekh",
        "url": "https://www.smitparekh.studio/about",
        "sameAs": [
            "https://linkedin.com/in/smitparekh84/",
            "https://github.com/SmitParekh84",
            "https://www.instagram.com/smit_8_4/",
            "https://www.facebook.com/SmitParekh84/"
        ],
        "jobTitle": "Marketing Manager & Full-stack Developer",
        "worksFor": {
            "@type": "Organization",
            "name": "Smit Parekh Studio"
        },
        "description": "Smit Parekh is a Marketing Manager and Full-stack Developer with expertise in crafting data-driven marketing strategies and scalable web solutions.",
        "knowsAbout": [
            "Digital Marketing", 
            "Web Development", 
            "SEO", 
            "JavaScript", 
            "React.js", 
            "Node.js", 
            "Content Creation"
        ]
    };

    // Breadcrumb structured data
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.smitparekh.studio"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "About",
                "item": "https://www.smitparekh.studio/about"
            }
        ]
    };

    return (
        <>
            <SEO 
                title="About Smit Parekh | Marketing Manager & Full-stack Developer"
                description="Learn about Smit Parekh, a Marketing Manager & Full-stack Developer with over 3 years of experience, expert in digital marketing, web development, and data-driven strategies."
                keywords="Smit Parekh, About Smit Parekh, Marketing Manager, Full-stack Developer, digital marketing expert, web developer, portfolio, professional background"
                canonicalUrl="https://www.smitparekh.studio/about"
                ogType="profile"
                ogImage="https://www.smitparekh.studio/images/Smit-Parekh-About.webp"
                twitterImage="https://www.smitparekh.studio/images/Smit-Parekh-About.webp"
                structuredData={[personSchema, breadcrumbSchema]}
            />

            <About />
            <Skills />
            <Qualification />
            <Project />
        </>
    );
};

export default AboutPage;
