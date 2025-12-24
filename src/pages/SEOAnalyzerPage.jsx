import React from "react"
import { faqDataSEOAnalyzer } from "../data/data"
import FAQ from "../components/FAQ/FAQ"
import SEO from "../components/SEO/SEO"
import HowItWorks from "../components/HowItWorks/HowItWorks"
import CTASection from "../components/CTASection/CTASection"
import {
  SEOAnalyzer,
  SEOHero,
  SEOBestPractices,
  SEOCaseStudy,
  SEOAnalyzerFeatures,
  RelatedSEOTools,
  SEOBenefits,
} from "../components/SEOAnalyzer"
import "../styles/SEOAnalyzerPage.css"

const SEOAnalyzerPage = () => {
  const apiUrl = import.meta.env.VITE_API_URL

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqDataSEOAnalyzer.map((item) => ({
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
    name: "Free SEO Analyzer Tool | Website SEO Checker Online",
    applicationCategory: "WebApplication, BusinessApplication, SEOTool",
    operatingSystem: "Web, Android, iOS",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    description:
      "Free online SEO analyzer tool that evaluates 50+ SEO factors including technical setup, on-page elements, content quality, and provides actionable recommendations to improve your search rankings.",
    featureList:
      "Complete SEO analysis, Technical SEO audit, Content quality evaluation, Mobile optimization check, Page speed analysis, Backlink suggestion, Keyword optimization, Core Web Vitals assessment",
    creator: {
      "@type": "Person",
      name: "Smit Parekh",
      url: "https://www.smitparekh.co.in",
    },
    screenshot: {
      "@type": "ImageObject",
      url: "https://www.smitparekh.co.in/images/SEO-Analyzer-Tool.webp",
      width: "1200",
      height: "630",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
    keywords:
      "seo analyzer, free seo tool, website checker, seo audit tool, seo analyzer online, website seo analyzer, free seo analyzer tool",
    datePublished: "2023-07-15",
    dateModified: "2025-05-29",
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
        name: "SEO Analyzer",
        item: "https://www.smitparekh.co.in/free-tools/seo-analyzer",
      },
    ],
  }

  // HowTo schema for the tool
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Analyze Your Website SEO",
    description:
      "Learn how to thoroughly analyze your website for SEO issues and improve your search engine rankings.",
    step: [
      {
        "@type": "HowToStep",
        name: "Enter Your Website URL",
        text: "Input your full website URL into the SEO Analyzer tool",
      },
      {
        "@type": "HowToStep",
        name: "Run the Analysis",
        text: "Click on the Analyze button to start the comprehensive SEO scan",
      },
      {
        "@type": "HowToStep",
        name: "Review Your SEO Score",
        text: "Check your overall SEO score and the detailed breakdown of specific factors",
      },
      {
        "@type": "HowToStep",
        name: "Examine On-Page Factors",
        text: "Review title tags, meta descriptions, headings, and content quality",
      },
      {
        "@type": "HowToStep",
        name: "Check Technical Aspects",
        text: "Analyze loading speed, mobile responsiveness, and other technical SEO elements",
      },
      {
        "@type": "HowToStep",
        name: "Implement Recommendations",
        text: "Follow the prioritized recommendations to improve your website's SEO",
      },
    ],
    tool: {
      "@type": "HowToTool",
      name: "SEO Analyzer Tool",
    },
  }

  // Case study structured data
  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How SEO Analysis Increased Organic Traffic by 156%",
    description:
      "A case study showing how a complete SEO analysis and optimization helped an e-commerce website dramatically improve their search visibility and traffic.",
    image: "https://www.smitparekh.co.in/images/SEO-Analyzer-Tool.webp",
    datePublished: "2024-02-15",
    dateModified: "2025-04-27",
    author: {
      "@type": "Person",
      name: "Smit Parekh",
    },
  }

  // How it works steps
  const howItWorksSteps = [
    {
      title: "Enter Your Website URL",
      description:
        "Simply paste your complete website URL into the analyzer input field. You can analyze any publicly accessible website including your own or your competitors'.",
    },
    {
      title: "Run the Comprehensive Analysis",
      description:
        "Click the 'Analyze' button and our tool will scan your website for over 50 different SEO factors covering technical setup, on-page elements, content quality, and performance.",
    },
    {
      title: "Review Your SEO Score",
      description:
        "Get an overall SEO score along with a detailed breakdown of your website's performance across key SEO categories. The score helps you quickly understand your site's current optimization level.",
    },
    {
      title: "Implement Prioritized Recommendations",
      description:
        "Follow our actionable, priority-based recommendations to fix issues and improve your website's search engine rankings. Each recommendation includes specific implementation steps.",
    },
    {
      title: "Track Improvements Over Time",
      description:
        "Re-analyze your website regularly to track progress and identify new opportunities for improvement as search engine algorithms evolve.",
    },
  ]

  // SEO Tool benefits
  const toolBenefits = [
    {
      icon: "uil-search-alt",
      title: "Comprehensive Analysis",
      description:
        "Our tool examines over 50 critical SEO factors including meta tags, content quality, page speed, mobile optimization, and technical setup.",
    },
    {
      icon: "uil-bolt",
      title: "Instant Results",
      description:
        "Get immediate, in-depth analysis of your website's SEO performance without complex setup or technical knowledge.",
    },
    {
      icon: "uil-chart-line",
      title: "Actionable Insights",
      description:
        "Receive specific, prioritized recommendations with implementation steps rather than just data points.",
    },
    {
      icon: "uil-mobile-android",
      title: "Mobile SEO Checks",
      description:
        "Verify mobile-friendliness factors that directly impact your rankings in mobile search results.",
    },
    {
      icon: "uil-comparison",
      title: "Competitor Benchmarking",
      description:
        "Analyze your competitors' websites to identify opportunities and gain competitive advantages.",
    },
    {
      icon: "uil-lock",
      title: "100% Free & Secure",
      description:
        "Access all features without any cost, subscription, or registration. Your data stays private and secure.",
    },
  ]

  return (
    <>
      {" "}
      <SEO
        title="Best Free SEO Analyzer Tool 2025 | Website SEO Checker Online"
        description="Analyze your website with our powerful free SEO analyzer tool. Get an instant SEO audit, performance score, and expert recommendations to boost your rankings."
        keywords="free seo analyzer, seo analyzer tool, seo analyzer online, website seo checker, free seo analyzer tool, seo audit tool, seo checker tool, seo analyzer free, seo evaluation tool, seo performance analysis"
        canonicalUrl="https://www.smitparekh.co.in/free-tools/seo-analyzer"
        ogImage="https://www.smitparekh.co.in/images/SEO-Analyzer-Tool.webp"
        twitterImage="https://www.smitparekh.co.in/images/SEO-Analyzer-Tool.webp"
        structuredData={[
          toolSchema,
          faqSchema,
          breadcrumbSchema,
          howToSchema,
          caseStudySchema,
        ]}
        lastUpdated="2025-05-29"
        language="en-US"
      />{" "}
      {/* Hero Section with Main Tool */}
      <SEOHero />
      {/* Main SEO Analyzer Tool */}
      <SEOAnalyzer apiUrl={apiUrl} toolName="SEO Analyzer" />{" "}
      {/* Benefits Section */}
      <SEOBenefits benefits={toolBenefits} />
      {/* How it Works Section */}
      <HowItWorks
        title="How Our SEO Analyzer Works"
        subtitle="Simple Process, Powerful Insights"
        steps={howItWorksSteps}
      />{" "}
      {/* SEO Case Study Section */}
      <SEOCaseStudy />
      {/* SEO Best Practices Section */}
      <SEOBestPractices />
      {/* FAQ Section */}
      <FAQ faqData={faqDataSEOAnalyzer} toolName="SEO Analyzer" />{" "}
      {/* CTA Section */}
      <CTASection
        title="Need Professional SEO Services?"
        subtitle="Looking for expert help with your SEO strategy? Get a personalized consultation for your specific business needs."
        buttonText="Contact Me for SEO Consultation"
        buttonLink="/contact"
        buttonIcon="uil-message"
      />{" "}
      {/* SEO Analysis Features Section */}
      <SEOAnalyzerFeatures /> {/* Related SEO Tools Section */}
      <RelatedSEOTools />
    </>
  )
}

export default SEOAnalyzerPage
