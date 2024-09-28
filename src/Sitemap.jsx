// src/Sitemap.jsx

import { SitemapGenerator  } from 'react-sitemap-generator';


const Sitemap = () => {
    return (
        <SitemapGenerator
            urls={[
                'https://smitparekh.studio/',
                'https://smitparekh.studio/about',
                'https://smitparekh.studio/skills',
                'https://smitparekh.studio/portfolio',
                'https://smitparekh.studio/contact',
                'https://smitparekh.studio/services',
                // Add other routes here
            ]}
        />
    );
};
export default Sitemap;

