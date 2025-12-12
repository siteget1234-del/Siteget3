import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO = ({ 
  title, 
  description, 
  image = '/og-image.jpg',
  type = 'website' 
}) => {
  const location = useLocation();
  const baseUrl = window.location.origin;
  const currentUrl = `${baseUrl}${location.pathname}`;
  const contactEmail = 'siteget1234@gmail.com';
  const phoneNumber = '+91 7385311748';

  useEffect(() => {
    // Update page title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (property, content, isName = false) => {
      const attribute = isName ? 'name' : 'property';
      let element = document.querySelector(`meta[${attribute}="${property}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Update basic meta tags
    updateMetaTag('description', description, true);
    updateMetaTag('keywords', 'rural business websites, affordable web development, e-commerce for farmers, local business online, farming business digital, website hosting, SSL security, SEO optimization', true);
    
    // Update Open Graph tags
    updateMetaTag('og:title', title);
    updateMetaTag('og:description', description);
    updateMetaTag('og:url', currentUrl);
    updateMetaTag('og:image', `${baseUrl}${image}`);
    updateMetaTag('og:type', type);
    updateMetaTag('og:site_name', 'SiteGet');
    updateMetaTag('og:email', contactEmail);
    updateMetaTag('og:phone_number', phoneNumber);
    
    // Update Twitter tags
    updateMetaTag('twitter:card', 'summary_large_image', true);
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', `${baseUrl}${image}`);
    updateMetaTag('twitter:url', currentUrl);

    // Structured Data (JSON-LD) for Local Business
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "SiteGet",
      "description": "Professional web development services for rural businesses",
      "url": baseUrl,
      "email": contactEmail,
      "telephone": phoneNumber,
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN"
      },
      "priceRange": "$$",
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "serviceType": ["Web Development", "E-Commerce Solutions", "SEO Optimization", "Web Hosting"]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

  }, [title, description, image, type, currentUrl, baseUrl, contactEmail, phoneNumber]);

  return null;
};

export default SEO;