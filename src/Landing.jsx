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
      "@id": "https://www.smitparekh.co.in/portfolio#smit-parekh",
      name: "Smit Parekh",
      url: "https://www.smitparekh.co.in/portfolio",
      mainEntityOfPage: "https://www.smitparekh.co.in/portfolio",
      image: {
        "@type": "ImageObject",
        url: "https://www.smitparekh.co.in/images/Smit-Parekh-About.webp",
        width: 800,
        height: 800,
      },
      description:
        "Smit Parekh is a Digital Software Developer and SEO Specialist from Anand, Gujarat, India, with expertise in React.js, Node.js, SEO optimisation, and digital marketing.",
      disambiguatingDescription:
        "Digital Software Developer and SEO Specialist based in Anand, Gujarat, India",
      jobTitle: "Digital Software Developer & SEO Specialist",
      identifier: {
        "@type": "PropertyValue",
        propertyID: "LinkedIn",
        value: "https://www.linkedin.com/in/smit-parekh-n/",
      },
      sameAs: [
        "https://www.linkedin.com/in/smit-parekh-n/",
        "https://github.com/SmitParekh84",
        "https://www.instagram.com/smit_8_4/",
        "https://www.facebook.com/SmitParekh84/",
      ],
      nationality: {
        "@type": "Country",
        name: "India",
      },
      hasOccupation: {
        "@type": "Occupation",
        name: "Digital Software Developer & SEO Specialist",
        occupationLocation: {
          "@type": "City",
          name: "Anand, Gujarat, India",
        },
        skills: "React.js, Node.js, JavaScript, SEO, Web Development, Digital Marketing",
      },
      worksFor: {
        "@type": "Organization",
        name: "Smit Parekh",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Anand",
        addressRegion: "Gujarat",
        addressCountry: "IN",
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
        "Technical SEO",
        "Content Creation",
        "Social Media Marketing",
        "JavaScript",
        "React.js",
        "Node.js",
        "Full-Stack Development",
      ],
    },
  }

  return (
    <>
      <SEO
        title="Smit Parekh | Digital Software Developer & SEO Specialist"
        description="Smit Parekh — Digital Software Developer & SEO Specialist from Anand, Gujarat, India. Expert in React.js, Node.js, SEO, and digital marketing. View portfolio, projects, and free online tools."
        keywords="Smit Parekh, Smit Parekh developer, Smit Parekh SEO, Smit Parekh Gujarat, Smit Parekh portfolio, Smit Parekh LinkedIn, Digital Software Developer, SEO Specialist, Full-stack Developer, web development services, digital marketing expert, React developer India, Node.js developer"
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
