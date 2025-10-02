export default function AboutSection() {
  return (
    <section className="bg-[#F9F6F3] py-16 md:py-20 lg:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left Column - Text Content */}
          <div className="lg:pr-8">
            <h2 className="font-playfair-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight text-[#8B6F47] mb-6 md:mb-8">
              Where words become{" "}
              <em className="italic">
                keepsakes, and letters become treasures.
              </em>
            </h2>

            <div className="space-y-6 font-crimson-text text-lg md:text-xl text-[#A08B7A] leading-relaxed">
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

              <p className="text-[#8B6F47] font-semibold">
                Because some moments deserve more than a text message.
              </p>
            </div>

            {/* Call to Action Buttons */}
            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="/shop"
                className="inline-flex items-center px-8 py-3 bg-[#8B6F47] hover:bg-[#6D5235] text-white font-crimson-text text-lg uppercase tracking-wide transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#8B6F47] focus:ring-offset-2"
              >
                Shop Our Collections
              </a>

              <a
                href="/about"
                className="inline-flex items-center px-8 py-3 border-2 border-[#8B6F47] text-[#8B6F47] hover:bg-[#8B6F47] hover:text-white font-crimson-text text-lg uppercase tracking-wide transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#8B6F47] focus:ring-offset-2"
              >
                Read Our Story
              </a>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/6956627/pexels-photo-6956627.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop"
                alt="Beautiful handwritten letter with wax seal"
                className="w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] object-cover"
              />

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-[#E8A088] opacity-30"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#E8A088] opacity-20"></div>
            </div>
          </div>
        </div>
      </div>

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
    </section>
  );
}
