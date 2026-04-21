import { useState } from "react"
import { motion } from "framer-motion"
import { fadeUp, staggerContainer } from "../../animations/variants"
import "./FAQ.css"

const FAQ = ({
  title = "Frequently Asked Questions",
  subtitle = "Most common questions",
  faqData = [],
  toolName,
}) => {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="faq section" id="faq">
      <motion.h2
        className="section__title"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {title || `${toolName} FAQs`}
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

      <div className="faq__container container">
        {Array.isArray(faqData) && faqData.length > 0 ? (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
          >
            {faqData.map((faq, index) => (
              <motion.div
                className={`faq__item ${openIndex === index ? "faq__active" : ""}`}
                key={index}
                variants={fadeUp}
                onClick={() => toggleAccordion(index)}
              >
                <div className="faq__header">
                  <h3 className="faq__title">{faq.question}</h3>
                  <i
                    className={`uil ${openIndex === index ? "uil-minus" : "uil-plus"} faq__icon`}
                  ></i>
                </div>
                <div className="faq__content">
                  <p className="faq__description">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="faq__empty">
            <p>No FAQs available at the moment.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default FAQ
