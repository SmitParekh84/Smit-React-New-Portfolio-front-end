import { useEffect, useCallback } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Styles
import "./assets/css/styles.css"
import "./assets/css/swiper-bundle.min.css"
import "./assets/css/admin.css"

// Components - Direct imports (no lazy loading)
import Header from "./components/Header/Header"
import Footer from "./components/Footer"
import Loader from "./components/Loader"
import { AdSenseProvider } from "./components/AdSense"

// Pages - All components with direct imports (no lazy loading)
import { PortfolioPage } from "./pages/PortfolioPage"
import Landing from "./Landing"
import BackgroundRemoverPage from "./pages/BackgroundRemoverPage"
import LinkedInPostGeneratorPage from "./pages/LinkedInPostGeneratorPage"
import ContactPage from "./pages/ContactPage"
import ToolsPage from "./pages/ToolsPage"
import MetaCheckerPage from "./pages/MetaCheckerPage"
import ToolsShowcasePage from "./pages/ToolsShowcasePage"
import ServicesPage from "./pages/ServicesPage"
import CVViewer from "./pages/CVViewer"
import QRCodeGeneratorPage from "./pages/QRCodeGeneratorPage"
import ImageCompressorPage from "./pages/ImageCompressorPage"
import ImageConverterPage from "./pages/ImageConverterPage"
import SEOAnalyzerPage from "./pages/SEOAnalyzerPage"
import NotFoundPage from "./pages/NotFoundPage"
import LinkedInMediaDownloaderPage from "./pages/LinkedInMediaDownloaderPage"
import ProjectDetailPage from "./pages/ProjectDetailPage"
import AddProjectPage from "./pages/AddProjectPage"
import EditProjectPage from "./pages/EditProjectPage"
import AdminLoginPage from "./pages/AdminLoginPage"
import AboutPage from "./pages/AboutPage"
import SkillsPage from "./pages/SkillsPage"
import Qualification from "./components/Qualification"
import Testimonials from "./components/Testimonials"
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage"
import TermsPage from "./pages/TermsPage"

// URL utilities
import { formatUrlSlug, slugToTitle } from "./utils/urlUtils"

// Re-export formatUrlSlug and slugToTitle for backward compatibility
export { formatUrlSlug, slugToTitle }

/**
 * Main Application Component
 */
const App = () => {
  // Scroll handler using useCallback to avoid dependency issues
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY
    const triggerPoint = 600

    if (scrollY > triggerPoint) {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  return (
    <Router>
      <AdSenseProvider>
        <Header />
        <main className="main">
          <Routes>
            {/* Main Routes */}
            <Route path="/" element={<ToolsShowcasePage />} />
            <Route path="/portfolio" element={<Landing />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/qualification" element={<Qualification />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/project" element={<PortfolioPage />} />
            <Route path="/project/:id" element={<ProjectDetailPage />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cv-viewer" element={<CVViewer />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            
            {/* Tools Routes */}
            <Route path="/free-tools" element={<ToolsPage />} />
            <Route path="/free-tools/background-remover" element={<BackgroundRemoverPage />} />
            <Route path="/free-tools/viral-linkedin-post-generator" element={<LinkedInPostGeneratorPage />} />
            <Route path="/free-tools/meta-tag-checker" element={<MetaCheckerPage />} />
            <Route path="/free-tools/qr-code-generator" element={<QRCodeGeneratorPage />} />
            <Route path="/free-tools/image-compressor" element={<ImageCompressorPage />} />
            <Route path="/free-tools/image-converter" element={<ImageConverterPage />} />
            <Route path="/free-tools/seo-analyzer" element={<SEOAnalyzerPage />} />
            <Route path="/free-tools/linkedin-media-downloader" element={<LinkedInMediaDownloaderPage />} />
            
            {/* Admin Routes */}
            <Route path="/admin" element={<AdminLoginPage />} />
            <Route path="/admin/add-project" element={<AddProjectPage />} />
            <Route path="/admin/edit-project/:id" element={<EditProjectPage />} />
            
            {/* Error Routes */}
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </AdSenseProvider>
    </Router>
  )
}

export default App
