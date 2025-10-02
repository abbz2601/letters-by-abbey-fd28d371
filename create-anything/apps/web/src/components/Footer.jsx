"use client";

import { Instagram, Facebook, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#8B6F47] text-[#F9F6F3] relative z-10">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 md:px-8 pt-16 md:pt-20 pb-12 md:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <h3 className="font-playfair-display text-3xl md:text-4xl text-[#F9F6F3] mb-4">
              <span className="italic">Letters by</span> Abbey
            </h3>
            <p className="font-crimson-text text-xs text-[#D4C3B0] mb-6 tracking-wider uppercase">
              The Oracle Post
            </p>
            <p className="font-crimson-text text-base md:text-lg text-[#D4C3B0] leading-relaxed mb-6 max-w-md">
              Crafting meaningful, handwritten letters that offer encouragement,
              connection, and beauty through thoughtfully chosen words.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="https://instagram.com/lettersbyabbey"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="w-10 h-10 rounded-full border border-[#A08B7A] bg-transparent flex items-center justify-center hover:border-[#E8A088] hover:bg-[#E8A088] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#E8A088]"
              >
                <Instagram
                  className="w-4 h-4 text-[#F9F6F3]"
                  strokeWidth={1.5}
                />
              </a>
              <a
                href="https://facebook.com/lettersbyabbey"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="w-10 h-10 rounded-full border border-[#A08B7A] bg-transparent flex items-center justify-center hover:border-[#E8A088] hover:bg-[#E8A088] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#E8A088]"
              >
                <Facebook
                  className="w-4 h-4 text-[#F9F6F3]"
                  strokeWidth={1.5}
                />
              </a>
              <a
                href="mailto:hello@lettersbyabbey.com"
                aria-label="Email us"
                className="w-10 h-10 rounded-full border border-[#A08B7A] bg-transparent flex items-center justify-center hover:border-[#E8A088] hover:bg-[#E8A088] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#E8A088]"
              >
                <Mail className="w-4 h-4 text-[#F9F6F3]" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-crimson-text font-semibold text-sm uppercase tracking-wide text-[#D4C3B0] mb-6">
              SHOP
            </h4>
            <nav className="space-y-3">
              <a
                href="/shop"
                className="block font-crimson-text text-base text-[#F9F6F3] hover:text-[#E8A088] transition-colors duration-200 focus:outline-none focus:text-[#E8A088]"
              >
                All Collections
              </a>
              <a
                href="/shop"
                className="block font-crimson-text text-base text-[#F9F6F3] hover:text-[#E8A088] transition-colors duration-200 focus:outline-none focus:text-[#E8A088]"
              >
                Featured Letters
              </a>
              <a
                href="/cart"
                className="block font-crimson-text text-base text-[#F9F6F3] hover:text-[#E8A088] transition-colors duration-200 focus:outline-none focus:text-[#E8A088]"
              >
                Cart
              </a>
            </nav>
          </div>

          {/* About Links */}
          <div>
            <h4 className="font-crimson-text font-semibold text-sm uppercase tracking-wide text-[#D4C3B0] mb-6">
              CONNECT
            </h4>
            <nav className="space-y-3">
              <a
                href="/about"
                className="block font-crimson-text text-base text-[#F9F6F3] hover:text-[#E8A088] transition-colors duration-200 focus:outline-none focus:text-[#E8A088]"
              >
                About Abbey
              </a>
              <a
                href="/contact"
                className="block font-crimson-text text-base text-[#F9F6F3] hover:text-[#E8A088] transition-colors duration-200 focus:outline-none focus:text-[#E8A088]"
              >
                Contact
              </a>
              <a
                href="/faq"
                className="block font-crimson-text text-base text-[#F9F6F3] hover:text-[#E8A088] transition-colors duration-200 focus:outline-none focus:text-[#E8A088]"
              >
                FAQ
              </a>
              <a
                href="/shipping"
                className="block font-crimson-text text-base text-[#F9F6F3] hover:text-[#E8A088] transition-colors duration-200 focus:outline-none focus:text-[#E8A088]"
              >
                Shipping
              </a>
              <a
                href="/returns"
                className="block font-crimson-text text-base text-[#F9F6F3] hover:text-[#E8A088] transition-colors duration-200 focus:outline-none focus:text-[#E8A088]"
              >
                Returns
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-[#A08B7A]"></div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="h-16 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 py-4 sm:py-0">
          <div className="font-crimson-text text-sm text-[#D4C3B0] text-center sm:text-left flex items-center">
            © 2025 Letters by Abbey. Made with
            <Heart className="w-4 h-4 mx-1 text-[#E8A088]" />
            and intention.
          </div>
          <div className="flex gap-6 justify-center sm:justify-end">
            <a
              href="/privacy"
              className="font-crimson-text text-sm text-[#D4C3B0] hover:text-[#E8A088] transition-colors duration-200 focus:outline-none focus:text-[#E8A088]"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="font-crimson-text text-sm text-[#D4C3B0] hover:text-[#E8A088] transition-colors duration-200 focus:outline-none focus:text-[#E8A088]"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Styles for fonts */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600&family=Playfair+Display:ital,wght@0,400;1,400&display=swap');
        
        .font-crimson-text {
          font-family: 'Crimson Text', serif;
        }
        
        .font-playfair-display {
          font-family: 'Playfair Display', serif;
        }
      `}</style>
    </footer>
  );
}
