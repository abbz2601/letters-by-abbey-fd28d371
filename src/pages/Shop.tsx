import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeaturedCollections from "@/components/FeaturedCollections";

export default function Shop() {
  return (
    <div className="min-h-screen bg-background">
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      
      <main className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="font-playfair-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-4">
              Shop <span className="italic">Collections</span>
            </h1>
            <p className="font-crimson-text text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Browse our carefully curated collections of handwritten letters
            </p>
          </div>
          
          <FeaturedCollections />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
