import { Menu, ShoppingBag, Heart, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Promo Ribbon */}
      <div className="bg-[#E8A088] h-10 overflow-hidden relative group">
        <div className="marquee-container h-full flex items-center">
          <div className="marquee-content flex items-center whitespace-nowrap">
            {/* Repeat the promo text multiple times for seamless scrolling */}
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex items-center">
                <span className="text-white font-crimson-text text-sm lg:text-sm uppercase tracking-wider opacity-90 px-8">
                  HANDCRAFTED LETTERS WITH LOVE & INTENTION
                </span>
                <Heart className="w-3 h-3 text-white opacity-90" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-[#FEFCFB] border-b border-[#F0E6E0] h-16 md:h-20 px-4 lg:px-8">
        <div className="flex items-center justify-between h-full">
          {/* Left zone - Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="/"
              className="font-crimson-text text-[#8B6F47] text-base uppercase tracking-wide hover:text-[#E8A088] transition-colors"
            >
              Home
            </a>
            <a
              href="/shop"
              className="font-crimson-text text-[#8B6F47] text-base uppercase tracking-wide hover:text-[#E8A088] transition-colors"
            >
              Shop
            </a>
            <a
              href="/about"
              className="font-crimson-text text-[#8B6F47] text-base uppercase tracking-wide hover:text-[#E8A088] transition-colors"
            >
              About
            </a>
            <a
              href="/contact"
              className="font-crimson-text text-[#8B6F47] text-base uppercase tracking-wide hover:text-[#E8A088] transition-colors"
            >
              Contact
            </a>
            <a
              href="/faq"
              className="font-crimson-text text-[#8B6F47] text-base uppercase tracking-wide hover:text-[#E8A088] transition-colors"
            >
              FAQ
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="flex items-center gap-2 group md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-[#8B6F47]" />
            ) : (
              <Menu className="w-5 h-5 text-[#8B6F47]" />
            )}
            <span className="font-crimson-text text-[#8B6F47] text-base uppercase tracking-wide hidden sm:block group-hover:text-[#E8A088] transition-colors">
              {isMobileMenuOpen ? "CLOSE" : "MENU"}
            </span>
          </button>

          {/* Center zone - Brand */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <a href="/" className="block text-center">
              <h1 className="font-playfair-display font-normal text-[#8B6F47] text-3xl md:text-4xl">
                <span className="italic">Letters by</span> Abbey
              </h1>
              <p className="font-crimson-text text-xs text-[#A08B7A] text-center tracking-wider uppercase">
                The Oracle Post
              </p>
            </a>
          </div>

          {/* Right zone - Cart */}
          <a href="/cart" className="flex items-center gap-2 group relative">
            <div className="relative">
              <ShoppingBag className="w-5 h-5 md:w-6 md:h-6 text-[#8B6F47]" />
            </div>
            <span className="font-crimson-text text-[#8B6F47] text-base uppercase tracking-wide group-hover:text-[#E8A088] transition-colors">
              CART
            </span>
          </a>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#FEFCFB] border-b border-[#F0E6E0] shadow-lg z-50">
            <nav className="flex flex-col py-4">
              <a
                href="/"
                className="px-6 py-3 font-crimson-text text-[#8B6F47] text-base uppercase tracking-wide hover:text-[#E8A088] hover:bg-[#F9F6F3] transition-colors"
              >
                Home
              </a>
              <a
                href="/shop"
                className="px-6 py-3 font-crimson-text text-[#8B6F47] text-base uppercase tracking-wide hover:text-[#E8A088] hover:bg-[#F9F6F3] transition-colors"
              >
                Shop
              </a>
              <a
                href="/about"
                className="px-6 py-3 font-crimson-text text-[#8B6F47] text-base uppercase tracking-wide hover:text-[#E8A088] hover:bg-[#F9F6F3] transition-colors"
              >
                About
              </a>
              <a
                href="/contact"
                className="px-6 py-3 font-crimson-text text-[#8B6F47] text-base uppercase tracking-wide hover:text-[#E8A088] hover:bg-[#F9F6F3] transition-colors"
              >
                Contact
              </a>
              <a
                href="/faq"
                className="px-6 py-3 font-crimson-text text-[#8B6F47] text-base uppercase tracking-wide hover:text-[#E8A088] hover:bg-[#F9F6F3] transition-colors"
              >
                FAQ
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Styles for marquee animation */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600&family=Playfair+Display:ital,wght@0,400;1,400&display=swap');
        
        .font-crimson-text {
          font-family: 'Crimson Text', serif;
        }
        
        .font-playfair-display {
          font-family: 'Playfair Display', serif;
        }
        
        .marquee-container {
          position: relative;
        }
        
        .marquee-content {
          animation: marquee 35s linear infinite;
        }
        
        .group:hover .marquee-content {
          animation-play-state: paused;
        }
        
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @media (max-width: 640px) {
          .marquee-content {
            animation: marquee 40s linear infinite;
          }
        }
      `}</style>
    </div>
  );
}
