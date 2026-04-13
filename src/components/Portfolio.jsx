import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Portfolio.css';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${import.meta.env.VITE_API_URL}/projects`);

        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }

        const data = await response.json();

        if (data.success && data.data) {
          const showcasedProjects = data.data.filter(project => project.isShowcased === true);
          setProjects(showcasedProjects);
        } else {
          throw new Error('Invalid response format');
        }
      } catch (err) {
        setError(err.message);
        console.error('Error fetching portfolio data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">
        Showcasing My Best Work. Client images and information are confidential;{' '}
        <Link to="/contact" className="button--link">
          contact me
        </Link>{' '}
        for project inquiries.
      </span>

      <div className="portfolio__container container">
        {loading ? (
          <div className="portfolio__loading">
            <div className="loader"></div>
            <p>Loading projects...</p>
          </div>
        ) : error ? (
          <div className="portfolio__error">
            <p>Error loading portfolio: {error}</p>
            <button
              onClick={() => window.location.reload()}
              className="portfolio__retry-btn"
            >
              <i className="uil uil-redo"></i> Try Again
            </button>
          </div>
        ) : projects.length === 0 ? (
          <div className="portfolio__empty">
            <i className="uil uil-file-question-alt portfolio__empty-icon"></i>
            <h3>No Projects Found</h3>
            <p>There are currently no showcase projects available in the portfolio.</p>
            <div className="portfolio__empty-actions">
              <Link to="/contact" className="portfolio__contact-btn">
                <i className="uil uil-envelope"></i> Contact Me
              </Link>
              <button
                onClick={() => window.location.reload()}
                className="portfolio__retry-btn"
              >
                <i className="uil uil-redo"></i> Refresh Page
              </button>
            </div>
          </div>
        ) : (
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            loop={projects.length > 3}
            breakpoints={{
              0:    { slidesPerView: 1 },
              768:  { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="portfolio__swiper"
          >
            {projects.map((item) => (
              <SwiperSlide key={item._id} className="portfolio__slide">
                <div className="portfolio__content">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="portfolio__img"
                    loading="lazy"
                  />
                  <div className="portfolio_">
                    <h3 className="portfolio__title">{item.title}</h3>
                    <p className="portfolio__description">{item.shortDescription}</p>
                    <Link
                      to={`/project/${encodeURIComponent(item.title)}`}
                      className="portfolio__link"
                    >
                      View Details <i className="uil uil-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
