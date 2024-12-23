import React, { Suspense, useEffect, useState } from 'react';
import loadable from '@loadable/component';
import Loader from './components/Loader';
import { Helmet } from "react-helmet-async"
import { aboutData, contactData, homeData, portfolioData, qualificationsData, servicesData, skillsData, testimonialsData } from './data/data';
import LazyLoad from 'react-lazyload';
import Swiper from 'swiper';
import axios from 'axios'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Portfolio from './components/Portfolio';
import ContactMe from './components/ContactMe';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';






const Qualification = () => {
    const [activeTab, setActiveTab] = useState("work")

    // Function to handle tab change
    const handleTabChange = (tab) => {
        setActiveTab(tab)
    }

    return (
        <>




            <section className="qualification__section" id="qualification">
                <h2 className="section__title">Qualification</h2>
                <span className="section__subtitle">My Journey to Expertise</span>

                <div className="qualification__container container">
                    <div className="qualification__tabs">
                        <div
                            className={`qualification__button button--flex ${activeTab === "education" ? "qualification__active" : ""
                                }`}
                            onClick={() => handleTabChange("education")}
                        >
                            <i className="uil uil-graduation-cap qualification__icon"></i>
                            Education
                        </div>

                        <div
                            className={`qualification__button button--flex ${activeTab === "work" ? "qualification__active" : ""
                                }`}
                            onClick={() => handleTabChange("work")}
                        >
                            <i className="uil uil-briefcase-alt qualification__icon"></i>
                            Work Experience
                        </div>
                    </div>

                    <div className="qualification__sections">
                        {/* Education Tab Content */}
                        <div
                            className={`qualification__content ${activeTab === "education" ? "qualification__active" : ""
                                }`}
                            data-content
                            id="education"
                        >
                            {qualificationsData.education.map((qual, index) => (
                                <React.Fragment key={index}>
                                    <div className="qualification__data">
                                        {/* Insert an empty <div> before every second qualification */}
                                        {index % 2 === 1 && <div></div>}
                                        {index % 2 === 1 && (
                                            <div>
                                                <span className="qualification__rounder"></span>
                                                <span className="qualification__line"></span>
                                            </div>
                                        )}
                                        <div>
                                            <h3 className="qualification__title">{qual.title}</h3>
                                            <span className="qualification__subtitle">
                                                {qual.subtitle}
                                            </span>
                                            <div className="qualification__calendar">
                                                <i className="uil uil-calendar-alt"></i>
                                                {qual.date}
                                            </div>
                                        </div>
                                        {index % 2 === 0 && (
                                            <div>
                                                <span className="qualification__rounder"></span>
                                                <span className="qualification__line"></span>
                                            </div>
                                        )}
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>

                        {/* Work Tab Content */}
                        <div
                            className={`qualification__content ${activeTab === "work" ? "qualification__active" : ""
                                }`}
                            data-content
                            id="work"
                        >
                            {qualificationsData.work.map((qual, index) => (
                                <React.Fragment key={index}>
                                    <div className="qualification__data">
                                        {/* Insert an empty <div> before every second qualification */}
                                        {index % 2 === 1 && <div></div>}
                                        {index % 2 === 1 && (
                                            <div>
                                                <span className="qualification__rounder"></span>
                                                <span className="qualification__line"></span>
                                            </div>
                                        )}
                                        <div>
                                            <h3 className="qualification__title">{qual.title}</h3>
                                            <span className="qualification__subtitle">
                                                {qual.subtitle}
                                            </span>
                                            <div className="qualification__calendar">
                                                <i className="uil uil-calendar-alt"></i>
                                                {qual.date}
                                            </div>
                                        </div>
                                        {index % 2 === 0 && (
                                            <div>
                                                <span className="qualification__rounder"></span>
                                                <span className="qualification__line"></span>
                                            </div>
                                        )}
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
const Services = () => {
    const [activeModalIndex, setActiveModalIndex] = useState(null)

    const openModal = (index) => {
        setActiveModalIndex(index)
    }

    const closeModal = () => {
        setActiveModalIndex(null)
    }

    return (

        <>

            <section className="services section" id="services">
                <h2 className="section__title">Services</h2>
                <span className="section__subtitle">
                    Tailored Solutions for Your Needs
                </span>

                <div className="services__container container grid">
                    {servicesData.map((service, index) => (
                        <div className="services__content" key={index}>
                            <div>
                                <i className={`${service.icon} skills__icon`}></i>{" "}
                                {/* Use the icon from data.js */}
                                <h3 className="services__title">{service.title}</h3>
                            </div>
                            <span
                                className="button button--flex button--small button--link services__button"
                                onClick={() => openModal(index)}
                            >
                                View more
                                <i className="uil uil-arrow-right button__icon"></i>
                            </span>

                            {/* Modal */}
                            {activeModalIndex === index && (
                                <div className="services__modal active-modal">
                                    <div className="services__modal-content">
                                        <h4 className="services__modal-title">{service.title}</h4>
                                        <i
                                            className="uil uil-times services__modal-close"
                                            onClick={closeModal}
                                        ></i>

                                        <ul className="services__modal-services grid">
                                            {service.description.map((desc, i) => (
                                                <li className="services__modal-service" key={i}>
                                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                                    <p>{desc}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}



const Project = () => {
    return (
        <section className="project section">
            <div className="project__bg">
                <div className="project__container container grid">
                    <div className="project__data">
                        <h2 className="project__title">You have a new project?</h2>
                        <p className="project__description">
                            Contact me now and get discounts on your Web development projects.
                        </p>
                        <a href="/contact" className="button button--flex button--white">
                            Contact me
                            <i className="uil uil-message project__icon button__icon"></i>
                        </a>
                    </div>
                    {/* Uncomment the line below to include the image */}
                    {/* <img src="assets/img/project.png" alt="" className="project__img" /> */}
                </div>
            </div>
        </section>
    );
};
const Testimonials = () => {
    useEffect(() => {
        const swiperTestimonial = new Swiper(".testimonial__container", {
            loop: true,
            grabCursor: true,
            spaceBetween: 48,
            autoplay: {
                delay: 3000, // Time in milliseconds before switching to the next slide
                disableOnInteraction: false, // Continue autoplay after user interactions
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },

            breakpoints: {
                320: {
                    slidesPerView: 1, // For mobile devices
                    spaceBetween: 20,
                },
                568: {
                    slidesPerView: 1, // For tablets
                    spaceBetween: 30,
                },
                768: {
                    slidesPerView: 2, // For small laptops
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 2, // For larger devices
                    spaceBetween: 48,
                },
            },
            mousewheel: true,
            keyboard: true,
        })

        return () => {
            if (swiperTestimonial) swiperTestimonial.destroy()
        }
    }, [])

    return (
        <>

            <section className="testimonial section">
                <h2 className="section__title">Client Testimonials</h2>
                <span className="section__subtitle">Hear From My Happy Clients</span>

                <div className="testimonial__container container swiper-container">
                    <div className="swiper-wrapper">
                        {/* Render testimonials */}
                        {testimonialsData.map((testimonial, index) => (
                            <div className="testimonial__content swiper-slide" key={index}>
                                <div className="testimonial__data">
                                    <div className="testimonial__header">
                                        <LazyLoad height={200} offset={100}>
                                            <img
                                                src={testimonial.image}
                                                alt="Client"
                                                className="testimonial__img"
                                            />
                                        </LazyLoad>
                                        <div>
                                            <h3 className="testimonial__name">{testimonial.name}</h3>
                                            <span className="testimonial__client">
                                                {testimonial.client}
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        {[...Array(5)].map((_, starIndex) => (
                                            <i
                                                key={starIndex}
                                                className={`fas fa-star testimonial__icon-star ${starIndex < testimonial.rating ? "active" : ""
                                                    }`}
                                            ></i>
                                        ))}
                                    </div>
                                </div>
                                <p className="testimonial__description">
                                    {testimonial.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Add Swiper pagination */}
                    <div className="swiper-pagination swiper-pagination-testimonial"></div>
                </div>
            </section>

        </>
    )
}

const ScrollToTop = React.lazy(() => import('./components/ScrollToTop'));

const Landing = () => {

    return (
        <>
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
                <meta name="twitter:site" content="@hunteredits84" />

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
                <Suspense fallback={<div className="loader-overlay-componet"><Loader /></div>}>
                    <About />
                    <Skills />
                    <Qualification />
                    <Services />
                    <Portfolio />
                    <Project />
                    <Testimonials />
                    <ContactMe />
                </Suspense>
            </main>

            <ScrollToTop />
        </>
    );
};

export default Landing;
