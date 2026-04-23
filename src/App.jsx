import { useEffect, useCallback } from "react"
import { BrowserRouter as Router } from "react-router-dom"

// Styles
import "./assets/css/styles.css"
import "./assets/css/swiper-bundle.min.css"
import "./assets/css/admin.css"

import { AdSenseProvider } from "./components/AdSense"
import MainLayout from "./layouts/MainLayout"
import AppRoutes from "./routes/AppRoutes"

// URL utilities
import { formatUrlSlug, slugToTitle } from "./utils/urlUtils"

// Re-export formatUrlSlug and slugToTitle for backward compatibility
export { formatUrlSlug, slugToTitle }

const App = () => {
  // Fade out and remove the HTML loader once React has rendered
  useEffect(() => {
    const loader = document.getElementById("app-loader")
    if (!loader) return
    loader.classList.add("fade-out")
    const timer = setTimeout(() => loader.remove(), 420)
    return () => clearTimeout(timer)
  }, [])

  const handleScroll = useCallback(() => {
    if (window.scrollY > 600) {
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
        <MainLayout>
          <AppRoutes />
        </MainLayout>
      </AdSenseProvider>
    </Router>
  )
}

export default App
