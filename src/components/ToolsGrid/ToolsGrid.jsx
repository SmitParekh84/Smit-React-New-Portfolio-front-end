import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { fadeUp, staggerContainer, getResponsiveVariant } from "../../animations/variants"
import "./ToolsGrid.css"

const ToolsGrid = ({ tools }) => {
  return (
    <section className="tools section" id="tools">
      <div className="tools__content-wrapper">
        <motion.h2
          className="section__title tools__title"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Featured Tools
        </motion.h2>
        <motion.span
          className="section__subtitle tools__subtitle"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Professional Tools to Enhance Your Workflow
        </motion.span>

        <motion.div
          className="tools__container container grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {tools.map((tool, index) => (
            <motion.div
              className="tools__content"
              key={index}
              variants={getResponsiveVariant(fadeUp)}
            >
              <div>
                <div className="tools__header">
                  <div className="tools__icon-container">
                    <i className={`uil ${tool.icon} tools__icon`}></i>
                  </div>
                  <h3 className="tools__title">{tool.title}</h3>
                </div>
                <p className="tools__description">{tool.shortDescription}</p>
              </div>
              <Link
                to={tool.path}
                className="button button--flex button--small tools__button"
              >
                Try it now
                <i className="uil uil-arrow-right button__icon"></i>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="tools__bg-circle-large"></div>
      <div className="tools__bg-circle-small"></div>
    </section>
  )
}

export default ToolsGrid
