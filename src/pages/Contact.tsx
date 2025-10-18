import SEO from "@/components/SEO";
import SkipLink from "@/components/SkipLink";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Instagram, Facebook } from "lucide-react";

export default function Contact() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Letters by Abbey",
      "email": "hello@lettersbyabbey.com",
      "url": "https://lettersbyabbey.com"
    }
  };

  return (
    <>
      <SEO
        title="Contact Us - Letters by Abbey | Get in Touch"
        description="Have questions about our handwritten letters? Contact Letters by Abbey via email, Instagram, or Facebook. We'd love to hear from you!"
        schema={contactSchema}
      />
      <SkipLink />
      <div className="min-h-screen bg-background">
        <div className="sticky top-0 z-50">
          <Header />
        </div>
        
        <main id="main-content" className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 md:px-8">
            <h1 className="font-playfair-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-8 text-center">
              Get in <span className="italic">Touch</span>
            </h1>
            
            <p className="font-crimson-text text-lg md:text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto leading-relaxed">
              Have a question or want to discuss a custom order? I'd love to hear from you.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <a
                href="mailto:hello@lettersbyabbey.com"
                className="flex flex-col items-center p-6 bg-muted hover:bg-muted/80 transition-colors focus:outline-none focus:ring-4 focus:ring-ring"
                aria-label="Email Letters by Abbey"
              >
                <Mail className="w-8 h-8 text-foreground mb-4" aria-hidden="true" />
                <h3 className="font-crimson-text text-lg font-semibold text-foreground mb-2">Email</h3>
                <p className="font-crimson-text text-muted-foreground text-center">hello@lettersbyabbey.com</p>
              </a>
              
              <a
                href="https://instagram.com/lettersbyabbey"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-muted hover:bg-muted/80 transition-colors focus:outline-none focus:ring-4 focus:ring-ring"
                aria-label="Follow Letters by Abbey on Instagram"
              >
                <Instagram className="w-8 h-8 text-foreground mb-4" aria-hidden="true" />
                <h3 className="font-crimson-text text-lg font-semibold text-foreground mb-2">Instagram</h3>
                <p className="font-crimson-text text-muted-foreground text-center">@lettersbyabbey</p>
              </a>
              
              <a
                href="https://facebook.com/lettersbyabbey"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-muted hover:bg-muted/80 transition-colors focus:outline-none focus:ring-4 focus:ring-ring"
                aria-label="Follow Letters by Abbey on Facebook"
              >
                <Facebook className="w-8 h-8 text-foreground mb-4" aria-hidden="true" />
                <h3 className="font-crimson-text text-lg font-semibold text-foreground mb-2">Facebook</h3>
                <p className="font-crimson-text text-muted-foreground text-center">Letters by Abbey</p>
              </a>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
}
