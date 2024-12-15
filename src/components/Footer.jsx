import React from 'react';
import { footerData } from '../data/data'; // Adjust the path as necessary
import LazyLoad from 'react-lazyload';
import { headerData } from '../data/data.js';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__bg">
                <div className="footer__container container grid">
                    <div className="footer__brand">
                        <a href="https://www.smitparekh.studio/" alt="Smit Parekh">
                            <h1 className="footer__title">{footerData.title}</h1>
                            <span className="footer__subtitle">{footerData.subtitle}</span>
                        </a>
                    </div>
                    <ul className="footer__links">
                        {footerData.links.map((link, index) => (
                            <li key={index}>
                                <a href={link.href} className="footer__link">{link.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="footer__socials">
                        {footerData.socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer__social"
                            >
                                <i className={social.iconClass}></i>
                            </a>
                        ))}
                    </div>
                </div>
                <p className="footer__copy" dangerouslySetInnerHTML={{ __html: footerData.copyright }} />
            </div>
        </footer>
    );
}

export default Footer;
