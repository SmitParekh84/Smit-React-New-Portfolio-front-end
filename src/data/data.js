// data.js

import LogoIcon from "/logo.png"
export const headerData = {
  logo: LogoIcon,
  name: "Smit Parekh",
  navLinks: [
    { id: "#home", label: "Home", icon: "uil-estate" },
    { id: "#about", label: "About", icon: "uil-user" },
    { id: "#skills", label: "Skills", icon: "uil-file-alt" },
    {
      id: "#qualification",
      label: "Qualification",
      icon: "uil-graduation-cap",
    },
    { id: "#services", label: "Services", icon: "uil-briefcase-alt" },
    { id: "#portfolio", label: "Portfolio", icon: "uil-scenery" },
    { id: "#contact", label: "Contact", icon: "uil-message" },
  ],
}

import HomeImage from "/images/Smit-Parekh-Home.webp"
export const homeData = {
  title: "Hi, I'm Smit Parekh",
  subtitle: "Marketing Manager/Node.js Developer",
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
  title: "About Me",
  subtitle: "Meet Smit Parekh",
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
      title: "Marketing Manager and Node.js Developer",
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
      "Utilize engaging motion graphics and animations to capture viewer attention.",
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

import keeper from "/images/Keeper-Note-taking-App.png"
import FourGame from "/images/Connect-Four-Game.png"
import toDo from "/images/todo-buddy.png"
import uniCart from "/images/UniCart.png"
import cardPortfolio from "/images/Card-Portfolio.png"
import coffeShop from "/images/coffe-shop-php.png"
import directorPortfolioImage from "/images/project-1.webp"
import tinDogImage from "/images/project-2.webp"
import ytYoutubeImage from "/images/yt-youtube.webp"
import ytShortsImage from "/images/yt-shorts.webp"
import demoVideoImage from "/images/yt3.webp"

export const portfolioData = [
  {
    id: 1,
    title: "UniCart - E-commerce Web Application",
    description:
      "Developed an e-commerce application with dynamic product rendering and multi-language support.",
    image: uniCart,
    demoLink: "https://unicart-05bt.onrender.com/",

  },
  {
    id: 2,
    title: "Smit Card Portfolio",
    description:
      "A personal portfolio website showcasing my projects, skills, and experiences in web development.",
    image: cardPortfolio,
    demoLink: "https://smit-card-portfolio.onrender.com/",

  },
  {
    id: 3,
    title: "Demo Video",
    description:
      "A showcase demo video highlighting my skills and previous works in a concise format.",
    image: demoVideoImage,
    demoLink:
      "https://player.vimeo.com/video/950508563?badge=0&autopause=0&player_id=0&app_id=58479",

  },
  {
    id: 4,
    title: "Keeper - Note-taking App",
    description:
      "A web-based application for managing notes, featuring a user-friendly interface and responsive design.",
    image: keeper,
    demoLink: "https://github.com/SmitParekh84/Keeper/",
  },
  {
    id: 5,
    title: "Connect Four Game",
    description:
      "An interactive web game of Connect Four, allowing users to challenge each other in a fun way.",
    image: FourGame,
    demoLink: "https://smitparekh84.github.io/Connect-Four-Game/",
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
    title: "Blog WebApp",
    description:
      "A blog application built with Node.js and Express, allowing users to create, edit, and manage blog posts.",
    image:
      "https://github.com/SmitParekh84/Images/blob/main/blog%20app/showcase.png?raw=true",
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
    id: 9,
    title: "TinDog - Bootstrap Webpage",
    description:
      "A mini Bootstrap-based webpage for a fictional dog adoption service, showcasing responsive design.",
    image: tinDogImage,
    demoLink: "https://smitparekh84.github.io/Mini-BootStrap-WebPage/",
  },
  {
    id: 10,
    title: "Motion Graphics / YouTube Videos / Branding",
    description:
      "A collection of motion graphics and branding videos created for various projects, enhancing visual storytelling.",
    image: ytYoutubeImage,
    demoLink:
      "https://www.youtube.com/playlist?list=PLLlMxB89AwL449pZeTMNQFe_h7Hn43HcL",
  },
  {
    id: 11,
    title: "YT Shorts / Reels / TikTok Videos",
    description:
      "Engaging short video content designed for social media platforms, maximizing viewer engagement.",
    image: ytShortsImage,
    demoLink:
      "https://www.youtube.com/playlist?list=PLJB1nJ8VTILlq2aZnHUYyVLJ-QnpOKb8f",
  },
  {
    id: 12,
    title: "To-Do Buddy",
    description:
      "A task management app to help users organize their to-do lists efficiently and effectively.",
    image: toDo,
    demoLink: "https://smitparekh84.github.io/To-Do-Buddy/",
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
  phone: "(+91) 99042-53143",
  email: "smitparekh02@gmail.com",
  location: "Anand, Gujarat, 388001",
  successMessage: "Your message has been sent successfully!",
  errorMessage: "There was an error sending your message. Please try again.",
}

export const footerData = {
  title: "Smit Parekh",
  subtitle: "Full Stack Developer & Marketing Manager",
  links: [
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#contact", label: "Contact" },
  ],
  socialLinks: [
    {
      href: "https://www.instagram.com/smit_8_4/",
      iconClass: "uil uil-instagram",
    },
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
  copyright: "&#169; Smit Parekh. All rights reserved.",
}
