import { Link } from "react-router-dom";

export default function AboutSection() {
  return (
    <section className="bg-muted py-16 md:py-20 lg:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left Column - Text Content */}
          <div className="lg:pr-8">
            <h2 className="font-playfair-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight text-foreground mb-6 md:mb-8">
              Where words become{" "}
              <em className="italic">
                keepsakes, and letters become treasures.
              </em>
            </h2>

            {/* Pull Quote */}
            <div className="mb-8 pl-6 border-l-4 border-primary">
              <p className="font-playfair-display text-2xl md:text-3xl text-foreground italic leading-relaxed">
                "Words outlast us. They comfort when we're gone."
              </p>
            </div>

            <div className="space-y-6 font-crimson-text text-lg md:text-xl text-muted-foreground leading-relaxed">
              <p>
                Letters by Abbey was born from a belief that in our digital
                world, there's something irreplaceable about receiving a
                thoughtfully written letter.
              </p>

              <p>
                Each letter is crafted with intention, designed to arrive at the
                perfect moment when you need encouragement, celebration, or
                simply a reminder that you are seen and valued.
              </p>

              <p className="text-foreground font-semibold">
                Because some moments deserve more than a text message.
              </p>
            </div>

            {/* Call to Action Buttons */}
            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-crimson-text text-lg uppercase tracking-wide transition-colors duration-200"
              >
                Shop Our Collections
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-secondary text-secondary hover:bg-secondary hover:text-primary-foreground font-crimson-text text-lg uppercase tracking-wide transition-all duration-200 hover:scale-105"
              >
                Read Abbey's Story
              </Link>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/6956627/pexels-photo-6956627.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop"
                alt="Elegant handwritten letter with vintage wax seal on textured paper"
                className="w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] object-cover"
                loading="lazy"
              />

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-secondary opacity-30" aria-hidden="true"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-secondary opacity-20" aria-hidden="true"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
