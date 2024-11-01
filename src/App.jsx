import React, { Suspense, useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"
import "./assets/css/styles.css"
import "./assets/css/swiper-bundle.min.css"
import Loader from "./components/Loader"
import { PortfolioPage } from "./components/PortfolioPage"
import Landing from "./Landing"
const Header = React.lazy(() => import("./components/Header"))
const Footer = React.lazy(() => import("./components/Footer"))
const About = React.lazy(() => import("./components/About"))
const Skills = React.lazy(() => import("./components/Skills"))
const Qualification = React.lazy(() => import("./components/Qualification"))
const Services = React.lazy(() => import("./components/Services"))
const Portfolio = React.lazy(() => import("./components/Portfolio"))
const Project = React.lazy(() => import("./components/Project"))
const Testimonials = React.lazy(() => import("./components/Testimonials"))
const ContactMe = React.lazy(() => import("./components/ContactMe"))


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


        <Header />
        <Suspense fallback={<div className="loader-overlay-componet"><Loader /></div>}>
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
        </Suspense>
        <Footer />
      </Router>
    </HelmetProvider>
  )
}

export default App
