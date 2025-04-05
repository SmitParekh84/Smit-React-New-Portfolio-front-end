import React from "react";
import Skills from "../components/Skills";
import SEO from "../components/SEO/SEO";

const SkillsPage = () => {
    // Structured data for person with skills
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Smit Parekh",
        "url": "https://www.smitparekh.studio/skills",
        "jobTitle": "Marketing Manager & Full-stack Developer",
        "skills": [
            "JavaScript", "React.js", "HTML/CSS", "Node.js", "SQL", "PHP", "MongoDB",
            "Social Media Management", "Brand Promotion", "Video Content Creation", 
            "Strategic Planning", "Graphic Design", "Video Editing", "SEO Optimization"
        ],
        "description": "Smit Parekh is a Marketing Manager and Full-stack Developer with expertise in Web Development, Digital Marketing, and Creative Design."
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
                "name": "Skills",
                "item": "https://www.smitparekh.studio/skills"
            }
        ]
    };

    return (
        <>
            <SEO 
                title="Professional Skills & Expertise | Smit Parekh - Web Development, Digital Marketing & Design"
                description="Explore Smit Parekh's comprehensive skill set spanning Web Development (JavaScript, React.js, Node.js), Digital Marketing (SEO, Social Media) and Creative Design (UI/UX, Video Editing)."
                keywords="Smit Parekh skills, Web Development expertise, Digital Marketing skills, JavaScript, React, Node.js, Social Media Management, Video Content Creation, Graphic Design, Video Editing, SEO skills"
                canonicalUrl="https://www.smitparekh.studio/skills"
                ogImage="https://www.smitparekh.studio/images/Smit-Parekh-Skills.webp"
                twitterImage="https://www.smitparekh.studio/images/Smit-Parekh-Skills.webp"
                structuredData={[personSchema, breadcrumbSchema]}
            />

            <Skills />
        </>
    );
};

export default SkillsPage;
