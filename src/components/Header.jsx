/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header" id="header">
            <nav className="nav container">
                <a href="#" className="nav__logo">Smit Parekh</a>
                <div className={`nav__menu ${isMenuOpen ? 'open' : ''}`} id="nav-menu">
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className="nav__link">
                                <i className="uil uil-estate nav__icon"></i> Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="./about.html" className="nav__link">
                                <i className="uil uil-user nav__icon"></i> About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className="nav__link">
                                <i className="uil uil-file-alt nav__icon"></i> Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#services" className="nav__link">
                                <i className="uil uil-briefcase-alt nav__icon"></i> Services
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#portfolio" className="nav__link">
                                <i className="uil uil-scenery nav__icon"></i> Portfolio
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                                <i className="uil uil-message nav__icon"></i> Contact
                            </a>
                        </li>
                    </ul>
                    <i className="uil uil-times nav__close" id="nav-close" onClick={toggleMenu}></i>
                </div>
                <div className="nav__btns">
                    {/* Theme change button */}
                    <i className="uil uil-moon change-theme" id="theme-button"></i>

                    <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
                        <i className="uil uil-apps"></i>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
