# Open Graph (OG) Tags Documentation - SiteGet Website

## Overview
This document provides comprehensive information about all SEO metadata and Open Graph tags implemented for proper link previews across social media platforms and search engines.

## What Are OG Tags?
Open Graph (OG) tags are meta tags that control how URLs are displayed when shared on social media platforms like Facebook, LinkedIn, WhatsApp, Twitter, and others.

## Implemented OG Tags

### 1. **Core Meta Tags**
Located in: `/app/frontend/public/index.html`

```html
<!-- Primary Meta Tags -->
<title>SiteGet - Empowering Rural Businesses to Go Digital | Affordable Web Development</title>
<meta name="title" content="SiteGet - Empowering Rural Businesses to Go Digital | Affordable Web Development" />
<meta name="description" content="Professional, affordable websites and e-commerce solutions for rural businesses. Complete setup including hosting, SSL, SEO, and deployment. Helping farming groups and local businesses thrive online." />
<meta name="keywords" content="rural business websites, affordable web development, e-commerce for farmers, local business online, website hosting, SSL security, SEO optimization, farming business digital solutions" />
<meta name="author" content="SiteGet" />
<meta name="robots" content="index, follow" />
```

### 2. **Open Graph Tags (Facebook, LinkedIn, WhatsApp)**

```html
<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://siteget.com/" />
<meta property="og:title" content="SiteGet - Empowering Rural Businesses to Go Digital" />
<meta property="og:description" content="Professional, affordable websites and e-commerce solutions for rural businesses. Complete setup with hosting, SSL, SEO, and deployment." />
<meta property="og:image" content="https://siteget.com/og-image.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="SiteGet - Empowering Rural Businesses Digitally" />
<meta property="og:site_name" content="SiteGet" />
<meta property="og:locale" content="en_US" />
```

### 3. **Twitter Card Tags**

```html
<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:url" content="https://siteget.com/" />
<meta name="twitter:title" content="SiteGet - Empowering Rural Businesses to Go Digital" />
<meta name="twitter:description" content="Professional, affordable websites and e-commerce solutions for rural businesses. Complete setup with hosting, SSL, SEO, and deployment." />
<meta name="twitter:image" content="https://siteget.com/og-image.jpg" />
<meta name="twitter:image:alt" content="SiteGet - Empowering Rural Businesses Digitally" />
```

### 4. **Structured Data (JSON-LD)**

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "SiteGet",
  "description": "Professional web development and e-commerce solutions for rural and local businesses",
  "url": "https://siteget.com",
  "telephone": ["+917385311748", "+919067551748"],
  "priceRange": "$$",
  "serviceArea": {
    "@type": "Country",
    "name": "India"
  },
  "areaServed": "India",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Web Development Services",
    "itemListElement": [...]
  }
}
```

## Dynamic OG Tags Implementation

### SEO Component
Located in: `/app/frontend/src/components/SEO.jsx`

This component dynamically updates OG tags for each page:

**Features:**
- Updates page title
- Updates meta description
- Updates OG tags (title, description, URL, image)
- Updates Twitter card tags
- Automatically adjusts based on current page URL

**Usage in App.js:**
```jsx
<SEO 
  title="Page Title" 
  description="Page Description"
  image="/og-image.jpg"
  type="website"
/>
```

## Page-Specific SEO Configuration

### Home Page (`/`)
```
Title: "SiteGet - Empowering Rural Businesses to Go Digital | Affordable Web Development"
Description: "Professional, affordable websites and e-commerce solutions for rural businesses. Complete setup including hosting, SSL, SEO, and deployment. Helping farming groups thrive online."
Image: /og-image.jpg
```

### About Page (`/about`)
```
Title: "About SiteGet - Our Mission to Empower Rural Businesses | SiteGet"
Description: "Learn about SiteGet's mission to help rural and farming businesses succeed online with affordable, professional web development and e-commerce solutions."
Image: /og-image.jpg
```

### Services Page (`/services`)
```
Title: "Our Services - Web Development, E-Commerce & SEO | SiteGet"
Description: "Comprehensive web development services including custom websites, e-commerce solutions, hosting, SSL security, SEO optimization, and ongoing support for rural businesses."
Image: /og-image.jpg
```

### Contact Page (`/contact`)
```
Title: "Contact SiteGet - Get Your Business Online Today | SiteGet"
Description: "Contact SiteGet for professional web development services. Call +91 7385311748 or +91 9067551748. WhatsApp available. Let's build your digital presence together."
Image: /og-image.jpg
```

## OG Image Specifications

### Main OG Image (`/og-image.jpg`)
- **Dimensions:** 1200x630 pixels (Facebook recommended)
- **Format:** JPEG
- **Size:** ~5.7 KB (optimized)
- **Design:** Blue background (#2563eb) with SiteGet logo centered
- **Location:** `/app/frontend/public/og-image.jpg`

### Logo Assets
- **logo.png** - 40x40px (Header/Favicon)
- **logo192.png** - 192x192px (PWA manifest)
- **logo512.png** - 512x512px (PWA manifest)
- **All optimized and compressed**

## How Link Previews Will Appear

### Facebook
When shared on Facebook, the link will display:
- **Image:** SiteGet logo on blue background (1200x630)
- **Title:** "SiteGet - Empowering Rural Businesses to Go Digital"
- **Description:** First 300 characters of description
- **URL:** siteget.com

### Twitter
When shared on Twitter:
- **Card Type:** Large image summary
- **Image:** Same OG image (1200x630)
- **Title:** Page-specific title
- **Description:** Truncated to 200 characters

### WhatsApp
When shared on WhatsApp:
- **Image:** OG image thumbnail
- **Title:** Page title
- **Description:** Brief description
- **URL:** Full URL

### LinkedIn
When shared on LinkedIn:
- **Image:** OG image
- **Title:** Professional page title
- **Description:** Full description
- **Company:** SiteGet

## Testing Your OG Tags

### Recommended Testing Tools:

1. **Facebook Sharing Debugger**
   - URL: https://developers.facebook.com/tools/debug/
   - Enter your URL to see how it appears on Facebook
   - Click "Scrape Again" to refresh cache

2. **Twitter Card Validator**
   - URL: https://cards-dev.twitter.com/validator
   - Preview how your links appear on Twitter
   - Validates all Twitter card metadata

3. **LinkedIn Post Inspector**
   - URL: https://www.linkedin.com/post-inspector/
   - Check how posts appear on LinkedIn
   - Clear cache if needed

4. **WhatsApp Link Preview**
   - Send the link to yourself on WhatsApp
   - Check the preview that appears

5. **Open Graph Check**
   - URL: https://opengraphcheck.com/
   - Comprehensive OG tag validation
   - Shows preview across multiple platforms

## Troubleshooting

### Link Preview Not Showing?

1. **Clear Social Media Cache:**
   - Facebook: Use the Sharing Debugger tool
   - LinkedIn: Use Post Inspector
   - Twitter: Cards are cached for 7 days

2. **Verify Image Accessibility:**
   ```bash
   curl -I https://siteget.com/og-image.jpg
   ```
   Should return 200 OK

3. **Check Meta Tags:**
   - View page source
   - Ensure all OG tags are present
   - Verify image URLs are absolute (not relative)

4. **Image Size:**
   - Facebook minimum: 200x200px
   - Recommended: 1200x630px
   - Maximum: 8MB
   - Our image: 1200x630px, ~5.7KB ✅

### Common Issues:

**Issue:** Image not loading on social media
**Solution:** Ensure image URL is absolute (https://siteget.com/og-image.jpg)

**Issue:** Old preview showing
**Solution:** Clear cache using platform debugging tools

**Issue:** Different preview on different platforms
**Solution:** Some platforms prioritize Twitter tags over OG tags

## Best Practices Implemented

✅ **Image Dimensions:** Using 1200x630px (Facebook recommended ratio)
✅ **File Size:** Optimized to ~5.7KB for fast loading
✅ **Absolute URLs:** All OG images use full URLs
✅ **Alt Text:** Provided for accessibility
✅ **Multiple Tags:** Both OG and Twitter tags for compatibility
✅ **Dynamic Updates:** SEO component updates tags per page
✅ **Structured Data:** JSON-LD for rich search results
✅ **Mobile Friendly:** Logo and images responsive
✅ **Fast Loading:** All assets optimized

## Future Enhancements

### Recommended Additions:
1. **Video OG Tags** - For future video content
2. **Article Tags** - When adding blog posts
3. **Product Tags** - For service showcases
4. **Location Tags** - For local SEO
5. **Multiple Images** - Image gallery support

## Maintenance

### When to Update OG Tags:

1. **New Pages:** Create specific OG tags for each new page
2. **Rebranding:** Update logo and OG images
3. **Content Changes:** Update descriptions to match new content
4. **Special Campaigns:** Create campaign-specific OG images
5. **Seasonal Updates:** Update images for special occasions

### Monthly Checklist:
- [ ] Verify all OG images are loading
- [ ] Test link previews on major platforms
- [ ] Check for broken meta tags
- [ ] Update descriptions if services change
- [ ] Monitor click-through rates from social media

## Contact Information in OG Tags

**Phone Numbers:** +91 7385311748, +91 9067551748
**WhatsApp:** Available on both numbers
**Website:** https://siteget.com

All contact information is properly structured in JSON-LD schema for search engines.

## Conclusion

Your SiteGet website now has comprehensive OG tags implementation ensuring:
- ✅ Perfect link previews on all social platforms
- ✅ Enhanced SEO with structured data
- ✅ Professional brand presentation
- ✅ Optimized images for fast loading
- ✅ Dynamic tag updates per page
- ✅ Mobile-responsive design

When you share your website link on Facebook, Twitter, LinkedIn, WhatsApp, or any social platform, it will display beautifully with your logo, compelling title, and description!
