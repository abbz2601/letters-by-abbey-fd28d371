import SEO from "@/components/SEO";
import SkipLink from "@/components/SkipLink";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Shipping() {
  return (
    <>
      <SEO
        title="Shipping Information - Letters by Abbey"
        description="Free shipping on all handwritten letter orders. Learn about processing times, shipping methods, and tracking for Letters by Abbey."
      />
      <SkipLink />
      <div className="min-h-screen bg-background">
        <div className="sticky top-0 z-50">
          <Header />
        </div>
        
        <main id="main-content" className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <h1 className="font-playfair-display text-5xl md:text-6xl text-foreground mb-8">
            Shipping <span className="italic">Information</span>
          </h1>
          
          <div className="space-y-6 font-crimson-text text-lg text-muted-foreground leading-relaxed">
            <section>
              <h2 className="font-playfair-display text-2xl text-foreground mb-4">Processing Time</h2>
              <p>
                Each letter is handwritten with care. Please allow 5-7 business days for processing 
                before your order ships.
              </p>
            </section>
            
            <section>
              <h2 className="font-playfair-display text-2xl text-foreground mb-4">Shipping Methods</h2>
              <p>
                We offer free standard shipping on all orders within the United States. 
                Standard shipping typically takes 3-5 business days after processing.
              </p>
              <p className="mt-4">
                Expedited shipping options are available at checkout for an additional fee.
              </p>
            </section>
            
            <section>
              <h2 className="font-playfair-display text-2xl text-foreground mb-4">Tracking</h2>
              <p>
                Once your order ships, you'll receive a tracking number via email so you can 
                follow your letter's journey to your door.
              </p>
            </section>
            
            <section>
              <h2 className="font-playfair-display text-2xl text-foreground mb-4">International Shipping</h2>
              <p>
                International shipping is coming soon! Please check back or contact us for updates.
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
