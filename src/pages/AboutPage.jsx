// Import React and the About component
import React from "react";
import About from "../components/About"; // Adjust the path based on your folder structure
import { Helmet } from "react-helmet-async";
// Create the AboutPage component
const AboutPage = () => {
    return (
        <>
            <Helmet>
                <title>About - Marketing Manager & Full-stack Developer | Smit Parekh</title>
                <meta
                    name="description"
                    content="Discover Smit Parekh, a Marketing Manager & Back-end Developer with over 3 years of experience, 10+ certifications, and a blend of strategic, creative, and technical skills."
                />
                <meta
                    name="keywords"
                    content="Smit Parekh,About Smit Parekh, Marketing Manager, Back-end Developer, digital marketing, data-driven strategy, scalable solutions, certifications"
                />
                <meta name="author" content="Smit Parekh" />
                <link rel="canonical" href="https://www.smitparekh.studio/about" />

                {/* Open Graph Tags */}
                <meta property="og:title" content="Smit Parekh - Marketing Manager & Back-end Developer | About" />
                <meta
                    property="og:description"
                    content="As a Marketing Manager & Back-end Developer, Smit Parekh blends strategy, creativity, and technical expertise to deliver impactful results in marketing and development."
                />
                <meta
                    property="og:image"
                    content="https://www.smitparekh.studio/images/Smit-Parekh-About.webp"
                />
                <meta property="og:url" content="https://www.smitparekh.studio/about" />
                <meta property="og:type" content="profile" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="About - Marketing Manager & Back-end Developer | Smit Parekh" />
                <meta
                    name="twitter:description"
                    content="Discover Smit Parekh's expertise in digital marketing and back-end development. Learn about his skills, experience, and achievements."
                />
                <meta name="twitter:image" content="https://www.smitparekh.studio/images/Smit-Parekh-About.webp" />

                {/* Structured Data - JSON-LD */}
                <script type="application/ld+json">
                    {`
                {
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
                    "jobTitle": "Marketing Manager & Back-end Developer",
                    "worksFor": {
                        "@type": "Organization",
                        "name": "Smit Parekh Studio"
                    },
                    "description": "Smit Parekh is a Marketing Manager and Back-end Developer with expertise in crafting data-driven marketing strategies and scalable back-end solutions."
                }
            `}
                </script>
            </Helmet>




            <About />

        </>

    );
};



// Export the AboutPage
export default AboutPage;
