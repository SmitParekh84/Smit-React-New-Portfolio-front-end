import { StrictMode } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.jsx';
import './assets/css/styles.css';
import './assets/css/swiper-bundle.min.css';
import './styles/markdown.css';
import './assets/css/seo-analyzer.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Create a dedicated context for helmet with SSR enabled
const helmetContext = {
  helmet: {} // This will hold helmet data for server-side rendering when needed
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider context={helmetContext}>
      <App />
    </HelmetProvider>
  </StrictMode>
);
