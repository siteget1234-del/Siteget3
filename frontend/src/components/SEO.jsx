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
    
    // Update Open Graph tags
    updateMetaTag('og:title', title);
    updateMetaTag('og:description', description);
    updateMetaTag('og:url', currentUrl);
    updateMetaTag('og:image', `${baseUrl}${image}`);
    updateMetaTag('og:type', type);
    
    // Update Twitter tags
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', `${baseUrl}${image}`);
    updateMetaTag('twitter:url', currentUrl);

  }, [title, description, image, type, currentUrl, baseUrl]);

  return null;
};

export default SEO;
