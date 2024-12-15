import React from "react";
import { portfolioData } from "../data/data.js"; // Import the data
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';  // Import arrow icons from react-icons
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Portfolio = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,  // Show one slide per view on mobile
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <button className="slick-arrow slick-next"><FaArrowRight /></button>,
    prevArrow: <button className="slick-arrow slick-prev"><FaArrowLeft /></button>,
    responsive: [
      {
        breakpoint: 768, // Mobile devices (tablets and below)
        settings: {
          slidesToShow: 1, // Show one slide per view on mobile
        }
      },
      {
        breakpoint: 1024, // Tablets and small laptops
        settings: {
          slidesToShow: 2, // Show two slides per view
        }
      },
      {
        breakpoint: 1200, // Larger screens (desktops)
        settings: {
          slidesToShow: 3, // Show three slides per view
        }
      }
    ]
  };

  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">
        Showcasing My Best Work. Client images and information are confidential; <a href="/contact" className="button button--flex button--small button--link services__button">
          contact me
        </a> me for project inquiries.
      </span>

      <div className="portfolio__container container">
        <Slider {...settings}>
          {portfolioData.map((item) => (
            <div className="portfolio__content grid" key={item.id}>
              <img src={item.image} alt={item.title} className="portfolio__img" loading="lazy" />
              <div className="portfolio_">
                <h3 className="portfolio__title">{item.title}</h3>
                <p className="portfolio__description">{item.description}</p>
                {item.demoLink !== "#" && (
                  <a href={item.demoLink} className="button button--flex button--small portfolio__button">
                    {item.demoBtn === "view" ? "View" : "Demo"}
                    <i className="uil uil-arrow-right button__icon"></i>
                  </a>
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Portfolio;
