import React from 'react';

const Project = () => {
  return (
    <section className="project section">
      <div className="project__bg">
        <div className="project__container container grid">
          <div className="project__data">
            <h2 className="project__title">You have a new project?</h2>
            <p className="project__description">
              Contact me now and get discounts on your Web development projects.
            </p>
            <a href="#contact" className="button button--flex button--white">
              Contact me
              <i className="uil uil-message project__icon button__icon"></i>
            </a>
          </div>
          {/* Uncomment the line below to include the image */}
          {/* <img src="assets/img/project.png" alt="" className="project__img" /> */}
        </div>
      </div>
    </section>
  );
};

export default Project;
