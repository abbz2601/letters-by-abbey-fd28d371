import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Returns() {
  return (
    <div className="min-h-screen bg-background">
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      
      <main className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <h1 className="font-playfair-display text-5xl md:text-6xl text-foreground mb-8">
            Returns & <span className="italic">Exchanges</span>
          </h1>
          
          <div className="space-y-6 font-crimson-text text-lg text-muted-foreground leading-relaxed">
            <section>
              <h2 className="font-playfair-display text-2xl text-foreground mb-4">Our Commitment</h2>
              <p>
                Your satisfaction is our priority. Each letter is handcrafted with love and attention to detail. 
                If you're not completely satisfied, please let us know.
              </p>
            </section>
            
            <section>
              <h2 className="font-playfair-display text-2xl text-foreground mb-4">Return Window</h2>
              <p>
                You have 7 days from the date of delivery to contact us about any issues with your order.
              </p>
            </section>
            
            <section>
              <h2 className="font-playfair-display text-2xl text-foreground mb-4">How to Initiate a Return</h2>
              <p>
                Please contact us at hello@lettersbyabbey.com with your order number and a description of the issue. 
                We'll work with you to find a solution that makes you happy.
              </p>
            </section>
            
            <section>
              <h2 className="font-playfair-display text-2xl text-foreground mb-4">Custom Orders</h2>
              <p>
                Due to the personalized nature of our letters, custom orders are final sale. 
                However, if there's an error on our part, we'll make it right.
              </p>
            </section>
            
            <section>
              <h2 className="font-playfair-display text-2xl text-foreground mb-4">Questions?</h2>
              <p>
                If you have any questions about our return policy, please don't hesitate to reach out to us.
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
