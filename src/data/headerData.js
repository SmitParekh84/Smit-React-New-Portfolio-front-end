// Header data

import LogoIcon from "/Smit-Logo.svg"

export const headerData = {
  logo: LogoIcon,
  name: "Smit Parekh",
  desktopNavLinks: [
    { id: "/", label: "Home", icon: "uil-estate" },
    { id: "/portfolio", label: "Portfolio", icon: "uil-scenery" },
    { id: "/project", label: "Projects", icon: "uil-image" },
    {
      id: "/free-tools",
      label: "Free Tools",
      icon: "uil-tools",
      isMegaMenu: true,
      megaMenuColumns: [
        {
          title: "Image Tools",
          links: [
            { id: "/free-tools/background-remover", label: "Bg Remover", icon: "uil-trash", description: "Remove background from images instantly" },
            { id: "/free-tools/image-compressor", label: "Image Compressor", icon: "uil-compress", description: "Reduce image file size without losing quality" },
            { id: "/free-tools/image-converter", label: "Image Converter", icon: "uil-sync", description: "Convert between image formats easily" },
          ]
        },
        {
          title: "Content Tools",
          links: [
            { id: "/free-tools/viral-linkedin-post-generator", label: "LinkedIn Post Generator", icon: "uil-linkedin", description: "Create engaging LinkedIn posts" },
            { id: "/free-tools/linkedin-media-downloader", label: "LinkedIn Media Downloader", icon: "uil-download-alt", description: "Download videos and images from LinkedIn" },
            { id: "/free-tools/meta-tag-checker", label: "Meta Tag Checker", icon: "uil-search", description: "Analyze and optimize your website's meta tags" },
            { id: "/free-tools/seo-analyzer", label: "SEO Analyzer", icon: "uil-analytics", description: "Check and improve your website's SEO" },
            { id: "/free-tools/word-counter", label: "Word Counter", icon: "uil-file-alt", description: "Count words, characters, reading time & keyword density" },
          ]
        },
        {
          title: "Career & Developer Tools",
          links: [
            { id: "/free-tools/qr-code-generator", label: "QR Code Generator", icon: "uil-qrcode-scan", description: "Generate custom QR codes for any link" },
            { id: "/free-tools/ats-resume-checker", label: "ATS Resume Checker", icon: "uil-file-check-alt", description: "Check your ATS score and get AI-powered resume tips" },
            { id: "/free-tools/password-generator", label: "Password Generator", icon: "uil-lock-alt", description: "Generate strong, secure, random passwords instantly" },
          ]
        },
      ],
      featured: {
        title: "Try Our Most Popular Tool",
        description: "Remove image backgrounds in seconds with our AI-powered tool",
        link: "/free-tools/background-remover",
        linkText: "Try Background Remover",
        icon: "uil-bolt"
      },
      subLinks: [
        { id: "/free-tools/background-remover", label: "Bg Remover", icon: "uil-trash" },
        { id: "/free-tools/image-compressor", label: "Image Compressor", icon: "uil-compress" },
        { id: "/free-tools/image-converter", label: "Image Converter", icon: "uil-sync" },
        { id: "/free-tools/viral-linkedin-post-generator", label: "LinkedIn Post Generator", icon: "uil-linkedin" },
        { id: "/free-tools/linkedin-media-downloader", label: "LinkedIn Media Downloader", icon: "uil-download-alt" },
        { id: "/free-tools/meta-tag-checker", label: "Meta Tag Checker", icon: "uil-search" },
        { id: "/free-tools/seo-analyzer", label: "SEO Analyzer", icon: "uil-analytics" },
        { id: "/free-tools/word-counter", label: "Word Counter", icon: "uil-file-alt" },
        { id: "/free-tools/qr-code-generator", label: "QR Code Generator", icon: "uil-qrcode-scan" },
        { id: "/free-tools/ats-resume-checker", label: "ATS Resume Checker", icon: "uil-file-check-alt" },
        { id: "/free-tools/password-generator", label: "Password Generator", icon: "uil-lock-alt" },
      ],
    },
    { id: "/services", label: "Services", icon: "uil-briefcase-alt" },
    { id: "/about", label: "About", icon: "uil-user" },
    { id: "/contact", label: "Contact Us", icon: "uil-message" },
  ],
  mobileNavLinks: [
    { id: "/", label: "Home", icon: "uil-estate" },
    { id: "/about", label: "About", icon: "uil-user" },
    { id: "/services", label: "Services", icon: "uil-briefcase-alt" },
    { id: "/project", label: "Projects", icon: "uil-image" },
    { id: "/portfolio", label: "Portfolio", icon: "uil-presentation-play" },
    { id: "/free-tools", label: "Free Tools", icon: "uil-wrench" },
    { id: "/contact", label: "Contact US", icon: "uil-message" },
  ],
};
