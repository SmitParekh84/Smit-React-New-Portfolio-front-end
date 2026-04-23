import React, { Suspense } from "react"
import Loader from "./components/Loader"
import Home from "./components/Home"
import About from "./components/About"
import Skills from "./components/Skills"
import SEO from "./components/SEO/SEO"
import {
  Qualification,
  Services,
  Project,
  Testimonials,
} from "./components/LandingComponents"
import Portfolio from "./components/Portfolio"
import ContactMe from "./components/ContactMe/ContactMe"
import { FluidAdUnit } from "./components/AdSense"

const Landing = () => {
  // Combine all main schema information
  const mainSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: "Smit Parekh",
      url: "https://www.smitparekh.co.in",
      sameAs: [
        "https://linkedin.com/in/smit-parekh-n/",
        "https://github.com/SmitParekh84",
        "https://www.instagram.com/smit_8_4/",
        "https://www.facebook.com/SmitParekh84/",
      ],
      jobTitle: "Digital Software Developer & SEO Specialist",
      worksFor: {
        "@type": "Organization",
        name: "Smit Parekh",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Anand",
        addressRegion: "Gujarat",
        addressCountry: "India",
        postalCode: "388001",
      },
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "Gujarat Technological University",
          sameAs: "https://www.gtu.ac.in/",
        },
      ],
      knowsAbout: [
        "Web Development",
        "Digital Marketing",
        "SEO Optimization",
        "Content Creation",
        "Social Media Marketing",
        "JavaScript",
        "React.js",
        "Node.js",
      ],
      description:
        "Smit Parekh is a Digital Software Developer and SEO Specialist with expertise in SEO, web development, and creating engaging online content.",
    },
  }

  return (
    <>
      <SEO
        title="Smit Parekh | Digital Software Developer & SEO Specialist"
        description="Smit Parekh — Digital Software Developer & SEO Specialist. Helping businesses grow with web development, SEO, and digital marketing."
        keywords="Smit Parekh, Digital Marketing Manager, Full-stack Developer, SEO optimization, web development services, digital marketing expert, professional portfolio"
        canonicalUrl="https://www.smitparekh.co.in/portfolio"
        ogImage="https://www.smitparekh.co.in/images/Smit-Parekh-About.webp"
        twitterImage="https://www.smitparekh.co.in/images/Smit-Parekh-About.webp"
        structuredData={mainSchema}
      >
        {/* Replace "your-verification-code" with your real GSC verification code */}
        <meta name="google-site-verification" content="your-verification-code" />
        <meta name="msvalidate.01" content="your-bing-verification-code" />
        <link rel="alternate" hrefLang="en" href="https://www.smitparekh.co.in/portfolio" />
      </SEO>

      <Home />
      <About />

      <FluidAdUnit
        adSlot="6960955517"
        className="section-ad"
        style={{ margin: "3rem auto" }}
      />

      <Suspense
        fallback={
          <div className="loader-overlay-componet">
            <Loader />
          </div>
        }
      >
        <Skills />
        <Qualification />
        <Services />

        <FluidAdUnit
          adSlot="6960955517"
          className="mid-section-ad"
          style={{ margin: "2.5rem auto" }}
        />

        <Portfolio />
        <Project />
        <Testimonials />
        <ContactMe />
      </Suspense>
    </>
  )
}

export default Landing
