import { Instagram, Facebook, Mail, Heart } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground relative z-10">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 md:px-8 pt-16 md:pt-20 pb-12 md:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <h3 className="font-playfair-display text-3xl md:text-4xl text-primary-foreground mb-4">
              <span className="italic">Letters by</span> Abbey
            </h3>
            <p className="font-crimson-text text-xs text-accent mb-6 tracking-wider uppercase">
              The Oracle Post
            </p>
            <p className="font-crimson-text text-base md:text-lg text-accent leading-relaxed mb-6 max-w-md">
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
                className="w-10 h-10 rounded-full border border-muted-foreground bg-transparent flex items-center justify-center hover:border-secondary hover:bg-secondary transition-colors duration-200"
              >
                <Instagram className="w-4 h-4 text-primary-foreground" strokeWidth={1.5} />
              </a>
              <a
                href="https://facebook.com/lettersbyabbey"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="w-10 h-10 rounded-full border border-muted-foreground bg-transparent flex items-center justify-center hover:border-secondary hover:bg-secondary transition-colors duration-200"
              >
                <Facebook className="w-4 h-4 text-primary-foreground" strokeWidth={1.5} />
              </a>
              <a
                href="mailto:hello@lettersbyabbey.com"
                aria-label="Email us"
                className="w-10 h-10 rounded-full border border-muted-foreground bg-transparent flex items-center justify-center hover:border-secondary hover:bg-secondary transition-colors duration-200"
              >
                <Mail className="w-4 h-4 text-primary-foreground" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-crimson-text font-semibold text-sm uppercase tracking-wide text-accent mb-6">
              SHOP
            </h4>
            <nav className="space-y-3">
              <Link to="/shop" className="block font-crimson-text text-base text-primary-foreground hover:text-secondary transition-colors duration-200">
                All Collections
              </Link>
              <Link to="/shop" className="block font-crimson-text text-base text-primary-foreground hover:text-secondary transition-colors duration-200">
                Featured Letters
              </Link>
              <Link to="/cart" className="block font-crimson-text text-base text-primary-foreground hover:text-secondary transition-colors duration-200">
                Cart
              </Link>
            </nav>
          </div>

          {/* About Links */}
          <div>
            <h4 className="font-crimson-text font-semibold text-sm uppercase tracking-wide text-accent mb-6">
              CONNECT
            </h4>
            <nav className="space-y-3">
              <Link to="/about" className="block font-crimson-text text-base text-primary-foreground hover:text-secondary transition-colors duration-200">
                About Abbey
              </Link>
              <Link to="/contact" className="block font-crimson-text text-base text-primary-foreground hover:text-secondary transition-colors duration-200">
                Contact
              </Link>
              <Link to="/faq" className="block font-crimson-text text-base text-primary-foreground hover:text-secondary transition-colors duration-200">
                FAQ
              </Link>
              <Link to="/shipping" className="block font-crimson-text text-base text-primary-foreground hover:text-secondary transition-colors duration-200">
                Shipping
              </Link>
              <Link to="/returns" className="block font-crimson-text text-base text-primary-foreground hover:text-secondary transition-colors duration-200">
                Returns
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-muted-foreground"></div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="h-16 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 py-4 sm:py-0">
          <div className="font-crimson-text text-sm text-accent text-center sm:text-left flex items-center justify-center sm:justify-start">
            © 2025 Letters by Abbey. Made with
            <Heart className="w-4 h-4 mx-1 text-secondary" />
            and intention.
          </div>
          <div className="flex gap-6 justify-center sm:justify-end">
            <Link to="/privacy" className="font-crimson-text text-sm text-accent hover:text-secondary transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms" className="font-crimson-text text-sm text-accent hover:text-secondary transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
