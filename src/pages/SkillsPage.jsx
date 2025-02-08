// Import React and the About component
import React from "react";
import About from "../components/About"; // Adjust the path based on your folder structure
import { Helmet } from "react-helmet-async";
import Skills from "../components/Skills";

// Create the AboutPage component
const SkillsPage = () => {

    return (
        <>
            <Helmet>
                <title>Smit Parekh - Skills in Web Development, Digital Marketing & Creative Design</title>
                <meta
                    name="description"
                    content="Explore Smit Parekh's skills in Web Development, Digital Marketing, and Creative Design, including proficiency in JavaScript, React.js, Social Media Management, Video Editing, and more."
                />
                <meta
                    name="keywords"
                    content="Smit Parekh, Web Development, Digital Marketing, JavaScript, React, Node.js, Social Media Management, Video Content Creation, Graphic Design, Video Editing"
                />
                <meta name="author" content="Smit Parekh" />
                <link rel="canonical" href="https://www.smitparekh.studio/skills" />

                {/* Open Graph Tags */}
                <meta property="og:title" content="Smit Parekh - Skills in Web Development, Digital Marketing & Creative Design" />
                <meta
                    property="og:description"
                    content="Smit Parekh's professional skill set includes Web Development, Digital Marketing, and Creative Design, with expertise in technologies like JavaScript, React.js, and skills in Social Media and Video Editing."
                />
                <meta
                    property="og:image"
                    content="https://www.smitparekh.studio/images/Smit-Parekh-Skills.webp"
                />
                <meta property="og:url" content="https://www.smitparekh.studio/skills" />
                <meta property="og:type" content="website" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Smit Parekh - Skills in Web Development, Digital Marketing & Creative Design" />
                <meta
                    name="twitter:description"
                    content="Discover Smit Parekh's expertise in Web Development, Digital Marketing, and Creative Design, from JavaScript and React.js to Social Media and Video Content Creation."
                />
                <meta name="twitter:image" content="https://www.smitparekh.studio/images/Smit-Parekh-Skills.webp" />

                {/* Structured Data - JSON-LD */}
                <script type="application/ld+json">
                    {`
            {
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Smit Parekh",
                "url": "https://www.smitparekh.studio/skills",
                "jobTitle": "Marketing Manager & Web Developer",
                "skills": [
                    "JavaScript", "React.js", "HTML/CSS", "Node.js", "SQL", "PHP", "MongoDB",
                    "Social Media Management", "Brand Promotion", "Video Content Creation", 
                    "Strategic Planning", "Graphic Design", "Video Editing"
                ],
                "description": "Smit Parekh is a Marketing Manager and Web Developer with expertise in Web Development, Digital Marketing, and Creative Design."
            }
        `}
                </script>
            </Helmet>



            <Skills />

        </>

    );
};



export default SkillsPage;
