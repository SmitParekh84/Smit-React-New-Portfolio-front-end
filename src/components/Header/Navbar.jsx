import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { headerData } from "../../data/data.js";
import "./Navbar.css";

const Navbar = ({ isMenuOpen, closeMenu, activeSection }) => {
  const [mobileFreeToolsOpen, setMobileFreeToolsOpen] = useState(false);
  const location = useLocation();

  // Function to check if a link is active
  const isLinkActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  // Toggle mobile free tools submenu
  const toggleMobileFreeTools = (e) => {
    e.preventDefault();
    setMobileFreeToolsOpen(!mobileFreeToolsOpen);
  };

  // Handle mega menu link clicks - close menu and handle navigation
  const handleMegaMenuLinkClick = (e) => {
    closeMenu();
    // Close any open mega menus by removing hover state
    const megaMenus = document.querySelectorAll('.mega-menu');
    megaMenus.forEach(menu => {
      menu.classList.remove('active');
    });
  };

  return (
    <div className={`nav__menu ${isMenuOpen ? "show-menu" : ""}`} id="nav-menu">
      {/* Desktop Navigation */}
      <ul className="nav__list grid">
        {headerData.desktopNavLinks.map((link) => (
          <li key={link.id} className="nav__item">
            <Link
              to={link.id}
              className={`nav__link ${isLinkActive(link.id) ? "active-link" : ""}`}
              onClick={closeMenu}
            >
              <i className={`uil ${link.icon} nav__icon`}></i> {link.label}
            </Link>

            {/* Regular Dropdown */}
            {link.subLinks && !link.isMegaMenu && (
              <div className="nav__dropdown">
                {link.subLinks.map((subLink) => (
                  <Link
                    key={subLink.id}
                    to={subLink.id}
                    className={`nav__dropdown-link ${
                      isLinkActive(subLink.id) ? "active-link" : ""
                    }`}
                    onClick={closeMenu}
                  >
                    <i className={`uil ${subLink.icon} nav__dropdown-icon`}></i>
                    {subLink.label}
                  </Link>
                ))}
              </div>
            )}

            {/* Mega Menu */}
            {link.isMegaMenu && link.megaMenuColumns && (
              <div className="mega-menu" aria-hidden="true">
                <div className="mega-menu__inner">
                  {link.megaMenuColumns.map((column, index) => (
                    <div key={index} className="mega-menu__column">
                      <h4 className="mega-menu__title">{column.title}</h4>
                      <ul className="mega-menu__list">
                        {column.links.map((tool) => (
                          <li key={tool.id} className="mega-menu__item">
                            <Link
                              to={tool.id}
                              className="mega-menu__link"
                              onClick={handleMegaMenuLinkClick}
                            >
                              <i className={`uil ${tool.icon} mega-menu__icon`}></i>
                              {tool.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  {/* Featured section */}
                  {link.featured && (
                    <div className="mega-menu__column">
                      <div className="mega-menu__featured">
                        <h5 className="mega-menu__featured-title">
                          <i className={`uil ${link.featured.icon} mr-1`}></i>
                          {link.featured.title}
                        </h5>
                        <p className="mega-menu__featured-desc">
                          {link.featured.description}
                        </p>
                        <Link
                          to={link.featured.link}
                          className="button button--small button--flex"
                          onClick={handleMegaMenuLinkClick}
                        >
                          {link.featured.linkText}
                          <i className="uil uil-arrow-right button__icon"></i>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="mobile-nav">
          <div className="mobile-nav__header">
            <div className="mobile-nav__title">Menu</div>
          </div>
          <ul className="mobile-nav__list">
            {headerData.mobileNavLinks.map((link) => (
              <li key={link.id} className="mobile-nav__item">
                {link.id === "/free-tools" ? (

                  <>
                    <div 
                      className={`mobile-nav__link ${isLinkActive(link.id) ? "active-link" : ""}`}
                      onClick={toggleMobileFreeTools}
                    >
                      <div className="mobile-nav__link-content">
                        <i className={`uil ${link.icon} mobile-nav__icon`}></i>
                        {link.label}
                      </div>
                      <i className={`uil ${mobileFreeToolsOpen ? 'uil-angle-up' : 'uil-angle-down'} mobile-nav__dropdown-arrow ${mobileFreeToolsOpen ? 'open' : ''}`}></i>
                    </div>
                    
                    {mobileFreeToolsOpen && (
                      <div className="mobile-nav__submenu">
                      <Link
                             to={"/free-tools"}
                             className="mobile-nav__link "
                             onClick={closeMenu}
                           >
                           <div className="mobile-nav__link-content">
                             <i className={`uil uil-apps mobile-nav__icon`}></i>
                             All Tools</div>
                           </Link>
                        {headerData.desktopNavLinks
                          .find(item => item.id === "/free-tools")
                          ?.subLinks.map((subLink) => (
                            <Link
                              key={subLink.id}
                              to={subLink.id}
                              className={`mobile-nav__submenu-link ${isLinkActive(subLink.id) ? "active-link" : ""}`}
                              onClick={closeMenu}
                            >
                              <i className={`uil ${subLink.icon} mobile-nav__submenu-icon`}></i>
                              {subLink.label}
                            </Link>
                            
                          ))}
                         
                      </div>
                      
                    )}
                    
                  </>
                ) : (
                  <Link
                    to={link.id}
                    className={`mobile-nav__link ${isLinkActive(link.id) ? "active-link" : ""}`}
                    onClick={closeMenu}
                  >
                    <div className="mobile-nav__link-content">
                      <i className={`uil ${link.icon} mobile-nav__icon`}></i>
                      {link.label}
                    </div>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      <i className="uil uil-times nav__close" id="nav-close" onClick={closeMenu}></i>
    </div>
  );
};

export default Navbar;
