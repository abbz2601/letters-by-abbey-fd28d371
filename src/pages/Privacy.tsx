import SEO from "@/components/SEO";
import SkipLink from "@/components/SkipLink";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy - Letters by Abbey"
        description="Learn how Letters by Abbey collects, uses, and protects your personal information. Your privacy is important to us."
      />
      <SkipLink />
      <div className="min-h-screen bg-background">
        <div className="sticky top-0 z-50">
          <Header />
        </div>
        
        <main id="main-content" className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <h1 className="font-playfair-display text-5xl md:text-6xl text-foreground mb-8">
            Privacy <span className="italic">Policy</span>
          </h1>
          
          <div className="space-y-6 font-crimson-text text-lg text-muted-foreground leading-relaxed">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            
            <section>
              <h2 className="font-playfair-display text-2xl text-foreground mb-4">Information We Collect</h2>
              <p>
                We collect information you provide directly to us when you place an order, create an account, 
                subscribe to our newsletter, or contact us for support.
              </p>
            </section>
            
            <section>
              <h2 className="font-playfair-display text-2xl text-foreground mb-4">How We Use Your Information</h2>
              <p>
                We use the information we collect to process your orders, communicate with you about your purchases, 
                send you marketing communications (with your consent), and improve our services.
              </p>
            </section>
            
            <section>
              <h2 className="font-playfair-display text-2xl text-foreground mb-4">Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information. 
                All payment information is processed securely through our payment processor.
              </p>
            </section>
            
            <section>
              <h2 className="font-playfair-display text-2xl text-foreground mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at hello@lettersbyabbey.com
              </p>
            </section>
          </div>
        </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
}
