import React from 'react';

const ScrollToTop = () => {
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <a href="#" className="scrollup" id="scroll-up" onClick={handleScrollToTop} aria-label="Scroll to top">
            <i className="uil uil-arrow-up scrollup__icon" aria-hidden="true"></i>
        </a>
    );
};

export default ScrollToTop;
