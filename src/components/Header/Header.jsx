import { useEffect, useState, useRef } from "react"
import LazyLoad from "react-lazyload"
import { headerData } from "../../data/data.js"
import { useLocation, Link, useNavigate } from "react-router-dom"
import Navbar from "./Navbar.jsx"
import "./Header.css"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen]           = useState(false)
  const [theme, setTheme]                     = useState("light")
  const [isAdmin, setIsAdmin]                 = useState(false)
  const [showAdminDropdown, setShowAdminDropdown] = useState(false)

  const headerRef       = useRef(null)
  const adminDropdownRef = useRef(null)
  const location        = useLocation()
  const navigate        = useNavigate()

  // Sync admin state with localStorage on every route change
  useEffect(() => {
    setIsAdmin(!!localStorage.getItem("projectAuthToken"))
  }, [location])

  // Restore saved theme on mount
  useEffect(() => {
    const saved = localStorage.getItem("selected-theme")
    if (saved) {
      setTheme(saved)
      document.body.className = saved === "dark" ? "dark-theme" : ""
    }
  }, [])

  // Scroll-based header shadow
  useEffect(() => {
    const onScroll = () => {
      headerRef.current?.classList.toggle("scroll-header", window.scrollY >= 80)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close admin dropdown when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (adminDropdownRef.current && !adminDropdownRef.current.contains(e.target)) {
        setShowAdminDropdown(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  // Close mobile menu on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") setIsMenuOpen(false) }
    document.addEventListener("keydown", handler)
    return () => document.removeEventListener("keydown", handler)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isMenuOpen])

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [location])

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light"
    setTheme(next)
    document.body.className = next === "dark" ? "dark-theme" : ""
    localStorage.setItem("selected-theme", next)
  }

  const handleLogout = () => {
    localStorage.removeItem("projectAuthToken")
    setIsAdmin(false)
    setShowAdminDropdown(false)
    navigate("/")
  }

  const toggleMenu = () => {
    setIsMenuOpen((value) => !value)
  }

  return (
    <>
      {/* Mobile backdrop — no blur, just dark overlay */}
      <div
        className={`nav-overlay${isMenuOpen ? " visible" : ""}`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

      <header className="header" id="header" ref={headerRef}>
        <nav className="nav container">
          {/* Logo */}
          <Link to="/" className="nav__logo">
            <LazyLoad height={34} offset={100}>
              <img
                src={headerData.logo}
                alt={`${headerData.name} logo`}
                className="logo-image"
              />
            </LazyLoad>
            <span>{headerData.name}</span>
          </Link>

          {/* Desktop + mobile nav links */}
          <Navbar
            isMenuOpen={isMenuOpen}
            closeMenu={() => setIsMenuOpen(false)}
          />

          {/* Action buttons */}
          <div className="nav__btns">
            {/* Admin badge — only when logged in */}
            {isAdmin && (
              <div className="admin-controls" ref={adminDropdownRef}>
                <button
                  className={`admin-badge${showAdminDropdown ? " active" : ""}`}
                  onClick={() => setShowAdminDropdown((v) => !v)}
                  aria-label="Admin menu"
                  aria-expanded={showAdminDropdown}
                >
                  <i className="uil uil-shield-check"></i>
                  <span className="admin-badge__label">Admin</span>
                </button>

                {showAdminDropdown && (
                  <div className="admin-dropdown" role="menu">
                    <Link
                      to="/admin/add-project"
                      className="admin-dropdown__item"
                      onClick={() => setShowAdminDropdown(false)}
                    >
                      <i className="uil uil-plus-circle"></i>
                      Add Project
                    </Link>
                    <div className="admin-dropdown__divider" />
                    <button
                      className="admin-dropdown__item admin-dropdown__logout"
                      onClick={handleLogout}
                    >
                      <i className="uil uil-sign-out-alt"></i>
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Theme toggle */}
            <button
              className="change-theme__btn"
              onClick={toggleTheme}
              aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
            >
              <i
                className={`uil ${theme === "light" ? "uil-moon" : "uil-sun"} change-theme`}
                aria-hidden="true"
              />
            </button>

            {/* Hamburger — mobile only */}
            <button
              type="button"
              className="nav__toggle"
              id="nav-toggle"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="nav-menu"
            >
              <div className={`hamburger${isMenuOpen ? " open" : ""}`}>
                <span />
                <span />
                <span />
              </div>
            </button>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
