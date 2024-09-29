import React, { useEffect, useState, useRef } from "react"
import LazyLoad from "react-lazyload" // Import LazyLoad if you want to lazy load your logo
import { headerData } from "../data/data.js"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false) // State for menu visibility
  const [theme, setTheme] = useState("light") // State for theme
  const [activeSection, setActiveSection] = useState("home") // State for active section
  const darkTheme = "dark-theme"
  const iconTheme = "uil-sun"

  // Ref for header element
  const headerRef = useRef(null)

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen) // Toggle menu open/close
  }

  // Function to close the menu
  const closeMenu = () => {
    setIsMenuOpen(false) // Close menu
  }

  // Function to handle theme toggle
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    document.body.className = newTheme === "dark" ? darkTheme : "" // Apply theme class to body
    localStorage.setItem("selected-theme", newTheme)
    localStorage.setItem(
      "selected-icon",
      newTheme === "light" ? "uil-moon" : "uil-sun"
    )
  }

  // Function to handle scroll events for changing header background
  const scrollHeader = () => {
    const nav = headerRef.current // Use ref to access header
    if (nav) {
      // Check if nav is not null
      if (window.scrollY >= 80) {
        nav.classList.add("scroll-header")
      } else {
        nav.classList.remove("scroll-header")
      }
    }
  }

  // Function to handle active link based on scroll position
  const handleActiveLink = () => {
    const sections = document.querySelectorAll("section") // Assuming your sections have the <section> tag
    let scrollY = window.scrollY

    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight
      const sectionTop = section.offsetTop - 50 // Offset to account for header height
      const sectionId = section.getAttribute("id")

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        setActiveSection(sectionId)
      }
    })
  }

  // Function to handle scroll events for showing scroll up button
  const scrollUp = () => {
    const scrollUpButton = document.getElementById("scroll-up")
    if (scrollUpButton) {
      // Check if scrollUpButton is not null
      if (window.scrollY >= 560) {
        scrollUpButton.classList.add("show-scroll")
      } else {
        scrollUpButton.classList.remove("show-scroll")
      }
    }
  }

  useEffect(() => {
    // Check for previously selected theme and icon
    const selectedTheme = localStorage.getItem("selected-theme")
    const selectedIcon = localStorage.getItem("selected-icon")

    // Apply previously selected theme
    if (selectedTheme) {
      setTheme(selectedTheme)
      document.body.className = selectedTheme === "dark" ? darkTheme : "" // Set body class
    }

    // Set scroll event listeners
    const handleScroll = () => {
      scrollHeader()
      scrollUp()
      handleActiveLink() // Call the function to handle active links
    }

    window.addEventListener("scroll", handleScroll)

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header className="header" id="header" ref={headerRef}>
      <nav className="nav container">
        <a
          href="https://smitparekh.studio/"
          alt="Smit Parekh"
          className="nav__logo"
        >
          <LazyLoad height={200} offset={100}>
            <img
              src={headerData.logo}
              alt={`${headerData.name} Logo`}
              className="logo-image"
            />
          </LazyLoad>
          {headerData.name}
        </a>
        <div
          className={`nav__menu ${isMenuOpen ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list grid">
            {headerData.navLinks.map((link) => (
              <li className="nav__item" key={link.id}>
                <a
                  href={`${link.id}`}
                  className={`nav__link ${
                    activeSection === link.id ? "active-link" : ""
                  }`}
                  onClick={closeMenu}
                >
                  <i className={`uil ${link.icon} nav__icon`}></i>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <i className="uil uil-times nav__close" onClick={closeMenu}></i>
        </div>
        <div className="nav__btns">
          {/* Theme change button */}
          <i
            className={`uil ${
              theme === "light" ? "uil-moon" : "uil-sun"
            } change-theme`}
            id="theme-button"
            onClick={toggleTheme}
          ></i>
          <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
            <i className="uil uil-apps"></i>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
