import React from "react";
import { useEffect } from "react";

export default function SEO({ 
  title = "CI GROUP - Votre stratégie, notre expertise",
  description = "Conseil en stratégie marketing et transformation digitale pour PME. Accompagnement personnalisé, méthodologie éprouvée, résultats mesurables.",
  keywords = "conseil stratégie, marketing digital, transformation digitale, consultant PME, stratégie marketing, Nice, France",
  ogImage = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68f62e8256237e5074a9c135/f084198a1_Capturedcran2025-10-31135319.png",
  ogType = "website",
  canonicalUrl,
  jsonLd
}) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name, content, type = 'name') => {
      let element = document.querySelector(`meta[${type}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(type, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);

    // Open Graph tags
    updateMetaTag('og:title', title, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:image', ogImage, 'property');
    updateMetaTag('og:type', ogType, 'property');
    if (canonicalUrl) {
      updateMetaTag('og:url', canonicalUrl, 'property');
    }

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);

    // Additional SEO tags
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('author', 'CI GROUP');
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');

    // Canonical URL
    if (canonicalUrl) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonicalUrl);
    }

    // JSON-LD structured data
    if (jsonLd) {
      let script = document.querySelector('script[type="application/ld+json"]');
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(jsonLd);
    }
  }, [title, description, keywords, ogImage, ogType, canonicalUrl, jsonLd]);

  return null;
}

// SEO helper to generate JSON-LD for organization
export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "CI GROUP",
  "description": "Conseil en stratégie marketing et transformation digitale pour PME",
  "url": window.location.origin,
  "logo": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68f62e8256237e5074a9c135/f084198a1_Capturedcran2025-10-31135319.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "4 rue Cluvier",
    "addressLocality": "Nice",
    "postalCode": "06000",
    "addressCountry": "FR"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+33-1-XX-XX-XX-XX",
    "contactType": "customer service",
    "email": "contact@cigroup.fr",
    "areaServed": "FR",
    "availableLanguage": "French"
  },
  "sameAs": [
    "https://www.linkedin.com/company/cigroup"
  ]
});

// SEO helper to generate JSON-LD for services
export const getServiceSchema = (serviceName, description) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": serviceName,
  "description": description,
  "provider": {
    "@type": "Organization",
    "name": "CI GROUP"
  },
  "areaServed": {
    "@type": "Country",
    "name": "France"
  }
});