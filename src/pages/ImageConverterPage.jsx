import React from "react"
import ImageConverter from "../components/ImageConverter/ImageConverter"
import FAQ from "../components/FAQ/FAQ"
import SEO from "../components/SEO/SEO"
import HowItWorks from "../components/HowItWorks/HowItWorks"
import CTASection from "../components/CTASection/CTASection"
import ToolPageHero from "../components/ToolPageHero/ToolPageHero"
import { faqDataImageConverter } from "../data/data"

const howItWorksSteps = [
  {
    title: "Upload Your Image",
    description:
      "Select any image file from your device — JPEG, PNG, WebP, GIF, and more are all supported. Drag and drop or click to browse.",
  },
  {
    title: "Choose the Output Format",
    description:
      "Pick the target format you need: PNG, JPEG, WebP, or others. Choose the one that best suits your project — WebP for web performance, PNG for transparency, JPEG for photos.",
  },
  {
    title: "Convert and Download",
    description:
      "Click convert and download your file instantly. No watermarks, no account needed, no file size limits on downloads.",
  },
]

const ImageConverterPage = () => {
  const apiUrl = import.meta.env.VITE_API_URL

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqDataImageConverter.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }

  const toolSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Free Image Converter Tool",
    applicationCategory: "UtilitiesApplication, WebApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    description:
      "Convert images between PNG, JPG, WebP, GIF and more formats online for free. Fast, no quality loss, no registration required.",
    featureList:
      "Convert between PNG JPEG WebP GIF, Maintain original quality, Fast browser-side conversion, Batch conversion, No watermarks",
    creator: {
      "@type": "Person",
      name: "Smit Parekh",
      url: "https://www.smitparekh.co.in",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      reviewCount: "98",
      bestRating: "5",
      worstRating: "1",
    },
    datePublished: "2023-09-20",
    dateModified: "2025-03-10",
  }

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
        item: "https://www.smitparekh.co.in/free-tools",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Image Converter",
        item: "https://www.smitparekh.co.in/free-tools/image-converter",
      },
    ],
  }

  return (
    <>
      <SEO
        title="Free Image Converter — Convert PNG JPG WebP Online"
        description="Convert images online between PNG, JPG, WebP, GIF and more formats. Fast, free image converter with no quality loss and no registration required."
        keywords="free image converter, convert images online, PNG to JPG, JPG to WebP, image format converter, convert to WebP, online image converter, PNG converter, JPEG converter"
        canonicalUrl="https://www.smitparekh.co.in/free-tools/image-converter"
        ogTitle="Free Image Converter — Convert Between Image Formats Online"
        ogImage="https://www.smitparekh.co.in/images/Image-Converter-Tool.webp"
        twitterImage="https://www.smitparekh.co.in/images/Image-Converter-Tool.webp"
        structuredData={[toolSchema, faqSchema, breadcrumbSchema]}
        lastUpdated="2025-03-10"
        language="en-US"
        author="Smit Parekh"
      />

      <ToolPageHero
        icon="uil-sync"
        title="Free Image Converter — PNG, JPG, WebP & More"
        description="Convert between image formats instantly in your browser. PNG to WebP, JPEG to PNG, or any combination — no quality loss, no watermarks, no sign-up required."
        badges={['100% Free', 'No Registration', 'No Watermarks', 'Supports PNG · JPG · WebP · GIF']}
        primaryCta={{ text: 'Convert My Image', href: '#image-converter-tool' }}
        secondaryCta={{ text: 'How It Works', href: '#how-it-works' }}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Free Tools', path: '/free-tools' },
          { name: 'Image Converter', path: '/free-tools/image-converter' },
        ]}
      />

      <div id="image-converter-tool">
        <ImageConverter toolName="Image Converter" apiUrl={apiUrl} />
      </div>

      <HowItWorks
        title="How It Works"
        subtitle="Convert any image format in 3 easy steps"
        steps={howItWorksSteps}
      />

      <FAQ
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about image conversion"
        faqData={faqDataImageConverter}
        toolName="Image Converter"
      />

      <CTASection
        title="Need More Image Tools?"
        subtitle="Explore our free image compressor, background remover, and more."
        buttonText="View All Tools"
        buttonLink="/free-tools"
        buttonIcon="uil-apps"
      />
    </>
  )
}

export default ImageConverterPage
