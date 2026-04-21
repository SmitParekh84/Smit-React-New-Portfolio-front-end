import { motion } from "framer-motion"
import { fadeUp, slideInLeft, staggerContainer } from "../../animations/variants"
import "./Features.css"

const Features = ({ title, subtitle, features }) => {
  return (
    <section className="features__section" id="features">
      <motion.div
        className="features__header"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="section__title">{title}</h2>
        <span className="section__subtitle">{subtitle}</span>
      </motion.div>

      <div className="features__container container">
        <motion.div
          className="features__grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature, index) => (
            <motion.div
              className="feature-card"
              key={index}
              variants={slideInLeft}
            >
              <div className="feature-icon-container">
                <i className={`uil ${feature.icon}`}></i>
              </div>
              <div className="feature-content">
                <h3 className="feature__title">{feature.title}</h3>
                <p className="feature__description">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Features
