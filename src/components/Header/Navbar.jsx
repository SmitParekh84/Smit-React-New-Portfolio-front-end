import React from "react";
import { Link } from "react-router-dom";
import { headerData } from "../../data/data"; // Import your header data

const Navbar = ({ isMenuOpen, closeMenu, activeSection }) => {
    const navLinks = isMenuOpen ? headerData.mobileNavLinks : headerData.desktopNavLinks;

    return (
        <div className={`nav__menu ${isMenuOpen ? "show-menu" : ""}`} id="nav-menu">
            <ul className="nav__list grid">
                {navLinks.map((link) => (
                    <li className="nav__item" key={link.id}>
                        <Link
                            to={link.id}
                            className={`nav__link ${activeSection === link.id ? "active-link" : ""}`}
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
                                        className="nav__dropdown-link"
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
