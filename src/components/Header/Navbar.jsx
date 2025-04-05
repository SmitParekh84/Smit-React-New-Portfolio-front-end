import React from "react";
import { Link, useLocation } from "react-router-dom";
import { headerData } from "../../data/data"; // Import your header data

const Navbar = ({ isMenuOpen, closeMenu, activeSection }) => {
    const navLinks = isMenuOpen ? headerData.mobileNavLinks : headerData.desktopNavLinks;
    const location = useLocation();

    // Function to determine if a link is active
    const isActive = (path) => {
        if (path === "/") return location.pathname === "/";
        return location.pathname.startsWith(path);
    };

    return (
        <div className={`nav__menu ${isMenuOpen ? "show-menu" : ""}`} id="nav-menu">
            {/* Add close button for mobile view */}
            {isMenuOpen && (
                <div className="nav__close" id="nav-close" onClick={closeMenu}>
                    <i className="uil uil-times"></i>
                </div>
            )}

            <ul className="nav__list grid">
                {navLinks.map((link) => (
                    <li className="nav__item" key={link.id}>
                        <Link
                            to={link.id}
                            className={`nav__link ${isActive(link.id) ? "active-link" : ""}`}
                            onClick={closeMenu}
                        >
                            <i className={`uil ${link.icon} nav__icon`}></i>
                            {link.label}
                        </Link>

                        {/* If this link has subLinks, display the dropdown */}
                        {link.subLinks && (
                            <div className="nav__dropdown">
                                {link.subLinks.map((subLink) => (
                                    <Link
                                        key={subLink.id}
                                        to={subLink.id}
                                        className={`nav__dropdown-link ${isActive(subLink.id) ? "active-link" : ""}`}
                                        onClick={closeMenu}
                                    >
                                        <i className={`uil ${subLink.icon} nav__dropdown-icon`}></i>
                                        {subLink.label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;
