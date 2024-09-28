import React, { useEffect } from 'react';
import Swiper from 'swiper';
import { portfolioData } from '../data/data.js'; // Import the data

const Portfolio = () => {
  useEffect(() => {
    const swiperPortfolio = new Swiper('.portfolio__container', {
    
      loop: true,
      grabCursor: true,
      spaceBetween: 30,
      autoplay: {
        delay: 6000, // Time in milliseconds before switching to the next slide
        disableOnInteraction: false, // Continue autoplay after user interactions
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      },
      mousewheel: true,
  keyboard: true,
    });

    return () => {
      if (swiperPortfolio) swiperPortfolio.destroy();
    };
  }, []);

  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most recent works</span>

      <div className="portfolio__container container swiper-container">
        <div className="swiper-wrapper">
          {/* Dynamically map through portfolioData */}
          {portfolioData.map((item) => (
            <div className="portfolio__content grid swiper-slide" key={item.id}>
              <img src={item.image} alt={item.title} className="portfolio__img" />
              <div className="portfolio_">
                <h3 className="portfolio__title">{item.title}</h3>
                <p className="portfolio__description">{item.description}</p>
                <a href={item.demoLink} className="button button--flex button--small portfolio__button">
                  Demo
                  <i className="uil uil-arrow-right button__icon"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Add arrows */}
        <div className="swiper-button-next">
          <i className="uil uil-angle-right-b swiper-portfolio-icon"></i>
        </div>
        <div className="swiper-button-prev">
          <i className="uil uil-angle-left-b swiper-portfolio-icon"></i>
        </div>

        {/* Add Pagination */}
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
};

export default Portfolio;