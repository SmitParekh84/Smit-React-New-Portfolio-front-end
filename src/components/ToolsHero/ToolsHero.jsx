import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { fadeUp, scaleIn, staggerContainer } from "../../animations/variants"
import "./ToolsHero.css"

const ToolsHero = () => {
  const [metrics, setMetrics] = useState({ percent: 0, tasks: 0, rating: 0 })
  const heroRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateMetrics()
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (heroRef.current) observer.observe(heroRef.current)
    return () => observer.disconnect()
  }, [])

  const animateMetrics = () => {
    const duration = 2000
    const totalFrames = (duration * 60) / 1000
    let frame = 0
    const timer = setInterval(() => {
      frame++
      const progress = frame / totalFrames
      setMetrics({
        percent: Math.min(Math.floor(progress * 100), 100),
        tasks: Math.min(Math.floor(progress * 50000), 50000),
        rating: Math.min(4 + progress * 0.9, 4.9),
      })
      if (frame === totalFrames) clearInterval(timer)
    }, 1000 / 60)
  }

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M+"
    if (num >= 1000) return Math.floor(num / 1000) + "k+"
    return num.toLocaleString()
  }

  return (
    <section ref={heroRef} className="home__section tools-hero">
      <div className="container tools-hero__container">
        <motion.div
          className="tools-hero__content"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.span className="tools-hero__badge" variants={scaleIn}>
            <i className="uil uil-fire mr-1"></i>
            <span className="badge-pulse"></span>
            Trusted by 10,000+ professionals worldwide
          </motion.span>

          <motion.h1 className="tools-hero__title" variants={fadeUp}>
            Powerful Free Tools That{" "}
            <span className="tools-hero__highlight">Save You Time</span> &
            Boost Productivity
          </motion.h1>

          <motion.p className="tools-hero__description" variants={fadeUp}>
            Access professional-grade tools without spending a penny. No
            sign-ups, no credit cards, no limitations – just instant results
            that help you work smarter.
          </motion.p>

          <motion.div className="tools-hero__trust-signals" variants={fadeUp}>
            <div className="trust-logos">
              <span>Trusted by teams at</span>
              <div className="logo-container">
                <span className="logo-item">Google</span>
                <span className="logo-item">Microsoft</span>
                <span className="logo-item">Amazon</span>
              </div>
            </div>
          </motion.div>

          <motion.div className="tools-hero__buttons" variants={fadeUp}>
            <a href="/free-tools" className="tools-hero__button-primary">
              <span className="button-text">Get Started Now - It's Free</span>
              <i className="uil uil-arrow-right button__icon"></i>
            </a>
            <Link to="/contact" className="tools-hero__button-secondary">
              <span className="button-text">Need Custom Solution?</span>
              <i className="uil uil-message button__icon"></i>
            </Link>
          </motion.div>

          <motion.div className="tools-hero__metrics" variants={fadeUp}>
            <div className="tools-hero__metric">
              <h3 className="tools-hero__metric-number">{metrics.percent}%</h3>
              <p className="tools-hero__metric-label">Free Forever</p>
            </div>
            <div className="tools-hero__metric">
              <h3 className="tools-hero__metric-number">
                {formatNumber(metrics.tasks)}
              </h3>
              <p className="tools-hero__metric-label">Tasks Completed</p>
            </div>
            <div className="tools-hero__metric">
              <h3 className="tools-hero__metric-number">
                {metrics.rating.toFixed(1)}/5
              </h3>
              <p className="tools-hero__metric-label">User Rating</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="tools-hero__bg-circle-large"></div>
      <div className="tools-hero__bg-circle-small"></div>
      <div className="tools-hero__bg-circle-medium"></div>
      <div className="tools-hero__bg-pattern"></div>
      <div className="tools-hero__grid-overlay"></div>
      <div className="tools-hero__noise-texture"></div>
      <div className="tools-hero__floating-shape shape1"></div>
      <div className="tools-hero__floating-shape shape2"></div>
      <div className="tools-hero__floating-shape shape3"></div>
      <div className="tools-hero__floating-shape shape4"></div>
      <div className="tools-hero__floating-shape shape5"></div>
    </section>
  )
}

export default ToolsHero
