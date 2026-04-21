import { motion } from "framer-motion"
import { fadeUp, scaleIn, staggerContainer } from "../../animations/variants"
import "./TrustSignals.css"

const getCompanyIcon = (company) => {
  const icons = {
    Google: "uil uil-google",
    Microsoft: "uil uil-microsoft",
    Amazon: "uil uil-amazon",
    Shopify: "uil uil-shopping-cart",
    Adobe: "uil uil-adobe",
    Facebook: "uil uil-facebook",
    Twitter: "uil uil-twitter",
    LinkedIn: "uil uil-linkedin",
    Apple: "uil uil-apple",
  }
  return icons[company] || "uil uil-building"
}

const TrustSignals = ({
  title = "Trusted by Thousands",
  subtitle = "Join professionals worldwide who rely on our free tools for daily productivity",
  companies = ["Google", "Microsoft", "Amazon", "Shopify", "Adobe"],
  animated = true,
  darkMode = false,
  className = "",
}) => {
  return (
    <section
      className={`trust-signals-section ${darkMode ? "dark-mode" : ""} ${className}`}
    >
      <div className="container">
        <div className="trust-signals__wrapper">
          <motion.div
            className="trust-signals__header"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="trust-signals__title">{title}</h2>
            <p className="trust-signals__subtitle">{subtitle}</p>
          </motion.div>

          <motion.div
            className="trust-signals__companies"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {companies.map((company, index) => (
              <motion.div
                key={index}
                className="trust-signals__company"
                variants={scaleIn}
              >
                <div className="company-logo">
                  <i className={getCompanyIcon(company)}></i>
                </div>
                <span className="company-name">{company}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="trust-signals__metrics"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { value: "10,000+", label: "Daily Users" },
              { value: "4.9/5", label: "Average Rating" },
              { value: "50+", label: "Countries" },
            ].map((metric, i) => (
              <motion.div key={i} className="trust-metric" variants={fadeUp}>
                <div className="trust-metric__value">{metric.value}</div>
                <div className="trust-metric__label">{metric.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="trust-signals__testimonial"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="testimonial-quote">
              <i className="uil uil-quote-left"></i>
              <p>
                These tools have revolutionized my workflow and saved me
                countless hours. I'm more productive than ever!
              </p>
              <i className="uil uil-quote-right"></i>
            </div>
            <div className="testimonial-author">
              <div className="author-avatar">
                <span>JS</span>
              </div>
              <div className="author-info">
                <h4>John Smith</h4>
                <p>Marketing Director</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="trust-signals__bg-circle"></div>
      <div className="trust-signals__bg-dots"></div>
    </section>
  )
}

export default TrustSignals
