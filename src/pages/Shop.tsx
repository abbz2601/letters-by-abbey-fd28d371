import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCollections } from "@/hooks/useCollections";
import { Link } from "react-router-dom";

export default function Shop() {
  const { data: collections, isLoading } = useCollections();

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
          
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="aspect-square bg-muted mb-4"></div>
                  <div className="h-6 bg-muted mb-2"></div>
                  <div className="h-4 bg-muted mb-3"></div>
                  <div className="h-5 bg-muted w-1/4"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {collections?.map((collection) => (
                <Link
                  key={collection.id}
                  to={`/shop/collections/${collection.slug}`}
                  className="group cursor-pointer block"
                >
                  <div className="relative aspect-square mb-4 bg-muted overflow-hidden">
                    <img
                      src={collection.image_url}
                      alt={collection.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300"></div>
                  </div>
                  <div className="text-center">
                    <h3 className="font-playfair-display text-xl md:text-2xl text-foreground mb-2 group-hover:text-secondary transition-colors">
                      {collection.name}
                    </h3>
                    <p className="font-crimson-text text-base text-muted-foreground mb-3">
                      {collection.description}
                    </p>
                    <p className="font-crimson-text text-lg text-foreground font-semibold">
                      ${parseFloat(collection.price).toFixed(2)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
