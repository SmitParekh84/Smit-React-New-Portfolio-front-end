import { Routes, Route, Navigate } from 'react-router-dom'

import { PortfolioPage } from '../pages/PortfolioPage'
import Landing from '../Landing'
import BackgroundRemoverPage from '../pages/BackgroundRemoverPage'
import LinkedInPostGeneratorPage from '../pages/LinkedInPostGeneratorPage'
import ContactPage from '../pages/ContactPage'
import ToolsPage from '../pages/ToolsPage'
import MetaCheckerPage from '../pages/MetaCheckerPage'
import ToolsShowcasePage from '../pages/ToolsShowcasePage'
import ToolsAboutPage from '../pages/ToolsAboutPage'
import ServicesPage from '../pages/ServicesPage'
import CVViewer from '../pages/CVViewer'
import QRCodeGeneratorPage from '../pages/QRCodeGeneratorPage'
import ImageCompressorPage from '../pages/ImageCompressorPage'
import ImageConverterPage from '../pages/ImageConverterPage'
import SEOAnalyzerPage from '../pages/SEOAnalyzerPage'
import NotFoundPage from '../pages/NotFoundPage'
import ServerErrorPage from '../pages/ServerErrorPage'
import LinkedInMediaDownloaderPage from '../pages/LinkedInMediaDownloaderPage'
import ProjectDetailPage from '../pages/ProjectDetailPage'
import AddProjectPage from '../pages/AddProjectPage'
import EditProjectPage from '../pages/EditProjectPage'
import AdminLoginPage from '../pages/AdminLoginPage'
import SkillsPage from '../pages/SkillsPage'
import Qualification from '../components/Qualification'
import Testimonials from '../components/Testimonials'
import PrivacyPolicyPage from '../pages/PrivacyPolicyPage'
import TermsPage from '../pages/TermsPage'
import ResumeAnalyzerPage from '../pages/ResumeAnalyzerPage'
import WordCounterPage from '../pages/WordCounterPage'

const AppRoutes = () => (
  <Routes>
    {/* Main Routes */}
    <Route path="/" element={<ToolsShowcasePage />} />
    <Route path="/portfolio" element={<Landing />} />
    <Route path="/about" element={<ToolsAboutPage />} />
    <Route path="/skills" element={<SkillsPage />} />
    <Route path="/qualification" element={<Qualification />} />
    <Route path="/services" element={<ServicesPage />} />
    <Route path="/project" element={<PortfolioPage />} />
    <Route path="/project/:id" element={<ProjectDetailPage />} />
    <Route path="/testimonials" element={<Testimonials />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/cv-viewer" element={<CVViewer />} />
    <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
    <Route path="/terms" element={<TermsPage />} />

    {/* Tools Routes */}
    <Route path="/free-tools" element={<ToolsPage />} />
    <Route path="/tools" element={<Navigate to="/free-tools" replace />} />
    <Route path="/free-tools/background-remover" element={<BackgroundRemoverPage />} />
    <Route path="/background-remover" element={<Navigate to="/free-tools/background-remover" replace />} />
    <Route path="/free-tools/viral-linkedin-post-generator" element={<LinkedInPostGeneratorPage />} />
    <Route path="/viral-linkedin-post-generator" element={<Navigate to="/free-tools/viral-linkedin-post-generator" replace />} />
    <Route path="/free-tools/meta-tag-checker" element={<MetaCheckerPage />} />
    <Route path="/meta-checker" element={<Navigate to="/free-tools/meta-tag-checker" replace />} />
    <Route path="/free-tools/qr-code-generator" element={<QRCodeGeneratorPage />} />
    <Route path="/free-tools/image-compressor" element={<ImageCompressorPage />} />
    <Route path="/free-tools/image-converter" element={<ImageConverterPage />} />
    <Route path="/free-tools/seo-analyzer" element={<SEOAnalyzerPage />} />
    <Route path="/free-tools/linkedin-media-downloader" element={<LinkedInMediaDownloaderPage />} />
    <Route path="/free-tools/ats-resume-checker" element={<ResumeAnalyzerPage />} />
    <Route path="/free-tools/word-counter" element={<WordCounterPage />} />
    <Route path="/free-tools/html-minifier" element={<Navigate to="/free-tools" replace />} />

    {/* Admin Routes */}
    <Route path="/admin" element={<AdminLoginPage />} />
    <Route path="/admin/add-project" element={<AddProjectPage />} />
    <Route path="/admin/edit-project/:id" element={<EditProjectPage />} />

    {/* Error Routes */}
    <Route path="/404" element={<NotFoundPage />} />
    <Route path="/500" element={<ServerErrorPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
)

export default AppRoutes
