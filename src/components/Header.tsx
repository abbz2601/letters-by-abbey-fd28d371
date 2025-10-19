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
      document.body.classList.add("mobile-menu-open");
    } else {
      document.body.style.overflow = "";
      document.body.classList.remove("mobile-menu-open");
    }
    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("mobile-menu-open");
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
          className="bg-gradient-to-r from-primary/8 via-secondary/12 to-accent/8 h-9 sm:h-10 overflow-hidden relative group border-b border-primary/10" 
          role="banner" 
          aria-label="Promotional banner"
        >
<div className="marquee-container h-full relative edge-fade group">
            <div className="marquee-track animate-marquee group-hover:[animation-play-state:paused]">
              {/* Visible row */}
              <div className="marquee-item">
                <Sparkles className="w-3 h-3 text-primary opacity-60" aria-hidden="true" />
                <span className="text-primary font-crimson-text text-xs uppercase tracking-[0.15em] font-light">
                  Handcrafted Letters for Every Occasion
                </span>
                <span className="text-primary/40 font-crimson-text text-xs" aria-hidden="true">•</span>
                <span className="text-primary font-crimson-text text-xs uppercase tracking-[0.15em] font-light">
                  Shipped with Care
                </span>
                <Sparkles className="w-3 h-3 text-primary opacity-60" aria-hidden="true" />

                {/* Repeat sequence to exceed viewport width */}
                <span className="text-primary/40 font-crimson-text text-xs" aria-hidden="true">•</span>
                <Sparkles className="w-3 h-3 text-primary opacity-60" aria-hidden="true" />
                <span className="text-primary font-crimson-text text-xs uppercase tracking-[0.15em] font-light">
                  Handcrafted Letters for Every Occasion
                </span>
                <span className="text-primary/40 font-crimson-text text-xs" aria-hidden="true">•</span>
                <span className="text-primary font-crimson-text text-xs uppercase tracking-[0.15em] font-light">
                  Shipped with Care
                </span>
                <Sparkles className="w-3 h-3 text-primary opacity-60" aria-hidden="true" />
              </div>

              {/* Duplicate row for seamless loop */}
              <div className="marquee-item" aria-hidden="true">
                <Sparkles className="w-3 h-3 text-primary opacity-60" aria-hidden="true" />
                <span className="text-primary font-crimson-text text-xs uppercase tracking-[0.15em] font-light">
                  Handcrafted Letters for Every Occasion
                </span>
                <span className="text-primary/40 font-crimson-text text-xs" aria-hidden="true">•</span>
                <span className="text-primary font-crimson-text text-xs uppercase tracking-[0.15em] font-light">
                  Shipped with Care
                </span>
                <Sparkles className="w-3 h-3 text-primary opacity-60" aria-hidden="true" />

                <span className="text-primary/40 font-crimson-text text-xs" aria-hidden="true">•</span>
                <Sparkles className="w-3 h-3 text-primary opacity-60" aria-hidden="true" />
                <span className="text-primary font-crimson-text text-xs uppercase tracking-[0.15em] font-light">
                  Handcrafted Letters for Every Occasion
                </span>
                <span className="text-primary/40 font-crimson-text text-xs" aria-hidden="true">•</span>
                <span className="text-primary font-crimson-text text-xs uppercase tracking-[0.15em] font-light">
                  Shipped with Care
                </span>
                <Sparkles className="w-3 h-3 text-primary opacity-60" aria-hidden="true" />
              </div>
            </div>
          </div>
          {/* Dismissible close button */}
          <button
            onClick={handleDismissBanner}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-primary/10 rounded-full transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-primary/30 opacity-60 hover:opacity-100"
            aria-label="Close banner"
          >
            <X className="w-3 h-3 text-primary" aria-hidden="true" />
          </button>
        </div>
      )}

      {/* Main Header */}
      <header className="bg-background/98 backdrop-blur-lg border-b border-border/50 h-20 md:h-24 px-6 lg:px-12 relative z-40">
        <div className="flex items-center justify-between h-full max-w-7xl mx-auto">
          {/* Left zone - Navigation */}
          <nav className="hidden lg:flex items-center gap-12" aria-label="Main navigation">
            <Link
              to="/"
              className="nav-link-elegant font-crimson-text text-foreground/80 text-sm uppercase tracking-elegant hover:text-foreground transition-elegant focus:outline-none focus-elegant rounded-sm px-1 py-2 group font-light text-elegant"
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="nav-link-elegant font-crimson-text text-foreground/80 text-sm uppercase tracking-elegant hover:text-foreground transition-elegant focus:outline-none focus-elegant rounded-sm px-1 py-2 group font-light text-elegant"
            >
              Shop
            </Link>
            <Link
              to="/about"
              className="nav-link-elegant font-crimson-text text-foreground/80 text-sm uppercase tracking-elegant hover:text-foreground transition-elegant focus:outline-none focus-elegant rounded-sm px-1 py-2 group font-light text-elegant"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="nav-link-elegant font-crimson-text text-foreground/80 text-sm uppercase tracking-elegant hover:text-foreground transition-elegant focus:outline-none focus-elegant rounded-sm px-1 py-2 group font-light text-elegant"
            >
              Contact
            </Link>
            <Link
              to="/faq"
              className="nav-link-elegant font-crimson-text text-foreground/80 text-sm uppercase tracking-elegant hover:text-foreground transition-elegant focus:outline-none focus-elegant rounded-sm px-1 py-2 group font-light text-elegant"
            >
              FAQ
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="flex items-center gap-2 p-2 group lg:hidden focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-lg transition-all duration-300 hover:bg-muted/30"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className="relative">
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-foreground/70 transition-all duration-300" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5 text-foreground/70 transition-all duration-300" aria-hidden="true" />
              )}
            </div>
            <span className="font-crimson-text text-foreground/70 text-xs uppercase tracking-[0.2em] hidden sm:block group-hover:text-foreground transition-all duration-300 font-light">
              {isMobileMenuOpen ? "CLOSE" : "MENU"}
            </span>
          </button>

          {/* Center zone - Brand */}
          <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
            <Link to="/" className="brand-elegant block focus:outline-none focus-elegant rounded-lg p-3 transition-elegant group text-elegant" aria-label="Letters by Abbey home">
              <h1 className="font-playfair-display font-light text-foreground text-3xl sm:text-4xl md:text-5xl whitespace-nowrap transition-elegant group-hover:text-primary/90 tracking-tight">
                <span className="italic font-light">Letters by</span> <span className="font-normal">Abbey</span>
              </h1>
              <p className="font-crimson-text text-xs text-muted-foreground/70 text-center tracking-elegant-wide uppercase hidden sm:block mt-1 transition-elegant group-hover:text-primary/60 font-light">
                The Oracle Post
              </p>
            </Link>
          </div>

          {/* Right zone - Cart */}
          <Link to="/cart" className="flex items-center gap-3 p-2 group focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-lg transition-all duration-300 hover:bg-muted/30" aria-label="View shopping cart">
            <div className="relative">
              <ShoppingBag className="w-5 h-5 md:w-6 md:h-6 text-foreground/70 transition-all duration-300 group-hover:text-foreground" aria-hidden="true" />
            </div>
            <span className="font-crimson-text text-foreground/70 text-xs uppercase tracking-[0.2em] group-hover:text-foreground transition-all duration-300 font-light">
              CART
            </span>
          </Link>
        </div>

        {/* Mobile Menu Backdrop */}
        {isMobileMenuOpen && (
          <div 
            className="lg:hidden fixed inset-0 bg-foreground/5 backdrop-blur-sm z-[90] animate-in fade-in duration-500"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div 
            id="mobile-menu"
            ref={mobileMenuRef}
            className="lg:hidden fixed top-20 left-0 w-full bg-background/98 backdrop-blur-xl border-b border-border/30 z-[100] max-h-[calc(100vh-5rem)] overflow-y-auto animate-in slide-in-from-top-4 duration-500"
            role="dialog"
            aria-label="Mobile navigation menu"
          >
            <nav className="mobile-menu flex flex-col py-8 px-6" aria-label="Mobile navigation">
              <Link
                to="/"
                className="px-6 py-4 font-crimson-text text-foreground/80 text-base uppercase tracking-elegant hover:text-foreground transition-elegant focus:outline-none focus-elegant rounded-lg group font-light border-l border-transparent hover:border-primary/20 text-elegant"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="relative z-10">Home</span>
              </Link>
              <Link
                to="/shop"
                className="px-6 py-4 font-crimson-text text-foreground/80 text-base uppercase tracking-elegant hover:text-foreground transition-elegant focus:outline-none focus-elegant rounded-lg group font-light border-l border-transparent hover:border-primary/20 text-elegant"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="relative z-10">Shop</span>
              </Link>
              <Link
                to="/about"
                className="px-6 py-4 font-crimson-text text-foreground/80 text-base uppercase tracking-elegant hover:text-foreground transition-elegant focus:outline-none focus-elegant rounded-lg group font-light border-l border-transparent hover:border-primary/20 text-elegant"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="relative z-10">About</span>
              </Link>
              <Link
                to="/contact"
                className="px-6 py-4 font-crimson-text text-foreground/80 text-base uppercase tracking-elegant hover:text-foreground transition-elegant focus:outline-none focus-elegant rounded-lg group font-light border-l border-transparent hover:border-primary/20 text-elegant"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="relative z-10">Contact</span>
              </Link>
              <Link
                to="/faq"
                className="px-6 py-4 font-crimson-text text-foreground/80 text-base uppercase tracking-elegant hover:text-foreground transition-elegant focus:outline-none focus-elegant rounded-lg group font-light border-l border-transparent hover:border-primary/20 text-elegant"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="relative z-10">FAQ</span>
              </Link>
            </nav>
          </div>
        )}
      </header>

    </div>
  );
}
