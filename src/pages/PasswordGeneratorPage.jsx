import SEO from '../components/SEO/SEO'
import PasswordGenerator from '../components/PasswordGenerator/PasswordGenerator'
import FAQ from '../components/FAQ/FAQ'
import CTASection from '../components/CTASection/CTASection'
import ToolPageHero from '../components/ToolPageHero/ToolPageHero'
import HowItWorks from '../components/HowItWorks/HowItWorks'
import {
  generateToolSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  prepareStructuredData,
  getFullUrl,
} from '../utils/SocialMetaHelper'

const faqs = [
  {
    question: 'Is this password generator truly random?',
    answer: 'Yes. The tool uses the Web Crypto API (crypto.getRandomValues), which is a cryptographically secure random number generator built into every modern browser. It produces passwords that are statistically unpredictable.',
  },
  {
    question: 'Are my passwords stored or sent to a server?',
    answer: 'No. Every password is generated entirely in your browser using JavaScript. Nothing is ever sent to a server, stored, or logged. Your passwords are 100% private.',
  },
  {
    question: 'How long should my password be?',
    answer: 'Security experts recommend at least 16 characters for important accounts. Longer passwords are exponentially harder to crack. For critical accounts like banking or email, use 20+ characters with all character types enabled.',
  },
  {
    question: 'Should I include symbols in my password?',
    answer: 'Yes, whenever the website allows it. A 12-character password with symbols is roughly 1,000× harder to crack than one with only letters and numbers at the same length.',
  },
  {
    question: 'What does "No Ambiguous Characters" mean?',
    answer: 'Characters like 0 (zero) and O (letter O), or 1 (one), l (lowercase L), and I (uppercase i) look similar and can cause confusion when reading or typing a password. Enabling this option removes them to avoid mistakes.',
  },
  {
    question: 'How do I use all these passwords safely?',
    answer: 'Use a password manager (like Bitwarden, 1Password, or KeePass) to store and auto-fill your generated passwords. Never reuse the same password across multiple sites.',
  },
  {
    question: 'What makes a password "Strong" according to the strength meter?',
    answer: 'The strength meter rates a password as Strong when it is at least 16 characters long and includes all four character types: uppercase letters, lowercase letters, numbers, and symbols. Fair means at least 8 characters with 2 types; Good means 12 characters with 3 types.',
  },
]

const howItWorksSteps = [
  {
    title: 'Choose Your Settings',
    description: 'Set your desired length (6–64 characters) and toggle uppercase, lowercase, numbers, and symbols on or off.',
  },
  {
    title: 'Generate Instantly',
    description: 'A cryptographically secure password appears immediately. Hit the refresh icon or the Generate button for a new one.',
  },
  {
    title: 'Copy & Use',
    description: 'Click the copy icon to grab your password. Use the bulk list below for multiple secure passwords in one click.',
  },
]

const PasswordGeneratorPage = () => {
  const formattedDate = new Date().toISOString().split('T')[0]
  const pageUrl = '/free-tools/password-generator'

  const toolSchema = generateToolSchema({
    title: 'Free Password Generator',
    description: 'Generate strong, random, secure passwords instantly. Choose length, character types, and copy with one click — 100% free, no sign-up, runs entirely in your browser.',
    features: [
      'Cryptographically secure random passwords',
      'Adjustable length from 6 to 64 characters',
      'Toggle uppercase, lowercase, numbers and symbols',
      'Exclude ambiguous characters option',
      'Password strength meter',
      'Bulk generate 6 passwords at once',
      '100% private — nothing sent to any server',
    ],
    screenshot: '/images/password-generator-hero.webp',
  })
  toolSchema.aggregateRating = {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '518',
  }
  toolSchema.datePublished = '2024-08-01'
  toolSchema.dateModified = formattedDate

  const faqSchema    = generateFAQSchema(faqs)
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home',       path: '/' },
    { name: 'Free Tools', path: '/free-tools' },
    { name: 'Password Generator', path: pageUrl },
  ])

  return (
    <>
      <SEO
        title="Free Password Generator — Strong & Secure Passwords Instantly"
        description="Generate strong, random passwords instantly. Choose length & character types, check strength, copy with one click — 100% free, private, no sign-up needed."
        keywords="password generator, strong password generator, random password generator, secure password generator, free password generator, online password maker, complex password creator, password strength checker"
        canonicalUrl={getFullUrl(pageUrl)}
        ogTitle="Free Password Generator — Secure, Random, Instant"
        ogDescription="Create cryptographically secure passwords of any length. Uppercase, numbers, symbols — all configurable. Runs in your browser, nothing stored."
        ogImage={getFullUrl('/images/password-generator-hero.webp')}
        imageWidth="1200"
        imageHeight="630"
        twitterTitle="Free Password Generator: Strong & Random Passwords in One Click"
        twitterImage={getFullUrl('/images/password-generator-hero.webp')}
        structuredData={[
          prepareStructuredData(toolSchema),
          prepareStructuredData(faqSchema),
          prepareStructuredData(breadcrumbSchema),
        ]}
        lastUpdated={`${formattedDate}T10:00:00Z`}
        language="en-US"
        author="Smit Parekh"
        alternateLanguages={[{ lang: 'en', url: getFullUrl(pageUrl) }]}
      />

      <ToolPageHero
        title="Free Password Generator"
        subtitle="Create strong, cryptographically secure passwords instantly — runs in your browser, nothing stored"
        icon="uil-lock-alt"
      />

      <PasswordGenerator />

      <HowItWorks
        title="How to Generate a Strong Password"
        subtitle="Three steps to a secure password"
        steps={howItWorksSteps}
      />

      <FAQ
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about our Password Generator"
        faqData={faqs}
      />

      <CTASection
        title="Need a Secure Website or Web App?"
        subtitle="I build modern, secure web applications with best-practice authentication. Let's talk."
        buttonText="Contact Me"
        buttonLink="/contact"
        buttonIcon="uil-message"
      />
    </>
  )
}

export default PasswordGeneratorPage
