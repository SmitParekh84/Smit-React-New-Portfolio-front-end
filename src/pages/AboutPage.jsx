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
            "https://linkedin.com/in/smit-parekh-n/",
            "https://github.com/SmitParekh84",
            "https://www.instagram.com/smit_8_4/",
            "https://www.facebook.com/SmitParekh84/"
        ],
        "jobTitle": "Marketing Manager & Full-stack Developer",
        "worksFor": {
            "@type": "Organization",
            "name": "Smit Parekh Studio",
            "url": "https://www.smitparekh.studio"
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
        ],
        "image": {
            "@type": "ImageObject",
            "url": "https://www.smitparekh.studio/images/Smit-Parekh-About.webp",
            "width": "1200",
            "height": "630"
        },
        "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "Charotar University of Science and Technology",
            "sameAs": "https://www.charusat.ac.in/"
        },
        "nationality": {
            "@type": "Country",
            "name": "India"
        },
        "hasOccupation": [
            {
                "@type": "Occupation",
                "name": "Marketing Manager",
                "occupationalCategory": "Marketing Professionals",
                "skills": "Digital Marketing, Content Strategy, SEO, Social Media Management"
            },
            {
                "@type": "Occupation",
                "name": "Full-stack Developer",
                "occupationalCategory": "Software Developers",
                "skills": "JavaScript, React.js, Node.js, MongoDB, PHP, MySQL"
            }
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
    
    // Website schema
    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Smit Parekh - Marketing Manager & Full-stack Developer",
        "url": "https://www.smitparekh.studio",
        "author": {
            "@type": "Person",
            "name": "Smit Parekh"
        },
        "description": "Professional website of Smit Parekh, featuring portfolio, skills, services and free tools",
        "publisher": {
            "@type": "Organization",
            "name": "Smit Parekh Studio",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.smitparekh.studio/images/logo.webp",
                "width": "112",
                "height": "112"
            }
        }
    };
    
    const pageUrl = "https://www.smitparekh.studio/about";
    const imageUrl = "https://www.smitparekh.studio/images/Smit-Parekh-About.webp";

    return (
        <>
            <SEO 
                title="About Smit Parekh | Marketing Manager & Full-stack Developer"
                description="Learn about Smit Parekh, a Marketing Manager & Full-stack Developer with over 3 years of experience, expert in digital marketing, web development, and data-driven strategies."
                keywords="Smit Parekh, About Smit Parekh, Marketing Manager, Full-stack Developer, digital marketing expert, web developer, portfolio, professional background"
                canonicalUrl={pageUrl}
                ogType="profile"
                ogImage={imageUrl}
                ogTitle="About Smit Parekh | Marketing & Development Expert"
                ogDescription="Learn about Smit Parekh's professional journey, skills, and expertise in marketing and development."
                twitterImage={imageUrl}
                twitterTitle="About Smit Parekh | Professional Profile"
                twitterDescription="Discover Smit Parekh's background, expertise, and professional accomplishments in marketing and web development."
                structuredData={[personSchema, breadcrumbSchema, websiteSchema]}
                lastUpdated="2023-11-01T12:00:00Z"
                language="en-US"
            />

            <About />
            <Skills />
            <Qualification />
            <Project />
        </>
    );
};

export default AboutPage;
