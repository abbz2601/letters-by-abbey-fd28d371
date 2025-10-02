import { Menu, ShoppingBag, Heart, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/store/useCart";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const itemCount = useCart(state => state.getItemCount());

  return (
    <div className="w-full">
      {/* Promo Ribbon */}
      <div className="bg-secondary h-10 overflow-hidden relative group">
        <div className="marquee-container h-full flex items-center">
          <div className="marquee-content flex items-center whitespace-nowrap animate-marquee group-hover:pause">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex items-center">
                <span className="text-primary-foreground font-crimson-text text-sm lg:text-sm uppercase tracking-wider opacity-90 px-8">
                  HANDCRAFTED LETTERS WITH LOVE & INTENTION
                </span>
                <Heart className="w-3 h-3 text-primary-foreground opacity-90" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-background border-b border-muted h-16 md:h-20 px-4 lg:px-8">
        <div className="flex items-center justify-between h-full">
          {/* Left zone - Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="font-crimson-text text-foreground text-base uppercase tracking-wide hover:text-secondary transition-colors"
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="font-crimson-text text-foreground text-base uppercase tracking-wide hover:text-secondary transition-colors"
            >
              Shop
            </Link>
            <Link
              to="/about"
              className="font-crimson-text text-foreground text-base uppercase tracking-wide hover:text-secondary transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="font-crimson-text text-foreground text-base uppercase tracking-wide hover:text-secondary transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/faq"
              className="font-crimson-text text-foreground text-base uppercase tracking-wide hover:text-secondary transition-colors"
            >
              FAQ
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="flex items-center gap-2 group md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-foreground" />
            ) : (
              <Menu className="w-5 h-5 text-foreground" />
            )}
            <span className="font-crimson-text text-foreground text-base uppercase tracking-wide hidden sm:block group-hover:text-secondary transition-colors">
              {isMobileMenuOpen ? "CLOSE" : "MENU"}
            </span>
          </button>

          {/* Center zone - Brand */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link to="/" className="block text-center">
              <h1 className="font-playfair-display font-normal text-foreground text-3xl md:text-4xl">
                <span className="italic">Letters by</span> Abbey
              </h1>
              <p className="font-crimson-text text-xs text-muted-foreground text-center tracking-wider uppercase">
                The Oracle Post
              </p>
            </Link>
          </div>

          {/* Right zone - Cart */}
          <Link to="/cart" className="flex items-center gap-2 group relative">
            <div className="relative">
              <ShoppingBag className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-secondary text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </div>
            <span className="font-crimson-text text-foreground text-base uppercase tracking-wide group-hover:text-secondary transition-colors">
              CART
            </span>
          </Link>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-muted shadow-lg z-50">
            <nav className="flex flex-col py-4">
              <Link
                to="/"
                className="px-6 py-3 font-crimson-text text-foreground text-base uppercase tracking-wide hover:text-secondary hover:bg-muted/50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/shop"
                className="px-6 py-3 font-crimson-text text-foreground text-base uppercase tracking-wide hover:text-secondary hover:bg-muted/50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Shop
              </Link>
              <Link
                to="/about"
                className="px-6 py-3 font-crimson-text text-foreground text-base uppercase tracking-wide hover:text-secondary hover:bg-muted/50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 font-crimson-text text-foreground text-base uppercase tracking-wide hover:text-secondary hover:bg-muted/50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/faq"
                className="px-6 py-3 font-crimson-text text-foreground text-base uppercase tracking-wide hover:text-secondary hover:bg-muted/50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </Link>
            </nav>
          </div>
        )}
      </header>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .pause {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
    <div className="w-full">
      {/* Promo Ribbon */}
      <div className="bg-secondary h-10 overflow-hidden relative group">
        <div className="marquee-container h-full flex items-center">
          <div className="marquee-content flex items-center whitespace-nowrap animate-marquee group-hover:pause">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex items-center">
                <span className="text-primary-foreground font-crimson-text text-sm lg:text-sm uppercase tracking-wider opacity-90 px-8">
                  HANDCRAFTED LETTERS WITH LOVE & INTENTION
                </span>
                <Heart className="w-3 h-3 text-primary-foreground opacity-90" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-background border-b border-muted h-16 md:h-20 px-4 lg:px-8">
        <div className="flex items-center justify-between h-full">
          {/* Left zone - Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="font-crimson-text text-foreground text-base uppercase tracking-wide hover:text-secondary transition-colors"
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="font-crimson-text text-foreground text-base uppercase tracking-wide hover:text-secondary transition-colors"
            >
              Shop
            </Link>
            <Link
              to="/about"
              className="font-crimson-text text-foreground text-base uppercase tracking-wide hover:text-secondary transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="font-crimson-text text-foreground text-base uppercase tracking-wide hover:text-secondary transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/faq"
              className="font-crimson-text text-foreground text-base uppercase tracking-wide hover:text-secondary transition-colors"
            >
              FAQ
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="flex items-center gap-2 group md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-foreground" />
            ) : (
              <Menu className="w-5 h-5 text-foreground" />
            )}
            <span className="font-crimson-text text-foreground text-base uppercase tracking-wide hidden sm:block group-hover:text-secondary transition-colors">
              {isMobileMenuOpen ? "CLOSE" : "MENU"}
            </span>
          </button>

          {/* Center zone - Brand */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link to="/" className="block text-center">
              <h1 className="font-playfair-display font-normal text-foreground text-3xl md:text-4xl">
                <span className="italic">Letters by</span> Abbey
              </h1>
              <p className="font-crimson-text text-xs text-muted-foreground text-center tracking-wider uppercase">
                The Oracle Post
              </p>
            </Link>
          </div>

          {/* Right zone - Cart */}
          <Link to="/cart" className="flex items-center gap-2 group relative">
            <div className="relative">
              <ShoppingBag className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
            </div>
            <span className="font-crimson-text text-foreground text-base uppercase tracking-wide group-hover:text-secondary transition-colors">
              CART
            </span>
          </Link>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-muted shadow-lg z-50">
            <nav className="flex flex-col py-4">
              <Link
                to="/"
                className="px-6 py-3 font-crimson-text text-foreground text-base uppercase tracking-wide hover:text-secondary hover:bg-muted/50 transition-colors"
              >
                Home
              </Link>
              <Link
                to="/shop"
                className="px-6 py-3 font-crimson-text text-foreground text-base uppercase tracking-wide hover:text-secondary hover:bg-muted/50 transition-colors"
              >
                Shop
              </Link>
              <Link
                to="/about"
                className="px-6 py-3 font-crimson-text text-foreground text-base uppercase tracking-wide hover:text-secondary hover:bg-muted/50 transition-colors"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 font-crimson-text text-foreground text-base uppercase tracking-wide hover:text-secondary hover:bg-muted/50 transition-colors"
              >
                Contact
              </Link>
              <Link
                to="/faq"
                className="px-6 py-3 font-crimson-text text-foreground text-base uppercase tracking-wide hover:text-secondary hover:bg-muted/50 transition-colors"
              >
                FAQ
              </Link>
            </nav>
          </div>
        )}
      </header>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .pause {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
