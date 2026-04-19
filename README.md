# Smit Parekh — React Portfolio

A personal portfolio website built with React + Vite, featuring a project showcase, a suite of web tools, and an admin panel for managing content.

**Live:** [smitparekh.co.in](https://smitparekh.co.in)

---

## Features

**Portfolio**
- Home / Hero section with CTA
- About, Skills, Services, Qualification sections
- Project showcase with detailed project pages
- Contact form
- CV / Resume viewer
- Testimonials

**Web Tools** (`/tools`)
- Background Remover
- Image Compressor
- Image Converter
- QR Code Generator
- LinkedIn Media Downloader
- LinkedIn Post Generator
- Meta Tag Checker
- SEO Analyzer
- Resume Analyzer

**Admin Panel** (protected)
- Login / authentication
- Add, edit, delete projects

**Technical**
- SEO-ready: `react-helmet-async`, auto-generated XML sitemap
- Code-split Vite build with manual chunks for optimal caching
- Deployed on Vercel + Netlify

---

## Tech Stack

| Area | Libraries |
|------|-----------|
| Framework | React 18, React Router v7 |
| Build tool | Vite 5 |
| Styling | CSS Modules |
| Icons | React Icons, FontAwesome |
| HTTP | Axios, React Query |
| Markdown | react-markdown, @uiw/react-md-editor, marked |
| UI | react-toastify, react-tooltip, Swiper |
| Images | react-lazy-load-image-component, react-dropzone |
| SEO | react-helmet-async, sitemap |

---

## Project Structure

```
front-end/
├── public/             # Static assets
├── src/
│   ├── assets/         # Images, fonts
│   ├── components/     # Reusable UI components
│   ├── data/           # Static data / content
│   ├── hooks/          # Custom React hooks
│   ├── layouts/        # Page layout wrappers
│   ├── pages/          # Route-level page components
│   ├── routes/         # React Router config
│   ├── styles/         # Global CSS
│   └── utils/          # Helper functions
├── .env.example        # Environment variable template
├── generateSitemap.js  # Sitemap generation script
├── vite.config.js
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js `>= 18`
- npm or yarn

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/smitparekh/Smit-React-New-Portfolio.git
cd Smit-React-New-Portfolio/front-end

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Edit .env and fill in your values (see below)

# 4. Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Environment Variables

Copy `.env.example` to `.env` and set the values:

| Variable | Description |
|----------|-------------|
| `VITE_API_URL` | Base URL for the backend API (e.g. `http://localhost:5000/api`) |

All client-side env vars must be prefixed with `VITE_` to be exposed by Vite.

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build + generate sitemap |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm run sitemap` | Generate `sitemap.xml` only |

---

## Deployment

The project ships with config for both Vercel and Netlify. Any SPA host works — just serve `dist/` and redirect all routes to `index.html`.

**Vercel** — `vercel.json` is already configured.  
**Netlify** — `netlify.toml` is already configured.

---

## Contributing

Contributions, issues, and feature requests are welcome.

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Commit your changes: `git commit -m "feat: add your feature"`
4. Push to your branch: `git push origin feat/your-feature`
5. Open a Pull Request

Please keep PRs focused — one feature or fix per PR.

---

## License

This project is licensed under the [MIT License](LICENSE).
