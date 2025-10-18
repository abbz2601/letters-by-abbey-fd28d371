import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  type?: "website" | "article" | "product";
  canonicalUrl?: string;
  schema?: object;
}

export default function SEO({
  title = "Letters by Abbey - Meaningful Handwritten Letters",
  description = "Meaningful handwritten letters crafted with intention. Each letter offers encouragement, connection, and beauty through thoughtfully chosen words.",
  image = "https://images.pexels.com/photos/6956629/pexels-photo-6956629.jpeg?auto=compress&cs=tinysrgb&w=1200",
  type = "website",
  canonicalUrl,
  schema,
}: SEOProps) {
  const location = useLocation();
  const fullUrl = canonicalUrl || `https://lettersbyabbey.com${location.pathname}`;

  useEffect(() => {
    // Set document title
    document.title = title;

    // Set or update meta tags
    const setMetaTag = (property: string, content: string, isProperty = true) => {
      const attribute = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attribute}="${property}"]`);
      
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, property);
        document.head.appendChild(element);
      }
      
      element.setAttribute("content", content);
    };

    // Basic meta tags
    setMetaTag("description", description, false);
    
    // Open Graph tags
    setMetaTag("og:title", title);
    setMetaTag("og:description", description);
    setMetaTag("og:image", image);
    setMetaTag("og:url", fullUrl);
    setMetaTag("og:type", type);
    setMetaTag("og:site_name", "Letters by Abbey");

    // Twitter Card tags
    setMetaTag("twitter:card", "summary_large_image", false);
    setMetaTag("twitter:title", title, false);
    setMetaTag("twitter:description", description, false);
    setMetaTag("twitter:image", image, false);

    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", fullUrl);

    // Structured Data (JSON-LD)
    if (schema) {
      let scriptTag = document.querySelector('script[type="application/ld+json"]');
      if (!scriptTag) {
        scriptTag = document.createElement("script");
        scriptTag.setAttribute("type", "application/ld+json");
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(schema);
    }
  }, [title, description, image, type, fullUrl, schema]);

  return null;
}
