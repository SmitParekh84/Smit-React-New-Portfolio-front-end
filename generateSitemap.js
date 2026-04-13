// generateSitemap.js
import fs from "fs"
import { SitemapStream, streamToPromise } from "sitemap"

// Centralized URL definitions with comprehensive metadata
const urls = [
  {
    url: "/",
    changefreq: "weekly",
    priority: 1.0,
    lastmod: new Date().toISOString(),
    title: "Free Online Tools & Web Development Services | Smit Parekh",
  },
  {
    url: "/portfolio",
    changefreq: "monthly",
    priority: 0.95,
    lastmod: "2025-03-15",
    title: "Portfolio | Digital Software Developer & SEO Specialist | Smit Parekh",
  },
  {
    url: "/about",
    changefreq: "monthly",
    priority: 0.85,
    lastmod: "2025-03-15",
    title: "About Smit Parekh — Software Developer & SEO Specialist",
  },
  {
    url: "/skills",
    changefreq: "monthly",
    priority: 0.75,
    lastmod: "2025-02-10",
    title: "Professional Skills & Technical Expertise | Smit Parekh",
  },
  {
    url: "/services",
    changefreq: "monthly",
    priority: 0.85,
    lastmod: "2025-03-01",
    title: "Web Development & SEO Services | Smit Parekh",
  },
  {
    url: "/project",
    changefreq: "monthly",
    priority: 0.85,
    lastmod: "2025-04-01",
    title: "Projects Gallery | Smit Parekh",
  },
  {
    url: "/contact",
    changefreq: "yearly",
    priority: 0.75,
    lastmod: "2025-01-15",
    title: "Contact Smit Parekh — Hire a Developer & SEO Specialist",
  },
  {
    url: "/qualification",
    changefreq: "monthly",
    priority: 0.65,
    lastmod: "2025-02-01",
    title: "Qualifications & Education | Smit Parekh",
  },
  {
    url: "/testimonials",
    changefreq: "monthly",
    priority: 0.65,
    lastmod: "2025-03-20",
    title: "Client Testimonials & Reviews | Smit Parekh",
  },
  {
    url: "/cv-viewer",
    changefreq: "monthly",
    priority: 0.6,
    lastmod: "2025-02-01",
    title: "Smit Parekh — CV / Resume",
  },
  {
    url: "/privacy-policy",
    changefreq: "yearly",
    priority: 0.3,
    lastmod: "2025-01-01",
    title: "Privacy Policy | Smit Parekh",
  },
  {
    url: "/terms",
    changefreq: "yearly",
    priority: 0.3,
    lastmod: "2025-01-01",
    title: "Terms of Service | Smit Parekh",
  },

  // Tools hub
  {
    url: "/free-tools",
    changefreq: "weekly",
    priority: 0.95,
    lastmod: new Date().toISOString(),
    title: "Free Online Productivity Tools | Smit Parekh",
  },

  // Individual tool pages
  {
    url: "/free-tools/background-remover",
    changefreq: "monthly",
    priority: 0.85,
    lastmod: "2025-03-10",
    title: "Free Background Remover — Remove Image Background Online",
    img: [
      {
        url: "https://www.smitparekh.co.in/images/Background-Remover.png",
        caption: "Free Background Remover Tool by Smit Parekh",
      },
    ],
  },
  {
    url: "/free-tools/viral-linkedin-post-generator",
    changefreq: "monthly",
    priority: 0.85,
    lastmod: "2025-03-10",
    title: "Free AI LinkedIn Post Generator — Create Viral Posts",
    img: [
      {
        url: "https://www.smitparekh.co.in/images/viral-linkedin-post-generator.webp",
        caption: "AI LinkedIn Post Generator Tool",
      },
    ],
  },
  {
    url: "/free-tools/linkedin-media-downloader",
    changefreq: "monthly",
    priority: 0.8,
    lastmod: "2025-03-10",
    title: "Free LinkedIn Video & Image Downloader",
  },
  {
    url: "/free-tools/meta-tag-checker",
    changefreq: "monthly",
    priority: 0.85,
    lastmod: "2025-03-10",
    title: "Free Meta Tag Checker — Analyze Website SEO Tags Online",
    img: [
      {
        url: "https://www.smitparekh.co.in/images/Meta-Checker-Image.webp",
        caption: "Meta Tag Checker & SEO Analyzer Tool",
      },
    ],
  },
  {
    url: "/free-tools/seo-analyzer",
    changefreq: "monthly",
    priority: 0.85,
    lastmod: "2025-04-01",
    title: "Free SEO Analyzer — Website SEO Audit Tool Online",
    img: [
      {
        url: "https://www.smitparekh.co.in/images/SEO-Analyzer-Tool.webp",
        caption: "Free SEO Analyzer & Audit Tool",
      },
    ],
  },
  {
    url: "/free-tools/qr-code-generator",
    changefreq: "monthly",
    priority: 0.75,
    lastmod: "2025-02-15",
    title: "Free QR Code Generator — Create Custom QR Codes Online",
  },
  {
    url: "/free-tools/image-compressor",
    changefreq: "monthly",
    priority: 0.75,
    lastmod: "2025-02-15",
    title: "Free Image Compressor — Reduce Image Size Without Quality Loss",
  },
  {
    url: "/free-tools/image-converter",
    changefreq: "monthly",
    priority: 0.75,
    lastmod: "2025-02-15",
    title: "Free Image Converter — Convert PNG, JPEG, WebP Online",
  },
]

// Function to generate XML sitemap
const generateSitemapXML = async () => {
  try {
    const sitemapStream = new SitemapStream({
      hostname: "https://www.smitparekh.co.in",
      xmlns: {
        image: true,
        video: false,
        news: false,
        xhtml: true,
      },
    })

    // Add URLs to the sitemap
    urls.forEach((url) => sitemapStream.write(url))
    sitemapStream.end()

    // Write the XML to a file
    const sitemapXML = await streamToPromise(sitemapStream).then((data) =>
      data.toString()
    )

    // Ensure the public directory exists
    if (!fs.existsSync("./public")) {
      fs.mkdirSync("./public", { recursive: true })
    }

    fs.writeFileSync("./public/sitemap.xml", sitemapXML)
    console.log("✅ Sitemap XML generated successfully at ./public/sitemap.xml")
  } catch (error) {
    console.error("❌ Error generating sitemap XML:", error)
  }
}

// Function to generate HTML sitemap
const generateSitemapHTML = () => {
  try {
    const totalPages = urls.length
    const lastUpdated = new Date().toLocaleDateString()
    const baseUrl = "https://www.smitparekh.co.in"

    // Group URLs by their sections
    const groupedUrls = urls.reduce((acc, url) => {
      const path = url.url.split("/").filter(Boolean)
      const section = path.length > 0 ? path[0] : "home"

      if (!acc[section]) {
        acc[section] = []
      }

      acc[section].push(url)
      return acc
    }, {})

    let htmlContent = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Sitemap - Smit Parekh</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Sitemap for Smit Parekh website" />
    <style type="text/css">
      body {
        background-color: #fff;
        font-family: "Roboto", "Helvetica", "Arial", sans-serif;
        margin: 0;
        color: #333;
        line-height: 1.6;
      }
      #top {
        background-color: #6E57E0;
        color: white;
        padding: 20px 0 40px;
        text-align: center;
      }
      nav {
        font-size: 24px;
        margin: 0px 30px 0px;
        border-bottom-left-radius: 6px;
        border-bottom-right-radius: 6px;
        background-color: white;
        color: #333;
        box-shadow: 0 10px 20px -12px rgba(0, 0, 0, 0.42);
        padding: 10px 0;
        text-align: center;
      }
      h3 {
        margin: auto;
        padding: 10px;
        max-width: 600px;
        color: #333;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      h3 span {
        font-size: 14px;
        text-align: right;
      }
      h3 a {
        font-weight: normal;
        display: block;
        color: #6E57E0;
        text-decoration: none;
      }
      #cont {
        position: relative;
        border-radius: 6px;
        box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14);
        background: white;
        margin: -20px 30px 30px;
        padding: 20px;
      }
      a:link, a:visited {
        color: #6E57E0;
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
      }
      #footer {
        padding: 20px;
        text-align: center;
        font-size: 14px;
        color: #666;
      }
      ul {
        margin: 0;
        padding: 0;
        list-style: none;
      }
      li {
        margin: 0;
      }
      .section-header {
        background: #f5f5f5;
        padding: 10px 15px;
        margin: 20px 0 10px;
        border-radius: 4px;
        font-weight: bold;
        text-transform: capitalize;
        color: #333;
      }
      .lpage {
        border-bottom: 1px solid #eee;
        padding: 10px 5px;
        display: flex;
        justify-content: space-between;
      }
      .last-page {
        border: none;
      }
      .priority {
        font-size: 12px;
        color: #666;
        background: #f9f9f9;
        padding: 2px 6px;
        border-radius: 3px;
      }
      .last-updated {
        font-size: 12px;
        color: #666;
      }
      @media (max-width: 600px) {
        .lpage {
          flex-direction: column;
        }
        .priority, .last-updated {
          margin-top: 5px;
        }
      }
    </style>
  </head>
  <body>
    <div id="top">
      <nav>Sitemap - Smit Parekh</nav>
      <h3>
        <a href="${baseUrl}">Back to Homepage</a>
        <span>Last updated: ${lastUpdated}<br />Total pages: ${totalPages}</span>
      </h3>
    </div>
    <div id="cont">`

    // Generate HTML for each section
    Object.keys(groupedUrls).forEach((section) => {
      const sectionUrls = groupedUrls[section]
      const sectionName =
        section === "home"
          ? "Main Pages"
          : section.charAt(0).toUpperCase() + section.slice(1)

      htmlContent += `
      <div class="section-header">${sectionName} <span class="lcount">(${sectionUrls.length} pages)</span></div>
      <ul>`

      sectionUrls.forEach((url, index) => {
        const isLast = index === sectionUrls.length - 1
        const pageUrl = baseUrl + url.url
        const pageName =
          url.url === "/"
            ? "Homepage"
            : url.url.split("/").filter(Boolean).pop() || url.url
        const displayName = pageName
          .replace(/-/g, " ")
          .replace(/\b\w/g, (l) => l.toUpperCase())

        htmlContent += `
        <li class="lpage ${isLast ? "last-page" : ""}">
          <a href="${pageUrl}" title="${displayName}">${displayName}</a>
          <span>
            <span class="priority">Priority: ${url.priority}</span>
            <span class="last-updated">Updated: ${
              url.lastmod.split("T")[0]
            }</span>
          </span>
        </li>`
      })

      htmlContent += `
      </ul>`
    })

    htmlContent += `
    </div>
    <div id="footer">
      <p>© ${new Date().getFullYear()} Smit Parekh Studio. All rights reserved.</p>
    </div>
  </body>
</html>`

    // Ensure the public directory exists
    if (!fs.existsSync("./public")) {
      fs.mkdirSync("./public", { recursive: true })
    }

    fs.writeFileSync("./public/sitemap.html", htmlContent)
    console.log(
      "✅ HTML sitemap generated successfully at ./public/sitemap.html"
    )
  } catch (error) {
    console.error("❌ Error generating HTML sitemap:", error)
  }
}

// Function to generate robots.txt file
const generateRobotsTxt = () => {
  try {
    const robotsTxt = `# Smit Parekh — robots.txt v2.0
# https://www.smitparekh.co.in

# ─── Default: allow all crawlers ───────────────────────────────────────────
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/
Disallow: /dashboard/
Disallow: /private/
Disallow: /*?source=*
Disallow: /*?ref=*
Crawl-delay: 1

# ─── Googlebot: explicit permissions ───────────────────────────────────────
User-agent: Googlebot
Allow: /
Disallow: /admin/
Disallow: /api/

# ─── AI training crawlers: allowed (enables AI citations & brand visibility) ──
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

# Block ByteDance AI training crawler
User-agent: Bytespider
Disallow: /

# Allow Google Gemini training (AI Overviews benefit)
User-agent: Google-Extended
Allow: /

# ─── Sitemaps ───────────────────────────────────────────────────────────────
Sitemap: https://www.smitparekh.co.in/sitemap.xml
`

    // Ensure the public directory exists
    if (!fs.existsSync("./public")) {
      fs.mkdirSync("./public", { recursive: true })
    }

    fs.writeFileSync("./public/robots.txt", robotsTxt)
    console.log("✅ robots.txt generated successfully at ./public/robots.txt")
  } catch (error) {
    console.error("❌ Error generating robots.txt:", error)
  }
}

// Function to generate URL list for crawlers
const generateUrlList = () => {
  try {
    const baseUrl = "https://www.smitparekh.co.in"
    let urlListContent = ""

    // Add each URL to the list
    urls.forEach((url) => {
      urlListContent += `${baseUrl}${url.url}\n`
    })

    // Ensure the public directory exists
    if (!fs.existsSync("./public")) {
      fs.mkdirSync("./public", { recursive: true })
    }

    fs.writeFileSync("./public/urllist.txt", urlListContent)
    console.log("✅ URL list generated successfully at ./public/urllist.txt")
  } catch (error) {
    console.error("❌ Error generating URL list:", error)
  }
}

// Function to update ROR XML with proper data
const updateRorXml = () => {
  try {
    const baseUrl = "https://www.smitparekh.co.in"
    const now = new Date().toUTCString()

    let rorXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Smit Parekh - Digital Marketing & Full-stack Developer</title>
    <link>${baseUrl}</link>
    <description>Professional portfolio of Smit Parekh featuring web development, digital marketing expertise, SEO services, and free online tools.</description>\n`

    // Add each URL as an item
    urls.forEach((url) => {
      const title =
        url.title || `Smit Parekh - ${url.url.replace(/[/-]/g, " ").trim()}`
      const description =
        url.description ||
        `${title} - Visit this page on Smit Parekh's website.`

      rorXml += `
    <item>
      <title>${title}</title>
      <link>${baseUrl}${url.url}</link>
      <description>${description}</description>
      <pubDate>${url.pubDate || now}</pubDate>
    </item>\n`
    })

    rorXml += `  </channel>
</rss>`

    // Ensure the public directory exists
    if (!fs.existsSync("./public")) {
      fs.mkdirSync("./public", { recursive: true })
    }

    fs.writeFileSync("./public/ror.xml", rorXml)
    console.log("✅ ROR XML updated successfully at ./public/ror.xml")
  } catch (error) {
    console.error("❌ Error updating ROR XML:", error)
  }
}

// Export URLs for use in other files
export const sitemapUrls = urls

// Run all generation functions
const generateAllSitemaps = async () => {
  console.log("🔄 Starting sitemap generation process...")

  try {
    await generateSitemapXML()
    generateSitemapHTML()
    generateRobotsTxt()
    generateUrlList()
    updateRorXml()

    // Create a JSON file with all URL data for use in React components
    fs.writeFileSync("./public/sitemapUrls.json", JSON.stringify(urls, null, 2))
    console.log("✅ URL data JSON created at ./public/sitemapUrls.json")

    console.log("✨ All sitemaps and related files generated successfully!")
  } catch (error) {
    console.error("❌ Error in sitemap generation process:", error)
    process.exit(1)
  }
}

// Execute the generator
generateAllSitemaps()
