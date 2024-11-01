import React, { Suspense, useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"
import loadable from "@loadable/component"
import "./assets/css/styles.css"
import "./assets/css/swiper-bundle.min.css"
import Loader from "./components/Loader"
import { PortfolioPage } from "./components/PortfolioPage"

const Header = React.lazy(() => import("./components/Header"))
const Footer = loadable(() => import("./components/Footer"))
const About = loadable(() => import("./components/About"))
const Skills = loadable(() => import("./components/Skills"))
const Qualification = loadable(() => import("./components/Qualification"))
const Services = loadable(() => import("./components/Services"))
const Portfolio = loadable(() => import("./components/Portfolio"))
const Project = loadable(() => import("./components/Project"))
const Testimonials = loadable(() => import("./components/Testimonials"))
const ContactMe = loadable(() => import("./components/ContactMe"))
const Landing = loadable(() => import("./Landing"))

const App = () => {
  const [showTestimonials, setShowTestimonials] = useState(false)
  const [showContactMe, setShowContactMe] = useState(false)

  const handleScroll = () => {
    const scrollY = window.scrollY
    const triggerPoint = 600

    if (scrollY > triggerPoint) {
      setShowTestimonials(true)
      setShowContactMe(true)
      window.removeEventListener("scroll", handleScroll)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <HelmetProvider>
      <Router>
        <Suspense fallback={<Loader />}>
          <Header />
          <main className="main">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/qualification" element={<Qualification />} />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/project" element={<Project />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/contact" element={<ContactMe />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </Suspense>
      </Router>
    </HelmetProvider>
  )
}

export default App
