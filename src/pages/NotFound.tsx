import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <SEO
        title="Page Not Found - Letters by Abbey"
        description="The page you're looking for doesn't exist. Browse our collections of meaningful handwritten letters."
      />
      <div className="min-h-screen bg-background flex flex-col">
        <div className="sticky top-0 z-50">
          <Header />
        </div>
        
        <main className="flex-1 flex items-center justify-center px-4 py-16">
          <div className="text-center max-w-2xl">
            <h1 className="font-playfair-display text-7xl md:text-9xl text-primary mb-6">
              404
            </h1>
            <h2 className="font-playfair-display text-3xl md:text-4xl text-foreground mb-4">
              Page <span className="italic">not found</span>
            </h2>
            <p className="font-crimson-text text-lg text-muted-foreground mb-8 leading-relaxed">
              The page you're looking for doesn't exist or has been moved. Perhaps you'd like to explore our beautiful collections instead?
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-crimson-text text-lg uppercase tracking-wide transition-colors duration-200"
              >
                Go Home
              </Link>
              <Link
                to="/shop"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-secondary text-secondary hover:bg-secondary hover:text-primary-foreground font-crimson-text text-lg uppercase tracking-wide transition-all duration-200"
              >
                Shop Collections
              </Link>
            </div>
            
            <p className="font-crimson-text text-sm text-muted-foreground mt-8 uppercase tracking-widest">
              Lost but not forgotten
            </p>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default NotFound;
