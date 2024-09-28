import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';
import './assets/css/styles.css'; // Your custom styles
import './assets/css/swiper-bundle.min.css'; // Swiper styles
import Loader from './components/Loader';


// Lazy load the essential components and pages
const Header = React.lazy(() => import('./components/Header'));
const Footer = loadable(() => import('./components/Footer'), {
    fallback: <Loader />,
});

// Pages/components for routing
const Landing = loadable(() => import('./Landing'), { fallback: <Loader /> });
const AboutPage = loadable(() => import('./components/About'), { fallback: <Loader /> });
const SkillsPage = loadable(() => import('./components/Skills'), { fallback: <Loader /> });
const PortfolioPage = loadable(() => import('./pages/PortfolioPage'), { fallback: <Loader /> });
const ContactPage = loadable(() => import('./components/ContactMe'), { fallback: <Loader /> });
const ServicesPage = loadable(() => import('./components/Services'), { fallback: <Loader /> });
const ScrollToTop = loadable(() => import('./components/ScrollToTop'), { fallback: <Loader /> });

const App = () => {
    return (
        <Router>
            <Suspense fallback={<Loader />}>
                <Header />
                <main className="main">
                    {/* Set up the routing for pages */}
                    <Routes>
                        <Route path="/" element={<Landing />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/skills" element={<SkillsPage />} />
                        <Route path="/portfolio" element={<PortfolioPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/services" element={<ServicesPage />} />
                        {/* Add more routes as needed */}
                    </Routes>
                </main>
                <Footer />
                <ScrollToTop />
            </Suspense>
         
        </Router>
    );
};

export default App;
