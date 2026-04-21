import { motion } from "framer-motion"
import { fadeUp, staggerContainer } from "../../animations/variants"
import "./HowItWorks.css"

const HowItWorks = ({ title, subtitle, steps }) => {
  return (
    <section className="workflow section" id="how-it-works">
      <motion.h2
        className="section__title"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>
      <motion.span
        className="section__subtitle"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {subtitle}
      </motion.span>

      <div className="workflow__container container">
        <motion.div
          className="workflow__steps"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {steps.map((step, index) => (
            <motion.div
              className="workflow__step workflow__step--visible"
              key={index}
              variants={fadeUp}
            >
              <div className="workflow__step-number">{index + 1}</div>
              <div className="workflow__step-content">
                <h3 className="workflow__step-title">{step.title}</h3>
                <p className="workflow__step-description">{step.description}</p>
                {step.image && (
                  <img
                    src={step.image}
                    alt={step.title}
                    className="workflow__step-image"
                  />
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks
