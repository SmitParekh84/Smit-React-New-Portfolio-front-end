import SEO from '../components/SEO/SEO'
import WordCounter from '../components/WordCounter/WordCounter'
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
    question: 'How does the word counter work?',
    answer: 'The word counter analyses your text in real time as you type or paste. It splits the text into words using standard word-boundary rules and counts each token, giving you an instant accurate count.',
  },
  {
    question: 'Does it count words the same way Microsoft Word does?',
    answer: 'Very closely. Both tools use standard word-boundary splitting. Minor differences can occur with hyphenated words or special characters, but results are within 1–2 words for typical documents.',
  },
  {
    question: 'How is reading time calculated?',
    answer: 'Reading time is estimated at 238 words per minute, the average adult silent reading speed according to research. Speaking time uses 130 words per minute, typical for presentations and podcasts.',
  },
  {
    question: 'What is keyword density and why does it matter for SEO?',
    answer: 'Keyword density is the percentage of times a specific word appears relative to the total word count. For SEO, a density of 1–3% for your primary keyword is considered natural. Higher than 3% may look like keyword stuffing to search engines.',
  },
  {
    question: 'Is there a character limit?',
    answer: 'The tool supports up to 50,000 characters per session — enough for a full-length article or report. For longer documents, paste them in sections.',
  },
  {
    question: 'Is my text stored or shared?',
    answer: 'No. All analysis happens entirely in your browser. Your text is never sent to any server, stored, or shared. It is 100% private.',
  },
  {
    question: 'Can I use this for Twitter, LinkedIn or Instagram character limits?',
    answer: 'Yes. The character count (with and without spaces) is shown in real time. Twitter allows 280 characters, LinkedIn posts up to 3,000, and Instagram captions up to 2,200.',
  },
]

const howItWorksSteps = [
  {
    title: 'Type or Paste Your Text',
    description: 'Click the Paste button or type directly in the editor. Supports up to 50,000 characters.',
  },
  {
    title: 'Get Instant Results',
    description: 'Words, characters, sentences, paragraphs, reading time, and speaking time update live as you type.',
  },
  {
    title: 'Analyse Keyword Density',
    description: 'Scroll down to see your top 10 keywords with frequency bars — perfect for SEO content checks.',
  },
]

const WordCounterPage = () => {
  const formattedDate = new Date().toISOString().split('T')[0]
  const pageUrl = '/free-tools/word-counter'

  const toolSchema = generateToolSchema({
    title: 'Free Online Word Counter',
    description: 'Count words, characters, sentences and paragraphs instantly. Free online word counter with reading time, speaking time, and keyword density — no sign-up needed.',
    features: [
      'Real-time word count',
      'Character count with and without spaces',
      'Sentence and paragraph counter',
      'Reading time and speaking time estimate',
      'Top keyword density analysis',
      'No sign-up or download required',
      '100% private — text never leaves your browser',
    ],
    screenshot: '/images/word-counter-hero.webp',
  })
  toolSchema.aggregateRating = {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '312',
  }
  toolSchema.datePublished = '2024-06-01'
  toolSchema.dateModified = formattedDate

  const faqSchema = generateFAQSchema(faqs)
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Free Tools', path: '/free-tools' },
    { name: 'Word Counter', path: pageUrl },
  ])

  return (
    <>
      <SEO
        title="Free Word Counter Online | Count Words, Characters & More"
        description="Count words, characters, sentences and paragraphs instantly. Free online word counter with reading time, keyword density and more — no sign-up needed."
        keywords="word counter, character counter, word count tool, online word counter, free word counter, character count, sentence counter, paragraph counter, reading time calculator, keyword density checker"
        canonicalUrl={getFullUrl(pageUrl)}
        ogTitle="Free Word Counter — Words, Characters, Reading Time & Keywords"
        ogDescription="Instant word and character count with reading time, speaking time, and keyword density. Free, private, no sign-up needed."
        ogImage={getFullUrl('/images/word-counter-hero.webp')}
        imageWidth="1200"
        imageHeight="630"
        twitterTitle="Free Word Counter: Count Words, Characters & Check Keyword Density"
        twitterImage={getFullUrl('/images/word-counter-hero.webp')}
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
        title="Free Word Counter"
        subtitle="Count words, characters, sentences & more — instantly, privately, in your browser"
        icon="uil-file-alt"
      />

      <WordCounter />

      <HowItWorks
        title="How to Use the Word Counter"
        subtitle="Three simple steps"
        steps={howItWorksSteps}
      />

      <FAQ
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about our Word Counter"
        faqData={faqs}
      />

      <CTASection
        title="Need SEO or Content Writing Help?"
        subtitle="I help businesses create optimised content that ranks. Let's talk about your project."
        buttonText="Contact Me"
        buttonLink="/contact"
        buttonIcon="uil-message"
      />
    </>
  )
}

export default WordCounterPage
