import React from "react"
import LinkedInPostGenerator from "../components/LinkedInPostGenerator/LinkedInPostGenerator"
import FAQ from "../components/FAQ/FAQ"
import { faqDataLinkedin } from "../data/data"
import SEO from "../components/SEO/SEO"
import HowItWorks from "../components/HowItWorks/HowItWorks"
import CTASection from "../components/CTASection/CTASection"
import ToolPageHero from "../components/ToolPageHero/ToolPageHero"

const LinkedInPostGeneratorPage = () => {
  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqDataLinkedin.map((item) => ({
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
    name: "Free AI-Powered LinkedIn Post Generator",
    applicationCategory:
      "BusinessApplication, UtilitiesApplication, Social Media",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description:
      "Generate engaging, professional LinkedIn posts with our free AI-powered tool. Increase your engagement and grow your network with compelling content.",
    featureList:
      "AI-generated content, LinkedIn optimization, Multiple post styles, One-click copying",
    creator: {
      "@type": "Person",
      name: "Smit Parekh",
    },
    screenshot: {
      "@type": "ImageObject",
      url: "https://www.smitparekh.co.in/images/viral-linkedin-post-generator.webp",
      width: "1200",
      height: "630",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "143",
    },
    datePublished: "2023-05-10",
    dateModified: "2023-11-15",
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
        item: "https://www.smitparekh.co.in/free-tools",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "LinkedIn Post Generator",
        item: "https://www.smitparekh.co.in/free-tools/viral-linkedin-post-generator",
      },
    ],
  }

  // HowTo schema for the tool usage
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Generate Viral LinkedIn Posts",
    description:
      "Learn how to create engaging LinkedIn posts that increase your visibility and engagement on the platform.",
    step: [
      {
        "@type": "HowToStep",
        name: "Enter Topic",
        text: "Type the main topic you want to create a post about",
      },
      {
        "@type": "HowToStep",
        name: "Select Style",
        text: "Choose the tone and style that fits your personal brand",
      },
      {
        "@type": "HowToStep",
        name: "Generate Content",
        text: "Click 'Generate' to create AI-powered content for your post",
      },
      {
        "@type": "HowToStep",
        name: "Copy and Post",
        text: "Copy the generated content and post it to your LinkedIn profile",
      },
    ],
    tool: {
      "@type": "HowToTool",
      name: "LinkedIn Post Generator",
    },
  }

  return (
    <>
      <SEO
        title="Free AI LinkedIn Post Generator | Create Viral Content Instantly"
        description="Generate engaging, viral-worthy LinkedIn posts with our free AI tool. Save time, increase engagement, and grow your professional network with compelling content created in seconds."
        keywords="Free LinkedIn post generator, AI content creator, viral LinkedIn posts, professional content writing, LinkedIn engagement tool, free AI writing tool, social media content"
        canonicalUrl="https://www.smitparekh.co.in/free-tools/viral-linkedin-post-generator"
        ogImage="https://www.smitparekh.co.in/images/viral-linkedin-post-generator.webp"
        twitterImage="https://www.smitparekh.co.in/images/viral-linkedin-post-generator.webp"
        structuredData={[toolSchema, faqSchema, breadcrumbSchema, howToSchema]}
        lastUpdated="2023-11-15"
        language="en-US"
      />

      <ToolPageHero
        icon="uil-linkedin"
        title="Free AI LinkedIn Post Generator"
        description="Create high-engagement LinkedIn posts in seconds using AI. Choose your tone, enter a topic, and get a polished, professional post ready to publish. No sign-up, no cost."
        badges={['100% Free', 'No Registration', 'AI-Powered', 'Copy in 1 Click']}
        primaryCta={{ text: 'Generate My Post', href: '#linkedin-generator-tool' }}
        secondaryCta={{ text: 'How It Works', href: '#how-it-works' }}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Free Tools', path: '/free-tools' },
          { name: 'LinkedIn Post Generator', path: '/free-tools/viral-linkedin-post-generator' },
        ]}
      />

      <div id="linkedin-generator-tool">
        <LinkedInPostGenerator />
      </div>

      <HowItWorks
        title="How It Works"
        subtitle="Create a viral LinkedIn post in 3 steps"
        steps={[
          { title: 'Enter Your Topic', description: 'Type the subject you want to write about — a professional achievement, industry insight, or personal story.' },
          { title: 'Choose Tone & Style', description: 'Select the writing style that fits your personal brand: professional, inspirational, storytelling, or educational.' },
          { title: 'Generate & Post', description: 'Click Generate to get an AI-crafted post. Copy it, tweak as needed, and publish directly to LinkedIn.' },
        ]}
      />

      <FAQ
        title="Frequently Asked Questions"
        subtitle="Everything about the LinkedIn Post Generator"
        faqData={faqDataLinkedin}
        toolName="Viral LinkedIn Post Generator"
      />

      <CTASection
        title="More Free Tools for Professionals"
        subtitle="Explore our background remover, SEO analyzer, meta tag checker, and more."
        buttonText="View All Tools"
        buttonLink="/free-tools"
        buttonIcon="uil-apps"
      />
    </>
  )
}

export default LinkedInPostGeneratorPage
