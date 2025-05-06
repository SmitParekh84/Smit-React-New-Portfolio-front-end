# AdSense Implementation for React Portfolio

This folder contains components and utilities for integrating Google AdSense into your React portfolio application.

## Components Overview

- **AdSenseComponent**: Core component to display AdSense ads
- **AdFormats**: Pre-configured ad formats (InArticleAd, HorizontalBannerAd, SidebarAd)
- **SidebarAdLayout**: Component for displaying content with a sidebar ad
- **AdSenseProvider**: Provider component to initialize AdSense and handle SPA refreshing

## Ad Slots

To use these components, you'll need to replace the placeholder ad slots with your actual AdSense ad slots. Current implementation uses placeholder values:

```javascript
// Example of placeholder slots used in the implementation
"1234567890" // ToolsShowcasePage - top banner
"2345678901" // ToolsShowcasePage - middle in-article 
"3456789012" // ToolsShowcasePage - bottom banner
"4567890123" // ToolsShowcasePage - before FAQ section
"5678901234" // ProjectDetailPage - top banner
"6789012345" // ProjectDetailPage - sidebar
"7890123456" // ProjectDetailPage - bottom banner
"8901234567" // LinkedInPostGeneratorPage - top banner
"9012345678" // LinkedInPostGeneratorPage - sidebar
"0123456789" // LinkedInPostGeneratorPage - middle in-article
```

## Basic Usage

### 1. Horizontal Banner Ad
```jsx
import { HorizontalBannerAd } from '../components/AdSense';

<div className="ad-container">
  <HorizontalBannerAd adSlot="your-ad-slot" />
</div>
```

### 2. In-Article Ad
```jsx
import { InArticleAd } from '../components/AdSense';

<div className="ad-container content-ad">
  <InArticleAd adSlot="your-ad-slot" />
</div>
```

### 3. Sidebar Layout with Ad
```jsx
import { SidebarAdLayout } from '../components/AdSense';

<SidebarAdLayout 
  adSlot="your-ad-slot"
  adPosition="right" // or "left"
  className="custom-layout-class"
  contentClassName="custom-content-class"
>
  <YourContent />
</SidebarAdLayout>
```

## Best Practices

1. **Ad Placement**:
   - Place ads where they're visible but don't disrupt user experience
   - Use appropriate spacing between ads (at least 1-2 content sections)
   - Keep above-the-fold ads minimal

2. **Ad Loading**:
   - AdSense loads properly in SPA thanks to the AdSenseProvider
   - Ads refresh automatically on route changes

3. **Responsive Design**:
   - All ad components are designed to be responsive
   - Mobile-specific styling is included in AdSense.css

4. **Ad Content Policy**:
   - Ensure pages with ads have significant original content
   - Don't place ads on pages with minimal content

5. **Performance**:
   - Ads are loaded asynchronously to prevent blocking page rendering
   - Minimize the total number of ads per page (3-4 maximum recommended)

## Troubleshooting

If ads aren't displaying correctly:

1. Check browser console for errors
2. Verify that ad slots are correctly configured
3. Ensure AdSenseProvider is properly wrapped around your application
4. Allow time for AdSense to approve new ad placements

## Ad Loading in SPA

The AdSense integration handles Single Page Application (SPA) specific requirements:

- Initialization of AdSense when the app loads
- Proper cleanup and refreshing of ads on route changes
- Handling of ads in dynamically loaded content

## CSS Customization

You can modify the appearance of ads by editing the `AdSense.css` file. The implementation includes:

- Responsive breakpoints for different screen sizes
- Consistent margins and padding
- Clear "Advertisement" labels for compliance
- Sticky sidebar ads where appropriate

## Updating Ad Slots

When you receive your actual ad slots from AdSense, replace the placeholder values in each component instance throughout your application.