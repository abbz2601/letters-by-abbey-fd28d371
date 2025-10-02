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
            <p>
              Welcome to Letters by Abbey, where every word is written with intention and care.
            </p>
            
            <p>
              In a world of instant messages and fleeting texts, I believe in the power of the handwritten word. Each letter I craft is a labor of love, designed to create meaningful connections and lasting memories.
            </p>
            
            <p>
              Whether you're celebrating a milestone, offering encouragement, or simply want to let someone know they're in your thoughts, a handwritten letter carries a weight and warmth that digital communication simply can't match.
            </p>
            
            <p className="text-foreground font-semibold text-xl">
              Every letter tells a story. Let me help you tell yours.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
