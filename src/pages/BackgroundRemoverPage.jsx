import React from "react"
import "react-toastify/dist/ReactToastify.css"
import BackgroundRemover, {
  HeroSection,
  HowItWorksSection,
  ToolBenefitsSection,
  UseCasesSection,
  CTASection,
} from "../components/BackgroundRemover"
import FAQ from "../components/FAQ/FAQ"
import { faqDataBackgroundRemover } from "../data/data"
import SEO from "../components/SEO/SEO"

const BackgroundRemoverPage = () => {
  const apiUrl = import.meta.env.VITE_API_URL
  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqDataBackgroundRemover.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  } // SoftwareApplication schema for the tool
  const toolSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Free Background Remover Tool",
    applicationCategory: "DesignApplication, UtilitiesApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description:
      "Use this free background remover tool to remove the background from images quickly and easily. Perfect for designers, marketers, and casual users.",
    featureList:
      "Remove image backgrounds automatically, Download transparent PNG images, Process images in seconds",
    creator: {
      "@type": "Person",
      name: "Smit Parekh",
    },
    screenshot: {
      "@type": "ImageObject",
      url: "https://www.smitparekh.co.in/images/Background-Remover.png",
      width: "1200",
      height: "630",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "186",
    },
    datePublished: "2023-04-15",
    dateModified: "2023-10-20",
  }

  // Breadcrumb structured data
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.smitparekh.co.in",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Free Tools",
        item: "https://www.smitparekh.co.in/tools",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Background Remover",
        item: "https://www.smitparekh.co.in/background-remover",
      },
    ],
  }

  // How-to schema
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Remove Background from Images",
    description:
      "Learn how to easily remove backgrounds from your images using our free online tool.",
    step: [
      {
        "@type": "HowToStep",
        name: "Upload Image",
        text: "Click the upload button to select an image from your device",
      },
      {
        "@type": "HowToStep",
        name: "Process Image",
        text: "Wait a few seconds while our AI removes the background",
      },
      {
        "@type": "HowToStep",
        name: "Download Result",
        text: "Download your transparent PNG image with the background removed",
      },
    ],
  }
  return (
    <>
      <SEO
        title="Free Background Remover Tool | Remove Image Backgrounds Instantly"
        description="Remove image backgrounds in seconds with our free online tool. Get transparent PNG files with perfect edge detection for product photos, portraits, and graphics without any cost."
        keywords="free background remover, remove image background online, transparent PNG creator, background eraser tool, remove background from photo free, no-cost background removal"
        canonicalUrl="https://www.smitparekh.co.in/background-remover"
        ogImage="https://www.smitparekh.co.in/images/Background-Remover.png"
        ogTitle="Free Online Background Remover Tool - No Sign-up Required"
        twitterImage="https://www.smitparekh.co.in/images/Background-Remover.png"
        structuredData={[toolSchema, faqSchema, breadcrumbSchema, howToSchema]}
        lastUpdated="2023-10-20"
        language="en-US"
      />

      <HeroSection />

      <div id="bg-remover-tool" className="container">
        <BackgroundRemover toolName="Background Remover" apiUrl={apiUrl} />
      </div>

      <HowItWorksSection />
      <UseCasesSection />
      <ToolBenefitsSection />
      <FAQ faqData={faqDataBackgroundRemover} toolName="Background Remover" />
      <CTASection />
    </>
  )
}

export default BackgroundRemoverPage
