// data.js

import LogoIcon from "/Smit-Logo.svg"
export const headerData = {
  logo: LogoIcon,
  name: "Smit Parekh",
  desktopNavLinks: [
    { id: "/", label: "Home", icon: "uil-estate" },
    { id: "/about", label: "About", icon: "uil-user" },
    { id: "/services", label: "Services", icon: "uil-briefcase-alt" },
    { id: "/portfolio", label: "Portfolio", icon: "uil-scenery" },
    {
      id: "free-tools",
      label: "Free Tools",
      icon: "uil-tools",
      subLinks: [
        { id: "/free-tools/background-remover", label: "Bg Remover", icon: "uil-trash" },
        { id: "/free-tools/viral-linkedin-post-generator", label: "LinkedIn Post Generator", icon: "uil-linkedin" },
        { id: "/free-tools/meta-tag-checker", label: "Meta Tag Checker", icon: "uil-search" },
      ],
    },
    { id: "/contact", label: "Contact Me", icon: "uil-message" },
  ],
  mobileNavLinks: [
    { id: "/", label: "Home", icon: "uil-estate" },
    { id: "/about", label: "About", icon: "uil-user" },
    { id: "/skills", label: "Skills", icon: "uil-file-alt" },
    { id: "/qualification", label: "Experience", icon: "uil-graduation-cap" },
    { id: "/services", label: "Services", icon: "uil-briefcase-alt" },
    { id: "/portfolio", label: "Portfolio", icon: "uil-scenery" },

    { id: "/free-tools", label: "Free Tools", icon: "uil uil-wrench" },
    // { id: "/background-remover", label: "Bg-Remover", icon: "uil-trash" },
    // { id: "/viral-linkedin-post-generator", label: "Linkedln Post", icon: "uil-linkedin" },
    { id: "/contact", label: "Contact Me", icon: "uil-message" },
  ],
}
export const toolsData = [
  {
    title: "Background Remover",
    icon: "uil-trash",
    shortDescription: "Remove backgrounds from your images effortlessly.",
    path: "/free-tools/background-remover",
  },
  {
    title: "Viral LinkedIn Post Generator",
    icon: "uil-linkedin",
    shortDescription: "Generate viral LinkedIn posts with ease.",
    path: "/free-tools/viral-linkedin-post-generator",
  },
  {
    title: "Meta Tag Checker",
    icon: "uil-linkedin",
    shortDescription: "Check the meta tags of any website.",
    path: "/free-tools/meta-tag-checker",
  },
];


import HomeImage from "/images/Smit-Parekh-Home.png"
export const homeData = {
  title: "Hi, I'm Smit Parekh",
  subtitle: "Marketing Manager/Full-stack Developer",
  description:
    "We create smart marketing strategies and reliable backend systems that help brands grow and thrive.",
  socialLinks: [
    { href: "mailto:smitparekh02@gmail.com", iconClass: "uil uil-envelope" },
    {
      href: "https://www.linkedin.com/in/smit-parekh-497b87231/",
      iconClass: "uil uil-linkedin-alt",
    },
    {
      href: "https://github.com/SmitParekh84",
      iconClass: "uil uil-github-alt",
    },
  ],
  imageSrc: HomeImage, // Adjust path if necessary
}
import AboutImage from "/images/Smit-Parekh-About.webp"
export const aboutData = {
  title: "Marketing Manager & Full-stack Developer",
  subtitle: "Meet, Smit Parekh",
  image: AboutImage,
  description:
    "As a Marketing Manager and Back-end Developer, I blend strategy, creativity, and technical expertise to drive impactful results. I specialize in crafting data-driven marketing strategies and developing scalable backend solutions. My passion for innovation and continuous learning fuels my commitment to creating value through collaboration and results-oriented projects.",
  experience: {
    years: "03+",
    certifications: "10+",
    companies: "02+",
  },
  cvLink: "https://www.smitparekh.studio/Smit-parekh.pdf",
}

export const skillsData = [
  {
    title: "web Development",
    subtitle: "More than 1 year",
    skills: [
      { name: "JavaScript", percentage: "76%" },
      { name: "React.js", percentage: "65%" },
      { name: "HTML/CSS", percentage: "81%" },
      { name: "Node.js", percentage: "82%" },
      { name: "PHP", percentage: "60%" },
      { name: "SQL", percentage: "68%" },
      { name: "MongoDb", percentage: "65%" },
    ],
    icon: "uil uil-brackets-curly",
  },
  {
    title: "Digital Marketing",
    subtitle: "More than 3 years",
    skills: [
      { name: "SEO", percentage: "90%" },
      { name: "Social Media Management", percentage: "80%" },
      { name: "Brand Promotion", percentage: "80%" },
      { name: "Video Content Creation", percentage: "70%" },
      { name: "Strategic Planning", percentage: "75%" },
    ],
    icon: "uil uil-chart-pie",
  },
  {
    title: "Creative Skills",
    subtitle: "More than 3 years",
    skills: [
      { name: "Graphic Design", percentage: "75%" },
      { name: "Video Editing", percentage: "80%" },
    ],
    icon: "uil uil-paint-tool",
  },
]

export const qualificationsData = {
  education: [
    {
      title: "Master of Science in Information Technology",
      subtitle: "Charusat University",
      date: "2023 - 2025",
      cgpa: "8.18",
    },
    {
      title: "Bachelor of Science in Information Technology",
      subtitle: "Charusat University",
      date: "2020 - 2023",
      cgpa: "8.84",
    },
  ],
  work: [
    {
      title: "Marketing Manager and Full-stack Developer",
      subtitle: "Cilans System",
      date: "Aug 2024 - Present",
    },
    {
      title: "Web Developer Intern",
      subtitle: "InternPe",
      date: "Four-week Training Program",
    },
    {
      title: "Video Editor/ Socia-Media Manager",
      subtitle: "Content Beta",
      date: "Jun 2023 - Jan 2024",
    },
    {
      title: "Freelance Video Editor",
      subtitle: "Freelancer",
      date: "Apr 2020 - Jun 2023",
    },
  ],
}

export const servicesData = [
  {
    title: "Full Stack Web Development",
    icon: "uil uil-brackets-curly", // Icon for development
    description: [
      "Transform your ideas into reality with responsive and user-friendly web applications.",
      "Enhance user experience by implementing dynamic features that keep your audience engaged.",
      "Ensure seamless integration through RESTful APIs, facilitating efficient data handling.",
      "Collaborate closely with you to design and deliver features that align perfectly with your business objectives.",
    ],
  },
  {
    title: "SEO Optimization Services",
    icon: "uil uil-search", // Icon for SEO
    description: [
      "Boost your online visibility with comprehensive keyword research tailored to your brand.",
      "Drive organic traffic and improve search engine rankings through effective on-page and off-page SEO strategies.",
      "Enhance user engagement by analyzing performance metrics and refining your online presence.",
      "Stay ahead of the competition by adapting to the latest SEO trends and algorithm updates.",
    ],
  },
  {
    title: "Digital Marketing Strategy",
    icon: "uil uil-megaphone", // Icon for digital marketing
    description: [
      "Elevate your brand with comprehensive digital marketing strategies designed for your target audience.",
      "Enhance brand visibility and community engagement through effective social media management.",
      "Maximize return on investment (ROI) by analyzing market trends and adjusting strategies accordingly.",
      "Ensure continuous improvement by tracking and reporting on campaign effectiveness.",
    ],
  },
  {
    title: "Social Media Marketing",
    icon: "uil uil-share-alt", // Icon for social media marketing
    description: [
      "Engage your audience with captivating social media content that reflects your brand's voice.",
      "Grow your follower base and foster community loyalty through strategic marketing efforts.",
      "Refine your marketing tactics by analyzing social media metrics for maximum impact.",
      "Maintain cohesive messaging across platforms to strengthen brand identity.",
    ],
  },
  {
    title: "Professional Video Editing",
    icon: "uil uil-video", // Icon for video editing
    description: [
      "Create impactful video content that resonates with your audience and enhances brand storytelling.",
      "Utilize engaging motion graphics and animations to capture Viewer attention.",
      "Deliver high-quality projects on time, ensuring your marketing initiatives are always timely.",
      "Align video content with your brand goals through collaboration with your marketing team.",
    ],
  },
  {
    title: "Creative Graphic Design Services",
    icon: "uil uil-image", // Icon for graphic design
    description: [
      "Design stunning graphics that elevate your social media presence and marketing materials.",
      "Create visuals that align with your brand identity, ensuring consistency across all platforms.",
      "Leverage Adobe Creative Suite for high-quality designs that attract and retain customer interest.",
      "Work with your marketing team to ensure all visual elements communicate your brand message effectively.",
    ],
  },
]


import FourGame from "/images/Connect-Four-Game.png"
import uniCart from "/images/UniCart.png"
import cardPortfolio from "/images/Card-Portfolio.png"
import coffeShop from "/images/coffe-shop-php.png"
import directorPortfolioImage from "/images/project-3.webp"
import ytYoutubeImage from "/images/yt-youtube.webp"
import ytShortsImage from "/images/yt-shorts.webp"
import demoVideoImage from "/images/yt3.webp"
import insightifiImage from '/images/insightifi.png';
import cilansImage from '/images/cilans.png';
import socialMediaCampaignImage from '/images/socialMediaCampaignImage.png';
import wordpressProjectImage from '/images/wordpressProjectImage.png';
import contentStrategyImage from '/images/contentStrategyImage.png';
import seoAuditImage from '/images/seoAuditImage.png';
export const marketixpertImage = '/images/marketixpertImage.jpg';
export const portfolioData = [

  {
    id: 13,
    title: "SEO Optimization Project",
    description:
      "Performed on-page and off-page SEO for a client, including keyword research, page ranking analysis, and optimization strategies to enhance search visibility.",
    image: insightifiImage,
    demoLink: "https://www.smitparekh.studio/contact",
  },
  {
    id: 14,
    title: "Digital Marketing Strategies",
    description:
      "Developed comprehensive digital marketing strategies for a client, focusing on SEO optimization, social media engagement, and lead generation to enhance online presence.",
    image: marketixpertImage,
    demoLink: "https://www.smitparekh.studio/contact",
  },
  {
    id: 15,
    title: "SEO Optimization with WordPress",
    description:
      "Executed SEO optimization for a client using WordPress, enhancing site visibility through on-page and off-page strategies, keyword research, and content optimization.",
    image: cilansImage,
    demoLink: "https://www.smitparekh.studio/contact",
  },
  {
    id: 16,
    title: "WordPress Development Project",
    description:
      "Designed and developed a responsive WordPress website for a client, implementing custom themes and plugins to enhance functionality and user experience.",
    image: wordpressProjectImage,
    demoLink: "https://www.smitparekh.studio/contact",
  },
  {
    id: 17,
    title: "Content Strategy Development",
    description:
      "Created a comprehensive content strategy for a client, focusing on audience engagement, SEO integration, and content calendar planning to drive traffic and conversions.",
    image: contentStrategyImage,
    demoLink: "https://www.smitparekh.studio/contact",
  },
  {
    id: 18,
    title: "SEO Audit and Optimization",
    description:
      "Conducted a detailed SEO audit for a client, identifying areas for improvement and implementing strategies to enhance site performance and search engine rankings.",
    image: seoAuditImage, // replace with the actual image variable
    demoLink: "https://www.smitparekh.studio/contact",
  },
  {
    id: 19,
    title: "Social Media Marketing Campaign",
    description:
      "Developed and executed a targeted social media marketing campaign for a client, focusing on brand awareness, engagement, and lead generation through effective content strategies.",
    image: socialMediaCampaignImage,
    demoLink: "https://www.smitparekh.studio/contact",
  },
  {
    id: 1,
    title: "E-commerce Landing Page Design",
    description:
      "Designed and developed a landing page for an e-commerce platform with dynamic product display and SEO optimization.",
    image: uniCart,
    demoLink: "https://unicart-05bt.onrender.com/",

  },
  {
    id: 2,
    title: "Portfolio - Enhanced for SEO and Lead Generation",
    description:
      "Redesigned my portfolio site for better SEO and lead generation, showcasing web development projects and skills",
    image: cardPortfolio,
    demoLink: "https://smit-card-portfolio.onrender.com/",

  },
  {
    id: 3,
    title: "Showcase Video",
    description:
      "Created a demo video highlighting the client's past projects and achievements in a concise and engaging format.",
    image: demoVideoImage,
    demoBtn: 'View',
    demoLink:
      "https://player.vimeo.com/video/950508563?badge=0&autopause=0&player_id=0&app_id=58479",

  },


  {
    id: 6,
    title: "Coffee Shop PHP",
    description:
      "A PHP-based web application for managing a coffee shop, including order processing and inventory management.",
    image: coffeShop,
    demoLink: "https://github.com/SmitParekh84/Coffee-shop-php",
  },
  {
    id: 7,
    title: "Blog WebApp Prototype",
    description:
      "A prototype of a blog application built with Node.js and Express, allowing users to create, edit, and manage blog posts. This sample showcases the core functionalities and design.",
    image: "https://github.com/SmitParekh84/Images/blob/main/blog%20app/showcase.png?raw=true",
    demoLink: "https://nodejs-expressjs-ejs-blog-app.onrender.com/",
  },
  {
    id: 8,
    title: "Director Portfolio",
    description:
      "A visually appealing portfolio website designed for a director, highlighting their work and achievements.",
    image: directorPortfolioImage,
    demoLink: "https://directorportfolio.my.canva.site/",
  },

  {
    id: 10,
    title: "Motion Graphics / YouTube Videos / Branding",
    description:
      "A collection of motion graphics and branding videos created for various projects, enhancing visual storytelling.",
    image: ytYoutubeImage,
    demoBtn: 'View',
    demoLink:
      "https://www.youtube.com/playlist?list=PLLlMxB89AwL449pZeTMNQFe_h7Hn43HcL",
  },
  {
    id: 11,
    title: "YT Shorts / Reels / TikTok Videos",
    description:
      "Engaging short video content designed for social media platforms, maximizing viewer engagement.",
    image: ytShortsImage,
    demoBtn: 'View',
    demoLink:
      "https://www.youtube.com/playlist?list=PLJB1nJ8VTILlq2aZnHUYyVLJ-QnpOKb8f",
  },
  {
    id: 5,
    title: "Connect Four Game",
    description:
      "A fun, interactive web game of Connect Four, created in my free time, where users can challenge each other in an exciting battle of strategy.",
    image: FourGame,
    demoLink: "https://smitparekh84.github.io/Connect-Four-Game/",
  },

]

import PreetImage from "../assets/img/Preet.png"
import DhairyaImage from "../assets/img/dhairya.jpg"
import DhruImage from "../assets/img/dhru.jpg"
import TirthImage from "../assets/img/tirth.jpg"

export const testimonialsData = [
  {
    name: "Preet Patel",
    client: "Java Heaven Pvt.",
    image: PreetImage,
    description:
      "Smit's expertise in web development transformed our online presence. He delivered high-quality work on time and was always available for support. Highly recommended!",
    rating: 4,
  },
  {
    name: "Dhairya Mehata",
    client: "Techno Hub",
    image: DhairyaImage,
    description:
      "Working with Smit was a game changer for our marketing strategy. His creative insights and attention to detail helped us reach our goals effectively. We're extremely pleased with the results!",
    rating: 4,
  },
  {
    name: "Dhru Patel",
    client: "Tech Innovations",
    image: DhruImage,
    description:
      "Smit consistently goes above and beyond. His ability to understand our needs and deliver tailored solutions made the entire process smooth and enjoyable. I can’t imagine working with anyone else!",
    rating: 5,
  },
  {
    name: "Tirth Bhavsar",
    client: "GreenTech Ltd.",
    image: TirthImage,
    description:
      "From the initial consultation to the final product, Smit was professional and communicative. His dedication to excellence truly stands out, and he has been a valuable partner for our projects.",
    rating: 4,
  },
]

export const contactData = {
  phone: "Fill the form to get my phone number",
  email: "smitparekh02@gmail.com",
  location: "Anand, Gujarat, 388001",
  successMessage: "Your message has been sent successfully!",
  errorMessage: "There was an error sending your message. Please try again.",
}

export const footerData = {
  title: "Smit Parekh",
  subtitle: "Full Stack Developer & Marketing Manager",
  links: [
    { href: "/services", label: "Services" },
    { href: "/about", label: "About", icon: "uil-user" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/qualification", label: "Experience" },
    { href: "/contact", label: "Contact Me" },
    { href: "/background-remover", label: "Bg-Remover", icon: "uil-trash" },
    { href: "/viral-linkedin-post-generator", label: "Linkedln Post Generator ", icon: "uil-linkedin" },

  ],
  socialLinks: [
    {
      href: "https://www.instagram.com/smit_8_4/",
      iconClass: "uil uil-instagram",
    },
    { href: "mailto:smitparekh02@gmail.com", iconClass: "uil uil-envelope" },
    {
      href: "https://www.linkedin.com/in/smitparekh84/",
      iconClass: "uil uil-linkedin-alt",
    },
    {
      href: "https://github.com/SmitParekh84",
      iconClass: "uil uil-github-alt",
    },
  ],
  copyright: "&#169; Smit Parekh. All rights reserved.",
}
export const faqDataLinkedin = [
  {
    question: "What is the Viral LinkedIn Post Generator?",
    answer:
      "The Viral LinkedIn Post Generator is a powerful tool designed to help you create engaging LinkedIn posts quickly and easily. By selecting a viral hook, adding emojis, and customizing bullet points and character length, you can generate posts that grab attention and increase engagement. Whether you're sharing inspirational advice, project updates, or thought-provoking questions, this tool has got you covered!",
  },
  {
    question: "Is this tool free to use?",
    answer:
      "Yes, the Viral LinkedIn Post Generator is completely free to use. You can generate as many posts as you want without any cost. We believe in giving you the tools to create impactful content on LinkedIn without barriers.",
  },
  {
    question: "How do I use the tool?",
    answer:
      "Using the Viral LinkedIn Post Generator is simple. Start by selecting a viral hook such as 'What did you do today?' or 'Believe in yourself...'. Then, choose whether you want to include emojis or bullet points. You can also set a desired character length for your post (default is 500 characters). Once you're ready, click 'Generate Post' and watch the tool create a perfect post for you to share!",
  },
  {
    question: "What are viral hooks?",
    answer:
      "Viral hooks are popular opening lines that grab attention on LinkedIn. Examples include questions like 'What did you do today?' or motivational phrases like 'Believe in yourself...'. These hooks are designed to spark curiosity and encourage engagement with your post.",
  },
  {
    question: "Can I adjust the character length of my post?",
    answer:
      "Yes! You can easily set a desired character length for your post. The default character limit is 500, but you can customize it based on your preferences. This flexibility helps you tailor your posts for different LinkedIn audiences.",
  },
  {
    question: "What does the 'Show Advanced Options' feature do?",
    answer:
      "The 'Show Advanced Options' feature lets you fine-tune your post by adding extra customization options, such as choosing specific emojis or adjusting bullet points. This option helps you tailor your post for better engagement with your audience.",
  },
  {
    question: "How many posts can I generate?",
    answer:
      "You can generate as many posts as you want for free! There are no limits to how many viral posts you can create using this tool. Just keep creating and engaging with your LinkedIn audience!",
  },
  {
    question: "How do I ensure my post goes viral?",
    answer:
      "While there is no guaranteed formula for a post to go viral, using the right viral hook, keeping your post concise and engaging, and including relevant emojis or bullet points can help maximize engagement. This tool is designed to guide you in creating posts that have a higher chance of going viral by focusing on popular, attention-grabbing formats.",
  },
  {
    question: "What should I do if I don't like the generated post?",
    answer:
      "If you're not satisfied with the generated post, you can modify it by selecting a different hook, adjusting the options, or editing the post after it's been created. The tool gives you flexibility, so feel free to tweak it until you're happy with the result!",
  },
  {
    question: "Can I generate multiple posts at once?",
    answer:
      "Currently, you can only generate one post at a time. However, you can quickly refresh and generate another post by selecting a different hook or modifying the options.",
  },
];

export const faqDataBackgroundRemover = [
  {
    question: "What is the Free Background Remover?",
    answer:
      "The Free Background Remover is a simple yet powerful tool designed to help you remove backgrounds from images in just a few seconds. Whether you need a transparent background for your product photos, profile pictures, or graphic design projects, this tool makes it easy to achieve professional results without any technical skills.",
  },
  {
    question: "Is this tool free to use?",
    answer:
      "Yes, the Free Background Remover is completely free to use. You can remove the background from as many images as you like, without any cost or hidden fees. We believe in making it easy for anyone to create clean, professional-looking images.",
  },
  {
    question: "How do I use the tool?",
    answer:
      "Using the Free Background Remover is simple! Just upload your image, and the tool will automatically detect and remove the background. You can then download the image with a transparent background or save it in your desired format. It's quick and effortless!",
  },
  {
    question: "Can I use the tool for any type of image?",
    answer:
      "Yes! The Free Background Remover works with various types of images, including product photos, portraits, logos, and more. However, for best results, high-quality images with clear separation between the subject and background work best.",
  },
  {
    question: "What image formats are supported?",
    answer:
      "The Free Background Remover supports common image formats like JPEG, PNG, and GIF. Simply upload an image in one of these formats, and the tool will handle the rest.",
  },
  {
    question: "Can I download the edited image with a transparent background?",
    answer:
      "Yes! Once the background is removed, you can download the image with a transparent background in PNG format. This is ideal for use in graphic design, presentations, or on e-commerce platforms.",
  },
  {
    question: "How long does it take to remove the background?",
    answer:
      "The background removal process typically takes just a few seconds. The tool is designed for speed and accuracy, so you can get your images ready in no time!",
  },
  {
    question: "Can I edit the background after removal?",
    answer:
      "Currently, the tool removes the background automatically, but you can edit the image afterward using other image editing tools. If you need to add a new background, you can do so in any graphic design software.",
  },
  {
    question: "Are there any limits on how many images I can process?",
    answer:
      "No, there are no limits! You can use the Free Background Remover as many times as you need, whether you’re processing a few images or hundreds.",
  },
  {
    question: "What should I do if the tool doesn't remove the background properly?",
    answer:
      "If the background removal isn't perfect, you can try uploading a higher-quality image with clearer subject-background separation. You can also use the 'Edit' option to refine the edges or use other photo editing tools to perfect the result.",
  },
];
export const faqDataTools = [
  {
    question: "What are the Free Tools available?",
    answer:
      "Our Free Tools page includes various utilities to help enhance your productivity, such as the Free Background Remover and the Viral LinkedIn Post Generator. These tools are designed to simplify common tasks and improve the quality of your work without any cost.",
  },
  {
    question: "Are these tools free to use?",
    answer:
      "Yes, all the tools available on the Free Tools page are completely free to use. There are no hidden fees or subscriptions. You can use them as much as you need!",
  },
  {
    question: "How do I use these tools?",
    answer:
      "Each tool on the page has a simple interface. Just follow the on-screen instructions for uploading files or generating content. For example, for the Background Remover, you can upload an image, and the tool will automatically remove the background. For the Post Generator, simply select your parameters and generate the post.",
  },
  {
    question: "Can I use the tools for commercial purposes?",
    answer:
      "Yes! You are free to use the outputs from the tools for personal and commercial purposes. The images you edit with the Free Background Remover can be used for websites, e-commerce, and marketing, while posts generated from the Viral LinkedIn Post Generator can be used for your LinkedIn and other social media platforms.",
  },
  {
    question: "Are the tools easy to use?",
    answer:
      "Absolutely! We’ve designed these tools to be intuitive and user-friendly. Whether you're a beginner or a pro, you can start using them right away with minimal instructions. Our goal is to make these tools accessible to everyone, regardless of technical skills.",
  },
  {
    question: "What if the tool doesn’t work properly?",
    answer:
      "If you encounter any issues with the tools, try refreshing the page or clearing your cache. If the issue persists, you can contact our support team for assistance. We’re here to help ensure everything runs smoothly.",
  },
  {
    question: "What file types are supported for the tools?",
    answer:
      "For the Free Background Remover, we support popular image formats such as JPEG, PNG, and GIF. For the Viral LinkedIn Post Generator, the tool works with text input to create the post, so there are no specific file type requirements.",
  },
  {
    question: "Can I save the results from the tools?",
    answer:
      "Yes, after processing an image with the Free Background Remover, you can download the result in PNG format with a transparent background. For the Viral LinkedIn Post Generator, you can copy the generated post content and paste it into your LinkedIn or other social media platforms.",
  },
  {
    question: "How long does it take to process a tool request?",
    answer:
      "Processing time is typically very quick, taking only a few seconds for both tools. The Free Background Remover quickly removes backgrounds, and the Viral LinkedIn Post Generator instantly generates your post based on the settings you choose.",
  },
  {
    question: "Can I use these tools offline?",
    answer:
      "Currently, the tools require an internet connection to function. They rely on cloud-based technology for processing. However, you can save the outputs to your device and use them offline afterward.",
  },
];
