import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.jsx';
import './assets/css/styles.css';
import './assets/css/swiper-bundle.min.css';
import './styles/markdown.css';

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
