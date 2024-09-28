import React from 'react';

const ScrollToTop = () => {
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <a href="#" className="scrollup" id="scroll-up" onClick={handleScrollToTop}>
            <i className="uil uil-arrow-up scrollup__icon"></i>
        </a>
    );
};

export default ScrollToTop;
