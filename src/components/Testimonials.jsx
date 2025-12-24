import React, { useEffect } from "react"
import Swiper from "swiper/bundle" // Import Swiper
import LazyLoad from "react-lazyload" // Import LazyLoad

import { testimonialsData } from "../data/data" // Import testimonial data
import { Helmet } from "react-helmet-async"

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
      <Helmet>
        <title>Client Testimonials - Smit Parekh</title>
        <meta
          name="description"
          content="Read what clients say about Smit Parekh's web development and digital marketing services. Discover how his expertise has transformed businesses."
        />
        <meta
          name="keywords"
          content="testimonials, client reviews, web development, digital marketing, Smit Parekh"
        />

        {/* JSON-LD Schema for Testimonials */}
        <script type="application/ld+json">
          {`
                        {
                            "@context": "https://schema.org",
                            "@type": "WebPage",
                            "name": "Client Testimonials - Smit Parekh",
                            "url": "https://www.smitparekh.co.in/testimonials",
                            "description": "Read what clients say about Smit Parekh's web development and digital marketing services.",
                            "mainEntity": [
                                ${testimonialsData
                                  .map(
                                    (testimonial) => `
                                {
                                    "@type": "Review",
                                    "author": {
                                        "@type": "Person",
                                        "name": "${testimonial.name}"
                                    },
                                    "reviewBody": "${testimonial.description.replace(
                                      /"/g,
                                      '\\"'
                                    )}",
                                    "reviewRating": {
                                        "@type": "Rating",
                                        "ratingValue": "${testimonial.rating}",
                                        "bestRating": "5"
                                    },
                                    "itemReviewed": {
                                        "@type": "Organization",
                                        "name": "${testimonial.client}"
                                    }
                                }`
                                  )
                                  .join(",")}
                            ]
                        }
                    `}
        </script>
      </Helmet>
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
                        className={`fas fa-star testimonial__icon-star ${
                          starIndex < testimonial.rating ? "active" : ""
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

export default Testimonials
