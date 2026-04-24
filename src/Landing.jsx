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
      jobTitle: "Full-Stack Software Developer | React + Node.js Expert",
      worksFor: {
        "@type": "Organization",
        name: "Monarch Innovations",
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
          name: "Charusat University",
          sameAs: "https://www.charusat.ac.in/",
        },
      ],
      knowsAbout: [
        "React.js",
        "Node.js",
        "TypeScript",
        "Next.js",
        "PostgreSQL",
        "AWS",
        "Docker",
        "Redux",
        "RESTful API Design",
        "Full-Stack Web Development",
        "FinTech Applications",
        "SaaS Development",
        "AI-Powered Applications",
        "Technical SEO",
        "Digital Marketing",
      ],
      description:
        "Smit Parekh is a Full-Stack Software Developer with 3.5+ years of experience building scalable web applications using React, Node.js, TypeScript, and PostgreSQL across FinTech, SaaS, and AI-powered domains.",
    },
  }

  return (
    <>
      <SEO
        title="Smit Parekh | Full-Stack Developer — React & Node.js"
        description="Full-Stack Software Developer with 3.5+ years building scalable web apps with React, Node.js, TypeScript & PostgreSQL. FinTech, SaaS & AI-powered projects."
        keywords="Smit Parekh, Full-Stack Developer, React Developer, Node.js Developer, TypeScript developer, PostgreSQL, AWS, Docker, Next.js, FinTech developer, SaaS developer, software engineer portfolio, web application developer, India"
        canonicalUrl="https://www.smitparekh.co.in/"
        ogImage="https://www.smitparekh.co.in/images/Smit-Parekh-About.webp"
        twitterImage="https://www.smitparekh.co.in/images/Smit-Parekh-About.webp"
        structuredData={mainSchema}
      >
        {/* Replace "your-verification-code" with your real GSC verification code */}
        <meta name="google-site-verification" content="your-verification-code" />
        <meta name="msvalidate.01" content="your-bing-verification-code" />
        <link rel="alternate" hrefLang="en" href="https://www.smitparekh.co.in/" />
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
