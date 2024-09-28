import React, { Suspense } from 'react';
import loadable from '@loadable/component';
import Loader from './components/Loader';

const Header = React.lazy(() => import('./components/Header'));
const Footer = loadable(() => import('./components/Footer'), { fallback: <Loader /> });

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
            <Header />
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
            <Footer />
            <ScrollToTop />
        </Suspense>
    );
};

export default Landing;
