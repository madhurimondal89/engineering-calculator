import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  keywords?: string;
  noindex?: boolean;
}

export function SEOHead({
  title,
  description,
  canonical,
  ogType = 'website',
  ogImage = 'https://www.calculatorfree.in/og-image.jpg',
  keywords,
  noindex = false,
}: SEOHeadProps) {
  useEffect(() => {
    // Set page title
    document.title = title;

    // Helper function to set or update meta tag
    const setMetaTag = (property: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${property}"]`) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, property);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Basic Meta Tags
    setMetaTag('description', description);
    if (keywords) {
      setMetaTag('keywords', keywords);
    }
    
    // Robots
    if (noindex) {
      setMetaTag('robots', 'noindex, nofollow');
    } else {
      setMetaTag('robots', 'index, follow');
    }

    // Canonical URL
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.rel = 'canonical';
        document.head.appendChild(link);
      }
      link.href = canonical;
    }

    // Open Graph Tags
    setMetaTag('og:title', title, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:type', ogType, true);
    setMetaTag('og:image', ogImage, true);
    setMetaTag('og:site_name', 'CalculatorFree.in', true);
    if (canonical) {
      setMetaTag('og:url', canonical, true);
    }

    // Twitter Card Tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', ogImage);

    // Additional SEO tags
    setMetaTag('author', 'CalculatorFree.in');
    setMetaTag('language', 'English');
  }, [title, description, canonical, ogType, ogImage, keywords, noindex]);

  return null;
}
