import { Menu, ShoppingBag, Heart, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useFocusTrap } from "@/hooks/useFocusTrap";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  
  useFocusTrap(mobileMenuRef, isMobileMenuOpen);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="w-full">
      {/* Promo Ribbon */}
      <div className="bg-secondary h-10 overflow-hidden relative group" role="banner" aria-label="Promotional banner">
        <div className="marquee-container h-full flex items-center">
          <div className="marquee-content flex items-center whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused]">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex items-center">
                <span className="text-primary-foreground font-crimson-text text-sm lg:text-sm uppercase tracking-wider opacity-90 px-8">
                  HANDCRAFTED LETTERS WITH LOVE & INTENTION
                </span>
                <Heart className="w-3 h-3 text-primary-foreground opacity-90" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-background border-b border-muted h-16 md:h-20 px-4 lg:px-8">
        <div className="flex items-center justify-between h-full">
          {/* Left zone - Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            <Link
              to="/"
              className="font-crimson-text text-foreground text-base uppercase tracking-wide hover:text-secondary transition-colors focus:outline-none focus:ring-4 focus:ring-ring"
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="font-crimson-text text-foreground text-base uppercase tracking-wide hover:text-secondary transition-colors focus:outline-none focus:ring-4 focus:ring-ring"
            >
              Shop
            </Link>
            <Link
              to="/about"
              className="font-crimson-text text-foreground text-base uppercase tracking-wide hover:text-secondary transition-colors focus:outline-none focus:ring-4 focus:ring-ring"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="font-crimson-text text-foreground text-base uppercase tracking-wide hover:text-secondary transition-colors focus:outline-none focus:ring-4 focus:ring-ring"
            >
              Contact
            </Link>
            <Link
              to="/faq"
              className="font-crimson-text text-foreground text-base uppercase tracking-wide hover:text-secondary transition-colors focus:outline-none focus:ring-4 focus:ring-ring"
            >
              FAQ
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="flex items-center gap-2 group md:hidden focus:outline-none focus:ring-4 focus:ring-ring"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-foreground" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5 text-foreground" aria-hidden="true" />
            )}
            <span className="font-crimson-text text-foreground text-base uppercase tracking-wide hidden sm:block group-hover:text-secondary transition-colors">
              {isMobileMenuOpen ? "CLOSE" : "MENU"}
            </span>
          </button>

          {/* Center zone - Brand */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link to="/" className="block text-center focus:outline-none focus:ring-4 focus:ring-ring" aria-label="Letters by Abbey home">
              <h1 className="font-playfair-display font-normal text-foreground text-3xl md:text-4xl">
                <span className="italic">Letters by</span> Abbey
              </h1>
              <p className="font-crimson-text text-xs text-muted-foreground text-center tracking-wider uppercase">
                The Oracle Post
              </p>
            </Link>
          </div>

          {/* Right zone - Cart */}
          <Link to="/cart" className="flex items-center gap-2 group focus:outline-none focus:ring-4 focus:ring-ring" aria-label="View shopping cart">
            <ShoppingBag className="w-5 h-5 md:w-6 md:h-6 text-foreground" aria-hidden="true" />
            <span className="font-crimson-text text-foreground text-base uppercase tracking-wide group-hover:text-secondary transition-colors">
              CART
            </span>
          </Link>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div 
            id="mobile-menu"
            ref={mobileMenuRef}
            className="md:hidden absolute top-full left-0 w-full bg-background border-b border-muted shadow-lg z-50"
            role="dialog"
            aria-label="Mobile navigation menu"
          >
            <nav className="flex flex-col py-4" aria-label="Mobile navigation">
              <Link
                to="/"
                className="px-6 py-3 font-crimson-text text-foreground text-base uppercase tracking-wide hover:text-secondary hover:bg-muted/50 transition-colors focus:outline-none focus:ring-4 focus:ring-ring"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/shop"
                className="px-6 py-3 font-crimson-text text-foreground text-base uppercase tracking-wide hover:text-secondary hover:bg-muted/50 transition-colors focus:outline-none focus:ring-4 focus:ring-ring"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Shop
              </Link>
              <Link
                to="/about"
                className="px-6 py-3 font-crimson-text text-foreground text-base uppercase tracking-wide hover:text-secondary hover:bg-muted/50 transition-colors focus:outline-none focus:ring-4 focus:ring-ring"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 font-crimson-text text-foreground text-base uppercase tracking-wide hover:text-secondary hover:bg-muted/50 transition-colors focus:outline-none focus:ring-4 focus:ring-ring"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/faq"
                className="px-6 py-3 font-crimson-text text-foreground text-base uppercase tracking-wide hover:text-secondary hover:bg-muted/50 transition-colors focus:outline-none focus:ring-4 focus:ring-ring"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </Link>
            </nav>
          </div>
        )}
      </header>

    </div>
  );
}
