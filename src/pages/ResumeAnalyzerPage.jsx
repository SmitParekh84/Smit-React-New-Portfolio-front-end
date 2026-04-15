// front-end/src/pages/ResumeAnalyzerPage.jsx
import React from "react";
import ResumeAnalyzer from "../components/ResumeAnalyzer/ResumeAnalyzer";
import SEO from "../components/SEO/SEO";
import ToolPageHero from "../components/ToolPageHero/ToolPageHero";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import FAQ from "../components/FAQ/FAQ";
import CTASection from "../components/CTASection/CTASection";
import { faqDataResumeAnalyzer } from "../data/data";

const ResumeAnalyzerPage = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqDataResumeAnalyzer.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const toolSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Free ATS Resume Checker & Optimizer",
    applicationCategory: "BusinessApplication, UtilitiesApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description:
      "Free AI-powered ATS resume checker. Paste your resume or upload a PDF/DOCX, add an optional job description, and get an ATS score, missing keywords, section feedback, and improved bullet points.",
    featureList: "ATS Score, Missing Keywords, Section Breakdown, AI-Rewritten Bullets, PDF Upload, DOCX Upload",
    creator: { "@type": "Person", name: "Smit Parekh" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.smitparekh.co.in" },
      { "@type": "ListItem", position: 2, name: "Free Tools", item: "https://www.smitparekh.co.in/free-tools" },
      { "@type": "ListItem", position: 3, name: "ATS Resume Checker", item: "https://www.smitparekh.co.in/free-tools/ats-resume-checker" },
    ],
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Check Your Resume ATS Score",
    step: [
      { "@type": "HowToStep", name: "Upload or Paste", text: "Upload your resume as PDF/DOCX or paste the text directly." },
      { "@type": "HowToStep", name: "Add Job Description", text: "Optionally paste the job description for targeted keyword analysis." },
      { "@type": "HowToStep", name: "Analyze", text: "Click Analyze Resume to get your ATS score and detailed feedback." },
      { "@type": "HowToStep", name: "Improve", text: "Use the missing keywords, section tips, and rewritten bullets to improve your resume." },
    ],
  };

  return (
    <>
      <SEO
        title="Free ATS Resume Checker & Optimizer — AI Powered | Smit Parekh"
        description="Check your resume's ATS score for free. Upload PDF/DOCX or paste text, add an optional job description, and get missing keywords, section feedback, and AI-improved bullet points instantly."
        keywords="ATS resume checker, resume analyzer free, ATS resume scanner, resume optimizer, ATS score checker, free resume checker, AI resume review"
        canonicalUrl="https://www.smitparekh.co.in/free-tools/ats-resume-checker"
        structuredData={[toolSchema, faqSchema, breadcrumbSchema, howToSchema]}
      />

      <ToolPageHero
        icon="uil-file-check-alt"
        title="Free ATS Resume Checker & Optimizer"
        description="Upload your resume or paste the text. Get an ATS compatibility score, missing keywords, section-by-section feedback, and AI-rewritten bullet points — instantly and for free."
        badges={["100% Free", "No Sign-up", "AI-Powered", "PDF & DOCX"]}
        primaryCta={{ text: "Check My Resume", href: "#resume-analyzer-tool" }}
        secondaryCta={{ text: "How It Works", href: "#how-it-works" }}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Free Tools", path: "/free-tools" },
          { name: "ATS Resume Checker", path: "/free-tools/ats-resume-checker" },
        ]}
      />

      <div id="resume-analyzer-tool">
        <ResumeAnalyzer />
      </div>

      <HowItWorks
        title="How It Works"
        subtitle="Improve your resume in 3 simple steps"
        steps={[
          { title: "Upload or Paste", description: "Upload your resume as a PDF or DOCX file, or simply paste the text directly into the tool." },
          { title: "Analyze Against the Job", description: "Optionally paste the job description. Our AI matches your resume to the role and identifies gaps." },
          { title: "Get Your Report", description: "Receive an ATS score, missing keywords, section-by-section feedback, and AI-improved bullet points." },
        ]}
      />

      <FAQ
        title="Frequently Asked Questions"
        subtitle="Everything about the ATS Resume Checker"
        faqData={faqDataResumeAnalyzer}
        toolName="ATS Resume Checker"
      />

      <CTASection
        title="More Free Tools for Professionals"
        subtitle="Try our LinkedIn Post Generator, SEO Analyzer, QR Code Generator, and more."
        buttonText="View All Tools"
        buttonLink="/free-tools"
        buttonIcon="uil-apps"
      />
    </>
  );
};

export default ResumeAnalyzerPage;
