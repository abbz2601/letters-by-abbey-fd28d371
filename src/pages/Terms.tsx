import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background">
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      
      <main className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <h1 className="font-playfair-display text-5xl md:text-6xl text-foreground mb-8">
            Terms of <span className="italic">Service</span>
          </h1>
          
          <div className="space-y-6 font-crimson-text text-lg text-muted-foreground leading-relaxed">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            
            <section>
              <h2 className="font-playfair-display text-2xl text-foreground mb-4">Agreement to Terms</h2>
              <p>
                By accessing and using Letters by Abbey, you agree to be bound by these Terms of Service 
                and all applicable laws and regulations.
              </p>
            </section>
            
            <section>
              <h2 className="font-playfair-display text-2xl text-foreground mb-4">Use License</h2>
              <p>
                All letters and content are the intellectual property of Letters by Abbey. 
                Customers receive a personal use license for purchased items.
              </p>
            </section>
            
            <section>
              <h2 className="font-playfair-display text-2xl text-foreground mb-4">Order Processing</h2>
              <p>
                Orders are processed within 5-7 business days. Custom orders may require additional time. 
                We reserve the right to refuse or cancel any order at our discretion.
              </p>
            </section>
            
            <section>
              <h2 className="font-playfair-display text-2xl text-foreground mb-4">Contact Information</h2>
              <p>
                Questions about the Terms of Service should be sent to us at hello@lettersbyabbey.com
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
