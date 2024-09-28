// Header.jsx
import React, { useEffect, useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu visibility
    const [theme, setTheme] = useState('light'); // State for theme
    const darkTheme = 'dark-theme';
    const iconTheme = 'uil-sun';

    // Function to toggle menu visibility
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle menu open/close
    };

    // Function to close the menu
    const closeMenu = () => {
        setIsMenuOpen(false); // Close menu
    };

    // Function to handle theme toggle
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.body.className = newTheme === 'dark' ? darkTheme : ''; // Apply theme class to body
        localStorage.setItem('selected-theme', newTheme);
        localStorage.setItem('selected-icon', newTheme === 'light' ? 'uil-moon' : 'uil-sun');
    };

    // Function to handle scroll events for changing header background
    const scrollHeader = () => {
        const nav = document.getElementById("header");
        if (window.scrollY >= 80) {
            nav.classList.add("scroll-header");
        } else {
            nav.classList.remove("scroll-header");
        }
    };

    // Function to handle scroll events for showing scroll up button
    const scrollUp = () => {
        const scrollUp = document.getElementById("scroll-up");
        if (window.scrollY >= 560) {
            scrollUp.classList.add("show-scroll");
        } else {
            scrollUp.classList.remove("show-scroll");
        }
    };

    useEffect(() => {
        // Check for previously selected theme and icon
        const selectedTheme = localStorage.getItem('selected-theme');
        const selectedIcon = localStorage.getItem('selected-icon');

        // Apply previously selected theme
        if (selectedTheme) {
            setTheme(selectedTheme);
            document.body.className = selectedTheme === 'dark' ? darkTheme : ''; // Set body class
        }

        // Set scroll event listeners
        window.addEventListener("scroll", () => {
            scrollHeader();
            scrollUp();
        });

        // Cleanup event listeners on component unmount
        return () => {
            window.removeEventListener("scroll", () => {
                scrollHeader();
                scrollUp();
            });
        };
    }, []);

    return (
        <header className="header" id="header">
            <nav className="nav container">
                <a href="#" className="nav__logo">Smit Parekh</a>
                <div className={`nav__menu ${isMenuOpen ? 'show-menu' : ''}`} id="nav-menu">
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className="nav__link" onClick={closeMenu}>
                                <i className="uil uil-estate nav__icon"></i>Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link" onClick={closeMenu}>
                                <i className="uil uil-user nav__icon"></i>About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className="nav__link" onClick={closeMenu}>
                                <i className="uil uil-file-alt nav__icon"></i>Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#services" className="nav__link" onClick={closeMenu}>
                                <i className="uil uil-briefcase-alt nav__icon"></i>Services
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#portfolio" className="nav__link" onClick={closeMenu}>
                                <i className="uil uil-scenery nav__icon"></i>Portfolio
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav__link" onClick={closeMenu}>
                                <i className="uil uil-message nav__icon"></i>Contact
                            </a>
                        </li>
                    </ul>
                    <i className="uil uil-times nav__close" onClick={closeMenu}></i>
                </div>
                <div className="nav__btns">
                    {/* Theme change button */}
                    <i
                        className={`uil ${theme === 'light' ? 'uil-moon' : 'uil-sun'} change-theme`}
                        id="theme-button"
                        onClick={toggleTheme}
                    ></i>
                    <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
                        <i className="uil uil-apps"></i>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
