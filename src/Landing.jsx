import React, { Suspense } from 'react';
import loadable from '@loadable/component';
import Loader from './components/Loader';
import { Helmet } from "react-helmet-async"

const Home = loadable(() => import('./components/Home'), { fallback: <Loader /> });
const About = loadable(() => import('./components/About'), { fallback: <Loader /> });
const Skills = loadable(() => import('./components/Skills'), { fallback: <Loader /> });
const Qualification = loadable(() => import('./components/Qualification'), { fallback: <Loader /> });
const Services = loadable(() => import('./components/Services'), { fallback: <Loader /> });
const Portfolio = loadable(() => import('./components/Portfolio'), { fallback: <Loader /> });
const Project = loadable(() => import('./components/Project'), { fallback: <Loader /> });
const Testimonials = loadable(() => import('./components/Testimonials'), { fallback: <Loader /> });
const ContactMe = loadable(() => import('./components/ContactMe'), { fallback: <Loader /> });
const ScrollToTop = loadable(() => import('./components/ScrollToTop'), { fallback: <Loader /> });

const Landing = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Helmet>
                <title>Smit Parekh - Digital Marketing & Full-stack Developer</title>
                <meta name="description" content="Welcome to Smit Parekh's portfolio. Discover my skills in digital marketing, web development, SEO, and video editing. Explore my projects and services that can elevate your brand's online presence." />
                <meta name="keywords" content="Smit Parekh, Hunteredits2.0, Hunteredits, digital marketing, web development, SEO, video editing, portfolio" />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Smit Parekh" />
                <meta name="publisher" content="Smit Parekh Studio" />
                <link rel="canonical" href="https://www.smitparekh.studio/" />

                {/* Open Graph Tags */}
                <meta property="og:title" content="Smit Parekh - Digital Marketing & Full-stack Developer Portfolio" />
                <meta property="og:description" content="Welcome to Smit Parekh's portfolio. Discover my skills in digital marketing, web development, SEO, and video editing." />
                <meta property="og:image" content="https://www.smitparekh.studio/images/Smit-Parekh-About.webp" />
                <meta property="og:url" content="https://www.smitparekh.studio" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Smit Parekh" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Smit Parekh - Digital Marketing & Full-stack Developer Portfolio" />
                <meta name="twitter:description" content="Welcome to Smit Parekh's portfolio. Discover my skills in digital marketing, web development, SEO, and video editing." />
                <meta name="twitter:image" content="https://www.smitparekh.studio/images/Smit-Parekh-About.webp" />
                <meta name="twitter:site" content="@yourtwitterhandle" />

                <script type="application/ld+json">
                    {`
            {
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Smit Parekh",
                "url": "https://www.smitparekh.studio",
                "sameAs": [
                    "https://linkedin.com/in/smitparekh84/",
                    "https://github.com/SmitParekh84",
                    "https://www.instagram.com/smit_8_4/",
                    "https://www.facebook.com/SmitParekh84/"
                ],
                "jobTitle": "Digital Marketing & Full-stack Developer",
                "worksFor": {
                    "@type": "Organization",
                    "name": "Smit Parekh"
                },
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Anand",
                    "addressRegion": "Gujarat",
                    "addressCountry": "India",
                    "postalCode": "388001"
                },
                "description": "Smit Parekh is a digital marketing manager and web developer with expertise in SEO, video editing, and creating engaging online content."
            }
        `}
                </script>
            </Helmet>

            <main className="main">

                <Home />
                <About />
                <Skills />
                <Qualification />
                <Services />
                <Portfolio />
                <Project />
                <Testimonials />
                <ContactMe />
            </main>

            <ScrollToTop />
        </Suspense>
    );
};

export default Landing;
