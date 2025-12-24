import React from "react"
import ImageCompressor from "../components/ImageCompressor/ImageCompressor"
import FAQ from "../components/FAQ/FAQ"
import SEO from "../components/SEO/SEO"
import { faqDataImageCompressor } from "../data/data"

const ImageCompressorPage = () => {
  const apiUrl = import.meta.env.VITE_API_URL

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqDataImageCompressor.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }

  // SoftwareApplication schema for the tool
  const toolSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Free Image Compressor Tool",
    applicationCategory: "UtilitiesApplication, WebApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description:
      "Compress your images online without losing quality. This free tool reduces file size while maintaining image quality, perfect for websites and social media.",
    featureList:
      "Compress images with adjustable quality, Maintain visual quality, Fast processing, Support for multiple file formats, Bulk compression available",
    creator: {
      "@type": "Person",
      name: "Smit Parekh",
    },
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
        name: "Image Compressor",
        item: "https://www.smitparekh.co.in/free-tools/image-compressor",
      },
    ],
  }

  return (
    <>
      <SEO
        title="Free Image Compressor | Reduce Image Size Without Losing Quality"
        description="Compress images online for free without losing quality. Reduce file sizes for websites, email, and social media while maintaining visual clarity. No signup required."
        keywords="free image compressor, compress images online, reduce image size, image compression tool, optimize images for web, photo size reducer, bulk image compressor"
        canonicalUrl="https://www.smitparekh.co.in/free-tools/image-compressor"
        ogTitle="Free Image Compression Tool - Optimize Images Without Quality Loss"
        ogDescription="Compress your images for web and social media without losing quality. Free, fast, and easy to use."
        ogImage="https://www.smitparekh.co.in/images/Image-Compressor-Tool.webp"
        twitterImage="https://www.smitparekh.co.in/images/Image-Compressor-Tool.webp"
        structuredData={[toolSchema, faqSchema, breadcrumbSchema]}
      />

      <ImageCompressor toolName="Image Compressor" apiUrl={apiUrl} />
      <FAQ faqData={faqDataImageCompressor} toolName="Image Compressor" />
    </>
  )
}

export default ImageCompressorPage
