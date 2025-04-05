import React from "react";
import { Link } from "react-router-dom";
import "./ProductShowcase.css";

const ProductShowcase = ({ title, subtitle, products }) => {
  return (
    <section className="showcase__section" id="products">
      <h2 className="section__title">{title}</h2>
      <span className="section__subtitle">{subtitle}</span>

      <div className="showcase__container container">
        {products.map((product, index) => (
          <div className={`product-card ${index % 2 === 1 ? 'product-card--reverse' : ''}`} key={index}>
            <div className="product-card__image">
              {product.image ? (
                <img src={product.image} alt={product.title} className="product-card__img" />
              ) : (
                <div className="product-card__icon-container">
                  <i className={`uil ${product.icon}`}></i>
                </div>
              )}
            </div>
            
            <div className="product-card__content">
              <div className="product-card__header">
                <i className={`uil ${product.icon} product-card__icon-small`}></i>
                <h3 className="product-card__title">{product.title}</h3>
              </div>
              
              <p className="product-card__description">{product.description}</p>
              
              <ul className="product-card__features">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="product-card__feature-item">{feature}</li>
                ))}
              </ul>
              
              <Link to={product.path} className="button button--flex">
                {product.buttonText || "Try Now"}
                <i className="uil uil-arrow-right button__icon"></i>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductShowcase;
