import { Link } from "react-router-dom";
import { footerData } from "../data/data";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__content">
          {/* Footer main content */}
          <div className="footer__main">
            <div className="footer__info">
              <h1 className="footer__title">{footerData.title}</h1>
              <p className="footer__subtitle">{footerData.subtitle}</p>
              <div className="footer__socials">
                {footerData.socialLinks.map((link, index) => (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="footer__social"
                    key={index}
                    aria-label={`Social media link to ${link.iconClass.replace('uil uil-', '')}`}
                  >
                    <i className={link.iconClass}></i>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="footer__links-section">
              <h3 className="footer__heading">Quick Links</h3>
              <div className="footer__links footer__links-grid">
                {footerData.links.slice(0, Math.ceil(footerData.links.length / 2)).map((link, index) => (
                  <Link to={link.href} key={index} className="footer__link">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="footer__links-section">
              <h3 className="footer__heading">More</h3>
              <div className="footer__links footer__links-grid">
                {footerData.links.slice(Math.ceil(footerData.links.length / 2)).map((link, index) => (
                  <Link to={link.href} key={index} className="footer__link">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="footer__contact">
              <h3 className="footer__heading">Get In Touch</h3>
              <Link to="/contact" className="footer__contact-button">
                Contact Me
                <i className="uil uil-arrow-right"></i>
              </Link>
              <p className="footer__text">Let's work together to create something amazing.</p>
            </div>
          </div>
          
          {/* Footer bottom - copyright */}
          <div className="footer__bottom">
            <div className="footer__bottom-content">
              <p className="footer__copy" dangerouslySetInnerHTML={{ __html: footerData.copyright }}></p>
              <p className="footer__made-with">Made with <span className="footer__heart">❤</span> by Smit Parekh</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
