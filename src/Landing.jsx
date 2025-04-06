import React, { Suspense, lazy } from 'react';
import Loader from './components/Loader';
import Home from './components/Home';
// Import About directly to avoid lazy loading issues with modal
import About from './components/About';
import Skills from './components/Skills';
import SEO from './components/SEO/SEO';
import { Qualification, Services, Project, Testimonials } from "./components/LandingComponents";
import Portfolio from './components/Portfolio';
import ContactMe from './components/ContactMe/ContactMe';

// Lazy load only components that don't have immediate user interaction
const ScrollToTop = lazy(() => import('./components/ScrollToTop'));

const Landing = () => {
    // Combine all main schema information
    const mainSchema = {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        "mainEntity": {
            "@type": "Person",
            "name": "Smit Parekh",
            "url": "https://www.smitparekh.studio",
            "sameAs": [
                "https://linkedin.com/in/smit-parekh-n/",
                "https://github.com/SmitParekh84",
                "https://www.instagram.com/smit_8_4/",
                "https://www.facebook.com/SmitParekh84/"
            ],
            "jobTitle": "Digital Marketing Manager & Full-stack Developer",
            "worksFor": {
                "@type": "Organization",
                "name": "Smit Parekh Studio"
            },
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Anand",
                "addressRegion": "Gujarat",
                "addressCountry": "India",
                "postalCode": "388001"
            },
            "alumniOf": [
                {
                    "@type": "EducationalOrganization",
                    "name": "Gujarat Technological University",
                    "sameAs": "https://www.gtu.ac.in/"
                }
            ],
            "knowsAbout": [
                "Web Development",
                "Digital Marketing",
                "SEO Optimization",
                "Content Creation",
                "Social Media Marketing",
                "JavaScript",
                "React.js",
                "Node.js"
            ],
            "description": "Smit Parekh is a Digital Marketing Manager and Full-stack Developer with expertise in SEO, web development, and creating engaging online content."
        }
    };

    return (
        <>
            <SEO 
                title="Smit Parekh | Digital Marketing Manager & Full-stack Developer"
                description="Smit Parekh is a Digital Marketing Manager & Full-stack Developer helping businesses grow online with SEO optimization, web development, and strategic digital marketing services."
                keywords="Smit Parekh, Digital Marketing Manager, Full-stack Developer, SEO optimization, web development services, digital marketing expert, professional portfolio"
                canonicalUrl="https://www.smitparekh.studio/portfolio"
                ogImage="https://www.smitparekh.studio/images/Smit-Parekh-About.webp"
                twitterImage="https://www.smitparekh.studio/images/Smit-Parekh-About.webp"
                structuredData={mainSchema}
            >
                {/* Additional meta tags for portfolio page */}
                <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
                <meta name="google-site-verification" content="your-verification-code" />
                <meta name="msvalidate.01" content="your-bing-verification-code" />
                <link rel="alternate" hrefLang="en" href="https://www.smitparekh.studio/portfolio" />
            </SEO>

            <main className="main">
                <Home />
                {/* Load About outside of Suspense to avoid modal issues */}
                <About />
                <Suspense fallback={<div className="loader-overlay-componet"><Loader /></div>}>
                    <Skills />
                    <Qualification />
                    <Services />
                    <Portfolio />
                    <Project />
                    <Testimonials />
                    <ContactMe />
                </Suspense>
            </main>

            <Suspense fallback={null}>
                <ScrollToTop />
            </Suspense>
        </>
    );
};

export default Landing;
