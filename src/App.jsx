// App.jsx
import React, { Suspense, useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import loadable from "@loadable/component"
import "./assets/css/styles.css" // Your custom styles
import "./assets/css/swiper-bundle.min.css"
import Loader from "./components/Loader"
import { PortfolioPage } from "./components/PortfolioPage"

// Import components using lazy loading
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
const Landing = loadable(() => import("./Landing")) // Landing page component

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false)

  const handleError = (error) => {
    console.error("Error caught by ErrorBoundary:", error)
    setHasError(true)
  }

  if (hasError) {
    return <h1>Something went wrong.</h1>
  }

  return children
}

const App = () => {
  const [showTestimonials, setShowTestimonials] = useState(false)
  const [showContactMe, setShowContactMe] = useState(false)

  // Load Testimonials and ContactMe when the user scrolls to a certain point
  const handleScroll = () => {
    const scrollY = window.scrollY
    const triggerPoint = 600 // Adjust this value based on your layout

    if (scrollY > triggerPoint) {
      setShowTestimonials(true)
      setShowContactMe(true)
      window.removeEventListener("scroll", handleScroll) // Remove listener after loading
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <Router>
      <ErrorBoundary>
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
              <Route path="/testimonials" element={showTestimonials ? <Testimonials /> : <Loader />} />
              <Route path="/contact" element={<ContactMe /> } />
              <Route path="*" element={<Navigate to="/" replace />} /> {/* Redirect unknown paths */}
            </Routes>
          </main>
          <Footer />
        </Suspense>
      </ErrorBoundary>
    </Router>
  )
}

export default App
