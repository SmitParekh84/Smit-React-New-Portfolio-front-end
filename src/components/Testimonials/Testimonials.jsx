import React from "react";
import "./Testimonials.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Testimonials = ({ title, subtitle, testimonials }) => {
  return (
    <section className="testimonial section">
      <h2 className="section__title">{title}</h2>
      <span className="section__subtitle">{subtitle}</span>

      <div className="testimonial__container container">
        <Swiper
          loop={true}
          grabCursor={true}
          spaceBetween={24}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 48,
            },
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="testimonial__swiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide className="testimonial__card" key={index}>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonial__img"
              />
              <h3 className="testimonial__name">{testimonial.name}</h3>
              <p className="testimonial__position">{testimonial.position}</p>
              <div className="testimonial__description">
                <i className="uil uil-quote-open testimonial__icon-quote"></i>
                <p className="testimonial__content">{testimonial.testimonial}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
