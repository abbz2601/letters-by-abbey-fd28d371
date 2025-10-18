import { Menu, ShoppingBag, Sparkles, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useFocusTrap } from "@/hooks/useFocusTrap";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBannerVisible, setIsBannerVisible] = useState(() => {
    return localStorage.getItem("bannerDismissed") !== "true";
  });
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

  const handleDismissBanner = () => {
    setIsBannerVisible(false);
    localStorage.setItem("bannerDismissed", "true");
  };

  return (
    <div className="w-full">
      {/* Professional Promo Banner */}
      {isBannerVisible && (
        <div 
          className="bg-gradient-to-r from-secondary/95 to-secondary h-10 sm:h-12 overflow-hidden relative group shadow-sm border-b border-secondary/20" 
          role="banner" 
          aria-label="Promotional banner"
        >
<div className="marquee-container h-full relative edge-fade group">
            <div className="marquee-track animate-marquee group-hover:[animation-play-state:paused]">
              {/* Visible row */}
              <div className="marquee-item">
                <Sparkles className="w-3.5 h-3.5 text-primary-foreground" aria-hidden="true" />
                <span className="text-primary-foreground font-crimson-text text-xs sm:text-sm uppercase tracking-wider font-medium">
                  Handcrafted Letters for Every Occasion
                </span>
                <span className="text-primary-foreground/60 font-crimson-text text-xs sm:text-sm" aria-hidden="true">•</span>
                <span className="text-primary-foreground font-crimson-text text-xs sm:text-sm uppercase tracking-wider font-medium">
                  Shipped with Care
                </span>
                <Sparkles className="w-3.5 h-3.5 text-primary-foreground" aria-hidden="true" />

                {/* Repeat sequence to exceed viewport width */}
                <span className="text-primary-foreground/60 font-crimson-text text-xs sm:text-sm" aria-hidden="true">•</span>
                <Sparkles className="w-3.5 h-3.5 text-primary-foreground" aria-hidden="true" />
                <span className="text-primary-foreground font-crimson-text text-xs sm:text-sm uppercase tracking-wider font-medium">
                  Handcrafted Letters for Every Occasion
                </span>
                <span className="text-primary-foreground/60 font-crimson-text text-xs sm:text-sm" aria-hidden="true">•</span>
                <span className="text-primary-foreground font-crimson-text text-xs sm:text-sm uppercase tracking-wider font-medium">
                  Shipped with Care
                </span>
                <Sparkles className="w-3.5 h-3.5 text-primary-foreground" aria-hidden="true" />
              </div>

              {/* Duplicate row for seamless loop */}
              <div className="marquee-item" aria-hidden="true">
                <Sparkles className="w-3.5 h-3.5 text-primary-foreground" aria-hidden="true" />
                <span className="text-primary-foreground font-crimson-text text-xs sm:text-sm uppercase tracking-wider font-medium">
                  Handcrafted Letters for Every Occasion
                </span>
                <span className="text-primary-foreground/60 font-crimson-text text-xs sm:text-sm" aria-hidden="true">•</span>
                <span className="text-primary-foreground font-crimson-text text-xs sm:text-sm uppercase tracking-wider font-medium">
                  Shipped with Care
                </span>
                <Sparkles className="w-3.5 h-3.5 text-primary-foreground" aria-hidden="true" />

                <span className="text-primary-foreground/60 font-crimson-text text-xs sm:text-sm" aria-hidden="true">•</span>
                <Sparkles className="w-3.5 h-3.5 text-primary-foreground" aria-hidden="true" />
                <span className="text-primary-foreground font-crimson-text text-xs sm:text-sm uppercase tracking-wider font-medium">
                  Handcrafted Letters for Every Occasion
                </span>
                <span className="text-primary-foreground/60 font-crimson-text text-xs sm:text-sm" aria-hidden="true">•</span>
                <span className="text-primary-foreground font-crimson-text text-xs sm:text-sm uppercase tracking-wider font-medium">
                  Shipped with Care
                </span>
                <Sparkles className="w-3.5 h-3.5 text-primary-foreground" aria-hidden="true" />
              </div>
            </div>
          </div>
          {/* Dismissible close button */}
          <button
            onClick={handleDismissBanner}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 hover:bg-primary-foreground/10 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary-foreground/50"
            aria-label="Close banner"
          >
            <X className="w-4 h-4 text-primary-foreground" aria-hidden="true" />
          </button>
        </div>
      )}

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
