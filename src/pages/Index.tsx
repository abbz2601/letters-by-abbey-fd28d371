import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedCollections from "@/components/FeaturedCollections";
import Testimonials from "@/components/Testimonials";
import AboutSection from "@/components/AboutSection";
import TrustBadges from "@/components/TrustBadges";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      <Hero />
      <TrustBadges />
      <FeaturedCollections />
      <Testimonials />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
