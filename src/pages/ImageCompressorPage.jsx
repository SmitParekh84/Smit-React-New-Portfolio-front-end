import React from "react"
import ImageCompressor from "../components/ImageCompressor/ImageCompressor"
import FAQ from "../components/FAQ/FAQ"
import SEO from "../components/SEO/SEO"
import HowItWorks from "../components/HowItWorks/HowItWorks"
import CTASection from "../components/CTASection/CTASection"
import ToolPageHero from "../components/ToolPageHero/ToolPageHero"
import { faqDataImageCompressor } from "../data/data"

const howItWorksSteps = [
  {
    title: "Upload Your Image",
    description:
      "Drag and drop or click to select any JPEG, PNG, or WebP image from your device. Supports files up to 10 MB.",
  },
  {
    title: "Adjust Compression Level",
    description:
      "Choose your desired quality setting. Higher quality keeps more detail; lower quality reduces file size further.",
  },
  {
    title: "Download the Result",
    description:
      "Preview the compressed image, then download it instantly. No watermarks, no sign-up, no size limits on downloads.",
  },
]

const ImageCompressorPage = () => {
  const apiUrl = import.meta.env.VITE_API_URL

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
      availability: "https://schema.org/InStock",
    },
    description:
      "Compress images online without losing quality. Reduce file size for websites, email, and social media while maintaining visual clarity. No sign-up required.",
    featureList:
      "Adjustable quality settings, Visual quality preview, Fast browser-side processing, Supports JPEG PNG WebP, Bulk compression",
    creator: {
      "@type": "Person",
      name: "Smit Parekh",
      url: "https://www.smitparekh.co.in",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "112",
      bestRating: "5",
      worstRating: "1",
    },
    datePublished: "2023-09-15",
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
        name: "Image Compressor",
        item: "https://www.smitparekh.co.in/free-tools/image-compressor",
      },
    ],
  }

  return (
    <>
      <SEO
        title="Free Image Compressor — Reduce Image Size Without Losing Quality"
        description="Compress images online for free without losing quality. Reduce file sizes for websites, email, and social media while maintaining visual clarity. No sign-up required."
        keywords="free image compressor, compress images online, reduce image size, image compression tool, optimize images for web, photo size reducer, bulk image compressor, JPEG compressor, PNG compressor"
        canonicalUrl="https://www.smitparekh.co.in/free-tools/image-compressor"
        ogTitle="Free Image Compressor — Optimize Images Without Quality Loss"
        ogImage="https://www.smitparekh.co.in/images/Image-Compressor-Tool.webp"
        twitterImage="https://www.smitparekh.co.in/images/Image-Compressor-Tool.webp"
        structuredData={[toolSchema, faqSchema, breadcrumbSchema]}
        lastUpdated="2025-03-10"
        language="en-US"
        author="Smit Parekh"
      />

      <ToolPageHero
        icon="uil-compress"
        title="Free Image Compressor — Reduce File Size Instantly"
        description="Compress JPEG, PNG, and WebP images online without visible quality loss. Ideal for websites, email, and social media. No sign-up, no watermarks, completely free."
        badges={['100% Free', 'No Registration', 'No Watermarks', 'Browser-side Processing']}
        primaryCta={{ text: 'Compress My Image', href: '#image-compressor-tool' }}
        secondaryCta={{ text: 'How It Works', href: '#how-it-works' }}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Free Tools', path: '/free-tools' },
          { name: 'Image Compressor', path: '/free-tools/image-compressor' },
        ]}
      />

      <div id="image-compressor-tool">
        <ImageCompressor toolName="Image Compressor" apiUrl={apiUrl} />
      </div>

      <HowItWorks
        title="How It Works"
        subtitle="Compress images in 3 simple steps"
        steps={howItWorksSteps}
      />

      <FAQ
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about image compression"
        faqData={faqDataImageCompressor}
        toolName="Image Compressor"
      />

      <CTASection
        title="Need More Image Tools?"
        subtitle="Explore our full suite of free image tools — converter, background remover, and more."
        buttonText="View All Tools"
        buttonLink="/free-tools"
        buttonIcon="uil-apps"
      />
    </>
  )
}

export default ImageCompressorPage
