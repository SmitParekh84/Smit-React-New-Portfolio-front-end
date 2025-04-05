import React, { useState } from "react"
import { servicesData } from "../data/data" // Adjust the import path as necessary
import "./Services.css"

const Services = () => {
  const [activeModalIndex, setActiveModalIndex] = useState(null)

  const openModal = (index) => {
    setActiveModalIndex(index)
  }

  const closeModal = () => {
    setActiveModalIndex(null)
  }

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">
        Tailored Solutions for Your Needs
      </span>

      <div className="services__container container grid">
        {servicesData.map((service, index) => (
          <div className="services__content" key={index}>
            <div>
              <i className={`${service.icon} skills__icon`}></i>
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
  )
}

export default Services
