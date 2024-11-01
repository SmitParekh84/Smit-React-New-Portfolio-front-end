import React, { useState } from "react"
import { servicesData } from "../data/data" // Adjust the import path as necessary
import { Helmet } from "react-helmet-async"

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
      <Helmet>

        <title>Smit Parekh - Professional Services: Web Development, SEO, Marketing & More</title>
        <meta
          name="description"
          content="Explore a range of professional services by Smit Parekh, including Full Stack Web Development, SEO Optimization, Digital Marketing Strategy, Social Media Marketing, Video Editing, and Graphic Design. Tailored to elevate your brand's digital presence."
        />
        <meta
          name="keywords"
          content="Smit Parekh, web development, SEO optimization, digital marketing, social media marketing, video editing, graphic design, professional services"
        />
        <meta name="author" content="Smit Parekh" />
        <link rel="canonical" href="https://www.smitparekh.studio/services" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Smit Parekh - Professional Services: Web Development, SEO, Marketing & More" />
        <meta
          property="og:description"
          content="Discover top-quality services offered by Smit Parekh, from Full Stack Web Development and SEO Optimization to Social Media Marketing and Professional Video Editing. Achieve digital success with customized solutions."
        />
        <meta
          property="og:image"
          content="https://www.smitparekh.studio/images/Smit-Parekh-Services.webp"
        />
        <meta property="og:url" content="https://www.smitparekh.studio/services" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Smit Parekh - Professional Services: Web Development, SEO, Marketing & More" />
        <meta
          name="twitter:description"
          content="Smit Parekh offers a suite of services, including Full Stack Web Development, SEO, Digital Marketing, and Video Editing, tailored to enhance your brand's online presence."
        />
        <meta name="twitter:image" content="https://www.smitparekh.studio/images/Smit-Parekh-Services.webp" />

        {/* Structured Data - JSON-LD */}
        <script type="application/ld+json">
          {`
            {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Smit Parekh's Professional Services",
                "url": "https://www.smitparekh.studio/services",
                "description": "Smit Parekh provides Full Stack Web Development, SEO Optimization, Digital Marketing, Social Media Marketing, Video Editing, and Graphic Design services.",
                "serviceType": [
                    {
                        "name": "Full Stack Web Development",
                        "description": "Build responsive and user-friendly web applications with dynamic features and RESTful API integration."
                    },
                    {
                        "name": "SEO Optimization Services",
                        "description": "Boost online visibility, improve search rankings, and drive organic traffic through tailored SEO strategies."
                    },
                    {
                        "name": "Digital Marketing Strategy",
                        "description": "Enhance brand reach and engagement with comprehensive, data-driven digital marketing strategies."
                    },
                    {
                        "name": "Social Media Marketing",
                        "description": "Increase audience engagement and brand loyalty with strategic social media content and growth tactics."
                    },
                    {
                        "name": "Professional Video Editing",
                        "description": "Create impactful, branded video content that enhances brand storytelling and engages your audience."
                    },
                    {
                        "name": "Creative Graphic Design Services",
                        "description": "Design eye-catching graphics and visuals to elevate social media presence and marketing materials."
                    }
                ],
                "image": "https://www.smitparekh.studio/images/Smit-Parekh-Services.webp"
            }
        `}
        </script>

      </Helmet>
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

export default Services
