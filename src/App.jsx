import React, { Suspense, useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { Helmet } from "react-helmet-async";  // Import Helmet
import "./assets/css/styles.css"
import "./assets/css/swiper-bundle.min.css"
import Loader from "./components/Loader"
import { PortfolioPage } from "./pages/PortfolioPage"
import Landing from "./Landing"
import BackgroundRemover from "./pages/BackgroundRemover"
import LinkedInPostGeneratorPage from "./pages/LinkedInPostGeneratorPage";
import ContactPage from "./pages/ContactPage";
const Header = React.lazy(() => import("./components/Header/Header"))
const Footer = React.lazy(() => import("./components/Footer"))
const AboutPage = React.lazy(() => import("./pages/AboutPage"))
const SkillsPage = React.lazy(() => import("./pages/SkillsPage"))
const Qualification = React.lazy(() => import("./components/Qualification"))
const Services = React.lazy(() => import("./components/Services"))
const Project = React.lazy(() => import("./components/Project"))
const Testimonials = React.lazy(() => import("./components/Testimonials"))


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
    <Router>


      <Header />
      <Suspense fallback={<div className="loader-overlay-componet"><Loader /></div>}>
        <main className="main">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/qualification" element={<Qualification />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/project" element={<Project />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="/background-remover" element={<BackgroundRemover />} />
            <Route path="/viral-linkedin-post-generator" element={<LinkedInPostGeneratorPage />} />

          </Routes>
        </main>
      </Suspense>
      <Footer />
    </Router>
  )
}

export default App
