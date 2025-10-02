"use client";

import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedCollections from "@/components/FeaturedCollections";
import AboutSection from "@/components/AboutSection";
import TrustBadges from "@/components/TrustBadges";
import NewsletterPopup from "@/components/NewsletterPopup";
import Footer from "@/components/Footer";

export default function HomePage() {
  // Load ConvertKit script for email marketing
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("data-uid", "5540fe4df6");
    script.src = "https://letters-by-abbey.kit.com/5540fe4df6/index.js";
    document.body.appendChild(script);

    return () => {
      // Cleanup script if component unmounts
      const existingScript = document.querySelector(
        'script[data-uid="5540fe4df6"]',
      );
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

      {/* Featured Collections - Showcase main letter collections */}
      <FeaturedCollections />

      {/* Trust Badges - Build confidence and trust */}
      <TrustBadges />

      {/* About Section - Brief introduction to Letters by Abbey */}
      <AboutSection />

      {/* Newsletter Section - Email signup for updates */}
      {/* Remove this section: <NewsletterSection /> */}

      {/* Footer - Site footer with links and contact info */}
      <Footer />

      {/* Newsletter Popup - Exit intent email capture */}
      <NewsletterPopup />
    </div>
  );
}
