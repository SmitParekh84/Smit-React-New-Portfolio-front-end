/**
 * Bot responses for the Help Message component
 * Contains all predefined responses and options for the chat bot
 */

// Initial greeting message configuration
export const initialMessage = {
  id: 'init-1',
  type: 'bot',
  text: "👋 Hi there! I'm Smit's assistant. How can I help you today?",
  options: [
    { id: 'tools', text: 'Tell me about the tools', value: 'tools' },
    { id: 'contact', text: 'I need help with something', value: 'help' },
    { id: 'about', text: 'Who is Smit?', value: 'about' },
    { id: 'portfolio', text: 'Show me the portfolio', value: 'portfolio' }
  ]
};

// Bot response data with enhanced options and more detailed responses
const botResponses = {
  // Tools related responses
  tools: {
    text: "I can help with our free tools! Here are some popular ones:",
    options: [
      { id: 'bg-remover', text: 'Background Remover', value: 'bg-remover' },
      { id: 'linkedin', text: 'LinkedIn Post Generator', value: 'linkedin' },
      { id: 'seo', text: 'SEO Analyzer', value: 'seo' },
      { id: 'qr', text: 'QR Code Generator', value: 'qr' },
      { id: 'img-tools', text: 'Image Tools', value: 'img-tools' },
      { id: 'more-tools', text: 'Show all tools', value: 'more-tools' }
    ]
  },
  'bg-remover': {
    text: "Our Background Remover uses AI to remove backgrounds from images in seconds! Perfect for product photos, profile pictures, and more.",
    action: { type: 'link', url: '/free-tools/background-remover', text: 'Try Background Remover' },
    options: [
      { id: 'bg-help', text: 'How to use it?', value: 'bg-help' },
      { id: 'tools', text: 'Back to tools', value: 'tools' }
    ]
  },
  linkedin: {
    text: "Create viral LinkedIn posts with our AI-powered LinkedIn Post Generator. Get more engagement and grow your professional network!",
    action: { type: 'link', url: '/free-tools/viral-linkedin-post-generator', text: 'Try LinkedIn Post Generator' },
    options: [
      { id: 'linkedin-help', text: 'How to use it?', value: 'linkedin-help' },
      { id: 'tools', text: 'Back to tools', value: 'tools' }
    ]
  },
  seo: {
    text: "Analyze your website's SEO performance and get actionable recommendations to improve your search rankings.",
    action: { type: 'link', url: '/free-tools/seo-analyzer', text: 'Try SEO Analyzer' },
    options: [
      { id: 'seo-help', text: 'How to use it?', value: 'seo-help' },
      { id: 'tools', text: 'Back to tools', value: 'tools' }
    ]
  },
  qr: {
    text: "Create custom QR codes for your business, website, or personal use. Customize colors and add your logo to make it stand out!",
    action: { type: 'link', url: '/free-tools/qr-code-generator', text: 'Try QR Code Generator' },
    options: [
      { id: 'qr-help', text: 'How to use it?', value: 'qr-help' },
      { id: 'tools', text: 'Back to tools', value: 'tools' }
    ]
  },
  'img-tools': {
    text: "We offer several image processing tools to help optimize your visuals:",
    options: [
      { id: 'img-compressor', text: 'Image Compressor', value: 'img-compressor' },
      { id: 'img-converter', text: 'Image Converter', value: 'img-converter' },
      { id: 'tools', text: 'Back to tools', value: 'tools' }
    ]
  },
  'img-compressor': {
    text: "Compress your images without losing quality. Ideal for website optimization and faster loading times.",
    action: { type: 'link', url: '/free-tools/image-compressor', text: 'Try Image Compressor' },
    options: [
      { id: 'img-compressor-help', text: 'How to use it?', value: 'img-compressor-help' },
      { id: 'img-tools', text: 'Back to image tools', value: 'img-tools' }
    ]
  },
  'img-converter': {
    text: "Convert images between different formats like JPG, PNG, WebP, and more. Perfect for adapting images to specific needs.",
    action: { type: 'link', url: '/free-tools/image-converter', text: 'Try Image Converter' },
    options: [
      { id: 'img-converter-help', text: 'How to use it?', value: 'img-converter-help' },
      { id: 'img-tools', text: 'Back to image tools', value: 'img-tools' }
    ]
  },
  'more-tools': {
    text: "We have many more free tools available for you to use. Check out our tools page to see them all!",
    action: { type: 'link', url: '/free-tools', text: 'Explore All Tools' },
    options: [
      { id: 'tools', text: 'Back to popular tools', value: 'tools' },
      { id: 'help', text: 'Need help with a tool?', value: 'help' }
    ]
  },

  // Help related responses
  help: {
    text: "I'd be happy to help! Please let me know what you need assistance with:",
    options: [
      { id: 'tool-help', text: 'Help with a tool', value: 'tool-help' },
      { id: 'contact-us', text: 'Contact Support', value: 'contact-us' },
      { id: 'bug', text: 'Report a bug', value: 'bug' },
      { id: 'feature', text: 'Suggest a feature', value: 'feature' }
    ]
  },
  'tool-help': {
    text: "What tool do you need help with?",
    options: [
      { id: 'bg-help', text: 'Background Remover', value: 'bg-help' },
      { id: 'linkedin-help', text: 'LinkedIn Post Generator', value: 'linkedin-help' },
      { id: 'seo-help', text: 'SEO Analyzer', value: 'seo-help' },
      { id: 'qr-help', text: 'QR Code Generator', value: 'qr-help' },
      { id: 'other-help', text: 'Other tools', value: 'other-help' }
    ]
  },
  'bg-help': {
    text: "To use the Background Remover:\n1. Upload your image\n2. Click 'Remove Background'\n3. Preview the result\n4. Download your image\n\nThe tool works best with clear subjects and contrasting backgrounds.",
    action: { type: 'link', url: '/free-tools/background-remover', text: 'Try Background Remover' },
    options: [
      { id: 'tool-help', text: 'Help with another tool', value: 'tool-help' },
      { id: 'contact-us', text: 'Contact Support', value: 'contact-us' }
    ]
  },
  'linkedin-help': {
    text: "To use the LinkedIn Post Generator:\n1. Enter your topic or key points\n2. Select a tone (professional, casual, etc.)\n3. Click 'Generate Post'\n4. Edit as needed and copy to LinkedIn\n\nTry different tones for various audiences!",
    action: { type: 'link', url: '/free-tools/viral-linkedin-post-generator', text: 'Try LinkedIn Post Generator' },
    options: [
      { id: 'tool-help', text: 'Help with another tool', value: 'tool-help' },
      { id: 'contact-us', text: 'Contact Support', value: 'contact-us' }
    ]
  },
  'seo-help': {
    text: "To use the SEO Analyzer:\n1. Enter your website URL\n2. Click 'Analyze'\n3. Review the detailed report\n4. Apply the recommendations\n\nFocus on high-priority issues first for best results!",
    action: { type: 'link', url: '/free-tools/seo-analyzer', text: 'Try SEO Analyzer' },
    options: [
      { id: 'tool-help', text: 'Help with another tool', value: 'tool-help' },
      { id: 'contact-us', text: 'Contact Support', value: 'contact-us' }
    ]
  },
  'qr-help': {
    text: "To use the QR Code Generator:\n1. Enter your URL, text, or contact info\n2. Customize colors and add a logo (optional)\n3. Click 'Generate QR Code'\n4. Download in your preferred format\n\nTest your QR code with different devices to ensure it scans properly!",
    action: { type: 'link', url: '/free-tools/qr-code-generator', text: 'Try QR Code Generator' },
    options: [
      { id: 'tool-help', text: 'Help with another tool', value: 'tool-help' },
      { id: 'contact-us', text: 'Contact Support', value: 'contact-us' }
    ]
  },
  'img-compressor-help': {
    text: "To use the Image Compressor:\n1. Upload your image(s)\n2. Adjust compression level if needed\n3. Click 'Compress Images'\n4. Download individually or as a ZIP\n\nFind the balance between quality and file size for your needs!",
    action: { type: 'link', url: '/free-tools/image-compressor', text: 'Try Image Compressor' },
    options: [
      { id: 'tool-help', text: 'Help with another tool', value: 'tool-help' },
      { id: 'contact-us', text: 'Contact Support', value: 'contact-us' }
    ]
  },
  'img-converter-help': {
    text: "To use the Image Converter:\n1. Upload your image(s)\n2. Select the target format\n3. Adjust quality settings if available\n4. Click 'Convert Images'\n5. Download the converted files\n\nWebP often provides the best balance of quality and size!",
    action: { type: 'link', url: '/free-tools/image-converter', text: 'Try Image Converter' },
    options: [
      { id: 'tool-help', text: 'Help with another tool', value: 'tool-help' },
      { id: 'contact-us', text: 'Contact Support', value: 'contact-us' }
    ]
  },
  'other-help': {
    text: "For help with other tools, please browse our tools page or contact our support team:",
    action: { type: 'link', url: '/contact', text: 'Contact Support' },
    options: [
      { id: 'more-tools', text: 'See all tools', value: 'more-tools' },
      { id: 'help', text: 'Back to help options', value: 'help' }
    ]
  },
  'contact-us': {
    text: "You can reach our support team via the contact form. We typically respond within 24-48 hours.",
    action: { type: 'link', url: '/contact', text: 'Contact Support' },
    options: [
      { id: 'help', text: 'Back to help options', value: 'help' },
      { id: 'home', text: 'Return to main menu', value: 'home' }
    ]
  },
  bug: {
    text: "Found a bug? Please report it through our contact form with these details:\n1. Which tool or page\n2. Steps to reproduce the issue\n3. What happened vs. what you expected\n4. Your browser and device\n\nScreenshots help a lot!",
    action: { type: 'link', url: '/contact', text: 'Report Bug' },
    options: [
      { id: 'help', text: 'Back to help options', value: 'help' }
    ]
  },
  feature: {
    text: "Have an idea for a new tool or feature? We'd love to hear it! Please include:\n1. Brief description of the feature\n2. How it would help you\n3. Any similar examples elsewhere",
    action: { type: 'link', url: '/contact', text: 'Suggest Feature' },
    options: [
      { id: 'help', text: 'Back to help options', value: 'help' }
    ]
  },

  // About related responses
  about: {
    text: "Smit is a full-stack developer specializing in web development, AI integration, and creating useful online tools. With expertise in React, Node.js, and cloud technologies, Smit builds solutions that solve real problems.",
    options: [
      { id: 'portfolio', text: 'See Portfolio', value: 'portfolio' },
      { id: 'services', text: 'Services Offered', value: 'services' },
      { id: 'skills', text: 'Technical Skills', value: 'skills' },
      { id: 'contact-direct', text: 'Contact Smit', value: 'contact-direct' }
    ]
  },
  portfolio: {
    text: "Check out Smit's portfolio to see previous work and projects, including web applications, e-commerce solutions, and AI-powered tools.",
    action: { type: 'link', url: '/portfolio', text: 'View Portfolio' },
    options: [
      { id: 'about', text: 'Back to About', value: 'about' },
      { id: 'home', text: 'Return to main menu', value: 'home' }
    ]
  },
  services: {
    text: "Smit offers the following services:\n• Custom Web Development\n• E-commerce Solutions\n• SEO Optimization\n• AI Integration\n• Custom Tool Development\n• Technical Consultation",
    action: { type: 'link', url: '/services', text: 'View Services' },
    options: [
      { id: 'about', text: 'Back to About', value: 'about' },
      { id: 'contact-direct', text: 'Contact for Services', value: 'contact-direct' }
    ]
  },
  skills: {
    text: "Smit's technical skills include:\n• Frontend: React, Next.js, JavaScript/TypeScript\n• Backend: Node.js, Express, Python\n• Database: MongoDB, PostgreSQL\n• Cloud: AWS, Netlify, Vercel\n• AI: TensorFlow, OpenAI integrations\n• And more!",
    action: { type: 'link', url: '/skills', text: 'View Skills' },
    options: [
      { id: 'about', text: 'Back to About', value: 'about' },
      { id: 'portfolio', text: 'See Portfolio', value: 'portfolio' }
    ]
  },
  'contact-direct': {
    text: "Ready to work with Smit? Fill out the contact form with your project details, and Smit will get back to you to discuss how to bring your vision to life.",
    action: { type: 'link', url: '/contact', text: 'Contact Smit' },
    options: [
      { id: 'about', text: 'Back to About', value: 'about' },
      { id: 'services', text: 'View Services First', value: 'services' }
    ]
  },

  // Utility responses
  home: {
    text: "How else can I help you today?",
    options: [
      { id: 'tools', text: 'Tell me about the tools', value: 'tools' },
      { id: 'contact', text: 'I need help with something', value: 'help' },
      { id: 'about', text: 'Who is Smit?', value: 'about' },
      { id: 'portfolio', text: 'Show me the portfolio', value: 'portfolio' }
    ]
  },
  
  // Fallback response
  default: {
    text: "I'm not sure how to help with that specific request. Would you like to try one of these options?",
    options: [
      { id: 'tools', text: 'Explore our tools', value: 'tools' },
      { id: 'help', text: 'Get help', value: 'help' },
      { id: 'contact-us', text: 'Contact Support', value: 'contact-us' }
    ]
  },

  // Keywords for better matching
  'background': { redirect: 'bg-remover' },
  'remove background': { redirect: 'bg-remover' },
  'backgrounds': { redirect: 'bg-remover' },
  'post': { redirect: 'linkedin' },
  'linkedin post': { redirect: 'linkedin' },
  'generate post': { redirect: 'linkedin' },  'analyze': { redirect: 'seo' },
  'website seo': { redirect: 'seo' },
  'seo tool': { redirect: 'seo' },'qr code': { redirect: 'qr' },
  'compress': { redirect: 'img-compressor' },
  'convert': { redirect: 'img-converter' },
  'image format': { redirect: 'img-converter' },
  'problem': { redirect: 'bug' },
  'not working': { redirect: 'bug' },
  'issue': { redirect: 'bug' },
  'idea': { redirect: 'feature' },
  'suggest': { redirect: 'feature' },
  'hire': { redirect: 'contact-direct' },
  'work': { redirect: 'contact-direct' },  'project': { redirect: 'contact-direct' },
  'development': { redirect: 'contact-direct' },
  'website': { redirect: 'contact-direct' },
  'resume': { redirect: 'portfolio' },
  'cv': { redirect: 'portfolio' },
  'pricing': { redirect: 'services' },
  'cost': { redirect: 'services' },
  'fee': { redirect: 'services' },
  'experience': { redirect: 'skills' },
  'menu': { redirect: 'home' },
  'start over': { redirect: 'home' },
  'restart': { redirect: 'home' },  'hi': { redirect: 'home' },
  'hello': { redirect: 'home' },
  'assistant': { redirect: 'home' },
  'thanks': { redirect: 'home' },
  'thank you': { redirect: 'home' }
};

export default botResponses;
