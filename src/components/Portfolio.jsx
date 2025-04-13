import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Portfolio.css';

const Portfolio = () => {
  // Add state variables for projects, loading, and error
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch projects data from API
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
          // Filter to only include projects where isShowcased is explicitly true
          const showcasedProjects = data.data.filter(project => project.isShowcased === true);
          console.log('Showcased projects:', showcasedProjects.length, 'out of', data.data.length);
          setProjects(showcasedProjects);
        } else {
          throw new Error('Invalid response format');
        }
      } catch (err) {
        setError(err.message);
        console.error("Error fetching portfolio data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Enhanced arrow components for better styling
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button className="slick-arrow slick-prev" onClick={onClick}>
        <FaArrowLeft />
      </button>
    );
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <button className="slick-arrow slick-next" onClick={onClick}>
        <FaArrowRight />
      </button>
    );
  };

  const settings = {
    dots: true,
    infinite: projects.length > 3,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false, // Disable default arrows
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        }
      }
    ]
  };

  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">
        Showcasing My Best Work. Client images and information are confidential; 
        <Link to="/contact" className="button--link">
          contact me
        </Link>
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
          <>
            <Slider {...settings}>
              {projects.map((item) => (
                <div className="portfolio__slide" key={item._id}>
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
                </div>
              ))}
            </Slider>
          </>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
