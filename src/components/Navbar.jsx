import React, { useState } from "react";
import { Link } from "react-router-dom";
import { headerData } from "../data/data";  // Import your header data

const Navbar = ({ isMenuOpen, closeMenu, activeSection }) => {
    const navLinks = isMenuOpen ? headerData.mobileNavLinks : headerData.desktopNavLinks;
    return (
        <div className={`nav__menu ${isMenuOpen ? "show-menu" : ""}`} id="nav-menu">
            <ul className="nav__list grid">
                {navLinks.map((link) => (
                    <li className="nav__item" key={link.id}>
                        <Link
                            to={`${link.id}`}
                            className={`nav__link ${activeSection === link.id ? "active-link" : ""}`}
                            onClick={closeMenu}
                        >
                            <i className={`uil ${link.icon} nav__icon`}></i>
                            {link.label}
                        </Link>

                        {/* Dropdown for "About" section */}
                        {link.id === "/about" && (
                            <div className="nav__dropdown">
                                <Link to="/skills" className="nav__dropdown-link">Skills</Link>
                                <Link to="/qualification" className="nav__dropdown-link">Qualification</Link>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;
