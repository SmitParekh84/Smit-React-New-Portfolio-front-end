import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// Import CSS module
import styles from './PortfolioPage.module.css';

// Import required modules
import { EffectCards } from 'swiper/modules';

// Import your data
import { portfolioData } from '../data/data'; // Adjust the path as necessary

export default function PortfolioPage() {
  return (
    <section className='section'>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className={styles.mySwiper}
      >
        {portfolioData.map((project) => (
          <SwiperSlide key={project.id} className={styles.swiperSlide}>
            <div className={styles.slideContent}>
              <img src={project.image} alt={project.title} className={styles.projectImage} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className='button button--flex button--small button--link services__button'>
                View Demo <i className="uil uil-arrow-right button__icon"></i>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
