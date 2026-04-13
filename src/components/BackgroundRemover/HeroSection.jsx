import ToolPageHero from '../ToolPageHero/ToolPageHero';

const HeroSection = () => (
  <ToolPageHero
    icon="uil-image-slash"
    title="Free Background Remover Tool"
    description="AI-powered background removal in seconds. Get transparent PNG images with perfect edge detection — ideal for product photos, portraits, and graphics. 100% free, no sign-up required."
    badges={['100% Free', 'No Registration', 'AI-Powered', 'Download as PNG']}
    primaryCta={{ text: 'Remove Background Now', href: '#bg-remover-tool' }}
    secondaryCta={{ text: 'How It Works', href: '#how-it-works' }}
    breadcrumbs={[
      { name: 'Home', path: '/' },
      { name: 'Free Tools', path: '/free-tools' },
      { name: 'Background Remover', path: '/free-tools/background-remover' },
    ]}
  />
);

export default HeroSection;
