import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Heart, Feather, Sparkles, ArrowLeft } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FEFCFB]">
      {/* Header */}
      <div className="sticky top-0 z-50">
        <Header />
      </div>

      {/* Back Navigation */}
      <div className="border-b border-[#F0E6E0]">
        <div className="max-w-4xl mx-auto px-6 md:px-8 py-4">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-[#A08B7A] hover:text-[#E8A088] transition-colors font-crimson-text"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[60vh] bg-[#FEFCFB]">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/6956625/pexels-photo-6956625.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Abbey writing a letter"
            className="w-full h-full object-cover"
            style={{ objectPosition: "50% 30%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/40"></div>
        </div>

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-4 max-w-3xl">
            <h1 className="font-playfair-display text-5xl md:text-6xl lg:text-7xl text-white mb-6">
              About <span className="italic">Abbey</span>
            </h1>
            <p className="font-crimson-text text-xl md:text-2xl text-white/90 leading-relaxed">
              Where words become keepsakes, and letters become treasures
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-[#FEFCFB]">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="text-center mb-12">
              <h2 className="font-playfair-display text-4xl md:text-5xl text-[#8B6F47] mb-6">
                Our <span className="italic">Story</span>
              </h2>
            </div>

            <div className="space-y-8 font-crimson-text text-lg md:text-xl text-[#8B6F47] leading-relaxed">
              <p>This began with a heartbreak I couldn't undo.</p>

              <p>
                There was someone in my life I couldn't save — though I would
                have given anything to. In the silence that followed, I found
                myself clinging to his words. The things he had said to me —
                reminders of my worth, moments of laughter, quiet encouragement
                — became a lifeline.
              </p>

              <p>
                I learned something I can never forget:{" "}
                <strong>words outlast us.</strong>
              </p>

              <p>
                They comfort when we're gone. They carry love across distance.
                They remind us that we mattered.
              </p>

              <p>That is why Letters by Abbey was born.</p>

              <p>
                Every letter I create carries a piece of that truth — that even
                when we cannot change an outcome, we can leave behind words that
                heal, comfort, and stay.
              </p>

              <p className="text-[#E8A088] font-semibold italic text-center text-2xl my-8">
                So these are not just letters. They are little legacies.
              </p>

              <p>
                For grief, for joy, for birthdays, for weddings, or for no
                reason at all. They are written with the same care I once
                received when I needed it most. They are sealed as a reminder:
                in a world that moves too fast, there is still space for love
                that lingers.
              </p>

              <p>I couldn't save him.</p>

              <p>But through this work, I can honour him.</p>

              <p className="text-[#E8A088] font-semibold">
                And I can give to others what was given to me — the right words,
                at the right time, to remind you that you are not alone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-20 bg-[#F9F6F3]">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-playfair-display text-4xl md:text-5xl text-[#8B6F47] mb-4">
              Our <span className="italic">Philosophy</span>
            </h2>
            <p className="font-crimson-text text-lg md:text-xl text-[#A08B7A] max-w-2xl mx-auto">
              Every letter we create is guided by these core beliefs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Intention */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#E8A088] rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-playfair-display text-2xl md:text-3xl text-[#8B6F47] mb-4">
                <span className="italic">Intention</span>
              </h3>
              <p className="font-crimson-text text-base md:text-lg text-[#A08B7A] leading-relaxed">
                Every word is chosen carefully, every sentiment crafted with
                purpose. We believe that intention transforms simple words into
                powerful messages.
              </p>
            </div>

            {/* Authenticity */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#E8A088] rounded-full flex items-center justify-center mx-auto mb-6">
                <Feather className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-playfair-display text-2xl md:text-3xl text-[#8B6F47] mb-4">
                <span className="italic">Authenticity</span>
              </h3>
              <p className="font-crimson-text text-base md:text-lg text-[#A08B7A] leading-relaxed">
                Our letters speak from the heart, avoiding empty platitudes in
                favor of genuine, honest expressions that resonate with real
                human experience.
              </p>
            </div>

            {/* Beauty */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#E8A088] rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-playfair-display text-2xl md:text-3xl text-[#8B6F47] mb-4">
                <span className="italic">Beauty</span>
              </h3>
              <p className="font-crimson-text text-base md:text-lg text-[#A08B7A] leading-relaxed">
                We create keepsakes that are as beautiful to behold as they are
                meaningful to read, because important messages deserve to be
                presented beautifully.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Touch Section */}
      <section className="py-16 md:py-20 bg-[#FEFCFB]">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/6956628/pexels-photo-6956628.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop"
                alt="Handwriting letters with care"
                className="w-full aspect-square object-cover"
              />
            </div>

            <div>
              <h2 className="font-playfair-display text-4xl md:text-5xl text-[#8B6F47] mb-6">
                A <span className="italic">Personal</span> Touch
              </h2>
              <div className="space-y-6 font-crimson-text text-lg text-[#8B6F47] leading-relaxed">
                <p>
                  When you order from Letters by Abbey, you're not just
                  purchasing a product— you're commissioning a small work of
                  art. Each letter is carefully handwritten, using quality paper
                  and thoughtfully selected words.
                </p>

                <p>
                  I take time with every piece, considering not just the message
                  but the recipient, the occasion, and the emotions we want to
                  convey. This isn't mass production; this is craftsmanship
                  applied to the written word.
                </p>

                <p className="text-[#E8A088] font-semibold">
                  Because in a world of instant messages, taking time is the
                  greatest gift we can give.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20 bg-[#F9F6F3]">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="font-playfair-display text-4xl md:text-5xl text-[#8B6F47] mb-6">
            Ready to Share Something <span className="italic">Beautiful?</span>
          </h2>
          <p className="font-crimson-text text-lg md:text-xl text-[#A08B7A] mb-8 max-w-2xl mx-auto">
            Let us help you create a moment that will be treasured long after
            it's opened.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/shop"
              className="inline-flex items-center px-8 py-3 bg-[#8B6F47] hover:bg-[#6D5235] text-white font-crimson-text text-lg uppercase tracking-wide transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#8B6F47] focus:ring-offset-2"
            >
              Shop Our Collections
            </a>

            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 border-2 border-[#8B6F47] text-[#8B6F47] hover:bg-[#8B6F47] hover:text-white font-crimson-text text-lg uppercase tracking-wide transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#8B6F47] focus:ring-offset-2"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

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
    </div>
  );
}
