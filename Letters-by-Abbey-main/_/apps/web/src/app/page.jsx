"use client";

import { useEffect } from 'react';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedCollections from "@/components/FeaturedCollections";
import AboutSection from "@/components/AboutSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

// SEO Meta tags for homepage
export const meta = () => [
  { title: "Letters by Abbey - Handcrafted Letters with Love & Intention" },
  { name: "description", content: "Discover beautifully handwritten letters that offer encouragement, connection, and meaning. Shop thoughtfully curated collections of handcrafted letters." },
  { name: "keywords", content: "handwritten letters, encouragement letters, personalized stationery, meaningful gifts, Abbey letters, handcrafted letters" },
  { property: "og:title", content: "Letters by Abbey - Handcrafted Letters with Love & Intention" },
  { property: "og:description", content: "Discover beautifully handwritten letters that offer encouragement, connection, and meaning. Shop thoughtfully curated collections of handcrafted letters." },
  { property: "og:url", content: "https://lettersbyabbey.com" },
  { name: "twitter:title", content: "Letters by Abbey - Handcrafted Letters with Love & Intention" },
  { name: "twitter:description", content: "Discover beautifully handwritten letters that offer encouragement, connection, and meaning." }
];

export default function HomePage() {
  // Load ConvertKit script for email marketing
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.setAttribute('data-uid', '5540fe4df6');
    script.src = 'https://letters-by-abbey.kit.com/5540fe4df6/index.js';
    document.body.appendChild(script);

    return () => {
      // Cleanup script if component unmounts
      const existingScript = document.querySelector('script[data-uid="5540fe4df6"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FEFCFB]">
      {/* Header - Sticky navigation bar at top */}
      <div className="sticky top-0 z-50">
        <Header />
      </div>

      {/* Hero Section - Full viewport height with stationery imagery */}
      <Hero />

      {/* TEST: This should show if deployments are working */}
      <div style={{backgroundColor: 'red', color: 'white', padding: '20px', textAlign: 'center', fontSize: '24px'}}>
        🚨 DEPLOYMENT TEST - IF YOU SEE THIS, DEPLOYMENTS ARE WORKING 🚨
      </div>

      {/* Featured Collections - Showcase main letter collections */}
      <FeaturedCollections />

      {/* About Section - Brief introduction to Letters by Abbey */}
      <AboutSection />

      {/* Newsletter Section - Email signup for updates */}
      <NewsletterSection />

      {/* Footer - Site footer with links and contact info */}
      <Footer />
    </div>
  );
}