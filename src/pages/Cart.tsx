import SEO from "@/components/SEO";
import SkipLink from "@/components/SkipLink";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

export default function Cart() {

  return (
    <>
      <SEO
        title="Shopping Cart - Letters by Abbey"
        description="View your shopping cart and complete your purchase of meaningful handwritten letters."
      />
      <SkipLink />
      <div className="min-h-screen bg-background">
        <div className="sticky top-0 z-50">
          <Header />
        </div>
        
        <main id="main-content" className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 md:px-8">
            <h1 className="font-playfair-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-8 text-center">
              Your <span className="italic">Cart</span>
            </h1>
            
            <div className="text-center py-16 bg-muted/30 border border-muted p-8">
              <ShoppingBag className="w-16 h-16 text-secondary mx-auto mb-6" aria-hidden="true" />
              <h2 className="font-playfair-display text-2xl text-foreground mb-4">
                Your cart is managed by Shopify
              </h2>
              <p className="font-crimson-text text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Click the cart icon in the Shopify widget (appears when you add items) to view and complete your purchase securely through Shopify's checkout.
              </p>
              <Link
                to="/shop"
                className="inline-flex items-center px-8 py-3 bg-secondary hover:bg-secondary/90 text-white font-crimson-text text-lg uppercase tracking-wide transition-colors duration-200"
              >
                Browse Collections
              </Link>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
}
