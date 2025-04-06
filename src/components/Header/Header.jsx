import React, { useEffect, useState, useRef } from "react";
import LazyLoad from "react-lazyload";
import { headerData } from "../../data/data.js";
import { useLocation, Link } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [activeSection, setActiveSection] = useState("home");
  const darkTheme = "dark-theme";

  const headerRef = useRef(null);
  const location = useLocation();
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const navMenu = document.getElementById("nav-menu");
      const navToggle = document.getElementById("nav-toggle");
      
      if (
        isMenuOpen &&
        navMenu && 
        !navMenu.contains(event.target) &&
        navToggle && 
        !navToggle.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);
  
  // Close menu when escape is pressed
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    
    document.addEventListener('keydown', handleEscKey);
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isMenuOpen]);
  
  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen && window.innerWidth < 768) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.className = newTheme === "dark" ? darkTheme : "";
    localStorage.setItem("selected-theme", newTheme);
    localStorage.setItem(
      "selected-icon",
      newTheme === "light" ? "uil-moon" : "uil-sun"
    );
  };

  const scrollHeader = () => {
    const nav = headerRef.current;
    if (nav) {
      if (window.scrollY >= 80) {
        nav.classList.add("scroll-header");
      } else {
        nav.classList.remove("scroll-header");
      }
    }
  };

  // Update active section based on current path
  useEffect(() => {
    const path = location.pathname.split('/')[1];
    setActiveSection(path || "home");
  }, [location]);

  // Existing handlers for scrolling
  const handleActiveLink = () => {
    const sections = document.querySelectorAll("section");
    let scrollY = window.scrollY;

    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 50;
      const sectionId = section.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        setActiveSection(sectionId);
      }
    });
  };

  const scrollUp = () => {
    const scrollUpButton = document.getElementById("scroll-up");
    if (scrollUpButton) {
      if (window.scrollY >= 560) {
        scrollUpButton.classList.add("show-scroll");
      } else {
        scrollUpButton.classList.remove("show-scroll");
      }
    }
  };

  useEffect(() => {
    const selectedTheme = localStorage.getItem("selected-theme");
    const selectedIcon = localStorage.getItem("selected-icon");

    if (selectedTheme) {
      setTheme(selectedTheme);
      document.body.className = selectedTheme === "dark" ? darkTheme : "";
    }

    const handleScroll = () => {
      scrollHeader();
      scrollUp();
      handleActiveLink();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);
  
  return (
    <header className="header" id="header" ref={headerRef}>
      <nav className="nav container">
        <Link to="/" className="nav__logo" onClick={() => setActiveSection("home")}>
          <LazyLoad height={45} offset={100}>
            <img
              src={headerData.logo}
              alt={`${headerData.name} Logo`}
              className="logo-image"
            />
          </LazyLoad>
          <span>{headerData.name}</span>
        </Link>

        {/* Navbar Component */}
        <Navbar isMenuOpen={isMenuOpen} closeMenu={closeMenu} activeSection={activeSection} />

        {/* Theme and Mobile Menu Buttons */}
        <div className="nav__btns">
          <i
            className={`uil ${theme === "light" ? "uil-moon" : "uil-sun"} change-theme`}
            id="theme-button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
          ></i>
          <div 
            className="nav__toggle" 
            id="nav-toggle" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
            title="Menu"
          >
            <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
