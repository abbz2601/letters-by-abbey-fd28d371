import SEO from "@/components/SEO";
import SkipLink from "@/components/SkipLink";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedCollections from "@/components/FeaturedCollections";
import Testimonials from "@/components/Testimonials";
import AboutSection from "@/components/AboutSection";
import TrustBadges from "@/components/TrustBadges";
import Footer from "@/components/Footer";

const Index = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Letters by Abbey",
    "description": "Meaningful handwritten letters crafted with intention",
    "url": "https://lettersbyabbey.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://lettersbyabbey.com/shop?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <SEO
        title="Letters by Abbey - Meaningful Handwritten Letters | Handcrafted with Love"
        description="Discover beautifully handwritten letters crafted with intention. Perfect for weddings, birthdays, grief support, and everyday moments. Each letter offers encouragement and connection."
        schema={schema}
      />
      <SkipLink />
      <div className="min-h-screen bg-background">
        <div className="sticky top-0 z-50">
          <Header />
        </div>
        <main id="main-content">
          <Hero />
          <TrustBadges />
          <FeaturedCollections />
          <Testimonials />
          <AboutSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
