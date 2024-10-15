// src/Sitemap.jsx

import { SitemapGenerator } from 'react-sitemap-generator';


const Sitemap = () => {
    return (
        <SitemapGenerator
            urls={[
                'https://www.smitparekh.studio/',
                'https://www.smitparekh.studio/about',
                'https://www.smitparekh.studio/skills',
                'https://www.smitparekh.studio/portfolio',
                'https://www.smitparekh.studio/contact',
                'https://www.smitparekh.studio/services',
                // Add other routes here
            ]}
        />
    );
};
export default Sitemap;

