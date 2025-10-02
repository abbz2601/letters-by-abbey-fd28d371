import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

export default function Cart() {
  return (
    <div className="min-h-screen bg-background">
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      
      <main className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <h1 className="font-playfair-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-8 text-center">
            Your <span className="italic">Cart</span>
          </h1>
          
          <div className="text-center py-16">
            <ShoppingBag className="w-16 h-16 text-muted-foreground mx-auto mb-6" />
            <p className="font-crimson-text text-xl text-muted-foreground mb-8">
              Your cart is currently empty
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-crimson-text text-lg uppercase tracking-wide transition-colors duration-200"
            >
              Browse Collections
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
