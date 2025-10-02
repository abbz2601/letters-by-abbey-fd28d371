import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      
      <main className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <h1 className="font-playfair-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-8 text-center">
            About <span className="italic">Abbey</span>
          </h1>
          
          <div className="space-y-6 font-crimson-text text-lg text-muted-foreground leading-relaxed">
            <p>This began with a heartbreak I couldn't undo.</p>
            
            <p>
              There was someone in my life I couldn't save — though I would have given anything to. 
              In the silence that followed, I found myself clinging to his words. The things he had 
              said to me — reminders of my worth, moments of laughter, quiet encouragement — became a lifeline.
            </p>
            
            <p>I learned something I can never forget: words outlast us.</p>
            
            <p>
              They comfort when we're gone. They carry love across distance. They remind us that we mattered.
            </p>
            
            <p>That is why Letters by Abbey was born.</p>
            
            <p>
              Every letter I create carries a piece of that truth — that even when we cannot change an outcome, 
              we can leave behind words that heal, comfort, and stay.
            </p>
            
            <p>So these are not just letters. They are little legacies.</p>
            
            <p>
              For grief, for joy, for birthdays, for weddings, or for no reason at all. They are written with 
              the same care I once received when I needed it most. They are sealed as a reminder: in a world 
              that moves too fast, there is still space for love that lingers.
            </p>
            
            <p>I couldn't save him.</p>
            
            <p>But through this work, I can honour him.</p>
            
            <p>
              And I can give to others what was given to me — the right words, at the right time, to remind 
              you that you are not alone.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
