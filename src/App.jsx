import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import './assets/css/styles.css'; // Your custom styles
import './assets/css/swiper-bundle.min.css';

import ScrollToTop from './components/ScrollToTop';
import About from './components/About';
import Skills from './components/Skills';
import Qualification from './components/Qualification';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Project from './components/Project';
import Testimonials from './components/Testimonials';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';


const App = () => {
    return (
        <>
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
            </>
    );
};

export default App;
